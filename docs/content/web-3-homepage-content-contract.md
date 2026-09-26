# WEB-3 Homepage Content Contract

> **Superseded 2026-09-26** by [`mr-1-marketing-content-contract.md`](mr-1-marketing-content-contract.md) (ADR-0012). Kept as the record of the WEB-3/WEB-4 approvals; this wording is no longer published.

Status: **Approved for implementation; non-indexed preview only**

Approved: 2026-08-09

Page ID: `PAG-001`

Route: `/`

Approval context: WEB-3 implementation brief supplied by the Website Architect

## Page purpose

Explain what KitaMo is, who it is intended for, what the current Android test
version covers, how its device-local operation affects practical use, and why
the product is not yet offered as an open public download. The homepage is a
trust-oriented orientation page, not a launch campaign or feature catalogue.

## Primary audience

Filipino small-business owners and sellers evaluating whether KitaMo is
relevant and how mature the current product is.

The homepage may name sari-sari stores, karinderias, food stalls, kiosks, market
stalls, and home businesses only as intended contexts. These examples do not
claim current use, adoption, universal fit, legal classification, or support
for every kind of small business.

## Exact approved hero wording

- **Status:** `Currently Testing`
- **Status explanation:** `Limited Android testing; not an open public download. A separate web app for store owners, with its own sign-in, is at app.kitamo.online.` (revised 2026-09-25, CLM-011)
- **Headline:** `Simple business tools for everyday Filipino sellers.`
- **Supporting copy:** `KitaMo is an Android business app being built to help small-business owners keep important day-to-day records organized, even when internet access is limited.`
- **Primary CTA:** `See how KitaMo works` → `/how-it-works`
- **Secondary CTA:** `View testing status` → `#testing-status`

## Approved claim occurrences

### CLM-001 — product identity

- `KitaMo`
- Used in the header, visible copy, footer, title, description, and application
  name.
- Evidence: `../owner-seller-mobile/app.json` and
  `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md`.

### CLM-002 — Android platform

- `KitaMo is an Android business app ...`
- `The current Android test version ...`
- `The present focus is the Android app ...`
- Evidence: `../owner-seller-mobile/README.md` and
  `../owner-seller-mobile/app.json`.

### CLM-003 — testing maturity

- `Currently Testing`
- `Limited Android testing; not an open public download. A separate web app for store owners, with its own sign-in, is at app.kitamo.online.`
- Product-detail wording is qualified as the `current Android test version` or
  `current test app`.
- Evidence:
  `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md`.

### CLM-004 — device-local and connectivity boundary

- `Built with offline use in mind`
- `The current Android test version keeps its core business records on the device. Its current sales, inventory, and reporting workflows do not require an internet connection.`
- `Records remain on that device in this test version, so this is not a promise of automatic backup, recovery, or access from another device.`
- Evidence:
  `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md`,
  `../owner-seller-mobile/app/privacy.tsx`, and
  `../owner-seller-mobile/docs/release/final-release-readiness.md`.

### CLM-005 — intended audience

- `Filipino small-business owners and sellers`
- `KitaMo is being designed for Filipino small-business owners and sellers in everyday settings such as sari-sari stores, karinderias, food stalls, kiosks, market stalls, and home businesses.`
- Adjacent boundary: `These are intended use contexts for the current test—not a claim that every kind of small business is already supported or using KitaMo.`
- Evidence: `../owner-seller-mobile/docs/release/tester-plan.md`,
  `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`, and
  `../owner-seller-mobile/app/owner/about.tsx`.

### CLM-006 — no broad public availability

- `not an open public release`
- `It is not an open public download, and this website does not offer tester enrollment.`
- Evidence:
  `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md`
  and `../owner-seller-mobile/docs/release/final-release-readiness.md`.

### CLM-007 — bounded current capabilities

- `Record sales` — `Keep a local record of everyday sales in the current test app.`
- `Track inventory` — `Record products and stock changes for the business set up on the device.`
- `Review business records` — `Look back at the sales, inventory records, and local reports available in the test app.`
- Evidence: `../owner-seller-mobile/README.md`,
  `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`, and
  `../owner-seller-mobile/docs/release/final-release-readiness.md`.

CLM-008 and CLM-009 are not approved or used on this homepage.

## Metadata contract

- **Title:** `KitaMo | Currently Testing`
- **Description:** `KitaMo is an Android business app currently testing with a focus on practical records for Filipino small-business owners and sellers.`
- **Indexing:** global `noindex`, `nofollow`, and `nocache` remain required.
- **Canonical:** none until a separate canonical-host decision is formally
  recorded. The supplied `kitamo.online` domain does not by itself activate a
  runtime canonical URL.
- **Structured data:** none for WEB-3.

## CTA contract

Every homepage CTA remains informational. WEB-4 connects the approved homepage
to the implemented core public pages without changing its factual claims:

- `See how KitaMo works` → `/how-it-works`
- `See who KitaMo is for` → `/for-sellers`
- `See the current workflow` → `/how-it-works`
- `Learn about KitaMo` → `/about`
- `View testing status` → `#testing-status`
- `Testing Status` → `/#testing-status` in the shared header and footer

No download, sign-up, tester enrollment, waitlist, email capture, account,
support, purchase, or unimplemented-route CTA is approved.

## Prohibited claims

- public availability, open beta, launch timing, download eligibility, or an
  invitation to testing;
- cloud synchronization, backup, cross-device access, or online accounts;
- customer-app, public AI, automation, predictive analytics, or real-time
  analytics availability;
- pricing, subscriptions, payments, official or tax receipts, accounting,
  certification, privacy or security guarantees;
- customer counts, testimonials, partners, ratings, awards, measured impact,
  revenue, profit, productivity, savings, growth, or other guaranteed outcomes;
- support, legal, privacy, or deletion workflows that belong to later
  milestones; and
- internal architecture, providers, service names, environment variables,
  repositories, release artifacts, or operational workflows.

## Page owner roles

- Website Architect — architecture and WEB-3 scope approval
- Website Content Owner — homepage wording and freshness; role remains
  unassigned beyond the supplied WEB-3 approval context
- Product Authority — source accuracy and product-status revalidation
- Accessibility Reviewer — semantic, keyboard, zoom, contrast, and responsive
  review

No role label in this contract assigns a person or creates a public identity.

## Update and revalidation triggers

Revalidate every used claim and the exact page wording when any of these change:

- Android or website product release;
- product name, platform, audience, business terminology, capability scope, or
  local-device behavior;
- testing track, availability, download, invitation, or tester-enrollment
  workflow;
- canonical host, indexing, metadata, public support, privacy, or legal state;
- visual identity or approved public imagery; or
- a new route, language, region, or surface reuses the wording.

## Accessibility requirements

- one descriptive `h1` and logical heading order;
- skip link and clear banner, main, section, and footer landmarks;
- visible text for product status and no color-only meaning;
- descriptive same-page anchors with visible focus and 44px touch targets;
- readable line length, 200% zoom support, reduced-motion behavior, and no
  horizontal overflow at 320px or wider; and
- no formal WCAG conformance or certification claim.

## Publication blockers

WEB-3 is approved only as a non-indexed homepage implementation. Public launch
and indexing remain blocked by later milestone approvals, including canonical
host recording, approved support/privacy/legal/deletion surfaces, production
readiness, and revalidation of every visible claim. No deployment is authorized
by this contract.
