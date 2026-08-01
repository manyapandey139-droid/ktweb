# Managing Products on the KT's Fashion Website

This guide explains, in plain language, how to add, edit, and remove products
and images — without touching any of the page code. Everything a product
needs lives in **one file**: `data/products.ts`.

---

## How To Add A New Product

**Step 1 — Choose the right image folder**

Go to:

```
public/images/products/
```

Pick the folder that matches the product's category:

- `indian/` — Indian Wear
- `indo-western/` — Indo Western
- `western/` — Western Wear
- `mom-kid/` — Mom & Kid Twinning

**Step 2 — Add your photo(s)**

Drop your product photo(s) into that folder. Use a clear, unique file name,
for example:

```
kt-004-1.jpg
kt-004-2.jpg
```

Tip: photos that are roughly portrait-shaped (3:4, like 900×1200px) look
best in the product cards and gallery. Keep file sizes reasonable
(under ~500KB each) so pages load quickly.

**Step 3 — Open the product data file**

Open:

```
data/products.ts
```

**Step 4 — Copy an existing product**

Copy one of the objects inside the `products` array (the `{ ... }` blocks)
and paste it as a new entry.

**Step 5 — Update the fields**

```ts
{
  id: "kt-004",                                 // unique ID, keep the "kt-xxx" pattern
  slug: "your-product-name-here",               // used in the URL, no spaces — use hyphens
  name: "Your Product Name",                    // shown on the site
  category: "indian-wear",                      // one of: indian-wear, indo-western, western-wear, mom-kid
  price: 1999,                                  // price in ₹, numbers only
  images: [
    "/images/products/indian/kt-004-1.jpg",     // must start with /images/products/...
    "/images/products/indian/kt-004-2.jpg",     // add as many as you like
  ],
  description: "A short, honest description of the product.",
  fabric: "Cotton",                             // optional — remove the line if not needed
  sizes: ["S", "M", "L"],                       // optional — only include sizes you actually have
  colors: ["Blue"],                              // optional — only include colors you actually have
  availability: "Available",                    // "Available" | "Limited Stock" | "Out of Stock"
  featured: false,                               // true = shows in "Featured Collection" on the homepage
  newArrival: true,                              // true = shows in "New Arrivals" on the homepage
},
```

**Step 6 — Save the file**

That's it. The product will automatically appear in:

- The Shop page (`/shop`)
- Its category page (e.g. `/indian-wear`)
- The homepage (if `featured` or `newArrival` is `true`)
- Its own product page (`/product/your-product-name-here`)
- The sitemap

No other file needs to change.

---

## How To Remove A Product

Open `data/products.ts` and delete the entire `{ ... }` block for that
product (including the comma after it). Save the file. The product
disappears from every page automatically. You can also delete its image
files from `public/images/products/...` if you no longer need them.

---

## How To Change A Product's Price

In `data/products.ts`, find the product and change the `price` number.
Save the file.

---

## How To Replace Or Add Product Images

1. Add the new image file into the correct folder under
   `public/images/products/...`
2. In `data/products.ts`, update that product's `images` array to point to
   the new file path(s). The **first image** in the array is what shows on
   product cards and category grids — put your best photo first.

---

## How To Mark A Product As Featured

Set `featured: true` on that product in `data/products.ts`. It will now
appear in the "Featured Collection" section on the homepage. Set it back to
`false` to remove it from there.

## How To Mark A Product As A New Arrival

Set `newArrival: true`. It will appear in the "New Arrivals" section on the
homepage and can be highlighted by sorting the shop by "Newest". Set it back
to `false` once it's no longer new.

## How To Mark A Product As Unavailable

Change `availability` to `"Out of Stock"`. The product will still be visible
(so customers can see it exists) but will show an "Out of Stock" label, and
the main button will change from "Order On WhatsApp" to "Enquire On
WhatsApp". Use `"Limited Stock"` if only a little stock is left.

---

## How To Add A Future Category (e.g. a new "Festive Wear" line)

1. Open `data/categories.ts`.
2. Copy one of the existing category objects and add a new one, e.g.:

```ts
{
  slug: "festive-wear",
  title: "Festive Wear",
  navLabel: "Festive Wear",
  shortDescription: "Statement pieces for weddings and celebrations.",
  image: "/images/products/festive-wear/cover.jpg",
},
```

3. Create a matching folder: `public/images/products/festive-wear/`
4. Use `category: "festive-wear"` on any product in `data/products.ts`.

The new category will automatically get its own page at `/festive-wear`,
show up in the navbar, footer, and the homepage "Shop By Category" section —
no other code changes needed.

---

## Editing Brand Details (WhatsApp Number, Instagram, Email, etc.)

All of these live in one place: `lib/brandConfig.ts`.

| To change...              | Edit this field in `lib/brandConfig.ts` |
|----------------------------|------------------------------------------|
| WhatsApp number            | `whatsappNumber` and `whatsappDisplay`   |
| Instagram link             | `instagramUrl` and `instagramHandle`     |
| Business email             | `email` (currently blank on purpose)     |
| Shipping / COD / returns text | `shippingMessage`, `codMessage`, `returnPolicy` |
| Location text              | `location`                               |

Changing a value here updates it everywhere it's used on the site
(navbar, footer, WhatsApp messages, contact page, etc.).

---

## Adding The Official Logo File

The header currently shows a text-based version of the logo. To use the
real logo image instead, just save the official logo file as:

```
public/images/brand/kt-fashion-logo.png
```

The site will automatically detect the file and switch to using it —
no code changes needed. For best results, use a PNG with a transparent
background, roughly 400–600px wide.

---

## A Note On The Sample Products

The 3 products currently in `data/products.ts` were seeded from real KT's
Fashion photos so the site works out of the box, but their **prices and
descriptions are placeholders**. Update them with accurate details before
sharing the site publicly.
