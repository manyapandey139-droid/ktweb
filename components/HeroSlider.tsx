"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { brandConfig } from "@/lib/brandConfig";

interface HeroSlide {
  id: string;
  tabLabel: string;
  badge: string;
  badgeIcon?: string;
  title: string;
  titleHighlight?: string;
  tagline: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  isWhatsAppSecondary?: boolean;
  theme: "diwali" | "luxury" | "western" | "drapes";
  mainImage: string;
  mainImageAlt: string;
  previewProducts?: {
    name: string;
    image: string;
    originalPrice: number;
    salePrice: number;
    slug: string;
    badge?: string;
  }[];
}

const slides: HeroSlide[] = [
  {
    id: "diwali-sale",
    tabLabel: "🪔 Diwali Sale 10% OFF",
    badge: "Special Diwali Festive Offer",
    badgeIcon: "🪔",
    title: "Diwali Grand",
    titleHighlight: "Festive Sale",
    tagline: "FLAT 10% OFF ON ALL ETHNIC WEAR",
    description:
      "Illuminate your celebrations in royal handcrafted brocade sarees, velvet peplum sets & silk twirls. Use code DIWALI10 at checkout or directly on WhatsApp.",
    primaryCtaText: "Shop Diwali Collection",
    primaryCtaHref: "/ethnic-suit",
    secondaryCtaText: "Claim 10% OFF On WhatsApp",
    isWhatsAppSecondary: true,
    theme: "diwali",
    mainImage: "/images/products/new-collection/royal-navy-brocade-peplum-saree-front.jpg",
    mainImageAlt: "Royal Navy Brocade Peplum Blouse & Dhoti Saree",
    previewProducts: [
      {
        name: "Royal Navy Brocade Dhoti Saree",
        image: "/images/products/new-collection/royal-navy-brocade-peplum-saree-front.jpg",
        originalPrice: 2500,
        salePrice: 2250,
        slug: "royal-navy-brocade-peplum-saree",
        badge: "FLAT 10% OFF",
      },
      {
        name: "Maroon Velvet Peplum Palazzo",
        image: "/images/products/new-collection/maroon-velvet-peplum-palazzo-front.jpg",
        originalPrice: 2200,
        salePrice: 1980,
        slug: "maroon-velvet-peplum-palazzo",
        badge: "BESTSELLER",
      },
      {
        name: "Crimson Drape Saree Gown",
        image: "/images/products/new-collection/crimson-drape-saree-gown-front.jpg",
        originalPrice: 2299,
        salePrice: 2069,
        slug: "crimson-drape-saree-gown",
        badge: "10% OFF",
      },
    ],
  },
  {
    id: "feeling-beautiful",
    tabLabel: "👑 Festive Signature Edit",
    badge: "KT's Fashion Signature Edit",
    badgeIcon: "✨",
    title: "Feeling",
    titleHighlight: "Beautiful",
    tagline: "TIMELESS STYLES CRAFTED FOR EVERY WOMAN",
    description:
      "Handcrafted tissue silks, metallic twirl lehengas & bespoke cape dhoti ensembles designed to make you feel empowered and stunning at every celebration.",
    primaryCtaText: "Explore Collection",
    primaryCtaHref: "/shop",
    secondaryCtaText: "Shop New Arrivals",
    secondaryCtaHref: "/shop?sort=newest",
    theme: "luxury",
    mainImage: "/images/products/new-collection/champagne-shimmer-tissue-twinning-set-front.jpg",
    mainImageAlt: "Champagne Shimmer Tissue Twinning Kurta & Lehenga Set",
    previewProducts: [
      {
        name: "Lemon Sunshine Cape Set",
        image: "/images/products/new-collection/lemon-sunshine-embroidered-cape-set-front.jpg",
        originalPrice: 2999,
        salePrice: 2699,
        slug: "lemon-sunshine-embroidered-cape-set",
        badge: "INDIE CHIC",
      },
      {
        name: "Champagne Shimmer Tissue Set",
        image: "/images/products/new-collection/champagne-shimmer-tissue-twinning-set-front.jpg",
        originalPrice: 2500,
        salePrice: 2250,
        slug: "champagne-shimmer-tissue-twinning-set",
        badge: "TWINNING EDIT",
      },
      {
        name: "Ivory Silk Kurti & Salwar",
        image: "/images/products/new-collection/ivory-silk-kurti-salwar-front.jpg",
        originalPrice: 1999,
        salePrice: 1799,
        slug: "ivory-silk-kurti-salwar",
        badge: "HANDLOOM",
      },
    ],
  },
  {
    id: "western-trends",
    tabLabel: "👖 Western & Co-Ords",
    badge: "Urban Casuals 2026",
    badgeIcon: "⚡",
    title: "Contemporary",
    titleHighlight: "Co-Ord Trends",
    tagline: "EFFORTLESS MODERN SILHOUETTES",
    description:
      "Youthful layered denim pinafores, ribbed knit crop sets & crisp shirt ensembles crafted for weekend brunching, city walks and modern everyday style.",
    primaryCtaText: "Shop Western Wear",
    primaryCtaHref: "/cord-set",
    secondaryCtaText: "Explore All Co-Ords",
    secondaryCtaHref: "/cord-set",
    theme: "western",
    mainImage: "/images/products/western/layered-denim-pinafore-dress-front.jpg",
    mainImageAlt: "Layered Denim Pinafore Dress",
    previewProducts: [
      {
        name: "Layered Denim Pinafore Dress",
        image: "/images/products/western/layered-denim-pinafore-dress-front.jpg",
        originalPrice: 1799,
        salePrice: 1619,
        slug: "layered-denim-pinafore-dress",
        badge: "HOT TREND",
      },
      {
        name: "Blush Pink Ribbed Crop & Shirt",
        image: "/images/products/western/blush-pink-ribbed-crop-shirt-set-front.jpg",
        originalPrice: 1599,
        salePrice: 1439,
        slug: "blush-pink-ribbed-crop-shirt-set",
        badge: "NEW DROP",
      },
      {
        name: "Ivory Textured Blouse Set",
        image: "/images/products/western/ivory-textured-blouse-trouser-set-front.jpg",
        originalPrice: 1499,
        salePrice: 1349,
        slug: "ivory-textured-blouse-trouser-set",
        badge: "MINIMALIST",
      },
    ],
  },
  {
    id: "kutchi-festive",
    tabLabel: "💃 Kutchi & Twirl Flares",
    badge: "Authentic Artisan Craft",
    badgeIcon: "✨",
    title: "Heritage",
    titleHighlight: "Festive Flares",
    tagline: "INTRICATE MIRROR-WORK & BANDHANI TWIRLS",
    description:
      "Immerse in vibrant festive joy with authentic Kutchi embroidered lehengas, mirror-embellished vests and swirling bandhani drapes tailored to turn heads.",
    primaryCtaText: "Shop Festive Flares",
    primaryCtaHref: "/ethnic-suit",
    secondaryCtaText: "Order On WhatsApp",
    isWhatsAppSecondary: true,
    theme: "drapes",
    mainImage: "/images/products/navratri/royal-purple-bandhani-twirl-lehenga-front.jpg",
    mainImageAlt: "Royal Purple Bandhani Twirl Lehenga Set",
    previewProducts: [
      {
        name: "Royal Purple Bandhani Twirl",
        image: "/images/products/navratri/royal-purple-bandhani-twirl-lehenga-front.jpg",
        originalPrice: 2999,
        salePrice: 2699,
        slug: "royal-purple-bandhani-twirl-lehenga",
        badge: "FESTIVE HIT",
      },
      {
        name: "Sunshine Yellow Navratri Choli",
        image: "/images/products/navratri/sunshine-yellow-navratri-chaniya-choli-front.jpg",
        originalPrice: 2999,
        salePrice: 2699,
        slug: "sunshine-yellow-navratri-chaniya-choli",
        badge: "BESTSELLER",
      },
      {
        name: "Sky Blue Kutch Embroidered Choli",
        image: "/images/products/navratri/sky-blue-bandhani-kutch-chaniya-choli-front.jpg",
        originalPrice: 2500,
        salePrice: 2250,
        slug: "sky-blue-bandhani-kutch-chaniya-choli",
        badge: "KUTCH HANDWORK",
      },
    ],
  },
];

const AUTOPLAY_INTERVAL = 6000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (idx: number) => {
    setCurrent(idx);
  };

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide, current]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    setTouchStart(null);
  };

  const activeSlide = slides[current];

  // WhatsApp click handler helper
  const getWhatsAppLink = (slide: HeroSlide) => {
    const text = encodeURIComponent(
      `Hi KT's Fashion, I saw the ${slide.title} ${slide.titleHighlight || ""} on your website! I would like to avail the special 10% discount and explore available sizes.`
    );
    return `https://wa.me/${brandConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="KT's Fashion Featured Collections Carousel"
    >
      {/* ---------------- SLIDE CONTAINER ---------------- */}
      <div className="relative min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] xl:min-h-[700px] w-full transition-all duration-700 ease-in-out">
        {slides.map((slide, idx) => {
          const isActive = idx === current;
          const isDiwali = slide.theme === "diwali";
          const isLuxury = slide.theme === "luxury";
          const isWestern = slide.theme === "western";
          const isDrapes = slide.theme === "drapes";

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
                isActive
                  ? "opacity-100 z-10 pointer-events-auto"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={!isActive}
            >
              {/* Slide Background Styles */}
              <div
                className={`absolute inset-0 ${
                  isDiwali
                    ? "bg-gradient-to-br from-[#2a0845] via-[#4b1248] to-[#1e0524]"
                    : isLuxury
                    ? "bg-gradient-to-br from-[#f8f4ed] via-[#f1e8dc] to-[#e4d7cb]"
                    : isWestern
                    ? "bg-gradient-to-br from-[#f4f7fb] via-[#e8eff5] to-[#dbe4ee]"
                    : "bg-gradient-to-br from-[#2b1016] via-[#4d1620] to-[#1c080d]"
                }`}
              >
                {/* Decorative Pattern / Lighting Blobs */}
                {isDiwali && (
                  <>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />
                  </>
                )}
                {isLuxury && (
                  <>
                    <div className="absolute top-0 right-10 w-[450px] h-[450px] rounded-full bg-purple-300/25 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-amber-200/35 blur-3xl pointer-events-none" />
                  </>
                )}
                {isWestern && (
                  <>
                    <div className="absolute top-10 right-1/4 w-[450px] h-[450px] rounded-full bg-blue-300/20 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 right-10 w-[400px] h-[400px] rounded-full bg-indigo-200/25 blur-3xl pointer-events-none" />
                  </>
                )}
                {isDrapes && (
                  <>
                    <div className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full bg-rose-500/15 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
                  </>
                )}
              </div>

              {/* Slide Content Grid */}
              <div className="relative mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                {/* Left Text Column */}
                <div className="flex-1 max-w-2xl text-center lg:text-left z-20">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase shadow-sm transition-transform duration-500">
                    {isDiwali ? (
                      <span className="bg-gradient-to-r from-amber-400 to-yellow-400 text-purple-950 px-3 py-1 rounded-full text-[11px] font-bold shadow-md flex items-center gap-1.5">
                        <span>{slide.badgeIcon || "🪔"}</span>
                        <span>{slide.badge}</span>
                      </span>
                    ) : (
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 ${
                          isLuxury
                            ? "bg-purple-100 text-purple-900 border border-purple-200"
                            : isWestern
                            ? "bg-blue-100 text-blue-900 border border-blue-200"
                            : "bg-rose-900/60 text-amber-300 border border-amber-400/40"
                        }`}
                      >
                        <span>{slide.badgeIcon || "✨"}</span>
                        <span>{slide.badge}</span>
                      </span>
                    )}

                    {isDiwali && (
                      <span className="text-amber-300 text-[11px] font-bold tracking-widest hidden sm:inline">
                        USE CODE: <u>DIWALI10</u>
                      </span>
                    )}
                  </div>

                  {/* Main Title */}
                  <h1
                    className={`font-serif-display mt-4 text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight ${
                      isDiwali || isDrapes ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {slide.title}{" "}
                    <span
                      className={
                        isDiwali
                          ? "bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent italic"
                          : isLuxury
                          ? "text-purple-800 italic"
                          : isWestern
                          ? "text-blue-700 italic"
                          : "text-amber-400 italic"
                      }
                    >
                      {slide.titleHighlight}
                    </span>
                  </h1>

                  {/* Tagline */}
                  <p
                    className={`mt-2 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase ${
                      isDiwali
                        ? "text-amber-300"
                        : isLuxury
                        ? "text-purple-600"
                        : isWestern
                        ? "text-blue-600"
                        : "text-amber-400"
                    }`}
                  >
                    {slide.tagline}
                  </p>

                  {/* Description */}
                  <p
                    className={`mt-4 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 ${
                      isDiwali || isDrapes ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    {slide.description}
                  </p>

                  {/* Action CTAs */}
                  <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                    <Link
                      href={slide.primaryCtaHref}
                      className={`inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 ${
                        isDiwali
                          ? "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-purple-950 hover:brightness-105"
                          : isLuxury
                          ? "bg-purple-800 text-white hover:bg-purple-900"
                          : isWestern
                          ? "bg-blue-800 text-white hover:bg-blue-900"
                          : "bg-gradient-to-r from-amber-400 to-amber-500 text-rose-950 hover:brightness-105"
                      }`}
                    >
                      <span>{slide.primaryCtaText}</span>
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>

                    {slide.isWhatsAppSecondary ? (
                      <a
                        href={getWhatsAppLink(slide)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3.5 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                      >
                        <svg
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                        </svg>
                        <span>{slide.secondaryCtaText}</span>
                      </a>
                    ) : slide.secondaryCtaText && slide.secondaryCtaHref ? (
                      <Link
                        href={slide.secondaryCtaHref}
                        className={`inline-flex items-center justify-center rounded-xl border px-5 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                          isDiwali || isDrapes
                            ? "border-white/30 text-white hover:bg-white/10"
                            : "border-gray-800 text-gray-800 hover:bg-gray-100"
                        }`}
                      >
                        {slide.secondaryCtaText}
                      </Link>
                    ) : null}
                  </div>

                  {/* Highlights / Features Row */}
                  <div
                    className={`mt-8 pt-6 border-t flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs ${
                      isDiwali || isDrapes
                        ? "border-white/15 text-purple-200/80"
                        : "border-gray-300 text-gray-600"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-medium">
                      <span className="text-amber-400">✓</span> Free Pan-India Delivery
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <span className="text-amber-400">✓</span> Custom Sizing Available
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <span className="text-amber-400">✓</span> Cash On Delivery (COD)
                    </div>
                  </div>
                </div>

                {/* Right Visual Showcase Column */}
                <div className="flex-1 w-full max-w-xl lg:max-w-none flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 z-20">
                  {/* Hero Main Big Visual Card */}
                  <div className="relative w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[340px] aspect-[3/4.2] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/20 transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src={slide.mainImage}
                      alt={slide.mainImageAlt}
                      fill
                      priority={idx === 0}
                      sizes="(min-width: 1024px) 340px, 280px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                    {/* Overlay Tag */}
                    <div className="absolute bottom-4 inset-x-4 text-white">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-400 text-purple-950 mb-1">
                        {isDiwali ? "10% OFF APPLIED" : "FEATURED"}
                      </span>
                      <h3 className="font-serif-display text-base font-semibold leading-tight line-clamp-1">
                        {slide.mainImageAlt}
                      </h3>
                    </div>
                  </div>

                  {/* Floating Product Previews (Desktop / Tablet) */}
                  {slide.previewProducts && (
                    <div className="hidden sm:flex flex-col gap-3 w-[200px] shrink-0">
                      {slide.previewProducts.slice(0, 2).map((item) => (
                        <Link
                          key={item.slug}
                          href={`/product/${item.slug}`}
                          className={`group flex items-center gap-3 p-2.5 rounded-xl backdrop-blur-md border transition-all duration-300 hover:scale-105 ${
                            isDiwali || isDrapes
                              ? "bg-purple-950/60 border-purple-400/30 text-white hover:bg-purple-900/80"
                              : "bg-white/80 border-purple-200/60 text-gray-900 hover:bg-white shadow-md"
                          }`}
                        >
                          <div className="relative w-14 h-18 rounded-lg overflow-hidden shrink-0 bg-gray-200">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="56px"
                              className="object-cover object-top group-hover:scale-105 transition-transform"
                            />
                            {item.badge && (
                              <span className="absolute top-1 left-1 bg-amber-500 text-purple-950 font-extrabold text-[8px] px-1 py-0.5 rounded leading-none">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className="flex flex-col min-w-0">
                            <h4 className="text-[11px] font-medium leading-snug line-clamp-2 group-hover:text-amber-400 transition-colors">
                              {item.name}
                            </h4>
                            <div className="mt-1 flex items-baseline gap-1.5">
                              <span className="text-xs font-bold text-amber-400">
                                ₹{item.salePrice}
                              </span>
                              <span className="text-[10px] line-through opacity-60">
                                ₹{item.originalPrice}
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}

                      {/* Instant WhatsApp Order Pill */}
                      <a
                        href={`https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
                          `Hi KT's Fashion, I'm interested in ordering from the ${slide.title} collection with 10% discount!`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 p-2 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs font-semibold tracking-wide shadow-md transition-all hover:scale-105"
                      >
                        <span>Direct Order on WhatsApp</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ---------------- NAVIGATION CONTROLS ---------------- */}
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-110 active:scale-95"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-110 active:scale-95"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* ---------------- BOTTOM TABS & INDICATORS ---------------- */}
      <div className="absolute bottom-3 inset-x-0 z-30 flex flex-col items-center gap-2 px-4">
        {/* Slide Title Pills for Quick Switching */}
        <div className="hidden sm:flex items-center gap-2 p-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15">
          {slides.map((s, idx) => {
            const isCur = idx === current;
            return (
              <button
                key={s.id}
                onClick={() => goToSlide(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  isCur
                    ? "bg-amber-400 text-purple-950 shadow-md font-bold scale-105"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {s.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Mobile Indicator Dots with Animated Progress Bar */}
        <div className="flex items-center gap-2 sm:hidden">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === current ? "w-6 bg-amber-400" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
