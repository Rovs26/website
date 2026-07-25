/**
 * The controlled public product-status vocabulary.
 *
 * These definitions are governance rules, not claims that any specific
 * capability currently has a particular status.
 */
export const productStatuses = {
  available: {
    label: "Available Today",
    description:
      "Implemented, verified, usable in an approved release, and approved for public communication.",
  },
  testing: {
    label: "Currently Testing",
    description:
      "Exists in a limited internal, invited, pilot, or otherwise controlled testing environment.",
  },
  planned: {
    label: "Planned",
    description: "Accepted into the roadmap but not currently available.",
  },
  future: {
    label: "Future Vision",
    description:
      "A directional possibility that may change and is not a delivery commitment.",
  },
} as const;

export type ProductStatusName = keyof typeof productStatuses;
