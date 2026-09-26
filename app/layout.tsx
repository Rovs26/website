import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { preload } from "react-dom";

import "@/app/globals.css";
import { siteMetadata, siteName, siteOrigin } from "@/lib/metadata/site";

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f7f6f2",
  width: "device-width",
  initialScale: 1,
};

/**
 * A single WebSite object (ADR-0012). No Organization, SoftwareApplication,
 * Offer or rating: those need a legal identity, pricing or ratings that do
 * not exist. A JSON data block is not executed, so the strict CSP holds.
 */
const websiteJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: `${siteOrigin}/`,
});

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  // The Latin subset carries every English page; the others load on demand.
  preload("/fonts/schibsted-grotesk-latin.woff2", {
    as: "font",
    crossOrigin: "anonymous",
    type: "font/woff2",
  });

  return (
    <html lang="en">
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{ __html: websiteJsonLd }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
