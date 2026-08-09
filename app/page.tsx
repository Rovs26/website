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
import { homepageCopy } from "@/lib/content/homepage-copy";

export default function HomePage() {
  return (
    <PageShell>
      <Section aria-labelledby="home-heading" className="overflow-hidden">
        <Container size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.65fr)] lg:gap-16">
            <Stack className="max-w-4xl" gap="large">
              <div>
                <ProductStatus
                  explanation={homepageCopy.testing.explanation}
                  status="testing"
                />
              </div>
              <Heading id="home-heading" level={1} size="display">
                {homepageCopy.hero.heading}
              </Heading>
              <Text className="max-w-2xl" size="large" tone="secondary">
                {homepageCopy.hero.introduction}
              </Text>
              <Cluster align="start">
                <StyledLink href="#how-it-works" variant="primary">
                  {homepageCopy.hero.primaryAction}
                </StyledLink>
                <StyledLink href="#testing-status" variant="secondary">
                  {homepageCopy.hero.secondaryAction}
                </StyledLink>
              </Cluster>
            </Stack>

            <aside
              aria-label="Homepage scope"
              className="rounded-surface border-border bg-muted/70 relative border p-6 sm:p-8"
            >
              <div
                aria-hidden="true"
                className="bg-accent absolute top-0 left-6 h-1 w-16 rounded-b-full"
              />
              <Stack gap="large">
                <Text
                  className="font-bold tracking-[0.12em] uppercase"
                  size="small"
                >
                  Current focus
                </Text>
                <p className="font-display text-2xl leading-tight font-extrabold tracking-[-0.025em]">
                  Practical records on one Android device.
                </p>
                <Text tone="secondary">
                  A deliberately small test scope, described without download or
                  launch promises.
                </Text>
              </Stack>
            </aside>
          </div>
        </Container>
      </Section>

      <Section
        aria-labelledby="audience-heading"
        className="border-border bg-surface border-y"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <Stack gap="small">
              <Text
                className="text-action font-bold tracking-[0.12em] uppercase"
                size="small"
              >
                {homepageCopy.audience.eyebrow}
              </Text>
              <Heading id="audience-heading" level={2} size="large">
                {homepageCopy.audience.heading}
              </Heading>
            </Stack>
            <Stack gap="large">
              <Text size="large">{homepageCopy.audience.introduction}</Text>
              <Notice title="Intended context, not an adoption claim">
                <p>{homepageCopy.audience.boundary}</p>
              </Notice>
            </Stack>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="how-it-works-heading" id="how-it-works">
        <Container size="wide">
          <Stack gap="xlarge">
            <Stack className="max-w-3xl" gap="medium">
              <Text
                className="text-action font-bold tracking-[0.12em] uppercase"
                size="small"
              >
                {homepageCopy.capabilities.eyebrow}
              </Text>
              <Heading id="how-it-works-heading" level={2} size="large">
                {homepageCopy.capabilities.heading}
              </Heading>
              <Text size="large" tone="secondary">
                {homepageCopy.capabilities.introduction}
              </Text>
            </Stack>
            <ol className="grid list-none gap-4 p-0 md:grid-cols-3">
              {homepageCopy.capabilities.items.map((item, index) => (
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

      <Section
        aria-labelledby="offline-heading"
        className="border-border bg-muted border-y"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
            <Stack gap="small">
              <Text
                className="text-action font-bold tracking-[0.12em] uppercase"
                size="small"
              >
                {homepageCopy.offline.eyebrow}
              </Text>
              <Heading id="offline-heading" level={2} size="large">
                {homepageCopy.offline.heading}
              </Heading>
            </Stack>
            <Stack gap="large">
              <Text size="large">{homepageCopy.offline.body}</Text>
              <Text tone="secondary">{homepageCopy.offline.boundary}</Text>
            </Stack>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="testing-status-heading" id="testing-status">
        <Container size="reading">
          <Card className="border-warning/40 bg-warning-soft p-6 sm:p-8">
            <Stack gap="large">
              <div>
                <ProductStatus
                  explanation={homepageCopy.testing.explanation}
                  status="testing"
                />
              </div>
              <Heading id="testing-status-heading" level={2} size="large">
                {homepageCopy.testing.heading}
              </Heading>
              <Text size="large">{homepageCopy.testing.body}</Text>
              <Text tone="secondary">{homepageCopy.testing.changeNotice}</Text>
              <div>
                <StyledLink href="#how-it-works" variant="secondary">
                  {homepageCopy.hero.primaryAction}
                </StyledLink>
              </div>
            </Stack>
          </Card>
        </Container>
      </Section>
    </PageShell>
  );
}
