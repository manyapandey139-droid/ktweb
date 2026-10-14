
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6">
      <Link
        href="/shop"
        className="block w-full overflow-hidden rounded-2xl"
        aria-label="Explore KT's Fashion collection"
      >
        <img
          src="/banners/fashion-sale.jpg"
          alt="KT's Fashion Sale"
          className="block h-auto w-full rounded-2xl"
        />
      </Link>
    </section>
  );
}
