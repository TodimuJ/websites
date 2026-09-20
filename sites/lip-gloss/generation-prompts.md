# GLOSSARIUM — external generation pack

Every asset for `sites/lip-gloss`, generated on your **Google AI Pro** plan:
**Nano Banana Pro** for stills, **Google Flow (Veo 3.1)** for video.

Approved storyboard: `production-notes.md` §3. Six scenes, one continuous camera
journey, blur-through at scene 04.

**Brand** GLOSSARIUM · **Palette** wet-black `#0B0708`, nude `#D7A98C`, rose-gold
`#C98B6E`, flesh `#EFCDBB`, shine `#FFF6EF` · **Hero shade** Dune 04, warm rose-gold
nude, high-shine wet-look · **Vessel** clear glass tube, brushed metal cap, flocked
doe-foot applicator · **Ending** one mouth, tight crop, single specular highlight.

Every prompt below is complete and ready to paste as-is. Nothing is abbreviated and
nothing says "as above with changes" — each block stands on its own.

Four rules hold across the whole pack, and they are already written into every prompt:

1. **No text, letterforms, numerals, labels, printing, engraving, embossing, logos or
   branding in any generated pixel.** All type on the site is HTML over the canvas. An
   unlabelled glass tube is correct, not a mistake — this is the single highest-risk
   failure in this pack, because cosmetics packaging is almost always printed.
2. **No cuts.** Every clip is one unbroken camera move.
3. **Scene 01 must not look like a cosmetic.** There is deliberately no product word
   anywhere in its prompt — no gloss, no lip, no cosmetic, no makeup. If the model is
   told what it is, it renders a tube and the entire idea of the site dies. It is a
   landscape until scene 02 says otherwise.
4. **Scene 06 is one mouth only.** Tight crop, no full face, no eyes, no nose, no teeth,
   no tongue. Lips are the one human feature these models render reliably, and only at
   this crop.

**Deliver everything into `sites/lip-gloss/_incoming/`** using the filenames given in
each section. Any image format is fine (`.png`, `.jpeg`, `.webp`); video as `.mp4`.

---

## How the six scenes get chained

You noted Veo 3.1 offers 4s / 6s / 8s and that **only 8s can be Extended** — so this
build uses the **multi-scene chaining path**, not Extend. That is planned for, not a
fallback.

For each orientation, in order:

1. Generate the **scene 01 anchor still** and use it as the start frame for scene 01.
2. Generate scene 01 in *Frames to Video*.
3. Export the **last frame** of scene 01 and use it as the start frame for scene 02.
4. Repeat through scene 06.

Every scene in this story is genuinely continuous — no location change, no new set — so
last-frame chaining is the right primary method throughout.

**The anchor stills in §1.2 and §1.3 exist for two reasons.** If Flow offers an *end
frame* field alongside the start frame, paste the **next** scene's anchor still into it
and the seam tightens considerably. And if any seam comes out wrong, the anchor still is
the clean start frame to retry that scene from. You may well not need anchors 02–06.

### Durations — recommended per scene

| Scene | Duration | Why |
|---|---|---|
| 01 — the dune | **6s** | A slow lateral drift; it does not need more. |
| 02 — the reveal | **8s** | Protected beat. The pull-back is the whole idea and it must not feel rushed. |
| 03 — the collapse | **6s** | One fold of the ribbon reads completely in six seconds. |
| 04 — the pour | **8s** | Protected beat. The blur-through is where the hardest state change hides. |
| 05 — loading the tube | **6s** | Thread, retract, cap, rotate, settle. |
| 06 — the mouth | **6s** | One press and one part. Longer and the model invents a smile. |

**40 seconds per orientation.** This lands the desktop sequence at ~480 frames and
~16MB, inside the 18MB ceiling, at the same 12fps/1280 settings OKUMI measured. Uniform
8s would be 48s and ~21MB, which would force the frame rate down and cost temporal
smoothness on exactly the beats that need it most.

**The prompts do not change with duration** — it is a dropdown in Flow, not prompt text.
If you prefer uniform 6s or uniform 8s, generate that way and send it; I measure the real
frame counts off the delivered footage and remap the scroll pacing to match. That remap
is my job, not yours.

Settings for every clip: highest quality available, **no audio** (or ignore it — I strip
it), and the aspect ratio given in each part.

---

# Part 1 — Stills (Nano Banana Pro)

## 1.1 Brand symbol — run this 4 times

Save as `symbol-01.png` … `symbol-04.png`.

The wordmark "GLOSSARIUM" is HTML type and is never generated. This is the separable
symbol only, for the mobile nav bar and the favicon. It will be **redrawn by hand as
inline SVG**, so this output is reference, not a shipped asset — which is why a raster
generator is fine here.

```
A single flat geometric logo symbol centred on a plain warm off-white background. The
mark is a soft-sided droplet lens — a circle drawn with one flattened lower edge and one
pulled meniscus point at the upper right, read as a single bead of liquid sitting on a
flat surface — with one short horizontal hairline floating inside the upper left of the
form to suggest a specular highlight, and one thin straight baseline running the full
width beneath the droplet. Solid dark near-black ink, one single flat colour, no
gradients, no shading, no highlights, no 3D, no bevel, no drop shadow, no transparency.
Crisp hard edges, even stroke weight, generous inner negative space, designed to stay
legible at 24 pixels. Absolutely no text, no letters, no numerals, no words, no
wordmark, no taglines, no border, no frame, no background pattern. Centred with even
margin on all sides.
```

Send all four. Pick nothing — I will choose and redraw.

## 1.2 Desktop anchor stills — 16:9, highest resolution available

### 1.2.1 Scene 01 anchor — `anchor-desktop-01.png`

This is **frame 0 of the entire desktop sequence** and the start frame for Flow. It fixes
material, colour, lighting and the scale deception for everything downstream, so it
matters more than any single clip. Generate it, look at it, and regenerate this one
before you move on if it reads as anything other than a landscape.

```
A wide cinematic landscape photograph, 16:9, of a vast rose-gold sand desert at golden
hour. Long smooth curved dune ridges run across the frame, their crests catching a low
raking sun from the left so that each ridge carries one continuous soft highlight along
its spine and falls into a deep warm shadow on its right flank. The sand is fine and
unbroken — no footprints, no tracks, no vegetation, no rocks, no structures, no animals,
no people. The colour is strictly a warm rose-gold nude: pale peach-cream on the lit
crests, deepening through warm rose-gold in the mid-tones to a dark brown-black in the
deepest shadow troughs. A hazy warm sky occupies the upper portion, graded from pale
cream at the horizon to a soft dusty rose above, with no clouds, no sun disc and no
birds. Shot on a long lens from a distance, gentle atmospheric haze separating the far
ridges, tack sharp on the nearest crest. The dune ridges occupy the lower two-thirds of
the frame and the upper-left third is kept clean and empty. Photographic, cinematic,
expensive, serene, entirely natural. Absolutely no text, no captions, no logos, no
watermarks, no UI, no borders, no panels, no letterboxing; the scene fills the entire
frame to every edge.
```

### 1.2.2 Scene 02 anchor — `anchor-desktop-02.png`

**Attach `anchor-desktop-01.png` as a reference image** so the colour and the surface
character of the material carry across the reveal. This is the frame the pull-back lands
on: the same substance, now unmistakably small.

```
An extreme macro studio photograph, 16:9, of one single bead of thick glossy rose-gold
liquid resting on a flat polished clear glass slide, lit by a large soft rectangular
studio softbox from the upper left. The bead is domed and perfectly wet-looking, its
surface a flawless mirror that carries one long soft rectangular reflection of the
softbox across its upper left curve and a second, smaller pinpoint highlight near its
crest. The liquid is a warm rose-gold nude — pale peach-cream where the light strikes,
deepening through warm rose-gold to a rich translucent amber where it thickens against
the glass — and very fine metallic flake suspended inside it catches the directional
light as scattered points of warm gold. A soft shadow and a faint warm caustic pool
spread on the glass beneath the bead. Behind and around the slide the studio falls away
into near-total soft black with no visible walls, props, tools, hands or equipment. Shot
on a macro lens, tack sharp on the surface of the bead at maximum magnification —
sharpness, not blur, conveys the scale. The bead sits centred in the frame with clean
dark space around it on all sides. Photographic, cinematic, expensive, clinical.
Absolutely no text, no captions, no labels, no printing, no logos, no watermarks, no UI,
no borders, no panels, no letterboxing; the scene fills the entire frame to every edge.
```

### 1.2.3 Scene 03 anchor — `anchor-desktop-03.png`

**Attach `anchor-desktop-02.png` as a reference image** so the flake, the softbox
reflection and the exact rose-gold carry through the collapse.

```
An extreme macro studio photograph, 16:9, of a thick viscous rose-gold liquid that has
lost its surface tension and slumped into a heavy folded ribbon lying across a flat
polished clear glass slide, lit by a large soft rectangular studio softbox from the upper
left. The ribbon is several millimetres thick, glossy and wet-looking, and has folded
over itself once so that a soft rounded lip of liquid curls back on the fold and catches
one long continuous specular highlight along its entire edge. The liquid is a warm
rose-gold nude — pale peach-cream on the lit ridges, deepening through warm rose-gold to
a rich translucent amber in the thick of the fold — and very fine metallic flake
suspended inside it catches the directional light as scattered points of warm gold across
the whole mass. A slow warm caustic glow spreads on the glass under the thickest part.
Behind and around the slide the studio falls away into near-total soft black with no
visible walls, props, tools, hands or equipment. Shot on a macro lens, tack sharp on the
folded edge at maximum magnification. The ribbon lies across the lower-right of the frame
running from the bottom edge up toward the right, and the left third of the frame is kept
clean and empty in soft black. Photographic, cinematic, expensive. Absolutely no text, no
captions, no labels, no printing, no logos, no watermarks, no UI, no borders, no panels,
no letterboxing; the scene fills the entire frame to every edge.
```

### 1.2.4 Scene 04 anchor — `anchor-desktop-04.png`

**Attach `anchor-desktop-03.png` as a reference image.** This is the inside of the
blur-through: the frame where there is nothing left but the material itself.

```
An extreme macro photograph, 16:9, taken from inside a mass of thick translucent
rose-gold liquid that fills the entire frame edge to edge with nothing else visible. The
liquid is backlit from behind and slightly above, so the whole frame glows warm — pale
luminous peach-cream where the material is thinnest, deepening through warm rose-gold to
a deep amber-brown where it is thickest — and slow soft internal folds and density
variations curve across the frame like sunlit fabric. Very fine metallic flake suspended
in the liquid catches the light as scattered sharp points of warm gold at varying depths,
some near and crisp, some deep and soft. No container, no slide, no surface, no horizon,
no edge of the material and no background is visible anywhere — the substance is the
entire world of the image. Shot on a macro lens, tack sharp on the flake at the plane of
focus with soft falloff in front and behind. Photographic, cinematic, abstract, warm,
luminous. Absolutely no text, no captions, no labels, no printing, no logos, no
watermarks, no UI, no borders, no panels, no letterboxing; the material fills the entire
frame to every edge.
```

### 1.2.5 Scene 05 anchor — `anchor-desktop-05.png`

**Attach `anchor-desktop-02.png` as a reference image** so the studio light and the exact
rose-gold match the earlier beats. This is the vessel shot, and it is the highest-risk
prompt in the pack — read the no-printing clause before you send it.

```
A macro studio photograph, 16:9, of one small cylindrical cosmetic tube standing upright
on a flat dark grey stone surface, lit by a large soft rectangular studio softbox from
the upper left. The tube body is completely clear smooth glass with no label, no
printing, no engraving, no embossing, no etching, no sticker and no marking of any kind
anywhere on it, and it is filled with a thick glossy warm rose-gold nude liquid that
glows where the light passes through it and throws a warm caustic pool onto the stone
beside it. The cap is plain brushed silver metal with a fine circular grain, slightly
wider than the body, seated square on top, and it is likewise completely unmarked. A
flat flocked doe-foot applicator paddle rests on the stone beside the tube, its soft
matte surface loaded with a visible glossy bead of the same rose-gold liquid. Behind the
stone the studio falls away into near-total soft black with no visible walls, props,
tools, hands or equipment. Shot on a macro lens at a slight three-quarter angle just
above the height of the cap, tack sharp on the glass and the liquid inside it. The tube
stands centre-right in the frame and the left half of the frame is kept clean and empty
in soft black. Photographic, cinematic, expensive, clinical. Absolutely no text, no
letters, no numerals, no words, no captions, no labels, no printing, no branding, no
logos, no watermarks, no UI, no borders, no panels, no letterboxing; the scene fills the
entire frame to every edge.
```

### 1.2.6 Scene 06 anchor — `anchor-desktop-06.png`

**Attach `anchor-desktop-02.png` as a reference image** so the gloss on the lips is the
same material and the same rose-gold as the bead. One mouth, tight crop — nothing else.

```
An extreme close-up beauty photograph, 16:9, of one human mouth and nothing else, cropped
tightly so that only the lips, the philtrum above them and a small area of smooth skin on
the chin below are in frame — no eyes, no nose, no nostrils, no cheeks, no jawline, no
hair and no full face are visible anywhere. The lips are relaxed and gently closed,
freshly coated in a thick high-shine warm rose-gold nude gloss that sits wet on the
surface and catches one bright soft rectangular specular highlight across the centre of
the lower lip and a second smaller highlight on the upper lip bow. Very fine metallic
flake in the gloss catches the light as scattered points of warm gold. The skin is
natural and softly textured with visible fine detail, warm mid-tone, no heavy makeup and
no foundation cast. Lit by a large soft rectangular studio softbox from the upper left
with deep soft falloff, the background behind the skin dropping to near-total soft black.
Shot on a macro lens, tack sharp on the wet surface of the lower lip. The mouth sits left
of centre in the frame and the right third of the frame is kept clean and empty in soft
black. Photographic, cinematic, expensive, calm, closed mouth, no smile, no teeth, no
tongue. Absolutely no text, no captions, no labels, no logos, no watermarks, no UI, no
borders, no panels, no letterboxing; the scene fills the entire frame to every edge.
```

## 1.3 Mobile anchor stills — 9:16, highest resolution available

Portrait is a separate sequence, not a crop of the landscape one. The copy rail on mobile
sits at the **bottom** of the screen, so these compositions hold their clean space in the
lower third rather than to one side.

### 1.3.1 Scene 01 anchor — `anchor-mobile-01.png`

**Attach `anchor-desktop-01.png` as a reference image** so the sand colour, the haze and
the light direction match the desktop sequence exactly.

```
A tall vertical cinematic landscape photograph, 9:16, of a vast rose-gold sand desert at
golden hour. Long smooth curved dune ridges run in receding bands across the middle of
the frame, their crests catching a low raking sun from the left so that each ridge
carries one continuous soft highlight along its spine and falls into a deep warm shadow
on its right flank. The sand is fine and unbroken — no footprints, no tracks, no
vegetation, no rocks, no structures, no animals, no people. The colour is strictly a warm
rose-gold nude: pale peach-cream on the lit crests, deepening through warm rose-gold in
the mid-tones to a dark brown-black in the deepest shadow troughs. A hazy warm sky fills
the upper third, graded from pale cream at the horizon to a soft dusty rose above, with
no clouds, no sun disc and no birds. The lower third of the frame is a single large
unbroken dune flank lying entirely in deep warm shadow, smooth and almost featureless.
Shot on a long lens from a distance, gentle atmospheric haze separating the far ridges,
tack sharp on the nearest crest. Photographic, cinematic, expensive, serene, entirely
natural. Absolutely no text, no captions, no logos, no watermarks, no UI, no borders, no
panels, no letterboxing; the scene fills the entire frame to every edge.
```

### 1.3.2 Scene 02 anchor — `anchor-mobile-02.png`

**Attach `anchor-desktop-02.png` as a reference image.**

```
An extreme macro studio photograph, 9:16 vertical, of one single bead of thick glossy
rose-gold liquid resting on a flat polished clear glass slide, lit by a large soft
rectangular studio softbox from the upper left. The bead is domed and perfectly
wet-looking, its surface a flawless mirror that carries one long soft rectangular
reflection of the softbox across its upper left curve and a second, smaller pinpoint
highlight near its crest. The liquid is a warm rose-gold nude — pale peach-cream where
the light strikes, deepening through warm rose-gold to a rich translucent amber where it
thickens against the glass — and very fine metallic flake suspended inside it catches the
directional light as scattered points of warm gold. A soft shadow and a faint warm
caustic pool spread on the glass beneath the bead. Behind and around the slide the studio
falls away into near-total soft black with no visible walls, props, tools, hands or
equipment. Shot on a macro lens, tack sharp on the surface of the bead at maximum
magnification — sharpness, not blur, conveys the scale. The bead sits slightly above the
vertical centre of the tall frame with generous clean dark space above it and below it.
Photographic, cinematic, expensive, clinical. Absolutely no text, no captions, no labels,
no printing, no logos, no watermarks, no UI, no borders, no panels, no letterboxing; the
scene fills the entire frame to every edge.
```

### 1.3.3 Scene 03 anchor — `anchor-mobile-03.png`

**Attach `anchor-desktop-03.png` as a reference image.**

```
An extreme macro studio photograph, 9:16 vertical, of a thick viscous rose-gold liquid
that has lost its surface tension and slumped into a heavy folded ribbon lying across a
flat polished clear glass slide, lit by a large soft rectangular studio softbox from the
upper left. The ribbon is several millimetres thick, glossy and wet-looking, and has
folded over itself once so that a soft rounded lip of liquid curls back on the fold and
catches one long continuous specular highlight along its entire edge. The liquid is a
warm rose-gold nude — pale peach-cream on the lit ridges, deepening through warm
rose-gold to a rich translucent amber in the thick of the fold — and very fine metallic
flake suspended inside it catches the directional light as scattered points of warm gold
across the whole mass. A slow warm caustic glow spreads on the glass under the thickest
part. Behind and around the slide the studio falls away into near-total soft black with
no visible walls, props, tools, hands or equipment. Shot on a macro lens, tack sharp on
the folded edge at maximum magnification. The ribbon lies across the upper two-thirds of
the tall frame running diagonally from the left edge down toward the right, and the lower
third of the frame is kept clean and empty in soft black. Photographic, cinematic,
expensive. Absolutely no text, no captions, no labels, no printing, no logos, no
watermarks, no UI, no borders, no panels, no letterboxing; the scene fills the entire
frame to every edge.
```

### 1.3.4 Scene 04 anchor — `anchor-mobile-04.png`

**Attach `anchor-desktop-04.png` as a reference image.**

```
An extreme macro photograph, 9:16 vertical, taken from inside a mass of thick translucent
rose-gold liquid that fills the entire tall frame edge to edge with nothing else visible.
The liquid is backlit from behind and slightly above, so the whole frame glows warm —
pale luminous peach-cream where the material is thinnest, deepening through warm
rose-gold to a deep amber-brown where it is thickest — and slow soft internal folds and
density variations curve down the frame like sunlit fabric. Very fine metallic flake
suspended in the liquid catches the light as scattered sharp points of warm gold at
varying depths, some near and crisp, some deep and soft. No container, no slide, no
surface, no horizon, no edge of the material and no background is visible anywhere — the
substance is the entire world of the image. Shot on a macro lens, tack sharp on the flake
at the plane of focus with soft falloff in front and behind. Photographic, cinematic,
abstract, warm, luminous. Absolutely no text, no captions, no labels, no printing, no
logos, no watermarks, no UI, no borders, no panels, no letterboxing; the material fills
the entire frame to every edge.
```

### 1.3.5 Scene 05 anchor — `anchor-mobile-05.png`

**Attach `anchor-desktop-05.png` as a reference image** so the tube, the cap and the
stone are the same objects under the same light. The no-printing clause matters here more
than anywhere else in the pack.

```
A macro studio photograph, 9:16 vertical, of one small cylindrical cosmetic tube standing
upright on a flat dark grey stone surface, lit by a large soft rectangular studio softbox
from the upper left. The tube body is completely clear smooth glass with no label, no
printing, no engraving, no embossing, no etching, no sticker and no marking of any kind
anywhere on it, and it is filled with a thick glossy warm rose-gold nude liquid that
glows where the light passes through it and throws a warm caustic pool onto the stone
beside it. The cap is plain brushed silver metal with a fine circular grain, slightly
wider than the body, seated square on top, and it is likewise completely unmarked. A flat
flocked doe-foot applicator paddle rests on the stone beside the tube, its soft matte
surface loaded with a visible glossy bead of the same rose-gold liquid. Behind the stone
the studio falls away into near-total soft black with no visible walls, props, tools,
hands or equipment. Shot on a macro lens at a slight three-quarter angle just above the
height of the cap, tack sharp on the glass and the liquid inside it. The tube stands in
the upper two-thirds of the tall frame and the lower third of the frame is kept clean and
empty in soft black. Photographic, cinematic, expensive, clinical. Absolutely no text, no
letters, no numerals, no words, no captions, no labels, no printing, no branding, no
logos, no watermarks, no UI, no borders, no panels, no letterboxing; the scene fills the
entire frame to every edge.
```

### 1.3.6 Scene 06 anchor — `anchor-mobile-06.png`

**Attach `anchor-desktop-06.png` as a reference image** so it is recognisably the same
mouth under the same light. One mouth, tight crop — nothing else.

```
An extreme close-up beauty photograph, 9:16 vertical, of one human mouth and nothing
else, cropped tightly so that only the lips, the philtrum above them and a small area of
smooth skin on the chin below are in frame — no eyes, no nose, no nostrils, no cheeks, no
jawline, no hair and no full face are visible anywhere. The lips are relaxed and gently
closed, freshly coated in a thick high-shine warm rose-gold nude gloss that sits wet on
the surface and catches one bright soft rectangular specular highlight across the centre
of the lower lip and a second smaller highlight on the upper lip bow. Very fine metallic
flake in the gloss catches the light as scattered points of warm gold. The skin is
natural and softly textured with visible fine detail, warm mid-tone, no heavy makeup and
no foundation cast. Lit by a large soft rectangular studio softbox from the upper left
with deep soft falloff, the background behind the skin dropping to near-total soft black.
Shot on a macro lens, tack sharp on the wet surface of the lower lip. The mouth sits in
the upper two-thirds of the tall frame and the lower third of the frame is kept clean and
empty in soft black. Photographic, cinematic, expensive, calm, closed mouth, no smile, no
teeth, no tongue. Absolutely no text, no captions, no labels, no logos, no watermarks, no
UI, no borders, no panels, no letterboxing; the scene fills the entire frame to every
edge.
```

## 1.4 Product stills — 1:1 square, highest resolution available

Six shades, one vessel, one lighting setup. **Attach `anchor-desktop-05.png` as a
reference image to every one of these six** so the tube, the cap, the stone and the light
are identical across the grid and only the liquid colour changes. Consistency across the
six is what makes the range look like a range.

The same no-printing rule applies and is written into each prompt. Six unlabelled tubes
that differ only in colour is exactly right.

### 1.4.1 Slip 01, clear — `product-slip-01.png`

```
A macro studio photograph, 1:1 square, of one small cylindrical cosmetic tube standing
upright and centred on a flat dark grey stone surface, lit by a large soft rectangular
studio softbox from the upper left. The tube body is completely clear smooth glass with
no label, no printing, no engraving, no embossing, no etching, no sticker and no marking
of any kind anywhere on it, and it is filled with a thick glossy completely colourless
water-clear liquid that reads as pure transparent shine, carrying a faint warm shimmer
where very fine metallic flake inside it catches the light, and throwing a bright clean
caustic pool onto the stone beside it. The cap is plain brushed silver metal with a fine
circular grain, slightly wider than the body, seated square on top, and it is likewise
completely unmarked. Behind the stone the studio falls away into near-total soft black
with no visible walls, props, tools, hands or equipment. Shot on a macro lens at a slight
three-quarter angle just above the height of the cap, tack sharp on the glass and the
liquid inside it, the whole tube comfortably inside the frame with even dark margin on
all sides. Photographic, cinematic, expensive, clinical. Absolutely no text, no letters,
no numerals, no words, no captions, no labels, no printing, no branding, no logos, no
watermarks, no UI, no borders, no panels, no letterboxing; the scene fills the entire
frame to every edge.
```

### 1.4.2 Shell 02, pale nude — `product-shell-02.png`

```
A macro studio photograph, 1:1 square, of one small cylindrical cosmetic tube standing
upright and centred on a flat dark grey stone surface, lit by a large soft rectangular
studio softbox from the upper left. The tube body is completely clear smooth glass with
no label, no printing, no engraving, no embossing, no etching, no sticker and no marking
of any kind anywhere on it, and it is filled with a thick glossy pale pink-beige liquid —
a soft milky translucent nude, cool cream where the light passes through it and deepening
to a gentle warm taupe where it thickens — carrying a faint shimmer where very fine
metallic flake inside it catches the light, and throwing a soft pale caustic pool onto
the stone beside it. The cap is plain brushed silver metal with a fine circular grain,
slightly wider than the body, seated square on top, and it is likewise completely
unmarked. Behind the stone the studio falls away into near-total soft black with no
visible walls, props, tools, hands or equipment. Shot on a macro lens at a slight
three-quarter angle just above the height of the cap, tack sharp on the glass and the
liquid inside it, the whole tube comfortably inside the frame with even dark margin on
all sides. Photographic, cinematic, expensive, clinical. Absolutely no text, no letters,
no numerals, no words, no captions, no labels, no printing, no branding, no logos, no
watermarks, no UI, no borders, no panels, no letterboxing; the scene fills the entire
frame to every edge.
```

### 1.4.3 Dune 04, rose-gold nude — `product-dune-04.png`

This is the hero shade and the one the entire scroll sequence is made of. It should match
`anchor-desktop-05.png` almost exactly.

```
A macro studio photograph, 1:1 square, of one small cylindrical cosmetic tube standing
upright and centred on a flat dark grey stone surface, lit by a large soft rectangular
studio softbox from the upper left. The tube body is completely clear smooth glass with
no label, no printing, no engraving, no embossing, no etching, no sticker and no marking
of any kind anywhere on it, and it is filled with a thick glossy warm rose-gold nude
liquid — pale peach-cream where the light passes through it, deepening through warm
rose-gold to a rich translucent amber where it thickens — carrying scattered points of
warm gold where very fine metallic flake inside it catches the light, and throwing a warm
golden caustic pool onto the stone beside it. The cap is plain brushed silver metal with
a fine circular grain, slightly wider than the body, seated square on top, and it is
likewise completely unmarked. Behind the stone the studio falls away into near-total soft
black with no visible walls, props, tools, hands or equipment. Shot on a macro lens at a
slight three-quarter angle just above the height of the cap, tack sharp on the glass and
the liquid inside it, the whole tube comfortably inside the frame with even dark margin
on all sides. Photographic, cinematic, expensive, clinical. Absolutely no text, no
letters, no numerals, no words, no captions, no labels, no printing, no branding, no
logos, no watermarks, no UI, no borders, no panels, no letterboxing; the scene fills the
entire frame to every edge.
```

### 1.4.4 Ember 07, burnished bronze — `product-ember-07.png`

```
A macro studio photograph, 1:1 square, of one small cylindrical cosmetic tube standing
upright and centred on a flat dark grey stone surface, lit by a large soft rectangular
studio softbox from the upper left. The tube body is completely clear smooth glass with
no label, no printing, no engraving, no embossing, no etching, no sticker and no marking
of any kind anywhere on it, and it is filled with a thick glossy burnished bronze liquid
— a deep warm metallic brown, glowing amber-orange where the light passes through its
thinnest edge and falling to a dark chocolate-bronze in its mass — carrying dense
scattered points of bright warm gold where fine metallic flake inside it catches the
light, and throwing a deep amber caustic pool onto the stone beside it. The cap is plain
brushed silver metal with a fine circular grain, slightly wider than the body, seated
square on top, and it is likewise completely unmarked. Behind the stone the studio falls
away into near-total soft black with no visible walls, props, tools, hands or equipment.
Shot on a macro lens at a slight three-quarter angle just above the height of the cap,
tack sharp on the glass and the liquid inside it, the whole tube comfortably inside the
frame with even dark margin on all sides. Photographic, cinematic, expensive, clinical.
Absolutely no text, no letters, no numerals, no words, no captions, no labels, no
printing, no branding, no logos, no watermarks, no UI, no borders, no panels, no
letterboxing; the scene fills the entire frame to every edge.
```

### 1.4.5 Fig 11, deep berry — `product-fig-11.png`

```
A macro studio photograph, 1:1 square, of one small cylindrical cosmetic tube standing
upright and centred on a flat dark grey stone surface, lit by a large soft rectangular
studio softbox from the upper left. The tube body is completely clear smooth glass with
no label, no printing, no engraving, no embossing, no etching, no sticker and no marking
of any kind anywhere on it, and it is filled with a thick glossy deep berry liquid — a
dark translucent plum, glowing a rich wine-red where the light passes through its
thinnest edge and falling to a near-black purple in its mass — carrying a few scattered
points of cool silver-pink where very fine metallic flake inside it catches the light,
and throwing a deep magenta caustic pool onto the stone beside it. The cap is plain
brushed silver metal with a fine circular grain, slightly wider than the body, seated
square on top, and it is likewise completely unmarked. Behind the stone the studio falls
away into near-total soft black with no visible walls, props, tools, hands or equipment.
Shot on a macro lens at a slight three-quarter angle just above the height of the cap,
tack sharp on the glass and the liquid inside it, the whole tube comfortably inside the
frame with even dark margin on all sides. Photographic, cinematic, expensive, clinical.
Absolutely no text, no letters, no numerals, no words, no captions, no labels, no
printing, no branding, no logos, no watermarks, no UI, no borders, no panels, no
letterboxing; the scene fills the entire frame to every edge.
```

### 1.4.6 Salt 12, cool berry-nude — `product-salt-12.png`

```
A macro studio photograph, 1:1 square, of one small cylindrical cosmetic tube standing
upright and centred on a flat dark grey stone surface, lit by a large soft rectangular
studio softbox from the upper left. The tube body is completely clear smooth glass with
no label, no printing, no engraving, no embossing, no etching, no sticker and no marking
of any kind anywhere on it, and it is filled with a thick glossy muted mauve-taupe liquid
— a cool dusty berry-nude, soft greyed lilac where the light passes through it and
deepening to a smoky brown-plum where it thickens — carrying a faint cool shimmer where
very fine metallic flake inside it catches the light, and throwing a muted mauve caustic
pool onto the stone beside it. The cap is plain brushed silver metal with a fine circular
grain, slightly wider than the body, seated square on top, and it is likewise completely
unmarked. Behind the stone the studio falls away into near-total soft black with no
visible walls, props, tools, hands or equipment. Shot on a macro lens at a slight
three-quarter angle just above the height of the cap, tack sharp on the glass and the
liquid inside it, the whole tube comfortably inside the frame with even dark margin on
all sides. Photographic, cinematic, expensive, clinical. Absolutely no text, no letters,
no numerals, no words, no captions, no labels, no printing, no branding, no logos, no
watermarks, no UI, no borders, no panels, no letterboxing; the scene fills the entire
frame to every edge.
```

---

# Part 2 — Desktop video (Flow, 16:9)

Chaining path, six clips. Start frame for scene 01 is `anchor-desktop-01.png`; the start
frame for every scene after that is the **last frame of the previous clip**. If Flow
offers an end frame field, put the next scene's anchor still in it.

Download as `desktop-01.mp4` … `desktop-06.mp4`. I join them and inspect all five seams
for jumps in position, scale, lighting and camera direction.

Settings: **16:9**, highest quality available, no audio. Durations per the table above —
6s on 01, 03, 05, 06 and 8s on 02 and 04.

## 2.1 Scene 01 — Opening: the dune

Start frame: `anchor-desktop-01.png`. Duration 6s.

```
One continuous unbroken camera move with no cuts. A slow steady lateral drift to the
right across a vast rose-gold sand desert at golden hour, as though shot from a long lens
on a slow dolly. Long smooth curved dune ridges pass through the frame, their crests
catching a low raking sun from the left so that each ridge carries one continuous soft
highlight along its spine and falls into a deep warm shadow on its right flank, and as
the camera drifts the highlights travel slowly along the crests and the shadows lengthen
and shorten with the changing angle. The sand is fine and unbroken — no footprints, no
tracks, no vegetation, no rocks, no structures, no animals, no people, no vehicles. Very
fine airborne sand moves in slow warm drifts low across the ridges. The colour is
strictly a warm rose-gold nude: pale peach-cream on the lit crests, deepening through
warm rose-gold in the mid-tones to a dark brown-black in the deepest shadow troughs. A
hazy warm sky occupies the upper portion, graded from pale cream at the horizon to a soft
dusty rose above, with no clouds, no sun disc and no birds. Gentle atmospheric haze
separates the far ridges. Tack sharp on the nearest crest throughout. The camera keeps
moving for the entire shot at one constant unhurried speed and never settles into a
static hold, never zooms and never changes height. The dune ridges stay in the lower
two-thirds of the frame and the upper-left third is kept clean and empty. Photographic,
cinematic, expensive, serene, entirely natural, a real place. One seamless continuous
cinematic camera journey. Absolutely no cuts, no shot changes, no text, no titles, no
captions, no logos, no watermarks, no UI. The environment fills the entire frame to every
edge with no borders, panels or letterboxing.
```

## 2.2 Scene 02 — The reveal (protected)

Start frame: last frame of `desktop-01.mp4`. Duration 8s.

This is the idea of the entire site. The scale collapse must happen inside one unbroken
pull-back — if it cuts, there is no site. Regenerate this one before you accept it.

```
One continuous unbroken camera move with no cuts, a single smooth accelerating pull-back
that never stops and never cuts. The shot begins tight on what appears to be a vast
rose-gold sand desert at golden hour, and as the camera retreats the scale of the scene
collapses continuously: the curved dune ridges are progressively revealed to be the
domed surface of one single small bead of thick glossy rose-gold liquid resting on a flat
polished clear glass slide, what looked like a raking desert sun resolving into one long
soft rectangular reflection of a large studio softbox lying across the bead's upper left
curve, and what looked like a hazy sky resolving into the soft black falloff of a studio
behind it. The transformation happens purely through the change of distance and scale in
one move — the sand never dissolves, never fades, never cross-dissolves and is never
replaced; it is the same surface seen from further away the whole time. By the end of the
move the bead sits small and centred in the frame, wet-looking and flawlessly glossy,
with a second smaller pinpoint highlight near its crest, very fine metallic flake
suspended inside it catching the directional light as scattered points of warm gold, and
a soft shadow and faint warm caustic pool spread on the glass beneath it. The liquid is a
warm rose-gold nude — pale peach-cream where the light strikes, deepening through warm
rose-gold to a rich translucent amber where it thickens against the glass. Lit by one
large soft rectangular studio softbox from the upper left with deep soft falloff into
near-total black; no visible walls, props, tools, hands, people or equipment anywhere. No
cosmetic tube, no applicator and no packaging appears at any point. Macro remains tack
sharp on the surface of the bead at maximum magnification throughout — sharpness, not
blur, conveys the scale. The camera moves for the entire shot and only comes to rest in
the final moment. The bead finishes centred with clean dark space around it on all sides.
Photographic, cinematic, expensive, clinical, a genuine optical scale reveal. One
seamless continuous cinematic camera journey. Absolutely no cuts, no shot changes, no
text, no titles, no captions, no labels, no printing, no logos, no watermarks, no UI. The
environment fills the entire frame to every edge with no borders, panels or letterboxing.
```

## 2.3 Scene 03 — The collapse

Start frame: last frame of `desktop-02.mp4`. Duration 6s.

```
One continuous unbroken camera move with no cuts. The camera pushes in slowly and
steadily on one single bead of thick glossy rose-gold liquid resting on a flat polished
clear glass slide, and over the length of the shot the bead loses its surface tension and
collapses in slow motion: the dome sags, the edge creeps outward across the glass, and
the mass slumps and pours over on itself into a heavy folded ribbon several millimetres
thick, curling once so that a soft rounded lip of liquid rolls back on the fold and
catches one long continuous specular highlight along its entire edge. The motion is thick
and slow and viscous throughout, like cold honey, never watery and never splashing. Very
fine metallic flake suspended in the liquid turns with the fold and catches the
directional light as scattered points of warm gold across the whole mass. The liquid is a
warm rose-gold nude — pale peach-cream on the lit ridges, deepening through warm
rose-gold to a rich translucent amber in the thick of the fold — and a slow warm caustic
glow spreads on the glass beneath the thickest part as it moves. Lit by one large soft
rectangular studio softbox from the upper left with deep soft falloff into near-total
black; no visible walls, props, tools, hands, people or equipment anywhere. No cosmetic
tube and no applicator appears at any point. Macro remains tack sharp on the folded edge
at maximum magnification throughout. The camera and the liquid both keep moving for the
entire shot and never settle into a static hold. The mass stays in the lower-right of the
frame and the left third of the frame is kept clean and empty in soft black.
Photographic, cinematic, expensive, slow, heavy. One seamless continuous cinematic camera
journey. Absolutely no cuts, no shot changes, no text, no titles, no captions, no labels,
no printing, no logos, no watermarks, no UI. The environment fills the entire frame to
every edge with no borders, panels or letterboxing.
```

## 2.4 Scene 04 — BLUR-THROUGH: the pour (protected)

Start frame: last frame of `desktop-03.mp4`. Duration 8s.

The load-bearing beat. The glass slide must leave behind the material and the tube must
not yet exist — the wall of gloss crossing the lens is the only place that change can
hide.

```
One continuous unbroken camera move with no cuts. The camera travels forward steadily
into a thick folded ribbon of translucent rose-gold liquid until the material swells and
fills the entire frame edge to edge, and then keeps travelling through the inside of it
for the rest of the shot. As the frame fills, the glass slide, the studio and every
background element pass out of view behind the material and never return. Inside, the
liquid is backlit from behind and slightly above so the whole frame glows warm — pale
luminous peach-cream where the material is thinnest, deepening through warm rose-gold to
a deep amber-brown where it is thickest — and slow soft internal folds and density
variations drift steadily across the frame like sunlit fabric as the camera advances
through them. Very fine metallic flake suspended in the liquid drifts past the lens at
varying depths, some near and crisp, some deep and soft, catching the light as sharp
scattered points of warm gold. No container, no slide, no surface, no horizon, no edge of
the material and no background is visible at any point once the frame has filled — the
substance is the entire world of the shot. No cosmetic tube, no applicator, no packaging,
no lips and no skin appear at any point. The motion is slow, thick and continuous, never
watery, never splashing, never turbulent. Tack sharp on the flake at the plane of focus
with soft falloff in front and behind. The camera keeps moving forward for the entire
shot and never settles into a static hold. Photographic, cinematic, abstract, warm,
luminous, immersive. One seamless continuous cinematic camera journey. Absolutely no
cuts, no shot changes, no text, no titles, no captions, no labels, no printing, no logos,
no watermarks, no UI. The material fills the entire frame to every edge with no borders,
panels or letterboxing.
```

## 2.5 Scene 05 — Loading the tube

Start frame: last frame of `desktop-04.mp4`. Duration 6s.

Highest-risk clip in Part 2. A cosmetic tube is the one object these models reflexively
print a label onto.

```
One continuous unbroken camera move with no cuts. The camera pulls back steadily out of a
mass of thick translucent rose-gold liquid as the material thins and gathers, and the
liquid draws itself down onto the flat flocked paddle of a doe-foot cosmetic applicator,
coating it in a glossy even bead. The applicator then retracts smoothly downward into a
small cylindrical tube standing upright on a flat dark grey stone surface; a plain
brushed silver metal cap, slightly wider than the body, travels down and seats square on
top; and the tube rotates once slowly on its axis and settles upright and still in the
last moment of the shot. The tube body is completely clear smooth glass with no label, no
printing, no engraving, no embossing, no etching, no sticker and no marking of any kind
anywhere on it, and it is filled with the same thick glossy warm rose-gold nude liquid,
which glows where the light passes through it and throws a warm caustic pool onto the
stone beside it. The cap is likewise completely unmarked and unprinted. No hands, no
fingers, no arms, no people and no skin appear at any point — the applicator and the cap
move on their own. Lit by one large soft rectangular studio softbox from the upper left
with deep soft falloff into near-total black; no visible walls, props, tools or equipment
anywhere behind the stone. Tack sharp on the glass and the liquid inside it. The camera
keeps moving for the entire shot and only comes to rest as the tube settles. The tube
finishes standing centre-right in the frame and the left half of the frame is kept clean
and empty in soft black. Photographic, cinematic, expensive, clinical. One seamless
continuous cinematic camera journey. Absolutely no cuts, no shot changes, no text, no
letters, no numerals, no words, no titles, no captions, no labels, no printing, no
branding, no logos, no watermarks, no UI. The environment fills the entire frame to every
edge with no borders, panels or letterboxing.
```

## 2.6 Scene 06 — Resolution: the mouth

Start frame: last frame of `desktop-05.mp4`. Duration 6s.

The last frame of this clip is the last frame of the site. One mouth, tight crop, closed,
no teeth.

```
One continuous unbroken camera move with no cuts. The camera moves in slowly and steadily
on one human mouth and nothing else, cropped tightly throughout so that only the lips,
the philtrum above them and a small area of smooth skin on the chin below are ever in
frame — no eyes, no nose, no nostrils, no cheeks, no jawline, no hair and no full face
are visible at any point. A flat flocked doe-foot applicator paddle loaded with thick
glossy warm rose-gold nude liquid enters from the lower right, presses once gently
against the centre of the lower lip, transfers a wet coat of gloss, and withdraws out of
frame the way it came. The lips then part very slightly, press together once, and settle
closed and still, now evenly coated in a thick high-shine warm rose-gold nude gloss that
sits wet on the surface and catches one bright soft rectangular specular highlight across
the centre of the lower lip and a second smaller highlight on the upper lip bow. Very
fine metallic flake in the gloss catches the light as scattered points of warm gold. The
mouth stays closed and relaxed throughout — no smile, no teeth, no tongue, no speech, no
expression. No hands, no fingers and no arms are visible; the applicator enters and
leaves on its own. The skin is natural and softly textured with visible fine detail, warm
mid-tone, no heavy makeup and no foundation cast. Lit by one large soft rectangular
studio softbox from the upper left with deep soft falloff, the background behind the skin
dropping to near-total soft black. Tack sharp on the wet surface of the lower lip. The
camera keeps moving for the entire shot and only comes to rest in the final moment. The
mouth stays left of centre in the frame and the right third of the frame is kept clean
and empty in soft black. Photographic, cinematic, expensive, calm, still. One seamless
continuous cinematic camera journey. Absolutely no cuts, no shot changes, no text, no
titles, no captions, no labels, no printing, no logos, no watermarks, no UI. The
environment fills the entire frame to every edge with no borders, panels or letterboxing.
```

---

# Part 3 — Portrait video (Flow, 9:16)

A separate sequence, generated the same way. Start frame for scene 01 is
`anchor-mobile-01.png`; the start frame for every scene after that is the **last frame of
the previous portrait clip**. If Flow offers an end frame field, put the next scene's
mobile anchor still in it.

Download as `mobile-01.mp4` … `mobile-06.mp4`.

Settings: **9:16**, highest quality available, no audio. Same durations as desktop — 6s
on 01, 03, 05, 06 and 8s on 02 and 04.

The compositions differ from desktop on purpose: the mobile copy rail sits at the bottom
of the screen, so these hold their clean space in the **lower third** rather than to one
side. Do not crop the desktop clips to portrait — the reveal in scene 02 needs the tall
frame's own headroom to land.

## 3.1 Scene 01 — Opening: the dune

Start frame: `anchor-mobile-01.png`. Duration 6s.

```
One continuous unbroken camera move with no cuts, in a tall vertical 9:16 frame. A slow
steady lateral drift to the right across a vast rose-gold sand desert at golden hour, as
though shot from a long lens on a slow dolly. Long smooth curved dune ridges pass through
the middle band of the frame in receding layers, their crests catching a low raking sun
from the left so that each ridge carries one continuous soft highlight along its spine
and falls into a deep warm shadow on its right flank, and as the camera drifts the
highlights travel slowly along the crests and the shadows lengthen and shorten with the
changing angle. The sand is fine and unbroken — no footprints, no tracks, no vegetation,
no rocks, no structures, no animals, no people, no vehicles. Very fine airborne sand
moves in slow warm drifts low across the ridges. The colour is strictly a warm rose-gold
nude: pale peach-cream on the lit crests, deepening through warm rose-gold in the
mid-tones to a dark brown-black in the deepest shadow troughs. A hazy warm sky fills the
upper third, graded from pale cream at the horizon to a soft dusty rose above, with no
clouds, no sun disc and no birds. The lower third of the frame stays a single large
unbroken dune flank lying entirely in deep warm shadow, smooth and almost featureless,
kept clean and empty. Gentle atmospheric haze separates the far ridges. Tack sharp on the
nearest crest throughout. The camera keeps moving for the entire shot at one constant
unhurried speed and never settles into a static hold, never zooms and never changes
height. Photographic, cinematic, expensive, serene, entirely natural, a real place. One
seamless continuous cinematic camera journey. Absolutely no cuts, no shot changes, no
text, no titles, no captions, no logos, no watermarks, no UI. The environment fills the
entire frame to every edge with no borders, panels or letterboxing.
```

## 3.2 Scene 02 — The reveal (protected)

Start frame: last frame of `mobile-01.mp4`. Duration 8s.

```
One continuous unbroken camera move with no cuts, in a tall vertical 9:16 frame, a single
smooth accelerating pull-back that never stops and never cuts. The shot begins tight on
what appears to be a vast rose-gold sand desert at golden hour, and as the camera retreats
the scale of the scene collapses continuously: the curved dune ridges are progressively
revealed to be the domed surface of one single small bead of thick glossy rose-gold
liquid resting on a flat polished clear glass slide, what looked like a raking desert sun
resolving into one long soft rectangular reflection of a large studio softbox lying across
the bead's upper left curve, and what looked like a hazy sky resolving into the soft black
falloff of a studio behind it. The transformation happens purely through the change of
distance and scale in one move — the sand never dissolves, never fades, never
cross-dissolves and is never replaced; it is the same surface seen from further away the
whole time. By the end of the move the bead sits small and slightly above the vertical
centre of the tall frame, wet-looking and flawlessly glossy, with a second smaller
pinpoint highlight near its crest, very fine metallic flake suspended inside it catching
the directional light as scattered points of warm gold, and a soft shadow and faint warm
caustic pool spread on the glass beneath it. The liquid is a warm rose-gold nude — pale
peach-cream where the light strikes, deepening through warm rose-gold to a rich
translucent amber where it thickens against the glass. Lit by one large soft rectangular
studio softbox from the upper left with deep soft falloff into near-total black; no
visible walls, props, tools, hands, people or equipment anywhere. No cosmetic tube, no
applicator and no packaging appears at any point. Macro remains tack sharp on the surface
of the bead at maximum magnification throughout — sharpness, not blur, conveys the scale.
The camera moves for the entire shot and only comes to rest in the final moment, finishing
with generous clean dark space above the bead and below it. Photographic, cinematic,
expensive, clinical, a genuine optical scale reveal. One seamless continuous cinematic
camera journey. Absolutely no cuts, no shot changes, no text, no titles, no captions, no
labels, no printing, no logos, no watermarks, no UI. The environment fills the entire
frame to every edge with no borders, panels or letterboxing.
```

## 3.3 Scene 03 — The collapse

Start frame: last frame of `mobile-02.mp4`. Duration 6s.

```
One continuous unbroken camera move with no cuts, in a tall vertical 9:16 frame. The
camera pushes in slowly and steadily on one single bead of thick glossy rose-gold liquid
resting on a flat polished clear glass slide, and over the length of the shot the bead
loses its surface tension and collapses in slow motion: the dome sags, the edge creeps
outward across the glass, and the mass slumps and pours over on itself into a heavy
folded ribbon several millimetres thick, curling once so that a soft rounded lip of
liquid rolls back on the fold and catches one long continuous specular highlight along
its entire edge. The motion is thick and slow and viscous throughout, like cold honey,
never watery and never splashing. Very fine metallic flake suspended in the liquid turns
with the fold and catches the directional light as scattered points of warm gold across
the whole mass. The liquid is a warm rose-gold nude — pale peach-cream on the lit ridges,
deepening through warm rose-gold to a rich translucent amber in the thick of the fold —
and a slow warm caustic glow spreads on the glass beneath the thickest part as it moves.
Lit by one large soft rectangular studio softbox from the upper left with deep soft
falloff into near-total black; no visible walls, props, tools, hands, people or equipment
anywhere. No cosmetic tube and no applicator appears at any point. Macro remains tack
sharp on the folded edge at maximum magnification throughout. The camera and the liquid
both keep moving for the entire shot and never settle into a static hold. The mass stays
in the upper two-thirds of the tall frame running diagonally from the left edge down
toward the right, and the lower third of the frame is kept clean and empty in soft black.
Photographic, cinematic, expensive, slow, heavy. One seamless continuous cinematic camera
journey. Absolutely no cuts, no shot changes, no text, no titles, no captions, no labels,
no printing, no logos, no watermarks, no UI. The environment fills the entire frame to
every edge with no borders, panels or letterboxing.
```

## 3.4 Scene 04 — BLUR-THROUGH: the pour (protected)

Start frame: last frame of `mobile-03.mp4`. Duration 8s.

```
One continuous unbroken camera move with no cuts, in a tall vertical 9:16 frame. The
camera travels forward steadily into a thick folded ribbon of translucent rose-gold
liquid until the material swells and fills the entire tall frame edge to edge, and then
keeps travelling through the inside of it for the rest of the shot. As the frame fills,
the glass slide, the studio and every background element pass out of view behind the
material and never return. Inside, the liquid is backlit from behind and slightly above
so the whole frame glows warm — pale luminous peach-cream where the material is thinnest,
deepening through warm rose-gold to a deep amber-brown where it is thickest — and slow
soft internal folds and density variations drift steadily down the frame like sunlit
fabric as the camera advances through them. Very fine metallic flake suspended in the
liquid drifts past the lens at varying depths, some near and crisp, some deep and soft,
catching the light as sharp scattered points of warm gold. No container, no slide, no
surface, no horizon, no edge of the material and no background is visible at any point
once the frame has filled — the substance is the entire world of the shot. No cosmetic
tube, no applicator, no packaging, no lips and no skin appear at any point. The motion is
slow, thick and continuous, never watery, never splashing, never turbulent. Tack sharp on
the flake at the plane of focus with soft falloff in front and behind. The camera keeps
moving forward for the entire shot and never settles into a static hold. Photographic,
cinematic, abstract, warm, luminous, immersive. One seamless continuous cinematic camera
journey. Absolutely no cuts, no shot changes, no text, no titles, no captions, no labels,
no printing, no logos, no watermarks, no UI. The material fills the entire frame to every
edge with no borders, panels or letterboxing.
```

## 3.5 Scene 05 — Loading the tube

Start frame: last frame of `mobile-04.mp4`. Duration 6s.

```
One continuous unbroken camera move with no cuts, in a tall vertical 9:16 frame. The
camera pulls back steadily out of a mass of thick translucent rose-gold liquid as the
material thins and gathers, and the liquid draws itself down onto the flat flocked paddle
of a doe-foot cosmetic applicator, coating it in a glossy even bead. The applicator then
retracts smoothly downward into a small cylindrical tube standing upright on a flat dark
grey stone surface; a plain brushed silver metal cap, slightly wider than the body,
travels down and seats square on top; and the tube rotates once slowly on its axis and
settles upright and still in the last moment of the shot. The tube body is completely
clear smooth glass with no label, no printing, no engraving, no embossing, no etching, no
sticker and no marking of any kind anywhere on it, and it is filled with the same thick
glossy warm rose-gold nude liquid, which glows where the light passes through it and
throws a warm caustic pool onto the stone beside it. The cap is likewise completely
unmarked and unprinted. No hands, no fingers, no arms, no people and no skin appear at
any point — the applicator and the cap move on their own. Lit by one large soft
rectangular studio softbox from the upper left with deep soft falloff into near-total
black; no visible walls, props, tools or equipment anywhere behind the stone. Tack sharp
on the glass and the liquid inside it. The camera keeps moving for the entire shot and
only comes to rest as the tube settles. The tube finishes standing in the upper
two-thirds of the tall frame and the lower third of the frame is kept clean and empty in
soft black. Photographic, cinematic, expensive, clinical. One seamless continuous
cinematic camera journey. Absolutely no cuts, no shot changes, no text, no letters, no
numerals, no words, no titles, no captions, no labels, no printing, no branding, no
logos, no watermarks, no UI. The environment fills the entire frame to every edge with no
borders, panels or letterboxing.
```

## 3.6 Scene 06 — Resolution: the mouth

Start frame: last frame of `mobile-05.mp4`. Duration 6s.

```
One continuous unbroken camera move with no cuts, in a tall vertical 9:16 frame. The
camera moves in slowly and steadily on one human mouth and nothing else, cropped tightly
throughout so that only the lips, the philtrum above them and a small area of smooth skin
on the chin below are ever in frame — no eyes, no nose, no nostrils, no cheeks, no
jawline, no hair and no full face are visible at any point. A flat flocked doe-foot
applicator paddle loaded with thick glossy warm rose-gold nude liquid enters from the
lower right, presses once gently against the centre of the lower lip, transfers a wet
coat of gloss, and withdraws out of frame the way it came. The lips then part very
slightly, press together once, and settle closed and still, now evenly coated in a thick
high-shine warm rose-gold nude gloss that sits wet on the surface and catches one bright
soft rectangular specular highlight across the centre of the lower lip and a second
smaller highlight on the upper lip bow. Very fine metallic flake in the gloss catches the
light as scattered points of warm gold. The mouth stays closed and relaxed throughout —
no smile, no teeth, no tongue, no speech, no expression. No hands, no fingers and no arms
are visible; the applicator enters and leaves on its own. The skin is natural and softly
textured with visible fine detail, warm mid-tone, no heavy makeup and no foundation cast.
Lit by one large soft rectangular studio softbox from the upper left with deep soft
falloff, the background behind the skin dropping to near-total soft black. Tack sharp on
the wet surface of the lower lip. The camera keeps moving for the entire shot and only
comes to rest in the final moment. The mouth stays in the upper two-thirds of the tall
frame and the lower third of the frame is kept clean and empty in soft black.
Photographic, cinematic, expensive, calm, still. One seamless continuous cinematic camera
journey. Absolutely no cuts, no shot changes, no text, no titles, no captions, no labels,
no printing, no logos, no watermarks, no UI. The environment fills the entire frame to
every edge with no borders, panels or letterboxing.
```

---

# Part 4 — What to send back

Drop everything into `sites/lip-gloss/_incoming/`.

| File | What it is |
|---|---|
| `symbol-01.png` … `symbol-04.png` | Four symbol concepts — reference for the hand-drawn SVG |
| `anchor-desktop-01.png` | Frame 0 of the desktop sequence |
| `anchor-mobile-01.png` | Frame 0 of the portrait sequence |
| `anchor-desktop-02.png` … `-06.png` | Only if you used end frames or had to retry a seam |
| `anchor-mobile-02.png` … `-06.png` | Only if you used end frames or had to retry a seam |
| `product-slip-01.png` | Clear · £18 |
| `product-shell-02.png` | Pale nude · £20 |
| `product-dune-04.png` | Rose-gold nude · £22 — hero |
| `product-ember-07.png` | Burnished bronze · £24 |
| `product-fig-11.png` | Deep berry · £24 |
| `product-salt-12.png` | Cool berry-nude · £26 |
| `desktop-01.mp4` … `desktop-06.mp4` | 16:9 sequence, in order |
| `mobile-01.mp4` … `mobile-06.mp4` | 9:16 sequence, in order |

`*.mp4` and `*.mov` are gitignored inside `_incoming/`, so the masters stay local while
the extracted frames and the still masters are committed.

**Check before you send — the five things that actually go wrong:**

1. **Any printing on the tube or cap** in scene 05 or the product stills. This is the
   most likely failure in the whole pack. An unlabelled tube is correct.
2. **Scene 01 looking like a cosmetic.** If a tube, a bead or anything glossy appears in
   the opening clip, the reveal has nothing to reveal. It must read as a desert.
3. **Scene 02 cutting instead of pulling back.** A cross-dissolve or a jump is a fail —
   the scale collapse has to be one optical move or the site has no idea in it.
4. **Scene 06 widening past the mouth.** Any eyes, nose or teeth in frame and it stops
   being a beauty crop and starts being uncanny.
5. **A clip settling into a static hold** partway through. A frozen tail scrubs as dead
   scroll. If the last second stops moving, regenerate.

Send what you have as you get it — I can wire in desktop and portrait independently, and
partial delivery lets me measure real frame sizes early rather than guessing at them.
