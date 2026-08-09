# WEB-4 About Content Contract

Status: **Approved for implementation; non-indexed preview only**

Approved: 2026-08-09

Page ID: `PAG-002`

Route: `/about`

Approval context: WEB-4 implementation brief supplied by the Website Architect

## Page purpose and audience

Explain why KitaMo is being built, whom it is intended for, and how the team
approaches the current test without inventing an organization history, legal
identity, market research, partnership, adoption, or measured impact.

The audience is a Filipino small-business owner or seller who wants context on
the product's direction and maturity.

## Claims and evidence

| Claim IDs        | Approved use on this page                                                                               | Evidence sources                                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CLM-001, CLM-002 | KitaMo name and Android app description                                                                 | `../../../../owner-seller-mobile/app.json`; `../../../../owner-seller-mobile/README.md`                                                                                            |
| CLM-003, CLM-006 | Visible `Currently Testing` stage, Android focus, product change boundary, and no open public release   | `../../../../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md`; `../../../../owner-seller-mobile/docs/release/final-release-readiness.md`                     |
| CLM-004          | Current supported workflows are local to the device and useful without requiring an internet connection | `../../../../owner-seller-mobile/app/privacy.tsx`; `../../../../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md`                                             |
| CLM-005          | Intended Filipino small-business owner and seller context                                               | `../../../../owner-seller-mobile/docs/release/tester-plan.md`; `../../../../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`; `../../../../owner-seller-mobile/app/owner/about.tsx` |
| CLM-007          | Current-test business-record tasks referenced by the page principles                                    | `../../../../owner-seller-mobile/README.md`; `../../../../owner-seller-mobile/docs/release/final-release-readiness.md`                                                             |

The purpose and principles are approved directional wording from the WEB-4
brief, explicitly bounded as intent rather than measured impact.

## Status categories

`Currently Testing` governs the current Android stage. A separate, later
section uses `Future Vision` only for the broad direction of continuing to
explore support for practical small-business needs. It explicitly states that
the direction may change, promises no specific feature, and gives no timing.
No roadmap capability is asserted, so no new factual claim ID is created.

## Calls to action

- Primary: `See who KitaMo is for` → `/for-sellers`
- Secondary: `See how KitaMo works` → `/how-it-works`

## Prohibited claims

Do not claim corporate history, legal or nonprofit status, market leadership,
nationwide use, formal research, customers, testimonials, partners,
government endorsement, measured social or economic impact, business outcomes,
awards, ratings, certifications, pricing, launch timing, AI, cloud
synchronization, accounts, customer applications, or specific future features.

## Ownership and review triggers

- Content owner role: Website Content Owner (unassigned)
- Approval role: Website Architect
- Accuracy role: Product Authority
- Required reviewers: Accessibility Reviewer and Product Authority

Revalidate on any Android or website release; mission, audience, terminology,
organization identity, legal identity, current-stage, roadmap, capability,
connectivity, or availability change; content reuse; indexing or canonical-host
change; or conflicting evidence.

## Indexing and dependencies

Global `noindex`, `nofollow`, and `nocache` remain required. No canonical URL,
organization structured data, founder identity, address, contact, or external
profile is approved. Public launch depends on later legal/operator identity,
support, privacy, canonical-host, production-readiness, and claim revalidation
decisions.
