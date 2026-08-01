"use client";

import Link from "next/link";
import { useWishlist } from "@/contexts/WishlistContext";
import { products } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import SectionHeading from "@/components/SectionHeading";

export default function WishlistPage() {
  const { ids } = useWishlist();
  const saved = products.filter((p) => ids.includes(p.id));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Saved For Later"
        title="Your Wishlist"
        description="Items you've saved on this device. Order any of them directly on WhatsApp."
      />

      {saved.length === 0 ? (
        <div className="text-center py-16 text-ink/50">
          <p className="mb-6">You haven&apos;t saved any items yet.</p>
          <Link
            href="/shop"
            className="inline-flex items-center px-6 py-3 bg-purple-700 text-white text-xs tracking-widest uppercase hover:bg-purple-800 transition-colors"
          >
            Browse The Shop
          </Link>
        </div>
      ) : (
        <ProductGrid products={saved} />
      )}
    </div>
  );
}
