"use client";

import { useEffect } from "react";
import { brandConfig } from "@/lib/brandConfig";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";
import WhatsAppButton from "@/components/WhatsAppButton";

interface NavLink {
  href: string;
  label: string;
}

export default function MobileMenu({
  open,
  onClose,
  navLinks,
}: {
  open: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <button
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 bg-purple-900/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-cream shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-purple-100">
          <span className="font-serif-display text-xl text-purple-700 italic">
            {brandConfig.shortName} Fashion
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-ink/70 hover:text-purple-700"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="py-3 text-base tracking-wide text-ink/85 hover:text-purple-700 border-b border-purple-50 uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="p-6 border-t border-purple-100">
          <WhatsAppButton href={getGeneralEnquiryUrl()} className="w-full">
            Chat on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
