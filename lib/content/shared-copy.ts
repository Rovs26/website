/**
 * Lines repeated across pages. Each traces to the claims register
 * (docs/governance/public-claims-register.md) and the MR-1 content contract.
 */
export const sharedCopy = {
  tagline: "Your lista, with the math done.",
  // CLM-012 (free while in testing), CLM-014 (browser), CLM-015 (languages).
  reassurance:
    "Free while in testing · Works in your browser · English or Filipino.",
  // CLM-026: every product picture says what it shows.
  screensCaption: "Screens show the KitaMo web app with sample data.",
  illustrationCaption:
    "Illustration. Screens show the KitaMo web app with sample data.",
} as const;
