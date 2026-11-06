import Image from "next/image";
import Link from "next/link";

interface OccasionCard {
  title: string;
  subtitle: string;
  eyebrow: string;
  badge?: string;
  image: string;
  href: string;
  ctaText: string;
}

const occasions: OccasionCard[] = [
  {
    eyebrow: "01 • ROYAL CELEBRATIONS",
    title: "Brocade & Velvet Festive Royale",
    subtitle: "Heavy zardozi embroidery, peplum blouses, and pre-draped dhoti sarees crafted for grand family occasions.",
    badge: "10% OFF LIVE",
    image: "/images/products/new-collection/royal-navy-brocade-peplum-saree-front.jpg",
    href: "/ethnic-suit",
    ctaText: "Shop Festive Royale",
  },
  {
    eyebrow: "02 • CASUAL CHIC",
    title: "Brunch & Weekend Co-Ords",
    subtitle: "Youthful layered denim pinafores, ribbed tops and breathable knit sets for effortless everyday elegance.",
    badge: "HOT DROP",
    image: "/images/products/western/layered-denim-pinafore-dress-front.jpg",
    href: "/cord-set",
    ctaText: "Explore Co-Ords",
  },
  {
    eyebrow: "03 • EVENING SOIRÉE",
    title: "Crimson Drapes & Velvet Shrugs",
    subtitle: "Modern pre-stitched party sarees styled with opulent sequined velvet jackets to make heads turn.",
    badge: "STATEMENT",
    image: "/images/products/new-collection/crimson-drape-saree-gown-front.jpg",
    href: "/gown",
    ctaText: "Discover Drape Sarees",
  },
  {
    eyebrow: "04 • FESTIVE TWINNING",
    title: "Metallic Tissue & Twinning Sets",
    subtitle: "Coordinated mother-daughter and festive sister duos in luminous champagne and olive gold fabrics.",
    badge: "TWINNING",
    image: "/images/products/new-collection/champagne-shimmer-tissue-twinning-set-front.jpg",
    href: "/mom-daughter",
    ctaText: "Shop Twinning Edit",
  },
];

export default function OccasionMosaic() {
  return (
    <section className="w-full bg-[#faf7f2] py-16 sm:py-24 border-y border-amber-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-600 bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
            Style Curation
          </span>
          <h2 className="font-serif-display mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Shop By Occasion
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xl">
            Whether it&apos;s a dazzling Diwali pooja, a lively cocktail evening, or a relaxed weekend cafe run, we have the perfect ensemble.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasions.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-white shadow-md ring-1 ring-gray-900/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4.2] w-full overflow-hidden bg-gray-200">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity group-hover:opacity-90" />

                {/* Badge */}
                {card.badge && (
                  <span className="absolute top-3.5 left-3.5 rounded-full bg-amber-400 text-purple-950 font-black text-[10px] tracking-wider uppercase px-2.5 py-1 shadow-md">
                    {card.badge}
                  </span>
                )}

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white flex flex-col justify-end">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-300">
                    {card.eyebrow}
                  </span>
                  <h3 className="font-serif-display mt-1 text-xl sm:text-2xl font-bold leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-200 leading-relaxed line-clamp-2">
                    {card.subtitle}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 group-hover:gap-2.5 transition-all">
                    <span>{card.ctaText}</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
