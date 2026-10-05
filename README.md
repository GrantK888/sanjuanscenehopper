# San Juan Scene Hopper — v2

Next.js 14 (App Router), TypeScript, Tailwind. Deploys to Vercel.

## What changed in v2

- **New brand palette drawn from your logo**: hot pink, golden yellow, bright teal on cream — matches the circular logo mark.
- **Real logo** in nav + footer, instead of my earlier placeholder SVG.
- **All images now hosted locally** in `/public` — no more dependency on the WordPress site. If `sanjuanscenehopper.com` (WordPress) goes down or you cut DNS over to Vercel, images still work.
- **New front-page imagery**:
  - Hero: Puerto Rican flag over Calle Fortaleza + your branded white cart
  - "Walking is overrated": El Morro sentry close-up
  - Field notes gallery: fleet lineup, El Morro wide, City Hall, family with cart
- **Logo-echoed color splashes** throughout the page (soft blurred circles in pink/yellow/teal) — a subtle nod to the splash pattern around the logo mark.

## Deploy

If you still have the Vercel project from last time:

```bash
cd san-juan-scene-hopper
git init && git add . && git commit -m "v2: logo-matched palette + local images"
git remote add origin <your-repo-url>
git push -u origin main --force
```

Push triggers an auto-deploy. If you set the Vercel Root Directory to `sjsh` last time, make sure the repo root now matches that (either rename this folder to `sjsh` before pushing, or clear the Root Directory setting in Vercel so it points to the repo root).

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Palette tokens (tailwind.config.ts)

- `cream` #FBF4E4 — background
- `paper` #F3E9D1 — section background
- `ink` #0F1B36 — primary text / foundation (the navy from the logo cart)
- `pink` #E63890 — primary CTA + accent
- `yellow` #F7C944 — section numbers + highlights
- `teal` #0DBFC4 — tertiary accent

Change any token here and the whole site updates.

## Image files in /public

- `logo.png` — brand mark
- `hero-flag.jpg` — Calle Fortaleza flag hero
- `hero-cart.jpg` — single white branded cart
- `el-morro-sentry.jpg` — portrait inside "Walking is overrated"
- `carts-fleet.jpg` — three carts, gallery
- `el-morro-wide.webp` — El Morro wide, gallery
- `city-hall.jpg` — San Juan City Hall, gallery
- `family-cart.jpg` — family + cart, gallery
- Extras available but not currently used on front page:
  - `el-morro-walls.jpg`, `cathedral.webp`, `la-fortaleza.jpg`, `fortress-harbor.jpg`

The extras are already in the folder — swap any of them into page.tsx when you want to.

## Known notes

- Email now set to `louvaq@sanjuanscenehopper.com` (confirmed as the real inbox) in both display text and the `mailto:` href.
- Day Rides CTA now points to the Viator listing: `https://www.viator.com/tours/San-Juan/A-new-easy-way-to-explore-Old-San-juan-VIP-STYLE/d903-448604P1`.
- Night Rides CTA still points at the original FareHarbor URL — swap it in `app/page.tsx` and `components/Nav.tsx` (the `NIGHT_RIDE_URL` constant) when a replacement URL is ready.
- When you're ready for a separate Gallery page, drop more images in `/public` and I can add `app/gallery/page.tsx` with a dedicated grid.
