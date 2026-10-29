export type ProductCategory =
  | "cord-set"
  | "ethnic-suit"
  | "bodycon-dress"
  | "gown"
  | "cocktail-dress"
  | "gym-fitness-outfits"
  | "mom-daughter";

export type Availability = "Available" | "Limited Stock" | "Out of Stock";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  /** First image is used as the primary/card image. Add more for the product gallery. */
  images: string[];
  description: string;
  fabric?: string;
  /** Omit or leave empty if the product only comes in one size. */
  sizes?: string[];
  /** Omit or leave empty if the product only comes in one color. */
  colors?: string[];
  availability: Availability;
  featured?: boolean;
  newArrival?: boolean;
}

export interface CategoryInfo {
  slug: ProductCategory;
  title: string;
  navLabel: string;
  shortDescription: string;
  image: string;
  /** Set true to show a "Coming Soon" state instead of a product grid. */
  comingSoon?: boolean;
}
