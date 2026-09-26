import { classNames } from "@/lib/utilities/class-names";

/**
 * Lista tally marks for step numbers. Five is four marks struck through in
 * gold. Decorative: the step number is always in the text beside it.
 */
export function Tally({
  className,
  count,
}: {
  className?: string;
  count: number;
}) {
  const marks = Math.min(count, 4);

  return (
    <span
      aria-hidden="true"
      className={classNames(
        "relative flex h-10 w-11 shrink-0 gap-1.5",
        className,
      )}
    >
      {Array.from({ length: marks }, (_, index) => (
        <span className="w-1 rounded-sm bg-current" key={index} />
      ))}
      {count >= 5 ? (
        <span className="bg-accent absolute top-[18px] -left-1 h-1 w-11 -rotate-[28deg] rounded-sm" />
      ) : null}
    </span>
  );
}
