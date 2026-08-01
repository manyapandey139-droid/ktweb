import { Product } from "@/types/product";

export type SortOption = "featured" | "newest" | "price-asc" | "price-desc";

export const sortOptions: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

export function sortProducts(products: Product[], sort: SortOption): Product[] {
  const list = [...products];

  switch (sort) {
    case "price-asc":
      return list.sort((a, b) => a.price - b.price);
    case "price-desc":
      return list.sort((a, b) => b.price - a.price);
    case "newest":
      return list.sort((a, b) => Number(b.newArrival) - Number(a.newArrival));
    case "featured":
    default:
      return list.sort((a, b) => Number(b.featured) - Number(a.featured));
  }
}
