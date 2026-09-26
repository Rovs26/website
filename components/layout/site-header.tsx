import Link from "next/link";

import { BrandMark } from "@/components/brand/brand-mark";
import { CreateAccountLink } from "@/components/marketing/actions";
import { Chevron } from "@/components/marketing/icons";
import {
  primaryNavigation,
  webAppSignInLink,
  type NavigationKey,
} from "@/lib/content/site-navigation";
import { classNames } from "@/lib/utilities/class-names";

const desktopLinkClasses =
  "text-text hover:text-action inline-flex h-11 items-center px-3.5 text-base font-semibold no-underline decoration-2 underline-offset-[6px] aria-[current=page]:font-bold aria-[current=page]:underline";

const menuLinkClasses =
  "text-text hover:text-action flex min-h-14 items-center text-[1.1875rem] font-semibold no-underline aria-[current=page]:font-bold";

/**
 * Wide screens (1100px and up) show the navigation inline. Narrower screens
 * show the mark, the primary action and a native <details> Menu, so the menu
 * works without JavaScript.
 */
export function SiteHeader({ current }: { current?: NavigationKey }) {
  return (
    <header
      aria-label="KitaMo website"
      className="bg-page text-text relative z-20"
    >
      <div className="px-gutter wide:flex hidden h-20 items-center gap-2">
        <Link
          aria-label="KitaMo home"
          className="mr-8 flex h-12 items-center"
          href="/"
        >
          <BrandMark priority />
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="m-0 flex list-none gap-1 p-0">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  aria-current={item.key === current ? "page" : undefined}
                  className={desktopLinkClasses}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <span className="flex-1" />
        <a
          className="text-text hover:text-action inline-flex h-11 items-center px-4 text-base font-semibold no-underline"
          href={webAppSignInLink.href}
        >
          {webAppSignInLink.label}
        </a>
        <CreateAccountLink size="header" />
      </div>

      <div className="wide:hidden relative flex min-h-16 items-center gap-2 px-3 py-2">
        <Link
          aria-label="KitaMo home"
          className="flex size-11 shrink-0 items-center justify-center"
          href="/"
        >
          <BrandMark size={36} />
        </Link>
        <span className="flex-1" />
        <CreateAccountLink size="compact" />
        <details className="group shrink-0">
          <summary className="border-border-strong flex h-11 cursor-pointer items-center gap-1 rounded-[var(--km-radius-control)] border bg-white pr-2.5 pl-3 text-[0.9375rem] font-semibold select-none">
            Menu
            <span className="duration-standard ease-standard flex text-base transition-transform group-open:rotate-180 motion-reduce:transition-none">
              <Chevron />
            </span>
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="bg-page border-border border-b-text absolute inset-x-0 top-full flex flex-col border-t border-b px-5 pt-1 pb-3"
          >
            <ul className="m-0 list-none p-0">
              {primaryNavigation.map((item) => (
                <li className="border-border border-b" key={item.href}>
                  <Link
                    aria-current={item.key === current ? "page" : undefined}
                    className={menuLinkClasses}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  className={classNames(menuLinkClasses)}
                  href={webAppSignInLink.href}
                >
                  {webAppSignInLink.label}
                </a>
              </li>
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
