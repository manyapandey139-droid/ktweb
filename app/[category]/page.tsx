import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductFilters from "@/components/ProductFilters";
import ProductGrid from "@/components/ProductGrid";
import SectionHeading from "@/components/SectionHeading";
import { categories, getCategory } from "@/data/categories";
import { products } from "@/data/products";
import { filterAndSortProducts, getAvailableSizes } from "@/lib/filterProducts";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const info = getCategory(category);
  if (!info) return {};
  return {
    title: info.title,
    description: info.shortDescription,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const { category } = await params;
  const info = getCategory(category);
  if (!info) notFound();

  if (info.comingSoon) {
    const categoryProducts = products.filter((p) => p.category === info.slug);
    return (
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24 text-center">
        <div className="relative aspect-[16/9] max-w-2xl mx-auto mb-10 overflow-hidden">
          <Image
            src={info.image}
            alt={info.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-purple-900/40 flex items-center justify-center">
            <span className="border border-white/80 text-white text-sm tracking-[0.3em] uppercase px-5 py-2.5">
              Coming Soon
            </span>
          </div>
        </div>
        <h1 className="font-serif-display text-3xl sm:text-4xl text-purple-800 mb-4">
          {info.title}
        </h1>
        <p className="text-ink/60 max-w-lg mx-auto">
          {info.shortDescription} We&apos;re putting the finishing touches on
          this collection — check back soon, or message us on WhatsApp to be
          notified first.
        </p>
        {categoryProducts.length > 0 && (
          <div className="mt-14 text-left">
            <ProductGrid products={categoryProducts} />
          </div>
        )}
      </div>
    );
  }

  const params2 = await searchParams;
  const categoryProducts = products.filter((p) => p.category === info.slug);
  const filtered = filterAndSortProducts(categoryProducts, {
    ...params2,
    category: info.slug,
  });
  const sizes = getAvailableSizes(categoryProducts);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="Collection" title={info.title} description={info.shortDescription} />

      <Suspense>
        <ProductFilters sizes={sizes} lockedCategory={info.slug} />
      </Suspense>

      <ProductGrid products={filtered} />
    </div>
  );
}
