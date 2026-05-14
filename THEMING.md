# Theming

Wuko's public theming surface is a small set of CSS custom properties (`--wuko-*`) on `:root`. Override any of them and every Wuko component picks up the new value: no rebuild, no JavaScript, no theme provider.

## Palette origin

Wuko's role tokens align with the Vex mascot palette. The dark-mode `--wuko-bg` (`#0f172a`) matches the mascot's navy outline, `--wuko-accent` (`#5eead4`) matches its mint fur, and `--wuko-gold` (`#d4a017`) matches its crown and glasses rim. Light-mode values are tuned for WCAG AA contrast on the inverted surface.

## Public role tokens

These are the contract. Override them; everything else is internal.

| Token | Dark | Light | Used for |
|---|---|---|---|
| `--wuko-bg` | `#0f172a` | `#f8fafc` | Page background |
| `--wuko-card` | `#1e293b` | `#ffffff` | Card / surface background |
| `--wuko-border` | `#334155` | `#e2e8f0` | Subtle dividers, card borders, decorative edges |
| `--wuko-heading` | `#e2e8f0` | `#0f172a` | High-contrast text (headings, titles) |
| `--wuko-text` | `#cbd5e1` | `#475569` | Primary body text |
| `--wuko-text-muted` | `#94a3b8` | `#64748b` | Supporting / secondary text |
| `--wuko-accent` | `#5eead4` | `#0f766e` | Primary accent (links, focus, primary CTA bg) |
| `--wuko-accent-hover` | `#2dd4bf` | `#0d9488` | Accent hover state |
| `--wuko-accent-active` | `#14b8a6` | `#134e4a` | Accent active/pressed state |
| `--wuko-danger` | `#e11d48` | `#dc2626` | Destructive action background (paired with white text) |
| `--wuko-danger-hover` | `#be123c` | `#b91c1c` | Destructive action hover state |
| `--wuko-danger-fg` | `#fb7185` | `#b91c1c` | Destructive foreground (error text & error border) on `--wuko-card` / `--wuko-bg` |
| `--wuko-success-fg` | `#10b981` | `#047857` | Success foreground (status badge text & border, success indicators) on `--wuko-card` / `--wuko-bg` |
| `--wuko-warning-fg` | `#f59e0b` | `#92400e` | Warning foreground (status badge text & border, warning indicators) on `--wuko-card` / `--wuko-bg` |
| `--wuko-gold` | `#d4a017` | `#d4a017` | Brand-fixed accent (decorative; not theme-adaptive) |

Two decorative tokens drive the hero backdrop. Override these to retheme `.grid-bg`:

| Token | Dark | Light | Used for |
|---|---|---|---|
| `--wuko-grid-line` | `rgba(51, 65, 85, 0.35)` | `rgba(203, 213, 225, 0.6)` | Hero grid line color |
| `--wuko-grid-glow` | `rgba(94, 234, 212, 0.18)` | `rgba(20, 184, 166, 0.14)` | Hero radial glow |

## Overriding

Override any token at any scope. Common patterns:

```css
/* Brand-tune the entire app */
:root {
  --wuko-accent: #a855f7;
  --wuko-accent-hover: #9333ea;
  --wuko-accent-active: #7e22ce;
}

/* Per-section override */
.docs-section {
  --wuko-bg: #050a14;
}

/* Per-component override */
<Card style={{ '--wuko-card': '#1a1f2e' }}>...</Card>
```

Tokens cascade. A child element inherits whatever tokens its ancestor sets.

## Theme switching

Themes are toggled by setting `data-theme="light"` (or omitting it for dark) on the `<html>` element. The relevant CSS:

```css
:root { /* dark values */ }
[data-theme="light"] { /* light values */ }
```

To avoid flash-of-unstyled-content (FOUC), the docs app inlines a synchronous script in `<head>` that reads `localStorage.getItem('wuko-theme')` and sets `data-theme` **before paint**. Pattern:

```html
<head>
  <script>
    (function () {
      try {
        var t = localStorage.getItem('wuko-theme');
        document.documentElement.dataset.theme = t === 'light' ? 'light' : 'dark';
      } catch (e) {
        document.documentElement.dataset.theme = 'dark';
      }
    })();
  </script>
</head>
```

The toggle button itself just flips `documentElement.dataset.theme` and writes the new value to `localStorage`: no React state, no `useEffect`, no hydration mismatch.

## What is NOT public

These are internal and may change without notice:

- **Raw color scales** (slate, teal, amber Tailwind palettes). Do not target `bg-ink-700`, `text-teal-300`, etc. directly. They are not exposed as Tailwind utilities. Use the `--wuko-*` tokens.
- **Per-component internal tokens** (button gradients, focus ring offsets, animation durations).
- **The exact CSS in `globals.css`**: keyframes, scrollbar treatment, `.grid-bg` implementation. Override the role tokens; do not patch the rules.
- **Spacing / radius / typography scales**: currently inherited from Tailwind defaults. Will be tokenized in a later phase if there's demand.

## WCAG AA contrast audit

Computed via WCAG 2.x relative luminance formula. **Targets: 4.5:1 body text · 3:1 large text & non-text UI · borders exempt per SC 1.4.11.**

### Dark mode

Background: `#0f172a` (L = 0.0088). Card: `#1e293b` (L = 0.0218).

| Foreground | on `bg` | on `card` | AA body | AA UI |
|---|---:|---:|:---:|:---:|
| `--wuko-heading` `#e2e8f0` | 14.49 | 11.86 | ✓ | ✓ |
| `--wuko-text` `#cbd5e1` | 12.03 | 9.85 | ✓ | ✓ |
| `--wuko-text-muted` `#94a3b8` | 6.96 | 5.70 | ✓ | ✓ |
| `--wuko-accent` `#5eead4` | 12.07 | 9.89 | ✓ | ✓ |
| `--wuko-danger-fg` `#fb7185` | 6.63 | 5.44 | ✓ | ✓ |
| `--wuko-success-fg` `#10b981` | 7.04 | 5.77 | ✓ | ✓ |
| `--wuko-warning-fg` `#f59e0b` | 8.31 | 6.81 | ✓ | ✓ |
| `--wuko-gold` `#d4a017` | 7.61 | 6.23 | ✓ | ✓ |

White text (`#ffffff`) on destructive surfaces:

| Surface | Ratio | AA body | AA UI |
|---|---:|:---:|:---:|
| `--wuko-danger` `#e11d48` | 4.70 | ✓ | ✓ |
| `--wuko-danger-hover` `#be123c` | 6.29 | ✓ | ✓ |

### Light mode

Background: `#f8fafc` (L = 0.9536). Card: `#ffffff` (L = 1.0).

| Foreground | on `bg` | on `card` | AA body | AA UI |
|---|---:|---:|:---:|:---:|
| `--wuko-heading` `#0f172a` | 17.07 | 17.86 | ✓ | ✓ |
| `--wuko-text` `#475569` | 7.24 | 7.58 | ✓ | ✓ |
| `--wuko-text-muted` `#64748b` | 4.55 | 4.76 | ✓ | ✓ |
| `--wuko-accent` `#0f766e` | 5.23 | 5.48 | ✓ | ✓ |
| `--wuko-danger-fg` `#b91c1c` | 6.18 | 6.47 | ✓ | ✓ |
| `--wuko-success-fg` `#047857` | 5.24 | 5.48 | ✓ | ✓ |
| `--wuko-warning-fg` `#92400e` | 6.78 | 7.09 | ✓ | ✓ |
| `--wuko-gold` `#d4a017` | **2.24** | **2.35** | ✗ | ✗ |

White text (`#ffffff`) on destructive surfaces:

| Surface | Ratio | AA body | AA UI |
|---|---:|:---:|:---:|
| `--wuko-danger` `#dc2626` | 4.83 | ✓ | ✓ |
| `--wuko-danger-hover` `#b91c1c` | 6.47 | ✓ | ✓ |

### Known exemptions and deferrals

- **`--wuko-border` (both modes)** is intentionally low-contrast (`#334155` dark / `#e2e8f0` light) for visual subtlety. Border ratios sit between 1.18 and 1.72 against bg/card. This qualifies for the **WCAG SC 1.4.11 non-text-content exemption**: borders are decorative chrome, not essential to understanding or operation. Form inputs, focus indicators, and other operationally-meaningful boundaries use stronger contrast tokens (`--wuko-accent` on focus, `--wuko-text` on labels).
- **`--wuko-gold` on light surfaces** fails AA as foreground text. `--wuko-gold` is a **brand-fixed decorative accent** (icon tints, badge fills) and is not intended for use as text on light backgrounds. If a future component needs gold-on-white text, the fix is to pair gold with a darker surrounding container (gold icon inside a `--wuko-card`-tinted pill) or to introduce a darker gold token at that time.
