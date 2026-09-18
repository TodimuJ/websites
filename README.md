# Cinematic scroll-story websites

Brand websites whose hero is a generated video sequence scrubbed frame-by-frame as you
scroll — and the Claude Code skill that builds them.

Each site tells a **visual story** about its product: the scroll is one continuous camera
journey that ends on the thing you came to buy. A bean becomes an espresso. A bar of steel
becomes a knife mid-cut. A bolt becomes a satellite becomes a signal on a phone.

The skill is the point as much as the sites are. Five sites with no method in the repo is
a gallery; five sites plus the method is something someone else can use.

---

## Quick start

```bash
/cinematic-site espresso                                 # a bundled brief
/cinematic-site a high-quality metal credit card, black  # any subject
/cinematic-site                                          # list the briefs
```

With options:

```bash
/cinematic-site espresso --budget economy --duration 10 --cap 400
/cinematic-site vinyl --model seedance_2_5 --budget max
```

Prose works identically — *"build the espresso one, keep it cheap but give me 10-second
scenes"* resolves to the same thing.

---

## Layout

```
websites/
├── .claude/skills/cinematic-site/
│   ├── SKILL.md                  # orchestrator — 6 phases, 2 gates, budget system
│   ├── references/
│   │   ├── interview.md          # derives questions from the subject
│   │   ├── question-banks.md     # 10 worked banks, as calibration
│   │   ├── visual-story.md       # storyboard, scroll pacing, cost gate
│   │   ├── generation.md         # model routing, prompts, frames, cost ledger
│   │   ├── build.md              # Astro scaffold + scroll stage
│   │   ├── mobile.md             # portrait assets and pacing
│   │   └── qa.md                 # validation and handoff
│   ├── briefs/                   # 10 ready-made scroll-story concepts
│   └── assets/scroll-engine.ts   # the shared scrubber
├── packages/scroll-engine/       # created on first build
└── sites/<slug>/                 # one Astro project per site
```

---

## How it works

Six phases, two of which stop for you.

| Phase | What happens | Stops? |
|---|---|---|
| 0 | Resolve subject and budget | — |
| 1 | Interview → brand, palette, catalogue, niche specifics | **yes** |
| 2 | Visual Story table + scroll pacing + **cost ledger** | **yes** |
| 3 | Generate identity, keyframes, video; extract frames | — |
| 4 | Build the Astro site | — |
| 5 | Portrait mobile experience | — |
| 6 | Validate and hand off | — |

**Gate 1** is one or two batched question rounds. The niche questions are *derived from
your subject*, not looked up — so an arbitrary prompt gets the same quality of interview
as a bundled brief. For a metal credit card it asks about finish, edge treatment, where
the transformation starts, and the ending frame — not "what's your brand personality?"

**Gate 2** is the one worth waiting at. Storyboard changes are free; regenerating 300
frames is not — and it's the last moment before any credit is spent. You get the scene
table, the scroll pacing plan, and a `get_cost` preflight ledger of the entire build.

Everything after Gate 2 runs to completion.

---

## The technique

A generated clip is exported to a WebP image sequence. A pinned canvas renders one frame,
chosen purely from scroll position. Semantic HTML sits above the canvas and is revealed at
defined progress ranges — so all type stays crisp, selectable and accessible.

What makes it look expensive rather than broken:

- **One continuous camera move, no cuts.** A hard cut reads as a stutter when scrubbed.
- **A deliberate blur-through** at the hardest transition — steam, ink diffusion, smoke,
  extreme macro defocus. It hides the state change the generator is worst at. Every brief
  nominates one.
- **A piecewise scroll→frame mapping**, so holds get reading time and the hero beat gets
  room, instead of one uniform sweep.
- **No text in generated pixels.** Ever.
- **Macro → wide pull-back.** Detail at the top of the page, reveal at the bottom.

### The scroll engine

`packages/scroll-engine` is the reusable core. Frame index is a pure function of scroll
position, so reverse scrolling retraces exactly and jump-scroll lands correctly. It bounds
concurrent fetches and decoded-bitmap memory, aborts stale requests, evicts frames
furthest from the playhead, requests only the active orientation's sequence, and falls
back to a poster under `prefers-reduced-motion` or on load failure.

```ts
new ScrollEngine({
  canvas, scroller,
  landscape: manifest.desktop,
  portrait: manifest.mobile,
  beats: [
    { scroll: [0.00, 0.12], frames: [0,   0  ] }, // hold — read the hero
    { scroll: [0.12, 0.40], frames: [0,   96 ] }, // opening motion
    { scroll: [0.40, 0.66], frames: [96,  168] }, // transition — slower
    { scroll: [0.66, 0.74], frames: [168, 168] }, // hold — reveal lands
    { scroll: [0.74, 1.00], frames: [168, 239] }, // resolution
  ],
  onProgress: (p) => { /* drive HTML chapters */ },
});
```

---

## Budget

Seven independently settable axes with three presets as starting points. **Default is
`standard`.** Anything you name explicitly wins.

| Axis | `economy` | `standard` | `max` |
|---|---|---|---|
| `resolution` | 720p | 1080p | 4k |
| `duration` per scene | 5s | 10s | 12s |
| `bitrate_mode` | standard | high | high |
| `retakes` | 1 | 3 | uncapped |
| `stills_quality` | medium / 1k | high / 2k | xhigh / 4k |
| `fps` (delivery) | 15 | 24 | 24 |
| `width` (delivery) | 1280 | 1600 | 1920 |
| ≈ page weight | ~6MB | ~14MB | ~20MB |

**Credits and page weight are separate concerns**, and conflating them is the usual
mistake:

- **Credits** come from duration, resolution, stills quality and retake count.
- **Page weight and repo size** come only from `fps`, `width` and WebP quality.

So `--budget economy --duration 10` is entirely coherent — more narrative room, identical
bytes, more credits. `bitrate_mode` affects only the source MP4, never the shipped page.

`--cap N` sets a credit ceiling, enforced at Gate 2 and throughout generation — including
for retakes decided mid-build, which is where an unenforced cap actually leaks.

**Recommended: two passes.** Your first take is a probe — the storyboard is unverified and
the camera direction is usually wrong. Validate at `economy`, then regenerate the accepted
direction at `standard`. Cheaper than one careful expensive pass.

---

## Models

Routing is built from the live Higgsfield catalogue. The axis that matters most is
**continuity capability**, because scene-to-scene seams are what make or break these sites.

| Tier | Method | Models |
|---|---|---|
| **Best** | `video_extension` — continues the actual clip | `seedance_2_5` |
| **Good** | `end_image` chaining — inspect every seam | `cinematic_studio_3_0`, `seedance_2_0`, `kling3_0`, `minimax_h3`, `wan3_0_prime`, `flux_3_video`, `veo3_1_lite` |
| **None** | independent clips, visible jumps | `veo3_1`, `kling3_0_turbo`, `veo3` |

Tier defaults: **max** → `cinematic_studio_3_0` (4K, 21:9, end-frame, audio off by
default). **standard** → `cinematic_studio_3_0`, or `seedance_2_5` when the story needs
extension or scenes beyond 15s. **economy** → `seedance_2_0_mini` / `veo3_1_lite` /
`kling3_0_turbo`.

Logos use `recraft_v4_1` in `vector` mode — the only route to a genuine editable vector
master, and it takes the brand palette as a `colors` array.

**You can name any model** (`--model veo3_1`). If it can't do what your storyboard needs,
the skill tells you before generating rather than degrading silently — e.g. Veo 3.1 is
start-frame only and caps at 8s, so a four-scene story would have a visible jump at every
seam. You then choose: switch model, split the work, or accept it.

---

## Stack

- **Claude Code** — orchestration via the `cinematic-site` skill
- **Higgsfield MCP** — video and image generation, model routing, cost preflight
- **ffmpeg** — frame extraction to WebP
- **Astro** — static output, vanilla TS on the scroll path, no framework overhead

---

## Repo weight

Five sites at `standard` is roughly 115MB of binary WebP. Git doesn't delta-compress WebP,
and every re-extraction writes new blobs that live in history forever.

**Extract once at final settings.** Iterate frame settings in a scratch directory and copy
in only when final. If a sequence needs regenerating, `git rm` the old one in the same
commit. Consider Git LFS past ~300MB.

---

## Credits

Phase structure, scroll-pacing discipline and the mobile requirements are adapted from the
model-agnostic parts of
[Barty-Bart/gpt-6-astra-10k-websites](https://github.com/Barty-Bart/gpt-6-astra-10k-websites)
([video walkthrough](https://youtu.be/h2MjhbwVKLk)), rebuilt for Claude Code with live
model routing, clip extension for continuity, a budget system with cost preflight, and a
derived interview.

---

Sites in this repo are demos. Products, imagery and brand names are AI-generated.
