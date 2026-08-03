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
    id: "indian-wear-02",
    slug: "indian-wear-02",
    name: "Indian Wear 02",
    category: "indian-wear",
    price: 1000,
    images: [
      "/images/products/indian/indian-wear-02-1.jpg",
      "/images/products/indian/indian-wear-02-2.jpg",
      "/images/products/indian/indian-wear-02-3.jpg",
      "/images/products/indian/indian-wear-02-4.jpg",
      "/images/products/indian/indian-wear-02-5.jpg",
    ],
    description:
      "A long-sleeve kurta with delicate bead embellishment at the yoke and side slits, paired with matching palazzo pants.",
    colors: ["Black", "Maroon"],
    availability: "Available",
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
