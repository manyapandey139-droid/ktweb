"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useWishlist } from "@/contexts/WishlistContext";

export default function ProductCard({ product }: { product: Product }) {
  const { isSaved, toggle } = useWishlist();
  const saved = isSaved(product.id);
  const outOfStock = product.availability === "Out of Stock";

  return (
    <div className="group relative flex flex-col">
      <Link
        href={`/product/${product.slug}`}
        className="relative block aspect-[3/4] overflow-hidden bg-lavender-100"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.newArrival && (
            <span className="bg-purple-700 text-white text-[10px] tracking-widest uppercase px-2.5 py-1">
              New
            </span>
          )}
          {product.featured && (
            <span className="bg-white/90 text-purple-700 text-[10px] tracking-widest uppercase px-2.5 py-1">
              Featured
            </span>
          )}
        </div>

        {outOfStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="bg-ink/80 text-white text-[11px] tracking-widest uppercase px-3 py-1.5">
              Out of Stock
            </span>
          </div>
        )}
      </Link>

      <button
        aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
        onClick={() => toggle(product.id)}
        className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 text-purple-700 hover:scale-110 transition-transform"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4"
          fill={saved ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path
            d="M12 20.5s-7.4-4.6-10-8.7C.5 9 1 5.7 3.5 4.1c2.2-1.4 5-.9 6.6 1.1L12 7.3l1.9-2.1c1.6-2 4.4-2.5 6.6-1.1C23 5.7 23.5 9 21.9 11.8 19.4 15.9 12 20.5 12 20.5Z"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="pt-4 flex flex-col items-start">
        <Link href={`/product/${product.slug}`} className="hover:text-purple-700 transition-colors">
          <h3 className="text-sm sm:text-base text-ink font-medium">{product.name}</h3>
        </Link>
        <p className="mt-1 text-purple-700 text-sm">₹{product.price.toLocaleString("en-IN")}</p>
      </div>
    </div>
  );
}
