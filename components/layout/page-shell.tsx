import type { ReactNode } from "react";
import Link from "next/link";

import { BrandMark } from "@/components/brand/brand-mark";
import { Container } from "@/components/layout/container";
import { SkipLink } from "@/components/primitives/skip-link";
import { StyledLink } from "@/components/primitives/styled-link";
import { homepageCopy } from "@/lib/content/homepage-copy";

export type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex min-h-dvh flex-col">
      <SkipLink />
      <header
        aria-label="KitaMo website"
        className="border-border bg-surface/90 border-b"
      >
        <Container
          className="flex min-h-16 items-center justify-between gap-4"
          size="wide"
        >
          <Link
            aria-label="KitaMo home"
            className="rounded-control inline-flex min-h-11 items-center"
            href="/"
          >
            <BrandMark priority />
          </Link>
          <StyledLink
            className="inline-flex min-h-11 items-center text-sm"
            href="/#testing-status"
          >
            {homepageCopy.footer.statusLink}
          </StyledLink>
        </Container>
      </header>
      <main className="flex-1" id="main-content">
        {children}
      </main>
      <footer
        aria-label="KitaMo website footer"
        className="border-border border-t"
      >
        <Container
          className="flex flex-col gap-3 py-6 text-sm sm:flex-row sm:items-center sm:justify-between"
          size="wide"
        >
          <p className="text-secondary">
            <span className="text-text font-semibold">KitaMo</span> ©{" "}
            {currentYear}
          </p>
          <StyledLink
            className="inline-flex min-h-11 items-center self-start sm:self-auto"
            href="/#testing-status"
          >
            {homepageCopy.footer.statusLink}
          </StyledLink>
        </Container>
      </footer>
    </div>
  );
}
