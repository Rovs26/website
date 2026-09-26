# MR-1 content contract: web-first site

Status: **Approved 2026-09-26, owner acting as Product Authority (ADR-0012).**
It supersedes `web-3-homepage-content-contract.md` and the three `web-4/`
contracts.

## Scope and authority

- **Routes:**
  - `/` (PAG-001)
  - `/how-it-works` (PAG-004)
  - `/for-sellers` (PAG-006)
  - `/about` (PAG-002)
  - the shared header and footer
- **Exact wording** lives in the copy modules, which are part of this contract:
  - `lib/content/homepage-copy.ts`
  - `lib/content/how-it-works-copy.ts`
  - `lib/content/for-sellers-copy.ts`
  - `lib/content/about-copy.ts`
  - `lib/content/shared-copy.ts`
  - `lib/content/site-navigation.ts`
  - `lib/content/plates.ts` (image alt text)
- **Changing wording.** Any change to those files is a content change. Check it
  against the claims register and the terminology register, and update this
  contract in the same change.
- **Source of the design:**
  - `docs/redesign/marketing-round-3/` (direction 1b);
  - `docs/redesign/CLAUDE-DESIGN-BRIEF.md` and the round 2 and round 3
    prompts.
- **Language.** English, with the web app's seller words (terminology register,
  MR-1 section). No Filipino or Taglish page exists.

## Shared elements

| Element                     | Wording                                                                     | Claims            |
| --------------------------- | --------------------------------------------------------------------------- | ----------------- |
| Primary action (every page) | "Create free account" → `https://app.kitamo.online/login?bago=1`            | CLM-013           |
| Secondary action            | "Sign in" → `https://app.kitamo.online/login`, never primary styling        | CLM-010           |
| Reassurance line            | "Free while in testing · Works in your browser · English or Filipino."      | CLM-012, 014, 015 |
| Tagline and closing heading | "Your lista, with the math done."                                           | CLM-020           |
| Screen caption              | "Screens show the KitaMo web app with sample data."                         | CLM-026           |
| Photo caption               | "… Illustration. Screens show the KitaMo web app with sample data."         | CLM-026           |
| Footer help links           | Privacy, Terms, Support → `app.kitamo.online/privacy`, `/terms`, `/support` | CLM-025           |

## `/` Home

| Section              | Claim-bearing wording                                                                                                                                    | Claims                                |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| Hero                 | "Sell, track stock and see what you really earn each day, on your phone or a tablet at the counter."                                                     | CLM-014, 016, 017, 020                |
| Formula              | Tubo = Benta − Puhunan − Bayarin − Sira; "If a cost is missing, KitaMo tells you instead of guessing."                                                   | CLM-020                               |
| Receipt              | Example day for "Aling Nena's Sari-sari": ₱4,850.00 − ₱3,120.00 − ₱350.00 − ₱45.00 = ₱1,335.00 (sample data)                                             | CLM-020, 026                          |
| The daily routine    | Benta, Paninda, Utang, Gastos and Kita lines, each with a sample screen                                                                                  | CLM-016 to 020, 026                   |
| For sellers like you | Sari-sari store, Karinderia, Food stall, Market stall, Home business (intended contexts)                                                                 | CLM-005                               |
| Made for the counter | Big buttons on an 8" tablet; Hidden money view; made for low-cost phones and tablets; English or Filipino                                                | CLM-014, 015, 021, 026                |
| Start in three steps | Create an account; add your paninda; make your first sale                                                                                                | CLM-013, 016, 017                     |
| Straight answers     | Internet (yes); payments (records, doesn't move money); receipt (not BIR); free while in testing; Android pilot **Currently Testing**, not yet available | CLM-023, 016, 022, 012, 002, 003, 006 |

## `/how-it-works`

The page has five steps, with the screens noted:

1. Set up your business and choose a language.
2. Add your paninda (P3).
3. Sell (P1, P2). The sukli line describes the keypad and Sakto, which
   production has today. It does not describe the branch-only quick-cash keys.
4. Gastos and Utang (P5, P4).
5. Kita (T1, P6).

The page ends with "What KitaMo doesn't do":

- it needs internet;
- it records payments but doesn't move money;
- the receipt is not an official BIR receipt;
- there are no staff logins or multiple stalls yet.

Claims: CLM-013 to 020, 022 to 024, 026.

## `/for-sellers`

The page has five blocks, one per intended context. Each block has three
"uses" lines that restate CLM-016 to CLM-020. The karinderia block carries the
S2 illustration with the photo caption.

This page must not mention:

- recipe costing;
- adoption or "trusted by";
- outcomes.

## `/about`

- **What KitaMo is.** Claims CLM-011 and CLM-016 to CLM-020.
- **Why.** The tagline and the lista explanation, plus the formula.
- **Where it stands.** Two rows:
  - Web app, **Available Today**: "Free while in testing … any future charge
    is announced first and needs your agreement" (CLM-011, CLM-012).
  - Android app, offline, **Currently Testing**: "Not yet available"
    (CLM-002, 003, 006).
- **Need help?** Links to `app.kitamo.online/support` (CLM-025).
- **Close.** "Try it at your counter." with the primary action.

## Exclusions on every route

Every route must leave out:

- statistics, testimonials, ratings, customer counts, partners, awards,
  urgency;
- pricing tiers;
- offline claims for the web app;
- payment processing, BIR compliance, AI;
- staff or multi-stall availability;
- a download action;
- real brand names or logos in images;
- people presented as real KitaMo users.

The tests in `tests/components/` enforce the link allow-list, the primary and
secondary actions, the banned phrases, the Android wording and the receipt
arithmetic.

## Revalidation

Revalidate this contract in any of these cases:

- a `seller-web` release changes a pictured screen or a claimed capability;
- sign-up, the login route or the Terms' testing clause changes;
- a new route, image or language is added;
- before first publication, against the ADR-0012 launch gate.
