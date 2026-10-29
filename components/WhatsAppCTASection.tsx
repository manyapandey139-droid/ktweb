import { getGeneralEnquiryUrl } from "@/lib/whatsapp";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function WhatsAppCTASection() {
  return (
    <section className="bg-purple-50">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 text-center flex flex-col items-center">
        <h2 className="font-serif-display text-2xl sm:text-3xl text-purple-800 mb-3">
          Have A Question, Or Ready To Order?
        </h2>
        <p className="text-ink/60 text-sm sm:text-base max-w-md mb-8">
          Chat with us directly on WhatsApp — our team will help you with
          sizing, availability and ordering.
        </p>
        <WhatsAppButton href={getGeneralEnquiryUrl()}>
          Chat On WhatsApp
        </WhatsAppButton>
      </div>
    </section>
  );
}
