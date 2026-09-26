import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";
import {
  CreateAccountLink,
  SignInButton,
} from "@/components/marketing/actions";
import { Band, BandCaption } from "@/components/marketing/band";
import { ClosingCta } from "@/components/marketing/closing";
import { Device, DevicePair } from "@/components/marketing/device";
import { Faq } from "@/components/marketing/faq";
import { Arrow } from "@/components/marketing/icons";
import { ArtDirectedPhoto } from "@/components/marketing/photo";
import { FormulaHeading, Receipt } from "@/components/marketing/receipt";
import { Tally } from "@/components/marketing/tally";
import { homepageCopy } from "@/lib/content/homepage-copy";
import { sharedCopy } from "@/lib/content/shared-copy";
import { pageMetadata } from "@/lib/metadata/site";

export const metadata = pageMetadata({ path: "/", ...homepageCopy.metadata });

const { hero, formula, routine, sellers, counter, steps, faq } = homepageCopy;

export default function HomePage() {
  return (
    <PageShell>
      {/* The devices stand on the counter band that starts the next section. */}
      <section
        aria-labelledby="hero-heading"
        className="px-gutter wide:grid wide:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] wide:items-end wide:gap-10 wide:pt-14 pt-6"
      >
        <div className="wide:pb-18 flex flex-col">
          <h1 className="text-display text-balance" id="hero-heading">
            {hero.heading}
          </h1>
          <p className="text-lead wide:mt-8 mt-5 max-w-[33.75rem] font-medium text-pretty">
            {hero.introduction}
          </p>
          <div className="wide:mt-8 wide:flex-row wide:flex-wrap wide:gap-3 mt-6 flex max-w-[37.5rem] flex-col gap-2.5">
            <CreateAccountLink />
            <SignInButton />
          </div>
          <p className="text-secondary wide:mt-4 wide:text-base mt-3.5 text-[0.9375rem] leading-6 font-medium">
            {sharedCopy.reassurance}
          </p>
        </div>
        <div className="wide:mt-0 mt-9 max-w-[56.25rem]">
          <DevicePair phone="P1" priority tablet="T1" />
        </div>
      </section>

      <Band
        aria-labelledby="formula-heading"
        className="pb-[clamp(4rem,9vw,8rem)]"
      >
        <BandCaption>{sharedCopy.screensCaption}</BandCaption>
        <div className="wide:grid-cols-2 grid items-start gap-x-[clamp(2.5rem,6.6vw,6rem)] gap-y-10">
          <div className="wide:order-2 wide:pt-16 flex flex-col gap-[clamp(1.75rem,3.3vw,3rem)]">
            <FormulaHeading id="formula-heading" />
            <p className="max-w-[38.75rem] text-[clamp(1.1875rem,2.1vw,1.875rem)] leading-[1.35] font-semibold tracking-[-0.01em] text-pretty">
              {formula.line}
            </p>
          </div>
          <div className="wide:order-1">
            <Receipt />
          </div>
        </div>
      </Band>

      <section
        aria-labelledby="routine-heading"
        className="px-gutter py-section"
      >
        <h2 className="text-h2" id="routine-heading">
          {routine.heading}
        </h2>
        <ol className="wide:mt-14 wide:grid-cols-5 wide:items-start wide:gap-6 m-0 mt-8 grid list-none p-0">
          {routine.items.map((item) => (
            <li
              className="border-border wide:gap-3 wide:border-t-0 wide:pt-0 flex flex-col gap-5 border-t pt-6"
              key={item.word}
            >
              <div className="wide:order-2 wide:mt-3 wide:border-t wide:border-text wide:pt-3.5 flex flex-col gap-2">
                <h3 className="wide:text-[2rem] flex items-baseline gap-2.5 text-[1.875rem] leading-[1.05] font-bold tracking-[-0.02em]">
                  {item.word}
                  <span className="text-secondary text-[0.9375rem] font-semibold tracking-normal">
                    {item.english}
                  </span>
                </h3>
                <p className="text-[1.0625rem] leading-[1.45] font-medium text-pretty">
                  {item.text}
                </p>
              </div>
              <div className="border-text wide:order-1 wide:aspect-auto wide:max-w-none wide:overflow-visible wide:border-b-0 mx-auto aspect-[25/27] w-full max-w-[18.75rem] overflow-hidden border-b">
                <Device
                  plate={item.plate}
                  sizes="(min-width: 1100px) 17vw, 300px"
                />
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="sellers-heading"
        className="px-gutter py-section border-border wide:grid-cols-2 grid gap-x-[clamp(2.5rem,6.6vw,6rem)] gap-y-8 border-t"
      >
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-h2" id="sellers-heading">
            {sellers.heading}
          </h2>
          <Link
            className="text-action hover:text-action-press flex min-h-11 items-center gap-2 text-lg font-[650] underline underline-offset-4"
            href="/for-sellers"
          >
            {sellers.link}
            <Arrow />
          </Link>
        </div>
        <ul className="m-0 list-none p-0">
          {sellers.names.map((name) => (
            <li
              className="border-border flex min-h-[clamp(3.75rem,5.5vw,5rem)] items-baseline border-b pt-[clamp(0.625rem,1.2vw,1rem)] text-[clamp(1.875rem,3.3vw,3rem)] leading-[1.1] font-bold tracking-[-0.025em]"
              key={name}
            >
              {name}
            </li>
          ))}
        </ul>
      </section>

      <Band aria-labelledby="counter-heading" className="pt-section">
        <h2 className="text-h2" id="counter-heading">
          {counter.heading}
        </h2>
        <div className="mt-[clamp(1.75rem,3.3vw,3rem)]">
          <ArtDirectedPhoto
            alt={counter.photoAlt}
            caption={counter.caption}
            captionClassName="text-on-ink"
            narrow={{
              src: "/marketing/S1-counter-4x5.jpg",
              width: 893,
              height: 1116,
            }}
            wide={{
              src: "/marketing/S1-counter-16x9.jpg",
              width: 2000,
              height: 1116,
            }}
          />
        </div>
        <ul className="wide:grid-cols-4 m-0 mt-[clamp(1.5rem,2.8vw,2.5rem)] grid list-none gap-x-8 p-0 pb-[clamp(3rem,5.5vw,5rem)] sm:grid-cols-2">
          {counter.items.map((item) => (
            <li
              className="border-rule-ink text-row flex min-h-[clamp(3.75rem,5vw,5.5rem)] items-start border-t py-4 font-semibold text-pretty"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </Band>

      <section aria-labelledby="steps-heading" className="px-gutter py-section">
        <h2 className="text-h2" id="steps-heading">
          {steps.heading}
        </h2>
        <ol className="m-0 mt-[clamp(1.75rem,3.3vw,3rem)] grid list-none gap-x-8 p-0 md:grid-cols-3">
          {steps.items.map((text, index) => (
            <li
              className="border-text flex min-h-24 items-center gap-5 border-t py-4"
              key={text}
            >
              <Tally count={index + 1} />
              <span className="text-[clamp(1.5rem,2vw,1.875rem)] leading-[1.15] font-bold tracking-[-0.015em]">
                <span className="sr-only">Step {index + 1}. </span>
                {text}
              </span>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <CreateAccountLink className="wide:max-w-[22.5rem] flex-[1_1_16.25rem]" />
        </div>
      </section>

      <section
        aria-labelledby="faq-heading"
        className="px-gutter py-section border-border wide:grid-cols-2 grid gap-x-[clamp(2.5rem,6.6vw,6rem)] gap-y-7 border-t"
      >
        <h2 className="text-h2" id="faq-heading">
          {faq.heading}
        </h2>
        <Faq items={faq.items} />
      </section>

      <ClosingCta />
    </PageShell>
  );
}
