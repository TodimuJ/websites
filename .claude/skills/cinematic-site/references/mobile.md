# Phase 5 — Mobile experience (required)

Mobile is a composed experience inside the **same codebase**, not a shrunk desktop. One
website, two animation assets, selected automatically by viewport.

Adapted from `02-mobile-refinement.md`, which is good and needs little changing.

## 1. Persistent navigation

- Compact bar **fixed to the top for the entire page**, including after the pinned
  section ends.
- Brand symbol + wordmark left, hamburger right. Both visible while scrolling.
- **Mounted outside the pinned animation section** so it cannot disappear with it.
  Stacking order above canvas and content.
- Branded background with real contrast. Respect `env(safe-area-inset-*)`.
- Touch targets ≥ 44 × 44px.
- The hamburger opens an accessible menu: clear links, close button, keyboard support,
  focus trap while open, Escape to close, and it closes after a link is chosen.
- `scroll-margin-top` on anchor targets so headings clear the fixed header.

## 2. Hero composition

Prioritise the visual. The opening screen carries only:

- the persistent nav,
- one short headline,
- one primary action,
- a subtle scroll cue.

Cut supporting paragraphs, decorative eyebrow labels and secondary CTAs on mobile when
they compete with the image. Place text in deliberate negative space — headline, subject
and action clear of each other and of the nav.

During the main animation let the imagery hold the screen with no overlay text.
Reintroduce concise copy and the CTA at the final reveal.

## 3. Dedicated portrait animation

**Generate new 9:16 assets. Do not crop or stretch the landscape footage.**

- Portrait keyframe first at `9:16`, quality from the resolved budget, then the clip at
  `aspect_ratio: "9:16"` on the **same model as desktop** — switching models mid-build is
  the fastest way to lose material and lighting consistency. Every model in the routing
  table supports `9:16`.
- **Pass the desktop keyframe as `image_references`** so brand, product geometry, label,
  palette, lighting and material quality carry across. Same narrative, recomposed frame
  — not a different product.
- Recompose for a tall frame. Keep important action in the central portion so phones with
  different aspect ratios can crop without losing it.
- Reserve top space for the nav and space for copy at the reveal. The product must sit
  fully visible **above** the headline and action in the final shot.
- Continuous environment filling every edge. Reject visible seams, borders, rectangular
  panels or mismatched backgrounds — they make the animation look pasted onto the page.
- Multi-scene: same rule as desktop — prefer `video_extension`, else exact final frame as
  `start_image`. Inspect every seam for jumps in composition, lighting, scale and
  placement. **Portrait doubles the clip count**, so it doubles that part of the spend —
  it must already be in the Gate 2 ledger, not discovered here.
- Rotations must never expose empty corners.
- Keep macro transitions **sharp** when the intent is extreme magnification, not blurred.

If a required camera movement is missing from the output, correct it in generation.
Compensating in the renderer is a last resort and must be disclosed.

## 4. Scroll pacing, tuned independently

Mobile needs its own `beats` array. Do not reuse the desktop one.

- Thumb gestures cover less distance per effort — compress dead holds, especially where
  an object has landed but the next transformation has not started.
- Keep motion smooth through falling, landing, spinning, zooming and the reveal.
- **Adjust the scroll-to-frame mapping before removing frames.** Dropping frames does not
  shorten scroll distance; it just makes the motion step.
- Brief opening and closing holds so the headline and product register.
- Visible skip control to reach the main content.

## 5. Asset delivery

- Store both variants; **select before requesting frames.** Mobile requests only
  portrait, desktop only landscape. Never preload both and hide one with CSS — the engine
  handles this via `breakpoint`, and aborts + releases the old sequence on a class change.
- Responsive selection for posters and other large imagery too (`<picture>`/`srcset`).
- Lightweight poster immediately; frames load progressively around the playhead.
- Bounded concurrency and bitmap cache — already enforced by the engine. Portrait width is
  1080 with `fps` from the resolved budget (15 economy / 24 standard and max); confirm by
  inspection and measured size.
- Never block the page until the whole sequence downloads. The rest of the site stays
  usable while media loads.
- Reduced motion: composed still, normal page flow, **no sequence fetched at all**.
- Poster fallback if loading fails.

## 6. Validation

Preview at several widths and heights — at minimum 320, 375, 393, 430 wide, and a short
viewport (~667) to catch pacing that assumed a tall screen.

Check:

- [ ] Opening composition readable immediately
- [ ] Subject motion stays inside the frame
- [ ] Clip boundaries and background continuity
- [ ] Pacing through landing and transformation
- [ ] Rotations and zooms with no exposed edges
- [ ] Final product fully visible; branding legible
- [ ] Text and buttons clear of the subject
- [ ] Nav persists **after** the animation ends
- [ ] Menu open/close, focus behaviour, Escape, anchor offsets
- [ ] Safe-area spacing; no horizontal overflow at 320px
- [ ] Reduced-motion path and load-failure path
- [ ] Each viewport requests **only** its own sequence (check the network panel)

**Re-check desktop after mobile changes.** Shared tokens and components mean mobile work
regularly regresses desktop.

Report measured asset sizes separately from actual load-time measurements. File size is
not speed — do not promise one from the other.
