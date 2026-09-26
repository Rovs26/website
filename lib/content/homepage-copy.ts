import { sharedCopy } from "@/lib/content/shared-copy";

/**
 * Homepage copy, approved in docs/content/mr-1-marketing-content-contract.md.
 * Claim IDs refer to docs/governance/public-claims-register.md.
 */
export const homepageCopy = {
  metadata: {
    title: "KitaMo · Your lista, with the math done.",
    description:
      "KitaMo is a web app for Filipino micro-sellers. Sell at the counter, track stock, log bills and utang, and see what you really earn each day. Free while in testing.",
  },
  hero: {
    heading: sharedCopy.tagline,
    // CLM-014, CLM-016, CLM-017, CLM-020.
    introduction:
      "Sell, track stock and see what you really earn each day, on your phone or a tablet at the counter.",
  },
  // CLM-020: the profit formula and the missing-cost behaviour.
  formula: {
    label:
      "Tubo (profit) equals Benta (sales) minus Puhunan (cost of goods) minus Bayarin (expenses) minus Sira (spoilage).",
    terms: [
      { word: "Tubo", gloss: "profit", after: "=" },
      { word: "Benta", gloss: "sales" },
      { before: "−", word: "Puhunan", gloss: "cost of goods" },
      { before: "−", word: "Bayarin", gloss: "expenses" },
      { before: "−", word: "Sira", gloss: "spoilage" },
    ],
    line: "Every peso accounted for. If a cost is missing, KitaMo tells you instead of guessing.",
    receipt: {
      context: "An example day",
      store: "Aling Nena's Sari-sari",
      date: "Kita · Fri, Sep 25",
      rows: [
        { label: "Benta", amount: "₱4,850.00" },
        { label: "Puhunan", amount: "− ₱3,120.00" },
        { label: "Bayarin", amount: "− ₱350.00" },
        { label: "Sira", amount: "− ₱45.00" },
      ],
      totalLabel: "Tubo",
      total: "₱1,335.00",
    },
  },
  routine: {
    heading: "The daily routine.",
    items: [
      {
        plate: "P2",
        word: "Benta",
        english: "Sell",
        // CLM-016.
        text: "Tap items on a shelf. Bundles such as “8 for ₱150”. Sakto and sukli. Tag GCash, Maya or bank payments with their reference number.",
      },
      {
        plate: "P3",
        word: "Paninda",
        english: "Products",
        // CLM-017.
        text: "Stock counts, low and out-of-stock at a glance, and a log for spoilage (sira).",
      },
      {
        plate: "P4",
        word: "Utang",
        english: "Credit",
        // CLM-018.
        text: "Sa iyo for customers who owe you, Utang mo for suppliers you owe.",
      },
      {
        plate: "P5",
        word: "Gastos",
        english: "Expenses",
        // CLM-019.
        text: "Upa, kuryente, tubig, wifi and sahod as repeating bills.",
      },
      {
        plate: "P6",
        word: "Kita",
        english: "Profit",
        // CLM-020.
        text: "Today, this week and this month, a 4-week trend, and your top earners.",
      },
    ],
  },
  // Intended contexts only (CLM-005 wording, re-scoped to the web app).
  sellers: {
    heading: "For sellers like you.",
    link: "What each kind of seller uses",
    names: [
      "Sari-sari store",
      "Karinderia",
      "Food stall",
      "Market stall",
      "Home business",
    ],
  },
  counter: {
    heading: "Made for the counter.",
    photoAlt:
      "A store owner behind a wooden sari-sari counter, pointing at a tablet on a stand that shows the KitaMo Sell screen.",
    caption: `KitaMo on a tablet at the counter. ${sharedCopy.illustrationCaption}`,
    // CLM-014, CLM-021, CLM-015.
    items: [
      'Big buttons on an 8" tablet.',
      "A Hidden money view, so customers don't see your totals.",
      "Made for low-cost phones and tablets.",
      "English or Filipino.",
    ],
  },
  steps: {
    heading: "Start in three steps.",
    items: ["Create an account.", "Add your paninda.", "Make your first sale."],
  },
  faq: {
    heading: "Straight answers.",
    items: [
      {
        // CLM-023.
        question: "Does it need internet?",
        answer: "Yes, the web app needs a connection.",
      },
      {
        // CLM-016 negative.
        question: "Does it take payments?",
        answer:
          "No. It records how you were paid. The money moves in GCash, Maya or your bank as usual.",
      },
      {
        // CLM-022.
        question: "Is the receipt official?",
        answer:
          "No. It is a record for you and your customer, not a BIR receipt.",
      },
      {
        // CLM-012.
        question: "Is it free?",
        answer:
          "Free while in testing. Any future charge is announced first and needs your agreement.",
      },
      {
        // CLM-002, CLM-003, CLM-006: the Android pilot, re-scoped to one answer.
        question: "Is there an Android app?",
        answer:
          "An offline Android version is Currently Testing and not yet available.",
      },
    ],
  },
} as const;
