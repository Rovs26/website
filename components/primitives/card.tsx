import type { HTMLAttributes } from "react";

import { classNames } from "@/lib/utilities/class-names";

export type CardProps = HTMLAttributes<HTMLElement> & {
  as?: "article" | "div";
};

export function Card({
  as: Component = "div",
  className,
  ...props
}: CardProps) {
  return (
    <Component
      className={classNames(
        "rounded-surface border-border bg-surface shadow-soft border p-5 sm:p-6",
        className,
      )}
      {...props}
    />
  );
}
