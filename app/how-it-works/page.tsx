import type { ReactNode } from "react";

import { PageShell } from "@/components/layout/page-shell";
import { CreateAccountLink } from "@/components/marketing/actions";
import { BandCaption } from "@/components/marketing/band";
import { ClosingCta } from "@/components/marketing/closing";
import { Device } from "@/components/marketing/device";
import { PageHero } from "@/components/marketing/page-hero";
import { Tally } from "@/components/marketing/tally";
import { howItWorksCopy } from "@/lib/content/how-it-works-copy";
import { sharedCopy } from "@/lib/content/shared-copy";
import type { PlateKey } from "@/lib/content/plates";
import { pageMetadata } from "@/lib/metadata/site";
import { classNames } from "@/lib/utilities/class-names";

export const metadata = pageMetadata({
  path: "/how-it-works",
  ...howItWorksCopy.metadata,
});

const { hero, steps, limits } = howItWorksCopy;

const phoneWidth = "w-[min(16.25rem,calc(50%-0.5rem))]";
const phoneSizes = "(min-width: 1100px) 260px, 45vw";

function StepText({
  index,
  onInk = false,
}: {
  index: number;
  onInk?: boolean;
}) {
  const step = steps[index];

  return (
    <div className="flex flex-col gap-3.5">
      <Tally className={onInk ? "text-white" : "text-text"} count={index + 1} />
      <span
        className={classNames(
          "text-[0.9375rem] font-semibold",
          onInk ? "text-on-ink" : "text-secondary",
        )}
      >
        Step {index + 1}
      </span>
      <h2 className="text-h3 text-balance">{step.heading}</h2>
    </div>
  );
}

function StepBody({ index }: { index: number }) {
  return (
    <p className="text-body max-w-[32.5rem] font-medium text-pretty">
      {steps[index].body}
    </p>
  );
}

function StepRow({ children, index }: { children: ReactNode; index: number }) {
  return (
    <li className="border-text px-gutter wide:grid-cols-2 grid gap-x-16 gap-y-6 border-t pt-[clamp(2rem,3.3vw,3rem)]">
      <div className="flex flex-col gap-3.5 pb-[clamp(0rem,3.3vw,3rem)]">
        <StepText index={index} />
        <StepBody index={index} />
      </div>
      <div className="flex items-end gap-[clamp(0.75rem,2.2vw,2rem)] self-end">
        {children}
      </div>
    </li>
  );
}

/** On phones a single screen shows its top half, standing on the rule. */
function CroppedPhone({ plate }: { plate: PlateKey }) {
  return (
    <>
      <div className="wide:block hidden w-[16.25rem]">
        <Device plate={plate} sizes="260px" />
      </div>
      <div className="wide:hidden mx-auto aspect-[25/27] w-full max-w-[18.75rem] overflow-hidden">
        <Device plate={plate} sizes="300px" />
      </div>
    </>
  );
}

export default function HowItWorksPage() {
  return (
    <PageShell current="how">
      <PageHero
        heading={hero.heading}
        id="how-heading"
        introduction={hero.introduction}
      />

      <ol aria-label="The daily loop" className="m-0 list-none p-0">
        <li className="border-text px-gutter wide:grid-cols-2 grid gap-x-16 gap-y-6 border-t py-[clamp(2rem,3.3vw,3rem)]">
          <div className="flex flex-col gap-3.5">
            <StepText index={0} />
            <StepBody index={0} />
          </div>
          <div className="flex flex-wrap items-center gap-3 self-end">
            <CreateAccountLink className="wide:max-w-[22.5rem] flex-[1_1_16.25rem]" />
          </div>
        </li>

        <StepRow index={1}>
          <CroppedPhone plate="P3" />
        </StepRow>

        <StepRow index={2}>
          <Device className={phoneWidth} plate="P1" sizes={phoneSizes} />
          <Device className={phoneWidth} plate="P2" sizes={phoneSizes} />
        </StepRow>

        <StepRow index={3}>
          <Device className={phoneWidth} plate="P5" sizes={phoneSizes} />
          <Device className={phoneWidth} plate="P4" sizes={phoneSizes} />
        </StepRow>

        <li className="bg-ink border-accent px-gutter border-t-8 pt-[clamp(2.5rem,4.4vw,4rem)] text-white">
          <div className="wide:grid-cols-2 grid items-end gap-x-16 gap-y-3.5">
            <StepText index={4} onInk />
            <StepBody index={4} />
          </div>
          <div className="mt-[clamp(2rem,3.3vw,3rem)] flex flex-wrap items-end gap-[clamp(1rem,2.8vw,2.5rem)]">
            <Device
              className="wide:w-[min(51.25rem,calc(100%-18.75rem))] w-full"
              plate="T1"
              sizes="(min-width: 1100px) 820px, 90vw"
            />
            <CroppedPhone plate="P6" />
          </div>
          <div className="bg-rule-ink h-px" />
          <BandCaption>{sharedCopy.screensCaption}</BandCaption>
        </li>
      </ol>

      <section
        aria-labelledby="limits-heading"
        className="px-gutter py-section wide:grid-cols-2 grid gap-x-[clamp(2.5rem,6.6vw,6rem)] gap-y-7"
      >
        <h2 className="text-h2" id="limits-heading">
          {limits.heading}
        </h2>
        <ul className="border-text m-0 list-none border-t p-0">
          {limits.items.map((item) => (
            <li
              className="border-border flex min-h-16 items-center border-b py-3.5 text-[clamp(1.1875rem,1.5vw,1.375rem)] leading-[1.35] font-semibold text-pretty"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <ClosingCta />
    </PageShell>
  );
}
