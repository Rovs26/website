import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { Heading } from "@/components/primitives/heading";
import { Notice } from "@/components/primitives/notice";
import { StyledLink } from "@/components/primitives/styled-link";
import { Text } from "@/components/primitives/text";
import { foundationCopy } from "@/lib/content/foundation-copy";
import { isInternalPreviewAvailable } from "@/lib/utilities/internal-preview";

export default function HomePage() {
  const showInternalPreview = isInternalPreviewAvailable(process.env.NODE_ENV);

  return (
    <PageShell>
      <Section aria-labelledby="foundation-heading">
        <Container>
          <Stack className="max-w-[var(--km-width-reading)]" gap="large">
            <Text
              as="p"
              className="text-action font-bold tracking-[0.12em] uppercase"
              size="small"
            >
              {foundationCopy.eyebrow}
            </Text>
            <Heading id="foundation-heading" level={1} size="display">
              {foundationCopy.heading}
            </Heading>
            <Text size="large" tone="secondary">
              {foundationCopy.introduction}
            </Text>
            <Notice title={foundationCopy.noticeTitle}>
              <p>{foundationCopy.noticeBody}</p>
            </Notice>
            {showInternalPreview ? (
              <div>
                <StyledLink href="/design-system" variant="secondary">
                  Review the design-system foundation
                </StyledLink>
              </div>
            ) : null}
          </Stack>
        </Container>
      </Section>
    </PageShell>
  );
}
