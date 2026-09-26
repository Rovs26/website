import type { ComponentPropsWithoutRef } from "react";

import { classNames } from "@/lib/utilities/class-names";

/**
 * The ink "counter" band with its gold edge: the one use of the accent.
 * Used for the counter moments (devices, the receipt, the call to action).
 */
export function Band({
  className,
  ...props
}: ComponentPropsWithoutRef<"section">) {
  return (
    <section
      className={classNames(
        "bg-ink border-accent px-gutter border-t-8 text-white",
        className,
      )}
      {...props}
    />
  );
}

/** The one-line note that says what a product picture shows. */
export function BandCaption({ children }: { children: string }) {
  return (
    <p className="text-on-ink pt-3.5 pb-6 text-right text-sm leading-5 font-medium">
      {children}
    </p>
  );
}
