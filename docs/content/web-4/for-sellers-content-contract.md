# WEB-4 For Sellers Content Contract

> **Superseded 2026-09-26** by [`mr-1-marketing-content-contract.md`](../mr-1-marketing-content-contract.md) (ADR-0012). Kept as the record of the WEB-3/WEB-4 approvals; this wording is no longer published.

Status: **Approved for implementation; non-indexed preview only**

Approved: 2026-08-09

Page ID: `PAG-006`

Route: `/for-sellers`

Approval context: WEB-4 implementation brief supplied by the Website Architect

## Page purpose and audience

Help Filipino small-business owners and sellers judge whether KitaMo is being
designed around a setting like theirs. The page is an orientation surface, not
an adoption claim, universal-fit promise, or sales funnel.

The approved examples are sari-sari stores, karinderias, food stalls, kiosks,
market vendors, home businesses, and small retailers. They describe intended
contexts only.

## Claims and evidence

| Claim IDs        | Approved use on this page                                                                                    | Evidence sources                                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CLM-001, CLM-002 | KitaMo name and Android app description                                                                      | `../../../../owner-seller-mobile/app.json`; `../../../../owner-seller-mobile/README.md`                                                                                            |
| CLM-003, CLM-006 | Visible `Currently Testing` status; limited Android testing; no open public release, download, or enrollment | `../../../../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md`; `../../../../owner-seller-mobile/docs/release/final-release-readiness.md`                     |
| CLM-004          | Current supported workflows are local to the device and do not require an internet connection                | `../../../../owner-seller-mobile/app/privacy.tsx`; `../../../../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md`                                             |
| CLM-005          | Intended Filipino seller audience and the seven bounded business-setting examples                            | `../../../../owner-seller-mobile/docs/release/tester-plan.md`; `../../../../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`; `../../../../owner-seller-mobile/app/owner/about.tsx` |
| CLM-007          | `Record sales`, `Track inventory`, and `Review business records`, each qualified as current test scope       | `../../../../owner-seller-mobile/README.md`; `../../../../owner-seller-mobile/docs/release/final-release-readiness.md`                                                             |

The everyday-challenge copy describes possible record-keeping situations in
conditional language. It does not assert formal research, measured prevalence,
or a product outcome.

## Status categories

`Currently Testing` governs the hero and every current-capability statement.
No `Available Today`, `Planned`, or `Future Vision` proposition appears.

## Calls to action

- Primary: `See how KitaMo works` → `/how-it-works`
- Secondary: `View testing status` → `/#testing-status`

Both are informational. No download, enrollment, sign-up, account, payment, or
contact action is permitted.

## Prohibited claims

Do not claim current customers, adoption, universal suitability, business
results, large or multi-branch support, online ordering, loyalty, cloud
collaboration, multi-device synchronization, public AI, pricing, public
availability, partnerships, endorsements, or statistics.

## Ownership and review triggers

- Content owner role: Website Content Owner (unassigned)
- Approval role: Website Architect
- Accuracy role: Product Authority
- Required reviewers: Accessibility Reviewer and Product Authority

Revalidate on any Android or website release; audience, terminology, testing,
availability, capability, connectivity, or data-location change; copy reuse on
another surface; indexing or canonical-host change; or conflicting evidence.

## Indexing and dependencies

Global `noindex`, `nofollow`, and `nocache` remain required. No canonical URL or
structured data is approved. Public launch depends on later support, privacy,
legal, canonical-host, production-readiness, and claim-revalidation decisions.
WEB-5A routes are not a dependency for this local WEB-4 review build and must
not be linked before implementation.
