import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppCTASection from "@/components/WhatsAppCTASection";
import {
  independenceDay,
  getIndependenceProducts,
} from "@/data/independenceDay";
import {
  RibbonDrift,
  ChakraMotif,
  TricolourRule,
} from "@/components/IndependenceDecor";

export const metadata: Metadata = {
  title: "Independence Day Sale",
  description:
    "Celebrate Freedom. Celebrate Your Style. Shop KT's Fashion's Independence Day edit — tricolour sarees, anarkalis and mother-daughter twinning sets, with easy WhatsApp ordering.",
};

export default function IndependenceDaySalePage() {
  // If the campaign is switched off in data/independenceDay.ts the page
  // retires cleanly rather than sitting there empty.
  if (!independenceDay.isLive) notFound();

  const products = getIndependenceProducts();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
        <RibbonDrift />
        <ChakraMotif className="absolute -right-16 -top-16 h-64 w-64 text-white/[0.07]" />
        <ChakraMotif className="absolute -bottom-20 -left-14 h-56 w-56 text-white/[0.05]" />
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]"
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20">
          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-lavender-200 sm:text-xs">
            {independenceDay.eyebrow}
          </span>
          <h1 className="font-serif-display mt-4 text-4xl text-white sm:text-5xl md:text-6xl">
            {independenceDay.title}
          </h1>
          <TricolourRule className="mt-5" />
          <p className="font-serif-display mt-5 text-lg italic text-lavender-100 sm:text-xl">
            {independenceDay.tagline}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-lavender-200/80 sm:text-base">
            {independenceDay.intro}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="The Edit"
          title="Shop The Collection"
          description="Every piece below is available to order on WhatsApp — no checkout, no accounts, just a simple conversation."
        />
        <ProductGrid products={products} />
      </div>

      <WhatsAppCTASection />
    </>
  );
}
