import { classNames } from "@/lib/utilities/class-names";

export type RecordFlowProps = {
  className?: string;
};

const illustrativeRecords = [
  { label: "Sales record", width: "w-4/5" },
  { label: "Inventory count", width: "w-3/5" },
  { label: "Business review", width: "w-2/3" },
] as const;

export function RecordFlow({ className }: RecordFlowProps) {
  return (
    <figure
      className={classNames(
        "rounded-surface border-border bg-muted/70 relative overflow-hidden border p-5 sm:p-7",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="border-accent/70 absolute -top-10 -right-10 size-28 rounded-full border-[1.5rem] opacity-40"
      />
      <div className="relative grid gap-3">
        {illustrativeRecords.map((record, index) => (
          <div
            className="rounded-control border-border bg-surface shadow-soft border p-4"
            key={record.label}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-text text-sm font-bold">{record.label}</p>
              <span
                aria-hidden="true"
                className="bg-accent text-accent-foreground inline-flex size-7 items-center justify-center rounded-full text-xs font-bold"
              >
                {index + 1}
              </span>
            </div>
            <div aria-hidden="true" className="bg-muted mt-3 h-2 rounded-full">
              <div
                className={classNames(
                  "bg-action/45 h-full rounded-full",
                  record.width,
                )}
              />
            </div>
          </div>
        ))}
      </div>
      <figcaption className="text-secondary relative mt-4 text-xs leading-5">
        Illustrative record flow — not an app screenshot.
      </figcaption>
    </figure>
  );
}
