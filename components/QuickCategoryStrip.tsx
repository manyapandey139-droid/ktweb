import Image from "next/image";
import Link from "next/link";

interface QuickItem {
  title: string;
  badge?: string;
  href: string;
  image: string;
  isSpecial?: boolean;
}

const quickCategories: QuickItem[] = [
  {
    title: "Diwali 10% OFF",
    badge: "10% OFF",
    href: "/ethnic-suit",
    image: "/images/products/new-collection/royal-navy-brocade-peplum-saree-front.jpg",
    isSpecial: true,
  },
  {
    title: "Ethnic Suits",
    badge: "Festive",
    href: "/ethnic-suit",
    image: "/images/products/new-collection/rose-carmine-silk-kurti-salwar-front.jpg",
  },
  {
    title: "Co-Ord Sets",
    badge: "Trending",
    href: "/cord-set",
    image: "/images/products/western/layered-denim-pinafore-dress-front.jpg",
  },
  {
    title: "Drape Sarees",
    badge: "New",
    href: "/gown",
    image: "/images/products/new-collection/crimson-drape-saree-gown-front.jpg",
  },
  {
    title: "Kutchi Flares",
    badge: "Handwork",
    href: "/ethnic-suit",
    image: "/images/products/navratri/royal-purple-bandhani-twirl-lehenga-front.jpg",
  },
  {
    title: "Bodycon Dress",
    href: "/bodycon-dress",
    image: "/images/products/western/blush-pink-ribbed-crop-shirt-set-front.jpg",
  },
  {
    title: "Cocktail Gowns",
    href: "/cocktail-dress",
    image: "/images/products/new-collection/blush-lavender-organza-lehenga-front.jpg",
  },
  {
    title: "Gym & Active",
    href: "/gym-fitness-outfits",
    image: "/images/products/western/poppy-red-button-knit-top-front.jpg",
  },
  {
    title: "Mom & Daughter",
    badge: "Twinning",
    href: "/mom-daughter",
    image: "/images/products/new-collection/champagne-shimmer-tissue-twinning-set-front.jpg",
  },
];

export default function QuickCategoryStrip() {
  return (
    <div className="w-full bg-[#fdfbf9] border-y border-amber-100/80 py-5 sm:py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-purple-900">
              Explore By Category
            </span>
          </div>
          <Link
            href="/shop"
            className="text-[11px] sm:text-xs font-semibold text-purple-700 hover:text-purple-950 hover:underline"
          >
            View All Categories →
          </Link>
        </div>

        {/* Scrollable Story Bubbles Container */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-2 pt-1">
          {quickCategories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group flex flex-col items-center gap-2 shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <div
                className={`relative h-18 w-18 sm:h-22 sm:w-22 rounded-full p-1 transition-all duration-300 ${
                  cat.isSpecial
                    ? "bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 shadow-md ring-2 ring-amber-300 animate-pulse"
                    : "bg-gradient-to-tr from-purple-200 via-amber-200 to-purple-400 group-hover:from-purple-500 group-hover:to-amber-500"
                }`}
              >
                <div className="relative h-full w-full rounded-full overflow-hidden bg-white ring-2 ring-white">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="88px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  {cat.badge && (
                    <span
                      className={`absolute bottom-0 inset-x-0 py-0.5 text-center text-[8px] font-extrabold uppercase leading-none ${
                        cat.isSpecial
                          ? "bg-amber-400 text-purple-950 font-black"
                          : "bg-purple-900/90 text-white"
                      }`}
                    >
                      {cat.badge}
                    </span>
                  )}
                </div>
              </div>

              <span className="text-[11px] sm:text-xs font-medium text-gray-800 text-center max-w-[80px] sm:max-w-[90px] truncate group-hover:text-purple-800 group-hover:font-semibold">
                {cat.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
