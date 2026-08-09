# KitaMo Public Claims Register

Status: **WEB-3 homepage claims approved in bounded scope**

Evidence reviewed: 2026-08-09
Primary source snapshot: `../owner-seller-mobile` at
`0ce3efd8cb1c904fb362b27bc6cecd5dc937d925`

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
are approved only for the exact WEB-3 homepage occurrences recorded below.
CLM-008 and CLM-009 remain unapproved and must not be inferred from that approval.

<!-- prettier-ignore -->
| Claim ID | Proposed Public Claim                                                                                                                                                                              | Status         | Product Status Category | Source Repository     | Source Evidence                                                                                                                                                                             | Approval                                     | Notes                                                                                                                                                                                                                                                                            |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ----------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CLM-001  | The current Android application is named KitaMo.                                                                                                                                                   | approved       | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/app.json`; `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:7-17`                                                                          | Approved — WEB-3 Home, Website Architect, 2026-08-09 | Product identity only; this does not approve another page, tagline, wordmark, or availability statement. Revalidate when the product or public brand identity changes.                                                                                                                             |
| CLM-002  | The current product under test is an Android application.                                                                                                                                          | approved       | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/README.md:1-9`; `../owner-seller-mobile/app.json`                                                                                                                    | Approved — WEB-3 Home, Website Architect, 2026-08-09 | Do not imply iOS, a customer application, a public web application, or another platform is available. Revalidate when the platform or release scope changes.                                                                                                                                       |
| CLM-003  | The current Android build is a release candidate for Google Play Internal Testing; it has not been approved for tester rollout or public rollout.                                                  | approved       | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:3-5`; `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:173-183`                            | Approved — WEB-3 Home, Website Architect, 2026-08-09 | Approval covers the visible `Currently Testing` boundary, not internal track detail. Revalidate the exact track, upload, distribution, and approval state before every product release or homepage publication.                                                                                     |
| CLM-004  | The current Android testing candidate keeps its current-release business data on the Android device and does not provide cloud backup or synchronization.                                        | approved       | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:147-167`; `../owner-seller-mobile/app/privacy.tsx:29-35`; `../owner-seller-mobile/app/privacy.tsx:59-72`            | Approved — WEB-3 Home, Website Architect, 2026-08-09 | Approval covers device-local, current-workflow homepage wording with an explicit backup/recovery limitation. Do not expose implementation detail or convert this into a privacy, security, recovery, or data-loss guarantee. Revalidate on any data-handling or release change.                       |
| CLM-005  | The Android pilot is intended for Filipino small sellers, including microbusiness and food-stall operators.                                                                                        | approved       | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/docs/release/tester-plan.md:3-13`; `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md:3-9`; `../owner-seller-mobile/app/owner/about.tsx:31-44`                         | Approved — WEB-3 Home, Website Architect, 2026-08-09 | Approval uses `Filipino small-business owners and sellers` and the approved examples only as intended contexts. It does not prove adoption, statutory business size, universal fit, or current use. Revalidate when audience scope or terminology changes.                                             |
| CLM-006  | Broad public availability has not been approved.                                                                                                                                                   | approved       | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:3-5`; `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:173-183`                            | Approved — WEB-3 Home, Website Architect, 2026-08-09 | Approval covers `not an open public release`, `not an open public download`, and no tester enrollment on this website. It is not a launch promise, date, waitlist, download path, or invitation. Revalidate on every testing-track, download, or release change.                                       |
| CLM-007  | The current Android testing candidate includes local setup for a business and stall, local sales and receipts, inventory records, and local reports.                                               | approved       | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/README.md:20-38`; `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:30-38`; `../owner-seller-mobile/docs/release/final-release-readiness.md:36-46` | Approved — WEB-3 Home, Website Architect, 2026-08-09 | Approval is limited to the homepage phrases `Record sales`, `Track inventory`, and `Review business records`, with local/current-test qualifications. It does not approve receipt, payment, accounting, accuracy, remote-operation, cloud, analytics, AI, or business-outcome claims. Revalidate on any capability or release change. |
| CLM-008  | The current Android testing candidate does not create an account or provide login or an account-deletion workflow.                                                                                 | evidence found | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/README.md:20-25`; `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:147-167`; `../owner-seller-mobile/app/privacy.tsx:29-35`                  | Unapproved — no public claim approval record | This is a current-release boundary, not a promise that accounts will never exist. Do not confuse account deletion with removal of data held locally by the current Android app.                                                                                                                      |
| CLM-009  | For the current Android testing candidate, locally held app data can be removed through the in-app local-data reset, by clearing the app's storage, or by uninstalling the app.                     | evidence found | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/app/privacy.tsx:59-64`; `../owner-seller-mobile/app/owner/business-settings.tsx:482-531`; `../owner-seller-mobile/app/owner/business-settings.tsx:819-879`; `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md:40-50` | Unapproved — no public claim approval record | Requires Product Authority and Privacy Owner review before use. The in-app full reset is blocked until an Owner PIN exists and then requires the current local PIN; clearing app storage and uninstalling are separate device actions. This is not an account-deletion service, does not cover intentionally shared data, and must not be generalized to future server, account, support, retention, or third-party data. |

There are no `Available Today`, `Planned`, or `Future Vision` entries in this
register. The approved entries are limited to WEB-3 Home and remain
**Currently Testing**. Future-roadmap evidence must not be added as a public
claim until its status and wording have been reviewed explicitly.

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
