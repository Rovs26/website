import type { Metadata } from "next";

import { RecordFlow } from "@/components/illustrations/record-flow";
import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { Card } from "@/components/primitives/card";
import { Heading } from "@/components/primitives/heading";
import { Notice } from "@/components/primitives/notice";
import { StyledLink } from "@/components/primitives/styled-link";
import { Text } from "@/components/primitives/text";
import { ProductStatus } from "@/components/status/product-status";
import { aboutCopy } from "@/lib/content/about-copy";

export const metadata: Metadata = aboutCopy.metadata;

export default function AboutPage() {
  return (
    <PageShell>
      <Section aria-labelledby="about-heading" className="overflow-hidden">
        <Container size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:gap-16">
            <Stack className="max-w-3xl" gap="large">
              <div>
                <ProductStatus
                  explanation="Limited Android product testing; not an open public release."
                  status="testing"
                />
              </div>
              <Heading id="about-heading" level={1} size="display">
                {aboutCopy.hero.heading}
              </Heading>
              <Text size="large" tone="secondary">
                {aboutCopy.hero.introduction}
              </Text>
              <Cluster align="start">
                <StyledLink href="/for-sellers" variant="primary">
                  {aboutCopy.actions.primary}
                </StyledLink>
                <StyledLink href="/how-it-works" variant="secondary">
                  {aboutCopy.actions.secondary}
                </StyledLink>
              </Cluster>
            </Stack>
            <RecordFlow />
          </div>
        </Container>
      </Section>

      <Section
        aria-labelledby="purpose-heading"
        className="border-border bg-surface border-y"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <Stack gap="small">
              <Text
                className="text-action font-bold tracking-[0.12em] uppercase"
                size="small"
              >
                {aboutCopy.purpose.eyebrow}
              </Text>
              <Heading id="purpose-heading" level={2} size="large">
                {aboutCopy.purpose.heading}
              </Heading>
            </Stack>
            <Stack gap="large">
              <Text size="large">{aboutCopy.purpose.body}</Text>
              <Notice title="Intent, not measured impact">
                <p>{aboutCopy.purpose.boundary}</p>
              </Notice>
            </Stack>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="principles-heading">
        <Container size="wide">
          <Stack gap="xlarge">
            <Stack className="max-w-3xl" gap="small">
              <Text
                className="text-action font-bold tracking-[0.12em] uppercase"
                size="small"
              >
                {aboutCopy.principles.eyebrow}
              </Text>
              <Heading id="principles-heading" level={2} size="large">
                {aboutCopy.principles.heading}
              </Heading>
            </Stack>
            <div className="grid gap-4 md:grid-cols-2">
              {aboutCopy.principles.items.map((item) => (
                <Card as="article" className="h-full" key={item.heading}>
                  <Stack gap="medium">
                    <Heading level={3} size="small">
                      {item.heading}
                    </Heading>
                    <Text tone="secondary">{item.body}</Text>
                  </Stack>
                </Card>
              ))}
            </div>
          </Stack>
        </Container>
      </Section>

      <Section
        aria-labelledby="current-stage-heading"
        className="border-border bg-muted border-y"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <Stack gap="small">
              <Text
                className="text-action font-bold tracking-[0.12em] uppercase"
                size="small"
              >
                {aboutCopy.current.eyebrow}
              </Text>
              <Heading id="current-stage-heading" level={2} size="large">
                {aboutCopy.current.heading}
              </Heading>
            </Stack>
            <Stack gap="large">
              <div>
                <ProductStatus status="testing" />
              </div>
              <Text size="large">{aboutCopy.current.body}</Text>
            </Stack>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="future-direction-heading">
        <Container size="reading">
          <Card className="p-6 sm:p-8">
            <Stack gap="large">
              <Text
                className="text-action font-bold tracking-[0.12em] uppercase"
                size="small"
              >
                {aboutCopy.future.eyebrow}
              </Text>
              <div>
                <ProductStatus
                  explanation={aboutCopy.future.explanation}
                  status="future"
                />
              </div>
              <Heading id="future-direction-heading" level={2} size="large">
                {aboutCopy.future.heading}
              </Heading>
              <Text size="large" tone="secondary">
                {aboutCopy.future.body}
              </Text>
              <Cluster align="start">
                <StyledLink href="/for-sellers" variant="primary">
                  {aboutCopy.actions.primary}
                </StyledLink>
                <StyledLink href="/how-it-works" variant="secondary">
                  {aboutCopy.actions.secondary}
                </StyledLink>
              </Cluster>
            </Stack>
          </Card>
        </Container>
      </Section>
    </PageShell>
  );
}
