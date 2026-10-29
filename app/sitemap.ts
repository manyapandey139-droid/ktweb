import type { MetadataRoute } from "next";
import { brandConfig } from "@/lib/brandConfig";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { independenceDay } from "@/data/independenceDay";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brandConfig.seo.siteUrl;

  const staticRoutes = [
    "",
    "/shop",
    "/about",
    "/contact",
    "/shipping-returns",
    "/wishlist",
    // the campaign landing page, only while the campaign is running
    ...(independenceDay.isLive ? [independenceDay.href] : []),
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${base}/${c.slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/product/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
