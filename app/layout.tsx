import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { siteMetadata } from "@/lib/metadata/site";

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fbf7ed",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
