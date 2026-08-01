import type { Metadata } from "next";
import { brandConfig } from "@/lib/brandConfig";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with KT's Fashion over WhatsApp or Instagram. Based in Kanpur, Uttar Pradesh, with Pan India delivery.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24 text-center">
      <span className="text-xs sm:text-sm tracking-[0.3em] text-purple-500 font-medium uppercase mb-3 block">
        Get In Touch
      </span>
      <h1 className="font-serif-display text-4xl sm:text-5xl text-purple-800 mb-10">
        Contact {brandConfig.brandName}
      </h1>

      <div className="bg-lavender-50 p-8 sm:p-12 flex flex-col items-center gap-3 mb-10">
        <p className="text-ink/80 font-medium">{brandConfig.brandName}</p>
        <p className="text-ink/60 text-sm">{brandConfig.location.display}</p>
        <p className="text-ink/60 text-sm">{brandConfig.delivery}</p>

        <div className="w-16 h-px bg-purple-200 my-4" />

        <p className="flex items-center gap-2 text-ink/80 text-sm">
          <WhatsAppIcon className="w-4 h-4 text-purple-700" />
          WhatsApp: {brandConfig.whatsappDisplay}
        </p>
        <p className="text-ink/50 text-sm italic">
          Email: {brandConfig.email || "Coming soon"}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <WhatsAppButton href={getGeneralEnquiryUrl()}>
          Chat On WhatsApp
        </WhatsAppButton>
        <WhatsAppButton
          href={brandConfig.instagramUrl}
          variant="outline"
          showIcon={false}
        >
          Follow On Instagram
        </WhatsAppButton>
      </div>
    </div>
  );
}
