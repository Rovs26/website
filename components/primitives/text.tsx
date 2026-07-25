import type { ComponentPropsWithoutRef, ElementType } from "react";

import { classNames } from "@/lib/utilities/class-names";

const sizeClasses = {
  large: "text-lg leading-8 sm:text-xl",
  medium: "text-base leading-7",
  small: "text-sm leading-6",
} as const;

export type TextProps = ComponentPropsWithoutRef<"p"> & {
  as?: "p" | "small" | "span";
  size?: keyof typeof sizeClasses;
  tone?: "primary" | "secondary";
};

export function Text({
  as = "p",
  className,
  size = "medium",
  tone = "primary",
  ...props
}: TextProps) {
  const Component: ElementType = as;

  return (
    <Component
      className={classNames(
        sizeClasses[size],
        tone === "primary" ? "text-text" : "text-secondary",
        className,
      )}
      {...props}
    />
  );
}
