import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import HomePage from "@/app/page";
import { homepageCopy } from "@/lib/content/homepage-copy";

const renderHomepage = () => renderToStaticMarkup(<HomePage />);

describe("WEB-3 homepage trust behavior", () => {
  it("renders one H1 and visibly identifies the testing state", () => {
    const markup = renderHomepage();

    expect(markup.match(/<h1(?:\s|>)/g)).toHaveLength(1);
    expect(markup).toContain(homepageCopy.hero.heading);
    expect(markup).toContain("Currently Testing");
    expect(markup).toContain('id="testing-status"');
  });

  it("uses only the approved informational CTA destinations", () => {
    const markup = renderHomepage();

    expect(markup).toContain('href="/how-it-works"');
    expect(markup).toContain('href="/for-sellers"');
    expect(markup).toContain('href="/about"');
    expect(markup).toContain('href="#testing-status"');
    expect(markup).toContain('href="/#testing-status"');

    const hrefs = Array.from(
      markup.matchAll(/<a\b[^>]*href="([^"]+)"/g),
      (match) => match[1],
    );
    const allowedHrefs = new Set([
      "/",
      "/about",
      "/for-sellers",
      "/how-it-works",
      "/#testing-status",
      "#main-content",
      "#testing-status",
    ]);

    expect(hrefs.length).toBeGreaterThan(0);
    for (const href of hrefs) {
      expect(allowedHrefs.has(href)).toBe(true);
    }
  });

  it("offers no public download or tester-enrollment action", () => {
    const markup = renderHomepage();
    const linkLabels = Array.from(
      markup.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g),
      (match) => match[1].replace(/<[^>]*>/g, " ").toLowerCase(),
    ).join(" ");

    for (const prohibitedAction of [
      "download",
      "get started",
      "join testing",
      "join now",
      "sign up",
      "waitlist",
    ]) {
      expect(linkLabels).not.toContain(prohibitedAction);
    }
  });

  it("does not present excluded products or future capabilities as available", () => {
    const markup = renderHomepage().toLowerCase();

    for (const prohibitedClaim of [
      "customer app is available",
      "cloud sync is available",
      "ai-powered",
      "public ai",
      "online account",
      "available now",
    ]) {
      expect(markup).not.toContain(prohibitedClaim);
    }
  });
});
