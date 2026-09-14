# cat-portfolio

Static, pixel-art cat-themed personal portfolio. Next.js App Router, static
export (`output: "export"`), plain CSS Modules, self-hosted Geist Pixel font.
This is Phase 1: one themed placeholder home page, live on a custom domain.

## What's already done here

- Next.js + TypeScript + App Router scaffold, static export configured
- Design tokens + pixel-art home page (`src/app/page.tsx`), no gradients,
  no circle icons, no card grids — see `src/app/globals.css` for the palette
- Geist Pixel (Square variant) self-hosted in `public/fonts/`, licensed OFL
  (`public/fonts/GeistPixel-OFL.txt`) — no Google Fonts dependency
- `src/lib/site-config.ts` — single file holding your name/copy, reused by
  every future page in Phase 2
- `.github/workflows/deploy.yml` — builds and deploys `out/` to GitHub Pages
  on every push to `main`
- `public/CNAME` — currently a placeholder (`yourname.runs-on.dev`)
- `verify-build.sh` — smoke check to run after any build

Local build was run and verified (`npm run build && ./verify-build.sh`).

## What you still need to do (requires your own GitHub / runs-on.dev account)

I can't do these from here — they need your GitHub login and a real DNS write.

### 1. Edit your details
Open `src/lib/site-config.ts` and replace the placeholder name/copy with your
own.

### 2. Push this repo to GitHub
```bash
cd cat-portfolio
git init
git add -A
git commit -m "Phase 1: scaffold + pixel-art placeholder home page"
gh repo create <your-repo-name> --public --source=. --push
# or: create the repo on github.com, then
#   git remote add origin git@github.com:<you>/<repo>.git
#   git push -u origin main
```

### 3. Turn on GitHub Pages (Actions-based)
In the repo: **Settings → Pages → Build and deployment → Source → GitHub
Actions**. Push to `main` (or re-run the workflow) and the `deploy.yml`
workflow will build and publish `out/` automatically.

### 4. Claim a name on runs-on.dev
1. Go to https://runs-on.dev and **Sign in with GitHub**.
   (Requires a GitHub account ≥30 days old with ≥1 public repo.)
2. Pick a name (2–32 chars, lowercase letters/numbers/internal hyphens) and
   click **Claim it**.

### 5. Point the name at this GitHub Pages site
Two things, in either order — GitHub won't issue HTTPS until both are done:

- **In the registry**: go to https://runs-on.dev/manage, sign in, add a
  `CNAME` record with value `<your-github-username>.github.io` (exactly as
  it appears in your Pages URL), and save. (Or do it by PR against
  https://github.com/zordhalo/runs-on.dev — see the guide.)
- **In this repo**: replace the contents of `public/CNAME` with your real
  subdomain, e.g.:
  ```
  yourname.runs-on.dev
  ```
  Commit and push — the next Actions run will publish the new `CNAME` into
  `out/`.

Then in **Settings → Pages**, confirm the custom domain field shows your
subdomain and shows "DNS check successful," and tick **Enforce HTTPS** once
the certificate is issued (may take a few minutes to a few hours).

### 6. Verify
- Visit `https://<yourname>.runs-on.dev` on a desktop browser.
- Visit the same URL on a phone, or use your browser's device toolbar at a
  narrow width (~360–390px) — the layout should stack the cat sprite above
  the text instead of side-by-side (breakpoint is 720px).
- Confirm there's no mixed-content warning (padlock shows secure).

## Local development
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
./verify-build.sh
```
