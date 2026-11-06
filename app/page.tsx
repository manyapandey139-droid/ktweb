import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import QuickCategoryStrip from "@/components/QuickCategoryStrip";
import DiwaliSpotlight from "@/components/DiwaliSpotlight";
import HomeTrendingTabs from "@/components/HomeTrendingTabs";
import OccasionMosaic from "@/components/OccasionMosaic";
import BrandTrustBar from "@/components/BrandTrustBar";
import SectionHeading from "@/components/SectionHeading";
import CategoryCard from "@/components/CategoryCard";
import ProductGrid from "@/components/ProductGrid";
import AboutSection from "@/components/AboutSection";
import EditorialBanner from "@/components/EditorialBanner";
import WhySection from "@/components/WhySection";
import InstagramSection from "@/components/InstagramSection";
import WhatsAppCTASection from "@/components/WhatsAppCTASection";
import { categories } from "@/data/categories";
import { getAllProducts, getNewArrivals } from "@/data/products";

export default function Home() {
  const allProducts = getAllProducts();
  const newArrivals = getNewArrivals();

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Main Auto-Sliding Hero Carousel (Amazon/Myntra Style: Diwali 10% OFF + Feeling Beautiful Luxury Edit + Western Co-Ords + Kutchi Twirls) */}
      <HeroSlider />

      {/* 2. Quick-Shop Story / Category Bubbles (Fast Mobile Browsing) */}
      <QuickCategoryStrip />

      {/* 3. Luxury Brand Trust & Perks Bar */}
      <BrandTrustBar />

      {/* 4. Diwali Grand Festive Spotlight (Curated Ethnic Outfits at 10% OFF + Coupon Copy) */}
      <DiwaliSpotlight />

      {/* 5. Interactive Tabbed Trending Showcase (Editor's Choice, Festive, Western, Under ₹2000) */}
      <HomeTrendingTabs allProducts={allProducts} />

      {/* 6. Shop By Occasion Editorial Mosaic (Festive Royale, Brunch Co-Ords, Evening Drapes, Twinning) */}
      <OccasionMosaic />

      {/* 7. Comprehensive Category Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <SectionHeading
          eyebrow="Shop By Category"
          title="Find Your Signature Style"
          description="From authentic Indian ethnic elegance to contemporary Western chic, explore tailored collections for every woman."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      {/* 8. Just In / New Arrivals Showcase */}
      {newArrivals.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 bg-[#faf8f5] rounded-3xl my-8">
          <div className="flex items-end justify-between mb-10 sm:mb-14">
            <SectionHeading eyebrow="Fresh Off The Loom" title="New Arrivals" align="left" />
            <Link
              href="/shop?sort=newest"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-purple-800 font-bold hover:underline shrink-0"
            >
              <span>View All New In</span>
              <span>→</span>
            </Link>
          </div>
          <ProductGrid products={newArrivals.slice(0, 8)} />
        </section>
      )}

      {/* 9. Brand Story & Craftsmanship */}
      <AboutSection />

      {/* 10. Editorial Tailoring Banner */}
      <EditorialBanner />

      {/* 11. Why KT's Fashion Highlights */}
      <WhySection />

      {/* 12. Social Proof & Instagram Feed */}
      <InstagramSection />

      {/* 13. VIP WhatsApp Concierge CTA */}
      <WhatsAppCTASection />
    </main>
  );
}
