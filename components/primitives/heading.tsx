import type { ComponentPropsWithoutRef } from "react";

import { classNames } from "@/lib/utilities/class-names";

const sizeClasses = {
  display: "text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.055em]",
  large: "text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.04em]",
  medium: "text-2xl leading-tight tracking-[-0.025em] sm:text-3xl",
  small: "text-lg leading-snug tracking-[-0.015em] sm:text-xl",
} as const;

const headingTags = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
} as const;

export type HeadingProps = ComponentPropsWithoutRef<"h1"> & {
  level: 1 | 2 | 3 | 4;
  size?: keyof typeof sizeClasses;
};

export function Heading({
  className,
  level,
  size = "medium",
  ...props
}: HeadingProps) {
  const Component = headingTags[level];

  return (
    <Component
      className={classNames(
        "font-display text-text font-extrabold text-balance",
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}
