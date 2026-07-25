import type { ReactNode } from "react";

import { BrandMark } from "@/components/brand/brand-mark";
import { Container } from "@/components/layout/container";
import { SkipLink } from "@/components/primitives/skip-link";

export type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-dvh">
      <SkipLink />
      <header
        aria-label="KitaMo website"
        className="border-border bg-surface/90 border-b"
      >
        <Container className="flex min-h-16 items-center" size="wide">
          <BrandMark priority />
        </Container>
      </header>
      <main id="main-content">{children}</main>
    </div>
  );
}
