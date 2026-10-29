import Image from "next/image";
import Link from "next/link";
import { CategoryInfo } from "@/types/product";

export default function CategoryCard({ category }: { category: CategoryInfo }) {
  return (
    <div className="group relative flex flex-col bg-white border border-purple-100">
      <div className="relative aspect-[4/5] overflow-hidden bg-lavender-100">
        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {category.comingSoon && (
          <div className="absolute inset-0 bg-purple-900/35 flex items-center justify-center">
            <span className="border border-white/80 text-white text-xs tracking-[0.3em] uppercase px-4 py-2">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6 flex flex-col items-start gap-2">
        <h3 className="font-serif-display text-xl sm:text-2xl text-purple-800">
          {category.title}
        </h3>
        <p className="text-sm text-ink/60">{category.shortDescription}</p>
        <Link
          href={`/${category.slug}`}
          className="mt-2 inline-flex items-center gap-2 text-xs tracking-widest uppercase text-purple-700 font-medium hover:gap-3 transition-all"
        >
          Explore Collection
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
