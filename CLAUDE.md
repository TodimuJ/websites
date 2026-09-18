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
- Sites are demos. Products and imagery are AI-generated; never invent testimonials,
  customer counts, awards or press quotes, and never impersonate a real brand.

## Cross-session notes

Sessions are independent. If you need to match an earlier site's conventions, read that
site's `production-notes.md` — it is the record, not the chat log. The cost ledger in each
file is per-site; use the Higgsfield `balance` tool for the account total.
