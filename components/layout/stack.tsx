import type { ComponentPropsWithoutRef } from "react";

import { classNames } from "@/lib/utilities/class-names";

const gapClasses = {
  small: "gap-2",
  medium: "gap-4",
  large: "gap-6",
  xlarge: "gap-10",
} as const;

export type StackProps = ComponentPropsWithoutRef<"div"> & {
  gap?: keyof typeof gapClasses;
};

export function Stack({ className, gap = "medium", ...props }: StackProps) {
  return (
    <div
      className={classNames("flex flex-col", gapClasses[gap], className)}
      {...props}
    />
  );
}
