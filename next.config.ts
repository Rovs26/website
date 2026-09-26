import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Ported from kitamo-ph/admin next.config.ts, which held the only hardened
  // header set in the workspace.
  //
  // `script-src 'none'` in production (ADR-0013): every page is static HTML
  // with no Client Components, so the browser needs no script at all. With
  // 'none' it never downloads the Next.js runtime (about 145 KB), which
  // `script-src 'self'` used to fetch only to fail on the blocked inline RSC
  // payload. Browsers log each refused tag in the console; that is expected.
  // Development keeps 'self' 'unsafe-eval' for next dev. JSON-LD is a data
  // block and is never executed, so it is unaffected.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "object-src 'none'",
              "img-src 'self' data:",
              "font-src 'self'",
              "style-src 'self' 'unsafe-inline'",
              process.env.NODE_ENV === "development"
                ? "script-src 'self' 'unsafe-eval'"
                : "script-src 'none'",
              "connect-src 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
