# Brand Alley — Website

A Next.js 15 (App Router) + Tailwind CSS storefront for Brand Alley, structured to
match the reference layout: top utility bar → nav → hero → category strip →
season banner → value props → best sellers grid → newsletter → footer.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## What's placeholder right now

- **Product images**: simple line-art SVGs (`components/GarmentIcon.tsx`) stand in
  for real photography. Swap these for `<Image>` tags pointing at your actual
  product photos once you have them (Cloudinary is a good place to host them).
- **Product data**: lives in `data/products.ts` as a static array. This is where
  a database call will go once the admin dashboard is built.
- **Logo**: your real logo, already wired in at `public/logo.png`.

## Project structure

```
app/
  layout.tsx      → fonts + global shell
  page.tsx         → assembles the homepage sections in order
  globals.css      → color tokens (--ink, --orange, --stone...) + fonts
components/
  TopBar.tsx        → black utility strip
  Navbar.tsx         → logo + nav links + cart
  Hero.tsx           → SHOP / BRAND ALLEY hero
  CategoryStrip.tsx  → dark 3-column category strip
  SeasonBanner.tsx   → split "new season" banner
  ValueStrip.tsx     → delivery/returns/quality/payment icons
  ProductGrid.tsx    → best sellers grid
  Newsletter.tsx     → email signup bar
  Footer.tsx         → link columns + copyright
data/
  products.ts        → placeholder product data
public/
  logo.png           → your brand logo
```

## Next steps (not built yet)

1. Real product photography, swapped into `ProductGrid.tsx` / `CategoryStrip.tsx`.
2. An admin dashboard (custom, or Strapi/Sanity) so products can be added without
   touching code.
3. A database (Postgres via Supabase/Neon) behind `data/products.ts`.
4. Deploy: push this repo to GitHub, connect it to Vercel, point your domain
   (bought via Namecheap/Cloudflare) at it.
