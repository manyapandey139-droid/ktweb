import { CategoryInfo } from "@/types/product";

// To add a new category in the future: add an object here, then use its
// `slug` value as the `category` field on any product in data/products.ts.
export const categories: CategoryInfo[] = [
  {
    slug: "indian-wear",
    title: "Indian Wear",
    navLabel: "Indian Wear",
    shortDescription: "Elegant ethnic styles for every occasion.",
    image: "/images/products/indian/indian-wear-01-1.jpg",
  },
  {
    slug: "indo-western",
    title: "Indo Western",
    navLabel: "Indo Western",
    shortDescription: "Fusion silhouettes that blend tradition with trend.",
    image: "/images/products/indo-western/indo-western-01-1.jpg",
  },
  {
    slug: "western-wear",
    title: "Western Wear",
    navLabel: "Western Wear",
    shortDescription: "Chic and trendy outfits for the modern woman.",
    image: "/images/products/western/western-wear-03-1.jpg",
  },
  {
    slug: "mom-kid",
    title: "Mom & Kid Twinning",
    navLabel: "Mom & Kid",
    shortDescription: "Matching outfits for the perfect twinning moment.",
    image: "/images/products/mom-kid/mom-kid-teaser.jpg",
    comingSoon: true,
  },
];

export function getCategory(slug: string): CategoryInfo | undefined {
  return categories.find((c) => c.slug === slug);
}
