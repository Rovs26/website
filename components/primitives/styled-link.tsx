import type { ComponentPropsWithoutRef } from "react";

import { classNames } from "@/lib/utilities/class-names";

const variantClasses = {
  primary:
    "border-action bg-action text-action-foreground hover:border-action-hover hover:bg-action-hover",
  secondary:
    "border-border-strong bg-surface text-text hover:border-action hover:bg-muted",
  text: "rounded-sm border-transparent p-0 font-semibold text-action underline decoration-action/35 decoration-2 underline-offset-4 hover:text-action-hover hover:decoration-action-hover",
} as const;

export type StyledLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: keyof typeof variantClasses;
};

export function StyledLink({
  className,
  variant = "text",
  ...props
}: StyledLinkProps) {
  return (
    <a
      className={classNames(
        variant !== "text" &&
          "rounded-control duration-fast ease-standard inline-flex min-h-11 items-center justify-center border px-5 py-2.5 text-sm font-bold transition-[background-color,border-color,color,box-shadow] motion-reduce:transition-none",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
