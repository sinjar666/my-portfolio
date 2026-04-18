# Accessibility Report — Terminal Color Theme

**Standard:** WCAG 2.1 Level AAA (contrast ratio ≥ 7:1 for normal text, ≥ 4.5:1 for large text/UI components)  
**Date:** 2026-04-18  
**File audited:** `src/styles/color-config-terminal.css`

---

## Summary

| Mode | Pairs audited | AAA ✅ | AA only ⚠️ | Fixed |
|------|--------------|--------|-----------|-------|
| Light | 13 | 13 | 0 | 8 pairs corrected |
| Dark | 18 | 18 | 0 | 5 pairs corrected |

All text and interactive color pairs now meet **WCAG 2.1 Level AAA** (≥ 7:1).

---

## Light Mode — Final Audit

Background: `#ffffff` | Card: `#ffffff` | Muted bg: `#c8c7bc`

| Color Pair | Ratio | Level | Status |
|---|---|---|---|
| Body text `#121212` on white | 18.73:1 | AAA | ✅ Pass |
| Section title `#6a5010` on white | 7.59:1 | AAA | ✅ Pass |
| Nav logo / Link `#5a4510` on white | 9.16:1 | AAA | ✅ Pass (was `#7a6010` → 5.99:1 AA) |
| Link hover `#3e2e0a` on white | 13.6:1 | AAA | ✅ Pass |
| Primary `#2c3d4b` on white | 11.19:1 | AAA | ✅ Pass |
| Secondary `#3f5260` on white | 8.12:1 | AAA | ✅ Pass (was `#60707d` → 5.11:1 AA) |
| Muted foreground `#323232` on white | 12.63:1 | AAA | ✅ Pass (was `#5d5e58` → 6.55:1 AA) |
| Muted foreground `#323232` on muted `#c8c7bc` | 7.54:1 | AAA | ✅ Pass (was `#5d5e58` → 3.85:1 AA-Large) |
| Accent fg `#ffffff` on accent `#5a4510` | 9.16:1 | AAA | ✅ Pass (was `#8a6c18` → 4.95:1 AA) |
| Button primary fg `#f8f5e6` on `#5a4510` | 8.37:1 | AAA | ✅ Pass (was `#7a6010` → 5.47:1 AA) |
| Button secondary fg `#121212` on `#f4f3ef` | 16.87:1 | AAA | ✅ Pass |
| Destructive `#8c2e29` on white | 8.27:1 | AAA | ✅ Pass (was `#ca6f67` → 3.51:1 AA-Large) |
| Destructive fg `#ffffff` on `#8c2e29` | 8.27:1 | AAA | ✅ Pass (was 3.51:1 AA-Large) |

### Light Mode — Changes Made

| Variable | Before | After | Old Ratio | New Ratio |
|---|---|---|---|---|
| `--secondary` | `#60707d` | `#3f5260` | 5.11:1 AA | 8.12:1 AAA |
| `--muted-foreground` | `#5d5e58` | `#323232` | 6.55:1 AA / 3.85 on muted | 12.63:1 AAA / 7.54 AAA |
| `--accent` | `#8a6c18` | `#5a4510` | 4.95:1 AA | 9.16:1 AAA |
| `--destructive` | `#ca6f67` | `#8c2e29` | 3.51:1 AA-Large | 8.27:1 AAA |
| `--button-primary-background` | `#7a6010` | `#5a4510` | 5.47:1 AA | 8.37:1 AAA |
| `--nav-logo` / `--link-color` | `#7a6010` | `#5a4510` | 5.99:1 AA | 9.16:1 AAA |
| `--timeline-dot` | `#b09030` | `#5a4510` | 3.05:1 AA-Large | 9.16:1 AAA |
| `--icon-background` | `#7a6010` | `#5a4510` | — | — |

---

## Dark Mode — Final Audit

Background: `#000000` | Card: `#131617`

| Color Pair | Ratio | Level | Status |
|---|---|---|---|
| Body text `#dcdad4` on black | 15.02:1 | AAA | ✅ Pass |
| Body text `#dcdad4` on card `#131617` | 13.01:1 | AAA | ✅ Pass |
| Section title `#d4aa40` on black | 9.62:1 | AAA | ✅ Pass |
| Section title `#d4aa40` on card `#131617` | 8.33:1 | AAA | ✅ Pass |
| Nav logo / Link `#c8a030` on black | 8.53:1 | AAA | ✅ Pass |
| Nav logo / Link `#c8a030` on card `#131617` | 7.38:1 | AAA | ✅ Pass |
| Link hover `#d8b840` on black | 10.85:1 | AAA | ✅ Pass |
| Primary `#aabfc1` on black | 10.93:1 | AAA | ✅ Pass |
| Primary `#aabfc1` on card `#131617` | 9.47:1 | AAA | ✅ Pass |
| Secondary `#a0b3be` on black | 9.49:1 | AAA | ✅ Pass (was `#8a9ba5` → 7.31 AAA on black) |
| Secondary `#a0b3be` on card `#131617` | 8.39:1 | AAA | ✅ Pass (was `#8a9ba5` → 6.33:1 AA) |
| Muted foreground `#aeada6` on black | 8.08:1 | AAA | ✅ Pass (was `#888880` → 5.88:1 AA) |
| Muted foreground `#aeada6` on card `#131617` | 7.00:1 | AAA | ✅ Pass (was `#888880` → 5.09:1 AA) |
| Accent fg `#000000` on accent `#c8a030` | 8.53:1 | AAA | ✅ Pass |
| Button primary fg `#e8e4d8` on `#2e2008` | 12.46:1 | AAA | ✅ Pass |
| Destructive `#ef9992` on black | 9.64:1 | AAA | ✅ Pass (was `#ca6f67` → 5.98:1 AA) |
| Destructive `#ef9992` on card `#131617` | 8.35:1 | AAA | ✅ Pass (was `#ca6f67` → 5.18:1 AA) |
| Timeline dot `#c8a030` on black | 8.53:1 | AAA | ✅ Pass |

### Dark Mode — Changes Made

| Variable | Before | After | Old Ratio (on card) | New Ratio (on card) |
|---|---|---|---|---|
| `--secondary` | `#8a9ba5` | `#a0b3be` | 6.33:1 AA | 8.39:1 AAA |
| `--muted-foreground` | `#888880` | `#aeada6` | 5.09:1 AA | 7.00:1 AAA |
| `--destructive` | `#ca6f67` | `#ef9992` | 5.18:1 AA | 8.35:1 AAA |

---

## Notes

- **Decorative elements** (timeline line, borders, hero ring) are exempt from contrast requirements per WCAG 1.4.11 Non-text Contrast, as they serve as separators rather than informational content.
- **Muted background** (`#c8c7bc`) is used as a non-interactive chip/badge background only. Text placed on it uses `--muted-foreground` (`#323232`) which achieves 7.54:1 AAA.
- **Icon backgrounds** use `--icon-background` as a solid background for icon glyphs. The icon glyph itself is white, achieving 9.16:1 AAA in light mode and sufficient contrast in dark mode.
- All contrast ratios calculated using the WCAG 2.1 relative luminance formula (IEC 61966-2-1 sRGB transfer function).
