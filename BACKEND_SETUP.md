# Backend Setup — Products + Admin Dashboard

This adds a real database, image storage, and a password-protected `/admin`
dashboard so you can add/edit/delete products without touching code.

## 1. Create a free Supabase project

1. Go to **[supabase.com](https://supabase.com)** → Sign up → **New Project**
2. Pick a name, a strong database password (save it — you'll need it below), and a region close to Pakistan
3. Wait ~2 minutes for it to provision

## 2. Get your database connection strings

1. In your Supabase project → **Project Settings** (gear icon) → **Database**
2. Under **Connection string**, copy:
   - The **Transaction pooler** string (port 6543) → this is your `DATABASE_URL`
   - The **Session pooler** string (port 5432) → this is your `DIRECT_URL`
3. Both contain `[YOUR-PASSWORD]` — replace that with the database password you set in step 1

## 3. Get your Supabase API keys

1. **Project Settings** → **API**
2. Copy the **Project URL** → this is `SUPABASE_URL`
3. Copy the **service_role** key (NOT the anon/public one — this one is secret) → this is `SUPABASE_SERVICE_ROLE_KEY`

## 4. Create the image storage bucket

1. In Supabase, go to **Storage** in the left sidebar
2. Click **New bucket**
3. Name it exactly: `product-images`
4. Toggle **Public bucket** ON (so product photos load on your site)
5. Create it

## 5. Set your environment variables

Copy `.env.example` to a new file called `.env.local` in the project root, and fill in every value:

```
DATABASE_URL="..."
DIRECT_URL="..."
SUPABASE_URL="..."
SUPABASE_SERVICE_ROLE_KEY="..."
ADMIN_PASSWORD="pick a password you'll remember"
ADMIN_SESSION_SECRET="a long random string — mash your keyboard for 40+ characters"
```

## 6. Create the database table and load starter products

```
npm install
npx prisma migrate dev --name init
npm run db:seed
```

The first command creates the `Product` table in your Supabase database. The second loads the 6 products you already had, so your site isn't empty.

## 7. Run it locally

```
npm run dev
```

Visit `http://localhost:3000` — the site now pulls products from your real database. Visit `http://localhost:3000/admin`, log in with your `ADMIN_PASSWORD`, and try adding a product with a photo.

## 8. Deploy to Vercel

In your Vercel project → **Settings** → **Environment Variables**, add every variable from your `.env.local` (same names, same values). Redeploy. Your live site and admin dashboard will now use the same Supabase database.

---

## What you get

- **`/admin`** — password-protected dashboard: list, add, edit, delete products, upload photos
- Every product page (`/shop`, `/women`, `/dresses`, `/new-arrivals`, homepage) now pulls live from the database
- Products without a photo yet automatically show the illustrated placeholder — upload a photo anytime and it switches over
- "Featured" checkbox controls what shows on the homepage; "New Arrival" controls the `/new-arrivals` page

## Honest limitations of this MVP setup

- **No real checkout** — "Add to Cart" is a placeholder button. Payments/orders are a separate build.
- **Single admin password**, not full user accounts — fine for one person managing the store, not built for multiple staff with different permissions.
- If you outgrow this, the natural next steps are Stripe/local payment gateway integration for checkout, and Clerk or Auth.js if you need multiple admin logins with different roles.

---

## Adding orders on top of an existing database

If you already ran `npx prisma migrate dev --name init` before this update, you just need one more migration to add the new `Order` and `OrderItem` tables:

```
npx prisma migrate dev --name add_orders
```

No need to re-seed — your existing products stay exactly as they are.

## What the order system does

- **Cart**: stored in the browser (survives refresh, not shared across devices) — no login required
- **Checkout**: collects name, email, phone, address, city, notes — Cash on Delivery works end to end today
- **Stock**: automatically decreases when an order is placed; checkout blocks if you don't have enough in stock
- **`/admin/orders`**: see every order, click into one to view items and update its status (Pending → Confirmed → Shipped → Delivered, or Cancelled)
- **Card payment**: visible in checkout as "coming soon" but disabled — the database and UI are ready for it, but it needs a real payment gateway account before it can actually charge anyone

## Turning on card payments later

When you're ready:
1. Sign up with **[Safepay](https://getsafepay.com)** (recommended — Pakistani, developer-friendly, often called "the Stripe of Pakistan") or **PayFast**
2. Complete their merchant verification (this takes them a few days, not instant)
3. Come back with your API keys and I'll wire up the actual charge flow — the `Order` model already has `paymentMethod: CARD` and `paymentStatus` fields ready for it

---

## Adding the category system on top of an existing database

This update adds a `subcategory` field to products and replaces the old 3-category
list with the full taxonomy (Tops, Dresses, Pants & Trousers, Skirts, Waistcoats,
Blazer Sets, Co-Ord Sets, Activewear, Accessories, Intimates, Winter Wear, Home).

Run one more migration:
```
npx prisma migrate dev --name add_subcategory
```

**Heads up on your existing 6 seeded products**: they were created with the old
category names (`Outerwear`, `Dresses`, `Essentials`). `Dresses` still matches the
new system fine, but `Outerwear` and `Essentials` no longer exist as categories —
those products will still show up in `/shop` and `/admin`, but won't show a
selected category in the dropdown until you open each one in `/admin` and
re-assign it to a real category (e.g. "Winter Wear") — takes a few seconds each.

## What the category system does

- **12 top-level categories**, several with subcategories (e.g. Tops → T-Shirts, Crop Tops, etc.)
- **`/admin`** — adding or editing a product now shows a Category dropdown and a
  dependent Subcategory dropdown (only shows options relevant to the chosen category)
- **`/collections`** — lists all 12 categories as browsable tiles
- **`/shop/[category]`** — e.g. `/shop/tops`, `/shop/winter-wear` — one page per
  category, with subcategory filter pills at the top when that category has them
