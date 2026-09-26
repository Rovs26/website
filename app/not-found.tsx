import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";

export default function NotFound() {
  return (
    <PageShell>
      <section
        aria-labelledby="not-found-heading"
        className="px-gutter py-section flex flex-col items-start gap-6"
      >
        <h1 className="text-h2" id="not-found-heading">
          Page not found.
        </h1>
        <p className="text-body text-secondary max-w-[32.5rem] font-medium">
          This page is not on kitamo.online.
        </p>
        <Link
          className="border-border-strong text-text hover:bg-muted flex min-h-14 items-center rounded-[var(--km-radius-control)] border bg-white px-6 text-lg font-[650] no-underline"
          href="/"
        >
          Back to KitaMo
        </Link>
      </section>
    </PageShell>
  );
}
