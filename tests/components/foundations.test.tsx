import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { Button } from "@/components/primitives/button";
import { Heading } from "@/components/primitives/heading";
import { SkipLink } from "@/components/primitives/skip-link";
import { StyledLink } from "@/components/primitives/styled-link";
import { ProductStatus } from "@/components/status/product-status";
import { productStatuses } from "@/lib/content/product-status";
import sitemap from "@/app/sitemap";
import { siteMetadata, siteOrigin } from "@/lib/metadata/site";

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

describe("public indexing baseline", () => {
  // Changed by ADR-0011. The pre-domain posture was noindex, which contradicted
  // app/robots.ts already allowing "/". The domain is live and the copy is the
  // approved WEB-3/WEB-4 content, so the site is now indexable.
  it("lets search engines index the public site", () => {
    expect(siteMetadata.robots).toMatchObject({
      follow: true,
      index: true,
    });
  });

  it("declares the apex as the canonical origin", () => {
    expect(siteOrigin).toBe("https://kitamo.online");
    expect(siteMetadata.metadataBase?.toString()).toBe(
      "https://kitamo.online/",
    );
    expect(siteMetadata.alternates?.canonical).toBe("/");
  });

  it("lists only existing, approved routes in the sitemap", () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(urls).toEqual([
      "https://kitamo.online/",
      "https://kitamo.online/for-sellers",
      "https://kitamo.online/how-it-works",
      "https://kitamo.online/about",
    ]);
    // /design-system is a development-only review route.
    expect(urls.some((url) => url.includes("design-system"))).toBe(false);
  });
});
