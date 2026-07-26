# Copy changes

Every deviation from `content/copy.md` in the built page, with the original text.

**Status of every entry below: PENDING — FiberSprung approval required.**
`BRIEF.md` marks copy.md verbatim and copy.md states FiberSprung holds final
approval on every word. Each change here was made knowingly and is reversible in
one edit; the original wording is reproduced in full both in this file and in an
HTML comment beside the change in `index.html`.

**Standing rules for anything added to this log**

- Words may be removed. Words may not be added.
- No marketing adjectives, ever.
- Figures are never rounded, generalised, or restated.
- Hedges (`designed to`, `typically`, `approximately`, `~`) are preserved
  character-for-character. They carry legal and engineering weight.

Scan times below are at 240 wpm, a comfortable silent reading pace.

---

## 03 · Thesis — pillar: Sustainability

**Reason.** The pillars were three walls of text behind "Read More" links on the
current site, and making them scan is one of the most visible before-and-afters
in this demo. This one opened with a single 40-word sentence and closed on the
only piece of marketing language in the block.

**Change.** Dropped the closing line. Split the opening sentence in two.
Nothing added.

**40 words → 28 · 10.0s → 7.0s**

### Before

> The materials within our fiberglass grid are chosen to have an over 30 year use
> life, and all of our floors are designed to be disassembled and moved without
> losing any of their spring. Protect your flooring investment with FiberSprung.

### After

> The materials in our fiberglass grid are chosen for an over 30 year use life.
> Floors are designed to disassemble and move without losing any of their spring.

**Preserved exactly:** `over 30 year use life` · the `designed to` hedge.

---

## 03 · Thesis — pillar: Support

**Reason.** The worst offender in the block: 53 words across four sentences,
with the actual point — damage is repairable in minutes for very little money —
arriving in sentence four. Sentence one was throat-clearing and sentence two
restated what sentence four said better.

**Change.** Cut sentences one and two. The point now lands first. Nothing added.

**53 words → 29 · 13.2s → 7.5s**

### Before

> Lifetime customer support begins with great design. FiberSprung floors are
> designed to be easily disassembled and repaired. Damage happens in studios
> sometimes, and it's no one's fault. Our fiberglass grid is designed to
> withstand water damage, and our floor surface can be lifted within minutes —
> ensuring minimal cost to repair a floor.

### After

> Damage happens in studios sometimes, and it's no one's fault. Our fiberglass
> grid is designed to withstand water damage, and the surface lifts within
> minutes — minimal cost to repair.

**Preserved exactly:** `designed to withstand water damage`. Flattening this to
"withstands water damage" would convert a statement of design intent into a
performance guarantee. It must not be reworded.

**Deliberately kept:** "Damage happens in studios sometimes, and it's no one's
fault." It is the warmest line in the block and the correct frame for what
follows. It was moved to the front, not trimmed.

---

## 08 · Range — eyebrow

**Type.** RF Digital correction — the only entry in this log that is not a
tightening. Micah can override it.

**Reason.** The section lists six entries: Pro, Light, One, Go, React and Out.
"Five floors" is defensible on a strict reading — React is a surface and Out is
an upgrade, so the count may deliberately exclude them — but a reader who counts
the entries finds six, and the discrepancy is the kind that erodes trust in a
page whose whole argument rests on precise figures. It is also brittle: it
breaks the moment the range is recategorised, a product is added, or Out ships.

**Change.** One label. Nothing else in the section is touched.

### Before

> Five floors

### After

> The range

**Why this wording.** Accurate under any grouping, immune to miscounting, and it
sits naturally above the existing H2, "One system, built to the room." It says
the same thing the heading already says rather than adding a claim.

**If Micah prefers a count**, "Six products" or "Five floors and a surface" both
work and are equally safe. The failure mode to avoid is a number that disagrees
with the list beneath it.

---

## 02 · Recognition — eyebrow

**Type.** RF Digital correction, part of the recognition-band rebuild (names
promoted from a 15px footnote to a ~22px credential wall). Micah can override.

### Before

> Installed and trusted at

### After

> Trusted by universities and companies nationwide

The original read as a label on a list; the rebuilt band is a claim, and the
eyebrow now states it. Institution names themselves are unchanged and remain
subject to written usage confirmation.

---

## Header — "Let's Chat" (addition)

**Type.** New string, not in copy.md. The design system's architecture notes:
"The chat function persists in the header on every page — it is the one
feature that already produces business." The button anchors to the contact
form pending a real chat integration. Wording is RF Digital's; Micah approves
or renames.

**Update 2026-07-25 (later):** relocated from the nav to a floating pill,
fixed bottom-right, visible at every scroll position. Same string, same
anchor. Note: the specified white-on-brand-green pill measures 2.75:1 —
below the 4.5:1 text floor. Built as specified; listed under open items.

---

## 01 · Hero — eyebrow (addition)

New string above the H1: "Patented fiberglass sprung flooring" — lifted
verbatim from the opening of the approved subhead, no new words invented.
Pending approval with the rest.

---

## 01 · Hero — subhead punctuation

**Type.** RF Digital correction. One character: the em dash becomes a period,
splitting the subhead into two sentences.

### Before

> Patented fiberglass sprung flooring for dance, theater, and performance —
> engineered to outlast the room it's installed in.

### After

> Patented fiberglass sprung flooring for dance, theater, and performance.
> Engineered to outlast the room it's installed in.

No words changed. "Engineered to outlast the room it's installed in." now
stands as its own sentence, which is where the weight of the line was anyway.

---

## 02 · Recognition — "and others" (deletion)

The footnote made sense under a typeset name list; under a wall of nine
logos it read as an apology. Names remain in the static list for assistive
tech. Restore in one edit if FiberSprung wants it back.

---

## Considered and left verbatim

| Location | Why it was left alone |
|---|---|
| **03 · Consistency pillar** | 38 words and 9.5s as prose, but the H3 plus the first sentence carry the entire point, so it scans in well under five seconds. "Day 1 to Day 3001" is theirs and excellent. No change. |
| **03 · Thesis body** | Reads long, but every clause is a distinct claim — spring, portability, resale, asset. Nothing is redundant. |
| **01 · Hero** | "Your Forever Floor" states the longevity thesis in three words. Untouchable. |

---

## Open items — needed from FiberSprung

| Item | Where | Detail |
|---|---|---|
| **Better source image wanted** | `03-technology/tech-bend-test-diagram.jpg` | Alt text now supplied and in copy.md — resolved. The remaining item is the image itself: it is a generic three-point bend test illustration, not FiberSprung's own apparatus, which is why the alt text stops short of claiming otherwise. If Micah has a photograph or diagram of the actual rig used for the ten-beam test, that is a straight upgrade — it would turn a stock-feeling illustration into evidence. Still a small inset either way. |
| **Higher-resolution masters** | `hero-lattice-maple.jpg`, `reveal-grid-to-floor.jpg` | Both run full bleed at 1440×1440 and upscale above a 1440px viewport. Swap notes are in the markup at both locations. |
| **Name and LOGO usage rights** | Section 02 | Written confirmation for all nine institutions — now more urgent, since the band displays their actual marks, not typeset names. NBC Universal is separately marked in the markup (all three occurrences). |
| **Logo file quality — three need replacing** | `images/07-recognition/` | **Pace**: sourced file has a stock-site checkerboard pattern baked into the background (fake transparency), partially masked by the multiply blend but visible on close inspection — request the official transparent asset. **Bayou City Ballet**: solid blue rectangle, no transparency; greyscales to a dark box rather than a floating mark. **SUNY Purchase**: white-background JPG; multiply hides the box on the light band but a transparent PNG/SVG is the real fix. |
| **Newnan hover state** | `images/07-recognition/` | White-on-transparent file, rendered dark via grayscale+invert. "Full colour on hover" cannot exist for a white mark on a light band — hover lifts it to full opacity but keeps the invert. A dark-on-transparent variant from Newnan resolves it. |
| **Chat pill contrast** | Floating action | White on #70AB41 = 2.75:1, below the 4.5:1 floor. Built as specified. Ink text on green, or white on --green-deep (#486D29, 4.56:1+), would pass. |
| **Image usage rights** | `people-class-in-motion.jpg`, `people-portable-event.jpg` | Marked rights-pending for section 10. Not yet placed. |

---

## Additions to copy.md

These are not deviations. `copy.md` was edited so it stays the single source of
truth for every word and every alt string on the page.

### `tech-bend-test-diagram.jpg` — alt text added

Added to the IMAGE ALT TEXT block, 2026-07-25, written by Ryan. It was the one
image of the twenty-six with no alt string; nothing was invented to fill the gap
in the interim.

> Diagram of a three-point bend test: a specimen supported at both ends by pins,
> with a loading pin applying force at the centre.

It describes a generic three-point bend test and stops deliberately short of
claiming the image shows FiberSprung's own apparatus, because it does not.

### Re-applied after the 2026-07-25 asset drop

`cad-assets.zip` overwrote `copy.md` with a version that did not carry the
bend-test alt string, so the addition above was lost and has been re-applied.
Flagging it because it will happen again: any future drop that replaces
`copy.md` wholesale will silently drop this line unless it is merged in first.
The alt-text audit in the verification pass catches it — it compares every
placed image against `copy.md` and reports a mismatch.

---

## Decisions taken

| Decision | Rationale |
|---|---|
| `react-edge-macro.jpg` deleted from 11 | Blurry, watermark only cropped rather than absent, added nothing above the form. Element removed entirely, file moved to reserves in the BRIEF. Ryan, 2026-07-25. |
| `react-cutaway-alt.jpg` — no action needed | Already a reserve; it has never been placed. Verified zero references. React shows exactly: grey swatch, black swatch, one cutaway. |
| `react-cutaway.jpg` → section 08 | Originally held in 05 per the mapping's section-assignment rule despite the "three layer composite" note pointing at 08. Ryan reversed this 2026-07-25: it illustrates the React surface, not the grid. Now beside the three-layer copy in 08, payoff grade, and the BRIEF mapping is updated to match. |
| Curly quotes around sponge “springs” | Typesetting, not editing. Not logged as a copy change — it would be noise in a log Micah has to review. |
| Step 01 uses both CAD assets | The render is a 4.78:1 strip. Alone in a step whose text is the longest of the five, it read thin against four substantial photographs. The dimensioned drawing is also the better match for copy about CAD files and quality tolerances. The mapping permits the second visual; this is the case it was written for. |
| Step-to-file offset preserved | Step 03 uses `process-04-grid-columned.jpg`, step 04 uses `process-03-panels-mid.jpg`. Filenames follow capture order, not step order. Confirmed by Ryan 2026-07-25 and commented in the markup so nobody "corrects" it later. |

---

## Additions — interface strings (not copy.md content)

| String | Where | Note |
|---|---|---|
| "Request pricing →" ×5 | 08 Range, under each floor | copy.md carries this CTA on React only; extended to Pro, Light, One, Go per RF Digital 2026-07-25. Text links, not buttons. |
| "Select one" | 11 Contact, both selects | Placeholder furniture so the selects don't render empty. |

---

## Change log

| Date | Section | Item | Status |
|---|---|---|---|
| 2026-07-25 | 03 Thesis | Sustainability pillar tightened | Pending approval |
| 2026-07-25 | 03 Thesis | Support pillar tightened | Pending approval |
| 2026-07-25 | 08 Range | Eyebrow "Five floors" → "The range" (RF Digital correction) | Pending approval |
| 2026-07-25 | 02 Recognition | Eyebrow "Installed and trusted at" → "Trusted by universities and companies nationwide" | Pending approval |
| 2026-07-25 | Header | "Let's Chat" button added (string not in copy.md) | Pending approval |
| 2026-07-25 | 01 Hero | Eyebrow "Patented fiberglass sprung flooring" added | Pending approval |
| 2026-07-25 | 01 Hero | Subhead em dash → period (two sentences) | Pending approval |
| 2026-07-25 | 02 Recognition | "and others" footnote removed with logo-wall rebuild | Pending approval |
| 2026-07-25 | 02 Recognition | Typeset names replaced with nine supplied logo files | Pending approval |
| 2026-07-25 | 05 Technology | Alt text added to copy.md for the bend test diagram | Resolved |
| 2026-07-25 | 05 Technology | `react-cutaway.jpg` placement confirmed in 05 | Superseded |
| 2026-07-25 | 05→08 | `react-cutaway.jpg` moved to the React entry; BRIEF updated | Resolved |
| 2026-07-25 | — | `cad-cropped.zip` never arrived; no .png ever existed on disk | Closed |
| 2026-07-26 | 06 Process | `cad-fixed.zip` received; render swapped (903×196, graphite bg, corners verified vs section base) | Resolved |
| 2026-07-26 | 09 Origin | Five team portraits received, named per person, placed with alt="" (adjacent names carry the text) | Resolved |
| 2026-07-25 | 05 Technology | Bend test: illustration beside intro, data row full width, ~30% tighter | Done |
| 2026-07-25 | 08 Range | "Request pricing →" links added to all five floors | Pending approval |
| 2026-07-25 | 11 Contact | `react-edge-macro.jpg` element deleted; form paired 2-col, 48px fields, focus ring, green submit, contact pills | Done |
