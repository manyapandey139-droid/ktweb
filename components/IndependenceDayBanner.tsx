import Image from "next/image";
import Link from "next/link";
import {
  independenceDay,
  getIndependenceBannerFigures,
} from "@/data/independenceDay";
import {
  RibbonDrift,
  ChakraMotif,
  TricolourRule,
} from "@/components/IndependenceDecor";

/**
 * Independence Day campaign banner.
 *
 * A composed editorial layout rather than a flat poster image: the models are
 * real <Image> elements in a staggered three-figure composition, the copy is
 * selectable HTML, the CTA is a real <Link>, and the festive atmosphere
 * (tricolour ribbons, chakra motif, gradient) is CSS/SVG.
 *
 * The base stays KT's Fashion purple; saffron and green appear only as thin
 * accents so the campaign feels Indian and festive without becoming a flag.
 *
 * Layout: copy left / figures right from lg up; stacked below lg so faces and
 * outfits stay fully visible instead of cropping a desktop composition.
 */
export default function IndependenceDayBanner() {
  const figures = getIndependenceBannerFigures();
  if (figures.length === 0) return null;

  return (
    <section
      aria-labelledby="independence-banner-heading"
      className="relative w-full overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700"
    >
      {/* Festive atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-[#FF9933]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 h-[34rem] w-[34rem] rounded-full bg-[#138808]/15 blur-3xl"
      />
      <RibbonDrift />
      <ChakraMotif className="absolute -right-16 -top-16 h-64 w-64 text-white/[0.07] sm:h-80 sm:w-80" />
      <ChakraMotif className="absolute -bottom-20 -left-14 h-56 w-56 text-white/[0.05]" />

      {/* Tricolour edge, top and bottom */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#138808] via-white to-[#FF9933]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-8 lg:py-20">
        {/* ---------------- Copy ---------------- */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-lavender-200 sm:text-xs">
            {independenceDay.eyebrow}
          </span>

          <h2
            id="independence-banner-heading"
            className="font-serif-display mt-4 text-4xl leading-[1.05] text-white sm:text-5xl lg:text-[3.4rem] xl:text-6xl"
          >
            {independenceDay.title}
          </h2>

          <TricolourRule className="mt-5" />

          <p className="font-serif-display mt-5 text-lg italic text-lavender-100 sm:text-xl lg:text-2xl">
            {independenceDay.tagline}
          </p>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-lavender-200/80 sm:text-base">
            {independenceDay.intro}
          </p>

          <Link
            href={independenceDay.href}
            className="mt-8 inline-flex items-center justify-center bg-white px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-purple-800 transition-colors hover:bg-lavender-100 sm:text-sm"
          >
            Shop The Collection
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
                {/* keeps the caption legible over busy photography */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-purple-950/85 to-transparent"
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
