import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import AboutPage from "@/app/about/page";
import ForSellersPage from "@/app/for-sellers/page";
import HowItWorksPage from "@/app/how-it-works/page";
import HomePage from "@/app/page";
import { aboutCopy } from "@/lib/content/about-copy";
import { forSellersCopy } from "@/lib/content/for-sellers-copy";
import { howItWorksCopy } from "@/lib/content/how-it-works-copy";

const pages = [
  ["home", HomePage],
  ["for sellers", ForSellersPage],
  ["how it works", HowItWorksPage],
  ["about", AboutPage],
] as const;

const publicRoutes = ["/", "/for-sellers", "/how-it-works", "/about"];

// CLM-010: the only approved external destination on the public site.
const webAppSignInHref = "https://app.kitamo.online/login";

const renderPage = (Page: (typeof pages)[number][1]) =>
  renderToStaticMarkup(<Page />);

describe("WEB-4 shared public site", () => {
  it.each(pages)("renders %s with one H1 and shared landmarks", (_, Page) => {
    const markup = renderPage(Page);

    expect(markup.match(/<h1(?:\s|>)/g)).toHaveLength(1);
    expect(markup).toContain("<header");
    expect(markup).toContain('id="main-content"');
    expect(markup).toContain("<footer");
    expect(markup).toContain("Currently Testing");
  });

  it.each(pages)("links every implemented route from %s", (_, Page) => {
    const markup = renderPage(Page);

    for (const route of publicRoutes) {
      expect(markup).toContain(`href="${route}"`);
    }
  });

  it("uses native mobile navigation without exposing deferred routes", () => {
    const markup = renderPage(HomePage);

    expect(markup).toContain("<details");
    expect(markup).toContain("<summary");
    expect(markup).toContain("Menu");
    for (const deferredRoute of [
      "/support",
      "/privacy",
      "/terms",
      "/delete-account",
      "/pricing",
    ]) {
      expect(markup).not.toContain(`href="${deferredRoute}"`);
    }
  });

  it("keeps shared navigation to implemented routes and the approved sign-in link", () => {
    const markup = renderPage(HomePage);
    const hrefs = Array.from(
      markup.matchAll(/<a\b[^>]*href="([^"]+)"/g),
      (match) => match[1],
    );
    const allowed = new Set([
      ...publicRoutes,
      "/#testing-status",
      "#main-content",
      "#testing-status",
      webAppSignInHref,
    ]);

    for (const href of hrefs) {
      expect(allowed.has(href)).toBe(true);
    }
  });

  it.each(pages)(
    "offers Sign in as a secondary header, menu, and footer link on %s",
    (_, Page) => {
      const markup = renderPage(Page);
      const signInLinks = Array.from(
        markup.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g),
      ).filter(([, attributes]) =>
        attributes.includes(`href="${webAppSignInHref}"`),
      );

      // Desktop navigation, mobile menu, and footer.
      expect(signInLinks).toHaveLength(3);
      for (const [, attributes, label] of signInLinks) {
        expect(label).toBe("Sign in");
        // Primary-action styling is reserved for the page's one primary action.
        expect(attributes).not.toContain("bg-action");
      }
    },
  );
});

describe("WEB-4 For Sellers", () => {
  it("states the intended audience without an adoption claim", () => {
    const markup = renderPage(ForSellersPage);

    expect(markup).toContain(forSellersCopy.hero.heading);
    expect(markup).toContain("Intended contexts");
    expect(markup).toContain("not customer, adoption, or universal-fit claims");
    expect(markup).toContain('href="/how-it-works"');
    expect(markup.toLowerCase()).not.toContain("trusted by");
    expect(markup.toLowerCase()).not.toContain("active customers");
  });
});

describe("WEB-4 How It Works", () => {
  it("shows approved capabilities and explicit current limitations", () => {
    const markup = renderPage(HowItWorksPage);

    expect(markup).toContain(howItWorksCopy.hero.heading);
    expect(markup).toContain("Record sales");
    expect(markup).toContain("Track inventory");
    expect(markup).toContain("Review business records");
    expect(markup).toContain("What the current test does not include");
    expect(markup).toContain("No automatic cloud synchronization or backup");
    expect(markup).toContain("No online KitaMo account");
    expect(markup.toLowerCase()).not.toContain("cloud sync available");
    expect(markup.toLowerCase()).not.toContain("ai-powered");
  });
});

describe("WEB-4 About", () => {
  it("separates current testing from noncommittal future direction", () => {
    const markup = renderPage(AboutPage);

    expect(markup).toContain(aboutCopy.current.heading);
    expect(markup).toContain("Future Vision");
    expect(markup).toContain("not a delivery commitment");
    expect(markup).toContain(
      "No specific feature or delivery timing is promised",
    );
    expect(markup.toLowerCase()).not.toContain("nationwide impact");
    expect(markup.toLowerCase()).not.toContain("government endorsement");
    expect(markup.toLowerCase()).not.toContain("partnership");
  });
});

describe("WEB-4 prohibited public language", () => {
  it.each(pages)("keeps prohibited phrases off %s", (_, Page) => {
    const markup = renderPage(Page).toLowerCase();

    for (const phrase of [
      "download now",
      "available now",
      "join thousands",
      "ai-powered",
      "start free",
      "sign up",
      "create account",
      "cloud sync available",
    ]) {
      expect(markup).not.toContain(phrase);
    }
  });
});
