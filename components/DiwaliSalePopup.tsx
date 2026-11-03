"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { diwaliSale, getDiwaliPopupProducts } from "@/data/diwaliSale";
import { brandConfig } from "@/lib/brandConfig";

const STORAGE_KEY = "kt-diwali-sale-popup-seen";
const OPEN_DELAY_MS = 1200;

export default function DiwaliSalePopup() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<Element | null>(null);
  const products = getDiwaliPopupProducts();

  useEffect(() => {
    if (!diwaliSale.isLive || products.length === 0) return;

    let seen = false;
    try {
      seen = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // ignore
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

  if (!open || !diwaliSale.isLive || products.length === 0) return null;

  const whatsappMsg = encodeURIComponent(
    `Hi KT's Fashion, I saw your Diwali Festive Sale popup! I would like to avail the Flat 10% OFF on your ethnic collection.`
  );
  const whatsappUrl = `https://wa.me/${brandConfig.whatsappNumber}?text=${whatsappMsg}`;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="diwali-popup-title"
    >
      {/* Backdrop */}
      <div
        onClick={close}
        aria-hidden="true"
        className="fixed inset-0 bg-purple-950/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog Panel */}
      <div
        className="relative flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-[#fffdfa] shadow-2xl ring-1 ring-amber-400/40 sm:max-w-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Festive Golden Top Accent Line */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500"
        />

        {/* Close Button */}
        <button
          ref={closeRef}
          onClick={close}
          aria-label="Close Diwali Sale Popup"
          className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-purple-950 shadow-md backdrop-blur transition-transform hover:scale-110 hover:bg-white"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto">
          {/* Header */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#3b0947] via-[#5b0f5b] to-[#7f1345] px-6 pb-6 pt-8 text-center text-white sm:px-8 sm:pb-7 sm:pt-9">
            {/* Background glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-amber-400/20 blur-2xl"
            />

            <div className="relative inline-flex items-center gap-1.5 rounded-full border border-amber-300/40 bg-amber-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-amber-200">
              <span>🪔</span>
              <span>{diwaliSale.popup.badge}</span>
            </div>

            <h2
              id="diwali-popup-title"
              className="font-serif-display relative mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              {diwaliSale.popup.title}
            </h2>

            {/* 10% OFF Badge */}
            <div className="relative mt-3 inline-block rounded-lg bg-gradient-to-r from-amber-400 to-yellow-400 px-4 py-1.5 text-sm font-extrabold tracking-wider text-purple-950 shadow-md sm:text-base">
              ✨ {diwaliSale.popup.discount} ✨
            </div>

            <p className="relative mx-auto mt-3 max-w-sm text-xs leading-relaxed text-purple-100/90 sm:text-sm">
              {diwaliSale.popup.message} Use coupon code:{" "}
              <strong className="font-bold text-amber-300 underline">{diwaliSale.couponCode}</strong>
            </p>
          </div>

          {/* Curated Ethnic Products Section */}
          <div className="p-4 sm:p-5">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-purple-900">
              Featured Diwali Ethnic Outfits
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3">
              {products.map((p) => {
                const discountedPrice = Math.round(p.price * 0.9);
                return (
                  <Link
                    key={p.slug}
                    href={`/product/${p.slug}`}
                    onClick={close}
                    className="group flex flex-col overflow-hidden rounded-xl bg-purple-50/50 p-2 text-center ring-1 ring-purple-100 transition-all duration-200 hover:ring-amber-400"
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-purple-100">
                      <Image
                        src={p.images[0]}
                        alt={p.name}
                        fill
                        sizes="(min-width: 640px) 130px, 40vw"
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute left-1.5 top-1.5 rounded bg-amber-500 px-1 py-0.5 text-[9px] font-bold text-purple-950">
                        10% OFF
                      </span>
                    </div>

                    <h4 className="mt-2 line-clamp-1 text-[11px] font-medium text-ink/80 group-hover:text-purple-800">
                      {p.name}
                    </h4>

                    <div className="mt-1 flex items-center justify-center gap-1.5">
                      <span className="text-xs font-bold text-purple-800">
                        ₹{discountedPrice}
                      </span>
                      <span className="text-[10px] text-gray-400 line-through">
                        ₹{p.price}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2.5 px-5 pb-6 sm:px-6 sm:pb-7">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 py-3 text-xs font-bold uppercase tracking-widest text-purple-950 shadow-md transition-all hover:brightness-105 sm:text-sm"
            >
              <span>💬</span>
              <span>{diwaliSale.popup.cta}</span>
            </a>

            <Link
              href={diwaliSale.href}
              onClick={close}
              className="flex w-full items-center justify-center rounded-lg border border-purple-700 bg-white py-2.5 text-xs font-medium uppercase tracking-widest text-purple-700 transition-colors hover:bg-purple-50 sm:text-sm"
            >
              Browse All Ethnic Wear
            </Link>

            <button
              onClick={close}
              className="mt-1 text-center text-[11px] tracking-wider text-gray-400 transition-colors hover:text-gray-600"
            >
              Continue to Website &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
