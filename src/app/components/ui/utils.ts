import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const STYLE_TAG_ID = "__global-js-css__";

function getGlobalStyleSheet(): CSSStyleSheet | null {
  if (typeof document === "undefined") {
    return null;
  }

  let styleElement = document.getElementById(STYLE_TAG_ID) as HTMLStyleElement | null;

  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = STYLE_TAG_ID;
    document.head.appendChild(styleElement);
  }

  return styleElement.sheet as CSSStyleSheet | null;
}

export function ensureGlobalStyleRule(rule: string): void {
  const sheet = getGlobalStyleSheet();

  if (!sheet) {
    return;
  }

  const alreadyExists = Array.from(sheet.cssRules).some(
    (cssRule) => cssRule.cssText === rule,
  );

  if (!alreadyExists) {
    sheet.insertRule(rule, sheet.cssRules.length);
  }
}
