import Link from "next/link";

import { BrandMark } from "@/components/brand/brand-mark";
import { Container } from "@/components/layout/container";
import {
  primaryNavigation,
  testingStatusLink,
} from "@/lib/content/site-navigation";

const navigationLinkClasses =
  "rounded-control text-text hover:bg-muted hover:text-action inline-flex min-h-11 items-center px-3 py-2 text-sm font-semibold transition-colors motion-reduce:transition-none";

export function SiteHeader() {
  return (
    <header
      aria-label="KitaMo website"
      className="border-border bg-surface/95 relative z-40 border-b"
    >
      <Container size="wide">
        <div className="flex min-h-16 items-center justify-between gap-4">
          <Link
            aria-label="KitaMo home"
            className="rounded-control inline-flex min-h-11 items-center"
            href="/"
          >
            <BrandMark priority />
          </Link>

          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex list-none items-center gap-1 p-0">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link className={navigationLinkClasses} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="ml-2">
                <Link
                  className="rounded-control border-border-strong bg-surface text-action hover:border-action hover:bg-muted inline-flex min-h-11 items-center border px-4 py-2 text-sm font-bold transition-colors motion-reduce:transition-none"
                  href={testingStatusLink.href}
                >
                  {testingStatusLink.label}
                </Link>
              </li>
            </ul>
          </nav>

          <details className="group relative md:hidden">
            <summary className="rounded-control border-border-strong bg-surface text-text hover:border-action hover:bg-muted inline-flex min-h-11 cursor-pointer list-none items-center gap-2 border px-4 py-2 text-sm font-bold transition-colors select-none marker:content-none motion-reduce:transition-none [&::-webkit-details-marker]:hidden">
              <span>Menu</span>
              <svg
                aria-hidden="true"
                className="size-4 transition-transform group-open:rotate-180 motion-reduce:transition-none"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  d="m4 6 4 4 4-4"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                />
              </svg>
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="border-border bg-surface shadow-raised absolute top-[calc(100%+0.5rem)] right-0 w-[min(18rem,calc(100vw-2rem))] rounded-[var(--km-radius-surface)] border p-2"
            >
              <ul className="list-none p-0">
                {primaryNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      className="rounded-control text-text hover:bg-muted hover:text-action flex min-h-11 items-center px-3 py-2 text-base font-semibold"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="border-border mt-2 border-t pt-2">
                  <Link
                    className="rounded-control text-action hover:bg-muted flex min-h-11 items-center px-3 py-2 text-base font-bold"
                    href={testingStatusLink.href}
                  >
                    {testingStatusLink.label}
                  </Link>
                </li>
              </ul>
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
