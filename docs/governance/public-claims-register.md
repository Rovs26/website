# KitaMo Public Claims Register

Status: **MR-1 web-first site approved 2026-09-26 (CLM-012 to CLM-026); WEB-3
and WEB-4 Android claims re-scoped to the Android answers**

Evidence reviewed: 2026-08-09 (CLM-001 to CLM-009); 2026-09-25 (CLM-010,
CLM-011); 2026-09-26 (CLM-012 to CLM-026)
Primary source snapshot: `../owner-seller-mobile` at
`0ce3efd8cb1c904fb362b27bc6cecd5dc937d925`; CLM-010: `../seller-web` at
`9d30db6d21194870405f9e94ebd498107bbde8c0`

This register governs factual public product statements. It is not a bank of
final marketing copy. A traced fact is not approved for publication merely
because evidence exists.

## Claim states

| State                   | Meaning                                                                                                                                      | Publication effect                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `draft`                 | A proposition has been recorded but has not been traced to sufficient authoritative evidence.                                                | Do not publish.                                               |
| `evidence found`        | Current authoritative evidence supports the factual proposition. Public wording and approval are still outstanding.                          | Do not publish without explicit approval.                     |
| `approved`              | The evidence, wording, product-status category, audience, and publication scope have an explicit approval record.                            | May be used only within the approved scope and while current. |
| `rejected`              | The proposition or wording was reviewed and declined.                                                                                        | Do not publish or silently rephrase around the rejection.     |
| `outdated`              | The evidence or product state has changed since approval or review.                                                                          | Remove from public use until reviewed again.                  |
| `requires revalidation` | The claim was previously supported or approved, but a release, source conflict, time-sensitive change, or scope change requires a new check. | Do not publish until revalidated.                             |

`evidence found` and `approved` are intentionally separate. Approval must record
the approver, approval date, exact wording or bounded proposition, audience,
surface, product-status category, and any expiry or revalidation condition.

## Product-status categories

| Category            | Required interpretation                                                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| `Available Today`   | Implemented, verified, usable in the current approved release, and explicitly approved for public communication |
| `Currently Testing` | Exists only in internal testing, an invited pilot, or another controlled environment                            |
| `Planned`           | Accepted into the roadmap but not currently available                                                           |
| `Future Vision`     | Directional possibility that may change and is not a delivery commitment                                        |

Status must be conveyed with visible text and accessible semantics, never color
alone. A capability cannot be moved into `Available Today` merely because code
or a release candidate exists.

## Traced facts

The wording below is a controlled factual proposition. CLM-001 through CLM-007
are approved only for the exact WEB-3 and WEB-4 page occurrences recorded
below. CLM-008 has one negative WEB-4 `/how-it-works` use. CLM-009 remains
unapproved and must not be inferred from those approvals. CLM-010 is approved
only for the shared header and footer `Sign in` link recorded below.

<!-- prettier-ignore -->
| Claim ID | Proposed Public Claim                                                                                                                                                                              | Status         | Product Status Category | Source Repository     | Source Evidence                                                                                                                                                                             | Approval                                     | Notes                                                                                                                                                                                                                                                                            |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ----------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CLM-001  | The current Android application is named KitaMo.                                                                                                                                                   | approved       | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/app.json`; `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:7-17`                                                                          | Approved — WEB-3 Home and WEB-4 core pages, Website Architect, 2026-08-09 | Product identity only; approved routes are `/`, `/for-sellers`, `/how-it-works`, and `/about`. This does not approve another page, tagline, wordmark, or availability statement. Revalidate when the product or public brand identity changes.                                                                                                                             |
| CLM-002  | The current product under test is an Android application.                                                                                                                                          | approved       | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/README.md:1-9`; `../owner-seller-mobile/app.json`                                                                                                                    | Approved — WEB-3 Home and WEB-4 core pages, Website Architect, 2026-08-09 | Approved routes are `/`, `/for-sellers`, `/how-it-works`, and `/about`. Do not imply iOS, a customer application, a public web application, or another platform is available. Revalidate when the platform or release scope changes.                                                                                                                                       |
| CLM-003  | The current Android build is a release candidate for Google Play Internal Testing; it has not been approved for tester rollout or public rollout.                                                  | approved       | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:3-5`; `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:173-183`                            | Approved — WEB-3 Home and WEB-4 core pages, Website Architect, 2026-08-09 | Approval covers the visible `Currently Testing` boundary on the four implemented routes, not internal track detail. Revalidate the exact track, upload, distribution, and approval state before every product or website release.                                                                                     |
| CLM-004  | The current Android testing candidate keeps its current-release business data on the Android device and does not provide cloud backup or synchronization.                                        | approved       | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:147-167`; `../owner-seller-mobile/app/privacy.tsx:29-35`; `../owner-seller-mobile/app/privacy.tsx:59-72`            | Approved — WEB-3 Home and WEB-4 core pages, Website Architect, 2026-08-09 | Approval covers device-local current-workflow wording and explicit backup/recovery limitations in the route contracts. Do not expose implementation detail or convert this into a privacy, security, recovery, or data-loss guarantee. Revalidate on any data-handling or release change.                       |
| CLM-005  | The Android pilot is intended for Filipino small sellers, including microbusiness and food-stall operators.                                                                                        | approved       | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/docs/release/tester-plan.md:3-13`; `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md:3-9`; `../owner-seller-mobile/app/owner/about.tsx:31-44`                         | Approved — WEB-3 Home and WEB-4 core pages, Website Architect, 2026-08-09 | Approval uses `Filipino small-business owners and sellers` and the contract-listed examples only as intended contexts. It does not prove adoption, statutory business size, universal fit, or current use. Revalidate when audience scope or terminology changes.                                             |
| CLM-006  | Broad public availability has not been approved.                                                                                                                                                   | approved       | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:3-5`; `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:173-183`                            | Approved — WEB-3 Home and WEB-4 core pages, Website Architect, 2026-08-09 | Approval covers `not an open public release`, `not an open public download`, and no tester enrollment across the four implemented routes. It is not a launch promise, date, waitlist, download path, or invitation. Revalidate on every testing-track, download, or release change.                                       |
| CLM-007  | The current Android testing candidate includes local setup for a business and stall, local sales and receipts, inventory records, and local reports.                                               | approved       | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/README.md:20-38`; `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:30-38`; `../owner-seller-mobile/docs/release/final-release-readiness.md:36-46` | Approved — WEB-3 Home and WEB-4 core pages, Website Architect, 2026-08-09 | Approval is limited to the route-contract phrases for basic local setup, `Record sales`, `Track inventory`, and `Review business records`, with local/current-test qualifications. It does not approve receipt, payment, accounting, accuracy, remote-operation, cloud, analytics, AI, or business-outcome claims. Revalidate on any capability or release change. |
| CLM-008  | The current Android testing candidate does not create an account or provide login or an account-deletion workflow.                                                                                 | approved | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/README.md:20-25`; `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:147-167`; `../owner-seller-mobile/app/privacy.tsx:29-35`                  | Approved — WEB-4 `/how-it-works` negative clarification only, Website Architect, 2026-08-09 | Exact approved occurrence: `No online account in the Android test app` (revalidated by the owner, 2026-09-25: the unscoped `No online KitaMo account` became false once the web app went live). This is a current-release boundary, not a promise that accounts will never exist. It does not approve login, account-deletion, privacy, support, or local-data-removal guidance.                                                                                                                      |
| CLM-009  | For the current Android testing candidate, locally held app data can be removed through the in-app local-data reset, by clearing the app's storage, or by uninstalling the app.                     | evidence found | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/app/privacy.tsx:59-64`; `../owner-seller-mobile/app/owner/business-settings.tsx:482-531`; `../owner-seller-mobile/app/owner/business-settings.tsx:819-879`; `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:40-50` | Unapproved — no public claim approval record | Requires Product Authority and Privacy Owner review before use. The in-app full reset is blocked until an Owner PIN exists and then requires the current local PIN; clearing app storage and uninstalling are separate device actions. This is not an account-deletion service, does not cover intentionally shared data, and must not be generalized to future server, account, support, retention, or third-party data. |
| CLM-010  | The KitaMo web app at `app.kitamo.online` is live, and visitors can reach it from this website through a secondary `Sign in` link to `https://app.kitamo.online/login`.                               | approved       | Available Today         | `seller-web`          | `../seller-web/app/login/page.tsx:13-20`; `../seller-web/app/login/page.tsx:158-172` | Approved — shared header and footer on `/`, `/for-sellers`, `/how-it-works`, and `/about`; owner (Product Authority), 2026-09-25 | Owner approval note: `app.kitamo.online` is a live web app with open sign-up. Exact approved occurrence: the link label `Sign in`, destination `https://app.kitamo.online/login`, same tab, secondary styling, in the desktop header, the mobile Menu, and the footer `Product` group. It is not a primary action. It approves no sign-up, create-account, get-started, download, pricing, capability, platform, account, privacy, or support wording, and no status label or description of the web app. The `Available Today` category restates the owner's note and applies to web-app reachability only. The Android-scoped CLM-002 and CLM-008 wording needs Product Authority revalidation; see the approval record. Revalidate on any change to the web app origin, login route, sign-up policy, or availability. |
| CLM-011  | A separate KitaMo web app for store owners, with its own online account and sign-in, is live at `app.kitamo.online`. | approved | Available Today | `seller-web` | `../seller-web/README.md:1-7`; `../seller-web/app/login/page.tsx` | Approved: `/` testing explanation, `/how-it-works` introduction, `/about` current stage, shared footer description; owner (Product Authority), 2026-09-25 | Exact approved occurrences: "A separate web app for store owners, with its own sign-in, is at app.kitamo.online." (`/`, `/how-it-works`), "A separate web app for store owners is live at app.kitamo.online." (`/about`), and the footer description. Added so the Android-scoped CLM-002 and CLM-008 sentences no longer read as describing all of KitaMo. Approves no capability, feature, pricing, sign-up call to action or privacy wording for the web app. Revalidate on any change to the origin, sign-up policy or availability. |
| CLM-012 | The KitaMo web app is free while it is in testing; any future charge is announced first and needs the user's agreement. | approved | Available Today | `seller-web` | `../seller-web/app/(legal)/terms/page.tsx:35` | Approved: MR-1, all four routes; owner (Product Authority), 2026-09-26 | Exact occurrences: "Free while in testing" in the reassurance line, the FAQ answer, and About. Not a promise that KitaMo stays free. No price, plan, trial or tier may be named. Revalidate on any change to the Terms. |
| CLM-013 | Visitors can create a KitaMo web app account themselves at `https://app.kitamo.online/login?bago=1`. | approved | Available Today | `seller-web` | `../seller-web/app/login/page.tsx:35`, `:62`; HTTP 200 on 2026-09-26 | Approved: MR-1, all four routes; owner (Product Authority), 2026-09-26 | The primary action on every page, labelled exactly "Create free account". Revalidate if sign-up closes, the login route moves (the Ledger branch mentions `owner.kitamo.online` for the signed-in app), or the free status changes. |
| CLM-014 | The web app runs in a browser on a phone or on a tablet at the counter, and is designed for low-cost devices. | approved | Available Today | `seller-web` | `../seller-web/app/manifest.ts`; `../seller-web/docs/redesign/CLAUDE-DESIGN-BRIEF.md:15-18` (853 × 477 tablet, 2 GB RAM, 360–412 px phones) | Approved: MR-1, all four routes; owner (Product Authority), 2026-09-26 | Exact occurrences: "on your phone or a tablet at the counter", "Works in your browser", "Big buttons on an 8" tablet.", "Made for low-cost phones and tablets." Not a device-compatibility guarantee; no minimum specification is claimed. |
| CLM-015 | The web app can be used in English or Filipino, and the language can be changed. | approved | Available Today | `seller-web` | `../seller-web/lib/i18n/language-switch.tsx`; `../seller-web/app/login/page.tsx:94`; `../seller-web/app/(app)/akin/page.tsx` | Approved: MR-1, all four routes; owner (Product Authority), 2026-09-26 | Taglish is not claimed. Revalidate when a locale is added or removed. |
| CLM-016 | The seller rings up sales from a product shelf, with bundle prices, an exact-amount (Sakto) shortcut and change (sukli), and tags GCash, Maya or bank payments with a reference number. KitaMo records payments; it does not move money. | approved | Available Today | `seller-web` | `../seller-web/app/(app)/benta/sell.tsx`; `sell-parts.tsx`; `benta/bayad/bayad.tsx:100-126`, `:277-280` | Approved: MR-1, all four routes; owner (Product Authority), 2026-09-26 | The negative ("doesn't move money") must stay beside any payment wording. Quick cash keys (₱200, ₱500, ₱1,000) are pictured in plates but are on the `claude/ledger-foundation` branch; copy does not claim them (ADR-0012 launch gate). |
| CLM-017 | The seller keeps stock counts, sees low and out-of-stock items, logs spoilage (sira), and is told when a product has no cost. | approved | Available Today | `seller-web` | `../seller-web/app/(app)/paninda/list.tsx`; `../seller-web/lib/domain/profitMath.ts` | Approved: MR-1, all four routes; owner (Product Authority), 2026-09-26 | No barcode scanning, supplier ordering or automatic reordering may be implied. |
| CLM-018 | Utang tracks customers who owe the seller (Sa iyo) and suppliers the seller owes (Utang mo). | approved | Available Today | `seller-web` | `../seller-web/app/(app)/utang/page.tsx` | Approved: MR-1, all four routes; owner (Product Authority), 2026-09-26 | A record, not lending or collection. No reminders, SMS, interest or ageing may be implied. |
| CLM-019 | Gastos records repeating bills such as rent, electricity, water, wifi and wages, and marks them paid. | approved | Available Today | `seller-web` | `../seller-web/app/(app)/gastos/page.tsx` | Approved: MR-1, all four routes; owner (Product Authority), 2026-09-26 | Bill accounts, account numbers and fixed-vs-variable graphs are LATER in the app and must not be claimed. |
| CLM-020 | Kita shows profit for today, the week and the month, a 4-week trend and the top-earning items, using Tubo = Benta − Puhunan − Bayarin − Sira; a missing cost is flagged, never counted as zero. | approved | Available Today | `seller-web` | `../seller-web/app/(app)/kita-view.tsx`; `../seller-web/lib/domain/profitMath.ts` | Approved: MR-1, all four routes; owner (Product Authority), 2026-09-26 | The homepage receipt is an example day with sample figures, marked as such for screen readers and captioned. Not an accounting, tax or accuracy guarantee. |
| CLM-021 | A Hidden money view keeps money totals off the screen at the counter. | approved | Available Today | `seller-web` | `../seller-web/app/(app)/akin/page.tsx` (money view setting) | Approved: MR-1, all four routes; owner (Product Authority), 2026-09-26 | Privacy at the counter only; not a security or data-privacy claim. |
| CLM-022 | The on-screen receipt is a record for the seller and customer, not an official (BIR) receipt. | approved | Available Today | `seller-web` | `../seller-web/app/(app)/resibo/[saleId]/page.tsx:291` | Approved: MR-1, all four routes; owner (Product Authority), 2026-09-26 | Negative clarification. No tax or compliance claim. |
| CLM-023 | The web app needs an internet connection. | approved | Available Today | `seller-web` | `../seller-web/docs/research/README.md` (web is online-only) | Approved: MR-1, all four routes; owner (Product Authority), 2026-09-26 | Negative clarification. The word "offline" may describe only the Android pilot. |
| CLM-024 | There are no staff logins or multiple stalls yet. | approved | Available Today | `seller-web` | `../seller-web/docs/ROADMAP-V2.md` (R2 stalls, R3 staff) | Approved: MR-1, all four routes; owner (Product Authority), 2026-09-26 | Negative clarification. "Yet" states no date and promises no delivery. |
| CLM-025 | The web app's Privacy, Terms and Support pages are public at `app.kitamo.online/privacy`, `/terms` and `/support`. | approved | Available Today | `seller-web` | `../seller-web/app/(legal)/privacy/page.tsx`; `terms/page.tsx`; `support/page.tsx`; HTTP 200 on 2026-09-26 | Approved: MR-1, all four routes; owner (Product Authority), 2026-09-26 | Links only: footer on every route, and the About help link. This site publishes no legal text of its own. |
| CLM-026 | Product pictures show the KitaMo web app's screens with sample data; scene photos are AI-generated illustrations. | approved | Available Today | this repository | `docs/redesign/generation-kit/README.md`; ADR-0012 | Approved: MR-1, all four routes; owner (Product Authority), 2026-09-26 | Every picture is captioned "Screens show the KitaMo web app with sample data." and photos add "Illustration.". No real brand may appear in an image. People in photos are not customers and must never be presented as such. |

CLM-010 is the only `Available Today` entry. It covers only the reachability of
the separate web app through the `Sign in` link and does not change the status
of the Android testing candidate. There are no `Planned` entries in this
register. Approved Android entries remain **Currently Testing**. The WEB-4
About contract authorizes one deliberately broad `Future Vision` direction
without asserting
a factual future capability or delivery timing. Future-roadmap evidence must
not be added as a public claim until its status and wording are reviewed.

## WEB-3 homepage approval record

- **Approval context:** the WEB-3 implementation brief supplied on 2026-08-09
  explicitly authorizes the positioning, audience, testing boundary, minimum
  capability summary, local-device wording, informational CTAs, and continued
  provisional visual direction. The Website Architect approval applies only to
  `PAG-001` at `/`.
- **Evidence revalidation:** CLM-001 through CLM-007 were checked against
  `../owner-seller-mobile` at
  `0ce3efd8cb1c904fb362b27bc6cecd5dc937d925`. The cited evidence still exists;
  the current candidate remains Android-only, device-local, not publicly
  released, and bounded to the homepage capability areas used.
- **Exact wording authority:** the exact visible and metadata occurrences are
  recorded in `../content/web-3-homepage-content-contract.md`. Adaptation to a
  different route, metadata surface, audience, language, or product status is
  not approved automatically.
- **Revalidation trigger:** any Android or website product release; change in
  product identity, platform, audience, testing track, availability, download
  or enrollment workflow, data location, connectivity, capability scope, or
  metadata; or conflicting authoritative evidence.

## WEB-4 core-page approval record

- **Approval context:** the WEB-4 implementation brief supplied on 2026-08-09
  authorizes the bounded page purposes, wording directions, statuses,
  limitations, informational calls to action, and navigation for `PAG-002`,
  `PAG-004`, and `PAG-006`.
- **Approved surfaces:** `/for-sellers`, `/how-it-works`, and `/about`, plus the
  shared header and footer on the four implemented routes. No later route,
  public launch, or indexing change is authorized.
- **Evidence revalidation:** CLM-001 through CLM-008 were checked against
  `../owner-seller-mobile` at
  `0ce3efd8cb1c904fb362b27bc6cecd5dc937d925`. CLM-008 is approved only for the
  negative sentence recorded in the How It Works contract.
- **Exact wording authority:**
  `../content/web-4/for-sellers-content-contract.md`,
  `../content/web-4/how-it-works-content-contract.md`, and
  `../content/web-4/about-content-contract.md` record the page-specific use,
  exclusions, status, ownership, and revalidation conditions.
- **Future Vision boundary:** the About page may state a broad direction to
  keep exploring support for practical small-business needs only with the
  visible `Future Vision` label and explicit no-feature, no-timing,
  noncommitment text. This does not approve a roadmap capability claim.
- **Revalidation trigger:** any Android or website product release; change in
  identity, platform, audience, terminology, testing, availability, workflow,
  account, data location, connectivity, capability, mission, roadmap, or
  metadata; reuse on another surface; or conflicting evidence.

## Web app sign-in link approval record

- **Approval context:** owner report #2, supplied as an implementation brief on
  2026-09-25, reports that visitors to this website have no way to reach the
  web app. The owner, acting as Product Authority, approved a plain `Sign in`
  link and noted that `app.kitamo.online` is a live web app with open sign-up.
  The approval applies only to CLM-010.
- **Approved surfaces:** the shared header (desktop navigation and the mobile
  `Menu`) and the shared footer `Product` group on the four implemented routes.
  It is a secondary link. Each page's primary action is unchanged.
- **Exact wording and destination:** `Sign in` →
  `https://app.kitamo.online/login`, opened in the same tab, styled as an
  ordinary navigation or footer link and never with primary-action styling.
- **Evidence:** `../seller-web` at
  `9d30db6d21194870405f9e94ebd498107bbde8c0` serves the `/login` route with a
  sign-in form and a create-account mode. On 2026-09-25,
  `https://app.kitamo.online/login` responded with HTTP 200.
- **Exclusions:** this website still offers no sign-up, create-account,
  get-started, download, or pricing action, and it does not describe the web
  app's features, status, platform, accounts, or data handling.
- **Revalidation needed elsewhere:** CLM-002's note (do not imply a public web
  application), CLM-008's approved `No online KitaMo account` on
  `/how-it-works`, the footer description of an Android app that is currently
  testing, the `account` terminology row, and the accounts line under Known
  claim gaps were all written when KitaMo had no online account. They describe
  the Android testing candidate. Next to a site-wide `Sign in` link, a reader
  may take them as describing KitaMo as a whole. The Product Authority should
  decide whether those claims need revalidation or new wording. This approval
  does not change them.
- **Revalidation trigger:** a change to the web app origin, login route,
  sign-up policy, or availability; any added description of the web app; or
  reuse of the link on another surface.

## MR-1 web-first approval record

- **Approval context.** On 2026-09-26 the owner, acting as Product Authority,
  approved a web-first site (ADR-0012):
  - a primary "Create free account" action;
  - English copy with the app's seller words;
  - product pictures made from the web app's screens.

  The design and copy are in `docs/redesign/`. The exact wording is in
  `../content/mr-1-marketing-content-contract.md`.

- **Evidence.** CLM-012 to CLM-025 were traced to `../seller-web` on branch
  `claude/ledger-foundation` on 2026-09-26, and to production behaviour where
  the two differ. Checkout copy describes the keypad and Sakto, which
  production has today. The quick-cash keys shown in the plates are
  branch-only. The site should be published once the Ledger build is live
  (ADR-0012 launch gate).
- **Re-scoped Android claims.** CLM-002, CLM-003 and CLM-006 now appear only
  in two places:
  - the homepage FAQ answer "An offline Android version is Currently Testing
    and not yet available.";
  - the About "Where it stands" row.

  CLM-001's product name applies to both products. CLM-004, CLM-007 and
  CLM-008 have no MR-1 occurrence and stay approved only for their WEB-3/WEB-4
  wording, which is no longer published.

- **CLM-010 extension.** Sign in keeps its header, menu and footer links. It
  gains one secondary button in the homepage hero, which never takes primary
  styling. Tests enforce this.
- **CLM-011.** The web app is stated as **Available Today** on About, and its
  description is carried by CLM-012 to CLM-024.
- **Revalidation trigger.** Any of these requires revalidation:
  - a web-app release that changes a pictured screen or a claimed capability;
  - a change to sign-up, the login route or origin, the Terms' free-during-
    testing clause, or the legal pages;
  - a new image, language or route.

## Known claim gaps

No claim entry may yet assert any of the following (MR-1 narrows two: web-app
accounts are claimed through CLM-013, and "free while in testing" through
CLM-012; no price, plan or tier is claimed):

- an official public website domain beyond ADR-0011's canonical origin;
- a public support contact;
- a legal organization or company identity;
- public availability of the Android app, or any launch date;
- production cloud synchronization or backup;
- customer-mobile, public Admin, or public API availability;
- advanced or predictive analytics;
- general public AI functionality;
- staff accounts or remote multi-device access (web-app owner accounts are
  claimed only through CLM-013);
- subscriptions, prices, discounts, or paid plans (only "free while in
  testing" is claimed, through CLM-012);
- an approved public privacy policy, account-deletion service, or remote support
  workflow;
- privacy, security, compliance, certification, revenue, customer-count, or
  business-outcome guarantees.

CLM-010 is a narrow exception. It records only that a live web app sits behind
the header and footer `Sign in` link. It does not open the account,
availability, pricing, or capability gaps above for any other wording.

The gaps remain closed until authoritative evidence and explicit public approval
are both recorded. Placeholder contacts, draft legal text, roadmap documents,
mock data, internal hosts, tests, and implementation details are not public
claim authority.

## Governance workflow

1. Record one bounded factual proposition and assign a stable claim ID.
2. Trace it to the operational product authority or another source explicitly
   delegated by the Platform Master.
3. Check the evidence date, source revision, conflicts, exclusions, and product
   status.
4. Draft public wording separately; do not copy internal implementation detail
   into the public proposition.
5. Validate terminology against `docs/governance/public-terminology.md`.
6. Record explicit approval for the wording, audience, surface, and status
   category.
7. Publish only the approved wording within its approved scope.
8. Date sensitive statements and revalidate them before every major release.

## Revalidation triggers

Set an `approved` claim to `requires revalidation` when any of these occurs:

- a major product, app, or website release;
- a change to the cited source or source authority;
- a change in platform, testing track, availability, roadmap, pricing, data
  handling, AI, synchronization, account, support, domain, privacy, security, or
  legal status;
- conflicting evidence appears;
- approved wording is adapted for a new audience, language, region, or surface;
- the approval's review date or scope is no longer current.

If a claim can no longer be supported, mark it `outdated` or `rejected`; do not
leave it approved with a hidden disclaimer.

## Register hygiene

- Use repository-relative evidence paths only.
- Do not record secret values, credentials, personal contact details, private
  infrastructure, private operational workflows, or production data.
- Do not treat mock data, tests, draft store copy, inferred behavior, or roadmap
  intent as proof of current public availability.
- Keep a claim's factual proposition separate from final marketing copy.
- Record negative evidence and material limitations in the notes rather than
  omitting them.
