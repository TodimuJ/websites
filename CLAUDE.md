# websites — cinematic scroll-story sites

Each site in `sites/` is a brand page whose hero is a generated video sequence scrubbed
frame-by-frame as the visitor scrolls. One site per directory; one Claude Code session
per site is the intended workflow.

## The method lives in the skill, not in chat history

**`.claude/skills/cinematic-site/`** is the complete build method — phases, model routing,
budget system, the scroll engine, and 11 ready briefs. It loads automatically in this
directory. Invoke it with `/cinematic-site <brief-or-description>`.

Read `SKILL.md` before building anything here. Do not reinvent the approach from scratch,
and do not ask the user to re-explain decisions that are already written down — if
something seems unexplained, it is in `SKILL.md` or one of `references/`.

## Conventions

- **`packages/scroll-engine/`** is shared by every site. One implementation. Fix bugs
  there, never fork a per-site copy.
- **`sites/<slug>/src/content/site.ts`** holds *all* copy, products, prices, CTAs and the
  scroll `beats`. Nothing user-visible is hardcoded in a component.
- **`sites/<slug>/production-notes.md`** is required for every site: direction,
  assumptions, the approved storyboard and pacing plan, every generation prompt with model
  and params, Higgsfield job IDs, **estimated vs actual credits**, measured frame counts
  and sizes, and anything left unverified.
- Frames live in `sites/<slug>/public/frames/{desktop,mobile}/` with a `manifest.json`
  written from the actual files on disk.

## Things that will bite you

- **Extract frames once, at final settings.** Git does not delta-compress WebP, and every
  re-extraction leaves the old blobs in history forever. Iterate in a scratch directory and
  copy in only when final. If a sequence is replaced, `git rm` the old one in the same
  commit.
- **Never generate text into pixels** — no headings, logos, card numbers, keycap legends,
  bottle labels or signatures. All type is HTML over the canvas.
- **Never silently degrade.** If a chosen model cannot do what the storyboard needs, or a
  budget forces a compromise, say so and let the user choose.
- **Never label a site as a demo.** No "Demo" badge, no "this is a demonstration site"
  footer, no `noindex`, unless the user explicitly asks for one. These sites are built to
  become real storefronts.
- Invented products, brand names and imagery are fine — that is how a site gets built
  before the real catalogue exists. But **factual claims about the business come from the
  user, never from you**: testimonials, customer counts, ratings, awards, certifications,
  press quotes, physical addresses. Ask for them or leave the section out.
- Never impersonate a real brand you were not asked to build.
- An action that did not happen must not report success. A checkout with no backend says
  so plainly; it never shows a confirmation.

## Deploying — local and hosted must match

Every site is built to be pushed to GitHub and hosted on Netlify from that repo. The
failure mode to design against is a site that is perfect locally and broken once
deployed, because an asset was gitignored or the monorepo was wired up wrong.

- **`netlify.toml` at the repo root**, one per deployed site:
  `command = "npm run build --workspace sites/<slug>"`,
  `publish = "sites/<slug>/dist"`, `NODE_VERSION` matching local.
- **Never set Netlify's base directory to `sites/<slug>`.** These are npm workspaces —
  the install and the shared `packages/scroll-engine` live at the repo root. Installing
  from inside the site directory cannot resolve `@sites/scroll-engine`.
- **Point Netlify at the repository, not a subfolder URL.** Netlify imports repos;
  `netlify.toml` selects which site inside it gets built.
- **Commit everything the site serves.** All of `public/` — frames, posters, products,
  SVGs — is tracked. A `.gitignore` inside a subdirectory applies only to that directory
  and below; keep asset-excluding patterns scoped there and never at the repo root.
- **Exclude only the video masters** (`*.mp4`, `*.mov`). Still masters are small and are
  the provenance record, so they are committed. Match extensions exactly — `*.jpg` does
  not cover `.jpeg`.
- **Cache the sequence.** Ship `public/_headers` with
  `Cache-Control: public, max-age=31536000, immutable` for `/frames/*`, `/posters/*` and
  `/products/*`. Frame filenames never change content; returning visitors must not
  re-download the whole sequence.

### The parity check — run it before saying a site is deployable

Compilation in a working tree proves nothing about a fresh clone. Reconstruct exactly
what the clone will contain, build it from zero, and serve it:

```sh
T=$(mktemp -d)
{ git ls-files -z; git ls-files --others --exclude-standard -z; } | cpio -0 -pdm --quiet "$T"
cd "$T" && npm install && npm run build --workspace sites/<slug>
cd sites/<slug>/dist && python3 -m http.server 4500
```

Then load it and confirm: **zero 4xx responses**, the canvas scrubs, every product image
loads, `_headers` and `frames/manifest.json` are present, and the frame counts in `dist`
match the manifest. `index.html` should be byte-identical to the local build. This is the
only check that actually proves Netlify will serve what you see.

## Cross-session notes

Sessions are independent. If you need to match an earlier site's conventions, read that
site's `production-notes.md` — it is the record, not the chat log. The cost ledger in each
file is per-site; use the Higgsfield `balance` tool for the account total.
