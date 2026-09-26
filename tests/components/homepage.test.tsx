import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import HomePage from "@/app/page";
import { homepageCopy } from "@/lib/content/homepage-copy";
import { sharedCopy } from "@/lib/content/shared-copy";
import { createAccountLink } from "@/lib/content/site-navigation";
import { allowedHrefs, hrefsIn, linksTo } from "@/tests/helpers/markup";

const renderHomepage = () => renderToStaticMarkup(<HomePage />);

const pesos = (amount: string) =>
  Number(amount.replace(/[^\d.]/g, "")) * (amount.includes("−") ? -1 : 1);

describe("MR-1 homepage", () => {
  it("renders one H1 with the tagline", () => {
    const markup = renderHomepage();

    expect(markup.match(/<h1(?:\s|>)/g)).toHaveLength(1);
    expect(markup).toContain(homepageCopy.hero.heading);
  });

  it("makes Create free account the primary action (CLM-013)", () => {
    const links = linksTo(renderHomepage(), createAccountLink.href);

    // Header (wide and narrow), hero, three steps, closing band.
    expect(links.length).toBeGreaterThanOrEqual(4);
    for (const link of links) {
      expect(link.label).toBe("Create free account");
      expect(link.attributes).toContain("bg-action");
    }
  });

  it("links only to the site's routes and the approved web-app pages", () => {
    const hrefs = hrefsIn(renderHomepage());

    expect(hrefs.length).toBeGreaterThan(0);
    for (const href of hrefs) {
      expect(allowedHrefs.has(href)).toBe(true);
    }
  });

  it("states the Android pilot only as Currently Testing", () => {
    const markup = renderHomepage();

    expect(markup).toContain(
      "An offline Android version is Currently Testing and not yet available.",
    );
    // "offline" describes the Android pilot and nothing else (CLM-023).
    expect(markup.toLowerCase().match(/offline/g)).toHaveLength(1);
  });

  it("answers the limits next to the claims", () => {
    const markup = renderHomepage();

    expect(markup).toContain("<details");
    expect(markup).toContain("Yes, the web app needs a connection.");
    expect(markup).toContain("It records how you were paid.");
    expect(markup).toContain("not a BIR receipt");
    expect(markup).toContain("Free while in testing.");
  });

  it("captions every product picture", () => {
    const markup = renderHomepage();

    expect(markup).toContain(sharedCopy.screensCaption);
    expect(markup).toContain(sharedCopy.illustrationCaption);
  });

  it("keeps the receipt's figures adding up to Tubo (CLM-020)", () => {
    const { rows, total } = homepageCopy.formula.receipt;
    const sum = rows.reduce((running, row) => running + pesos(row.amount), 0);

    expect(sum).toBeCloseTo(pesos(total), 2);
    // Operators are the true minus sign followed by a space.
    for (const row of rows.slice(1)) {
      expect(row.amount.startsWith("− ₱")).toBe(true);
    }
  });
});
