# Phase 2 — Visual Story, scroll pacing, cost (GATE 2)

The gate worth waiting at, for two reasons: storyboard changes are free while regenerating
300 frames is not, and **this is the last moment before any credit is spent.** Present all
three artefacts below — table, pacing plan, cost ledger — then **wait for approval**.

## The Visual Story table

Exactly three columns, exactly these headers:

| Scene | Visual story | Website copy |
| --- | --- | --- |
| 01 — Opening | The subject and its starting action, plus where the opening copy can sit without covering it. | Real draft hero heading, supporting line, primary CTA. |
| 02 — Transition | What leaves view, what travels, what stays hidden until its entrance. | `No copy — let the motion lead` |
| 03 — Development | The next meaningful action or detail, continuing from where 02 ended. | Real feature/collection heading and supporting copy. |
| 04 — Resolution | The final reveal. The "you leave with it" frame. | Real outcome heading, business info, closing CTA. |

Write **business-specific copy**, not `[headline here]`. Three to five scenes; add more
only when the narrative genuinely needs them. Under the table, explain in a short
paragraph how each scene hands off to the next.

### Transition beats are scenes

Give a transition its own row whenever it carries meaningful action. The pattern that
makes these sites feel expensive:

> the previous setting leaves view → the moving subject occupies the viewport alone →
> the next setting stays out of frame until its planned entrance

Do **not** show source, travelling subject and destination simultaneously when the story
wants a staged reveal. And note carefully: **framing creates the isolation, not scroll
distance.** If the source frames show both rooms at once, no amount of extra scroll will
hide one of them. Generate the framing you need.

Every brief in `briefs/` already nominates a **blur-through** — a steam bloom, ink
diffusion, smoke, a liquid wall crossing the lens, extreme macro defocus. That is where
the hardest state change hides. Put it in the table as its own row and protect it: it is
the load-bearing beat.

## The Scroll pacing plan

Below the table, one block per scene:

```
02 — Transition
  enters/exits : forge exits frame left; blade alone; quench tank not yet visible
  framing      : tight macro, subject centred, 40% headroom for no copy
  distance     : 1.5 vh of pinned scroll
  behaviour    : continuous motion
  frames       : 96–168 of 288
```

### Rules that actually matter

**A video second is not a second of scrolling.** Assign scroll distance from *narrative
weight*, independent of clip duration and frame count. A 6-second clip can legitimately
span four viewport heights. More frames improve temporal sampling; they do not lengthen
the experience.

**Measure in viewport heights**, never in wheel clicks. Trackpads, mice, phones and
`scroll-behavior: smooth` all deliver wildly different deltas per gesture.

**Use a piecewise timeline, not one uniform mapping.** This is the single highest-impact
technique in the whole build. Define beats explicitly and map each scroll interval to
its own frame interval:

```ts
const beats = [
  { scroll: [0.00, 0.12], frames: [0,   0  ] }, // hold — read the hero
  { scroll: [0.12, 0.34], frames: [0,   96 ] }, // opening motion
  { scroll: [0.34, 0.60], frames: [96,  168] }, // transition, slower — the money shot
  { scroll: [0.60, 0.70], frames: [168, 168] }, // hold — reveal lands
  { scroll: [0.70, 0.94], frames: [168, 287] }, // resolution
  { scroll: [0.94, 1.00], frames: [287, 287] }, // hold — read the CTA
];
```

**A still-frame hold is not sustained motion.** Freezing one frame for a reading pause
is correct. Stretching eight frames across two viewport heights and calling it smooth is
not — that is visible stepping. If a beat must keep moving over a long scroll range,
generate more footage for it or give it its own clip.

**Count active pinned travel separately from stage height.** A common bug: the sticky
stage is `100vh` and the scroll container is `400vh`, so actual scrubbing travel is
`300vh`, not `400vh`. Getting this wrong silently shortens the sequence.

**Preserve continuity when reversing.** The mapping must be a pure function of scroll
position. No accumulated state, no velocity-dependent behaviour — scrolling up must
retrace exactly.

## Choosing the architecture

**One continuous sequence** — default. One clip, one pinned stage, HTML chapters fading
in and out at progress ranges. Several apparent "hero sections" are chapters inside one
stage. Choose this whenever the story can sustain it.

**Multiple connected sequences** — only when the story changes location, action or
composition beyond what one clip can hold. Then continuity is your whole job:

1. Accept scene A completely before starting B.
2. Prefer `seedance_2_5` with `mode: "video_extension"`, `extension_mode: "forward"`
   — the model continues the actual clip. Strictly better than frame-reference chaining.
   `extension_mode: "backward"` builds a sequence backwards from an accepted clip.
3. Only if extension is unavailable: extract A's clean final frame and pass that exact
   raster as B's `start_image`. Then **inspect the seam** — outgoing and incoming frames
   side by side — for jumps in position, scale, orientation, lighting and camera
   direction. A reference frame guides generation; it does not guarantee continuity.
4. Keep render size and crop identical across scenes.
5. Coordinate the HTML chapter boundary with the accepted seam.

Never generate two unrelated clips and assume a crossfade will make them continuous. It
will not, and it is obvious.

**The scene count is a cost decision, so settle it here.** Each additional scene is another
clip plus another portrait clip. Before presenting the table, check the routing tiers in
`generation.md`: if the chosen model has no `end_image` and no extension
(`veo3_1`, `kling3_0_turbo`), a multi-scene story is not achievable at acceptable quality —
say so now and either change model or collapse to one continuous sequence. Scene duration
is also capped per model (Veo 3.1 is 8s; Seedance 2.5 reaches 30s), which constrains how
much action a single scene can carry.

## The cost ledger

With the storyboard settled, the job list is deterministic. Enumerate it, preflight each
with `get_cost: true` (which submits nothing), and present the ledger before spending —
format and rules in `generation.md`. Show **committed** prominently, worst-case including
the tier's retake budget as a footnote, and the current `balance`.

Then ask: proceed / drop a tier / set a `--cap`.

## Responsive composition, decided now

- Keep the subject and its key action inside the central ~60% horizontally so a portrait
  crop survives.
- Reserve deliberate negative space for copy. Decide *where* per scene, now.
- No important action hard against the left or right edge.
- Rotations must never expose empty corners — generate with margin.
- Assume a separate 9:16 asset is needed (Phase 5). Do not plan to stretch or crop the
  landscape one.

## Before moving on

Present table + pacing plan + cost ledger, then wait. When approved, record the table and
pacing plan verbatim into `sites/<slug>/production-notes.md` — they are the spec the
generation phase is judged against — along with the approved budget and any cap.
