// Centralized brand configuration.
// Update values here to change contact details, links, and policy text across the whole site.

export const brandConfig = {
  brandName: "KT's Fashion",
  shortName: "KT's",
  tagline: "Feeling Beautiful",
  foundedYear: 2024, // brand is ~2 years old as of 2026
  location: {
    city: "Kanpur",
    state: "Uttar Pradesh",
    country: "India",
    display: "Kanpur, Uttar Pradesh, India",
  },
  delivery: "Pan India Delivery",

  // WhatsApp ordering — this is the core business function of the site.
  whatsappNumber: "917705042525", // international format, no + or spaces
  whatsappDisplay: "+91 7705 042 525",

  instagramUrl: "https://www.instagram.com/kt_sfashionworld/",
  instagramHandle: "@kt_sfashionworld",

  // Leave blank until the client provides a real business email.
  email: "",

  shippingMessage: "Free Shipping On All Orders",
  codMessage: "COD Available",
  returnPolicy: "Easy 7 Days Returns",

  seo: {
    defaultTitle: "KT's Fashion | Feeling Beautiful",
    defaultDescription:
      "KT's Fashion is a women's fashion brand from Kanpur, Uttar Pradesh, offering elegant Indian, Indo Western and Western wear with Pan India delivery and easy WhatsApp ordering.",
    siteUrl: "https://www.ktsfashion.in", // update once a real domain is live
  },
} as const;

export type BrandConfig = typeof brandConfig;
