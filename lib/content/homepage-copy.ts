export const homepageCopy = {
  hero: {
    heading: "Simple business tools for everyday Filipino sellers.",
    introduction:
      "KitaMo is an Android business app being built to help small-business owners keep important day-to-day records organized, even when internet access is limited.",
    primaryAction: "See how KitaMo works",
    secondaryAction: "View testing status",
  },
  audience: {
    eyebrow: "Who KitaMo is for",
    heading: "Built around practical small-business settings",
    introduction:
      "KitaMo is being designed for Filipino small-business owners and sellers in everyday settings such as sari-sari stores, karinderias, food stalls, kiosks, market stalls, and home businesses.",
    boundary:
      "These are intended use contexts for the current test—not a claim that every kind of small business is already supported or using KitaMo.",
  },
  capabilities: {
    eyebrow: "How KitaMo works",
    heading: "A focused way to keep everyday records together",
    introduction:
      "The current Android test version covers a small set of local business-record workflows.",
    items: [
      {
        heading: "Record sales",
        body: "Keep a local record of everyday sales in the current test app.",
      },
      {
        heading: "Track inventory",
        body: "Record products and stock changes for the business set up on the device.",
      },
      {
        heading: "Review business records",
        body: "Look back at the sales, inventory records, and local reports available in the test app.",
      },
    ],
  },
  offline: {
    eyebrow: "Practical by design",
    heading: "Built with offline use in mind",
    body: "The current Android test version keeps its core business records on the device. Its current sales, inventory, and reporting workflows do not require an internet connection.",
    boundary:
      "Records remain on that device in this test version, so this is not a promise of automatic backup, recovery, or access from another device.",
  },
  testing: {
    heading: "A clear view of the current test",
    explanation: "Limited Android product testing; not an open public release.",
    body: "The present focus is the Android app for Filipino small-business owners and sellers. It is not an open public download, and this website does not offer tester enrollment.",
    changeNotice:
      "The product details on this page reflect the current test version and may change as testing continues. Ideas being explored for later are not presented here as part of the current app.",
  },
  footer: {
    statusLink: "Testing status",
  },
} as const;
