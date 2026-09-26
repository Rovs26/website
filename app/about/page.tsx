import { PageShell } from "@/components/layout/page-shell";
import { Band } from "@/components/marketing/band";
import { ClosingCta } from "@/components/marketing/closing";
import { Arrow } from "@/components/marketing/icons";
import { PageHero } from "@/components/marketing/page-hero";
import { ProductStatus } from "@/components/status/product-status";
import { aboutCopy } from "@/lib/content/about-copy";
import { pageMetadata } from "@/lib/metadata/site";

export const metadata = pageMetadata({ path: "/about", ...aboutCopy.metadata });

const { hero, why, standing, help, closing } = aboutCopy;

export default function AboutPage() {
  return (
    <PageShell current="about">
      <PageHero
        heading={hero.heading}
        id="about-heading"
        introduction={hero.introduction}
      />

      <Band
        aria-labelledby="why-heading"
        className="wide:grid-cols-2 grid gap-x-16 gap-y-7 py-[clamp(3.5rem,6.6vw,6rem)]"
      >
        <div className="flex flex-col gap-4">
          <span className="text-on-ink text-[0.9375rem] font-semibold">
            {why.eyebrow}
          </span>
          <h2
            className="text-[clamp(2.5rem,4.4vw,4rem)] leading-none font-bold tracking-[-0.035em] text-balance"
            id="why-heading"
          >
            {why.heading}
          </h2>
        </div>
        <div className="wide:pt-10 flex flex-col gap-7">
          <p className="text-lead max-w-[35rem] leading-[1.5] font-medium text-pretty">
            {why.body}
          </p>
          <p className="border-rule-ink border-t pt-4 text-[clamp(1.25rem,1.8vw,1.625rem)] leading-[1.3] font-bold tracking-[-0.01em]">
            {why.formula}
          </p>
        </div>
      </Band>

      <section
        aria-labelledby="standing-heading"
        className="px-gutter py-section wide:grid-cols-2 grid gap-x-[clamp(2.5rem,6.6vw,6rem)] gap-y-7"
      >
        <h2 className="text-h2" id="standing-heading">
          {standing.heading}
        </h2>
        <dl className="border-text m-0 border-t">
          {standing.items.map((item) => (
            <div
              className="border-border flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5 border-b py-5"
              key={item.name}
            >
              <dt className="text-[clamp(1.25rem,1.6vw,1.5rem)] font-bold">
                {item.name}
              </dt>
              <dd className="m-0 text-[clamp(1.125rem,1.4vw,1.25rem)]">
                <ProductStatus status={item.status} />
              </dd>
              <dd className="text-secondary m-0 basis-full text-[clamp(1rem,1.25vw,1.125rem)] leading-[1.5] font-medium text-pretty">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        aria-labelledby="help-heading"
        className="px-gutter py-section border-border wide:grid-cols-2 grid items-end gap-x-[clamp(2.5rem,6.6vw,6rem)] gap-y-5 border-t"
      >
        <div className="flex flex-col gap-3.5">
          <h2 className="text-h2" id="help-heading">
            {help.heading}
          </h2>
          <p className="text-body max-w-[30rem] font-medium text-pretty">
            {help.body}
          </p>
        </div>
        <a
          className="border-text text-row text-action hover:bg-pressed hover:text-action-press flex min-h-16 items-center justify-between gap-4 border-y font-bold no-underline"
          href={help.link.href}
        >
          {help.link.label}
          <Arrow />
        </a>
      </section>

      <ClosingCta heading={closing.heading} size="h2" />
    </PageShell>
  );
}
