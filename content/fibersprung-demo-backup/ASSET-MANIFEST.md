# FiberSprung Demo — Asset Manifest

Everything Cowork needs, where it goes, and what it's for.
Build target: **homepage only**, single page, static HTML/CSS/JS.

---

## Folder structure

```
fibersprung-demo/
├── BRIEF.md                        ← write this last; see "Brief" below
├── ASSET-MANIFEST.md               ← this file
│
├── design-system/
│   ├── fibersprung-design-system.html    ← tokens, type, colour, motion, page architecture
│   └── scroll-mechanic-reference.html    ← the pin / scale / overlap hero mechanic
│
├── brand/
│   ├── logo-primary.svg            ← white marks on brand green
│   ├── logo-white.svg              ← all white, transparent
│   ├── logo-ink.svg                ← graphite, transparent
│   ├── logo-green.svg              ← brand green, transparent
│   └── logo-source.jpg             ← 430px raster, fallback until Micah sends the real vector
│
├── images/
│   ├── 01-hero/
│   ├── 02-reveal/
│   ├── 03-technology/
│   ├── 04-process/
│   ├── 05-finished/
│   └── 06-people/                  ← RIGHTS PENDING, see notes
│
└── content/
    └── copy.md                     ← all real FiberSprung text, section by section
```

Rename every image to its **purpose**, not its origin. Cowork places files far more
reliably when the filename says what the image is for. Keep the location in the name
for alt text and captions.

---

## Images — rename map

### 01-hero/
| New filename | Source file | Notes |
|---|---|---|
| `hero-lattice-maple.jpg` | `FS_floor_-_Boston_-_Lattice_Beauty.jpg` | **The hero.** Best photograph they have. Black lattice over honey maple, low angle, receding to cool light. Keep its warmth — this is the one image that stays full colour above the fold. |
| `hero-alt-lattice-bw.jpg` | `FS_floor_-_Bayou_City_Ballet_-_progress.jpg` | Backup hero / major section anchor. B&W, grid receding under mirrored wall. |

### 02-reveal/
The transition from surface into substructure. Grid meeting finished floor in one frame.

| New filename | Source file | Notes |
|---|---|---|
| `reveal-grid-to-floor.jpg` | `FS_floor_-_Purchase_University_-_progress__2_.jpg` | **Key image.** Tight crop, bare grid left, finished plywood right. The "what's underneath" moment. |
| `reveal-wide-transition.jpg` | `FS_floor_-_Manhatten_install.jpg` | Wider version of the same idea, grid to finished. |

### 03-technology/
| New filename | Source file | Notes |
|---|---|---|
| `tech-lattice-bw.jpg` | `FS_floor_-_Pace_University_-_Progress__2_.jpg` | B&W lattice, gallery-clean. Section anchor. |
| `tech-lattice-wide.jpg` | `FS_floor_-_Houston_-_progress.jpg` | Whole floor of grid, shows scale. |
| `tech-grid-detail.jpg` | `FS_floor_-_University_St_Thomas_-_progress.jpg` | Grid over maple, red ductwork. Detail texture. |
| `tech-bend-test-diagram.jpg` | `FS_floor_-_Bend_test_illustration.jpg` | ⚠️ Generic three-point-bend diagram, not FiberSprung-specific. Use small, as an explanatory inset only. The **numbers** carry this section, not this image. |

### 04-process/
Five steps, in order. These are the panels going down.

| New filename | Source file | Notes |
|---|---|---|
| `process-01-grid-laid.jpg` | `FS_floor_-_Purchase_University_-_progress.jpg` | Wide grid installed, climbing wall visible. |
| `process-02-panels-down.jpg` | `FS_floor_-_Manhatten_-_progress__2_.jpg` | Long run of plywood beside exposed grid, columned hall. Strong image. |
| `process-03-panels-mid.jpg` | `FS_floor_-_Seatle_Movement_Arts_Center_-_progress.jpg` | Grid + plywood, workers present. |
| `process-04-grid-columned.jpg` | `FS_floor_-_Manhatten_-_progress__3_.jpg` | Grid in the grand columned room. |
| `process-05-subfloor.jpg` | `FS_floor_-_Westmont_IL_-_progress.jpg` | Plywood going over old tile. Transformation. |

### 05-finished/
The payoff. Colour restored.

| New filename | Source file | Notes |
|---|---|---|
| `finished-university-studio.jpg` | `FS_floor_-_Manhatten_-_finished__2_.jpg` | **Best finished shot.** Grey marley, tall windows, architectural character. |
| `finished-dark-studio.jpg` | `FS_floor_-_University_of_St_Thomas.jpg` | Dark floor, red ductwork, modern space. |
| `finished-edge-detail.jpg` | `FS_floor_-_Univ_St_Thomas_-_Edge_View.jpg` | Edge view showing floor build-up. |
| `finished-simple-studio.jpg` | `FS_floor_-_Phelan_Ca_-_completed.jpg` | Plain grey marley studio with barre. |
| `finished-plywood-mirror.jpg` | `FS_floor_-_Purchase_University_-_complete.jpg` | Pale floor, mirror wall, moody ceiling. |

### 05b-react/  ★ best-quality assets in the library
Professional product renders. Sharp, well lit, high resolution — the only images here
that were shot rather than documented. Use them where quality shows.

| New filename | Source file | Notes |
|---|---|---|
| `react-cutaway.jpg` | `FS_floor_-_Marley_seperated.jpg` | **The layers image.** Vinyl surface peeling back over woven fiberglass over foam. This is the "make the invisible visible" moment I'd proposed building a custom graphic for — it already exists, professionally rendered. Strong enough to anchor the technology section, not just the product entry. |
| `react-cutaway-alt.jpg` | `FS_floor_-_Marler_Grey_separated.jpg` | Same cutaway, grey variant. |
| `react-swatch-black.jpg` | `FS_floor_-_Marley_flat_black.jpg` | Black React on maple. Clean product shot. |
| `react-swatch-grey.jpg` | `FS_floor_-_Marley_Flat_Grey.jpg` | Grey React on maple. |
| `react-edge-macro.jpg` | `FS_floor_-_Marley_closeup.jpg` | Macro of the edge showing foam backing. Excellent as an abstract texture break between sections. |

⚠️ These carry a visible FiberSprung watermark in the corner. Fine on a FiberSprung site,
but crop it out where the image is used as texture rather than as a product shot.

### 06-people/ — ⚠️ RIGHTS PENDING
**Do not ship these until Micah confirms FiberSprung has usage rights, and that identifiable
people consented.** The event photo in particular shows recognisable faces. Build the layout
with them, but be prepared to swap for a marked placeholder.

| New filename | Source file | Notes |
|---|---|---|
| `people-class-in-motion.jpg` | `FS_floor_-_dancers__2_.jpg` | Best "life on the floor" image. Low res — contained size only, never full bleed. |
| `people-portable-event.jpg` | `FS_floor_-_protable_floor_dancers.jpg` | Only image showing portability — a floor deployed at an outdoor event. |
| `people-instructor.jpg` | `FS_floor_-_dancers.jpg` | B&W instructor teaching. Ties to the technical grade. |

---

## Do not use

| File | Why |
|---|---|
| `FS_floor_-_Manhatten_-_finished.jpg` | Noticeably blurry. |
| `FS_floor_-_Seatle_Movement_Arts_Center_-_complete__2_ / __3_ / __4_` | Three near-identical shots of the same empty room; pick at most one, and only if you need filler. |
| `FS_floor_-_Phelan_Ca_-_progress.jpg` | Redundant with stronger process images. |
| Any Junckers / competitor imagery | Wood flooring competitor. Never. |
| Stock dancers or stock studios | Micah explicitly prefers no stock, and the technical credibility depends on these being real. |

---

## Image preparation before the build

1. **Grade the technical layer.** Every image in `02-reveal/`, `03-technology/`, and
   `04-process/` gets the same cool near-monochrome treatment:
   `saturate(.15) contrast(1.06) brightness(1.02)`.
   This single pass is what makes a set of installer phone photos read as an authored
   body of work rather than a scrapbook.

2. **Leave `05-finished/` and `06-people/` in colour.** `saturate(1.02) contrast(1.03)`.
   The return of colour is the emotional beat.

3. **The hero is the exception.** `01-hero/hero-lattice-maple.jpg` keeps its warmth at
   full strength.

4. **Export sizes.** Each image at 1600px and 2400px wide, WebP with JPEG fallback.
   Hero also at 3200px. Never upscale — these are Facebook-compressed, so 2400px is
   the realistic ceiling for most.

5. **Alt text** goes in `content/copy.md`, one line per image, naming the institution.

---

## Still missing — ask Micah

| Item | Blocks | Priority |
|---|---|---|
| Original logo vector (AI/EPS/PDF) | Large logo display only. Header at 44px is fine with the raster. | Medium |
| Stacked / horizontal logo lockup (FS square + "FiberSprung" wordmark) | Header and footer. The kit only has the bare square; their merchandise and product watermarks use a lockup. | Medium |
| Stage Floor status — real product or still in development? | The Stage Floor page entirely. | **High** |
| Rights confirmation on the three dancer photos | `06-people/` shipping | **High** |
| Written confirmation of which institution names may be displayed | Recognition band | Medium |
| High-resolution originals of all install photos | Final build quality, not the demo | Medium |
| Patent PDFs (US10329777, US10731359, US11047138, US11655639, EP3966404) | Custom bend-test graphic, phase one | Low |

---

## Content file

`content/copy.md` should contain, section by section:

- Headline and subhead for each of the nine sections
- The three pillars (sustainability, consistency, support) rewritten tight from their site
- The origin story: Spencer Hering, the sprinkler failure, Harvey/Irma/Maria 2017,
  Micah Reyes and aerospace/yacht composites
- The bend test data: 10 beams, 2 suppliers, 1×4 pine, 3ft span, wood deflecting
  3–7mm inconsistently, fiberglass 3mm every time
- The comparison table, verbatim
- Product specs for FS Pro / Light / One / Go / React (heights, install times, users)
- Recognition names: Pace University, SUNY Purchase, NBC Universal, Hunter Dance Center,
  Newport Contemporary Ballet, Kanyok Arts Initiative, Bayou City Ballet,
  Traverse City Dance Project, Newnan Theater Company
- Contact: both phone numbers, Moasure, Full Circle Finance
- Alt text for every image

---

## Brief

Write `BRIEF.md` last, once the folder is populated. It should tell Cowork:

1. Read `design-system/fibersprung-design-system.html` first and treat it as binding.
2. Read `design-system/scroll-mechanic-reference.html` for the hero motion spec.
3. Build the nine sections in the order given in the design system's page architecture.
4. Use only images from `images/`, placed per this manifest.
5. Output semantic, accessible, SEO-structured HTML — one H1, logical heading order,
   alt text on every image, explicit image dimensions, no layout shift.
6. Build section by section and stop for review after each. Do not generate the whole
   page in one pass.
