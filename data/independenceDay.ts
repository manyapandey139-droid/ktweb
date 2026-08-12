import { products } from "@/data/products";
import { Product } from "@/types/product";

// ---------------------------------------------------------------------------
// INDEPENDENCE DAY SALE CAMPAIGN
//
// One place to control the whole campaign: which products are featured, the
// copy, and whether it is running at all.
//
// • Set `isLive: false` to switch the entire campaign off — the banner,
//   popup and homepage section all disappear. Nothing else is affected.
// • The slugs below are EXISTING products from data/products.ts. The campaign
//   never creates its own products, so prices, images, categories and
//   WhatsApp ordering all stay exactly as they are in the catalog.
// ---------------------------------------------------------------------------

export const independenceDay = {
  isLive: true,

  /** Where every "Shop Independence Day Sale" button points. */
  href: "/independence-day-sale",

  eyebrow: "KT's Fashion Presents",
  title: "Independence Day Sale",
  tagline: "Celebrate Freedom. Celebrate Your Style.",
  intro:
    "Saffron, ivory and green woven through sarees, anarkalis and twinning sets — our festive edit for the days that matter most.",

  popup: {
    heading: "Independence Day Sale",
    message:
      "Saffron, ivory and green — a festive edit made for celebrating together.",
    cta: "Shop Independence Day Sale",
  },

  /** Every product in the campaign, in display order. */
  productSlugs: [
    "tricolour-organza-saree",
    "mother-daughter-tricolour-twinning-set",
    "tricolour-white-anarkali-suit-set",
    "indigo-bloom-embroidered-anarkali-set",
    "tiranga-motif-straight-kurta",
  ],

  /**
   * The hero banner composition, by on-screen position — a saree and an
   * anarkali flanking the mother-and-daughter set, which takes the raised
   * centre position so the collection reads at a glance.
   */
  banner: {
    left: "tricolour-organza-saree",
    centre: "mother-daughter-tricolour-twinning-set",
    right: "tricolour-white-anarkali-suit-set",
  },

  /** The four shown inside the popup — one of each product type. */
  popupSlugs: [
    "mother-daughter-tricolour-twinning-set",
    "tricolour-organza-saree",
    "tricolour-white-anarkali-suit-set",
    "indigo-bloom-embroidered-anarkali-set",
  ],
} as const;

/** Resolve campaign slugs to real catalog products, skipping any that no
 *  longer exist so a removed product can never break the page. */
function resolve(slugs: readonly string[]): Product[] {
  return slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p));
}

export function getIndependenceProducts(): Product[] {
  return resolve(independenceDay.productSlugs);
}

export function getIndependencePopupProducts(): Product[] {
  return resolve(independenceDay.popupSlugs);
}

export interface IndependenceBannerFigure {
  product: Product;
  isCentre: boolean;
}

/** Banner figures in left → centre → right display order, each flagged so the
 *  centre piece can be given the raised, taller treatment. */
export function getIndependenceBannerFigures(): IndependenceBannerFigure[] {
  const positions = ["left", "centre", "right"] as const;
  return positions
    .map((position) => {
      const product = products.find(
        (p) => p.slug === independenceDay.banner[position]
      );
      return product ? { product, isCentre: position === "centre" } : null;
    })
    .filter((figure): figure is IndependenceBannerFigure => Boolean(figure));
}
