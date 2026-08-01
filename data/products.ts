import { Product } from "@/types/product";

// ---------------------------------------------------------------------------
// PRODUCT CATALOG
//
// This is the ONLY file you need to edit to add, remove, or update products.
// See PRODUCT-MANAGEMENT.md in the project root for a full step-by-step guide.
//
// NOTE: The 3 products below are SAMPLE data seeded from real KT's Fashion
// photos so you can see the site working end-to-end. Prices and descriptions
// are placeholders — update them with real details before going live.
// ---------------------------------------------------------------------------

export const products: Product[] = [
  {
    id: "kt-001",
    slug: "maroon-sequin-dhoti-gown",
    name: "Maroon Sequin Dhoti Gown",
    category: "indo-western",
    price: 3499, // SAMPLE PRICE — update with the real price
    images: ["/images/products/indo-western/kt-001-1.jpg"],
    description:
      "A striking fusion gown featuring a sequin-striped bodice and a draped dhoti-style skirt. Finished with a sleek waist belt for a flattering, contemporary silhouette — perfect for festive evenings and celebrations.",
    fabric: "Georgette with sequin work",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Maroon"],
    availability: "Available",
    featured: true,
    newArrival: true,
  },
  {
    id: "kt-002",
    slug: "ivory-embroidered-kurti-set",
    name: "Ivory Embroidered Kurti Set",
    category: "indian-wear",
    price: 1899, // SAMPLE PRICE — update with the real price
    images: ["/images/products/indian/kt-002-1.jpg"],
    description:
      "An elegant ivory kurti with delicate thread embroidery, paired with a rich rust tissue dupatta featuring a scalloped, hand-finished border. Timeless and versatile for both everyday wear and special occasions.",
    fabric: "Muslin cotton, tissue dupatta",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Ivory"],
    availability: "Available",
    featured: true,
  },
  {
    id: "kt-003",
    slug: "pastel-yellow-floral-gown",
    name: "Pastel Yellow Floral Gown",
    category: "western-wear",
    price: 2299, // SAMPLE PRICE — update with the real price
    images: ["/images/products/western/kt-003-1.jpg"],
    description:
      "A soft pastel yellow gown with an all-over floral print, one-shoulder ruffle detailing, and a flowing silhouette — designed to make a graceful statement at any evening event.",
    fabric: "Floral print georgette",
    sizes: ["S", "M"],
    colors: ["Yellow"],
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
