import type { ComponentPropsWithoutRef } from "react";

import { classNames } from "@/lib/utilities/class-names";

export type DividerProps = ComponentPropsWithoutRef<"hr">;

export function Divider({ className, ...props }: DividerProps) {
  return (
    <hr
      className={classNames("border-border border-0 border-t", className)}
      {...props}
    />
  );
}
