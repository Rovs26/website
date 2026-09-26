/**
 * For sellers copy, approved in docs/content/mr-1-marketing-content-contract.md.
 * Store types are intended contexts, not adoption claims (CLM-005 wording).
 * Each "uses" line restates a capability claim; recipe costing is not in the
 * web app and is not mentioned.
 */
export const forSellersCopy = {
  metadata: {
    title: "For sellers",
    description:
      "How sari-sari stores, karinderias, food stalls, market stalls and home businesses use KitaMo at the counter.",
  },
  hero: {
    heading: "For sellers.",
    introduction:
      "Every counter uses KitaMo a little differently. Here is what each kind of seller leans on.",
  },
  sellers: [
    {
      id: "sari-sari",
      name: "Sari-sari store",
      uses: [
        {
          word: "Paninda",
          text: "Stock counts across many small items, with low and out-of-stock tags.",
        },
        {
          word: "Benta",
          text: "Bundles such as “8 for ₱150”, Sakto, and the sukli worked out for you.",
        },
        { word: "Utang", text: "Sa iyo for regular customers who pay later." },
      ],
    },
    {
      id: "karinderia",
      name: "Karinderia",
      uses: [
        {
          word: "Sira",
          text: "Log leftover ulam at closing, so it comes off the day's tubo.",
        },
        {
          word: "Gastos",
          text: "Kuryente, tubig, upa and sahod as repeating bills.",
        },
        {
          word: "Benta",
          text: "Tap each order at the counter and give the sukli.",
        },
      ],
      photo: {
        src: "/marketing/S2-karinderia-4x5.jpg",
        width: 1611,
        height: 2000,
        alt: "A hand holding a phone that shows the KitaMo Sell screen, in front of a karinderia's trays of food.",
        caption:
          "A karinderia counter at closing time. Illustration. Screens show the KitaMo web app with sample data.",
      },
    },
    {
      id: "food-stall",
      name: "Food stall",
      uses: [
        {
          word: "Benta",
          text: "A quick checkout, with GCash or Maya reference numbers tagged to each sale.",
        },
        {
          word: "Sira",
          text: "Food that didn't sell, logged before you pack up.",
        },
        { word: "Kita", text: "The day's tubo when you close." },
      ],
    },
    {
      id: "market-stall",
      name: "Market stall",
      uses: [
        {
          word: "Utang",
          text: "Utang mo for suppliers you owe, Sa iyo for suki who pay later.",
        },
        {
          word: "Sira",
          text: "Spoiled stock logged, so it counts against tubo.",
        },
        { word: "Paninda", text: "Stock counts and low-stock tags." },
      ],
    },
    {
      id: "home-business",
      name: "Home business",
      uses: [
        {
          word: "Benta",
          text: "Record orders on your phone. A tablet is optional.",
        },
        { word: "Utang", text: "Sa iyo for orders paid later." },
        {
          word: "Kita",
          text: "Week and month views, and the items that earn the most.",
        },
      ],
    },
  ],
} as const;
