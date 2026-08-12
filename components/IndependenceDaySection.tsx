import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import {
  independenceDay,
  getIndependenceProducts,
} from "@/data/independenceDay";
import { ChakraMotif, TricolourRule } from "@/components/IndependenceDecor";

/**
 * Homepage Independence Day product section.
 *
 * Reuses the existing ProductGrid, so every card behaves exactly like the rest
 * of the site — same design, same wishlist button, same link through to the
 * real product page and its WhatsApp ordering.
 */
export default function IndependenceDaySection() {
  const products = getIndependenceProducts();
  if (products.length === 0) return null;

  return (
    <section
      id="independence-day-sale"
      aria-labelledby="independence-section-heading"
      className="relative overflow-hidden bg-lavender-50/70"
    >
      <ChakraMotif className="absolute -left-16 top-6 h-48 w-48 text-purple-300/20" />
      <ChakraMotif className="absolute -right-16 bottom-6 h-48 w-48 text-purple-300/15" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-purple-500 sm:text-sm">
            {independenceDay.title}
          </span>
          <h2
            id="independence-section-heading"
            className="font-serif-display mt-3 text-3xl text-purple-800 sm:text-4xl md:text-5xl"
          >
            {independenceDay.tagline}
          </h2>
          <TricolourRule className="mt-5" />
          <p className="mt-5 max-w-xl text-sm text-ink/60 sm:text-base">
            {independenceDay.intro}
          </p>
        </div>

        <ProductGrid products={products} />

        <div className="mt-12 flex justify-center">
          <Link
            href={independenceDay.href}
            className="inline-flex items-center justify-center bg-purple-700 px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-purple-800 sm:text-sm"
          >
            View The Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
