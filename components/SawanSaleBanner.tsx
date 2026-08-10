import Image from "next/image";
import Link from "next/link";
import { sawanSale, getSawanBannerFigures } from "@/data/sawanSale";
import { SawanRain, SawanLeaf } from "@/components/SawanDecor";

/**
 * Sawan Sale campaign banner.
 *
 * Built as a composed editorial layout rather than a flat poster image:
 * the models are real <Image> elements arranged in a staggered three-figure
 * composition, the copy is selectable HTML, the CTA is a real <Link>, and the
 * monsoon atmosphere (rain, botanicals, dusk gradient) is CSS/SVG.
 *
 * Layout:
 *  • lg and up — copy on the left, three figures staggered on the right with
 *    the centre model tallest, echoing a shop-window display.
 *  • below lg — copy stacks above a three-up row so faces and outfits stay
 *    fully visible instead of cropping a desktop composition.
 *
 * The arch-topped image frames deliberately reuse the rounded-t-full motif
 * already used elsewhere on the site, so the campaign reads as KT's Fashion.
 */
export default function SawanSaleBanner() {
  // Already ordered left → centre → right for the on-screen composition.
  const figures = getSawanBannerFigures();
  if (figures.length === 0) return null;

  return (
    <section
      aria-labelledby="sawan-banner-heading"
      className="relative w-full overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700"
    >
      {/* Monsoon dusk atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-purple-500/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 h-[34rem] w-[34rem] rounded-full bg-lavender-300/20 blur-3xl"
      />
      <SawanRain />
      <SawanLeaf className="left-[-3rem] top-[-2rem] h-56 w-56 text-lavender-200/25 sm:h-72 sm:w-72" />
      <SawanLeaf
        flip
        className="bottom-[-3rem] right-[-2rem] h-56 w-56 text-lavender-200/20 sm:h-72 sm:w-72"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-8 lg:py-20">
        {/* ---------------- Copy ---------------- */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-lavender-200 sm:text-xs">
            {sawanSale.eyebrow}
          </span>

          <h2
            id="sawan-banner-heading"
            className="font-serif-display mt-4 text-4xl leading-[1.02] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {sawanSale.title}
          </h2>

          <div
            aria-hidden="true"
            className="mt-5 flex items-center gap-3 text-lavender-200/70"
          >
            <span className="h-px w-10 bg-lavender-200/50 sm:w-16" />
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
              <path d="M12 2c3.6 4.6 6.5 8.4 6.5 11.7A6.5 6.5 0 0 1 12 20a6.5 6.5 0 0 1-6.5-6.3C5.5 10.4 8.4 6.6 12 2Z" />
            </svg>
            <span className="h-px w-10 bg-lavender-200/50 sm:w-16" />
          </div>

          <p className="font-serif-display mt-5 text-lg italic text-lavender-100 sm:text-xl lg:text-2xl">
            {sawanSale.tagline}
          </p>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-lavender-200/80 sm:text-base">
            {sawanSale.intro}
          </p>

          <Link
            href={sawanSale.href}
            className="mt-8 inline-flex items-center justify-center bg-white px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-purple-800 transition-colors hover:bg-lavender-100 sm:text-sm"
          >
            Shop Sawan Sale
          </Link>
        </div>

        {/* ---------------- Composition ---------------- */}
        <div className="grid grid-cols-3 items-end gap-2.5 sm:gap-4 lg:gap-5">
          {figures.map(({ product, isCentre }) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="group relative block"
            >
              <div
                className={`relative overflow-hidden rounded-t-full bg-purple-950/30 shadow-2xl shadow-purple-950/40 ring-1 ring-white/15 ${
                  isCentre
                    ? "aspect-[3/5] lg:-translate-y-4"
                    : "aspect-[3/4.4] lg:translate-y-3"
                }`}
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 18vw, 30vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* keeps the caption legible over busy outdoor photography */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-purple-950/80 to-transparent"
                />
                <span className="absolute inset-x-0 bottom-0 p-2 text-center text-[9px] font-medium uppercase leading-tight tracking-wider text-white/95 sm:p-3 sm:text-[11px]">
                  {product.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
