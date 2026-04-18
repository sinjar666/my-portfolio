# Accessibility Report — Comprehensive AAA Audit

Standard: WCAG 2.1 Level AAA target  
Date: 2026-04-18  
Scope: Entire single-page portfolio (light and dark mode)

## Executive Summary

- Status: PASS for the audited scope after remediation.
- Automated engine (axe-core): 0 violations in light mode, 0 violations in dark mode.
- High-risk AAA gaps found and fixed:
	- Low-contrast animated scroll-indicator text.
	- Multiple section/body texts using non-AAA gray shades.
	- Missing skip link for keyboard navigation.
	- Inconsistent focus-visible treatments.
	- Non-essential motion not honoring reduced-motion preferences globally.

## What Was Audited

- Semantic structure and landmarks: nav/main/footer navigation flow.
- Keyboard and focus behavior: visible focus ring, mobile menu semantics, escape handling.
- Color contrast across the rendered page in light and dark themes.
- Motion and animation behavior under `prefers-reduced-motion`.
- Accessible names for key interactive controls.

## Tooling

- Browser automation and rule audit: Puppeteer + axe-core.
- Additional contrast sampling script: custom scanner in `scripts/accessibility-audit.mjs`.
- Manual verification for controls using CSS custom property backgrounds (see Limitations section).

Audit command used:

```bash
AUDIT_URL=http://localhost:5174 node scripts/accessibility-audit.mjs > /tmp/portfolio-a11y-audit-after.json
```

## Baseline Before Fixes

- axe violations:
	- Light mode: 1
	- Dark mode: 1
- Primary failure:
	- `color-contrast` on animated scroll label in hero section.

## Remediation Implemented

### 1) Focus and keyboard access

- Added global `:focus-visible` outline treatment.
- Added a skip link at page start: "Skip to main content".
- Added `id="main-content"` target and made it programmatically focusable (`tabIndex={-1}`).
- Improved mobile menu accessibility:
	- `aria-expanded` and `aria-controls` on toggle.
	- Escape key closes menu.
- Added `aria-pressed` for theme toggle state.

### 2) Contrast remediation for text and chips

- Replaced low-contrast gray utility text in primary sections with theme tokens:
	- `text-foreground` for primary text.
	- `text-muted-foreground` for secondary/meta text.
- Replaced low-contrast skill/tag chip color combos with `bg-muted` + `text-muted-foreground`.
- Replaced gradient social cards in contact section with token-based glass surfaces to ensure reliable themed contrast.

### 3) Motion accessibility

- Wrapped app in `MotionConfig reducedMotion="user"`.
- Added global CSS reduced-motion fallback for transitions/animations.
- Removed opacity-dimming animation on scroll-indicator labels/icons to avoid transient contrast drops.

## Post-Fix Results

From `/tmp/portfolio-a11y-audit-after.json`:

- axe violation count:
	- Light mode: 0
	- Dark mode: 0

Manual confirmation for button/skip-link contrast pairs (token-based controls):

- Light: `#ffffff` text on `#6a5010` background = 7.59:1 (AAA)
- Dark: `#000000` text on `#d4aa40` background = 9.62:1 (AAA)

## Limitations and Notes

- The custom contrast scanner may emit false positives for some controls that use CSS custom-property `background` shorthand. For this reason:
	- Axe results and manual ratio checks were used as source of truth for final pass/fail.
- Decorative separators (timeline lines, subtle borders) are treated as non-informational visuals.

## Files Updated During Remediation

- `src/styles/theme.css`
- `src/app/App.tsx`
- `src/app/components/Portfolio.tsx`
- `src/app/components/Navigation.tsx`
- `src/app/components/sections/Hero.tsx`
- `src/app/components/sections/About.tsx`
- `src/app/components/sections/Projects.tsx`
- `src/app/components/sections/Experience.tsx`
- `src/app/components/sections/AboutDetails.tsx`
- `src/app/components/sections/Skills.tsx`
- `src/app/components/sections/Contact.tsx`
- `scripts/accessibility-audit.mjs`

## Compliance Statement

Based on automated axe checks (light and dark), manual contrast validation of critical tokenized controls, and implemented fixes above, the portfolio now satisfies the requested AAA-focused accessibility requirements for the audited UI scope.
