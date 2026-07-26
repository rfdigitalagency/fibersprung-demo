# BRIEF — FiberSprung Homepage Demo

**Read this file completely before writing any code.**

---

## What you are building

A single-page homepage demo for FiberSprung, a manufacturer of patented fiberglass
sprung flooring sold to universities, professional dance companies, and theaters.

Static HTML, CSS, and vanilla JavaScript. One `index.html`, one stylesheet, one script
file. No frameworks, no build step, no external dependencies except the two webfont
links specified in the design system.

This is a homepage only. Do not build additional pages, do not build navigation to
pages that don't exist, and do not invent content.

---

## Read these first, in this order

1. `design-system/fibersprung-design-system.html` — **binding.** Colour tokens,
   typography, spacing, motion, component patterns, and the page architecture. Every
   value in it is a decision already made. Do not substitute your own.
2. `design-system/scroll-mechanic-reference.html` — the hero motion spec. The
   pin/scale/overlap mechanic is implemented here in working code. Adapt it; don't
   reinvent it.
3. `content/copy.md` — all text. Use it verbatim.
4. `ASSET-MANIFEST.md` — background on where each image came from.

---

## How to work

**Build one section at a time. Stop after each and wait for review.**

Do not generate the entire page in one pass. After each section, output the code for
that section only, then list which image files you placed in it, then stop.

Order of build:

```
01  Hero
02  Recognition
03  Thesis
04  Reveal
05  Technology
06  Process
07  Comparison
08  Range
09  Origin
10  Payoff
11  Contact
```

---

## IMAGE PLACEMENT — STRICT

These rules are absolute.

1. Use **only** the filenames in the table below.
2. Place each image in **exactly** the section listed. One file, one slot.
3. **Never** substitute, duplicate, reuse, invent, generate, or source any image.
4. **Never** use stock photography, placeholder services, or AI-generated imagery.
5. If a file listed below is missing from the folder, **stop and report it.** Do not
   improvise a replacement.
6. After building each section, list every image filename you placed in it so
   placement can be verified.

### The mapping

| Section | Image file | Treatment |
|---|---|---|
| **01 Hero** | `01-hero/hero-lattice-maple.jpg` | The only image in this section. Full bleed after the scroll-scale completes. Keep full colour and warmth — this is the deliberate exception to the cool grade. Preload it; never lazy-load. |
| **02 Recognition** | *(none)* | Institution names are typeset, not logos. No imagery. |
| **03 Thesis** | `05-finished/finished-university-studio.jpg` | One image. Contained, not full bleed. Full colour. |
| **04 Reveal** | `02-reveal/reveal-grid-to-floor.jpg` | The only image. Full bleed. This is the transition into the dark sections. |
| **05 Technology** | `03-technology/tech-lattice-bw.jpg` | Section anchor, large. |
| | *(`react-cutaway.jpg` moved to **08 Range** 2026-07-25 — it illustrates the React surface, not the grid)* | |
| | `03-technology/tech-bend-test-diagram.jpg` | **Small inset only.** Generic diagram. The numbers carry this section, not this image. Never large, never a section anchor. |
| | `03-technology/tech-grid-detail.jpg` | Optional texture break. Use only if the section needs breathing room. |
| **06 Process** | `04-process/process-01-cad-render.jpg` | Step 01 — Design and planning. **Primary image for this step.** cad-fixed 2026-07-26: graphite background baked in (903×196), sits seamless on the dark section, untreated. **Do not apply the technical grade**; it would strip the green. Contained, max 980px native. |
| | `04-process/process-01-cad-layout.png` | Step 01, secondary. Transparent PNG, light lines, drops straight onto graphite. 477×401 native — **never display above 477px wide.** Optional; use only if step 01 needs a second visual. |
| | *(`process-01-grid-laid.jpg` — now unused, moved to reserves)* | Superseded. Showed a finished grid, which is the wrong stage for a step about CAD planning. |
| | `04-process/process-02-panels-down.jpg` | Step 02 — Pre-assembly and delivery |
| | `04-process/process-04-grid-columned.jpg` | Step 03 — The fiberglass grid |
| | `04-process/process-03-panels-mid.jpg` | Step 04 — The support surface |
| | `04-process/process-05-subfloor.jpg` | Step 05 — The performance surface |
| **07 Comparison** | *(none)* | The table is the content. No imagery. |
| **08 Range** | `05b-react/react-cutaway.jpg` | FS React entry, beside the "three layer composite" text. Payoff grade with the section. *(Moved from 05, 2026-07-25.)* |
| | `05b-react/react-swatch-grey.jpg` | FS React entry only. |
| | `05b-react/react-swatch-black.jpg` | FS React entry only, colour variant. |
| | *(none for Pro / Light / One / Go)* | These are spec-driven and typographic. Do not attach images to them. |
| **09 Origin** | `05-finished/finished-plywood-mirror.jpg` | One image, quiet. Let the story carry the section. |
| | `08-team/team-spencer.jpg` `-micah` `-zach` `-chase` `-andrea` | Team portraits, 2026-07-26. 120px square crops, technical-grade grayscale, name + three descriptors beneath. alt="" — the adjacent name is the text. |
| **10 Payoff** | `05-finished/finished-dark-studio.jpg` | Full colour. |
| | `05-finished/finished-simple-studio.jpg` | Full colour. |
| | `05-finished/finished-edge-detail.jpg` | Full colour. |
| | `06-people/people-class-in-motion.jpg` | ⚠️ **Rights pending.** Contained size only — this file is low resolution and must never be enlarged or used full bleed. |
| | `06-people/people-portable-event.jpg` | ⚠️ **Rights pending.** Contained size only. Illustrates portability. |
| **11 Contact** | *(none — `react-edge-macro.jpg` removed 2026-07-25: blurry, watermark cropped, added nothing. Now a reserve.)* | |

### Files present but NOT to be placed

Do not use these anywhere. They are reserves and alternates.

```
01-hero/hero-alt-lattice-bw.jpg        backup hero, unused
04-process/process-01-grid-laid.jpg    superseded by the CAD images, unused
04-process/process-01-cad-layout-light.jpg  light-surface original, unused (dark section)
02-reveal/reveal-wide-transition.jpg   alternate, unused
03-technology/tech-lattice-wide.jpg    reserve, unused
05b-react/react-cutaway-alt.jpg        grey variant of the cutaway, unused
05b-react/react-edge-macro.jpg         removed from 11 Contact 2026-07-25, unused
06-people/people-instructor.jpg        rights pending, unused
```

### Rights-pending handling

The two `06-people/` files placed in section 10 are marked ⚠️ because usage rights are
not yet confirmed. Build the layout with them, but wrap each in a clearly commented
block so they can be swapped or removed in one edit:

```html
<!-- RIGHTS-PENDING: swap or remove if usage not confirmed -->
```

---

## Image handling rules

- Every `<img>` gets `width` and `height` attributes. No layout shift, anywhere.
- Alt text comes from `content/copy.md`. Do not write your own.
- Hero is preloaded via `<link rel="preload">`. Everything else is `loading="lazy"`.
- Apply the two colour grades from the design system as CSS filters:
  - Technical layer — sections 04, 05, 06: `saturate(.15) contrast(1.06) brightness(1.02)`
  - Payoff layer — sections 03, 08, 09, 10: `saturate(1.02) contrast(1.03)`
  - Hero — section 01: **no filter.**
- Source images are compressed. Never upscale beyond native resolution, and never
  place a soft image at full bleed.

---

## Content rules

- Text comes from `content/copy.md` verbatim. Do not rewrite, embellish, or "improve" it.
- Do not add marketing adjectives. Their voice is plain and confident; that restraint is
  what makes the engineering claims believable.
- Figures are exact. The bend test numbers, product heights, install times, warranty
  terms, and comparison table values are reproduced as written. Do not round or
  generalise anything.
- All numerals render in the mono typeface, per the design system.
- One `<h1>` on the page. Logical `<h2>` / `<h3>` beneath it.

---

## Technical requirements

- Semantic HTML: `header`, `nav`, `main`, `section`, `footer`.
- Responsive down to 360px.
- Scroll-scrubbing disabled below 900px — use IntersectionObserver to play reveals once
  on entry instead.
- `prefers-reduced-motion` renders final states instantly.
- Animate `transform` and `opacity` only.
- Visible keyboard focus on every interactive element.
- 4.5:1 contrast minimum on all text.
- Meta title and description from `content/copy.md`.
- Logo: inline the SVG from `brand/` so fills can inherit CSS custom properties.

---

## What not to do

- Do not build additional pages.
- Do not add sections that aren't in the architecture.
- Do not use localStorage or sessionStorage.
- Do not add a cookie banner, chat widget, or newsletter signup.
- Do not use any image not listed in the mapping table.
- Do not generate the whole page in one response.

---

## Start here

Confirm you have read the design system and the copy file, list the image files you
found in `images/`, then build **section 01 (Hero) only** and stop.
