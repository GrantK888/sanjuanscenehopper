# San Juan Scene Hopper

A redesigned, production-ready Next.js 14 (App Router) version of sanjuanscenehopper.com, built for Vercel.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** (custom theme)
- **Google Fonts**: Fraunces (display, serif) + Geist (body) + Geist Mono
- Zero runtime dependencies beyond Next/React — fast cold starts, free hosting on Vercel

## Quick start (locally)

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

### Option A — git (recommended)
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → **Add New Project** → import the repo.
3. Accept the defaults. Click **Deploy**.
4. Add your custom domain (`sanjuanscenehopper.com`) in **Project → Settings → Domains** and update your DNS as Vercel instructs.

### Option B — CLI
```bash
npm i -g vercel
vercel        # follow prompts
vercel --prod # promote to production
```

## What changed vs. the old site

- Replaced WordPress/Divi with a fast static Next.js build (Lighthouse-friendly).
- New editorial design system: cream/teal/terracotta palette, Fraunces display type, generous whitespace, subtle grain texture.
- Cleaner hierarchy: one hero, two clear CTAs (Day / Night) repeated at strategic points, sectioned content with numbered headings.
- Real mobile menu, sticky nav with backdrop blur, scroll-reveal animations, marquee of landmarks.
- Accessible: semantic HTML, focus-visible defaults, sufficient color contrast, mobile-first.
- SEO: proper `<title>`, Open Graph, Twitter card, metadata.
- **Bug fix from the original**: the old footer displays `reservations@sanjuanscenehopper.com` but the `mailto:` actually points to `louvaq@sanjuanscenehopper.com`. The new site uses the correct address in both places. **Verify which is the real inbox before launch.**
- The two FareHarbor booking URLs are reused as-is — no booking integration changes required.

## Customization quick reference

- **Colors**: `tailwind.config.ts` (`bone`, `paper`, `ink`, `teal`, `terracotta`, `ochre`, `sand`).
- **Fonts**: `app/layout.tsx`.
- **Copy & imagery**: `app/page.tsx` — all content lives here, including the image URLs (currently hot-linked to the existing WordPress media library — see note below).
- **Nav links**: `components/Nav.tsx`.

## Images

The page currently pulls images directly from `sanjuanscenehopper.com/wp-content/...`. Before going live you should:

1. Download the images you want to keep.
2. Drop them in `/public` (e.g. `/public/hero.jpg`).
3. Replace the URL constants at the top of `app/page.tsx` (`HERO_IMG`, `CART_IMG`, etc.) with local paths (e.g. `'/hero.jpg'`).
4. Optionally swap `<img>` for Next.js `<Image>` for automatic optimization.

This also avoids any disruption if/when the old WordPress site is decommissioned.

## Folder structure

```
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Nav.tsx
│   └── Reveal.tsx
├── public/
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```
