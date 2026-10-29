import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { brandConfig } from "@/lib/brandConfig";

const LOGO_PATH = "/images/brand/kt-fashion-logo.png";

function hasRealLogoFile(): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", LOGO_PATH));
  } catch {
    return false;
  }
}

/**
 * Renders the official logo image if you've placed one at
 * public/images/brand/kt-fashion-logo.png. Until then, falls back to an
 * elegant text lockup that matches the brand's script wordmark so the site
 * looks finished either way.
 */
export default function Logo({ className = "" }: { className?: string }) {
  const useImage = hasRealLogoFile();

  return (
    <Link
      href="/"
      aria-label={`${brandConfig.brandName} — Home`}
      className={`flex items-center gap-2 shrink-0 ${className}`}
    >
      {useImage ? (
        <Image
          src={LOGO_PATH}
          alt={`${brandConfig.brandName} logo`}
          width={180}
          height={72}
          className="h-14 w-auto object-contain"
          priority
        />
      ) : (
        <span className="flex flex-col leading-none">
          <span
            className="font-serif-display text-3xl text-purple-700"
            style={{ fontStyle: "italic" }}
          >
            {brandConfig.shortName}
          </span>
          <span className="text-[9px] tracking-[0.35em] text-purple-500 font-medium mt-0.5">
            FASHION
          </span>
          <span className="text-[8px] tracking-[0.25em] text-ink/50 mt-0.5">
            FEELING BEAUTIFUL
          </span>
        </span>
      )}
    </Link>
  );
}
