import { CreateAccountLink } from "@/components/marketing/actions";
import { Band } from "@/components/marketing/band";
import { sharedCopy } from "@/lib/content/shared-copy";
import { classNames } from "@/lib/utilities/class-names";

/** The closing call to action on the counter band, repeated on every page. */
export function ClosingCta({
  heading = sharedCopy.tagline,
  size = "display",
}: {
  heading?: string;
  size?: "display" | "h2";
}) {
  return (
    <Band
      aria-labelledby="closing-heading"
      className="py-[clamp(4rem,7.7vw,7rem)]"
    >
      <h2
        className={classNames(
          "max-w-[61.25rem] text-balance",
          size === "display"
            ? "text-[clamp(3rem,6.4vw,6rem)] leading-[0.98] font-bold tracking-[-0.045em]"
            : "text-h2",
        )}
        id="closing-heading"
      >
        {heading}
      </h2>
      <div className="mt-9 flex max-w-[37.5rem] flex-wrap gap-3">
        <CreateAccountLink className="wide:max-w-[22.5rem] flex-[1_1_16.25rem]" />
      </div>
      <p className="text-on-ink mt-4 text-base leading-6 font-medium">
        {sharedCopy.reassurance}
      </p>
    </Band>
  );
}
