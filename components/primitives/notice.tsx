import type { ReactNode } from "react";

import { Stack } from "@/components/layout/stack";
import { classNames } from "@/lib/utilities/class-names";

const toneClasses = {
  information: "border-info/35 bg-info-soft",
  neutral: "border-border bg-muted",
  warning: "border-warning/40 bg-warning-soft",
} as const;

export type NoticeProps = {
  children: ReactNode;
  className?: string;
  title: string;
  tone?: keyof typeof toneClasses;
};

export function Notice({
  children,
  className,
  title,
  tone = "neutral",
}: NoticeProps) {
  return (
    <aside
      aria-label={title}
      className={classNames(
        "rounded-control text-text border p-4 text-sm",
        toneClasses[tone],
        className,
      )}
    >
      <Stack gap="small">
        <p className="font-bold">{title}</p>
        <div className="text-secondary max-w-[var(--km-width-reading)]">
          {children}
        </div>
      </Stack>
    </aside>
  );
}
