import type { MetadataRoute } from "next";
import { brandConfig } from "@/lib/brandConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${brandConfig.seo.siteUrl}/sitemap.xml`,
  };
}
