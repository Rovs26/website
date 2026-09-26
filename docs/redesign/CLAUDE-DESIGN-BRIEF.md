# kitamo.online redesign: brief for Claude Design

Status: **Round 1 brief, 2026-09-26.** Owner decisions: web app first, a
primary "Create free account" button, English copy that keeps the seller
words, and device mockups made from Claude Design's screen plates. The page
copy below is a draft. It becomes public only after it is recorded in the
claims register and a content contract (ADR-0012, to follow).

## How to use it

1. In Claude Design, connect the GitHub repositories:
   - `kitamo-ph/website`: the site being redesigned;
   - `kitamo-ph/seller-web`, branch `claude/ledger-foundation`: the app it
     sells.
2. Attach these files from `seller-web`:
   - `public/logo.png` (mark and wordmark);
   - `assets/brand/mark-source.png` (mark only, transparent);
   - `docs/redesign/ledger-round-2/Ledger System.dc.html`, with `support.js`
     and `assets/` beside it.
3. Paste everything below the line.

---

## What KitaMo is

KitaMo is a web app for Filipino micro-sellers: sari-sari stores,
karinderias, food stalls, market stalls and home businesses. The owner sells at
the counter, tracks stock, logs bills and spoilage, keeps utang both ways, and
sees what they really earned each day:

**Tubo = Benta − Puhunan − Bayarin − Sira** (profit = sales − cost of goods −
bills − spoilage).

Most owners keep a paper _lista_ and have never used accounting software. The
tagline is **"Your lista, with the math done."**

The app is at app.kitamo.online. It runs in the browser on a phone or on a
tablet at the counter, and it installs to the home screen. There is nothing to
download from a store. It is free while it is in testing.

## What we're designing

The marketing site, kitamo.online. Its one job: a seller understands KitaMo in
10 seconds and taps **Create free account**, which goes to
`https://app.kitamo.online/login?bago=1`. **Sign in**
(`https://app.kitamo.online/login`) is secondary.

**Who reads it**

- Owners aged 25 to 60 on a cheap Android phone: 360 to 412 px wide, 2 GB RAM.
- They arrive on mobile data, often from a Facebook link that opens in the
  in-app browser.
- Some read it on a laptop at 1440 px.

Design mobile-first at **390 × 844**, then **1440 × 900**.

## Why we're redesigning

The current site describes a paused Android app, hides the live product
behind one small link, shows no pictures of the product, and apologises in
every paragraph. The new site should feel like the app: calm, honest, "a
notebook, not a dashboard", made for the counter.

## Look

Start from the app's **Ledger** system.

**Colour tokens**

| Token          | Hex       |
| -------------- | --------- |
| page           | `#f7f6f2` |
| surface        | `#ffffff` |
| ink            | `#161a17` |
| text-secondary | `#545b55` |
| action (green) | `#006b3c` |
| select         | `#0d4f33` |
| select-soft    | `#e1efe6` |
| accent (gold)  | `#e3a008` |
| control-edge   | `#858379` |
| rule           | `#dcdbd3` |
| warning        | `#8a5a00` |
| focus          | `#1d4ed8` |

**Type:** Schibsted Grotesk, weights 500, 600 and 700. Use tabular figures for
money.

**Motifs you can borrow:** ruled lista lines, tally marks, receipt paper, the
ledger formula, the tindahan counter.

The site may be bolder than the app, with a larger display scale and more
whitespace, but it must read as the same brand. Keep the K mark exactly as
supplied. Do not redraw it, and do not extend its gradient into the UI.

**Propose two distinct directions first:** the hero plus one feature section, at
390 × 844 and 1440 × 900. After the owner picks one, design the full page.

## Page outline

You can reorder these. The copy is a draft for the owner to approve.

1. **Header.**
   - KitaMo mark, How it works, For sellers, About, Sign in, and a **Create
     free account** button.
   - On a phone: the mark, the button, and a "Menu" disclosure.
2. **Hero.**
   - H1: "Your lista, with the math done."
   - Sub: "Sell, track stock and see what you really earn each day, on your
     phone or a tablet at the counter."
   - Primary button: **Create free account**. Secondary: **Sign in**.
   - Under the buttons: "Free while in testing · Works in your browser ·
     English or Filipino."
   - Visual: a **tablet in landscape on a sari-sari counter, showing Kita**, and
     a **phone showing Benta**. See "Screen plates".
3. **The formula.**
   - Tubo = Benta − Puhunan − Bayarin − Sira, drawn as a ledger receipt with
     worked numbers:
     - Benta ₱4,850.00
     - Puhunan − ₱3,120.00
     - Bayarin − ₱350.00
     - Sira − ₱45.00
     - Tubo ₱1,335.00
   - Line: "Every peso accounted for. If a cost is missing, KitaMo tells you
     instead of guessing."
4. **The daily routine.** Five short blocks, each with a phone screen.
   - **Benta:** tap items on a shelf, bundles such as "8 for ₱150", Sakto and
     sukli, and tag GCash, Maya or bank payments with their reference number.
   - **Paninda:** stock counts, low and out-of-stock at a glance, and a log for
     spoilage (sira).
   - **Utang:** _Sa iyo_ for customers who owe you, _Utang mo_ for suppliers
     you owe.
   - **Gastos:** upa, kuryente, tubig, wifi and sahod as repeating bills.
   - **Kita:** today, this week and this month, a 4-week trend, and your top
     earners.
5. **Made for the counter.**
   - Big buttons on an 8" tablet.
   - A **Hidden** money view, so customers don't see your totals.
   - Works on older phones.
   - English or Filipino.
6. **For sellers like you.**
   - Sari-sari store, karinderia, food stall, market stall, home business.
   - Use a type-led list or illustrated tags, not three icon boxes.
7. **Start in three steps.** Create an account, add your paninda, make your
   first sale.
8. **Straight answers.** A short FAQ built with native `<details>`.
   - _Does it need internet?_ Yes, the web app needs a connection.
   - _Does it take payments?_ No. It records how you were paid. The money moves
     in GCash, Maya or your bank as usual.
   - _Is the receipt official?_ No. It is a record for you and your customer,
     not a BIR receipt.
   - _Is it free?_ Free while in testing. Any future charge is announced first
     and needs your agreement.
   - _Is there an Android app?_ An offline Android version is **Currently
     Testing** and not yet available.
9. **Closing call to action.** Repeat the headline and the button.
10. **Footer.**
    - Navigation links and Sign in.
    - Privacy, Terms and Support, linking to app.kitamo.online/privacy,
      /terms and /support.
    - © 2026 KitaMo.

## Screen plates (important)

Separately from the page, deliver **flat, front-on app screens as standalone
images**. They will be placed inside device photos later.

- No device frame, no shadow, no perspective. Fill the image edge to edge.
- Keep text at least the equivalent of 14 px.

**Tablet plates: 1280 × 800, landscape.** The app is installed standalone, so
show an Android status bar and no browser bar.

- **T1 Kita:** day view, the formula ledger, a 4-week trend.
- **T2 Benta:** two panes, shelf and cart.

**Phone plates: 1080 × 2340, portrait.** Show an Android status bar and the
five-tab bottom bar.

- **P1 Benta:** the shelf.
- **P2 Checkout:** the cash keypad with Sakto, ₱200, ₱500 and ₱1,000, and the
  sukli.
- **P3 Paninda:** low-stock tags.
- **P4 Utang:** the Sa iyo tab.
- **P5 Gastos.**
- **P6 Kita:** the week view.
- **P7 Kita:** the Hidden money view.

Draw them exactly in the Ledger round-2 look
(`seller-web/docs/redesign/ledger-round-2`). **Show only the features listed in
this brief.** Everything that round 2 marks LATER stays out: no stall picker,
staff, cash drawer, recipes or partly-paid.

**Demo data.** The business is "Aling Nena's Sari-sari".

- Items (generic, **no real brands**): Pancit canton ₱18, Kape 3-in-1 ₱12,
  Itlog ₱9, Softdrinks 1.5L ₱75, Bigas 1 kg ₱54, Sabon ₱25, Tinapay ₱5, Yelo
  ₱10.
- Customers who owe: Aling Rosa ₱320.00, Mang Ben ₱185.50.
- Format money as ₱1,234.50.

## Motion

- A few meaningful moves only, CSS only, each under 250 ms.
- The formula may tally up once when it scrolls into view.
- No scroll-jacking, no fade-in on every block, no parallax.
- Full `prefers-reduced-motion` support.

## Hard constraints

- **Static and self-hosted.** No third-party scripts, embeds, trackers or
  cookies. The Content Security Policy allows `'self'` only.
- **Weight.** The homepage stays under about 500 KB on mobile, not counting an
  optional video. LCP under 2.5 s on a mid-range 4G phone.
- **Fonts and icons.** One font family, three weights. A small set of custom
  SVG icons only.
- **WCAG 2.2 AA.**
  - 44 px touch targets and a visible focus ring.
  - Status is never shown by colour alone.
  - Works at 200% zoom.
  - One H1 and semantic landmarks.
- **Filipino runs about 30% longer.** Leave room in buttons.

## Avoid

The usual AI-design tells:

- hero gradients, gradient text, glassmorphism, grain;
- a badge above the headline, emoji in headings, three icon boxes in a row;
- the default shadcn look, Lucide icons everywhere;
- fade-on-scroll everywhere, cursor effects;
- serif-italic accents, Inter;
- buzzwords such as "seamless", "empower", "all-in-one" and "revolutionize";
- em dashes everywhere.

Plus our own: a disclaimer in every section, and the same bordered card for
everything.

## Never

- No statistics, testimonials, ratings, customer counts, partner logos, awards,
  urgency or countdowns.
- No pricing tiers.
- No claims about offline use, payment processing, BIR compliance, AI, staff
  accounts or multiple branches.
- Do not show the Android app as available, and no "Download" button.

## Deliverables

1. **Two directions:** the hero and one feature section, each at 390 × 844 and
   1440 × 900.
2. **After one is chosen:** the full homepage at 390 × 844 and 1440 × 900.
3. **Screen plates:** T1 and T2, P1 to P7.
4. **A mini design system:**
   - tokens, with contrast ratios;
   - a type scale;
   - spacing;
   - components: header, buttons, feature block, ledger receipt, FAQ, footer;
   - motion tokens.
5. **The three subpages** (How it works, For sellers, About), restyled in the
   same system.
6. **A one-page rationale:** how the design avoids each cliché, and why a
   seller would tap the button.
