import Link from "next/link";
import { brandConfig } from "@/lib/brandConfig";
import { categories } from "@/data/categories";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  ...categories.map((c) => ({ href: `/${c.slug}`, label: c.navLabel })),
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-purple-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <span className="font-serif-display italic text-2xl text-white">
            {brandConfig.shortName} Fashion
          </span>
          <p className="mt-3 text-xs tracking-[0.25em] text-purple-300 uppercase">
            {brandConfig.tagline}
          </p>
          <p className="mt-4 text-sm text-purple-200/80 max-w-xs">
            Timeless styles crafted for every woman. Thank you for supporting
            our women-led business.
          </p>
        </div>

        <div>
          <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-purple-200/80">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-4">
            Customer Support
          </h3>
          <ul className="space-y-2 text-sm text-purple-200/80">
            <li>
              <Link href="/shipping-returns" className="hover:text-white transition-colors">
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link href="/shipping-returns" className="hover:text-white transition-colors">
                Returns
              </Link>
            </li>
            <li>
              <a
                href={`https://wa.me/${brandConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-purple-200/80">
            <li>{brandConfig.location.display}</li>
            <li>{brandConfig.delivery}</li>
            <li>
              <a
                href={`https://wa.me/${brandConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                {brandConfig.whatsappDisplay}
              </a>
            </li>
            <li className="text-purple-300/70 italic">
              {brandConfig.email || "Email coming soon"}
            </li>
            <li>
              <a
                href={brandConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram — {brandConfig.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-purple-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-purple-300/70">
          <span>
            © {new Date().getFullYear()} {brandConfig.brandName}. All Rights Reserved.
          </span>
          <span>Made with care in {brandConfig.location.city}.</span>
        </div>
      </div>
    </footer>
  );
}
