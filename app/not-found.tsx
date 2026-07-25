import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { Heading } from "@/components/primitives/heading";
import { StyledLink } from "@/components/primitives/styled-link";
import { Text } from "@/components/primitives/text";

export default function NotFound() {
  return (
    <PageShell>
      <Section aria-labelledby="not-found-heading">
        <Container size="reading">
          <Stack gap="large">
            <Heading id="not-found-heading" level={1} size="large">
              Page not found
            </Heading>
            <Text tone="secondary">
              The page you requested is not part of this website foundation.
            </Text>
            <div>
              <StyledLink href="/" variant="secondary">
                Return to KitaMo
              </StyledLink>
            </div>
          </Stack>
        </Container>
      </Section>
    </PageShell>
  );
}
