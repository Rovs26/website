import type { ComponentPropsWithoutRef } from "react";

import { classNames } from "@/lib/utilities/class-names";

const sizeClasses = {
  content: "max-w-[var(--km-width-content)]",
  reading: "max-w-[var(--km-width-reading)]",
  wide: "max-w-[var(--km-width-wide)]",
} as const;

export type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  size?: keyof typeof sizeClasses;
};

export function Container({
  className,
  size = "content",
  ...props
}: ContainerProps) {
  return (
    <div
      className={classNames(
        "mx-auto w-full px-[var(--km-page-gutter)]",
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}
