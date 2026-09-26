import type { ReactNode } from "react";

import { Chevron } from "@/components/marketing/icons";

export type FaqItem = { answer: ReactNode; question: string };

/** Native disclosure rows: keyboard and screen-reader support come free. */
export function Faq({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="border-text border-t">
      {items.map((item) => (
        <details className="group border-border border-b" key={item.question}>
          <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-4 py-3.5 text-[clamp(1.1875rem,1.5vw,1.375rem)] leading-[1.3] font-[650]">
            {item.question}
            <span className="border-border-strong duration-standard ease-standard grid size-9 shrink-0 place-items-center rounded-full border bg-white text-lg transition-transform group-open:rotate-180 motion-reduce:transition-none">
              <Chevron />
            </span>
          </summary>
          <p className="text-body pr-13 pb-5 font-medium text-pretty">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
