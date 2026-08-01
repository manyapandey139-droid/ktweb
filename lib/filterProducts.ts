import { Product } from "@/types/product";
import { sortProducts, SortOption } from "@/lib/sortProducts";

export interface ProductQuery {
  category?: string;
  price?: string; // "min-max"
  size?: string;
  availability?: string;
  sort?: string;
  q?: string;
}

export function filterAndSortProducts(
  products: Product[],
  query: ProductQuery
): Product[] {
  let list = products;

  if (query.category) {
    list = list.filter((p) => p.category === query.category);
  }

  if (query.q) {
    const term = query.q.toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
    );
  }

  if (query.price) {
    const [min, max] = query.price.split("-").map(Number);
    list = list.filter((p) => p.price >= min && p.price <= max);
  }

  if (query.size) {
    list = list.filter((p) => p.sizes?.includes(query.size!));
  }

  if (query.availability) {
    list = list.filter((p) => p.availability === query.availability);
  }

  return sortProducts(list, (query.sort as SortOption) || "featured");
}

export function getAvailableSizes(products: Product[]): string[] {
  const sizes = new Set<string>();
  for (const p of products) {
    p.sizes?.forEach((s) => sizes.add(s));
  }
  return Array.from(sizes);
}
