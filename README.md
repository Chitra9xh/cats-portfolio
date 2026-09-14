# cat-portfolio

- Static pixel-art cat portfolio. Next.js, App Router, static export.
- Phase 1: one placeholder home page, themed, deployable.

## Site is showing README instead of the app?

- Cause: Pages source set to "Deploy from a branch" → GitHub runs Jekyll on
  raw repo → no `index.html` at root → Jekyll renders `README.md` instead.
- Fix: repo **Settings → Pages → Build and deployment → Source → GitHub
  Actions**.
- Re-run the `deploy.yml` workflow (Actions tab → re-run, or push a commit).
- `public/.nojekyll` added as backup, but source setting is the real fix.

## Stack

- Next.js + TypeScript + App Router, `output: "export"`
- Plain CSS Modules, design tokens in `src/app/globals.css`
- Geist Pixel (Square variant), self-hosted, OFL-licensed, in `public/fonts/`
- Copy/name lives in one file: `src/lib/site-config.ts`

## Deploy checklist

- [ ] Edit `src/lib/site-config.ts` with real name/copy
- [ ] Push to GitHub
- [ ] Settings → Pages → Source → GitHub Actions
- [ ] Claim a name at runs-on.dev, sign in with GitHub
- [ ] runs-on.dev/manage → add `CNAME` record → `<you>.github.io`
- [ ] Replace `public/CNAME` contents with real subdomain, push
- [ ] Settings → Pages → confirm "DNS check successful" → Enforce HTTPS
- [ ] Check the live URL on desktop and phone

## Local dev

```bash
npm install
npm run dev      # localhost:3000
npm run build    # static export → ./out
./verify-build.sh
```

## Logbook

- Lives at `internal/dev/notes/logs/archive/LOGBOOK.md`
