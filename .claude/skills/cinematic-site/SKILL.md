---
name: cinematic-site
description: Build a cinematic scroll-story website — a brand site whose hero is a generated video sequence scrubbed frame-by-frame as the visitor scrolls, telling a visual story about the product. Use when asked to build a scroll-story / scroll-scrub / cinematic / "video that plays as you scroll" website, for any subject or niche, when given one of the briefs in briefs/, or invoked as /cinematic-site [brief-or-description]. Generates brand identity, keyframes and video via Higgsfield MCP, then builds a real Astro site with desktop and portrait mobile sequences.
---

# Cinematic scroll-story website

You are acting as creative director, designer and front-end engineer. You produce a
**complete, running website** whose hero is a generated video sequence bound to scroll
position — plus its brand identity, copy, product content, and a dedicated portrait
sequence for phones.

Works on **any subject**. The ten files in `briefs/` are optional accelerators, not a
menu — a free-text description is a first-class input.

Derived from the model-agnostic parts of `Barty-Bart/gpt-6-astra-10k-websites`, rebuilt
for Claude Code + Higgsfield MCP with live model routing, clip extension for continuity,
a budget system, cost preflight, and a derived interview.

## Non-negotiables

These separate a site that looks expensive from one that looks like a janky GIF. Violate
none silently; if one is impossible, say so.

1. **One continuous camera journey per sequence. No cuts.** A hard cut reads as a stutter
   when scrubbed, not as an edit.
2. **Never render text, logos, wordmarks, navigation, prices or CTAs into generated
   pixels.** All type is HTML over the canvas — selectable, accessible, restylable.
3. **Motion layer and content layer stay separate.**
4. **Native scrolling only.** Forward, backward and jump-scroll must all work.
5. **The site must make sense with the animation off.** Reduced-motion, load failure and
   low-end devices get a composed poster plus normal page flow.
6. **Never fabricate credibility.** No invented testimonials, customer counts, awards,
   addresses or press quotes. Invented *products* are fine for a demo; invented *social
   proof* is not. Mark demo sites as demos.
7. **Never impersonate a real brand.** Building "in the register of" an existing premium
   brand is fine; reproducing its name, wordmark, or trade dress is not. Invent the brand.
8. **Report what you actually verified.** Compilation is not proof of smooth playback.
9. **Never silently degrade.** If a chosen model can't do what the storyboard needs, or a
   budget forces a compromise, say so and let the user choose.

## Phases

Run in order. Load a reference file only when you reach its phase.

| Phase | Do | Load |
|---|---|---|
| 0 | Resolve subject + budget | `briefs/<name>.md` if matched |
| 1 | **GATE 1** — interview, brand direction | `references/interview.md` |
| 2 | **GATE 2** — Visual Story, scroll pacing, **cost preflight** | `references/visual-story.md` |
| 3 | Generate assets; extract frames | `references/generation.md` |
| 4 | Build the site | `references/build.md` + `assets/scroll-engine.ts` |
| 5 | Portrait mobile experience | `references/mobile.md` |
| 6 | Validate and hand off | `references/qa.md` |

Only phases 1 and 2 stop for the user. Everything after runs to completion — show
finished output, not repeated plans. While a video job is pending, build layout and
content; never idle-wait on a generation.

---

## Phase 0 — resolve subject and budget

### Subject

- **A brief name** (`/cinematic-site espresso`) → read `briefs/espresso.md`.
- **A free-text description** → try to match a brief by subject. On a match, read it and
  treat the user's text as overriding. On no match, proceed generically — the interview
  derives its own questions and you compose the visual story from scratch. This path is
  fully supported; do not push the user toward a listed brief.
- **Bare** (`/cinematic-site`) → list the briefs by name and one-line hook, and note that
  any description works too.

A brief already answers most of the intake. **Never ask what the brief answers.**

### Budget

Seven independently settable axes, with three named presets as starting points. **Default
is `standard`.** Anything the user names explicitly wins over the preset.

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

```
/cinematic-site espresso
/cinematic-site espresso --budget economy
/cinematic-site espresso --budget economy --duration 10
/cinematic-site espresso --budget max --fps 15 --cap 600
/cinematic-site <description> --model veo3_1_lite
```

Prose works identically — *"keep it cheap but give me 10-second scenes"* resolves to
`--budget economy --duration 10`. Flags for precision, prose for convenience.

`--cap N` sets a credit ceiling enforced at Gate 2 and throughout Phase 3.
`--model <id>` overrides model routing; see the disclosure rule in `generation.md`.

**Credits and page weight are separate concerns.** Credits are driven by duration,
resolution, stills quality and retake count. Page weight and repo size are driven only by
`fps`, `width` and WebP quality. So `economy` + `--duration 10` is entirely coherent:
more narrative room, same bytes, more credits. Say so rather than treating the tier as a
package.

**Recommended workflow — two passes.** Your first take is a probe: the storyboard is
unverified and the camera direction is usually wrong. Validate at `economy`, then
regenerate the accepted direction at `standard`. That is cheaper than one careful
expensive pass, and it is what to suggest when the user hasn't specified.

---

## Phase 1 — GATE 1

Read `references/interview.md`. It derives a question set from the subject rather than
looking one up. Batched through `AskUserQuestion`, max 4 per call, 2 calls maximum. Then
state the brand direction and move on — do not wait for aesthetic approval of a palette.

## Phase 2 — GATE 2

Read `references/visual-story.md`. Present the **Visual Story** table, the **Scroll
pacing** plan, and the **cost ledger** from `get_cost` preflight.

This is the gate worth waiting at, for two reasons: storyboard changes are free while
regenerating 300 frames is not, and it is the last moment before any credit is spent.
Wait for approval.

## Phases 3–6

Autonomous. Generate, build, refine mobile, validate, hand off. Keep the cost ledger
running and stop if `--cap` would be crossed.

---

## Repo conventions

```
websites/
├── packages/scroll-engine/      # shared, versioned, one implementation
├── sites/<slug>/                # one Astro project per site
│   ├── src/content/site.ts      # ALL copy, products, prices, CTAs, beats
│   ├── public/frames/{desktop,mobile}/
│   ├── public/posters/
│   └── production-notes.md      # direction, prompts, job IDs, spend, measurements
└── .claude/skills/cinematic-site/
```

`production-notes.md` is required. It records the direction, every generation prompt with
model and params, Higgsfield job IDs, asset provenance, **actual credits spent**, measured
frame counts and sizes, final `beats` values, and anything unverified. It is what makes
this repo a portfolio of method rather than five lucky results.

Copy `assets/scroll-engine.ts` into `packages/scroll-engine/` on the first build and
import it thereafter. Fix bugs there, once.
