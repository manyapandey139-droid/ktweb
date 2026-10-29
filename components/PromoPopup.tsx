
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("kt-fashion-popup") === "shown") {
        return;
      }
    } catch {}

    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  function closePopup() {
    try {
      sessionStorage.setItem("kt-fashion-popup", "shown");
    } catch {}

    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closePopup();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center
      bg-black/70 p-4"
      onClick={closePopup}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="kt-popup-title"
        className="relative w-full max-w-md overflow-hidden
        rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-10 flex h-10 w-10
          items-center justify-center rounded-full bg-white
          text-2xl text-black shadow-md"
        >
          &times;
        </button>

        <Image
          src="/banners/popup-offer.jpg"
          alt="Special offer from KT's Fashion"
          width={1000}
          height={1000}
          sizes="(max-width: 768px) 100vw, 448px"
          className="max-h-[65vh] w-full object-contain"
        />

        <div className="p-5 text-center">
          <p className="text-sm font-semibold uppercase
          tracking-widest text-purple-700">
            KT's Fashion
          </p>

          <h2
            id="kt-popup-title"
            className="mt-2 text-2xl font-bold text-gray-900"
          >
            Discover Your Style
          </h2>

          <p className="mt-2 text-gray-600">
            Explore our latest collection today!
          </p>

          <Link
            href="/shop"
            onClick={closePopup}
            className="mt-5 inline-block rounded-lg bg-purple-700
            px-8 py-3 font-semibold text-white hover:bg-purple-800"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
