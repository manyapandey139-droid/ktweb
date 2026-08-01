import type { MetadataRoute } from "next";
import { brandConfig } from "@/lib/brandConfig";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brandConfig.seo.siteUrl;

  const staticRoutes = [
    "",
    "/shop",
    "/about",
    "/contact",
    "/shipping-returns",
    "/wishlist",
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
