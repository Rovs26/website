import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/primitives/skip-link";
import type { NavigationKey } from "@/lib/content/site-navigation";

export type PageShellProps = {
  children: ReactNode;
  current?: NavigationKey;
};

export function PageShell({ children, current }: PageShellProps) {
  return (
    <div className="flex min-h-dvh flex-col overflow-x-clip">
      <SkipLink />
      <SiteHeader current={current} />
      <main className="flex-1" id="main-content">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
