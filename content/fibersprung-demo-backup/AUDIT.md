# Full-page audit — 2026-07-25

All eleven sections built. Results below, then the three tests that need a real
browser and could not be run in the build environment.

---

## Passed

| Check | Result |
|---|---|
| **Heading order** | One `h1`, no skipped levels, 25 headings end to end. |
| **Nav anchors** | All six in-page anchors resolve: `#top`, `#hero-title`, `#technology`, `#process`, `#range`, `#contact`. |
| **Image placement** | Every required image placed exactly once. No duplicates. Nothing placed that isn't in the mapping. |
| **Reserves** | All seven reserve files appear zero times, including `process-01-grid-laid.jpg` after it was superseded. |
| **Alt text** | Every placed image matches `copy.md` verbatim. No empty alt, no `role="presentation"`. |
| **Grades** | Technical on 04–06, payoff on 03, 08–11, hero unfiltered. The two CAD assets in step 01 correctly excluded. |
| **Rights-pending markers** | Byte-identical, brief's exact string, two open/close pairs. |
| **360px static risks** | No fixed widths above 360px, no `1fr` tracks without `minmax(0,…)`, images capped, overflow guard present. |
| **Table semantics** | 3 column headers, 7 row headers, 21 cells, 21 `data-label`s, ARIA roles survive the block-display switch at 720px. |
| **Contrast** | 13 of 14 text/background pairs pass AA. One fails — see below. |

### Progressive-enhancement cascade, proved from the stylesheet

Two rules in the entire stylesheet set `opacity: 0`, and both are scoped to
`.js`. With no `.js` class on `<html>`, neither can match, so every element
falls back to initial opacity. Under `prefers-reduced-motion`, both hidden
rules are overridden by later rules of equal-or-higher specificity inside the
media block.

This is a proof about the cascade, not a rendering test. See below.

---

## Failed — one item

### `--green-deep` does not pass on `--concrete-deep`

```
--green-deep #496F2A on --concrete       4.92:1   passes
--green-deep #496F2A on --concrete-deep  4.43:1   BELOW the 4.5 minimum
```

The design system specifies `--green-deep` as "4.92:1 on concrete, AA for text
on light" — but that was measured against `--concrete` only. `--concrete-deep`
is defined as the alternating band, and nothing had used it as a *text*
background until sections 08 and 11.

**Affected:** three strings.

- Section 08 eyebrow, "The range"
- Section 11 eyebrow, "Start a conversation"
- Section 08, the FS OUT tagline "— coming soon"

Everything else on both bands — body copy, spec keys, form labels — clears 4.5
comfortably. Awaiting a decision; nothing changed unilaterally, since this
touches a colour token.

---

## Not run — needs a real browser

No browser is available in the build environment and package installation is
blocked, so the following could not be genuinely exercised. Each is scripted
below with its expected result.

### 1. JS failure — the layered fallback

The guard has never been exercised against a real browser.

1. DevTools → Network → right-click `script.js` → **Block request URL**
2. Reload with the network panel open

**Expect:** `script.js` shows as blocked (red). The `<h1>` "Your Forever Floor",
the subhead and both CTAs are visible immediately. Every section is readable —
no blank regions where a reveal should be. `<html>` has no `js` class in the
Elements panel. No animation anywhere. Console shows no uncaught error.

**Fails if:** any section is blank, or the hero headline is missing. That means
a hidden state escaped the `.js` scope.

Repeat with JS fully disabled (DevTools → Settings → Debugger → Disable
JavaScript) — same expected result via a different path.

### 2. `prefers-reduced-motion`

DevTools → Rendering → **Emulate CSS media feature prefers-reduced-motion:
reduce**. Better still, toggle it at OS level, which also exercises the
`matchMedia` change listener.

**Expect:** hero renders at full bleed with headline, subhead and CTAs already
visible — no pin, no scale, no scrub on scroll. Section 02 does not overlap the
hero. Every `.js-reveal` element is visible at rest. No stagger delays. Scrolling
moves the page and nothing else.

**Fails if:** the hero frame is still scaled to 58%, or content appears only
after scrolling.

### 3. 360px

DevTools → device toolbar → 360×640.

**Expect:** no horizontal scrollbar anywhere. Comparison table is one block per
row with labelled values, not a horizontal scroller. Form is single column.
Process step 01's CAD render and drawing both fit. Both rights-pending images
stay small. Nav wraps rather than overflowing.

---

## Open items carried forward

See `copy-changes.md` for the full list — higher-resolution masters for the two
full-bleed images, a FiberSprung-specific bend test photograph, name and image
usage rights, and three copy edits pending Micah's approval.
