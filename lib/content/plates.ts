/**
 * Screen plates: flat captures of the KitaMo web app (Ledger design) with the
 * sample store "Aling Nena's Sari-sari". Source and figures:
 * docs/redesign/generation-kit/README.md. The figures agree across plates.
 */
export const plates = {
  T1: {
    src: "/plates/T1-kita.png",
    width: 1280,
    height: 800,
    kind: "tablet",
    alt: "KitaMo on a tablet, Profit screen: ₱1,335.00 profit today from ₱4,850.00 sales, with cost of goods, expenses and spoilage taken off, and a 4-week profit trend.",
  },
  T2: {
    src: "/plates/T2-benta.png",
    width: 1280,
    height: 800,
    kind: "tablet",
    alt: "KitaMo on a tablet, Sell screen: a shelf of products beside the current sale of 10 items, total ₱183.00.",
  },
  P1: {
    src: "/plates/P1-benta.png",
    width: 1080,
    height: 2340,
    kind: "phone",
    alt: "KitaMo on a phone, Sell screen: favourite products with stock left, and a cart of 10 items for ₱183.00.",
  },
  P2: {
    src: "/plates/P2-checkout.png",
    width: 1080,
    height: 2340,
    kind: "phone",
    alt: "KitaMo checkout on a phone: ₱183.00 total, cash chosen, ₱200.00 received, change ₱17.00.",
  },
  P3: {
    src: "/plates/P3-paninda.png",
    width: 1080,
    height: 2340,
    kind: "phone",
    alt: "KitaMo products list on a phone, with low and out-of-stock tags and one item marked as missing its cost.",
  },
  P4: {
    src: "/plates/P4-utang.png",
    width: 1080,
    height: 2340,
    kind: "phone",
    alt: "KitaMo credit screen on a phone: customers owe you ₱505.50 across 2 customers.",
  },
  P5: {
    src: "/plates/P5-gastos.png",
    width: 1080,
    height: 2340,
    kind: "phone",
    alt: "KitaMo expenses screen on a phone: September bills of ₱6,569.00, with rent and wifi paid and electricity and water still to pay.",
  },
  P6: {
    src: "/plates/P6-kita-week.png",
    width: 1080,
    height: 2340,
    kind: "phone",
    alt: "KitaMo profit screen on a phone for the week of Sep 21 to 27: ₱5,260.00 profit, a 4-week trend and the top earning items.",
  },
  P7: {
    src: "/plates/P7-kita-hidden.png",
    width: 1080,
    height: 2340,
    kind: "phone",
    alt: "KitaMo profit screen on a phone in the Hidden money view: counts of sales and items are shown, peso totals are hidden.",
  },
} as const;

export type PlateKey = keyof typeof plates;
