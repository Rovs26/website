import type { ComponentPropsWithoutRef } from "react";

import { classNames } from "@/lib/utilities/class-names";

const spacingClasses = {
  compact: "py-8 sm:py-10",
  default: "py-[var(--km-section-space)]",
} as const;

export type SectionProps = ComponentPropsWithoutRef<"section"> & {
  spacing?: keyof typeof spacingClasses;
};

export function Section({
  className,
  spacing = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={classNames(spacingClasses[spacing], className)}
      {...props}
    />
  );
}
