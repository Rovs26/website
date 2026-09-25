# KitaMo Public Claims Register

Status: **WEB-3 homepage and WEB-4 core-page claims approved in bounded scope;
CLM-010 web app sign-in link approved 2026-09-25**

Evidence reviewed: 2026-08-09 (CLM-001 to CLM-009); 2026-09-25 (CLM-010)
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
| CLM-008  | The current Android testing candidate does not create an account or provide login or an account-deletion workflow.                                                                                 | approved | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/README.md:20-25`; `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:147-167`; `../owner-seller-mobile/app/privacy.tsx:29-35`                  | Approved — WEB-4 `/how-it-works` negative clarification only, Website Architect, 2026-08-09 | Exact approved occurrence: `No online KitaMo account`. This is a current-release boundary, not a promise that accounts will never exist. It does not approve login, account-deletion, privacy, support, or local-data-removal guidance.                                                                                                                      |
| CLM-009  | For the current Android testing candidate, locally held app data can be removed through the in-app local-data reset, by clearing the app's storage, or by uninstalling the app.                     | evidence found | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/app/privacy.tsx:59-64`; `../owner-seller-mobile/app/owner/business-settings.tsx:482-531`; `../owner-seller-mobile/app/owner/business-settings.tsx:819-879`; `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:40-50` | Unapproved — no public claim approval record | Requires Product Authority and Privacy Owner review before use. The in-app full reset is blocked until an Owner PIN exists and then requires the current local PIN; clearing app storage and uninstalling are separate device actions. This is not an account-deletion service, does not cover intentionally shared data, and must not be generalized to future server, account, support, retention, or third-party data. |
| CLM-010  | The KitaMo web app at `app.kitamo.online` is live, and visitors can reach it from this website through a secondary `Sign in` link to `https://app.kitamo.online/login`.                               | approved       | Available Today         | `seller-web`          | `../seller-web/app/login/page.tsx:13-20`; `../seller-web/app/login/page.tsx:158-172` | Approved — shared header and footer on `/`, `/for-sellers`, `/how-it-works`, and `/about`; owner (Product Authority), 2026-09-25 | Owner approval note: `app.kitamo.online` is a live web app with open sign-up. Exact approved occurrence: the link label `Sign in`, destination `https://app.kitamo.online/login`, same tab, secondary styling, in the desktop header, the mobile Menu, and the footer `Product` group. It is not a primary action. It approves no sign-up, create-account, get-started, download, pricing, capability, platform, account, privacy, or support wording, and no status label or description of the web app. The `Available Today` category restates the owner's note and applies to web-app reachability only. The Android-scoped CLM-002 and CLM-008 wording needs Product Authority revalidation; see the approval record. Revalidate on any change to the web app origin, login route, sign-up policy, or availability. |

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

## Known claim gaps

No claim entry may yet assert any of the following:

- an official public website domain;
- a public support contact;
- a legal organization or company identity;
- public app availability or a launch date;
- production cloud synchronization or backup;
- customer-mobile, public Admin, or public API availability;
- advanced or predictive analytics;
- general public AI functionality;
- accounts, staff accounts, or remote multi-device access;
- subscriptions, prices, discounts, or paid plans;
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
