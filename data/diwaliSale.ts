import { products } from "@/data/products";
import { Product } from "@/types/product";

export const diwaliSale = {
  isLive: true,
  discountText: "FLAT 10% OFF",
  couponCode: "DIWALI10",
  title: "Diwali Grand Festive Sale",
  eyebrow: "KT's Fashion Festive Edit",
  tagline: "Celebrate The Festival Of Lights In Timeless Elegance",
  description:
    "Glow brighter this Diwali with our exclusive handcrafted ethnic collection — velvet suits, brocade dhoti sarees, silk kurtis & twirl-worthy lehengas. Enjoy Flat 10% OFF on all festive ethnic wear!",
  ctaText: "Shop Diwali Ethnic Wear",
  href: "/ethnic-suit",

  popup: {
    badge: "Special Diwali Festive Offer",
    title: "Diwali Festive Dhamaka",
    discount: "Flat 10% OFF",
    message: "Illuminate your festive look! Get an exclusive 10% discount on our latest festive ethnic collection.",
    cta: "Claim 10% OFF On WhatsApp",
  },

  // Curated festive ethnic dress slugs featured in Banner
  bannerSlugs: [
    "royal-navy-brocade-peplum-saree",
    "maroon-velvet-peplum-palazzo",
    "ivory-silk-kurti-salwar",
    "rose-carmine-silk-kurti-salwar",
  ],

  // Curated festive ethnic dress slugs featured in Popup
  popupSlugs: [
    "maroon-velvet-peplum-palazzo",
    "royal-navy-brocade-peplum-saree",
    "blush-lavender-organza-lehenga",
    "crimson-drape-saree-gown",
  ],
} as const;

function resolve(slugs: readonly string[]): Product[] {
  return slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p));
}

export function getDiwaliBannerProducts(): Product[] {
  return resolve(diwaliSale.bannerSlugs);
}

export function getDiwaliPopupProducts(): Product[] {
  return resolve(diwaliSale.popupSlugs);
}
