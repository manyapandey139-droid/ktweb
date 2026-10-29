import Image from "next/image";
import Link from "next/link";

/**
 * Homepage hero — a real, interactive recreation of the approved KT's Fashion
 * poster. It is NOT a flattened poster image:
 *
 *   • the models are transparent PNG cutouts positioned with CSS
 *   • the background and floral accents are CSS
 *   • all copy is selectable HTML text
 *   • both CTAs are real <Link>s using the site's existing routes
 *
 * Layout switches at `lg` (1024px). Below that — phones and tablets — the copy
 * stacks above a bottom row of models, because the poster's side-by-side
 * composition cannot fit the copy between the models without collision. From
 * `lg` up, the models are positioned absolutely left and right of the copy,
 * mirroring the poster.
 */
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-lavender-100 via-lavender-50 to-cream">
      {/* Soft floral / bokeh accents, echoing the poster's corners */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-28 h-[26rem] w-[26rem] rounded-full bg-purple-200/45 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-16 h-72 w-72 rounded-full bg-purple-300/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-20 h-[30rem] w-[30rem] rounded-full bg-purple-300/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 right-1/4 h-80 w-80 rounded-full bg-lavender-300/30 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-[1800px] flex-col xl:block xl:min-h-[clamp(34rem,40vw,46rem)]">
        {/* ---------------- Centre content (real HTML) ---------------- */}
        {/* On desktop the copy sits left of page centre, as in the poster,
            because the right-hand group is far wider than the lone left model.
            The right padding creates that bias and keeps text clear of both. */}
        <div className="relative z-20 order-1 flex flex-col items-center px-5 pt-10 pb-6 text-center sm:pt-14 xl:absolute xl:inset-0 xl:justify-center xl:py-0 xl:pl-6 xl:pr-[21%] 2xl:pr-[17%]">
          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-purple-500 sm:text-xs lg:text-sm">
            Welcome To KT&apos;s Fashion
          </span>

          <h1 className="font-serif-display mt-4 text-4xl leading-[1.02] text-purple-800 sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Feeling
            <br />
            Beautiful
          </h1>

          {/* decorative heart divider */}
          <div
            aria-hidden="true"
            className="mt-5 flex items-center gap-3 text-purple-400 sm:mt-7"
          >
            <span className="h-px w-12 bg-purple-300 sm:w-20" />
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M12 21s-6.7-4.35-9.3-8.1C1.1 10.6 1 8.1 2.7 6.3 4.3 4.6 6.9 4.6 8.5 6.3L12 10l3.5-3.7c1.6-1.7 4.2-1.7 5.8 0 1.7 1.8 1.6 4.3 0 6.6C18.7 16.65 12 21 12 21Z" />
            </svg>
            <span className="h-px w-12 bg-purple-300 sm:w-20" />
          </div>

          <p className="font-serif-display mt-5 text-base text-ink/75 sm:mt-6 sm:text-lg xl:text-xl">
            Timeless Styles Crafted For Every Woman
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center bg-purple-700 px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-purple-800 sm:text-sm"
            >
              Shop Collection
            </Link>
            <Link
              href="/shop?sort=newest"
              className="inline-flex items-center justify-center border border-purple-700 px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-purple-700 transition-colors hover:bg-purple-50 sm:text-sm"
            >
              Explore New Arrivals
            </Link>
          </div>
        </div>

        {/* ---------------- Models ---------------- */}
        <div className="relative order-2 h-56 w-full sm:h-72 md:h-80 xl:absolute xl:inset-0 xl:h-auto xl:w-auto">
          {/* Left — maroon dhoti gown */}
          <div className="absolute bottom-0 left-0 h-full xl:left-[5%] xl:h-[84%] 2xl:left-[6%] 2xl:h-[88%]">
            <Image
              src="/images/hero/model-maroon.png"
              alt="Model wearing a maroon sequin dhoti gown from KT's Fashion"
              width={217}
              height={633}
              priority
              sizes="(min-width: 1280px) 18vw, 30vw"
              className="h-full w-auto object-contain object-bottom"
            />
          </div>

          {/* Right — white kurta, red/orange sharara and floral bodycon */}
          <div className="absolute bottom-0 right-0 h-[96%] xl:h-[86%] 2xl:h-[90%]">
            <Image
              src="/images/hero/model-group-right.png"
              alt="Models wearing an ivory kurta set, a red and orange sharara set, and a floral bodycon dress from KT's Fashion"
              width={687}
              height={660}
              priority
              sizes="(min-width: 1280px) 42vw, 62vw"
              className="h-full w-auto object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
