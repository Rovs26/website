# KitaMo Public Claims Register

Status: **Foundation only; all initial entries are unapproved**

Evidence reviewed: 2026-07-25
Primary source snapshot: `../owner-seller-mobile` at
`6ed9ace3a92f7435f84c2f75f0084a03070ae2e4`

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

## Initial traced facts

The wording below is a controlled factual proposition for review, not final page
copy. Every entry remains unapproved because no explicit public-website claim
approval record was found.

| Claim ID | Proposed Public Claim                                                                                               | Status         | Product Status Category | Source Repository     | Source Evidence                                                                                                                                                            | Approval                                     | Notes                                                                                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------------------- | -------------- | ----------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CLM-001  | The current Android application is named KitaMo.                                                                    | evidence found | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/app.json`; `../owner-seller-mobile/docs/release/final-release-readiness.md`                                                                        | Unapproved — no public claim approval record | Product identity only; this does not approve a tagline, wordmark, or availability statement.                                                                         |
| CLM-002  | The current product under test is an Android application.                                                           | evidence found | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/README.md`; `../owner-seller-mobile/app.json`                                                                                                      | Unapproved — no public claim approval record | Do not imply iOS, web-app, customer-app, or other platform availability.                                                                                             |
| CLM-003  | The Android application is at the internal-testing stage; public rollout is not approved.                           | evidence found | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/docs/release/final-release-readiness.md`; `../owner-seller-mobile/README.md`                                                                       | Unapproved — no public claim approval record | Date-sensitive release-state statement. Revalidate immediately before any use.                                                                                       |
| CLM-004  | The current testing build is designed for local-first operation and to keep its current-release data on the device. | evidence found | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/play-store/release-notes-internal.md`; `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`                | Unapproved — no public claim approval record | Public wording must remain practical and must not expose storage implementation. Do not convert this into an absolute privacy, security, backup, or data-loss claim. |
| CLM-005  | The Android pilot is intended for Filipino small sellers, including microbusiness and food-stall operators.         | evidence found | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/docs/release/tester-plan.md`; `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`; `../owner-seller-mobile/docs/play-store/store-listing-draft.md` | Unapproved — no public claim approval record | The store listing is a draft; audience wording requires content approval before publication.                                                                         |
| CLM-006  | Broad public availability has not been approved.                                                                    | evidence found | Currently Testing       | `owner-seller-mobile` | `../owner-seller-mobile/docs/release/final-release-readiness.md`; `../owner-seller-mobile/README.md`                                                                       | Unapproved — no public claim approval record | This is a release-boundary fact, not a launch promise or timeline.                                                                                                   |

There are no `Available Today`, `Planned`, `Future Vision`, or `approved` entries
in this initial register. Future-roadmap evidence must not be added as a public
claim until its status and wording have been reviewed explicitly.

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
