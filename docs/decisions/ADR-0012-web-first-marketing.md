# ADR-0012: Web-first marketing site (MR-1)

## Status

Accepted: 2026-09-26, owner acting as Product Authority.

It supersedes these parts of earlier documents:

- the WEB-3/WEB-4 positioning of the site around the Android testing candidate;
- the bans in `README.md` and `AGENTS.md` on sign-up calls to action, product
  screenshots, the word "free", web fonts and product video.

ADR-0004 (content governance), ADR-0005 (accessibility), ADR-0006
(dependencies) and ADR-0007 (no data collection) are unchanged.

## Context

The site was built for the Android Owner-Seller app. That app never shipped and
was paused on 2026-09-19.

The live product is the web app at `app.kitamo.online`, which has open sign-up
(CLM-010, CLM-011). Until now the site reached it through one secondary "Sign
in" link. Every page described a product visitors could not get, and there
was no way to start using the one they could.

The owner made four decisions on 2026-09-26:

- the site sells the web app first;
- a primary **Create free account** action leads to
  `https://app.kitamo.online/login?bago=1`;
- copy is English, keeping the app's own seller words (Kita, Benta, Tubo,
  Utang, Paninda, Sukli);
- product pictures are made from the app's screens, with ChatGPT and Gemini
  images for the scenes.

The design came from Claude Design over three rounds, recorded in
`docs/redesign/`. Direction 1b, "Counter and resibo", was chosen.

## Decision

1. **Positioning.** Every page describes the web app. The Android pilot
   appears once on the homepage (FAQ) and once on About, always labelled
   **Currently Testing** and "not yet available".
2. **Primary action.** Every page has **Create free account** as its one
   primary action (CLM-013). **Sign in** stays secondary: a plain link in the
   header, menu and footer, plus one secondary button in the homepage hero
   (CLM-010).
3. **Identity.** The site adopts the web app's identity:
   - the K mark, `public/brand/`;
   - the Ledger palette, `app/globals.css`;
   - Schibsted Grotesk, self-hosted, with a 1 KB Hanken Grotesk subset for
     the peso sign (OFL, `public/fonts/`).

   The Android eye icon and the cream palette are retired. This settles
   OPEN-013 to OPEN-016 for the website only.

4. **Product imagery.** Screens are flat captures of the web app's Ledger
   design with the sample store "Aling Nena's Sari-sari"
   (`public/plates/`).
   - Scene photos are AI-generated illustrations with those exact screens
     fitted in (`public/marketing/`, method in
     `docs/redesign/generation-kit/`).
   - Every product picture carries a caption: "Screens show the KitaMo web app
     with sample data." Photos add "Illustration." (CLM-026).
   - No image may show a real brand, and none may imply real customers.
5. **No client JavaScript.** Every interaction uses native HTML:
   - the menu and FAQ are `<details>`;
   - the receipt's rule animation is a CSS scroll-driven animation that does
     nothing where it isn't supported or when reduced motion is set.

   The Content Security Policy is unchanged.

6. **Metadata.** Each route declares its own canonical, which fixes the old
   root canonical that pointed every page at `/`. Each route also sets Open
   Graph and Twitter tags with a share image (`public/og/`), and one
   `WebSite` JSON-LD object is emitted. `robots.txt` lists the sitemap.
7. **Video** is allowed only as a muted, click-to-play clip with a poster,
   under 1.5 MB. It must never autoplay under reduced motion, must not show an
   invented interface, and must not carry a third-party watermark. None ships
   in MR-1.

## Rationale

- The site now matches what a visitor can actually use.
- Adopting the app's own look and words means the site and the app read as
  the same product.
- Native HTML and no client code keep the pages light on 2 GB phones and
  keep the strict CSP.
- Captions and the claims register keep the new, more persuasive copy honest.

## Consequences

- **Claims.** CLM-012 to CLM-026 are added and approved. CLM-002, CLM-003 and
  CLM-006 are re-scoped to the Android answers. The WEB-3 and WEB-4 content
  contracts are superseded by `docs/content/mr-1-marketing-content-contract.md`.
- **Launch gate.** The pictures show the Ledger redesign, which is on
  `seller-web` branch `claude/ledger-foundation` and not yet in production.
  The site should be published once that build is live at
  `app.kitamo.online`. Copy about checkout describes the keypad and Sakto,
  which production has today, rather than the branch-only quick-cash keys.
- **Tests.** They now enforce:
  - the primary action on every page;
  - Sign in never taking primary styling;
  - an allow-list of link destinations;
  - per-route canonicals;
  - banned phrases;
  - the receipt figures adding up.
- **Weight.** Measured at 390 px on a 2.75× phone, after a full scroll, the
  homepage transferred 437 KB. That included 145 KB of Next.js runtime
  JavaScript that could never hydrate. ADR-0013 then set `script-src 'none'`,
  which cuts the homepage to 292 KB with no script at all.

## Alternatives considered

- **Keep the Android-first site and add a stronger Sign in link.** Rejected:
  the site would still describe a product no one can get.
- **Show both products equally.** Rejected: the Android app has no release.
- **Let the AI tools draw the screens.** Tried in round 1. Every tool replaced
  the screen, so the exact screens are fitted in by hand.
- **A small client script for a scroll-aware header.** Rejected: the CSP
  blocks inline scripts, and the English label fits at 360 px without it.

## Reconsideration conditions

Revisit this decision if any of the following happens:

- a paid plan is introduced;
- the Android app is released;
- the web app's sign-up policy, origin or legal pages change;
- a second language is added to the site;
- the Ledger redesign does not reach production;
- a photo is found to show a real brand or to be mistaken for a real customer.
