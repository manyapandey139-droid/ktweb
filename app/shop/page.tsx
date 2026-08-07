import { Suspense } from "react";
import type { Metadata } from "next";
import ProductFilters from "@/components/ProductFilters";
import ProductGrid from "@/components/ProductGrid";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/data/products";
import { filterAndSortProducts, getAvailableSizes } from "@/lib/filterProducts";

export const metadata: Metadata = {
  title: "Shop All Collections",
  description:
    "Browse the full KT's Fashion catalog — cord sets, ethnic suits, bodycon dresses, gowns and cocktail dresses, with easy WhatsApp ordering.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const params = await searchParams;
  const filtered = filterAndSortProducts(products, params);
  const sizes = getAvailableSizes(products);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Shop"
        title="All Collections"
        description="Every piece is available to order directly on WhatsApp — no checkout, no accounts, just a simple conversation."
      />

      <Suspense>
        <ProductFilters sizes={sizes} />
      </Suspense>

      <ProductGrid products={filtered} />
    </div>
  );
}
