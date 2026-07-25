import type { ComponentPropsWithoutRef } from "react";

import { classNames } from "@/lib/utilities/class-names";

const gapClasses = {
  small: "gap-2",
  medium: "gap-4",
  large: "gap-6",
} as const;

export type ClusterProps = ComponentPropsWithoutRef<"div"> & {
  align?: "center" | "start";
  gap?: keyof typeof gapClasses;
  justify?: "between" | "center" | "start";
};

export function Cluster({
  align = "center",
  className,
  gap = "medium",
  justify = "start",
  ...props
}: ClusterProps) {
  return (
    <div
      className={classNames(
        "flex flex-wrap",
        gapClasses[gap],
        align === "center" ? "items-center" : "items-start",
        justify === "between" && "justify-between",
        justify === "center" && "justify-center",
        justify === "start" && "justify-start",
        className,
      )}
      {...props}
    />
  );
}
