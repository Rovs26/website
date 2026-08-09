export const howItWorksCopy = {
  metadata: {
    title: "How KitaMo Works | Android App Currently Testing",
    description:
      "Learn about the local sales, inventory, and business-record workflows in the KitaMo Android test experience.",
  },
  hero: {
    heading: "Keep everyday business records easier to follow.",
    introduction:
      "KitaMo is an Android business app currently testing a focused set of local workflows for Filipino small-business owners and sellers.",
  },
  steps: {
    eyebrow: "Current workflow",
    heading: "From setup to review on one device",
    introduction:
      "These steps summarize the current test experience. They do not describe an account, online service, or payment-processing flow.",
    items: [
      {
        heading: "Set up the business",
        body: "Set up the basic business information used by the current test app on the device.",
      },
      {
        heading: "Record sales",
        body: "Keep a local record of everyday business sales in the current test app.",
      },
      {
        heading: "Track inventory",
        body: "Record products and stock changes for the business set up on the device.",
      },
      {
        heading: "Review business records",
        body: "Look back at sales, inventory records, and the local reports available in the test app.",
      },
    ],
  },
  local: {
    eyebrow: "Local by design",
    heading: "Your current records stay with the app on your device.",
    body: "The current sales, inventory, and reporting workflows do not require an internet connection. The test does not provide automatic cloud synchronization or backup.",
    responsibility:
      "Anyone using the current test remains responsible for preserving important records because they are not automatically copied to another device or recovery service.",
  },
  limitations: {
    eyebrow: "Current limitations",
    heading: "What the current test does not include",
    introduction:
      "These boundaries keep the testing state clear and should not be read as promises about future delivery.",
    items: [
      "No automatic cloud synchronization or backup",
      "No online KitaMo account",
      "No open public download or tester enrollment",
    ],
  },
  actions: {
    primary: "See who KitaMo is for",
    secondary: "View testing status",
  },
} as const;
