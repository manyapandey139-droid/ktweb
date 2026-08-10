import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { sawanSale, getSawanProducts } from "@/data/sawanSale";
import { SawanLeaf } from "@/components/SawanDecor";

/**
 * Homepage Sawan Sale product section.
 *
 * Reuses the existing ProductGrid, so every card behaves exactly like the rest
 * of the site — same design, same wishlist button, same link through to the
 * real product page and its WhatsApp ordering.
 */
export default function SawanSaleSection() {
  const products = getSawanProducts();
  if (products.length === 0) return null;

  return (
    <section
      id="sawan-sale"
      aria-labelledby="sawan-section-heading"
      className="relative overflow-hidden bg-lavender-50/70"
    >
      <SawanLeaf className="left-[-3rem] top-4 h-48 w-48 text-purple-300/25" />
      <SawanLeaf
        flip
        className="bottom-4 right-[-3rem] h-48 w-48 text-purple-300/20"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-purple-500 sm:text-sm">
            {sawanSale.title}
          </span>
          <h2
            id="sawan-section-heading"
            className="font-serif-display mt-3 text-3xl text-purple-800 sm:text-4xl md:text-5xl"
          >
            {sawanSale.tagline}
          </h2>
          <span className="mt-4 flex items-center gap-3 text-purple-300">
            <span className="h-px w-10 bg-purple-200" />
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
              <path d="M12 2c3.6 4.6 6.5 8.4 6.5 11.7A6.5 6.5 0 0 1 12 20a6.5 6.5 0 0 1-6.5-6.3C5.5 10.4 8.4 6.6 12 2Z" />
            </svg>
            <span className="h-px w-10 bg-purple-200" />
          </span>
          <p className="mt-5 max-w-xl text-sm text-ink/60 sm:text-base">
            {sawanSale.intro}
          </p>
        </div>

        <ProductGrid products={products} />

        <div className="mt-12 flex justify-center">
          <Link
            href={sawanSale.href}
            className="inline-flex items-center justify-center bg-purple-700 px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-purple-800 sm:text-sm"
          >
            View All Sawan Styles
          </Link>
        </div>
      </div>
    </section>
  );
}
