import { PageShell } from "@/components/layout/page-shell";
import { ClosingCta } from "@/components/marketing/closing";
import { PageHero } from "@/components/marketing/page-hero";
import { Photo } from "@/components/marketing/photo";
import { forSellersCopy } from "@/lib/content/for-sellers-copy";
import { pageMetadata } from "@/lib/metadata/site";

export const metadata = pageMetadata({
  path: "/for-sellers",
  ...forSellersCopy.metadata,
});

const { hero, sellers } = forSellersCopy;

export default function ForSellersPage() {
  return (
    <PageShell current="sellers">
      <PageHero
        heading={hero.heading}
        id="sellers-heading"
        introduction={hero.introduction}
      />

      {sellers.map((seller) => (
        <section
          aria-labelledby={seller.id}
          className="border-text px-gutter flex flex-wrap items-start gap-x-[clamp(2rem,4.4vw,4rem)] gap-y-5 border-t pt-[clamp(1.75rem,3.3vw,3rem)] pb-[clamp(2.5rem,4.4vw,4rem)]"
          key={seller.id}
        >
          <div className="flex-[1_1_18.75rem]">
            <h2
              className="text-[clamp(2.125rem,3.6vw,3.25rem)] leading-[1.02] font-bold tracking-[-0.03em]"
              id={seller.id}
            >
              {seller.name}
            </h2>
          </div>
          <dl className="border-border m-0 flex-[2_1_26.25rem] border-t">
            {seller.uses.map((use) => (
              <div
                className="border-border grid grid-cols-[minmax(6rem,9.375rem)_minmax(0,1fr)] gap-x-5 gap-y-1 border-b py-4"
                key={use.word}
              >
                <dt className="text-[clamp(1.25rem,1.6vw,1.5rem)] leading-[1.25] font-bold tracking-[-0.01em]">
                  {use.word}
                </dt>
                <dd className="text-body m-0 font-medium text-pretty">
                  {use.text}
                </dd>
              </div>
            ))}
          </dl>
          {"photo" in seller ? (
            <div className="max-w-[25rem] flex-[1_1_17.5rem]">
              <Photo
                alt={seller.photo.alt}
                caption={seller.photo.caption}
                height={seller.photo.height}
                sizes="(min-width: 1100px) 400px, 90vw"
                src={seller.photo.src}
                width={seller.photo.width}
              />
            </div>
          ) : null}
        </section>
      ))}

      <ClosingCta />
    </PageShell>
  );
}
