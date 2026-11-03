import { brandConfig } from "@/lib/brandConfig";

const items = [
  "🪔 DIWALI FESTIVE SALE • FLAT 10% OFF ON ALL ETHNIC WEAR",
  brandConfig.shippingMessage,
  brandConfig.codMessage,
  brandConfig.returnPolicy,
  brandConfig.delivery,
];

export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-[#78123e] text-amber-200 text-[11px] sm:text-xs tracking-wide">
      <div className="mx-auto max-w-7xl px-4 py-2.5 flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-2 sm:gap-4 whitespace-nowrap">
            {i > 0 && <span className="text-amber-400/50">|</span>}
            <span className={i === 0 ? "font-bold text-yellow-300" : ""}>{item.toUpperCase()}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
