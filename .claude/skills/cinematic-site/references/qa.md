# Phase 6 — Validate and hand off

Separate **checks you actually ran** from checks you did not. Compilation does not prove
smooth playback, and file size does not prove load speed. Say which is which.

## Automated

```sh
npm run build --workspace sites/<slug>
npx tsc --noEmit -p sites/<slug>
ls public/frames/desktop | wc -l    # must equal manifest.desktop.count
ls public/frames/mobile  | wc -l    # must equal manifest.mobile.count
du -sh public/frames/desktop public/frames/mobile
```

Frame-count mismatch against the manifest is the highest-frequency bug in this pattern
and shows up as a frozen final frame or a black flash. Check it every time.

### Market check — must return nothing

`SKILL.md` non-negotiable 10 fixes the market to the United States and the currency to
USD. Run this against the **built output**, not just the source, because a stray symbol in
a layout or a style tile will not show up in `site.ts`:

```sh
# 1. no non-USD currency, no UK locations, anywhere in source or build
grep -rnE '£|€|GBP|\bUK\b|United Kingdom|London|England|Royal Mail|\bVAT\b' \
  sites/<slug>/src sites/<slug>/dist sites/<slug>/style-tile.html

# 2. the document declares a US locale — not "en", not "en-GB"
grep -rn 'html lang=' sites/<slug>/src sites/<slug>/style-tile.html
```

The first command must print **nothing**. The second must print `lang="en-US"` on every
line. Both are one-line checks and both have caught real leaks: a site can be entirely USD
in `site.ts` and still ship `lang="en-GB"` from its layout, or still carry `£` in a style
tile that was written before the content file was converted.

## In a browser, by scrolling it

Desktop at 1440 and 1920, mobile at 320/375/393/430, plus one short viewport.

**Motion**
- [ ] Forward scroll is smooth with no visible stepping
- [ ] Reverse scroll retraces exactly — no drift, no jump
- [ ] Jump-scroll to the middle lands on the right frame
- [ ] The transition beat gets the space the plan allocated
- [ ] Holds sit where copy needs reading; motion beats never freeze mid-move
- [ ] Final frame holds; the sequence does not snap back to frame 0

**Content**
- [ ] Every chapter is readable before it leaves
- [ ] Copy never covers the subject or the hero action
- [ ] Type is crisp and selectable — it is HTML, not baked pixels
- [ ] No generated text, watermark or logo visible in any frame

**Interaction**
- [ ] Native scroll, no hijacking, no scroll-jacked snap
- [ ] Hidden overlays intercept no clicks
- [ ] Tab order contains no hidden links (`inert` applied when off)
- [ ] Skip control works and lands past the stage
- [ ] Anchors clear the fixed header
- [ ] Mobile menu: open, close, Escape, focus trap, closes on selection

**Fallbacks**
- [ ] `prefers-reduced-motion: reduce` → poster + full content in normal flow, **zero**
      frame requests (verify in the network panel)
- [ ] Simulated frame-404 → poster retained, page still usable
- [ ] JS disabled → `<noscript>` poster, content readable

**Network**
- [ ] Mobile requests only the portrait sequence; desktop only landscape
- [ ] Crossing the breakpoint aborts obsolete requests and releases the old bitmaps
- [ ] Frames load around the playhead, not sequentially from zero
- [ ] Page is interactive before the sequence finishes

## Publishing

Publish only within the scope the user authorised. Use a private preview where the
environment supports one. **Never silently expose a draft publicly.** If publishing is
unavailable, deliver a runnable local project and name the missing dependency.

Ask before configuring a deploy target or pushing to a remote — it touches their
accounts. Check whether the target repo is public before pushing.

### Netlify from this monorepo

`netlify.toml` goes in **`sites/<slug>/`**, never at the repo root:

```toml
[build]
  command = "npm run build --workspace sites/<slug>"
  publish = "sites/<slug>/dist"

[build.environment]
  NODE_VERSION = "22"
```

Then in the Netlify UI, under Build & deploy:

| Setting | Value | Why |
|---|---|---|
| **Package directory** | `sites/<slug>` | Netlify reads that site's `netlify.toml` from here |
| **Base directory** | *(empty — repo root)* | Where deps install; npm workspaces need the root |
| Build command | *(from the file)* | — |
| Publish directory | *(from the file)* | Relative to **base**, so the full `sites/<slug>/dist` |

This is Netlify's documented monorepo recommendation and it is what makes **one repo,
many Netlify sites** work. Never put a `netlify.toml` at the repo root: file-based config
overrides UI settings, so a root file would hijack the build of every site pointed at
this repo. A single `[build]` table cannot describe two sites either.

Netlify imports a **repository**, not a subfolder URL.

Ship `public/_headers` so returning visitors do not re-download the sequence:

```
/frames/*
  Cache-Control: public, max-age=31536000, immutable
/posters/*
  Cache-Control: public, max-age=31536000, immutable
/products/*
  Cache-Control: public, max-age=31536000, immutable
```

Tell the user the bandwidth arithmetic before they share the link: one full scroll-through
transfers the whole sequence, so a ~13MB desktop sequence is roughly 7,500 complete views
against Netlify's free 100GB/month.

### Deploy parity — required before claiming a site is deployable

A working tree that builds proves nothing about a fresh clone. An asset caught by a
`.gitignore`, or a workspace that only resolves because `node_modules` happens to be
there, both look fine locally and fail on Netlify. Reconstruct the clone and build it
from zero:

```sh
# `pwd -P` is required, not cosmetic: on macOS /var is a symlink to private/var, so the
# path `mktemp -d` returns always traverses one and `cpio -pdm` refuses to "extract
# through symlink" and copies NOTHING. It is a no-op on Linux, so it is always safe.
T=$(cd "$(mktemp -d)" && pwd -P)
{ git ls-files -z; git ls-files --others --exclude-standard -z; } | cpio -0 -pdm --quiet "$T"

# Prove the copy happened before blaming the build. Without this, an empty tree surfaces
# later as `npm install` failing with "Could not read package.json", which reads like a
# workspace bug rather than a copy that never ran.
test "$(find "$T" -type f | wc -l)" -gt 0 || { echo "parity: copy produced an EMPTY tree"; exit 1; }

cd "$T" && npm install && npm run build --workspace sites/<slug>
cd sites/<slug>/dist && python3 -m http.server 4500
```

Load it and confirm, by measurement:

- [ ] **Zero 4xx responses** anywhere in the network list
- [ ] Canvas scrubs; every product image loads on scroll
- [ ] `_headers` and `frames/manifest.json` present in `dist`
- [ ] `dist` frame counts equal the manifest counts
- [ ] `index.html` byte-identical to the local build

Only then is "it will look the same deployed" a claim you have earned.

## Handoff

Deliver:

1. The running site (local URL or authorised preview)
2. `style-tile.html`
3. Logo masters — prefer an editable vector; a raster export is **not** an SVG master
4. The original MP4(s), kept, not just the extracted frames
5. `src/content/site.ts` as the editing surface, with a short note on how to change copy,
   products and prices
6. `production-notes.md`

`production-notes.md` must contain:

- Chosen direction and why
- Every assumption made without asking
- The approved Visual Story table and Scroll pacing plan, verbatim
- The resolved budget — every axis, and which were explicit overrides
- Every generation prompt, with model ID and params
- Higgsfield job IDs and asset provenance
- **The cost ledger: preflight estimate vs actual credits spent**, including retakes and
  what each retake was for
- Any capability disclosure made (e.g. a model chosen without end-frame control, and what
  that cost in seam quality)
- Final measurements: frame counts, dimensions, fps, total bytes per sequence
- Final `beats` values and `scrollVh`
- **Observed limitations and anything you could not verify**

The estimate-vs-actual line is the most useful thing in the file across five builds — it
is how you learn what a site of this kind actually costs.

Exclude credentials and temporary signed URLs from anything reusable.

## Then

State plainly what works, what is approximate, and what is unverified. If a beat is
still stepping or a seam is still visible, say so and say why — a known limitation
recorded honestly is worth more than a claim that does not survive the user scrolling
the page themselves.
