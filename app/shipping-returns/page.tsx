import type { Metadata } from "next";
import { brandConfig } from "@/lib/brandConfig";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description:
    "Shipping and returns information for KT's Fashion — Pan India delivery, COD available, easy 7 day returns.",
};

const points = [
  {
    title: "Shipping",
    body: `We offer ${brandConfig.shippingMessage.toLowerCase()}, delivering across India. Once your order is confirmed on WhatsApp, our team will share dispatch and tracking details with you directly.`,
  },
  {
    title: "Cash On Delivery",
    body: `${brandConfig.codMessage} on eligible orders. Our team will confirm COD availability for your location when you place your order on WhatsApp.`,
  },
  {
    title: "Returns",
    body: `${brandConfig.returnPolicy} from the date of delivery. To start a return, simply message us on WhatsApp with your order details and we'll guide you through the process.`,
  },
];

export default function ShippingReturnsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
      <span className="text-xs sm:text-sm tracking-[0.3em] text-purple-500 font-medium uppercase mb-3 block text-center">
        Policies
      </span>
      <h1 className="font-serif-display text-4xl sm:text-5xl text-purple-800 mb-12 text-center">
        Shipping &amp; Returns
      </h1>

      <div className="flex flex-col gap-10">
        {points.map((point) => (
          <div key={point.title} className="border-b border-purple-100 pb-8">
            <h2 className="font-serif-display text-xl sm:text-2xl text-purple-700 mb-3">
              {point.title}
            </h2>
            <p className="text-ink/70 text-sm sm:text-base leading-relaxed">
              {point.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
