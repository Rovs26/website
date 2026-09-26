# Marketing site redesign

The web-first redesign of kitamo.online, made with Claude Design. Device
pictures come from ChatGPT and Gemini, built on Claude Design's screen plates.

| File                       | What it is                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `CLAUDE-DESIGN-BRIEF.md`   | The round-1 brief pasted into Claude Design                                                                  |
| `marketing-round-1/`       | Round-1 handoff (kept as delivered), the first plate exports, and review screenshots                         |
| `CLAUDE-DESIGN-ROUND-2.md` | Round-2 prompt: fixes to direction 1b, then the full page, the remaining plates, and subpages                |
| `marketing-round-2/`       | Round-2 handoff (kept as delivered) and review screenshots                                                   |
| `CLAUDE-DESIGN-ROUND-3.md` | Round-3 prompt: three layout fixes, the top-earner figures, and the subpages and design sheet round 2 missed |
| `marketing-round-3/`       | Round-3 handoff (kept as delivered): subpages, homepage fixes, design system, rationale; review screenshots  |
| `generation-kit/`          | All nine plates, flat and framed, plus the ChatGPT, Gemini and Veo prompts. Replaces the earlier prompt file |

To view a handoff, serve its folder over HTTP and open the `.dc.html` files.
They need `support.js` and `assets/` beside them. `Screen Plates.dc.html` in
round 2 shows every plate at its CSS size.

## Round 3 review (2026-09-26): design phase complete

**Round 3 is the build reference.** Start with `marketing-round-3/KitaMo Site.dc.html`.
Two more files sit beside it: `Design System.dc.html` (tokens, type, spacing,
components, motion) and `Rationale.dc.html`.

### What round 3 delivered

- How it works, For sellers and About, each at 1440 and 390.
- The homepage fixes, shown as separate frames.
- The design-system sheet.
- The rationale.

### Fixes that landed

- **Header on small phones.** Below 400 px (520 px in Filipino), the header
  shows only the mark and Menu. Once the visitor scrolls past the hero, a
  compact button appears: "Create free account", or "Libreng account" in
  Filipino (draft).
- **"Made for the counter".**
  - The phone now overlaps only the shelf, so the cart, the ₱183.00 total and
    Checkout stay visible.
  - A photo version (16:9 on desktop, 4:5 on phones) exists as a `counterView`
    tweak.
- **Daily routine at 390.** The phones show the top half of each screen at 300
  px wide.
- **T1 top earners.** The figures now read ₱182.00 and ₱148.00 at the source.

### Checks

- **Contrast.** Every ratio on the design sheet was recomputed and matches:
  - ink on paper 16.26:1, text-secondary 6.46:1;
  - text-on-ink `#c6c8bd` 10.38:1, white on action 6.63:1;
  - control-edge 3.52:1, warning 5.48:1.

  Blue focus on ink is 2.62:1, so the design adds a 2 px white inner ring.

- **Copy.** It matches the web app:
  - Language is chosen on the sign-in page (`LanguageSwitch`) and in Account.
  - The "What KitaMo doesn't do" list is accurate.
  - The For sellers blocks avoid recipe costing.

### For the build (no further design round needed)

1. **Launch gate.** The site pictures the Ledger redesign, which lives only on
   `seller-web` branch `claude/ledger-foundation`. How it works also says "the
   ₱200, ₱500 and ₱1,000 keys work out the sukli"; production `main` has only
   "Saktong bayad" (`suggestCashAmounts` is branch-only).
   - Publish the new site only once the Ledger build is live at
     app.kitamo.online.
   - Otherwise, cut the quick-amount copy and use screens that match
     production.
2. **Status labels.** About's "Where it stands" labels the web app "Free while
   in testing". That is not one of the four controlled statuses
   (`AGENTS.md`).
   - Use **Available Today** as the label (CLM-010/CLM-011).
   - Keep "Free while in testing" in the description line.
3. **Photo slots.** `image-slot.js` is Claude Design's placeholder component and
   does not ship. The two slots take the generated S1 and S2. Until those are
   approved, "Made for the counter" uses the flat device pair and the karinderia
   block has no image.
4. **Draft copy.** All page copy, including "Libreng account", is still a draft.
   It becomes the content contract and claims-register entries in the build
   step.

## Round 2 review (2026-09-26)

### What round 2 delivered

- The homepage in 1b, at 1440, at 390, at 360 with the Filipino button labels,
  and at 390 with the Menu open.
- Header and footer components.
- Plates T1, T2 and P1 to P7.

### What it did not deliver

These go into round 3:

- the three subpages;
- the design-system sheet;
- the rationale.

### Round-1 fixes

All seven landed:

- The hero phone overlaps only the tablet's right column.
- Both devices stand fully on the counter.
- Below 1100 px the buttons stack.
- The formula breaks before each operator.
- Bayarin reads "expenses".
- The weeks read Aug 31, Sep 7 and Sep 14.
- The counting tally is gone. The receipt always shows the real figures, and
  the only motion is the double rule drawing in, with a 4 s fallback.

### Numbers checked

- **Checkout:** ₱200 − ₱183 = ₱17 sukli.
- **Utang:** ₱320.00 + ₱185.50 = ₱505.50.
- **Gastos:**
  - ₱3,000 + ₱1,850 + ₱420 + ₱1,299 = ₱6,569;
  - ₱4,299 paid, ₱2,270 to pay.
- **Kita week:**
  - ₱19,640 − ₱12,610 − ₱1,650 − ₱120 = ₱5,260.
  - Its top earners match P3's costs: Softdrinks 81 × ₱13, Pancit canton
    196 × ₱4, Bigas 64 × ₱8.
- **Hidden view (P7):** 41 sales, matching T1.

### Issues

- **The T1 top earners disagreed with P3's costs.** They read ₱266.00 and
  ₱185.00; they should read ₱182.00 and ₱148.00.
  - The kit's T1 plate is exported with the corrected figures.
  - The delivered `.dc.html` is kept as delivered.
  - Round 3 fixes it at the source.
- **At 360 px in Filipino, the header button wraps to two lines.** Round 3:
  below 400 px, the header shows only the mark and Menu.
- **"Made for the counter": the phone covers T2's cart total and Checkout.**
  Round 3 fixes the overlap and adds a photo-slot variant for S1.
- **The daily-routine phones are about 118 px wide at 390 px.** Nothing on
  them can be read. Round 3 makes them at least 160 px.
- **Minor, left as drawn:**
  - P2's payment chips scroll, so "Customer account" is off-screen.
  - P5 lists Tubig, due Oct 2, under September.
  - P4 shows an "Unpaid" badge per customer. Check this against the live Utang
    list during the build.

### Plate exports

Everything is exported from `Screen Plates.dc.html`, the same way as in round
1:

- tablets at device scale 1.5, giving 1280 × 800;
- phones at device scale 3, resized to 1080 × 2340.

`generation-kit/framed/` puts each plate inside a plain black bezel on a
transparent background. The AI tools get these as the object to place in each
scene.

## Round 1 review (2026-09-26)

Claude Design sent two directions, each with a hero and the formula section at
390 × 844 and 1440 × 900, plus the plates T1 Kita and P1 Benta.

- **1a Lista page:** ruled notebook lines behind the whole page, and a gold
  margin line on desktop.
- **1b Counter and resibo:** a paper hero over an ink "counter" band with a gold
  edge, and the formula printed as a white receipt.

The owner chose **1b**.

### What holds

- **Brand and colour.** The Ledger tokens, Schibsted Grotesk and the K mark are
  used unchanged, and gold appears once.
- **Copy.** The copy follows the brief.
- **No clichés.** None of the listed ones appear.
- **Honest plates.** They show only shipped features: Kita (day view, 4-week
  trend, bills due, top earners) and the Benta shelf (Favourites, Low tags, the
  cart bar).
- **The numbers add up.**
  - ₱4,850 − ₱3,120 − ₱350 − ₱45 = ₱1,335.
  - The P1 cart is 3 + 6 + 1 = 10 items: ₱54 + ₱54 + ₱75 = ₱183.
- **Dates.** "Fri Sep 25" and "Mon Sep 28" are the correct weekdays for 2026.
- **Status.** Status badges carry an icon and text, never colour alone.
- **Motion.** The tally code renders the final figures by default and skips the
  animation under reduced motion.

### Fixes sent in round 2

- **Hero layout.**
  - In both hero frames, the phone covers the tablet's "Profit today" ledger.
  - At 1440, the counter band hides the phone's Checkout bar and tab bar.
- **Phone buttons.** On the 1b phone, the buttons share one row, which will not
  fit the Filipino label at 360 px.
- **Formula heading.** On the phone, lines end with a dangling "−".
- **Glosses.** Bayarin is glossed "bills", but the app's English label is
  "Expenses".
- **Week labels.** They read Sep 1 / 8 / 15, which are Tuesdays in 2026. The
  app's weeks run Monday to Sunday (`seller-web/lib/format/period.ts`).
  - The correct labels are Aug 31 / Sep 7 / Sep 14.
  - The exported `plates/T1-kita-1280x800.png` is already corrected. The
    delivered `.dc.html` is not.
- **Tally stuck at ₱0.00.** The tally sets off-screen receipts to ₱0.00 and
  counts up only once 40% of the receipt is visible. A receipt taller than the
  viewport, at 200% zoom or on a phone in landscape, never reaches that point
  and stays at ₱0.00. The build must keep the real figures as the rest state.

### Plate exports

The plates are drawn at CSS size: T1 at 853 × 533 and P1 at 390 × 845. They
were exported with Playwright at device scale 1.5 and 3, then resized to exactly
1280 × 800 and 1080 × 2340 (`marketing-round-1/plates/`). These are the files to
attach in ChatGPT or Gemini.
