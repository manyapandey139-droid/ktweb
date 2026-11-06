import { brandConfig } from "@/lib/brandConfig";

const perks = [
  {
    icon: (
      <svg className="w-6 h-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
    ),
    title: "Handcrafted Luxury",
    description: "Finest brocades, raw silks and artisanal embroidery designed with bespoke elegance.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
        />
      </svg>
    ),
    title: "Made To Measure",
    description: "Personalized fit and tailoring support available for every body shape and preference.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: "Direct WhatsApp Ordering",
    description: `Connect directly with our styling team on ${brandConfig.whatsappDisplay} for fast quotes & orders.`,
  },
  {
    icon: (
      <svg className="w-6 h-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
    title: "Pan-India Shipping & COD",
    description: "Reliable nationwide courier dispatch with Cash on Delivery and easy exchanges.",
  },
];

export default function BrandTrustBar() {
  return (
    <div className="w-full bg-white border-y border-gray-200/80 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="flex items-start gap-4 p-4 rounded-xl transition-colors hover:bg-purple-50/50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100/80 border border-purple-200">
                {perk.icon}
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm font-bold text-gray-900">{perk.title}</h4>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
