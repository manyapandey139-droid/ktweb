import Image from "next/image";
import { brandConfig } from "@/lib/brandConfig";

// Uses real product photography as a stand-in grid until a live Instagram
// feed integration is added. Safe to swap these for real post screenshots.
const previewImages = [
  "/images/products/indo-western/kt-001-1.jpg",
  "/images/products/indian/kt-002-1.jpg",
  "/images/products/western/kt-003-1.jpg",
  "/images/products/mom-kid/mom-kid-teaser.jpg",
];

export default function InstagramSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 text-center">
      <span className="text-xs sm:text-sm tracking-[0.3em] text-purple-500 font-medium uppercase mb-3 block">
        Follow {brandConfig.brandName}
      </span>
      <h2 className="font-serif-display text-3xl sm:text-4xl text-purple-800 mb-4">
        Discover Our Latest Styles, Looks &amp; Updates
      </h2>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {previewImages.map((src) => (
          <a
            key={src}
            href={brandConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square overflow-hidden block group"
          >
            <Image
              src={src}
              alt={`${brandConfig.brandName} on Instagram`}
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/25 transition-colors" />
          </a>
        ))}
      </div>

      <a
        href={brandConfig.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 border border-purple-700 text-purple-700 text-xs sm:text-sm tracking-widest uppercase hover:bg-purple-50 transition-colors"
      >
        Follow Us On Instagram
      </a>
    </section>
  );
}
