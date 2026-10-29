"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import { useWishlist } from "@/contexts/WishlistContext";

interface NavLink {
  href: string;
  label: string;
}

export default function NavActions({ navLinks }: { navLinks: NavLink[] }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { ids } = useWishlist();
  const router = useRouter();

  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    setSearchOpen(false);
    router.push(query.trim() ? `/shop?q=${encodeURIComponent(query.trim())}` : "/shop");
  }

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="relative hidden sm:block">
        {searchOpen ? (
          <form onSubmit={submitSearch} className="flex items-center">
            <input
              autoFocus
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onBlur={() => !query && setSearchOpen(false)}
              placeholder="Search products…"
              className="w-40 md:w-56 border-b border-purple-300 bg-transparent py-1 text-sm focus:outline-none focus:border-purple-600"
            />
          </form>
        ) : (
          <button
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            className="p-2 text-ink/70 hover:text-purple-700 transition-colors"
          >
            <SearchIcon />
          </button>
        )}
      </div>

      <Link
        href="/wishlist"
        aria-label="Wishlist"
        className="relative p-2 text-ink/70 hover:text-purple-700 transition-colors"
      >
        <HeartIcon />
        {ids.length > 0 && (
          <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-purple-700 text-white text-[9px] leading-none">
            {ids.length}
          </span>
        )}
      </Link>

      <button
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
        className="lg:hidden p-2 text-ink/70 hover:text-purple-700 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        </svg>
      </button>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} navLinks={navLinks} />
    </div>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 20.5s-7.4-4.6-10-8.7C.5 9 1 5.7 3.5 4.1c2.2-1.4 5-.9 6.6 1.1L12 7.3l1.9-2.1c1.6-2 4.4-2.5 6.6-1.1C23 5.7 23.5 9 21.9 11.8 19.4 15.9 12 20.5 12 20.5Z" strokeLinejoin="round" />
    </svg>
  );
}
