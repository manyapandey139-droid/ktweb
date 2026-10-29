import { brandConfig } from "@/lib/brandConfig";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import SectionHeading from "@/components/SectionHeading";

const features = [
  {
    title: brandConfig.shippingMessage,
    description: "No hidden delivery charges on your order.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" strokeLinejoin="round" />
        <circle cx="7" cy="18" r="1.6" />
        <circle cx="17" cy="18" r="1.6" />
      </svg>
    ),
  },
  {
    title: brandConfig.delivery,
    description: "We ship to every corner of India.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21Z" strokeLinejoin="round" />
        <circle cx="12" cy="9.5" r="2.3" />
      </svg>
    ),
  },
  {
    title: brandConfig.codMessage,
    description: "Pay conveniently when your order arrives.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="6" width="18" height="12" rx="1.5" />
        <circle cx="12" cy="12" r="2.6" />
      </svg>
    ),
  },
  {
    title: brandConfig.returnPolicy,
    description: "Simple returns within 7 days of delivery.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 12a8 8 0 1 1 2.6 5.9" strokeLinecap="round" />
        <path d="M4 8v4h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "WhatsApp Ordering",
    description: "Order directly with our team, no account needed.",
    icon: <WhatsAppIcon className="w-6 h-6" />,
  },
];

export default function WhySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
      <SectionHeading eyebrow="Why Shop With Us" title="Crafted For Your Comfort" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-50 text-purple-700">
              {f.icon}
            </div>
            <h3 className="text-sm font-medium text-ink">{f.title}</h3>
            <p className="text-xs text-ink/55">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
