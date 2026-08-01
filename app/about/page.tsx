import type { Metadata } from "next";
import Image from "next/image";
import { brandConfig } from "@/lib/brandConfig";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about KT's Fashion, a women-led fashion brand from Kanpur, Uttar Pradesh, bringing together Indian, Indo Western and Western styles.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-lavender-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20 text-center">
          <span className="text-xs sm:text-sm tracking-[0.3em] text-purple-500 font-medium uppercase mb-3 block">
            Our Story
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl text-purple-800">
            About {brandConfig.brandName}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative aspect-[4/5] max-w-md w-full mx-auto md:mx-0 overflow-hidden order-2 md:order-1">
          <Image
            src="/images/products/indo-western/kt-001-1.jpg"
            alt={`${brandConfig.brandName} — women's fashion styled with elegance`}
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="text-ink/75 text-base sm:text-lg leading-relaxed mb-5">
            At {brandConfig.brandName}, we believe that every woman deserves
            to feel beautiful in what she wears.
          </p>
          <p className="text-ink/70 text-sm sm:text-base leading-relaxed mb-5">
            Based in {brandConfig.location.display}, we have spent the last
            couple of years bringing together Indian, Indo Western and
            Western styles — carefully choosing pieces that help women feel
            elegant, confident and comfortable, whatever the occasion.
          </p>
          <p className="text-ink/70 text-sm sm:text-base leading-relaxed mb-5">
            We&apos;re a women-focused fashion business, and we care about getting
            the details right — from fabric to fit to how an outfit makes you
            feel. Every collection is curated with that in mind.
          </p>
          <p className="text-ink/70 text-sm sm:text-base leading-relaxed mb-8">
            We proudly deliver across India, and keep ordering simple — just
            message us on WhatsApp and our team will help you the rest of the
            way.
          </p>
          <WhatsAppButton href={getGeneralEnquiryUrl()}>
            Chat With Us
          </WhatsAppButton>
        </div>
      </section>
    </div>
  );
}
