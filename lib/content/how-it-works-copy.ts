/**
 * How it works copy, approved in docs/content/mr-1-marketing-content-contract.md.
 */
export const howItWorksCopy = {
  metadata: {
    title: "How it works",
    description:
      "One day at the counter with KitaMo: set up your store, add your paninda, sell, record gastos and utang, and check the day's tubo.",
  },
  hero: {
    heading: "How it works.",
    introduction:
      "One day at the counter, from setting up your store to seeing the day's tubo.",
  },
  steps: [
    {
      heading: "Create an account and set up your business.",
      // CLM-013, CLM-015.
      body: "Add your store's name and choose English or Filipino. You can change the language at any time.",
    },
    {
      heading: "Add your paninda.",
      // CLM-017.
      body: "Enter each item with its price and its puhunan. KitaMo keeps the stock count and tags items that run low or run out.",
    },
    {
      heading: "Sell at the counter.",
      // CLM-016. Worded for the keypad and Sakto that production has today.
      body: "Tap items on the shelf, then take the payment. Enter the cash you received, or tap Sakto, and KitaMo works out the sukli. Tag GCash, Maya or bank payments with their reference number.",
    },
    {
      heading: "Record gastos and utang.",
      // CLM-019, CLM-018.
      body: "Set upa, kuryente, tubig, wifi and sahod as repeating bills. Under Utang, Sa iyo lists customers who owe you and Utang mo lists suppliers you owe.",
    },
    {
      heading: "Check Kita at the end of the day.",
      // CLM-020.
      body: "Kita shows your tubo for today, this week and this month, a 4-week trend, and the items that earned the most.",
    },
  ],
  limits: {
    heading: "What KitaMo doesn't do.",
    // CLM-023, CLM-016 negative, CLM-022, CLM-024.
    items: [
      "It needs internet.",
      "It records payments but doesn't move money.",
      "The receipt is not an official BIR receipt.",
      "There are no staff logins or multiple stalls yet.",
    ],
  },
} as const;
