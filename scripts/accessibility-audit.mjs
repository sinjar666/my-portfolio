import { chromium } from "playwright";
import axe from "axe-core";
import { hex as contrastRatio } from "wcag-contrast";

const BASE_URL = process.env.AUDIT_URL ?? "http://localhost:5173";

const INTERACTIVE_SELECTOR = [
  "a[href]",
  "button",
  "input",
  "textarea",
  "select",
  "summary",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

async function analyzeTheme(page, theme) {
  await page.evaluate((value) => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(value);
  }, theme);

  await new Promise((resolve) => setTimeout(resolve, 150));

  await page.addScriptTag({ content: axe.source });
  const axeResults = await page.evaluate(async () => {
    return window.axe.run(document, {
      runOnly: {
        type: "tag",
        values: ["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa", "best-practice"],
      },
    });
  });

  const contrastFindings = await page.evaluate(() => {
    const MIN_RATIO_SMALL = 7;
    const MIN_RATIO_LARGE = 4.5;

    const parseColor = (color) => {
      if (!color) return null;
      const rgbaMatch = color.match(/rgba?\(([^)]+)\)/i);
      if (!rgbaMatch) return null;

      const parts = rgbaMatch[1].split(",").map((part) => part.trim());
      if (parts.length < 3) return null;

      const [r, g, b] = parts.slice(0, 3).map((value) => Number.parseFloat(value));
      const a = parts[3] === undefined ? 1 : Number.parseFloat(parts[3]);
      if ([r, g, b, a].some(Number.isNaN)) return null;

      return { r, g, b, a };
    };

    const flattenOn = (bg, below) => {
      const alpha = bg.a;
      const inv = 1 - alpha;

      return {
        r: bg.r * alpha + below.r * inv,
        g: bg.g * alpha + below.g * inv,
        b: bg.b * alpha + below.b * inv,
        a: 1,
      };
    };

    const rgbToHex = (rgb) => {
      const toPart = (n) => {
        const clipped = Math.max(0, Math.min(255, Math.round(n)));
        return clipped.toString(16).padStart(2, "0");
      };

      return `#${toPart(rgb.r)}${toPart(rgb.g)}${toPart(rgb.b)}`;
    };

    const bodyStyle = window.getComputedStyle(document.body);
    const bodyBackground = parseColor(bodyStyle.backgroundColor) ?? { r: 255, g: 255, b: 255, a: 1 };

    const getEffectiveBackground = (el) => {
      let current = el;
      let stack = { ...bodyBackground, a: 1 };

      while (current && current !== document.documentElement) {
        const style = window.getComputedStyle(current);
        const bg = parseColor(style.backgroundColor);

        if (bg && bg.a > 0) {
          stack = bg.a >= 1 ? { ...bg, a: 1 } : flattenOn(bg, stack);
        }

        current = current.parentElement;
      }

      return stack;
    };

    const isVisible = (el) => {
      const style = window.getComputedStyle(el);
      if (style.visibility === "hidden" || style.display === "none") return false;
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    };

    const elements = [...document.querySelectorAll("body *")];
    const findings = [];

    for (const el of elements) {
      if (!isVisible(el)) continue;
      if (el.closest("svg")) continue;
      if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(el.tagName)) continue;

      const text = el.textContent?.replace(/\s+/g, " ").trim() ?? "";
      if (!text) continue;

      const style = window.getComputedStyle(el);
      const color = parseColor(style.color);
      if (!color) continue;

      const bg = getEffectiveBackground(el);
      if (!bg) continue;

      const fontSize = Number.parseFloat(style.fontSize);
      const fontWeight = Number.parseInt(style.fontWeight, 10) || 400;
      const isLarge = fontSize >= 24 || (fontSize >= 18.67 && fontWeight >= 700);
      const minRatio = isLarge ? MIN_RATIO_LARGE : MIN_RATIO_SMALL;

      findings.push({
        selector: el.tagName.toLowerCase(),
        snippet: text.slice(0, 120),
        foreground: rgbToHex(color),
        background: rgbToHex(bg),
        minRatio,
        fontSize,
        fontWeight,
      });
    }

    return findings;
  });

  const contrastViolations = contrastFindings
    .map((item) => {
      const ratio = contrastRatio(item.foreground, item.background);
      return { ...item, ratio: Number(ratio.toFixed(2)) };
    })
    .filter((item) => item.ratio < item.minRatio)
    .slice(0, 120);

  const focusIssues = await page.evaluate((selector) => {
    const nodes = [...document.querySelectorAll(selector)];

    return nodes
      .filter((el) => {
        const style = window.getComputedStyle(el);
        const hasCustomFocus =
          style.outlineStyle !== "none" ||
          style.boxShadow !== "none" ||
          style.borderColor !== "rgba(0, 0, 0, 0)";

        return !hasCustomFocus;
      })
      .slice(0, 120)
      .map((el) => {
        const name =
          el.getAttribute("aria-label") ||
          el.getAttribute("title") ||
          el.textContent?.replace(/\s+/g, " ").trim() ||
          el.tagName.toLowerCase();

        return {
          tag: el.tagName.toLowerCase(),
          name: name.slice(0, 120),
        };
      });
  }, INTERACTIVE_SELECTOR);

  return {
    theme,
    axe: {
      violationCount: axeResults.violations.length,
      violations: axeResults.violations.map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        description: violation.description,
        help: violation.help,
        helpUrl: violation.helpUrl,
        nodes: violation.nodes.map((node) => ({
          target: node.target,
          failureSummary: node.failureSummary,
        })),
      })),
    },
    contrast: {
      checked: contrastFindings.length,
      failingCount: contrastViolations.length,
      failures: contrastViolations,
    },
    focus: {
      issueCount: focusIssues.length,
      issues: focusIssues,
    },
  };
}

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const context = await browser.newContext({
    viewport: { width: 1600, height: 2400 },
  });
  const page = await context.newPage();

  try {
    await page.goto(BASE_URL, { waitUntil: "networkidle" });

    const light = await analyzeTheme(page, "light");
    const dark = await analyzeTheme(page, "dark");

    const report = {
      auditedAt: new Date().toISOString(),
      url: BASE_URL,
      modes: { light, dark },
    };

    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
