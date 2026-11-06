"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { brandConfig } from "@/lib/brandConfig";
import { useWishlist } from "@/contexts/WishlistContext";

interface Props {
  allProducts: Product[];
}

type TabKey = "featured" | "festive" | "western" | "budget";

const tabs: { key: TabKey; label: string; icon: string }[] = [
  { key: "featured", label: "Editor's Choice", icon: "✨" },
  { key: "festive", label: "Diwali & Festive Edit", icon: "🪔" },
  { key: "western", label: "Western & Co-Ords", icon: "👖" },
  { key: "budget", label: "Under ₹2,000", icon: "🏷️" },
];

export default function HomeTrendingTabs({ allProducts }: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>("featured");
  const { isSaved, toggle } = useWishlist();

  // Filter products based on active tab
  const getFilteredProducts = (): Product[] => {
    switch (activeTab) {
      case "festive":
        return allProducts
          .filter(
            (p) =>
              p.category === "ethnic-suit" ||
              p.images[0].includes("new-collection") ||
              p.images[0].includes("navratri") ||
              p.name.toLowerCase().includes("saree") ||
              p.name.toLowerCase().includes("lehenga")
          )
          .slice(0, 8);
      case "western":
        return allProducts
          .filter(
            (p) =>
              p.category === "cord-set" ||
              p.category === "bodycon-dress" ||
              p.images[0].includes("western")
          )
          .slice(0, 8);
      case "budget":
        return allProducts.filter((p) => p.price <= 2000).slice(0, 8);
      case "featured":
      default:
        return allProducts.filter((p) => p.featured || p.newArrival).slice(0, 8);
    }
  };

  const filtered = getFilteredProducts();

  const getWhatsAppProductUrl = (product: Product) => {
    const text = encodeURIComponent(
      `Hi KT's Fashion, I would like to order "${product.name}" (Price: ₹${product.price}). Please share the available sizes and delivery details!`
    );
    return `https://wa.me/${brandConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
      {/* Header & Tabs */}
      <div className="flex flex-col items-center text-center">
        <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/60">
          Curated Styles For You
        </span>
        <h2 className="font-serif-display mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
          Trending Collections
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xl">
          Explore the season&apos;s most sought-after silhouettes, from opulent festive drapes to contemporary casual staples.
        </p>

        {/* Tab Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-gray-100/90 border border-gray-200">
          {tabs.map((tab) => {
            const isCur = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isCur
                    ? "bg-purple-800 text-white shadow-md font-bold scale-[1.02]"
                    : "text-gray-600 hover:text-purple-800 hover:bg-white/60"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Grid */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filtered.map((product) => {
          const saved = isSaved(product.id);
          const isFestive = activeTab === "festive" || product.images[0].includes("new-collection");
          const discountedPrice = isFestive ? Math.round(product.price * 0.9) : null;

          return (
            <div
              key={product.id}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Product Image Frame */}
              <Link
                href={`/product/${product.slug}`}
                className="relative block aspect-[3/4] overflow-hidden bg-gray-100"
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Badge Pills */}
                <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
                  {discountedPrice && (
                    <span className="rounded-lg bg-amber-500 text-purple-950 font-black text-[9px] sm:text-[10px] tracking-wider uppercase px-2 py-0.5 shadow-sm">
                      10% OFF
                    </span>
                  )}
                  {product.newArrival && (
                    <span className="rounded-lg bg-purple-700 text-white font-bold text-[9px] sm:text-[10px] tracking-wider uppercase px-2 py-0.5 shadow-sm">
                      New
                    </span>
                  )}
                </div>

                {/* Wishlist Heart Button */}
                <button
                  type="button"
                  aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
                  onClick={(e) => {
                    e.preventDefault();
                    toggle(product.id);
                  }}
                  className="absolute top-2.5 right-2.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-purple-700 backdrop-blur-sm shadow-md transition-transform duration-200 hover:scale-110"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill={saved ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      d="M12 20.5s-7.4-4.6-10-8.7C.5 9 1 5.7 3.5 4.1c2.2-1.4 5-.9 6.6 1.1L12 7.3l1.9-2.1c1.6-2 4.4-2.5 6.6-1.1C23 5.7 23.5 9 21.9 11.8 19.4 15.9 12 20.5Z"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Link>

              {/* Card Details */}
              <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between">
                <div>
                  <Link
                    href={`/product/${product.slug}`}
                    className="block group-hover:text-purple-700 transition-colors"
                  >
                    <h3 className="line-clamp-2 text-xs sm:text-sm font-semibold text-gray-900 leading-snug">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="mt-2 flex items-baseline gap-2">
                    {discountedPrice ? (
                      <>
                        <span className="text-sm sm:text-base font-extrabold text-purple-800">
                          ₹{discountedPrice.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-gray-400 line-through">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                      </>
                    ) : (
                      <span className="text-sm sm:text-base font-extrabold text-purple-800">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-3.5 pt-3 border-t border-gray-100 flex items-center gap-2">
                  <a
                    href={getWhatsAppProductUrl(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-2 text-[11px] font-bold tracking-wide transition-colors shadow-sm"
                    title="Order this product on WhatsApp"
                  >
                    <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    <span>Order</span>
                  </a>

                  <Link
                    href={`/product/${product.slug}`}
                    className="inline-flex items-center justify-center rounded-xl bg-gray-100 hover:bg-purple-100 text-purple-900 py-2 px-3 text-[11px] font-semibold transition-colors"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Collection Link */}
      <div className="mt-12 text-center">
        <Link
          href="/shop"
          className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-purple-800 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-purple-800 transition-all duration-300 hover:bg-purple-800 hover:text-white hover:shadow-lg"
        >
          <span>Explore All 98 Products</span>
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}
