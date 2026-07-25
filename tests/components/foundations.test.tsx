import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { Button } from "@/components/primitives/button";
import { Heading } from "@/components/primitives/heading";
import { SkipLink } from "@/components/primitives/skip-link";
import { StyledLink } from "@/components/primitives/styled-link";
import { ProductStatus } from "@/components/status/product-status";
import { foundationCopy } from "@/lib/content/foundation-copy";
import { productStatuses } from "@/lib/content/product-status";
import { siteMetadata } from "@/lib/metadata/site";

describe("foundational semantics", () => {
  it("renders the controlled label and accessible status text", () => {
    const markup = renderToStaticMarkup(
      <ProductStatus explanation="Limited pilot." status="testing" />,
    );

    expect(markup).toContain('data-product-status="testing"');
    expect(markup).toContain("Product status: ");
    expect(markup).toContain(productStatuses.testing.label);
    expect(markup).toContain("Limited pilot.");
  });

  it("renders every controlled product-status label", () => {
    const markup = Object.keys(productStatuses)
      .map((status) =>
        renderToStaticMarkup(
          <ProductStatus status={status as keyof typeof productStatuses} />,
        ),
      )
      .join("");

    for (const definition of Object.values(productStatuses)) {
      expect(markup).toContain(definition.label);
    }
  });

  it("uses safe default button behavior and native disabled semantics", () => {
    const markup = renderToStaticMarkup(
      <Button disabled>Save foundation</Button>,
    );

    expect(markup).toContain("<button");
    expect(markup).toContain('type="button"');
    expect(markup).toContain("disabled");
    expect(markup).toContain("Save foundation");
  });

  it("preserves native link semantics", () => {
    const markup = renderToStaticMarkup(
      <StyledLink href="/review">Open review</StyledLink>,
    );

    expect(markup).toContain("<a");
    expect(markup).toContain('href="/review"');
    expect(markup).toContain("Open review");
  });

  it("provides a skip link to the main landmark", () => {
    const markup = renderToStaticMarkup(<SkipLink />);

    expect(markup).toContain('href="#main-content"');
    expect(markup).toContain("Skip to main content");
  });

  it("keeps heading semantics separate from visual size", () => {
    const markup = renderToStaticMarkup(
      <Heading level={3} size="display">
        Semantic heading
      </Heading>,
    );

    expect(markup).toMatch(/^<h3/);
    expect(markup).toContain("Semantic heading</h3>");
  });
});

describe("temporary public copy", () => {
  it("avoids promotional and availability claims", () => {
    const copy = Object.values(foundationCopy).join(" ").toLowerCase();
    const unsupportedPhrases = [
      "available now",
      "best",
      "customers",
      "download",
      "ai magic",
      "pricing",
      "public release",
    ];

    for (const phrase of unsupportedPhrases) {
      expect(copy).not.toContain(phrase);
    }
  });

  it("keeps the temporary foundation out of search indexes", () => {
    expect(siteMetadata.robots).toMatchObject({
      follow: false,
      index: false,
      nocache: true,
    });
  });
});
