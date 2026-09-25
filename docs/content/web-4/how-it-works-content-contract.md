# WEB-4 How It Works Content Contract

Status: **Approved for implementation; non-indexed preview only**

Approved: 2026-08-09

Page ID: `PAG-004`

Route: `/how-it-works`

Approval context: WEB-4 implementation brief supplied by the Website Architect

## Page purpose and audience

Explain what a Filipino small-business owner or seller can do in the current
Android test without exposing implementation architecture or suggesting an
account, online service, payment service, or customer product.

## Claims and evidence

| Claim IDs        | Approved use on this page                                                                                                         | Evidence sources                                                                                                                                                                     |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CLM-001, CLM-002 | KitaMo name and Android testing context                                                                                           | `../../../../owner-seller-mobile/app.json`; `../../../../owner-seller-mobile/README.md`                                                                                              |
| CLM-003, CLM-006 | Visible `Currently Testing` status; no open public release, download, or tester enrollment                                        | `../../../../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md`; `../../../../owner-seller-mobile/docs/release/final-release-readiness.md`                       |
| CLM-004          | Device-local operation, no internet requirement for current supported workflows, and no automatic cloud synchronization or backup | `../../../../owner-seller-mobile/app/privacy.tsx`; `../../../../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md`                                               |
| CLM-007          | Local business setup followed by the bounded `Record sales`, `Track inventory`, and `Review business records` sequence            | `../../../../owner-seller-mobile/README.md`; `../../../../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`; `../../../../owner-seller-mobile/docs/release/final-release-readiness.md` |
| CLM-008          | Negative current-scope clarification: `No online account in the Android test app` (revalidated 2026-09-25)                        | `../../../../owner-seller-mobile/README.md`; `../../../../owner-seller-mobile/app/privacy.tsx`; `../../../../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md`  |

CLM-008 is approved only for that negative WEB-4 wording. It is not a promise
about future account policy and does not authorize deletion guidance.

## Status categories

`Currently Testing` governs the whole current workflow. No future capability is
shown. The limitations section is a current-scope boundary, not a roadmap.

## Calls to action

- Primary: `See who KitaMo is for` → `/for-sellers`
- Secondary: `View testing status` → `/#testing-status`

## Prohibited claims

Do not claim payment processing, online payments, hardware integrations,
customer ordering, supplier integrations, replenishment, forecasting,
recommendations, AI, cloud inventory, cross-device access, official or tax
records, guaranteed calculations, public download, public tester enrollment,
or an available account.

Do not expose database, provider, service, repository, environment, or other
private architecture vocabulary.

## Ownership and review triggers

- Content owner role: Website Content Owner (unassigned)
- Approval role: Website Architect
- Accuracy role: Product Authority
- Required reviewers: Accessibility Reviewer and Product Authority

Revalidate on any Android or website release; workflow, setup, reports,
connectivity, data location, backup, synchronization, account, testing, or
availability change; reuse on another surface; indexing or canonical-host
change; or conflicting evidence.

## Indexing and dependencies

Global `noindex`, `nofollow`, and `nocache` remain required. No canonical URL or
structured data is approved. Screenshots remain deferred until real product
imagery is approved. Public launch still depends on approved support, privacy,
legal, canonical-host, production-readiness, and claim revalidation work.
