# NINE BAR — external generation pack

Assets generated outside Higgsfield, on the user's Google AI Pro plan:
**Nano Banana Pro** for stills, **Google Flow (Veo 3.1 / Omni)** for video.

Approved storyboard: see `production-notes.md`. Four scenes, one continuous camera
journey, blur-through at scene 02.

**Brand:** NINE BAR · **Palette:** ink `#100C09`, crema `#C98F52`, espresso `#3A2318`,
steel `#8C8E90`, paper `#F2EDE6` · **Machine:** polished chrome commercial ·
**Vessel:** thick matte ceramic tulip cup · **Ending:** crema on marble.

Two rules apply to every prompt in this file:

1. **No text, letterforms, numerals, labels, logos or printing in any generated pixel.**
   All type on the site is HTML over the canvas. A bag with no printed label is correct,
   not a mistake — the label is set in CSS on top.
2. **No cuts.** Every clip is one unbroken camera move.

---

## 1 — Brand symbol (Nano Banana Pro) — run 4 times

The wordmark is HTML type; this is the separable symbol only, for the mobile nav bar and
favicon. It will be redrawn by hand as inline SVG, so this output is **reference, not a
shipped asset** — which is why a raster generator is fine here.

> A single flat geometric logo symbol centred on a plain warm off-white background.
> The mark is a perfect circle read as a portafilter basket seen from directly below,
> with nine short radial tick marks evenly spaced around the inner edge of the ring and
> one slightly longer tapered needle pointing to the topmost tick, like a pressure gauge
> at maximum. Solid dark near-black ink, one single flat colour, no gradients, no
> shading, no highlights, no 3D, no bevel, no drop shadow. Crisp hard edges, even stroke
> weight, generous inner negative space, designed to stay legible at 24 pixels.
> Absolutely no text, no letters, no numerals, no words, no wordmark, no taglines,
> no border, no frame, no background pattern. Centred with even margin on all sides.

Send all four. Pick nothing — I will choose and redraw.

---

## 2 — Landscape keyframe (Nano Banana Pro, 16:9, highest resolution available)

This is **frame 0 of the whole sequence** and the `start frame` for Flow. It fixes
material, lighting and palette for everything downstream, so it matters more than any
single clip.

> Extreme macro photograph, 16:9, of one single ripe coffee cherry resting inside the
> dark throat of a coffee grinder. The cherry has deep oxblood-red skin with a wet
> specular sheen and fine surface dimpling, one small dried stem scar. Around it, dark
> brushed steel grinder walls fall away into near-blackness, with a few loose coffee
> grounds and suspended dust motes giving scale. Lit by one single low raking warm
> tungsten key light from frame right, roughly 2700K, with deep rapid falloff into
> near-black shadow; the light catches only the wet curve of the skin. Colour palette
> strictly limited to near-black, dark roast brown and warm caramel. Shot on a macro
> lens, very shallow depth of field, tack sharp on the cherry skin at maximum
> magnification — sharpness, not blur, conveys the scale. The cherry sits centre-right;
> the upper-left third of the frame is clean empty darkness. Photographic, cinematic,
> expensive, no styling props. Absolutely no text, no captions, no logos, no watermarks,
> no UI, no borders, no panels, no letterboxing; the scene fills the entire frame to
> every edge.

## 3 — Portrait keyframe (Nano Banana Pro, 9:16, highest resolution)

Same prompt as above with these three changes — **and pass the landscape keyframe as a
reference image** so material and lighting carry across:

- `9:16 vertical composition`
- `the cherry sits in the centre of the frame, slightly below middle`
- `the top fifth of the frame is clean empty darkness` (that space is the mobile nav)

---

## 4 — Video: the four scenes (Google Flow, Veo 3.1)

### Which path to use

**Path A — preferred, if your Flow has *Extend*.** Generate scene 01 using the landscape
keyframe as the start frame, then **Extend** it three times, pasting the scene 02, 03 and
04 prompts in turn. The model continues the real clip, so there are no seams at all and
the result is one continuous file. This is the best outcome available anywhere, including
paid Higgsfield.

**Path B — if there's no Extend.** Use *Frames to Video*: scene 01 from the keyframe,
then for each following scene export the **last frame** of the previous clip and pass it
as the new start frame. Four separate files. Seams will need inspecting; send them all
and I'll check each boundary for jumps in position, scale, lighting and camera direction.

Either way: **1080p, 16:9, no audio needed** (Veo may add some — ignore it, I strip audio
during extraction). Veo caps at 8 seconds per generation, which is fine; extensions stack.

### Check scene 01 before extending

An error at scene 01 is inherited by every extension, so before you extend, confirm:

- [ ] no cut or shot change anywhere in the 8 seconds
- [ ] the camera never settles into a static hold
- [ ] macro stays **sharp** — blur has not been substituted for magnification
- [ ] no text, watermark or UI anywhere in frame
- [ ] the upper-left third stayed clear

If any fail, regenerate 01 before going further.

---

### Scene 01 — the grind

> One single continuous cinematic macro shot, no cuts: the camera pushes slowly forward
> and travels through the coffee cherry, and keeps moving the entire time. A single ripe
> coffee cherry with wet oxblood-red skin rotates slowly inside the dark steel throat of
> a grinder. As the camera pushes in, the skin and pulp peel and fall away and the pale
> green-tan raw coffee bean emerges from inside it; the bean then fractures along its
> centre crease and a burst of fine dark coffee grounds avalanches toward the lens in
> slow motion, filling the lower half of the frame. Lit by one low raking warm tungsten
> key from frame right, 2700K, deep falloff to near-black, the light catching the wet
> skin and then the bean's crease. Interior of the grinder throat, dark brushed steel
> out of focus, filling every edge of frame. Palette strictly near-black, dark roast
> brown and warm caramel. Macro remains tack sharp at maximum magnification; do not
> substitute blur for scale. The camera must keep moving for the entire shot and never
> settle into a static hold. Keep the upper-left third in clean empty negative space.
> One seamless continuous cinematic camera journey. Absolutely no cuts, no shot changes,
> no text, no titles, no captions, no logos, no watermarks, no UI. The environment fills
> the entire frame to every edge with no borders, panels or letterboxing.

### Scene 02 — the blur-through *(the load-bearing shot — protect it)*

This is the one that makes or breaks the site. If you only regenerate one scene, make it
this one.

> One single continuous cinematic macro shot, no cuts: the camera descends with the
> tamper and keeps travelling downward, passing through the surface of the coffee bed and
> into it. The avalanching grounds settle into a level bed of fine dark coffee; a
> polished chrome tamper with a mirror finish and a machined flat base lowers from above
> like a piston and compresses the bed. The camera continues down through the surface
> into the bed itself as pressurised water is forced in from above: dark rivulets thread
> between saturated swelling grounds, every particle becoming wet and glossy, the whole
> frame turning liquid and backlit until it fills entirely with moving wet matter. A hard
> specular highlight rakes across the chrome as it descends; warm amber backlight comes
> up through the wet bed so the rivulets glow. Extreme macro, the wet bed filling every
> edge of frame. Palette near-black, dark roast brown, warm amber. Macro remains tack
> sharp at maximum magnification; do not substitute blur for scale. The camera must keep
> moving for the entire shot and never settle into a static hold.
> One seamless continuous cinematic camera journey. Absolutely no cuts, no shot changes,
> no text, no titles, no captions, no logos, no watermarks, no UI. The environment fills
> the entire frame to every edge with no borders, panels or letterboxing.

### Scene 03 — extraction

> One single continuous cinematic shot, no cuts: the camera emerges downward out of the
> wet coffee bed and pulls back steadily to reveal polished chrome espresso spouts from
> below and slightly in front. Two honey-thick dark amber espresso streams emerge from
> the twin chrome spouts, braid around each other as they fall in slow ropy viscous
> strands, and land in a thick matte off-white ceramic tulip cup, where a caramel crema
> begins to build. The chrome commercial group head fills the upper frame, mirror-bright
> with hard specular highlights. One hard warm key light from frame left throws a bright
> specular edge along the chrome; faint steam catches the light. Dark machine body and
> near-black surroundings fill every edge of frame. Palette near-black, chrome grey, warm
> caramel, dark roast brown. The crema surface remains sharp with no motion blur on the
> surface pattern. The streams stay slow, thick and continuous, and the camera keeps
> moving for the entire shot. Keep the right third of the frame clean and uncluttered.
> One seamless continuous cinematic camera journey. Absolutely no cuts, no shot changes,
> no text, no titles, no captions, no logos, no watermarks, no UI. The environment fills
> the entire frame to every edge with no borders, panels or letterboxing.

### Scene 04 — resolution *(the final frame becomes the poster)*

> One single continuous cinematic shot, no cuts: the camera pulls back and rises very
> slightly, decelerating smoothly, and comes to rest on a composed still final frame. The
> espresso streams thin and stop. A thick matte off-white ceramic tulip cup, full of
> espresso, sits on a pale grey-white marble counter with fine grey veining. The crema
> swirls and settles into a legible tiger-mottle pattern, warm caramel marbled with dark
> roast brown. Steam rises gently through the light. One single warm overhead lamp at
> 2700K rim-lights the steam and the rim of the cup, everything else falling into deep
> shadow; the dark cafe interior behind falls completely out of focus as the camera
> retreats. Palette near-black, warm caramel, paper off-white, marble grey. The crema
> pattern stays sharp and legible with no motion blur on the surface. The camera
> decelerates to a rest and the last frame is clean, composed and still. The cup sits
> centre-low; keep the upper-left third of the frame in clean empty negative space.
> One seamless continuous cinematic camera journey. Absolutely no cuts, no shot changes,
> no text, no titles, no captions, no logos, no watermarks, no UI. The environment fills
> the entire frame to every edge with no borders, panels or letterboxing.

---

## 5 — Portrait video (9:16) — the same four scenes again

Portrait is a **separate generation, not a crop.** Run the same path (Extend preferred)
starting from the portrait keyframe, with the same four prompts, each amended with:

> Vertical 9:16 composition. Keep the subject and all important action within the central
> vertical portion of the frame so the sides can be cropped safely. Reserve the top fifth
> of the frame as clean empty darkness.

And on **scene 04 only**, replace the copy-space sentence with:

> The cup sits fully visible in the upper two thirds of the frame; keep the lower third
> clean and empty.

---

## 6 — Product stills (Nano Banana Pro, 1:1, highest resolution)

**Pass the scene 04 final frame as a reference image on every one** so lighting and
background match the film. Every product is unlabelled — the names and prices are HTML.

Shared suffix for all five:

> Single product centred on a pale grey-white marble surface, near-black background, lit
> by one warm overhead key at 2700K with deep shadow falloff, matching the reference
> image's lighting and palette exactly. Studio product photograph, shallow depth of
> field, tack sharp on the product. Absolutely no text, no letters, no numerals, no
> printed labels, no logos, no branding, no stickers, no watermarks of any kind — the
> packaging is completely blank. No props, no borders, no panels.

| # | File | Subject sentence |
|---|---|---|
| 1 | `product-single-origin` | A matte near-black flat-bottom coffee bag standing upright, 250g size, with a brushed steel tin-tie closure across the top and a small round one-way valve, completely unprinted. |
| 2 | `product-blend` | A matte warm kraft-paper flat-bottom coffee bag standing upright, 250g size, brushed steel tin-tie closure, small round valve, completely unprinted. |
| 3 | `product-subscription` | Three unprinted flat-bottom coffee bags standing in a loose row — one matte near-black, one warm kraft, one deep espresso brown — each with a brushed steel tin-tie closure. |
| 4 | `product-cup` | One thick matte off-white ceramic tulip espresso cup, 90ml, slightly irregular hand-thrown rim, empty, three-quarter view. |
| 5 | `product-tamper` | An espresso tamper with a mirror-polished chrome 58.5mm base and a dark oiled walnut handle, standing upright. |

---

## 7 — What to send back, and how

Save into `sites/espresso/_incoming/` (already created, and gitignored so nothing large
lands in a commit by accident), using these exact names:

```
symbol-01.png … symbol-04.png       brand symbol concepts
keyframe-landscape.png              16:9 keyframe
keyframe-portrait.png               9:16 keyframe
desktop.mp4                         Path A: the one continuous landscape clip
  or scene-01.mp4 … scene-04.mp4    Path B: four chained landscape clips
portrait.mp4                        Path A: the one continuous portrait clip
  or portrait-01.mp4 … -04.mp4      Path B: four chained portrait clips
product-single-origin.png  product-blend.png  product-subscription.png
product-cup.png            product-tamper.png
```

Tell me which path you used (Extend vs Frames to Video), the resolution and the total
duration you actually got. Then I inspect frames, extract the sequences, and build.

## 8 — What I do while you generate

No credits and no assets needed for any of this: design tokens, style tile, the shared
scroll engine, all copy and product content, the piecewise `beats` mapping, the portrait
mobile shell with persistent nav, reduced-motion and load-failure paths. The real frames
drop into `public/frames/` at the end without code changes.
