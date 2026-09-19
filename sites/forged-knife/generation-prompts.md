# OKUMI — external generation pack

Every asset for `sites/forged-knife`, generated on your **Google AI Pro** plan:
**Nano Banana Pro** for stills, **Google Flow (Veo 3.1)** for video.

Approved storyboard: `production-notes.md` §3. Four scenes, one continuous camera
journey, blur-through at scene 02.

**Brand** OKUMI · **Palette** soot `#0A0A0B`, ember `#D8551F`, forge-gold `#E8A33D`,
steel `#6E7B85`, ash `#CFC8BE` · **Blade** 61-layer damascus, mirror bevel ·
**Handle** octagonal pale ho wood · **Ending** tomato on end-grain wood.

Every prompt below is complete and ready to paste as-is. Nothing is abbreviated and
nothing says "as above with changes" — each block stands on its own.

Two rules hold across the whole pack, and they are already written into every prompt:

1. **No text, letterforms, numerals, kanji, stamped marks, engraving, labels, logos or
   printing in any generated pixel.** All type on the site is HTML over the canvas. An
   unmarked blade is correct, not a mistake.
2. **No cuts.** Every clip is one unbroken camera move.

**Deliver everything into `sites/forged-knife/_incoming/`** using the filenames given in
each section. Any image format is fine (`.png`, `.jpeg`, `.webp`); video as `.mp4`.

---

# Part 1 — Stills (Nano Banana Pro)

## 1.1 Brand symbol — run this 4 times

Save as `symbol-01.png` … `symbol-04.png`.

The wordmark "OKUMI" is HTML type and is never generated. This is the separable symbol
only, for the mobile nav bar and the favicon. It will be **redrawn by hand as inline
SVG**, so this output is reference, not a shipped asset — which is why a raster
generator is fine here.

```
A single flat geometric logo symbol centred on a plain warm off-white background. The
mark is a narrow vertical lens shape — two mirrored arcs meeting at a sharp point top
and bottom — read as a blade seen edge-on, with one straight hairline running
lengthwise slightly off-centre to suggest the bevel, and three short horizontal ticks
crossing the lower third like folded layers. Solid dark near-black ink, one single flat
colour, no gradients, no shading, no highlights, no 3D, no bevel, no drop shadow. Crisp
hard edges, even stroke weight, generous inner negative space, designed to stay legible
at 24 pixels. Absolutely no text, no letters, no numerals, no kanji, no words, no
wordmark, no taglines, no border, no frame, no background pattern. Centred with even
margin on all sides.
```

Send all four. Pick nothing — I will choose and redraw.

## 1.2 Landscape keyframe — 16:9, highest resolution available

Save as `keyframe-landscape.png`.

This is **frame 0 of the entire desktop sequence** and the start frame for Flow. It
fixes material, lighting and palette for everything downstream, so it matters more than
any single clip. Generate it, look at it, and regenerate this one before you move on if
it is not right.

```
Extreme macro cinematic photograph, 16:9, of a single bar of high-carbon steel glowing
white-hot at its core and fading through orange to deep red at its ends, bedded in a
heap of live charcoal inside a dark blacksmith's forge. The charcoal breathes — some
pieces incandescent orange, others crusted grey-white ash — and fine sparks drift
upward and die. Around the fire the forge falls away into near-total blackness; a
suggestion of soot-black brick and dark scale-covered steel gives scale at the edges.
Lit only by the fire itself, a single intense low source from the centre of frame,
roughly 1800K, with violent falloff into black; no fill light, no ambient light, no
studio light. Colour palette strictly limited to near-black, deep ember orange, warm
gold and cold grey ash. Shot on a macro lens, very shallow depth of field, tack sharp
on the surface of the hot steel at maximum magnification — sharpness, not blur, conveys
the scale. The glowing bar sits centre-right and runs diagonally from lower-left to
upper-right; the upper-left third of the frame is clean empty darkness. Photographic,
cinematic, expensive, no styling props, no people, no hands. Absolutely no text, no
captions, no logos, no watermarks, no UI, no borders, no panels, no letterboxing; the
scene fills the entire frame to every edge.
```

## 1.3 Portrait keyframe — 9:16, highest resolution available

Save as `keyframe-portrait.png`.

**Attach `keyframe-landscape.png` as a reference image** so material, fire colour and
lighting carry across. Same forge, same bar, recomposed for a tall frame.

```
Extreme macro cinematic photograph, 9:16 vertical, of a single bar of high-carbon steel
glowing white-hot at its core and fading through orange to deep red at its ends, bedded
in a heap of live charcoal inside a dark blacksmith's forge. The charcoal breathes —
some pieces incandescent orange, others crusted grey-white ash — and fine sparks drift
upward and die. Around the fire the forge falls away into near-total blackness; a
suggestion of soot-black brick and dark scale-covered steel gives scale at the edges.
Lit only by the fire itself, a single intense low source from the centre of frame,
roughly 1800K, with violent falloff into black; no fill light, no ambient light, no
studio light. Colour palette strictly limited to near-black, deep ember orange, warm
gold and cold grey ash. Shot on a macro lens, very shallow depth of field, tack sharp
on the surface of the hot steel at maximum magnification — sharpness, not blur, conveys
the scale. The glowing bar sits in the centre of the frame slightly below the middle
and runs diagonally from lower-left to upper-right; the top fifth of the frame is clean
empty darkness. Photographic, cinematic, expensive, no styling props, no people, no
hands. Absolutely no text, no captions, no logos, no watermarks, no UI, no borders, no
panels, no letterboxing; the scene fills the entire frame to every edge.
```

---

# Part 2 — Desktop video (Flow, 16:9)

**Path A — Extend (use this).** Generate scene 01 from `keyframe-landscape.png` as the
start frame, then press **Extend** three times, pasting scene 02, 03 and 04 in turn.
Flow continues the actual clip, so there are no seams to inspect. Download the final
continuous file as `desktop.mp4`.

**Path B — fallback, only if Extend is unavailable.** Generate each scene separately
with *Frames to Video*, using the **last frame of the previous scene** as the start
frame. The four prompts are exactly the same text; nothing changes. Download them as
`desktop-01.mp4` … `desktop-04.mp4` and I will join them, then inspect every seam for
jumps in position, scale, lighting and camera direction.

Settings for every clip: **16:9**, highest quality available, **8 seconds** on scene 01
and the maximum each Extend allows on 02–04, **no audio** (or ignore it — I strip it).

## 2.1 Scene 01 — Opening: fire, then the hammer

Start frame: `keyframe-landscape.png`. Duration 8s.

```
One continuous unbroken camera move with no cuts. Begin on a single out-of-focus orange
glow in total blackness and pull the camera back slowly and steadily to reveal a bar of
high-carbon steel glowing white-hot at its core, bedded in breathing live charcoal
inside a dark blacksmith's forge. The bar is drawn out of the coals and laid across a
dark scarred anvil, trailing heat shimmer, and the camera tracks smoothly along its
length as it is struck: the hammer head rises fully visible at the top of its arc, then
makes contact with the glowing steel, then rebounds, twice, and with each blow the bar
visibly flattens and elongates and a burst of orange sparks arcs toward the lens and
dies in the dark. Human presence only as a featureless backlit silhouette at the edge of
frame; no visible hands, no fingers, no faces, no skin. Lit only by the forge and the
glowing steel, a single intense low source around 1800K with violent falloff into pure
black, no fill light and no studio light. Colour strictly limited to near-black, ember
orange, warm gold and cold grey ash. Macro remains tack sharp at maximum magnification
throughout — sharpness, not blur, conveys the scale and the speed. The camera keeps
moving for the entire shot and never settles into a static hold. The glowing steel stays
centre-right and the upper-left third of the frame is kept in clean empty darkness. The
oil quench tank and any finished blade stay completely out of frame. One seamless
continuous cinematic camera journey. Absolutely no cuts, no shot changes, no text, no
titles, no captions, no logos, no watermarks, no UI. The environment fills the entire
frame to every edge with no borders, panels or letterboxing.
```

## 2.2 Scene 02 — BLUR-THROUGH: the quench

Press **Extend**. This is the load-bearing beat of the whole site — if one clip is worth
a retake, it is this one.

```
Continue the same unbroken camera move with no cut. The glowing orange blade is lifted
clear of the anvil and carried in one smooth arc down toward a low tank of dark quench
oil, the camera travelling with it and tightening in, and it is plunged edge-first into
the oil. The surface erupts instantly: a violent bloom of white and grey vapour and
steam boils upward, briefly lit from within by the orange of the submerged steel, and
the vapour rolls across the lens until it completely fills and swallows the entire
frame, leaving nothing but moving luminous white and grey haze at the end of the shot.
Human presence only as a featureless backlit silhouette; no visible hands, no fingers,
no faces, no skin. Lit from below and within by the fading orange of the steel and by
the forge behind, around 1800K, everything else falling to black. Colour strictly
limited to near-black, ember orange, warm gold, cold grey and vapour white. The vapour
must stay in violent motion right to the last frame and never settle or clear. The
camera keeps moving for the entire shot and never settles into a static hold. The
anvil, the forge fire, the whetstone, the finished blade, any cutting board and any food
stay completely out of frame. One seamless continuous cinematic camera journey.
Absolutely no cuts, no shot changes, no text, no titles, no captions, no logos, no
watermarks, no UI. The environment fills the entire frame to every edge with no borders,
panels or letterboxing.
```

## 2.3 Scene 03 — Development: emergence and honing

Press **Extend**.

```
Continue the same unbroken camera move with no cut. The rolling vapour thins and clears
to reveal a dark, oxidised, unfinished blade lying on a wet dark stone, its surface
matte grey-black fire scale, cooling, no longer glowing. Without any cut the camera
descends into extreme macro and travels slowly along the cutting edge from heel to tip
as a wet grey whetstone passes over it in long strokes, and in the wake of each stroke a
mirror-bright polished bevel and a flowing watery layered damascus pattern emerge etched
into the steel surface — long rippling contour lines like water, not brushed metal, not
generic texture. The pale octagonal ho wood handle sits in soft focus at the far end of
the blade. Human presence only as a featureless backlit silhouette; no visible hands, no
fingers, no faces, no skin, nothing near the edge. Lit by one hard low raking light from
frame left around 3000K that skims across the steel and makes the damascus pattern and
the polished bevel catch and flare, everything else falling to near-black. Colour
strictly limited to near-black, cold steel grey, warm gold highlight and pale ash wood.
Macro remains tack sharp at maximum magnification throughout — the pattern in the steel
must be crisply resolved, never blurred. The camera keeps moving for the entire shot and
never settles into a static hold. The edge runs from lower-left to upper-right and the
right third of the frame is kept in clean empty darkness. Any cutting board, any food
and any forge fire stay completely out of frame. One seamless continuous cinematic
camera journey. Absolutely no cuts, no shot changes, no text, no titles, no captions, no
logos, no watermarks, no UI. The environment fills the entire frame to every edge with
no borders, panels or letterboxing.
```

## 2.4 Scene 04 — Resolution: the cut

Press **Extend**. This is the last frame the visitor sees, and it is where the closing
copy and the buy button sit.

```
Continue the same unbroken camera move with no cut. The camera pulls back quickly and
smoothly away from the polished edge to reveal the whole finished chef's knife —
mirror-polished damascus blade with a flowing watery layered pattern, pale octagonal ho
wood handle — held in mid-air above a thick end-grain wooden cutting board on which a
single ripe tomato stands on end. The knife descends through the tomato in one clean
motion and the two halves fall apart and settle on the board, wet seed-flesh catching
the light, the blade still in motion at the end of the shot. Human presence only as a
featureless backlit silhouette at the edge of frame; no visible hands, no fingers, no
faces, no skin. Lit by one warm low key light from frame right around 3000K with a hard
specular rake along the spine of the blade, deep falloff into near-black behind; the
room falls out of focus. Colour strictly limited to near-black, cold steel grey, warm
gold, pale ash wood and deep tomato red. Shallow depth of field, tack sharp on the edge
and the cut faces. The camera keeps moving for the entire shot and never settles into a
static hold. The board and the tomato sit lower-centre and the upper-left third of the
frame is kept in clean empty darkness. The forge, the fire, the anvil and the whetstone
stay completely out of frame. One seamless continuous cinematic camera journey.
Absolutely no cuts, no shot changes, no text, no titles, no captions, no logos, no
watermarks, no UI. The environment fills the entire frame to every edge with no borders,
panels or letterboxing.
```

---

# Part 3 — Portrait video (Flow, 9:16)

A separate sequence, not a crop. Same narrative, recomposed for a tall frame: the
subject held in the central band so any phone aspect can crop safely, the top fifth kept
clear for the fixed nav, and the finished knife fully visible **above** where the closing
headline and buy button will sit.

Same method: generate scene 01 from `keyframe-portrait.png`, then **Extend** three
times. Download as `portrait.mp4`. Path B fallback works identically — same four
prompts, previous scene's last frame as start frame, saved as `portrait-01.mp4` …
`portrait-04.mp4`.

Settings for every clip: **9:16**, highest quality available, **8 seconds** on scene 01
and the maximum each Extend allows on 02–04, **no audio**.

## 3.1 Scene 01 — Opening: fire, then the hammer (portrait)

Start frame: `keyframe-portrait.png`. Duration 8s.

```
One continuous unbroken camera move with no cuts, vertical 9:16 composition. Begin on a
single out-of-focus orange glow in total blackness and pull the camera back slowly and
steadily to reveal a bar of high-carbon steel glowing white-hot at its core, bedded in
breathing live charcoal inside a dark blacksmith's forge. The bar is drawn out of the
coals and laid across a dark scarred anvil, trailing heat shimmer, and the camera tracks
smoothly along its length as it is struck: the hammer head rises fully visible at the
top of its arc, then makes contact with the glowing steel, then rebounds, twice, and
with each blow the bar visibly flattens and elongates and a burst of orange sparks arcs
toward the lens and dies in the dark. Human presence only as a featureless backlit
silhouette at the edge of frame; no visible hands, no fingers, no faces, no skin. Lit
only by the forge and the glowing steel, a single intense low source around 1800K with
violent falloff into pure black, no fill light and no studio light. Colour strictly
limited to near-black, ember orange, warm gold and cold grey ash. Macro remains tack
sharp at maximum magnification throughout — sharpness, not blur, conveys the scale and
the speed. The camera keeps moving for the entire shot and never settles into a static
hold. The glowing steel and every hammer blow stay within the central vertical band of
the frame, well clear of the left and right edges, and the top fifth of the frame is
kept in clean empty darkness. The oil quench tank and any finished blade stay completely
out of frame. One seamless continuous cinematic camera journey. Absolutely no cuts, no
shot changes, no text, no titles, no captions, no logos, no watermarks, no UI. The
environment fills the entire frame to every edge with no borders, panels or
letterboxing.
```

## 3.2 Scene 02 — BLUR-THROUGH: the quench (portrait)

Press **Extend**.

```
Continue the same unbroken camera move with no cut, vertical 9:16 composition. The
glowing orange blade is lifted clear of the anvil and carried in one smooth arc down
toward a low tank of dark quench oil, the camera travelling with it and tightening in,
and it is plunged edge-first into the oil. The surface erupts instantly: a violent bloom
of white and grey vapour and steam boils upward, briefly lit from within by the orange
of the submerged steel, and the vapour rolls across the lens until it completely fills
and swallows the entire frame, leaving nothing but moving luminous white and grey haze
at the end of the shot. Human presence only as a featureless backlit silhouette; no
visible hands, no fingers, no faces, no skin. Lit from below and within by the fading
orange of the steel and by the forge behind, around 1800K, everything else falling to
black. Colour strictly limited to near-black, ember orange, warm gold, cold grey and
vapour white. The vapour must stay in violent motion right to the last frame and never
settle or clear, and it must fill the frame corner to corner including the top and
bottom. The camera keeps moving for the entire shot and never settles into a static
hold. The anvil, the forge fire, the whetstone, the finished blade, any cutting board
and any food stay completely out of frame. One seamless continuous cinematic camera
journey. Absolutely no cuts, no shot changes, no text, no titles, no captions, no logos,
no watermarks, no UI. The environment fills the entire frame to every edge with no
borders, panels or letterboxing.
```

## 3.3 Scene 03 — Development: emergence and honing (portrait)

Press **Extend**.

```
Continue the same unbroken camera move with no cut, vertical 9:16 composition. The
rolling vapour thins and clears to reveal a dark, oxidised, unfinished blade lying on a
wet dark stone, its surface matte grey-black fire scale, cooling, no longer glowing.
Without any cut the camera descends into extreme macro and travels slowly along the
cutting edge as a wet grey whetstone passes over it in long strokes, and in the wake of
each stroke a mirror-bright polished bevel and a flowing watery layered damascus pattern
emerge etched into the steel surface — long rippling contour lines like water, not
brushed metal, not generic texture. The pale octagonal ho wood handle sits in soft focus
at the far end of the blade. Human presence only as a featureless backlit silhouette; no
visible hands, no fingers, no faces, no skin, nothing near the edge. Lit by one hard low
raking light from frame left around 3000K that skims across the steel and makes the
damascus pattern and the polished bevel catch and flare, everything else falling to
near-black. Colour strictly limited to near-black, cold steel grey, warm gold highlight
and pale ash wood. Macro remains tack sharp at maximum magnification throughout — the
pattern in the steel must be crisply resolved, never blurred. The camera keeps moving
for the entire shot and never settles into a static hold. The blade runs steeply from
lower-left to upper-right through the central vertical band of the frame, well clear of
the left and right edges, and the top fifth of the frame is kept in clean empty
darkness. Any cutting board, any food and any forge fire stay completely out of frame.
One seamless continuous cinematic camera journey. Absolutely no cuts, no shot changes,
no text, no titles, no captions, no logos, no watermarks, no UI. The environment fills
the entire frame to every edge with no borders, panels or letterboxing.
```

## 3.4 Scene 04 — Resolution: the cut (portrait)

Press **Extend**. The knife and the board must finish in the **upper two-thirds** of the
tall frame — the bottom third is where the closing headline and the buy button go.

```
Continue the same unbroken camera move with no cut, vertical 9:16 composition. The
camera pulls back quickly and smoothly away from the polished edge to reveal the whole
finished chef's knife — mirror-polished damascus blade with a flowing watery layered
pattern, pale octagonal ho wood handle — held in mid-air above a thick end-grain wooden
cutting board on which a single ripe tomato stands on end. The knife descends through
the tomato in one clean motion and the two halves fall apart and settle on the board,
wet seed-flesh catching the light, the blade still in motion at the end of the shot.
Human presence only as a featureless backlit silhouette at the edge of frame; no visible
hands, no fingers, no faces, no skin. Lit by one warm low key light from frame right
around 3000K with a hard specular rake along the spine of the blade, deep falloff into
near-black behind; the room falls out of focus. Colour strictly limited to near-black,
cold steel grey, warm gold, pale ash wood and deep tomato red. Shallow depth of field,
tack sharp on the edge and the cut faces. The camera keeps moving for the entire shot
and never settles into a static hold. The knife, the board and the tomato all sit
entirely within the upper two-thirds of the tall frame and stay clear of the left and
right edges; the bottom third of the frame is kept in clean empty darkness. The forge,
the fire, the anvil and the whetstone stay completely out of frame. One seamless
continuous cinematic camera journey. Absolutely no cuts, no shot changes, no text, no
titles, no captions, no logos, no watermarks, no UI. The environment fills the entire
frame to every edge with no borders, panels or letterboxing.
```

---

# Part 4 — Product stills (Nano Banana Pro)

Five images, 4:3 or 1:1, highest resolution available. **Attach
`keyframe-landscape.png` as a reference image to every one of these** so the lighting,
the black ground and the ember rim carry across the whole catalogue and the grid reads
as one shoot.

The blades carry **no maker's mark of any kind** — no engraving, no kanji, no stamped
characters, no etched signature. The brand name is set in HTML next to the image.

## 4.1 Gyuto 210mm — save as `product-gyuto.png`

```
Studio product photograph of a single Japanese gyuto chef's knife with a 210mm
mirror-polished damascus blade showing a flowing watery layered pattern along its flat
and a bright mirror bevel at the edge, fitted with a pale octagonal ho wood handle and a
dark buffalo-horn collar. The knife lies at a slight diagonal on a flat matte
near-black surface, tip toward the upper right. Lit by one large soft key light from
frame left raking down the blade so the damascus pattern resolves clearly, plus one
narrow warm ember-orange rim light from behind right catching the spine and the edge of
the handle. Deep falloff into near-black; the background is empty and unlit. Colour
strictly limited to near-black, cold steel grey, warm gold highlight and pale ash wood.
Tack sharp across the whole blade, shallow depth of field falling off behind. No
engraving, no kanji, no stamped characters, no etched signature, no maker's mark on the
blade or the handle. Absolutely no text, no captions, no logos, no watermarks, no UI, no
borders, no panels, no letterboxing; the scene fills the entire frame to every edge.
```

## 4.2 Santoku 165mm — save as `product-santoku.png`

```
Studio product photograph of a single Japanese santoku knife with a 165mm
mirror-polished damascus blade — shorter and deeper than a chef's knife, with a gently
rounded sheepsfoot tip — showing a flowing watery layered pattern along its flat and a
bright mirror bevel at the edge, fitted with a pale octagonal ho wood handle and a dark
buffalo-horn collar. The knife lies at a slight diagonal on a flat matte near-black
surface, tip toward the upper right. Lit by one large soft key light from frame left
raking down the blade so the damascus pattern resolves clearly, plus one narrow warm
ember-orange rim light from behind right catching the spine and the edge of the handle.
Deep falloff into near-black; the background is empty and unlit. Colour strictly limited
to near-black, cold steel grey, warm gold highlight and pale ash wood. Tack sharp across
the whole blade, shallow depth of field falling off behind. No engraving, no kanji, no
stamped characters, no etched signature, no maker's mark on the blade or the handle.
Absolutely no text, no captions, no logos, no watermarks, no UI, no borders, no panels,
no letterboxing; the scene fills the entire frame to every edge.
```

## 4.3 Petty 120mm — save as `product-petty.png`

```
Studio product photograph of a single Japanese petty knife with a small 120mm
mirror-polished damascus blade — narrow, finely tapered to a sharp point — showing a
flowing watery layered pattern along its flat and a bright mirror bevel at the edge,
fitted with a pale octagonal ho wood handle and a dark buffalo-horn collar. The knife
lies at a slight diagonal on a flat matte near-black surface, tip toward the upper
right. Lit by one large soft key light from frame left raking down the blade so the
damascus pattern resolves clearly, plus one narrow warm ember-orange rim light from
behind right catching the spine and the edge of the handle. Deep falloff into
near-black; the background is empty and unlit. Colour strictly limited to near-black,
cold steel grey, warm gold highlight and pale ash wood. Tack sharp across the whole
blade, shallow depth of field falling off behind. No engraving, no kanji, no stamped
characters, no etched signature, no maker's mark on the blade or the handle. Absolutely
no text, no captions, no logos, no watermarks, no UI, no borders, no panels, no
letterboxing; the scene fills the entire frame to every edge.
```

## 4.4 Whetstone — save as `product-whetstone.png`

```
Studio product photograph of a rectangular Japanese combination water whetstone resting
on a simple dark hardwood base, one face a pale grey coarse grit and the opposite face a
finer cream-white grit, the stone visibly damp with a thin film of water and a faint
dished hollow worn into the working face from use. It sits at a slight diagonal on a
flat matte near-black surface. Lit by one large soft key light from frame left raking
across the wet stone so the grain and the damp sheen resolve clearly, plus one narrow
warm ember-orange rim light from behind right catching the far top edge. Deep falloff
into near-black; the background is empty and unlit. Colour strictly limited to
near-black, cold grey, cream white, warm gold highlight and dark wood. Tack sharp across
the stone, shallow depth of field falling off behind. No printed grit numbers, no
stamped characters, no kanji, no labels, no stickers, no maker's mark anywhere on the
stone or the base. Absolutely no text, no captions, no logos, no watermarks, no UI, no
borders, no panels, no letterboxing; the scene fills the entire frame to every edge.
```

## 4.5 Waxed canvas roll — save as `product-roll.png`

```
Studio product photograph of a waxed canvas knife roll in dark charcoal-grey, partly
unrolled to show three empty stitched slots of differing widths, with a heavy waxed
cotton tie strap lying loose beside it and visible dense stitching and a softly worn
sheen on the fabric. It lies at a slight diagonal on a flat matte near-black surface.
Lit by one large soft key light from frame left raking across the canvas so the weave
and the wax sheen resolve clearly, plus one narrow warm ember-orange rim light from
behind right catching the top fold. Deep falloff into near-black; the background is
empty and unlit. Colour strictly limited to near-black, charcoal grey, warm gold
highlight and a little pale ash. Tack sharp across the fabric, shallow depth of field
falling off behind. The slots are empty with no knives in them. No printed labels, no
woven tags, no patches, no stamped characters, no maker's mark anywhere on the roll or
the strap. Absolutely no text, no captions, no logos, no watermarks, no UI, no borders,
no panels, no letterboxing; the scene fills the entire frame to every edge.
```

---

# Delivery checklist

Drop all of these into `sites/forged-knife/_incoming/`:

| File | What it is |
|---|---|
| `symbol-01.png` … `symbol-04.png` | 4 symbol concepts (reference only) |
| `keyframe-landscape.png` | 16:9 keyframe · also the desktop poster source |
| `keyframe-portrait.png` | 9:16 keyframe · also the mobile poster source |
| `desktop.mp4` | one continuous 16:9 file (Path A) — or `desktop-01..04.mp4` (Path B) |
| `portrait.mp4` | one continuous 9:16 file (Path A) — or `portrait-01..04.mp4` (Path B) |
| `product-gyuto.png` | Gyuto 210mm |
| `product-santoku.png` | Santoku 165mm |
| `product-petty.png` | Petty 120mm |
| `product-whetstone.png` | Combination whetstone |
| `product-roll.png` | Waxed canvas roll |

Thirteen files. Tell me when they're in and I'll extract frames, measure, write the
manifest and wire the sequence in — the rest of the site is already built and waiting.

**Worth a second look before you send:** the hammer in scene 01 (models often render the
strike as a static blur instead of arc → contact → rebound), the vapour in scene 02
(it must still be moving in the final frame, not settled), and the damascus in scene 03
(flowing watery layers, not generic brushed metal). Those three are the failure modes
this brief warns about. Everything else is forgiving.
