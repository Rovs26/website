import { homepageCopy } from "@/lib/content/homepage-copy";

const receipt = homepageCopy.formula.receipt;

/**
 * One example day worked through to Tubo, printed as white receipt paper on
 * the counter band. The figures are always rendered; the only motion is the
 * double rule drawing in (CSS, see .receipt-rule in globals.css).
 */
export function Receipt() {
  return (
    <figure className="text-text relative m-0 w-full max-w-[28.75rem] bg-white px-[clamp(1.25rem,2.2vw,2rem)] pt-[clamp(1.375rem,2.2vw,2rem)] pb-[clamp(1.25rem,2vw,1.75rem)]">
      <figcaption className="flex flex-col items-center text-center">
        <span className="sr-only">{receipt.context}: </span>
        <span className="text-[clamp(1rem,1.25vw,1.125rem)] font-bold">
          {receipt.store}
        </span>
        <span className="text-secondary text-[clamp(0.875rem,1.05vw,0.9375rem)] font-medium">
          {receipt.date}
        </span>
      </figcaption>
      <div className="border-border-strong mt-[1.125rem] mb-1.5 border-t-[1.5px] border-dashed" />
      <dl className="m-0 flex flex-col">
        {receipt.rows.map((row) => (
          <div
            className="flex min-h-[clamp(2.5rem,3.3vw,3rem)] items-center justify-between gap-3"
            key={row.label}
          >
            <dt className="text-[clamp(1.0625rem,1.4vw,1.25rem)] font-semibold">
              {row.label}
            </dt>
            <dd className="m-0 text-[clamp(1.0625rem,1.4vw,1.25rem)] font-semibold whitespace-nowrap">
              {row.amount}
            </dd>
          </div>
        ))}
      </dl>
      <div
        aria-hidden="true"
        className="receipt-rule border-text mt-1.5 h-1 border-t-4 border-double"
      />
      <dl className="m-0 flex items-baseline justify-between gap-3 pt-2.5">
        <dt className="text-[clamp(1.1875rem,1.5vw,1.375rem)] font-bold">
          {receipt.totalLabel}
        </dt>
        <dd className="m-0 text-[clamp(2.25rem,3.3vw,3rem)] font-bold tracking-[-0.025em] whitespace-nowrap">
          {receipt.total}
        </dd>
      </dl>
      <span
        aria-hidden="true"
        className="receipt-tear absolute inset-x-0 -bottom-2.5 h-2.5"
      />
    </figure>
  );
}

/** The formula as a heading, each seller word with its English gloss. */
export function FormulaHeading({ id }: { id: string }) {
  const { label, terms } = homepageCopy.formula;

  return (
    <h2
      aria-label={label}
      className="flex flex-wrap items-start gap-x-[0.3em] gap-y-2.5 text-[clamp(2.125rem,4.2vw,3.75rem)] leading-none font-bold tracking-[-0.03em]"
      id={id}
    >
      {terms.map((term) => (
        <span
          className="flex items-start gap-[0.25em] whitespace-nowrap"
          key={term.word}
        >
          {"before" in term ? <span>{term.before}</span> : null}
          <span className="flex flex-col gap-1.5">
            <span>{term.word}</span>
            <span className="text-on-ink text-[clamp(0.8125rem,1.1vw,1rem)] leading-[1.2] font-semibold tracking-normal">
              {term.gloss}
            </span>
          </span>
          {"after" in term ? <span>{term.after}</span> : null}
        </span>
      ))}
    </h2>
  );
}
