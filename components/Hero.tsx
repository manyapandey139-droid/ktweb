import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-lavender-100 via-lavender-50 to-cream">
      {/* soft decorative accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 w-96 h-96 rounded-full bg-purple-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-6 items-center py-14 sm:py-20 md:py-24">
        <div className="flex flex-col items-start text-left order-2 md:order-1 animate-fade-up">
          <span className="text-xs sm:text-sm tracking-[0.35em] uppercase text-purple-500 font-medium mb-4">
            Welcome To KT&apos;s Fashion
          </span>
          <h1 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-purple-800">
            Feeling
            <br />
            Beautiful
          </h1>
          <div className="mt-6 flex items-center gap-3 text-purple-300">
            <span className="h-px w-10 bg-purple-200" />
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 21s-6.7-4.35-9.3-8.1C1.1 10.6 1 8.1 2.7 6.3 4.3 4.6 6.9 4.6 8.5 6.3L12 10l3.5-3.7c1.6-1.7 4.2-1.7 5.8 0 1.7 1.8 1.6 4.3 0 6.6C18.7 16.65 12 21 12 21Z" />
            </svg>
            <span className="h-px w-10 bg-purple-200" />
          </div>
          <p className="mt-6 text-base sm:text-lg text-ink/70 max-w-md">
            Timeless Styles Crafted For Every Woman
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-purple-700 text-white text-xs sm:text-sm tracking-widest uppercase hover:bg-purple-800 transition-colors"
            >
              Shop Collection
            </Link>
            <Link
              href="/shop?sort=newest"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-purple-700 text-purple-700 text-xs sm:text-sm tracking-widest uppercase hover:bg-purple-50 transition-colors"
            >
              Explore New Arrivals
            </Link>
          </div>
        </div>

        <div className="relative order-1 md:order-2">
          <div className="relative mx-auto max-w-sm md:max-w-md aspect-[4/5] rounded-t-full overflow-hidden shadow-xl shadow-purple-200/50">
            <Image
              src="/images/brand/hero-model-1.jpg"
              alt="KT's Fashion — elegant Indian and Indo Western styles"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
