# OKUMI — production notes

Site: `sites/forged-knife` · Brief: `.claude/skills/cinematic-site/briefs/forged-knife.md`
Started 2026-09-19. Built as a **real storefront**, not a labelled demo: no demo badge,
no disclaimer footer, no `noindex`.

**The copy is placeholder and must be replaced before trading.** The brand, the smith's
story, the founding year, the output rate, the lead time, every specification figure
(VG-10, 61 layers, 61 HRC, 198 g, 15° a side) and all five prices are invented to give
the layout real content. They read as fact to a visitor. Swap them for your own in
`src/content/site.ts` before the site takes an order.

No real brand, maker or forge is named or implied.

---

## 1 — Direction

Locked at Gate 1. Every row below was the user's explicit choice from the interview, not
an assumption.

| Decision | Value |
|---|---|
| Brand name | **OKUMI** — the brief's first candidate |
| Palette | Brief palette unmodified: `--soot #0A0A0B` `--ember #D8551F` `--forge-gold #E8A33D` `--steel #6E7B85` `--ash #CFC8BE` |
| Type | Condensed industrial sans headings (Archivo Narrow) + serif body (Source Serif 4) + mono specs (IBM Plex Mono) — the brief's direction, inverted from the espresso site |
| Blade surface | 61-layer damascus, flowing watery pattern, mirror bevel |
| Handle | Octagonal pale ho wood, buffalo horn collar |
| Maker story | Solo smith — first-person copy voice throughout |
| Specs | Full mono spec block |
| Catalogue | Five SKUs, prices shown, £180–£620 |
| Primary action | Buy |
| Ending frame | Tomato on end-grain wood (brief default, confirmed at Gate 2) |

**Assumptions recorded (not user decisions):** all specification figures; all five
prices; the 2019 founding year, the ~12 knives a month output and the 6–8 week lead
time; the free-resharpening-for-life policy; the `orders@okumi.example` address; all
body copy.

## 2 — Budget

Requested "keep it cheap" → resolved to **`--budget economy`**: 720p source, 5s scenes,
standard bitrate, 1 retake, medium/1k stills, 15fps delivery, 1280px delivery width.
No `--cap` set.

**Superseded at Gate 2** — see §5. Generation moved off Higgsfield onto the user's
Google AI Pro plan, which removes the credit constraint from the generation axes while
delivery fps and width still govern page weight. Scene duration accordingly rises from
5s to Veo's 8s cap. Delivery targets to be measured in §6 once footage lands.

## 3 — Visual Story (approved at Gate 2, verbatim)

Six brief beats compressed to four scenes — that was the economy decision. Beats 1+2
(fire and hammer) share one camera move; beats 4+5 (emergence and honing) share the
travel along the edge. The quench and the final cut keep their own clips.

| Scene | Visual story | Website copy |
| --- | --- | --- |
| **01 — Opening** (fire, then the hammer) | Black frame. One orange glow, far out of focus. Camera pulls back slowly: a bar of steel at white heat resting in the coals, the fire breathing over it. The bar is drawn to the anvil and the first blow lands — hammer head fully visible at the top of its arc, then contact, then rebound — and the camera tracks along the steel as it flattens and lengthens. Sparks arc toward the lens and die. Hands only as backlit silhouette. Subject centre-right; **upper-left third held clean**. | OKUMI · FORGED BY ONE PAIR OF HANDS / **The blade remembers the fire.** / Every knife starts as a bar of steel at 1,200°C and ends on a whetstone. One smith, one forge, no production line. / `Shop the collection` · `The Gyuto 210` |
| **02 — BLUR-THROUGH** (the quench) | The glowing blade drops edge-first into the oil. Steam and vapour bloom violently and swallow the entire frame — the wall of vapour crossing the lens *is* the transition. Nothing of the forge and nothing of the finished blade shares a frame with it. **Load-bearing beat; protected.** | *No copy — let the motion lead* |
| **03 — Development** (emergence and honing) | The vapour thins onto a dark, oxidised, unfinished blade, cooling matte. Without a cut the camera drops to extreme macro and travels *along the edge* as the whetstone passes. In its wake a mirror bevel and a flowing watery damascus layering emerge, tack sharp at maximum magnification. Edge runs lower-left to upper-right; **right third clean**. | **Sixty-one layers, one edge.** / Folded damascus over a hard core, ground to a mirror bevel at 15° a side. The pattern isn't printed on — it's what steel does when you fold it sixty-one times. / `VG-10 core · 61 layers · 61 HRC · 210mm · 198g · octagonal ho wood` |
| **04 — Resolution** (the cut) | Camera pulls back fast. The finished knife is mid-air over a tomato standing on end-grain wood; it passes through and the halves fall apart, blade still in motion, shallow depth of field. Board and tomato lower-centre; **negative space upper-left**. | **Then it disappears into the work.** / Numbered, sharpened by hand, delivered in a waxed canvas roll. Currently 6–8 weeks from order to door. / `Buy the Gyuto 210 — £620` |

**Hand-offs.** 01 ends with the blade at orange heat already lifting off the anvil, so 02
opens on that same blade travelling — no new location. 02's vapour bloom is the only
place a state change this violent can hide, which is why the forge never appears after it
and the finished blade never appears before it. 03 emerges from inside that vapour,
physically where 02 left the camera, and the honing is a continuation of the same descent
to macro rather than a new setup. 04 is that same camera reversing out — the board and
the tomato arrive as the lens retreats.

## 4 — Scroll pacing (approved at Gate 2, verbatim)

Container `700vh`, stage `100vh` pinned → **600vh active travel**. Frame numbers assumed
4 × 5s at 15fps = 300 at the time of approval; they are restated in §6 against the
measured footage.

```
hold                                   frames   0–  0    0.6 vh — read the hero
01 — Opening (fire + hammer)           frames   0– 74    1.44 vh  (~51 f/vh)
  enters/exits : coals and anvil only; oil tank never visible; no finished blade
  framing      : macro pull-back, subject centre-right, upper-left third clear
  behaviour    : continuous — camera must not settle between blows

02 — BLUR-THROUGH (protected)          frames  75–149    1.32 vh  (~57 f/vh)
  enters/exits : forge exits with the blade; vapour fills frame; whetstone not yet present
  framing      : subject fills frame, no copy space needed
  behaviour    : slowest mapping in the build, deliberately — most frames per scroll

03 — Development (emerge + hone)       frames 150–224    1.56 vh  (~48 f/vh)
  enters/exits : whetstone enters bottom of frame; board and tomato NOT yet visible
  framing      : extreme macro along the edge, right third clear for copy
  behaviour    : continuous travel; sharp at maximum magnification, never blurred

hold                                   frames 224–224    0.24 vh — the finished edge lands

04 — Resolution (the cut)              frames 225–299    0.6 vh   (~125 f/vh)
  enters/exits : fast pull-back; board, tomato and room arrive as the lens retreats
  framing      : subject lower-centre, negative space upper-left
  behaviour    : fast by design — the cut should feel like it happens to you

hold                                   frames 299–299    0.24 vh — read the CTA
```

**Chapter alignment follows the footage, not layout preference.** Scenes 01 and 04 hold
their negative space upper-left, so those chapters sit on a left rail. Scene 03 runs the
blade lower-left to upper-right, so its clean third is on the **right** and that chapter
is right-aligned — and the stage scrim rakes from whichever side the active chapter is
on. A fixed left scrim would have darkened the wrong half for a third of the story.

## 5 — Cost ledger

### Higgsfield preflight at Gate 2 (all figures live `get_cost`, nothing submitted)

| Line | Model / params | Qty | Each | Total |
|---|---|---|---|---|
| Keyframe landscape | `gpt_image_2_5` 1k medium 16:9 | 1 | 1.0 | 1.0 |
| Keyframe portrait | `gpt_image_2_5` 1k medium 9:16 | 1 | 1.0 | 1.0 |
| Landscape clips | `seedance_2_0_mini` 5s 720p | 4 | 12.5 | 50.0 |
| Portrait clips | `seedance_2_0_mini` 5s 9:16 | 4 | 12.5 | 50.0 |
| Product stills | `gpt_image_2_5` 1k medium | 5 | 1.0 | 5.0 |
| Logo concepts | `recraft_v4_1` vector 1k | 3 | 2.5 | 7.5 |
| | | | **Committed** | **114.5** |

Worst case with economy's single retake budget (one landscape + one portrait redo):
139.5. Other preflights taken for comparison: `seedance_2_5` 5s 720p = 35.0 (the only
extension-capable model, so true continuity on Higgsfield would have cost 294.5 for this
build); `kling3_0_turbo` 5s 720p = 7.5 (start-image only — four connected scenes would
show a visible jump at every seam); `veo3_1_lite` 4s = 4.0.

### Actual Higgsfield spend: **0 credits**

Balance was **10 credits, free plan** — less than the 12.5 of a single cheapest usable
clip. Nothing was submitted. No subscription or top-up was purchased; that decision was
left to the user, who chose the external route instead.

### Resolution

The user holds a Google AI Pro plan (Nano Banana Pro + Google Flow / Veo 3.1). Generation
moved there, as it did for `sites/espresso`. Prompt pack written to
`generation-prompts.md` — **fully copy-paste at the user's request**, every scene and
still spelled out in full with no "as above with changes" abbreviations.

Consequences, disclosed rather than absorbed silently:

- **Continuity improves.** Flow's *Extend* continues the actual clip, the "best" tier —
  what Higgsfield would have charged 35/clip for. Path A is one continuous file per
  orientation. Path B (Frames to Video chaining) is the fallback and needs every seam
  inspected.
- **Logo route changes.** Nano Banana Pro is raster, so there is no vector master from
  it. Instead: symbol concepts generated as *reference only*, the mark redrawn by hand as
  inline SVG (`public/logo-symbol.svg`), and the wordmark set in HTML type. Net result is
  a genuine vector master and selectable type — better than the raster path, and it keeps
  the no-text-in-pixels rule intact.
- **Scene duration rises** from 5s to Veo's 8s cap, which raises frame counts and so page
  weight. Measured in §6 on delivery.

## 6 — Assets and delivery settings

**Not yet measured — the footage has not been generated.** This section is filled in from
real extractions on disk, never from prediction.

### Awaiting delivery into `_incoming/`

| Asset | Status |
|---|---|
| `symbol-01..04.png` | pending |
| `keyframe-landscape.png`, `keyframe-portrait.png` | pending |
| `desktop.mp4` (Path A) or `desktop-01..04.mp4` (Path B) | pending |
| `portrait.mp4` (Path A) or `portrait-01..04.mp4` (Path B) | pending |
| 5 product stills | pending |

### Placeholders currently shipping, and what replaces each

Everything below is deliberately a placeholder, resolves with a 200, and is named so it
cannot be mistaken for finished work.

| Placeholder | Replaced by |
|---|---|
| `public/posters/placeholder-desktop.svg` | `public/posters/desktop.webp` (frame 0 of `desktop.mp4`) |
| `public/posters/placeholder-mobile.svg` | `public/posters/mobile.webp` (frame 0 of `portrait.mp4`) |
| `public/products/{gyuto,santoku,petty,whetstone,roll}.svg` | the `.webp` product stills; `image:` paths in `site.ts` change extension |
| `public/frames/manifest.json` with `count: 0` | the real manifest, written from files on disk |
| `public/logo-symbol.svg` | nothing — this is the real hand-drawn vector master. The generated symbol concepts are reference only and are never shipped. |

**The `count: 0` manifest is load-bearing.** While it holds, `ScrollStage.astro` never
constructs the engine, never requests a frame, collapses the stage to zero height and
serves the composed-still path — the same path reduced-motion visitors always get. The
site is complete and usable in that state; it simply has no film yet. Nothing anywhere
claims a sequence exists.

### Delivery targets (economy tier, to be confirmed by measurement)

Desktop 15fps / 1280 wide, portrait 15fps / 1080 wide, `cwebp -q 85` / `-q 82`.
Ceilings: **≤ 18MB desktop, ≤ 10MB portrait.** If the forge footage exceeds them, drop
fps before quality and record both the measured alternatives and the reason for the
choice here, as `sites/espresso` §8 does.

Note for extraction: local `ffmpeg` (homebrew) is built **without `libwebp`**, so the
single-pass `-c:v libwebp` command in `references/generation.md` fails. Use the
PNG-intermediate path: `ffmpeg` → PNG → `cwebp -m 6 -q N`.

## 7 — Build

Astro static, vanilla TS scrubber, shared `@sites/scroll-engine` (no per-site fork).

- `src/content/site.ts` holds every user-visible string, price, CTA and both `beats`
  arrays. Nothing user-facing is hardcoded in a component.
- Sections: pinned stage → The making → Specification → Collection (filterable) →
  The smith → Ordering → footer.
- **Ordering says plainly that payment is not connected** and offers an email address
  instead. There is no fake cart and no confirmation screen; nothing can report an order
  that did not happen.
- Nav is mounted outside the pinned stage, fixed, and persists after the stage ends.
  Mobile menu has a focus trap, Escape to close, and closes on link choice.
- "Skip the story" link jumps to `#making`.
- Hidden chapters are `inert` and `pointer-events: none`, so no off-screen CTA sits in
  the tab order.

### Verified in the browser (dev server, not just compilation)

| Check | Result |
|---|---|
| `npm run build --workspace sites/forged-knife` | passes |
| Console errors | none |
| Network 4xx/5xx | none — all requests 200 |
| Horizontal overflow at 320px | none (`scrollWidth === clientWidth === 320`) |
| Horizontal overflow at 375px | none |
| Mobile menu open / Escape / focus restore | works; focus returns to the toggle |
| Collection filters | work; empty state present |
| Pre-footage state | stage collapses to 0, composed-still path renders, all copy and CTAs reachable |

### Not yet verified, and cannot be until footage exists

Scrub smoothness, pacing against the approved plan, whether each scene's planned copy
space actually stayed clear, seam continuity (Path B only), reduced-motion poster paint,
and per-orientation sequence selection in the network panel. All of these are Phase 6
items that require real frames, and none of them are claimed here.

## 8 — Deploy

`netlify.toml` lives in `sites/forged-knife/`, never at the repo root. Netlify UI:
**Package directory** `sites/forged-knife`, **Base directory** empty (repo root, required
for the npm workspace to resolve `@sites/scroll-engine`). `publish` stays
`sites/forged-knife/dist` because it is relative to base.

`public/_headers` caches `/frames/*`, `/posters/*` and `/products/*` immutably for a
year.

### Parity check — run 2026-09-19, passed

Reconstructed exactly what a fresh clone contains (`git ls-files` + untracked-not-ignored
into a clean directory), installed from zero, built, and served `dist` on port 4500.

- Build from zero: passes.
- `dist/index.html` **byte-identical** to the local build.
- Every asset 200; **zero 4xx**: `/`, `/_headers`, `/frames/manifest.json`,
  `/logo-symbol.svg`, both posters, all five product tiles, the CSS bundle and the
  ScrollStage JS bundle.
- `_headers` and `frames/manifest.json` present in `dist`.
- All three component scripts ship: ScrollStage as an external bundle, Nav and
  ProductGrid inlined into `index.html` by Astro.
- No console errors on the served build.

One note on `mktemp -d` on macOS: it returns a path under `/var/folders/...`, and `/var`
is a symlink, which makes `cpio -pdm` refuse every file with "Cannot extract through
symlink". Resolve it first — `T=$(cd "$(mktemp -d)" && pwd -P)` — or the check cannot
run at all. Worth folding back into `CLAUDE.md`'s recipe.

Frame counts in `dist` versus the manifest are **not** asserted yet: both are zero by
design until the footage lands. Re-run this whole check after the frames are in, since
proving a fresh clone serves every frame is its main purpose.
