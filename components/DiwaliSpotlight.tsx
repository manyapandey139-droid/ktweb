"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { brandConfig } from "@/lib/brandConfig";

interface SpotlightProduct {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  slug: string;
  categoryName: string;
}

const spotlightProducts: SpotlightProduct[] = [
  {
    id: "royal-navy-brocade-peplum-saree",
    name: "Royal Navy Brocade Peplum Blouse & Dhoti Saree",
    image: "/images/products/new-collection/royal-navy-brocade-peplum-saree-front.jpg",
    originalPrice: 2500,
    salePrice: 2250,
    slug: "royal-navy-brocade-peplum-saree",
    categoryName: "Dhoti Saree",
  },
  {
    id: "maroon-velvet-peplum-palazzo",
    name: "Maroon Velvet Floral Embroidered Peplum & Palazzo Set",
    image: "/images/products/new-collection/maroon-velvet-peplum-palazzo-front.jpg",
    originalPrice: 2200,
    salePrice: 1980,
    slug: "maroon-velvet-peplum-palazzo",
    categoryName: "Velvet Peplum",
  },
  {
    id: "ivory-silk-kurti-salwar",
    name: "Ivory Silk Short Kurti & Salwar Set",
    image: "/images/products/new-collection/ivory-silk-kurti-salwar-front.jpg",
    originalPrice: 1999,
    salePrice: 1799,
    slug: "ivory-silk-kurti-salwar",
    categoryName: "Silk Kurti",
  },
  {
    id: "rose-carmine-silk-kurti-salwar",
    name: "Rose Carmine Silk Short Kurti & Salwar Set",
    image: "/images/products/new-collection/rose-carmine-silk-kurti-salwar-front.jpg",
    originalPrice: 1800,
    salePrice: 1620,
    slug: "rose-carmine-silk-kurti-salwar",
    categoryName: "Silk Kurti",
  },
];

export default function DiwaliSpotlight() {
  const [copied, setCopied] = useState(false);

  const copyCoupon = () => {
    navigator.clipboard.writeText("DIWALI10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappSaleUrl = `https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi KT's Fashion, I would like to avail the Flat 10% OFF Diwali Festive offer on your ethnic collection!"
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2a0845] via-[#480c3e] to-[#1a0426] py-16 sm:py-24 text-white">
      {/* Background Decorative Diya Sparks */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-600/25 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-purple-950 shadow-lg">
            <span>🪔</span>
            <span>LIMITED PERIOD DIWALI DHAMAKA</span>
            <span>✨</span>
          </div>

          <h2 className="font-serif-display mt-4 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Diwali Grand{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent italic">
              Festive Edit
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-purple-100/90 max-w-2xl leading-relaxed">
            Elevate your Diwali celebrations with our royal velvet peplums, handcrafted brocade dhoti sarees & pure silk kurtis. Enjoy <strong className="text-amber-300 font-bold">FLAT 10% OFF</strong> across our ethnic collection!
          </p>

          {/* Coupon Code Pill */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-purple-900/80 border border-amber-400/50 px-4 py-2 text-xs sm:text-sm font-mono shadow-inner">
              <span className="text-purple-200 uppercase font-sans text-xs">Coupon:</span>
              <span className="font-black text-amber-300 tracking-wider">DIWALI10</span>
              <button
                onClick={copyCoupon}
                className="ml-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-purple-950 px-2.5 py-1 text-xs font-bold transition-all"
              >
                {copied ? "Copied! ✓" : "Copy"}
              </button>
            </div>

            <a
              href={whatsappSaleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md hover:scale-105"
            >
              <span>Order On WhatsApp</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
            </a>
          </div>
        </div>

        {/* 4 Spotlight Products Showcase Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {spotlightProducts.map((p) => {
            const waUrl = `https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
              `Hi KT's Fashion, I want to buy "${p.name}" at the Diwali 10% OFF price of ₹${p.salePrice} (Code: DIWALI10). Please confirm size!`
            )}`;

            return (
              <div
                key={p.id}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-purple-950/60 border border-purple-400/30 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-amber-400 shadow-xl"
              >
                <Link
                  href={`/product/${p.slug}`}
                  className="relative block aspect-[3/4] overflow-hidden bg-purple-900/50"
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* 10% OFF Badge */}
                  <span className="absolute top-2.5 left-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-400 text-purple-950 font-black text-[9px] sm:text-[10px] uppercase tracking-wider px-2 py-0.5 shadow-md">
                    10% OFF
                  </span>
                </Link>

                <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-amber-300">
                      {p.categoryName}
                    </span>
                    <Link
                      href={`/product/${p.slug}`}
                      className="block mt-1 group-hover:text-amber-300 transition-colors"
                    >
                      <h3 className="line-clamp-2 text-xs sm:text-sm font-semibold text-white leading-snug">
                        {p.name}
                      </h3>
                    </Link>

                    <div className="mt-2.5 flex items-baseline gap-2">
                      <span className="text-base sm:text-lg font-black text-amber-300">
                        ₹{p.salePrice.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-purple-300/70 line-through">
                        ₹{p.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3.5 pt-3 border-t border-purple-800/60 flex items-center gap-2">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white py-2 text-[11px] font-bold tracking-wide transition-all shadow-sm"
                    >
                      <span>Buy at 10% OFF</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Diwali Outfits */}
        <div className="mt-12 text-center">
          <Link
            href="/ethnic-suit"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-purple-950 px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-widest shadow-xl hover:brightness-105 transition-all"
          >
            <span>Explore All Diwali Ethnic Outfits</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
