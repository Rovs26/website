import type { MetadataRoute } from "next";

import { siteOrigin } from "@/lib/metadata/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/design-system",
    },
    sitemap: `${siteOrigin}/sitemap.xml`,
  };
}
