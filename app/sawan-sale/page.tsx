import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppCTASection from "@/components/WhatsAppCTASection";
import { sawanSale, getSawanProducts } from "@/data/sawanSale";
import { SawanLeaf, SawanRain } from "@/components/SawanDecor";

export const metadata: Metadata = {
  title: "Sawan Sale",
  description:
    "Celebrate Sawan in style with KT's Fashion — fresh monsoon colours, festive prints and easy silhouettes, with simple WhatsApp ordering.",
};

export default function SawanSalePage() {
  // If the campaign is switched off in data/sawanSale.ts the page retires
  // cleanly rather than sitting there empty.
  if (!sawanSale.isLive) notFound();

  const products = getSawanProducts();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
        <SawanRain />
        <SawanLeaf className="left-[-3rem] top-[-2rem] h-56 w-56 text-lavender-200/25" />
        <SawanLeaf
          flip
          className="bottom-[-3rem] right-[-2rem] h-56 w-56 text-lavender-200/20"
        />

        <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-lavender-200 sm:text-xs">
            {sawanSale.eyebrow}
          </span>
          <h1 className="font-serif-display mt-4 text-4xl text-white sm:text-5xl md:text-6xl">
            {sawanSale.title}
          </h1>
          <p className="font-serif-display mt-4 text-lg italic text-lavender-100 sm:text-xl">
            {sawanSale.tagline}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-lavender-200/80 sm:text-base">
            {sawanSale.intro}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="The Edit"
          title="Shop The Sawan Collection"
          description="Every piece below is available to order on WhatsApp — no checkout, no accounts, just a simple conversation."
        />
        <ProductGrid products={products} />
      </div>

      <WhatsAppCTASection />
    </>
  );
}
