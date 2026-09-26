import { sharedCopy } from "@/lib/content/shared-copy";

/**
 * About copy, approved in docs/content/mr-1-marketing-content-contract.md.
 */
export const aboutCopy = {
  metadata: {
    title: "About",
    description:
      "Why KitaMo exists and where it stands: the web app is free while in testing, and an offline Android version is Currently Testing.",
  },
  hero: {
    heading: "About KitaMo.",
    // CLM-011, CLM-016 to CLM-020.
    introduction:
      "KitaMo is a web app for Filipino micro-sellers: sari-sari stores, karinderias, food stalls, market stalls and home businesses. You sell at the counter, track stock, log bills and spoilage, keep utang both ways, and see what you really earned each day.",
  },
  why: {
    eyebrow: "Why",
    heading: sharedCopy.tagline,
    body: "Most owners keep a paper lista and have never used accounting software. KitaMo keeps the same list and does the adding and subtracting, so the day's tubo is ready when you close.",
    // Non-breaking spaces bind each operator to the next word, so a line
    // never ends on "−".
    formula: "Tubo =\u00a0Benta −\u00a0Puhunan −\u00a0Bayarin −\u00a0Sira",
  },
  standing: {
    heading: "Where it stands.",
    items: [
      {
        // CLM-011 (Available Today), CLM-012.
        name: "Web app",
        status: "available",
        body: "Free while in testing. Open it in your browser at app.kitamo.online. Any future charge is announced first and needs your agreement.",
      },
      {
        // CLM-002, CLM-003, CLM-006.
        name: "Android app, offline",
        status: "testing",
        body: "Not yet available.",
      },
    ],
  },
  help: {
    heading: "Need help?",
    body: "Questions about your account or the app go to Support.",
    link: {
      href: "https://app.kitamo.online/support",
      label: "app.kitamo.online/support",
    },
  },
  closing: {
    heading: "Try it at your counter.",
  },
} as const;
