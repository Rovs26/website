import type { ComponentPropsWithoutRef } from "react";

import { classNames } from "@/lib/utilities/class-names";

const variantClasses = {
  primary:
    "border-action bg-action text-action-foreground hover:border-action-hover hover:bg-action-hover",
  secondary:
    "border-border-strong bg-surface text-text hover:border-action hover:bg-muted",
  quiet:
    "border-transparent bg-transparent text-action hover:bg-muted hover:text-action-hover",
} as const;

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: keyof typeof variantClasses;
};

export function Button({
  className,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        "rounded-control duration-fast ease-standard disabled:border-disabled disabled:bg-disabled disabled:text-disabled-foreground inline-flex min-h-11 items-center justify-center border px-5 py-2.5 text-sm font-bold transition-[background-color,border-color,color,box-shadow] disabled:cursor-not-allowed motion-reduce:transition-none",
        variantClasses[variant],
        className,
      )}
      type={type}
      {...props}
    />
  );
}
