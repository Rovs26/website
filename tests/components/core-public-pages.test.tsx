import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import AboutPage, { metadata as aboutMetadata } from "@/app/about/page";
import ForSellersPage, {
  metadata as forSellersMetadata,
} from "@/app/for-sellers/page";
import HowItWorksPage, {
  metadata as howItWorksMetadata,
} from "@/app/how-it-works/page";
import HomePage, { metadata as homeMetadata } from "@/app/page";
import { forSellersCopy } from "@/lib/content/for-sellers-copy";
import { howItWorksCopy } from "@/lib/content/how-it-works-copy";
import {
  createAccountLink,
  webAppSignInLink,
} from "@/lib/content/site-navigation";
import {
  allowedHrefs,
  hrefsIn,
  linksTo,
  publicRoutes,
} from "@/tests/helpers/markup";

const pages = [
  ["home", HomePage, homeMetadata, "/"],
  ["for sellers", ForSellersPage, forSellersMetadata, "/for-sellers"],
  ["how it works", HowItWorksPage, howItWorksMetadata, "/how-it-works"],
  ["about", AboutPage, aboutMetadata, "/about"],
] as const;

const renderPage = (Page: (typeof pages)[number][1]) =>
  renderToStaticMarkup(<Page />);

describe("MR-1 shared public site", () => {
  it.each(pages)("renders %s with one H1 and shared landmarks", (_, Page) => {
    const markup = renderPage(Page);

    expect(markup.match(/<h1(?:\s|>)/g)).toHaveLength(1);
    expect(markup).toContain("<header");
    expect(markup).toContain('id="main-content"');
    expect(markup).toContain("<footer");
  });

  it.each(pages)("links every public route from %s", (_, Page) => {
    const markup = renderPage(Page);

    for (const route of publicRoutes) {
      expect(markup).toContain(`href="${route}"`);
    }
  });

  it.each(pages)("links only to approved destinations from %s", (_, Page) => {
    for (const href of hrefsIn(renderPage(Page))) {
      expect(allowedHrefs.has(href)).toBe(true);
    }
  });

  it("uses a native disclosure for the mobile menu", () => {
    const markup = renderPage(HomePage);

    expect(markup).toContain("<details");
    expect(markup).toContain("<summary");
    expect(markup).toContain("Menu");
  });

  it.each(pages)(
    "offers Create free account as the primary action on %s",
    (_, Page) => {
      const links = linksTo(renderPage(Page), createAccountLink.href);

      expect(links.length).toBeGreaterThanOrEqual(3);
      for (const link of links) {
        expect(link.label).toBe("Create free account");
        expect(link.attributes).toContain("bg-action");
      }
    },
  );

  it.each(pages)(
    "keeps Sign in secondary in the header, menu and footer of %s",
    (_, Page) => {
      const links = linksTo(renderPage(Page), webAppSignInLink.href);

      // Desktop header, mobile menu and footer; the homepage hero adds one.
      expect(links.length).toBeGreaterThanOrEqual(3);
      for (const link of links) {
        expect(link.label).toBe("Sign in");
        expect(link.attributes).not.toContain("bg-action");
      }
    },
  );

  it.each(pages)("gives %s its own canonical and share URL", (...page) => {
    const [, , metadata, route] = page;

    expect(metadata.alternates?.canonical).toBe(route);
    expect(metadata.openGraph?.url).toBe(route);
  });
});

describe("MR-1 How it works", () => {
  it("walks the five steps and lists what KitaMo doesn't do", () => {
    const markup = renderPage(HowItWorksPage);

    for (const step of howItWorksCopy.steps) {
      expect(markup).toContain(step.heading);
    }
    for (const limit of howItWorksCopy.limits.items) {
      expect(markup).toContain(limit.replaceAll("'", "&#x27;"));
    }
  });
});

describe("MR-1 For sellers", () => {
  it("names each intended context without recipe or adoption claims", () => {
    const markup = renderPage(ForSellersPage).toLowerCase();

    for (const seller of forSellersCopy.sellers) {
      expect(markup).toContain(seller.name.toLowerCase());
    }
    // Recipe costing is only in the Android pilot, not the web app.
    expect(markup).not.toContain("recipe");
    expect(markup).not.toContain("trusted by");
    expect(markup).not.toContain("active customers");
  });
});

describe("MR-1 About", () => {
  it("states each product with a controlled status", () => {
    const markup = renderPage(AboutPage);

    expect(markup).toContain('data-product-status="available"');
    expect(markup).toContain("Available Today");
    expect(markup).toContain('data-product-status="testing"');
    expect(markup).toContain("Currently Testing");
    expect(markup).toContain("Any future charge is announced first");
  });
});

describe("MR-1 prohibited public language", () => {
  it.each(pages)("keeps prohibited phrases off %s", (_, Page) => {
    const markup = renderPage(Page).toLowerCase();

    for (const phrase of [
      "download now",
      "available now",
      "join thousands",
      "trusted by",
      "ai-powered",
      "start free",
      "get started",
      "sign up",
      "cloud sync",
      "subscribe",
      "guaranteed",
      "seamless",
      "all-in-one",
    ]) {
      expect(markup).not.toContain(phrase);
    }
  });
});
