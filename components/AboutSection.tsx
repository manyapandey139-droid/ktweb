import Image from "next/image";
import Link from "next/link";
import { brandConfig } from "@/lib/brandConfig";

export default function AboutSection() {
  return (
    <section className="bg-lavender-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative aspect-[4/5] max-w-md w-full mx-auto md:mx-0 overflow-hidden">
          <Image
            src="/images/products/indian/kt-002-1.jpg"
            alt={`${brandConfig.brandName} — ethnic wear styled for everyday elegance`}
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="text-xs sm:text-sm tracking-[0.3em] text-purple-500 font-medium uppercase mb-3 block">
            About {brandConfig.brandName}
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-purple-800 mb-5">
            A Women-Led Brand, Built On Feeling Beautiful
          </h2>
          <p className="text-ink/70 text-sm sm:text-base mb-4 leading-relaxed">
            For nearly two years, {brandConfig.brandName} has been curating
            Indian, Indo Western and Western styles from{" "}
            {brandConfig.location.display} — designed to help every woman feel
            confident, elegant and comfortable in what she wears.
          </p>
          <p className="text-ink/70 text-sm sm:text-base mb-8 leading-relaxed">
            We deliver across India, with easy ordering over WhatsApp — no
            accounts, no complicated checkout, just a simple conversation
            with our team.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-purple-700 text-white text-xs sm:text-sm tracking-widest uppercase hover:bg-purple-800 transition-colors"
          >
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
}
