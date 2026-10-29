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

- `indian/`, `indo-western/`, `western/`, `mom-kid/`

These folder names are historical — they are just storage locations on disk
and are **not** the website's categories. A product's category is set by its
`category` field in `data/products.ts`, not by which folder its photos sit in.
Put new photos in whichever folder is most convenient.

**Step 2 — Add your photo(s)**

Drop your product photo(s) into that folder. Use a clear, unique file name,
for example:

```
royal-lavender-suit-set-front.jpg
royal-lavender-suit-set-view-02.jpg
royal-lavender-suit-set-detail.jpg
```

Name files after the product itself, not a code. The convention used across
the catalog is `<product-slug>-front.jpg` for the main photo, then
`-view-02`, `-view-03` … for other angles and `-detail` for close-ups.

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
  id: "royal-lavender-suit-set",                // unique ID — use the slug, keeps things readable
  slug: "royal-lavender-suit-set",              // the URL: /product/royal-lavender-suit-set
  name: "Royal Lavender Suit Set",              // the boutique-style name customers see
  category: "ethnic-suit",                      // one of: cord-set, ethnic-suit, bodycon-dress,
                                                //         gown, cocktail-dress,
                                                //         gym-fitness-outfits, mom-daughter
  price: 1999,                                  // price in ₹, numbers only
  images: [
    "/images/products/indian/royal-lavender-suit-set-front.jpg",     // must start with /images/products/...
    "/images/products/indian/royal-lavender-suit-set-view-02.jpg",   // add as many angles as you like
  ],
  description: "A short, honest description of the product.",
  fabric: "Cotton",                             // optional — omit the line entirely if not known
  sizes: ["S", "M", "L"],                       // optional — only include sizes you actually have
  colors: ["Blue"],                              // optional — list every color it's actually available in,
                                                  // e.g. colors: ["Blue", "Beige"] if the same style comes in two colors
  availability: "Available",                    // "Available" | "Limited Stock" | "Out of Stock"
  featured: false,                               // true = shows in "Featured Collection" on the homepage
  newArrival: true,                              // true = shows in "New Arrivals" on the homepage
},
```

Only include `fabric`, `sizes`, and `colors` when you actually know them — leave the
line out entirely rather than guessing. The site is already built to handle
products with missing fabric/size/color info gracefully.

**Step 6 — Save the file**

That's it. The product will automatically appear in:

- The Shop page (`/shop`)
- Its category page (e.g. `/ethnic-suit`)
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

## How To Change A Product's Name

In `data/products.ts`, find the product and change the `name` field (this is
what customers see). You can leave `id` and `slug` as they are — changing the
name does not require changing the URL.

---

## How To Change A Product's Category

In `data/products.ts`, find the product and change its `category` field to
one of: `cord-set`, `ethnic-suit`, `bodycon-dress`, `gown`, `cocktail-dress`,
`gym-fitness-outfits`, `mom-daughter` (or a custom category slug you've added
to `data/categories.ts`). The product will
automatically move to the new category's page and out of the old one. If you
also want its image to live in the matching folder under
`public/images/products/...`, move the file there and update the `images`
paths to match (this step is optional — the site doesn't require the file
location to match the category).

---

## How To Replace Or Add Product Images

1. Add the new image file into the correct folder under
   `public/images/products/...`
2. In `data/products.ts`, update that product's `images` array to point to
   the new file path(s). The **first image** in the array is what shows on
   product cards and category grids — put your best photo first.

---

## How To Add Multiple Images To One Product (Photo Gallery)

If you have several photos of the **same** garment — front, side, back,
close-up, or a shot with more than one model — they should all go on **one**
product, not become separate products.

Put every photo in the same `images` array, best photo first:

```ts
images: [
  "/images/products/indian/royal-lavender-suit-set-front.jpg",     // shown on the product card
  "/images/products/indian/royal-lavender-suit-set-view-02.jpg",   // another angle
  "/images/products/indian/royal-lavender-suit-set-view-03.jpg",   // back view
  "/images/products/indian/royal-lavender-suit-set-detail.jpg",    // close-up
],
```

The product page automatically shows small thumbnails under the main photo,
and clicking one swaps the large image. There's no limit on how many you add.
A product with only one photo simply shows no thumbnails — that's fine too.

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

## A Note On The Current Catalog

The **41 products** in `data/products.ts` were built from real KT's Fashion
product photography across three shoots. Current split: **18 Ethnic Suit,
10 Cord Set, 7 Gown, 2 Bodycon Dress, 2 Cocktail Dress, 2 Gym Fitness
Outfits, 0 Mom & Daughter**. A few things to know:

- **Every price is a temporary placeholder of ₹1000.** Update the `price`
  field on each product with the real price whenever you're ready — see
  "How To Change A Product's Price" above.
- **Names and descriptions were written from the photographs.** They describe
  what is visible (cut, print, styling) and are meant to sell — feel free to
  reword any of them to match how you actually describe the piece in store.
- **Fabric and sizes are left out** because they couldn't be confirmed from
  photos alone. Add them once you know the details.
- Some products list two `colors` (e.g. `["Beige", "Blue"]`) because the same
  style was photographed in two colourways. If you'd rather sell those as
  separate listings, copy the product block and split the images and colours
  between the two copies.
- **`availability` is set to `"Available"` on every product.** This field is
  required, so it had to be given a value — it is not a confirmed stock
  check. Change any item to `"Limited Stock"` or `"Out of Stock"` as needed.
- **Mom & Daughter has no products yet** and still shows "Coming Soon".
  Send matching mom-and-child photos and they can be added like any other
  product.
- A few garments were only ever photographed alongside another model, so the
  group photo is used as the product image. Solo photos would make these
  cards clearer: `Fern Bandhani Kurta Set`, `Crimson Tie-Dye Kurta Set`,
  `Heritage Thread Kurti Set` and `Ivory Bloom Kurti & Palazzo`.
- Two garments appear only in the background of another product's photos and
  were **not** turned into their own listings: a beige/tan colour-block
  sweater (seen beside `Sunlit Colourblock Knit`) and a teal striped version
  of `Amethyst Leheriya Lehenga`. Send solo photos if you want either listed.
