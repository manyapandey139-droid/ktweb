"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { categories } from "@/data/categories";
import { sortOptions } from "@/lib/sortProducts";

const priceBuckets = [
  { value: "", label: "Any Price" },
  { value: "0-1500", label: "Under ₹1,500" },
  { value: "1500-2500", label: "₹1,500 – ₹2,500" },
  { value: "2500-4000", label: "₹2,500 – ₹4,000" },
  { value: "4000-999999", label: "Above ₹4,000" },
];

const availabilityOptions = ["Available", "Limited Stock", "Out of Stock"];

export default function ProductFilters({
  sizes,
  lockedCategory,
}: {
  sizes: string[];
  lockedCategory?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const selectClass =
    "border border-purple-200 bg-white text-sm px-3 py-2.5 text-ink/80 focus:outline-none focus:border-purple-500 w-full";

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-10">
      {!lockedCategory && (
        <select
          className={selectClass}
          value={searchParams.get("category") ?? ""}
          onChange={(e) => updateParam("category", e.target.value)}
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.title}
            </option>
          ))}
        </select>
      )}

      <select
        className={selectClass}
        value={searchParams.get("price") ?? ""}
        onChange={(e) => updateParam("price", e.target.value)}
        aria-label="Filter by price"
      >
        {priceBuckets.map((b) => (
          <option key={b.value} value={b.value}>
            {b.label}
          </option>
        ))}
      </select>

      {sizes.length > 0 && (
        <select
          className={selectClass}
          value={searchParams.get("size") ?? ""}
          onChange={(e) => updateParam("size", e.target.value)}
          aria-label="Filter by size"
        >
          <option value="">Any Size</option>
          {sizes.map((s) => (
            <option key={s} value={s}>
              Size {s}
            </option>
          ))}
        </select>
      )}

      <select
        className={selectClass}
        value={searchParams.get("availability") ?? ""}
        onChange={(e) => updateParam("availability", e.target.value)}
        aria-label="Filter by availability"
      >
        <option value="">Any Availability</option>
        {availabilityOptions.map((a) => (
          <option key={a} value={a}>
            {a}
          </option>
        ))}
      </select>

      <select
        className={selectClass}
        value={searchParams.get("sort") ?? "featured"}
        onChange={(e) => updateParam("sort", e.target.value)}
        aria-label="Sort products"
      >
        {sortOptions.map((s) => (
          <option key={s.value} value={s.value}>
            {s.label}
          </option>
        ))}
      </select>
    </div>
  );
}
