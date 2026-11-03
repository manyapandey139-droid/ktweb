import Image from "next/image";
import Link from "next/link";
import { diwaliSale, getDiwaliBannerProducts } from "@/data/diwaliSale";
import { brandConfig } from "@/lib/brandConfig";

export default function DiwaliSaleBanner() {
  const products = getDiwaliBannerProducts();
  if (!diwaliSale.isLive || products.length === 0) return null;

  const whatsappMsg = encodeURIComponent(
    `Hi KT's Fashion, I would like to claim the 10% Diwali Sale discount on your ethnic collection!`
  );
  const whatsappUrl = `https://wa.me/${brandConfig.whatsappNumber}?text=${whatsappMsg}`;

  return (
    <section
      aria-labelledby="diwali-banner-heading"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#2b0836] via-[#4a0d4a] to-[#78123e] text-white"
    >
      {/* Golden Festive Glow and Diya Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#f6b73c]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-[#ff7a00]/25 blur-3xl"
      />

      {/* Decorative Golden Top & Bottom Borders */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-200 to-amber-400"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Festive Copy & Offer */}
          <div className="flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left">
            {/* Festive Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-200 backdrop-blur-sm">
              <span className="text-amber-300">🪔</span>
              <span>{diwaliSale.eyebrow}</span>
            </div>

            <h2
              id="diwali-banner-heading"
              className="font-serif-display mt-5 text-4xl leading-tight text-white sm:text-5xl xl:text-6xl"
            >
              Diwali Grand
              <br />
              <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                Festive Sale
              </span>
            </h2>

            {/* 10% OFF Callout */}
            <div className="mt-5 flex items-center gap-3">
              <span className="rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 px-3.5 py-1.5 text-sm font-extrabold tracking-wider text-purple-950 shadow-lg shadow-amber-500/20 sm:text-base">
                {diwaliSale.discountText}
              </span>
              <span className="text-sm font-medium tracking-wide text-amber-100 sm:text-base">
                Use Code: <strong className="font-bold underline decoration-amber-300 underline-offset-4">{diwaliSale.couponCode}</strong>
              </span>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-purple-100/85 sm:text-base">
              {diwaliSale.description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                href={diwaliSale.href}
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-amber-400 to-yellow-500 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-purple-950 shadow-md transition-all duration-200 hover:brightness-110 sm:text-sm"
              >
                {diwaliSale.ctaText}
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-amber-300/60 bg-white/10 px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:text-sm"
              >
                Order On WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Curated Festive Ethnic Outfits Showcase */}
          <div className="lg:col-span-7">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-200">
                Trending Festive Ethnic Picks
              </span>
              <Link
                href="/ethnic-suit"
                className="text-xs font-medium text-amber-300 hover:underline"
              >
                View All Ethnic &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {products.map((p) => {
                const discountedPrice = Math.round(p.price * 0.9);
                return (
                  <Link
                    key={p.slug}
                    href={`/product/${p.slug}`}
                    className="group relative flex flex-col overflow-hidden rounded-xl bg-purple-950/50 p-2 ring-1 ring-white/15 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:ring-amber-400/50"
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-purple-900/40">
                      <Image
                        src={p.images[0]}
                        alt={p.name}
                        fill
                        sizes="(min-width: 1024px) 15vw, 40vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-2 top-2 rounded bg-amber-500 px-1.5 py-0.5 text-[10px] font-bold text-purple-950 shadow">
                        10% OFF
                      </span>
                    </div>

                    <div className="mt-2.5 flex flex-1 flex-col justify-between">
                      <h3 className="line-clamp-2 text-xs font-medium text-purple-100 group-hover:text-amber-200">
                        {p.name}
                      </h3>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-sm font-bold text-amber-300">
                          ₹{discountedPrice}
                        </span>
                        <span className="text-xs text-purple-300/70 line-through">
                          ₹{p.price}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
