"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Product } from "@/types/product";
import { SawanLeaf } from "@/components/SawanDecor";

const STORAGE_KEY = "kt-sawan-sale-seen";
const OPEN_DELAY_MS = 1200;

/**
 * Sawan Sale welcome popup.
 *
 * Behaviour:
 *  • appears once per browser session, a beat after the first page loads
 *  • sessionStorage flag is written the moment it opens, so navigating
 *    between pages never re-triggers it
 *  • closes on the X, on backdrop click, and on Escape
 *  • restores focus and never locks scrolling permanently
 *
 * Products are passed in from the server so the popup always shows real
 * catalog data (name, price, image) and links to the real product pages.
 */
export default function SawanSalePopup({
  products,
  heading,
  message,
  cta,
  href,
}: {
  products: Product[];
  heading: string;
  message: string;
  cta: string;
  href: string;
}) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<Element | null>(null);

  useEffect(() => {
    if (products.length === 0) return;
    let seen = false;
    try {
      seen = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // private mode / storage blocked — fall through and just show it once
    }
    if (seen) return;

    const timer = setTimeout(() => {
      lastFocused.current = document.activeElement;
      setOpen(true);
      try {
        window.sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore
      }
    }, OPEN_DELAY_MS);

    return () => clearTimeout(timer);
  }, [products.length]);

  const close = useCallback(() => {
    setOpen(false);
    const prev = lastFocused.current;
    if (prev instanceof HTMLElement) prev.focus();
  }, []);

  // Lock background scroll only while open, and always release it.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  if (!open || products.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sawan-popup-heading"
    >
      {/* Backdrop */}
      <button
        aria-label="Close Sawan Sale"
        onClick={close}
        tabIndex={-1}
        className="animate-sawan-fade-in absolute inset-0 cursor-default bg-purple-950/60 backdrop-blur-sm"
      />

      {/* Panel — capped to the viewport so it can never overflow on mobile */}
      <div className="animate-sawan-pop-in relative flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden bg-cream shadow-2xl sm:max-w-xl">
        <SawanLeaf className="right-[-2.5rem] top-[-2rem] h-40 w-40 text-purple-200/45" />

        <button
          ref={closeRef}
          onClick={close}
          aria-label="Close"
          className="absolute right-2.5 top-2.5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-purple-800 shadow-sm backdrop-blur transition-colors hover:bg-white"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <div className="overflow-y-auto">
          {/* Header */}
          <div className="relative bg-gradient-to-br from-purple-800 to-purple-700 px-6 pb-7 pt-9 text-center sm:px-8 sm:pb-8 sm:pt-10">
            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-lavender-200">
              KT&apos;s Fashion Presents
            </span>
            <h2
              id="sawan-popup-heading"
              className="font-serif-display mt-3 text-3xl text-white sm:text-4xl"
            >
              {heading}
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-xs leading-relaxed text-lavender-100/90 sm:text-sm">
              {message}
            </p>
          </div>

          {/* Products */}
          <div className="grid grid-cols-4 gap-1.5 p-3 sm:gap-3 sm:p-5">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/product/${p.slug}`}
                onClick={close}
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-lavender-100">
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    sizes="(min-width: 640px) 130px, 22vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-1.5 line-clamp-2 text-[10px] leading-snug text-ink/75 sm:text-[11px]">
                  {p.name}
                </p>
                <p className="text-[10px] font-medium text-purple-700 sm:text-[11px]">
                  ₹{p.price.toLocaleString("en-IN")}
                </p>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="px-5 pb-6 sm:px-6 sm:pb-7">
            <Link
              href={href}
              onClick={close}
              className="flex w-full items-center justify-center bg-purple-700 px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-purple-800 sm:text-sm"
            >
              {cta}
            </Link>
            <button
              onClick={close}
              className="mt-3 w-full text-center text-[11px] uppercase tracking-widest text-ink/45 transition-colors hover:text-ink/70"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
