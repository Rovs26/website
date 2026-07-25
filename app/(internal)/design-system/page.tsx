import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { Button } from "@/components/primitives/button";
import { Card } from "@/components/primitives/card";
import { Divider } from "@/components/primitives/divider";
import { Heading } from "@/components/primitives/heading";
import { Notice } from "@/components/primitives/notice";
import { StyledLink } from "@/components/primitives/styled-link";
import { Text } from "@/components/primitives/text";
import { ProductStatus } from "@/components/status/product-status";
import {
  productStatuses,
  type ProductStatusName,
} from "@/lib/content/product-status";
import { isInternalPreviewAvailable } from "@/lib/utilities/internal-preview";

export const metadata: Metadata = {
  title: "Design-system foundation | KitaMo",
  description:
    "Development-only review of the KitaMo design-system foundation.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

const colorTokens = [
  ["Page", "bg-page"],
  ["Surface", "bg-surface"],
  ["Muted", "bg-muted"],
  ["Action", "bg-action"],
  ["Accent", "bg-accent"],
  ["Success", "bg-success"],
  ["Warning", "bg-warning"],
  ["Information", "bg-info"],
  ["Destructive", "bg-destructive"],
] as const;

const statusNames = Object.keys(productStatuses) as ProductStatusName[];

export default function DesignSystemPage() {
  if (!isInternalPreviewAvailable(process.env.NODE_ENV)) {
    notFound();
  }

  return (
    <PageShell>
      <Section aria-labelledby="design-system-heading" spacing="compact">
        <Container size="wide">
          <Stack gap="large">
            <Stack className="max-w-[var(--km-width-reading)]" gap="medium">
              <Text
                className="text-action font-bold tracking-[0.12em] uppercase"
                size="small"
              >
                Internal preview
              </Text>
              <Heading id="design-system-heading" level={1} size="large">
                Design-system foundation
              </Heading>
              <Text size="large" tone="secondary">
                A compact review surface for WEB-1 tokens and primitives. It is
                available only during local development.
              </Text>
            </Stack>

            <Notice title="Provisional visual direction" tone="warning">
              <p>
                The palette and system-font stack are accessible working
                decisions derived from current release evidence. They are not a
                permanent brand approval.
              </p>
            </Notice>
          </Stack>
        </Container>
      </Section>

      <Divider />

      <Section aria-labelledby="color-heading" spacing="compact">
        <Container size="wide">
          <Stack gap="large">
            <Heading id="color-heading" level={2}>
              Semantic color
            </Heading>
            <ul className="grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 lg:grid-cols-5">
              {colorTokens.map(([label, colorClass]) => (
                <li key={label}>
                  <Card className="h-full p-3 sm:p-4">
                    <div
                      aria-hidden="true"
                      className={`rounded-control border-border mb-3 aspect-[3/2] border ${colorClass}`}
                    />
                    <Text as="span" className="font-semibold" size="small">
                      {label}
                    </Text>
                  </Card>
                </li>
              ))}
            </ul>
          </Stack>
        </Container>
      </Section>

      <Divider />

      <Section aria-labelledby="type-heading" spacing="compact">
        <Container>
          <Stack gap="large">
            <Heading id="type-heading" level={2}>
              Typography
            </Heading>
            <Card>
              <Stack gap="large">
                <Heading level={3} size="display">
                  Practical clarity
                </Heading>
                <Heading level={3} size="large">
                  Calm confidence
                </Heading>
                <Text size="large" tone="secondary">
                  Readable type, comfortable line length, and a resilient system
                  font stack keep the foundation fast and familiar.
                </Text>
                <Text>
                  Heading levels follow document structure; visual size is a
                  separate choice. Body copy is designed to remain readable on a
                  small phone and when users zoom.
                </Text>
              </Stack>
            </Card>
          </Stack>
        </Container>
      </Section>

      <Divider />

      <Section aria-labelledby="interaction-heading" spacing="compact">
        <Container>
          <Stack gap="large">
            <Heading id="interaction-heading" level={2}>
              Interaction
            </Heading>
            <Card>
              <Stack gap="large">
                <Cluster>
                  <Button>Primary button</Button>
                  <Button variant="secondary">Secondary button</Button>
                  <Button variant="quiet">Quiet button</Button>
                  <Button disabled>Disabled button</Button>
                </Cluster>
                <Cluster>
                  <StyledLink href="#status-heading" variant="primary">
                    Primary link
                  </StyledLink>
                  <StyledLink href="/" variant="secondary">
                    Foundation page
                  </StyledLink>
                  <StyledLink href="#surface-heading">Text link</StyledLink>
                </Cluster>
                <Text size="small" tone="secondary">
                  Use Tab to review the visible focus indicator. Controls meet
                  the 44-pixel minimum touch target.
                </Text>
              </Stack>
            </Card>
          </Stack>
        </Container>
      </Section>

      <Divider />

      <Section aria-labelledby="surface-heading" spacing="compact">
        <Container>
          <Stack gap="large">
            <Heading id="surface-heading" level={2}>
              Surfaces and notices
            </Heading>
            <div className="grid gap-4 md:grid-cols-2">
              <Card as="article">
                <Stack>
                  <Heading level={3} size="small">
                    Restrained card
                  </Heading>
                  <Text tone="secondary">
                    A controlled radius, visible boundary, and soft shadow
                    separate related content without excessive decoration.
                  </Text>
                </Stack>
              </Card>
              <Stack>
                <Notice title="Informational notice" tone="information">
                  <p>
                    Use notices for concise context that helps a reader act.
                  </p>
                </Notice>
                <Notice title="Neutral notice">
                  <p>Neutral notices avoid overstating importance.</p>
                </Notice>
              </Stack>
            </div>
          </Stack>
        </Container>
      </Section>

      <Divider />

      <Section aria-labelledby="status-heading" spacing="compact">
        <Container>
          <Stack gap="large">
            <Stack gap="small">
              <Heading id="status-heading" level={2}>
                Product status
              </Heading>
              <Text tone="secondary">
                Meaning is communicated through consistent visible wording, not
                color alone.
              </Text>
            </Stack>
            <ul className="grid list-none gap-4 p-0 md:grid-cols-2">
              {statusNames.map((status) => (
                <li key={status}>
                  <Card className="h-full">
                    <ProductStatus
                      explanation={productStatuses[status].description}
                      status={status}
                    />
                  </Card>
                </li>
              ))}
            </ul>
          </Stack>
        </Container>
      </Section>
    </PageShell>
  );
}
