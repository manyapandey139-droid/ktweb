import { CategoryInfo } from "@/types/product";

// To add a new category in the future: add an object here, then use its
// `slug` value as the `category` field on any product in data/products.ts.
// Navigation, footer links, homepage cards, the shop filter and the
// /<slug> category route are all generated from this list automatically.
export const categories: CategoryInfo[] = [
  {
    slug: "cord-set",
    title: "Cord Set",
    navLabel: "Cord Set",
    shortDescription: "Perfectly matched top and bottom sets.",
    image: "/images/products/indo-western/golden-paisley-co-ord-set-front.jpg",
  },
  {
    slug: "ethnic-suit",
    title: "Ethnic Suit",
    navLabel: "Ethnic Suit",
    shortDescription: "Kurta sets, shararas, anarkalis and timeless drapes.",
    image: "/images/products/indian/ivory-mirror-anarkali-set-front.jpg",
  },
  {
    slug: "bodycon-dress",
    title: "Bodycon Dress",
    navLabel: "Bodycon Dress",
    shortDescription: "Figure-skimming silhouettes made to flatter.",
    image: "/images/products/western/aqua-blossom-bodycon-dress-front.jpg",
  },
  {
    slug: "gown",
    title: "Gown",
    navLabel: "Gown",
    shortDescription: "Sweeping floor-length drama for every celebration.",
    image: "/images/products/indo-western/turquoise-rose-drape-gown-front.jpg",
  },
  {
    slug: "cocktail-dress",
    title: "Cocktail Dress",
    navLabel: "Cocktail Dress",
    shortDescription: "Party-ready pieces with a modern edge.",
    image: "/images/products/western/scarlet-charm-midi-dress-front.jpg",
  },
  {
    slug: "gym-fitness-outfits",
    title: "Gym Fitness Outfits",
    navLabel: "Gym Fitness Outfits",
    shortDescription: "Easy, active pieces for a life on the move.",
    image: "/images/products/western/varsity-stripe-jersey-tee-front.jpg",
  },
  {
    slug: "mom-daughter",
    title: "Mom & Daughter",
    navLabel: "Mom & Daughter",
    shortDescription: "Matching outfits for the perfect twinning moment.",
    image: "/images/products/mom-kid/mom-kid-teaser.jpg",
    comingSoon: true,
  },
];

export function getCategory(slug: string): CategoryInfo | undefined {
  return categories.find((c) => c.slug === slug);
}
