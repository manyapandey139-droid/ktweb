import { Product } from "@/types/product";

// ---------------------------------------------------------------------------
// PRODUCT CATALOG
//
// This is the ONLY file you need to edit to add, remove, or update products.
// See PRODUCT-MANAGEMENT.md in the project root for a full step-by-step guide.
//
// NOTE: All prices below are TEMPORARY placeholders (₹1000) as requested.
// Update the `price` field on each product with the real price whenever
// you're ready — nothing else needs to change.
//
// Sizes/fabric are intentionally left out where they could not be confirmed
// from the product photos. Add them once you have the details.
// ---------------------------------------------------------------------------

export const products: Product[] = [
  {
    id: "indian-wear-01",
    slug: "indian-wear-01",
    name: "Indian Wear 01",
    category: "indian-wear",
    price: 1000,
    images: [
      "/images/products/indian/indian-wear-01-1.jpg",
      "/images/products/indian/indian-wear-01-2.jpg",
      "/images/products/indian/indian-wear-01-3.jpg",
      "/images/products/indian/indian-wear-01-4.jpg",
      "/images/products/indian/indian-wear-01-5.jpg",
    ],
    description:
      "A sleeveless, mandarin-collar kurta with a front button placket, paired with matching palazzo pants.",
    colors: ["Beige", "Blue"],
    availability: "Available",
    featured: true,
    newArrival: true,
  },
  {
    id: "indo-western-01",
    slug: "indo-western-01",
    name: "Indo Western 01",
    category: "indo-western",
    price: 1000,
    images: [
      "/images/products/indo-western/indo-western-01-1.jpg",
      "/images/products/indo-western/indo-western-01-2.jpg",
      "/images/products/indo-western/indo-western-01-3.jpg",
    ],
    description:
      "A sleeveless printed column dress in a brown and tan pattern with orange stripe trim, styled with a matching draped stole.",
    colors: ["Brown"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "western-wear-01",
    slug: "western-wear-01",
    name: "Western Wear 01",
    category: "western-wear",
    price: 1000,
    images: [
      "/images/products/western/western-wear-01-1.jpg",
      "/images/products/western/western-wear-01-2.jpg",
      "/images/products/western/western-wear-01-3.jpg",
    ],
    description:
      "A long-sleeve mesh crop top, styled here with black wide-leg cargo pants.",
    colors: ["Brown", "Black"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "western-wear-02",
    slug: "western-wear-02",
    name: "Western Wear 02",
    category: "western-wear",
    price: 1000,
    images: [
      "/images/products/western/western-wear-02-1.jpg",
      "/images/products/western/western-wear-02-2.jpg",
      "/images/products/western/western-wear-02-3.jpg",
    ],
    description:
      "A pinstriped V-neck jersey top with a '26 Chicago' graphic, styled here with black cargo pants.",
    colors: ["Blue", "Cream"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "western-wear-03",
    slug: "western-wear-03",
    name: "Western Wear 03",
    category: "western-wear",
    price: 1000,
    images: [
      "/images/products/western/western-wear-03-1.jpg",
      "/images/products/western/western-wear-03-2.jpg",
      "/images/products/western/western-wear-03-3.jpg",
      "/images/products/western/western-wear-03-4.jpg",
    ],
    description:
      "A two-tone flowy maxi dress with floral appliqué embroidery on the bodice and flared bell sleeves.",
    colors: ["Green"],
    availability: "Available",
    featured: true,
    newArrival: true,
  },
  {
    id: "western-wear-04",
    slug: "western-wear-04",
    name: "Western Wear 04",
    category: "western-wear",
    price: 1000,
    images: [
      "/images/products/western/western-wear-04-1.jpg",
      "/images/products/western/western-wear-04-2.jpg",
      "/images/products/western/western-wear-04-3.jpg",
    ],
    description:
      "An off-shoulder maxi dress with a floral trim neckline and ruffled sleeves.",
    colors: ["White"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "western-wear-05",
    slug: "western-wear-05",
    name: "Western Wear 05",
    category: "western-wear",
    price: 1000,
    images: [
      "/images/products/western/western-wear-05-1.jpg",
      "/images/products/western/western-wear-05-2.jpg",
      "/images/products/western/western-wear-05-3.jpg",
    ],
    description:
      "An off-shoulder striped maxi dress with puff sleeves and a tiered skirt.",
    colors: ["Red", "White"],
    availability: "Available",
    newArrival: true,
  },

  // -------------------------------------------------------------------------
  // Imported from the "ktimages" photo set. Every photo of the same garment
  // (front / side / back / close-up) is grouped into ONE product below, with
  // the clearest shot listed first so it becomes the product-card image.
  // Prices are the temporary ₹1000 placeholder. Fabric and sizes are omitted
  // because they cannot be determined from photographs.
  // -------------------------------------------------------------------------
  {
    id: "indian-wear-03",
    slug: "indian-wear-03",
    name: "Indian Wear 03",
    category: "indian-wear",
    price: 1000,
    images: [
      "/images/products/indian/indian-wear-03-1.jpg",
      "/images/products/indian/indian-wear-03-2.jpg",
      "/images/products/indian/indian-wear-03-3.jpg",
      "/images/products/indian/indian-wear-03-4.jpg",
    ],
    description:
      "A full-length pleated kurta with mirror-work detailing at the neckline and placket, worn with matching trousers.",
    colors: ["Teal"],
    availability: "Available",
    featured: true,
    newArrival: true,
  },
  {
    id: "indian-wear-04",
    slug: "indian-wear-04",
    name: "Indian Wear 04",
    category: "indian-wear",
    price: 1000,
    images: [
      "/images/products/indian/indian-wear-04-1.jpg",
      "/images/products/indian/indian-wear-04-2.jpg",
      "/images/products/indian/indian-wear-04-3.jpg",
      "/images/products/indian/indian-wear-04-4.jpg",
      "/images/products/indian/indian-wear-04-5.jpg",
      "/images/products/indian/indian-wear-04-6.jpg",
    ],
    description:
      "A floor-length kurta with a contrast gold border, worn with matching trousers and a coordinating dupatta.",
    colors: ["Orange"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "indian-wear-05",
    slug: "indian-wear-05",
    name: "Indian Wear 05",
    category: "indian-wear",
    price: 1000,
    images: [
      "/images/products/indian/indian-wear-05-1.jpg",
      "/images/products/indian/indian-wear-05-2.jpg",
      "/images/products/indian/indian-wear-05-3.jpg",
    ],
    description:
      "A white kurta set with lace-trimmed sleeves and a gathered waist, worn with matching palazzo trousers.",
    colors: ["White"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "indian-wear-06",
    slug: "indian-wear-06",
    name: "Indian Wear 06",
    category: "indian-wear",
    price: 1000,
    images: [
      "/images/products/indian/indian-wear-06-1.jpg",
      "/images/products/indian/indian-wear-06-2.jpg",
      "/images/products/indian/indian-wear-06-3.jpg",
      "/images/products/indian/indian-wear-06-4.jpg",
      "/images/products/indian/indian-wear-06-5.jpg",
    ],
    description:
      "A front-open kurta in a bandhani-style print with a contrast border, worn with matching trousers.",
    colors: ["Green"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "indian-wear-07",
    slug: "indian-wear-07",
    name: "Indian Wear 07",
    category: "indian-wear",
    price: 1000,
    images: [
      "/images/products/indian/indian-wear-07-1.jpg",
      "/images/products/indian/indian-wear-07-2.jpg",
    ],
    description:
      "A sequinned leaf-motif blouse and flared skirt, finished with a sheer embroidered dupatta.",
    colors: ["Emerald"],
    availability: "Available",
    featured: true,
    newArrival: true,
  },
  {
    id: "indian-wear-08",
    slug: "indian-wear-08",
    name: "Indian Wear 08",
    category: "indian-wear",
    price: 1000,
    images: [
      "/images/products/indian/indian-wear-08-1.jpg",
      "/images/products/indian/indian-wear-08-2.jpg",
      "/images/products/indian/indian-wear-08-3.jpg",
      "/images/products/indian/indian-wear-08-4.jpg",
    ],
    description:
      "An embellished sleeveless blouse with a draped skirt and matching dupatta.",
    colors: ["Blush Pink"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "indian-wear-09",
    slug: "indian-wear-09",
    name: "Indian Wear 09",
    category: "indian-wear",
    price: 1000,
    images: [
      "/images/products/indian/indian-wear-09-1.jpg",
      "/images/products/indian/indian-wear-09-2.jpg",
      "/images/products/indian/indian-wear-09-3.jpg",
      "/images/products/indian/indian-wear-09-4.jpg",
      "/images/products/indian/indian-wear-09-5.jpg",
    ],
    description:
      "A striped blouse with flared sleeves, worn with a matching flared skirt and dupatta.",
    colors: ["Purple"],
    availability: "Available",
    featured: true,
    newArrival: true,
  },
  {
    id: "indo-western-02",
    slug: "indo-western-02",
    name: "Indo Western 02",
    category: "indo-western",
    price: 1000,
    images: [
      "/images/products/indo-western/indo-western-02-1.jpg",
      "/images/products/indo-western/indo-western-02-2.jpg",
      "/images/products/indo-western/indo-western-02-3.jpg",
    ],
    description:
      "A printed co-ord set pairing a bell-sleeve crop top with a full flared skirt.",
    colors: ["Aqua"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "indo-western-03",
    slug: "indo-western-03",
    name: "Indo Western 03",
    category: "indo-western",
    price: 1000,
    images: [
      "/images/products/indo-western/indo-western-03-1.jpg",
      "/images/products/indo-western/indo-western-03-2.jpg",
      "/images/products/indo-western/indo-western-03-3.jpg",
      "/images/products/indo-western/indo-western-03-4.jpg",
      "/images/products/indo-western/indo-western-03-5.jpg",
    ],
    description:
      "A paisley-print co-ord set pairing a bell-sleeve crop top with a full flared skirt.",
    colors: ["Beige"],
    availability: "Available",
    featured: true,
    newArrival: true,
  },
  {
    id: "western-wear-06",
    slug: "western-wear-06",
    name: "Western Wear 06",
    category: "western-wear",
    price: 1000,
    images: [
      "/images/products/western/western-wear-06-1.jpg",
      "/images/products/western/western-wear-06-2.jpg",
      "/images/products/western/western-wear-06-3.jpg",
    ],
    description:
      "A colour-block knit sweater with dropped shoulders, styled here with denim.",
    colors: ["Yellow", "White"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "western-wear-07",
    slug: "western-wear-07",
    name: "Western Wear 07",
    category: "western-wear",
    price: 1000,
    images: [
      "/images/products/western/western-wear-07-1.jpg",
      "/images/products/western/western-wear-07-2.jpg",
      "/images/products/western/western-wear-07-3.jpg",
      "/images/products/western/western-wear-07-4.jpg",
      "/images/products/western/western-wear-07-5.jpg",
    ],
    description:
      "A printed full-sleeve shirt with a wrap-front waist, worn with wide-leg trousers.",
    colors: ["Cream", "Grey"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "western-wear-08",
    slug: "western-wear-08",
    name: "Western Wear 08",
    category: "western-wear",
    price: 1000,
    images: [
      "/images/products/western/western-wear-08-1.jpg",
      "/images/products/western/western-wear-08-2.jpg",
      "/images/products/western/western-wear-08-3.jpg",
      "/images/products/western/western-wear-08-4.jpg",
    ],
    description:
      "A floral-print co-ord set with a collared shirt and matching wide-leg trousers.",
    colors: ["White"],
    availability: "Available",
    newArrival: true,
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.newArrival);
}
