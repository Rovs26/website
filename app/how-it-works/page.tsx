import type { Metadata } from "next";

import { RecordFlow } from "@/components/illustrations/record-flow";
import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { Card } from "@/components/primitives/card";
import { Heading } from "@/components/primitives/heading";
import { StyledLink } from "@/components/primitives/styled-link";
import { Text } from "@/components/primitives/text";
import { ProductStatus } from "@/components/status/product-status";
import { howItWorksCopy } from "@/lib/content/how-it-works-copy";

export const metadata: Metadata = howItWorksCopy.metadata;

export default function HowItWorksPage() {
  return (
    <PageShell>
      <Section aria-labelledby="how-page-heading" className="overflow-hidden">
        <Container size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:gap-16">
            <Stack className="max-w-3xl" gap="large">
              <div>
                <ProductStatus
                  explanation="Limited Android product testing; not an open public release."
                  status="testing"
                />
              </div>
              <Heading id="how-page-heading" level={1} size="display">
                {howItWorksCopy.hero.heading}
              </Heading>
              <Text size="large" tone="secondary">
                {howItWorksCopy.hero.introduction}
              </Text>
              <Cluster align="start">
                <StyledLink href="/for-sellers" variant="primary">
                  {howItWorksCopy.actions.primary}
                </StyledLink>
                <StyledLink href="/#testing-status" variant="secondary">
                  {howItWorksCopy.actions.secondary}
                </StyledLink>
              </Cluster>
            </Stack>
            <RecordFlow />
          </div>
        </Container>
      </Section>

      <Section
        aria-labelledby="workflow-heading"
        className="border-border bg-surface border-y"
      >
        <Container size="wide">
          <Stack gap="xlarge">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <Stack className="max-w-3xl" gap="medium">
                <Text
                  className="text-action font-bold tracking-[0.12em] uppercase"
                  size="small"
                >
                  {howItWorksCopy.steps.eyebrow}
                </Text>
                <Heading id="workflow-heading" level={2} size="large">
                  {howItWorksCopy.steps.heading}
                </Heading>
                <Text size="large" tone="secondary">
                  {howItWorksCopy.steps.introduction}
                </Text>
              </Stack>
              <ProductStatus status="testing" />
            </div>
            <ol className="grid list-none gap-4 p-0 md:grid-cols-2">
              {howItWorksCopy.steps.items.map((item, index) => (
                <li key={item.heading}>
                  <Card as="article" className="h-full">
                    <Stack gap="medium">
                      <span
                        aria-hidden="true"
                        className="bg-accent text-accent-foreground inline-flex size-9 items-center justify-center rounded-full text-sm font-bold"
                      >
                        {index + 1}
                      </span>
                      <Heading level={3} size="small">
                        {item.heading}
                      </Heading>
                      <Text tone="secondary">{item.body}</Text>
                    </Stack>
                  </Card>
                </li>
              ))}
            </ol>
          </Stack>
        </Container>
      </Section>

      <Section aria-labelledby="local-records-heading">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <Stack gap="small">
              <Text
                className="text-action font-bold tracking-[0.12em] uppercase"
                size="small"
              >
                {howItWorksCopy.local.eyebrow}
              </Text>
              <Heading id="local-records-heading" level={2} size="large">
                {howItWorksCopy.local.heading}
              </Heading>
            </Stack>
            <Stack gap="large">
              <Text size="large">{howItWorksCopy.local.body}</Text>
              <Text tone="secondary">
                {howItWorksCopy.local.responsibility}
              </Text>
            </Stack>
          </div>
        </Container>
      </Section>

      <Section
        aria-labelledby="limitations-heading"
        className="border-border bg-muted border-y"
      >
        <Container size="reading">
          <Card className="border-warning/40 bg-warning-soft p-6 sm:p-8">
            <Stack gap="large">
              <Text
                className="text-warning font-bold tracking-[0.12em] uppercase"
                size="small"
              >
                {howItWorksCopy.limitations.eyebrow}
              </Text>
              <Heading id="limitations-heading" level={2} size="large">
                {howItWorksCopy.limitations.heading}
              </Heading>
              <Text tone="secondary">
                {howItWorksCopy.limitations.introduction}
              </Text>
              <ul className="grid gap-3 pl-5">
                {howItWorksCopy.limitations.items.map((item) => (
                  <li className="pl-1 leading-7" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
              <Cluster align="start">
                <StyledLink href="/for-sellers" variant="primary">
                  {howItWorksCopy.actions.primary}
                </StyledLink>
                <StyledLink href="/#testing-status" variant="secondary">
                  {howItWorksCopy.actions.secondary}
                </StyledLink>
              </Cluster>
            </Stack>
          </Card>
        </Container>
      </Section>
    </PageShell>
  );
}
