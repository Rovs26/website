import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/metadata/site";

/**
 * Only routes that exist and carry approved content. /design-system is a
 * development-only review route and is excluded here and in robots.ts.
 */
const routes = ["/", "/for-sellers", "/how-it-works", "/about"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteOrigin).toString(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
