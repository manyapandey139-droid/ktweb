import { brandConfig } from "@/lib/brandConfig";
import { Product } from "@/types/product";

function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

/** Pre-filled "order" message for a specific product. */
export function getProductOrderUrl(product: Product): string {
  const message = [
    `Hello ${brandConfig.brandName},`,
    ``,
    `I am interested in this product:`,
    ``,
    `Product: ${product.name}`,
    `Product ID: ${product.id.toUpperCase()}`,
    `Price: ₹${product.price}`,
    ``,
    `Please share availability and ordering details.`,
    ``,
    `Thank you.`,
  ].join("\n");

  return buildWhatsAppUrl(message);
}

/** Lighter-weight "enquire" message for a specific product. */
export function getProductEnquiryUrl(product: Product): string {
  const message = [
    `Hello ${brandConfig.brandName},`,
    ``,
    `I have a question about this product:`,
    ``,
    `Product: ${product.name}`,
    `Product ID: ${product.id.toUpperCase()}`,
    ``,
    `Could you please share more details?`,
    ``,
    `Thank you.`,
  ].join("\n");

  return buildWhatsAppUrl(message);
}

/** General enquiry message, used for the Contact page and site-wide CTAs. */
export function getGeneralEnquiryUrl(): string {
  const message = [
    `Hello ${brandConfig.brandName},`,
    ``,
    `I would like to know more about your collections.`,
    ``,
    `Thank you.`,
  ].join("\n");

  return buildWhatsAppUrl(message);
}
