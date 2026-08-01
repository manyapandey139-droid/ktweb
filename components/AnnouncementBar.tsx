import { brandConfig } from "@/lib/brandConfig";

const items = [
  brandConfig.shippingMessage,
  brandConfig.codMessage,
  brandConfig.returnPolicy,
  brandConfig.delivery,
];

export default function AnnouncementBar() {
  return (
    <div className="bg-purple-700 text-white text-[11px] sm:text-xs tracking-wide">
      <div className="mx-auto max-w-7xl px-4 py-2.5 flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-2 sm:gap-4 whitespace-nowrap">
            {i > 0 && <span className="text-purple-300">|</span>}
            <span>{item.toUpperCase()}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
