import type { Metadata } from "next";

/**
 * The approved canonical public origin. Apex, not www: it is what appears on
 * printed material and what `app.kitamo.online` reads as a sibling of.
 * See ADR-0011.
 */
export const siteOrigin = "https://kitamo.online";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: "KitaMo | Currently Testing",
  description:
    "KitaMo is an Android business app currently testing with a focus on practical records for Filipino small-business owners and sellers.",
  applicationName: "KitaMo",
  referrer: "strict-origin-when-cross-origin",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
  },
};
