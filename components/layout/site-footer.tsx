import Link from "next/link";

import { Container } from "@/components/layout/container";
import {
  footerCopy,
  primaryNavigation,
  testingStatusLink,
  webAppSignInLink,
} from "@/lib/content/site-navigation";

const footerLinkClasses =
  "rounded-sm text-secondary hover:text-action inline-flex min-h-11 items-center py-2 font-semibold underline decoration-transparent underline-offset-4 hover:decoration-current";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="KitaMo website footer"
      className="border-border bg-surface border-t"
    >
      <Container className="py-10 sm:py-12" size="wide">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div className="max-w-sm">
            <p className="font-display text-text text-xl font-extrabold">
              KitaMo
            </p>
            <p className="text-secondary mt-3 text-sm leading-6">
              {footerCopy.description}
            </p>
            <p className="text-secondary mt-5 text-sm">© {currentYear}</p>
          </div>

          <nav aria-label="Footer explore">
            <p className="text-text text-sm font-bold tracking-[0.1em] uppercase">
              Explore
            </p>
            <ul className="mt-2 list-none p-0">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link className={footerLinkClasses} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer product">
            <p className="text-text text-sm font-bold tracking-[0.1em] uppercase">
              Product
            </p>
            <ul className="mt-2 list-none p-0">
              <li>
                <Link
                  className={footerLinkClasses}
                  href={testingStatusLink.href}
                >
                  {testingStatusLink.label}
                </Link>
              </li>
              <li>
                <a className={footerLinkClasses} href={webAppSignInLink.href}>
                  {webAppSignInLink.label}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
