import Image from "next/image";

export default function EditorialBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-purple-900">
      <div className="absolute inset-0">
        <Image
          src="/images/products/western/kt-003-1.jpg"
          alt=""
          fill
          className="object-cover object-top opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-900/85 to-purple-900/60" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-20 sm:py-28 text-center">
        <p className="font-serif-display italic text-2xl sm:text-4xl leading-snug text-white">
          &ldquo;Because every woman deserves to feel beautiful in what she
          wears.&rdquo;
        </p>
        <p className="mt-6 text-purple-200/70 text-xs sm:text-sm tracking-[0.3em] uppercase">
          KT&apos;s Fashion — Kanpur, Uttar Pradesh
        </p>
      </div>
    </section>
  );
}
