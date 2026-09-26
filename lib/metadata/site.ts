import type { Metadata } from "next";

import { homepageCopy } from "@/lib/content/homepage-copy";

/**
 * The approved canonical public origin. Apex, not www: it is what appears on
 * printed material and what `app.kitamo.online` reads as a sibling of.
 * See ADR-0011.
 */
export const siteOrigin = "https://kitamo.online";

export const siteName = "KitaMo";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: homepageCopy.metadata.title,
    template: `%s · ${siteName}`,
  },
  description: homepageCopy.metadata.description,
  applicationName: siteName,
  referrer: "strict-origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * The link-preview image (Facebook, Messenger, X): the counter illustration
 * with the real Sell screen fitted in. See ADR-0012 and CLM-026.
 */
export const shareImage = {
  url: "/og/kitamo-counter.jpg",
  width: 1200,
  height: 630,
  alt: "Illustration: a store owner behind a sari-sari counter with KitaMo on a tablet, showing a sale of ₱183.00.",
} as const;

/**
 * Per-route metadata. Every route declares its own canonical (a root-level
 * canonical would point every page at "/"). Open Graph is set in full here
 * because Next.js replaces, rather than merges, a parent's openGraph object,
 * and a page-level openGraph also drops a file-based opengraph-image.
 */
export function pageMetadata({
  path,
  title,
  description,
}: {
  path: "/" | `/${string}`;
  title: string;
  description: string;
}): Metadata {
  const isHome = path === "/";
  const fullTitle = isHome ? title : `${title} · ${siteName}`;

  return {
    title: isHome ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName,
      locale: "en_PH",
      url: path,
      title: fullTitle,
      description,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [shareImage],
    },
  };
}
