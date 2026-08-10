import { products } from "@/data/products";
import { Product } from "@/types/product";

// ---------------------------------------------------------------------------
// SAWAN SALE CAMPAIGN
//
// One place to control the whole campaign: which products are featured, the
// copy, and whether it is running at all.
//
// • Set `isLive: false` to switch the entire campaign off — the banner,
//   popup and homepage section all disappear. Nothing else is affected.
// • The slugs below are EXISTING products from data/products.ts. The campaign
//   never creates its own products, so a product's price, images, category
//   and WhatsApp ordering all stay exactly as they are in the catalog.
// ---------------------------------------------------------------------------

export const sawanSale = {
  isLive: true,

  /** Where every "Shop Sawan Sale" button points. */
  href: "/sawan-sale",

  eyebrow: "KT's Fashion Presents",
  title: "Sawan Sale",
  tagline: "Celebrate Sawan In Style",
  intro:
    "Fresh monsoon colours, festive prints and easy silhouettes — handpicked for your Sawan moments.",

  popup: {
    heading: "Sawan Sale",
    message:
      "Fresh monsoon colours and festive prints, handpicked for your Sawan moments.",
    cta: "Shop Sawan Sale",
  },

  /** Every product in the campaign, in display order. */
  productSlugs: [
    "emerald-rose-bandhani-suit-set",
    "midnight-bloom-embroidered-suit-set",
    "amber-rose-bandhani-suit-set",
    "vermilion-chevron-sharara-set",
    "pearl-blossom-embroidered-suit-set",
    "sunset-bandhani-sharara-set",
  ],

  /** The three used in the hero banner composition (centre listed first). */
  bannerSlugs: [
    "emerald-rose-bandhani-suit-set",
    "midnight-bloom-embroidered-suit-set",
    "amber-rose-bandhani-suit-set",
  ],

  /** The four shown inside the popup. */
  popupSlugs: [
    "emerald-rose-bandhani-suit-set",
    "midnight-bloom-embroidered-suit-set",
    "vermilion-chevron-sharara-set",
    "pearl-blossom-embroidered-suit-set",
  ],
} as const;

/** Resolve campaign slugs to real catalog products, skipping any that no
 *  longer exist so a removed product can never break the page. */
function resolve(slugs: readonly string[]): Product[] {
  return slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p));
}

export function getSawanProducts(): Product[] {
  return resolve(sawanSale.productSlugs);
}

export function getSawanBannerProducts(): Product[] {
  return resolve(sawanSale.bannerSlugs);
}

export function getSawanPopupProducts(): Product[] {
  return resolve(sawanSale.popupSlugs);
}
