# LOGBOOK

Project: Personal portfolio site (cat-themed, pixel-art, static React)

---

### [Phase 0 / Step 0] Project brief received — done
- What changed: Created LOGBOOK.md. Recorded the full project brief (summary, must-haves deferred to Phase 3, avoid-list, locked tech stack, cross-cutting features) as the baseline reference for all future work.
- Decisions locked in:
  - Framework: Next.js, App Router, static export (`output: 'export'`)
  - Language: React + TypeScript
  - Styling: plain CSS or CSS Modules (no utility-heavy frameworks unless justified)
  - Font: Geist Pixel (pulled forward into Phase 1)
  - Hosting: GitHub Pages via `gh-pages` branch or GitHub Actions
  - Custom domain: subdomain on runs-on.dev, via CNAME file + DNS PR to runs-on.dev registry
  - Avoid-list applies to every phase with no exceptions (see brief)
  - Phase 3 must-haves must not be architecturally blocked by earlier phase choices
- Deviations from the plan: None.
- Open questions / follow-ups:
  - No scaffolding, code, or config has been created yet — next session should start at Phase 1, Step 1 (project scaffold) when ready.
  - runs-on.dev subdomain name not yet chosen.
- Verified by: N/A (no build artifacts yet)

---

### [Phase 1 / Step 1] Scaffold + pixel-art placeholder home page — partial
- What changed:
  - Scaffolded Next.js (App Router, TypeScript, CSS Modules, no Tailwind) via `create-next-app`.
  - Configured static export: `next.config.ts` sets `output: "export"`, `images.unoptimized: true`.
  - Self-hosted Geist Pixel (Square variant, OFL-licensed) from `vercel/geist-pixel-font`; body text uses a system font stack instead of pulling Geist Sans from Google Fonts, to avoid a build-time dependency on an external font CDN.
  - Built one home page: a pixel-grid cat sprite (hand-authored 12x12 rect grid, no circles/gradients) in a chunky pixel-bordered "stage" panel, next to a text panel with real (non-lorem-ipsum) copy. Single deliberate motion moment: the cat's eyes blink on a stepped interval, disabled under `prefers-reduced-motion`.
  - Layout is mobile-first CSS Grid: single column below 720px, two-column (sprite | text) above it.
  - Added `src/lib/site-config.ts` as the one place holding name/copy, meant to be reused by Phase 2's About/Projects/Contact pages.
  - Added `.github/workflows/deploy.yml` (standard `actions/configure-pages` + `upload-pages-artifact` + `deploy-pages` flow) to build and publish `out/` on every push to `main`.
  - Added `public/CNAME` with a placeholder domain (`yourname.runs-on.dev`) — Next's static export copies `public/*` to the `out/` root, so this lands correctly relative to GitHub Pages' custom-domain mechanism.
  - Added `verify-build.sh`: a smoke check (index.html exists, CNAME exists, pixel font shipped and compiled into CSS, headline text present, no lorem-ipsum) — ran it after `npm run build`, passes.
  - Ran `npm run build` and `npm run lint` locally — both clean.
- Decisions locked in:
  - Palette: near-black charcoal background (#14161c), amber "tabby" accent (#e0a458), moss-green secondary accent (#8fae52) for eyes/status text — chosen to stay clearly clear of Anthropic's terracotta and away from purple/rainbow per the avoid-list.
  - No nav bar this phase: since About/Projects/Contact don't exist yet, a nav with those links would be dead links (explicitly on the avoid-list), so it's deferred to Phase 2 when the pages are real.
  - Pixel border technique: stacked hard-edged `box-shadow` offsets (no border-radius, no blur) instead of a bordered/rounded card, to keep the pixel-HUD look and avoid the "identical rounded card" default.
  - Geist Pixel used for headings/labels only, not body copy — pixel fonts read poorly at small sizes, kept per the frontend-design guidance on legibility.
- Deviations from the plan:
  - Could not perform the account-bound steps myself: no GitHub credentials to create/push a repo, and claiming a runs-on.dev name requires the user's own GitHub OAuth sign-in. Wrote exact, verified steps into `README.md` (fetched current instructions from runs-on.dev's own docs) instead of guessing.
  - `public/CNAME` ships with a placeholder value (`yourname.runs-on.dev`) since no real subdomain has been claimed yet — flagged clearly in the README as something to replace.
  - Could not take a real device screenshot to visually verify mobile rendering (no headless-browser/screenshot tool in this environment) — verified responsiveness by reasoning through the CSS breakpoint instead, and left manual phone/devtools verification as an explicit step in the README.
- Open questions / follow-ups:
  - Real name/bio copy needed in `src/lib/site-config.ts` before this ships as "done."
  - runs-on.dev subdomain name not yet chosen/claimed.
  - Repo not yet created/pushed to GitHub; Actions workflow therefore not yet run for real; HTTPS/custom-domain not yet live.
  - Once live, do the actual desktop + mobile visual check described in the README before calling Phase 1 truly done.
- Verified by: `npm run build`, `npm run lint`, `./verify-build.sh` (all passing locally); live-domain and mobile-device verification still pending user action.

---

### [Phase 1 / Step 2] Fix Jekyll fallback, rewrite README, relocate logbook — partial
- What changed:
  - Diagnosed the live site (`chitra9xh.github.io/cats-portfolio`) via fetch: response had `meta-generator: Jekyll v3.10.0`, meaning Pages was serving via "Deploy from a branch" and auto-rendering `README.md` as the homepage since no `index.html` exists at repo root. The Next.js build was never actually deployed.
  - Added `public/.nojekyll` as a backup guard.
  - Real fix documented for the user: repo Settings → Pages → Source must be "GitHub Actions", then re-run `deploy.yml`.
  - Rewrote `README.md` in caveman-mild style (terse bullets, checklist format) per user request.
  - Moved `LOGBOOK.md` from repo root to `internal/dev/notes/logs/archive/LOGBOOK.md` per user request.
  - Rebuilt and reran `verify-build.sh` — passes.
- Decisions locked in:
  - README stays caveman-mild going forward for this project.
  - Logbook path is now `internal/dev/notes/logs/archive/LOGBOOK.md` — future entries append here, not at root.
- Deviations from the plan: None.
- Open questions / follow-ups:
  - User still needs to flip the Pages source setting and re-run the workflow — I can't change repo settings myself.
  - Once source is fixed, re-check the live URL to confirm the actual pixel-art page (not README) renders.
- Verified by: `npm run build`, `./verify-build.sh` (passing); live site re-check still pending user action on their Pages settings.
