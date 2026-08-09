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
import { forSellersCopy } from "@/lib/content/for-sellers-copy";

export const metadata: Metadata = forSellersCopy.metadata;

export default function ForSellersPage() {
  return (
    <PageShell>
      <Section
        aria-labelledby="for-sellers-heading"
        className="overflow-hidden"
      >
        <Container size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:gap-16">
            <Stack className="max-w-3xl" gap="large">
              <div>
                <ProductStatus
                  explanation="Limited Android product testing; not an open public release."
                  status="testing"
                />
              </div>
              <Heading id="for-sellers-heading" level={1} size="display">
                {forSellersCopy.hero.heading}
              </Heading>
              <Text size="large" tone="secondary">
                {forSellersCopy.hero.introduction}
              </Text>
              <Cluster align="start">
                <StyledLink href="/how-it-works" variant="primary">
                  {forSellersCopy.actions.primary}
                </StyledLink>
                <StyledLink href="/#testing-status" variant="secondary">
                  {forSellersCopy.actions.secondary}
                </StyledLink>
              </Cluster>
            </Stack>
            <RecordFlow />
          </div>
        </Container>
      </Section>

      <Section
        aria-labelledby="seller-contexts-heading"
        className="border-border bg-surface border-y"
      >
        <Container>
          <Stack gap="xlarge">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
              <Stack gap="small">
                <Text
                  className="text-action font-bold tracking-[0.12em] uppercase"
                  size="small"
                >
                  {forSellersCopy.contexts.eyebrow}
                </Text>
                <Heading id="seller-contexts-heading" level={2} size="large">
                  {forSellersCopy.contexts.heading}
                </Heading>
              </Stack>
              <Text size="large" tone="secondary">
                {forSellersCopy.contexts.introduction}
              </Text>
            </div>
            <ul className="grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 lg:grid-cols-4">
              {forSellersCopy.contexts.items.map((context) => (
                <li
                  className="rounded-control border-border bg-muted flex min-h-16 items-center border px-4 py-3 text-sm font-bold"
                  key={context}
                >
                  {context}
                </li>
              ))}
            </ul>
          </Stack>
        </Container>
      </Section>

      <Section aria-labelledby="seller-challenges-heading">
        <Container size="wide">
          <Stack gap="xlarge">
            <Stack className="max-w-3xl" gap="medium">
              <Text
                className="text-action font-bold tracking-[0.12em] uppercase"
                size="small"
              >
                {forSellersCopy.challenges.eyebrow}
              </Text>
              <Heading id="seller-challenges-heading" level={2} size="large">
                {forSellersCopy.challenges.heading}
              </Heading>
              <Text size="large" tone="secondary">
                {forSellersCopy.challenges.introduction}
              </Text>
            </Stack>
            <div className="grid gap-4 md:grid-cols-3">
              {forSellersCopy.challenges.items.map((item) => (
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
        aria-labelledby="seller-capabilities-heading"
        className="border-border bg-muted border-y"
      >
        <Container size="wide">
          <Stack gap="xlarge">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <Stack className="max-w-3xl" gap="small">
                <Text
                  className="text-action font-bold tracking-[0.12em] uppercase"
                  size="small"
                >
                  {forSellersCopy.capabilities.eyebrow}
                </Text>
                <Heading
                  id="seller-capabilities-heading"
                  level={2}
                  size="large"
                >
                  {forSellersCopy.capabilities.heading}
                </Heading>
              </Stack>
              <ProductStatus status="testing" />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {forSellersCopy.capabilities.items.map((item) => (
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
            <Notice title={forSellersCopy.focus.heading} tone="information">
              <p>{forSellersCopy.focus.body}</p>
            </Notice>
            <Cluster align="start">
              <StyledLink href="/how-it-works" variant="primary">
                {forSellersCopy.actions.primary}
              </StyledLink>
              <StyledLink href="/#testing-status" variant="secondary">
                {forSellersCopy.actions.secondary}
              </StyledLink>
            </Cluster>
          </Stack>
        </Container>
      </Section>
    </PageShell>
  );
}
