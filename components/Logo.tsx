import Link from "next/link";
import { brandConfig } from "@/lib/brandConfig";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${brandConfig.brandName} — Home`}
      className={`flex items-center gap-2 shrink-0 ${className}`}
    >
      <span className="flex flex-col leading-none">
        <span
          className="font-serif-display text-3xl text-purple-800 font-bold"
          style={{ fontStyle: "italic" }}
        >
          {brandConfig.shortName}
        </span>
        <span className="text-[9px] tracking-[0.35em] text-purple-600 font-bold mt-0.5">
          FASHION
        </span>
        <span className="text-[8px] tracking-[0.25em] text-ink/60 font-medium mt-0.5">
          FEELING BEAUTIFUL
        </span>
      </span>
    </Link>
  );
}
