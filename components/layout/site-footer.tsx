import Link from "next/link";

import { BrandLogo } from "@/components/brand/brand-mark";
import {
  helpLinks,
  primaryNavigation,
  webAppSignInLink,
} from "@/lib/content/site-navigation";

const footerLinkClasses =
  "text-text hover:text-action flex min-h-11 items-center text-[1.0625rem] font-semibold no-underline";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="KitaMo website footer"
      className="bg-page text-text border-border px-gutter flex flex-col gap-8 border-t pt-12 pb-10"
    >
      <div className="flex flex-wrap items-start justify-between gap-x-16 gap-y-8">
        <Link aria-label="KitaMo home" className="flex" href="/">
          <BrandLogo />
        </Link>
        <div className="flex flex-wrap gap-x-16 gap-y-6">
          <nav aria-label="Site" className="flex min-w-40 flex-col">
            {primaryNavigation.map((item) => (
              <Link
                className={footerLinkClasses}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
            <a className={footerLinkClasses} href={webAppSignInLink.href}>
              {webAppSignInLink.label}
            </a>
          </nav>
          <nav aria-label="Legal and help" className="flex min-w-40 flex-col">
            {helpLinks.map((item) => (
              <a className={footerLinkClasses} href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <p className="border-border text-secondary m-0 border-t pt-4 text-[0.9375rem] font-medium">
        © {currentYear} KitaMo.
      </p>
    </footer>
  );
}
