# LATHE & LACQUER — production notes

`sites/vinyl` · built from `briefs/vinyl.md`

**Status: Gate 2 open.** Brand, tokens, style tile and scaffold are in place. No credits
spent — every figure below came from `get_cost` preflights, which submit nothing. The
generation route and model tier are awaiting the user's decision.

---

## 0 — Generation route: ask, never assume

**Rule, set by the user on 2026-09-20 and binding on this repo going forward:**

> Do not propose Google Flow / Google AI Pro as the first or default generation route.
> **Ask the user which route they want.** Higgsfield MCP is the funded default.

The user only ever used Google Flow on the earlier sites (espresso, forged-knife,
lip-gloss) because the Higgsfield account was unfunded — 0.4 credits on the free plan,
less than a tenth of one clip. That was a workaround, not a preference, and treating it
as a standing route was wrong.

**Current state, checked live at Gate 2:** Higgsfield **Plus plan, 1,200.4 credits**.
Phase 3 therefore runs inside Higgsfield MCP rather than as a copy-paste prompt pack.
A `generation-prompts.md` pack is written **only** if the user picks an external route.

Never buy a top-up or a subscription on your own initiative.

## 1 — Direction

A reissue label and pressing house built on one idea: the scroll is a scrub head. The
page runs *backwards* through the manufacture of a record — from the stylus in the
groove, back through the press, back to the lacquer being cut — and then turns around and
comes forward into a room where someone is about to play one. The scroll indicator is a
track timecode, and it counts down through the reversed section.

The register is mid-century and unsentimental: grotesk body type, a wide slab wordmark,
a dark room with a single tungsten lamp. Heritage, but not nostalgic — the site's claim
is a manufacturing claim, so the copy talks about lathes and plating steps rather than
about warmth.

## 2 — Decisions taken at Gate 1

Answered by the user:

| Question | Answer |
|---|---|
| Brand name | LATHE & LACQUER (brief candidate, unmodified) |
| Palette | Brief palette, unchanged |
| Catalogue | Invented spiritual jazz reissues, 1968–1975 |
| Primary action | Buy a record; subscription and pressing enquiry secondary |
| Time direction | Keep the brief's reversal, with the timecode conceit |
| Hero shot (retake priority) | The stylus landing in the groove — it opens *and* closes the sequence |
| Record finish | Black 180g, high gloss, cream label |
| People in frame | Hands only, at the lathe |
| Budget | Started as `economy` ("cheap"); reopened after the credit top-up |

Decided without asking, and recorded here as assumptions:

- **Palette** taken from the brief unchanged: `--black #0D0D0D`, `--oxblood #6B1F22`,
  `--label-cream #E8DFC8`, `--tungsten #E0A44A`, `--dust #9A9287`. The brief specifies it,
  so it was not put to the user.
- **Catalogue, artists, titles and prices are invented** for an invented label:
  Vol. I *Ancestral Line*, Kofi Adjei (1971), £32 · Vol. II *Night Water*, The Marian Reed
  Quartet (1969), £28 · Vol. III *Harmattan Suite*, Delphine Okonkwo Trio (1974), £34.
  Within the brief's £28–£34 band.
- **Manufacturing claims** (Neumann VMS-70 lathe, one lacquer per side, three-step
  plating, 180g virgin vinyl, cut and pressed in England) are invented product copy.
- **Wordmark and symbol are drawn, not generated.** A generated wordmark is raster and
  would put type into pixels, which this repo forbids. The symbol is three groove walls
  with a cutting head crossing them — `public/logo-symbol.svg`. The wordmark is HTML type
  in a slab stack (`Rockwell` → `Roboto Slab` → `Bookman Old Style` → Georgia); no webfont
  is loaded, so the mark degrades to Georgia on systems with none of the first three.
  **Unverified:** how the slab fallback looks on Linux. Flagged rather than assumed.
- **Style tile** is at `style-tile.html` and reads the real `src/styles/tokens.css`.
  **Unverified:** it has not yet been rendered with its stylesheet applied — opening it
  as a local file in the preview pane produced a static snapshot with the relative
  stylesheet unresolved. To be checked against the Astro dev server in Phase 4 before any
  frames are generated.

## 3 — Model routing, and why (Gate 2)

Checked live with `models_explore`; the skill's cached table in `references/generation.md`
is close but not authoritative.

**The deciding axis is frame control, not cinematic quality.** This storyboard chains
scenes and reverses one of them, so a model without `end_image` cannot build it.

- **`veo3_1` accepts `start_image` only.** No end frame. It is the most cinematic model in
  the catalogue and the wrong tool here — every scene boundary would become an unguided
  cut. Ruled out on capability, not price. (`veo3_1_lite` does take `end_image`.)
- **`seedance_2_5` is the only model offering `mode: "video_extension"` with
  `extension_mode: "backward"`** — precisely what `briefs/vinyl.md` nominates for the
  reversal — and it reaches 30s, long enough to hold the whole journey in one take.
- **`seedance_2_0`** is strictly better than `seedance_2_0_mini` (4K, reference images,
  start+end) and was skipped in the first pass only because the balance was 0.4 credits.
- **`nano_banana_pro` costs 2 credits at 1k and at 2k**, so 2k is free relative to 1k.
  An earlier draft proposed `gpt_image_2_5` at 1 credit; that was a weak choice, made as a
  price probe rather than on merit, and is superseded.
- **Seedance pricing is linear in duration**, so chunking costs nothing: `seedance_2_5`
  720p is 7 credits/sec, `seedance_2_0` 720p std 4.5/sec, 1080p std 9/sec. One 30s take
  and five 6s takes cost the same; the real trade is seam count against retake cost.
- **Delivery width is 1280, which is exactly 720p's width.** A 1080p source buys only
  downscaling cleanliness.

### Preflighted prices — 6s, 16:9, silent

| Model | Config | Credits / 6s | Frame control |
|---|---|---|---|
| `veo3_1_lite` | default | 6 | start + end |
| `seedance_2_0_mini` | 720p | 6 | start + end |
| `seedance_2_0` | 720p std | 27 | start + end + refs |
| `seedance_2_5` | 720p | 42 | start + end + extension |
| `veo3_1` | 6s, high, preview | 43.5 | **start only** |
| `seedance_2_0` | 1080p std | 54 | start + end + refs |
| `cinematic_studio_3_0` | 1080p | 60 | start + end |
| `seedance_2_5` | 1080p | 72 | start + end + extension |

`nano_banana_pro`: 2 credits (1k or 2k). `gpt_image_2_5`: 1 credit.

### Options put to the user — 30s per orientation, both orientations, 7 stills

| | Model | Structure | Seams / orientation | Committed | One retake |
|---|---|---|---|---|---|
| A | `seedance_2_0` 720p | 5 × 6s | 4 | 284 | 27 |
| **B** (recommended) | `seedance_2_5` 720p | 16s + 14s | 1, inside the blur-through | 434 | 112 |
| C | `seedance_2_5` 720p | 1 × 30s | 0 | 434 | 210 |
| D | `seedance_2_0` 1080p | 5 × 6s | 4 | 554 | 54 |

B is recommended because seam count is where these sites fail, and linear pricing makes
two chunks cost the same as one while halving the price of a retake. The single seam sits
inside scene 03's blur-through, where the frame is entirely filled with black polymer —
invisible by construction rather than by luck.

### The probe — run 2026-09-20, 33 credits

Rather than guess at the quality gap, scene 01 was generated at 6s/720p/16:9 on two
models with an identical prompt and identical settings. Job IDs
`8bf1d278-cad1-4c5a-a88b-05b38a11301d` (mini, 6 cr) and
`6910a476-7875-4a3c-b3a0-939c7193d368` (2.0 std, 27 cr).

**A prompt defect, found by the probe and not a model fault.** Both models rendered a
literal brilliant-cut gemstone seated in the groove, because the prompt said "polished
diamond stylus tip". Every scene-01 prompt must describe the cantilever and a conical
tip and avoid the word "diamond" as a noun. Free to fix; would have occurred on any model.

**Measured comparison.** Dark-third figures are taken from the left third of frame, where
camera motion is least, so they isolate flicker from movement.

| | `seedance_2_0` std | `seedance_2_0_mini` |
|---|---|---|
| Held macro scale for 6s | yes | **no** — drifted to a wide turntable product shot |
| Dark-third mean luma | **7.6** | 36.9 (milky grey) |
| Dark-third per-pixel change per frame | **0.658** | 1.195 (1.8x) |
| Source MP4 bitrate | 2.1 Mbps | 11.1 Mbps |
| Delivery frame, 12fps/1280/WebP q72 | **20.0 KB** | 23.7 KB |

The deciding fault is the scale drift, not the noise. In a chained sequence every scene
must land on the framing that hands off to the next; mini failed to hold framing over six
seconds and would fail again at each seam. The black level is the second disqualifier —
the page background is `#0D0D0D` and at luma 36.9 mini's black reads as a grey rectangle
sitting on the page.

**A correction.** The 5x source-bitrate gap suggested mini's noise would inflate page
weight badly. It does not — WebP at q72 quantises most of it away and the real difference
is 19%. Recorded so the bitrate number is not re-used as an argument it cannot support.

**Page weight, re-measured rather than estimated.** At 20.0 KB per delivery frame the full
360-frame desktop sequence is **~7.2MB**, against the ~12MB estimated at Gate 2. These
frames are almost entirely black and compress far better than assumed. The Gate 2 offer to
drop to 10fps is therefore withdrawn as unnecessary.

**Recommendation: `seedance_2_0` std at 720p, 284 credits committed for the full build.**
**Approved by the user**, together with a move of all prices and locations to USD and the
United States (see §9).

## 3b — Generation, as actually run

**Clip structure — changed from the Gate 2 plan, and why.** Gate 2 priced five 6-second
scenes. The delivered structure is **four clips per orientation** totalling the same 30
seconds and the same credits, because Seedance prices linearly and chunking is free:

| Clip | Seconds | Carries | Chained by |
|---|---|---|---|
| A | 12 | Scenes 01 + 02 — macro groove to whole disc | `start_image` = scene-01 anchor |
| B | 6 | Scene 03, the press — **generated forward, reversed at extraction** | `start_image` = biscuit anchor, `end_image` = A's last frame |
| C | 6 | Scene 04, the lathe | `start_image` = biscuit anchor |
| D | 6 | Scene 05, the return to the room | `start_image` = C's last frame |

Scenes 01 and 02 merged into one 12s take because they are one continuous pull-back on one
set — merging removes a seam for free. Scene 03 must stay a clip of its own: it is the only
part of the sequence whose frames get reversed, so it cannot share a file with anything else.

**The reversal, concretely.** B is generated forward — platens closing onto molten PVC,
polymer filling the frame, a finished record revealed — with **A's last frame passed as B's
`end_image`**. Played backwards at extraction it reads as the record un-pressing into a
molten biscuit, and its last frame is B's first frame, which is the same biscuit anchor that
C starts from. So the chain closes on itself with no extra generation. The blur-through —
black polymer filling the lens — happens mid-clip inside B, not at a seam.

**Seams and where they fall:** A→B on the whole disc filling frame; B→C on the biscuit
anchor, which both clips share exactly; C→D on C's own last frame. Three seams per
orientation, all in dark or frame-filling moments.

**Stills.** Seven on `nano_banana_pro` at 2k. **Substitution disclosed:** the model was
requested as `nano_banana_pro` and the job results report the model as `nano_banana_2`. The
server routed it; the output is correct and text-free, but the returned model id does not
match the requested one and that is recorded rather than glossed.

**The prompt fix worked.** Scene-01 anchors describe "a slender tapered metal cantilever
ending in a tiny conical tip" and explicitly negate gemstones. No gemstone appeared in any
delivered asset.

**All three sleeves came back completely free of text**, which was the single highest-risk
item in the still pack. They are abstract painted compositions in the brand palette; every
word on a release page is HTML over them.

## 4 — Visual Story (proposed at Gate 2)

Five scenes, one continuous camera journey, no cuts. The brief's six beats collapse to
five: its "return" and "resolution" become one move, saving two clips.

| Scene | Visual story | Website copy |
| --- | --- | --- |
| **01 — Opening** (the groove) | Extreme macro. Canyon walls of black vinyl running diagonally, a stylus tip seated in the trough, one hard raking light from the left. A few large soft-focus dust particles drift through — cinematic, not grime. Camera begins to lift. Groove occupies the **lower-right diagonal; upper-left third held clean**. | LATHE & LACQUER · PRESSING № 1 / **The groove is the sound.** / Spiritual jazz, 1968–1975, cut from the original tapes on a Neumann lathe and pressed at 180 grams. Scroll to go backwards through it. / `Shop the first three` · `Vol. I — £32` |
| **02 — The spiral out** | One unbroken pull-back along the spiral while the disc rotates and accelerates. Groove becomes texture, texture becomes the full disc, the disc settles with its **blank cream label** centred. Scale collapses from microns to twelve inches without the camera blinking. Nothing but record in frame. | *No copy — let the motion lead* |
| **03 — BLUR-THROUGH** (the un-press) | The record un-presses. Steel platens part, the disc loses its edge and its face and becomes a glossy molten biscuit of black PVC, deforming, until black polymer fills the frame entirely. **Generated forward — platens closing on molten PVC — and reversed at extraction**, because models animate a press closing well and "un-pressing" not at all. Free, and better-looking. **Load-bearing beat; protected.** | *No copy — let the motion lead* |
| **04 — The lathe** | Out of the black polymer, further back in time. A cutting head rides a lacquer master under cold blue light, one fine black thread of swarf peeling away in real time and drawn off by the suction tube. **One pair of hands** steadies the head. Clinical, not romantic. Lathe **right of centre; left third clean**. | **Cut from tape. Never from a file.** / Every master is cut live to lacquer — one pass, no undo. That thread of swarf is the only trace of the take that will ever exist. Three plating steps later it becomes the stamper that presses your copy. / `Neumann VMS-70 · one lacquer per side · three-step plating · 180g virgin vinyl` |
| **05 — The return** | The camera reverses direction for the first time and travels forward out of the machine, past an oxblood sleeve, into a dark room. A turntable under one warm tungsten lamp. The tonearm descends on its own, the stylus lands, the record turns. Everything outside the lamp pool is black. Turntable **centre-left; right third dark and clean**. | **And then it is just a room, and a record.** / Free UK delivery over £60 · 30-day returns · Cut and pressed in England / `Shop the first three — from £28` |

**Hand-offs.** 01 never cuts to 02 — the lift *is* the transition. 02 ends on the whole
disc filling the frame, which is exactly the frame 03 starts from, because 03 is generated
with that frame as its *end* frame and then played backwards. 03 ends on black polymer
filling the lens, which is 04's start frame — the blur-through is the seam, which is why
it cannot be seen. 05 begins inside the machine and is the only scene where the camera
changes direction; that reversal is where the timecode stops running backwards.

## 5 — Scroll pacing (proposed; to be re-derived from delivered footage)

Container `1000vh`, stage `100vh` pinned → **9 viewport heights of active travel** on
desktop. Portrait `760vh` → **6.6 viewport heights**, because thumbs cover less distance
per effort. Both orientations share scroll boundaries, so the same scroll fraction shows
the same narrative beat on both.

```
                scroll         desktop f    portrait f   desktop f/vh
hold            0.000-0.050    0            0            — read the hero
the groove      0.050-0.190    0- 71        0- 59        56
the spiral      0.190-0.380   72-143       60-119        42   <- slowest, the scale collapse
hold            0.380-0.420   143          119           — the disc lands whole
the un-press    0.420-0.580   144-215      120-179       49   <- protected
the lathe       0.580-0.760   216-287      180-239       44
hold            0.760-0.800   287          239           — read the craft chapter
the return      0.800-0.950   288-359      240-299       53
hold            0.950-1.000   359          299           — read the CTA
```

Frame counts assume 12fps desktop / 10fps portrait over 30s. **These are estimates.** Real
boundaries get measured off the delivered footage and remapped, as on the previous sites.
The mapping stays a pure function of scroll position, so scrolling up retraces exactly.

### Page weight, stated rather than absorbed

Five 6-second scenes at 12fps/1280 is ~360 frames ≈ **12MB desktop**; portrait at
10fps/720 ≈ 4MB, and only one orientation loads per device. The `economy` tier's guideline
is ~6MB, so this is **double the tier guideline** — disclosed at Gate 2 rather than
quietly applied. Levers offered: 10fps desktop (~10MB), or four scenes instead of five
(~9.6MB). Recommendation was to ship at ~12MB, since frames are cached `immutable` and the
spiral is the shot the site is built on.

## 6 — Cost ledger

| Date | Job | Model | Credits | Job ID |
|---|---|---|---|---|
| 2026-09-20 | preflights (`get_cost`, nothing submitted) | various | 0 | — |
| 2026-09-20 | Probe — scene 01, 6s, 720p, 16:9 | `seedance_2_0_mini` | 6 | `8bf1d278-cad1-4c5a-a88b-05b38a11301d` |
| 2026-09-20 | Probe — scene 01, 6s, 720p, 16:9 | `seedance_2_0` std | 27 | `6910a476-7875-4a3c-b3a0-939c7193d368` |
| | | **Spent** | **33** | |

Balance at Gate 2: **1,200.4** (Plus). After the probe: **1,167.4**.

A preset recommendation ("IN THE DARK", `24bae836-2c4a-48e0-89b6-49fcc0b21612`) was
offered on the first submission and **declined** — a preset would have changed the look and
invalidated the A/B, which was the entire purpose of the probe.
