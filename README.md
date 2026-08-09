# Brand Alley — Website

A Next.js (App Router) + Tailwind CSS storefront for Brand Alley, with a real
Postgres database (Supabase), image uploads, and a password-protected admin
dashboard for managing products.

## First-time setup

**Read [`BACKEND_SETUP.md`](./BACKEND_SETUP.md) first** — you need a Supabase
project and a few environment variables before `npm run dev` will work, since
the site now reads products from a real database instead of hardcoded data.

Once that's done:
```bash
npm install
npm run dev
```
Then open http://localhost:3000, and http://localhost:3000/admin for the dashboard.

## Project structure

```
app/
  layout.tsx           → fonts, TopBar/Navbar/Footer, global shell
  page.tsx              → homepage sections in order
  shop/, women/, dresses/, new-arrivals/, collections/
                         → product listing pages (query the database)
  product/[id]/          → single product page
  admin/                 → password-protected dashboard (list/add/edit/delete)
  api/products/           → public GET, admin-only POST/PUT/DELETE
  api/admin/               → login, logout, image upload (all admin-only)
components/
  TopBar, Navbar, Hero, CategoryStrip, SeasonBanner,
  ValueStrip, ProductGrid, Newsletter, Footer  → homepage sections
  ProductCard, ShopGrid                         → shared product display
  admin/                                        → admin-only form/buttons
lib/
  prisma.ts             → database client
  supabase-admin.ts      → server-only image storage client
  admin-auth.ts           → admin session cookie helpers
  format.ts                → price formatting
prisma/
  schema.prisma          → the Product table definition
  seed.ts                  → loads starter products into a fresh database
public/
  logo.png, images/       → your brand logo and photos
```

## What's still placeholder

- **Checkout**: "Add to Cart" is a UI placeholder — no payments or order flow yet.
- **Products without a photo** show illustrated SVG placeholder art automatically;
  upload a real photo for any product from `/admin` and it switches over.
