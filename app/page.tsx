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
import DiwaliSaleBanner from "@/components/DiwaliSaleBanner";
import PromoBanner from "@/components/PromoBanner";
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
      {/* 1. Main Brand Hero Banner */}
      <Hero />

      {/* 2. Diwali Grand Festive Sale Banner (10% OFF & Featured Festive Ethnic Wear) */}
      <DiwaliSaleBanner />

      {/* 3. Independence Day Campaign Banner (active when isLive is true in data/independenceDay.ts) */}
      {independenceDay.isLive && <IndependenceDayBanner />}

      {/* 4. Category Grid */}
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

      {/* 5. Handpicked Featured Collection */}
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

      {/* 6. Mid-page Seasonal Promotional Banner */}
      <PromoBanner />

      {/* 7. New Arrivals */}
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

      {/* 8. Independence Day Section (when active) */}
      {independenceDay.isLive && <IndependenceDaySection />}

      {/* 9. Brand Story & Craftsmanship */}
      <AboutSection />

      {/* 10. Editorial Tailoring Banner */}
      <EditorialBanner />

      {/* 11. Why KT's Fashion Highlights */}
      <WhySection />

      {/* 12. Social Proof & Instagram Feed */}
      <InstagramSection />

      {/* 13. WhatsApp Instant Shopping CTA */}
      <WhatsAppCTASection />
    </>
  );
}
