# kitamo.online redesign: round 2 prompt for Claude Design

Paste this into the same Claude Design project, below round 1.

---

The owner chose **1b Counter and resibo**. Keep its paper hero, the ink counter
band with the gold edge, and the formula printed as a white receipt. Fix the
points below first, then design everything that is still missing.

## Fixes to 1b

1. **The phone covers the tablet's profit numbers.** In both hero frames, the
   phone sits over "Profit today ₱1,335.00" and its four ledger rows. Those are
   the most important part of the picture. Move the phone so it overlaps only
   the tablet's right column (the chart, bills and top earners), or stand it
   beside the tablet. "Profit today" and all four rows must stay fully visible
   at 390 and at 1440.
2. **The phone's bottom is cut off at 1440.** The counter band hides the
   phone's Checkout bar and its tab bar. Both devices should stand on the
   counter with their whole screen visible.
3. **The side-by-side buttons break in Filipino.** On the phone, "Create free
   account" and "Sign in" share one row. The Filipino label ("Gumawa ng libreng
   account") will not fit beside Sign in at 360 px. Below 400 px, stack them at
   full width with the primary on top. Show a 360 px frame with the Filipino
   labels.
4. **The formula heading leaves a minus sign at the end of a line.** On the
   phone it reads "Tubo = Benta −", then "Puhunan − Bayarin −". Break before
   each operator, so every new line starts with "−". Alternatively, on the
   phone, stack the terms as a list. Show 360 px and 390 px.
5. **One gloss doesn't match the app.** Under _Bayarin_ the heading says
   "bills", but the app's English label for that line is "Expenses" (see the
   T1 plate). Use "expenses". The other glosses are correct: Tubo is profit,
   Benta is sales, Puhunan is cost of goods, Sira is spoilage.
6. **The week labels are wrong.** The app's weeks run Monday to Sunday. In
   2026, Sep 1, 8 and 15 fall on Tuesdays. The four bars are **Aug 31, Sep 7,
   Sep 14, This week**. We already fixed the exported T1 plate. Use the same
   labels in the hero and in every Kita plate.
7. **The tally can get stuck at ₱0.00.**
   - The receipt's rest state must always be the real figures.
   - Off-screen ledgers start at ₱0.00, and they count up only once 40% of the
     receipt is visible. At 200% zoom, or on a phone in landscape, the receipt
     can be taller than the screen, so that point is never reached and it stays
     at ₱0.00.
   - Either start the count as soon as any part is visible and fall back to
     the final figures after a short delay, or animate something other than the
     numbers, such as the double rule drawing in under Tubo.
   - Never let ₱0.00 be what a visitor sees at rest.

## Then design the rest in 1b

### 1. The full homepage

Design it at 390 × 844 and 1440 × 900, following the outline in round 1:

- Hero
- The formula
- The daily routine: Benta, Paninda, Utang, Gastos, Kita
- Made for the counter
- For sellers like you
- Start in three steps
- Straight answers
- Closing call to action
- Footer

Alternate paper and ink sections, but don't make every other section dark.
Most of the page is paper; ink marks the counter moments.

Add one small caption near the product pictures: "Screens show the KitaMo web
app with sample data."

### 2. The remaining screen plates

Keep the round-1 approach: the tablet at 853 × 533 CSS px and the phone at
390 × 845 CSS px. We export them at 1280 × 800 and 1080 × 2340. Use the same
demo store, "Aling Nena's Sari-sari", with no real brands. Keep the figures
consistent across plates.

| Plate | Screen          | Contents                                                                                                                                                                                                                                                                                       |
| ----- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| T2    | Benta, tablet   | Shelf and cart in two panes. The cart holds Pancit canton × 3 (₱54.00), Itlog × 6 (₱54.00) and Softdrinks 1.5L × 1 (₱75.00): 10 items, ₱183.00, the same as P1.                                                                                                                                |
| P2    | Checkout, phone | Total ₱183.00. Methods: Cash (chosen), GCash, Maya, Bank transfer, Customer account. Quick amounts: Sakto, ₱200, ₱500, ₱1,000. ₱200 is picked, so Sukli is ₱17.00. Confirm sale is visible.                                                                                                    |
| P3    | Paninda, phone  | Stock filter: All, Needs attention, Low, Out, **without counts**. Kape 3-in-1 is Low with 6 left. Tinapay is Low with 8 left. Toyo is Out. Kandila has no cost yet and shows the "+ cost" pill that fixes it.                                                                                  |
| P4    | Utang, phone    | The **Sa iyo** tab is selected, with **Utang mo** beside it. Aling Rosa owes ₱320.00 and Mang Ben ₱185.50. Show the total owed (₱505.50) and "2 customers". No aging bars.                                                                                                                     |
| P5    | Gastos, phone   | Recurring bills: Upa ₱3,000.00 monthly; Kuryente ₱1,850.00, due Mon, Sep 28, unpaid; Tubig ₱420.00; Wifi ₱1,299.00, paid Sep 20. Include the quick-add chips (Upa, Kuryente, Tubig, Wifi, Sahod, Basura) and mark-paid. **No** bill accounts, account numbers or fixed/variable graph (LATER). |
| P6    | Kita, phone     | Week view for Sep 21–27. Benta ₱19,640.00; Puhunan − ₱12,610.00; Bayarin − ₱1,650.00; Sira − ₱120.00; Tubo ₱5,260.00. The 4-week bars read Aug 31 ₱7,420, Sep 7 ₱8,105, Sep 14 ₱6,880, This week ₱5,260. Top earners: Softdrinks 1.5L, Pancit canton, Bigas 1 kg.                              |
| P7    | Kita, phone     | The same day as T1 in the **Hidden** money view. Passive totals are hidden, exactly as round 2 of the app draws it.                                                                                                                                                                            |

Everything the app's round 2 marks LATER stays out of every plate: the stall
picker, staff, the cash drawer, recipes, partly-paid, and aging.

### 3. Subpages

Design each at 390 × 844 and 1440 × 900, in 1b. The copy is a draft for the
owner.

- **How it works.** The daily loop, one step per plate:
  1. Create an account and set up your business.
  2. Add your paninda.
  3. Sell at the counter.
  4. Record gastos and utang.
  5. Check Kita at the end of the day.

  Close with a short, plain "What KitaMo doesn't do" list:
  - it needs internet;
  - it records payments but doesn't move money;
  - the receipt is not an official BIR receipt;
  - there are no staff logins or multiple stalls yet.

- **For sellers.** One short block each for sari-sari store, karinderia, food
  stall, market stall and home business. Each block says which parts of
  KitaMo that seller leans on. For example, a karinderia logs leftovers as
  sira and tracks daily bills. Do **not** mention recipe costing; it is not in
  the web app.

- **About.**
  - What KitaMo is.
  - Why: "your lista, with the math done".
  - Where it stands: the web app is free while in testing, and an offline
    Android version is Currently Testing.
  - A link to Support at app.kitamo.online/support.

### 4. Design system sheet

- Tokens, with contrast ratios measured on paper and on ink.
- Type scale.
- Spacing.
- Components: header (desktop and the phone Menu), buttons, the counter band,
  the receipt ledger, feature block, the device pair, FAQ, footer.
- Motion tokens.

### 5. A one-page rationale

Cover how 1b avoids each cliché on the round-1 list, and why a seller would tap
Create free account.

## Unchanged from round 1

- Show only the features the round-1 brief lists.
- No statistics, testimonials, pricing tiers, offline claims, payment
  processing, BIR, AI, or staff and multi-branch claims.
- Everything self-hosted.
- WCAG 2.2 AA.
- The K mark exactly as supplied.
