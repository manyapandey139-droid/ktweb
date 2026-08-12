import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CategoryCard from "@/components/CategoryCard";
import ProductGrid from "@/components/ProductGrid";
import AboutSection from "@/components/AboutSection";
import EditorialBanner from "@/components/EditorialBanner";
import WhySection from "@/components/WhySection";
import InstagramSection from "@/components/InstagramSection";
import WhatsAppCTASection from "@/components/WhatsAppCTASection";
import IndependenceDayBanner from "@/components/IndependenceDayBanner";
import IndependenceDaySection from "@/components/IndependenceDaySection";
import { categories } from "@/data/categories";
import { getFeaturedProducts, getNewArrivals } from "@/data/products";
import { independenceDay } from "@/data/independenceDay";

export default function Home() {
  const featured = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  return (
    <>
      <Hero />

      {independenceDay.isLive && <IndependenceDayBanner />}

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <SectionHeading
          eyebrow="Shop By Category"
          title="Find Your Style"
          description="From ethnic elegance to contemporary chic, explore collections crafted for every occasion."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      {featured.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 bg-lavender-50/60">
          <div className="flex items-end justify-between mb-10 sm:mb-14">
            <SectionHeading
              eyebrow="Featured Collection"
              title="Handpicked For You"
              align="left"
            />
            <Link
              href="/shop"
              className="hidden sm:inline text-xs tracking-widest uppercase text-purple-700 font-medium hover:underline shrink-0"
            >
              View All
            </Link>
          </div>
          <ProductGrid products={featured} />
        </section>
      )}

      {newArrivals.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="flex items-end justify-between mb-10 sm:mb-14">
            <SectionHeading eyebrow="Just In" title="New Arrivals" align="left" />
            <Link
              href="/shop?sort=newest"
              className="hidden sm:inline text-xs tracking-widest uppercase text-purple-700 font-medium hover:underline shrink-0"
            >
              View All
            </Link>
          </div>
          <ProductGrid products={newArrivals} />
        </section>
      )}

      {independenceDay.isLive && <IndependenceDaySection />}

      <AboutSection />
      <EditorialBanner />
      <WhySection />
      <InstagramSection />
      <WhatsAppCTASection />
    </>
  );
}
