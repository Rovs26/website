# KitaMo Public Terminology Governance

Status: **Foundation only; approval required**

Evidence reviewed: 2026-07-25
Source snapshots: `../owner-seller-mobile` at
`6ed9ace3a92f7435f84c2f75f0084a03070ae2e4`; `../admin` at
`b9460858bf91cd5bf50536d469ff7106ce92b483`

This register controls words that can change how the public understands KitaMo,
its audiences, roles, records, calculations, or availability. It does not
create cross-repository domain definitions. Shared Contracts or the Platform
Master must validate any definition with product or business-logic impact.

## Classification rules

| Classification      | Meaning                                                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Approved public     | Explicitly approved for public use with a stable meaning and scope                                                         |
| Internal-only       | An engineering, repository, architecture, workstream, or internal product label that must not appear in public content     |
| Provisional         | Supported as a candidate plain-language term for drafts and internal preview, but not approved for publication             |
| Prohibited public   | Must not appear in public content in the stated scope because it is unsupported, misleading, sensitive, or disallowed      |
| Validation-required | Must be checked with Shared Contracts or the Platform Master before public use; this website must not finalize its meaning |

Classification applies to both the term and the meaning assigned to it. Claim
approval is still required when an approved term is used in a factual product
statement.

## Approved public terms

None recorded. The inspected sources establish current usage, but no explicit
public-web terminology approval record was found. This foundation cannot approve
a product name, role, business entity, financial concept, capability, or future
product term independently.

## Governed product and business terms

The “evidence signal” column describes current usage; it is not a final
definition.

| Term            | Primary classification | Evidence signal                                                                                                                                                                                                      | Public-use rule                                                                                                                                                                     |
| --------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| KitaMo          | Provisional            | Current Android configuration and release documentation consistently use this product name and casing: `../owner-seller-mobile/app.json`; `../owner-seller-mobile/docs/release/final-release-readiness.md`           | Preserve the current spelling in internal drafts, but obtain explicit public-web terminology approval. This does not approve a wordmark, tagline, claim, or availability statement. |
| seller          | Provisional            | Android materials use `seller` for the current pilot audience: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/release/tester-plan.md`                                                              | Candidate audience term only. Approve its scope and Tagalog/English alternatives before publication. Do not imply an account or remote role.                                        |
| owner           | Validation-required    | Android uses Owner Mode and owner-restricted screens: `../owner-seller-mobile/README.md`                                                                                                                             | Role meaning affects access and business ownership. Validate it; do not equate it automatically with a legal owner, account holder, administrator, or seller.                       |
| owner-seller    | Internal-only          | The compound appears in the operational repository/workstream identity (`../owner-seller-mobile`) rather than an approved public glossary.                                                                           | Keep as an internal product-authority label unless the Platform Master explicitly reclassifies it.                                                                                  |
| business        | Validation-required    | Android records and UI use business context: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`                                                                                 | Validate whether it means an enterprise, a local data record, a merchant, or an operating context. Do not imply legal registration.                                                 |
| store           | Validation-required    | Draft material uses `sari-sari store`, while implemented contexts also use stall/branch language: `../owner-seller-mobile/docs/play-store/store-listing-draft.md`; `../admin/docs/shared-data-contract-alignment.md` | Use only for an ordinary business-type reference after content review. Do not define it as a canonical entity or silently treat it as `stall` or `branch`.                          |
| customer        | Validation-required    | Current Android scope says Customer Mode is not enabled: `../owner-seller-mobile/README.md`                                                                                                                          | Do not imply a current customer application, customer account, ordering flow, or customer-facing capability. Validate future use and status.                                        |
| account         | Prohibited public      | Current Android release evidence says there is no account service: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/play-store/release-notes-internal.md`                                            | Do not describe accounts, login, registration, recovery, or account-backed data as currently available. Reclassification requires product evidence and Platform Master approval.    |
| user            | Validation-required    | Internal repositories use broad user concepts, but no approved public role glossary exists: `../admin/docs/shared-data-contract-alignment.md`                                                                        | Prefer a specific validated audience or role. Do not use `user` to blur owner, seller, staff, customer, tester, or administrator.                                                   |
| staff           | Validation-required    | The current Android product uses a shared-device Kiosk model and says staff accounts are absent: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`                             | Do not imply staff accounts, employee management, permissions, assignments, or remote access. Validate any general people reference.                                                |
| inventory       | Provisional            | Inventory is an implemented Android product area: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`                                                                            | Candidate plain-language capability term. A public claim still needs scope, status, evidence, and approval. Do not invent accounting or synchronization meaning.                    |
| sales           | Provisional            | Local sales records and selling flows are evidenced in Android: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`                                                              | Candidate plain-language record/activity term. Validate public wording and avoid implying payment processing, tax reporting, or guaranteed accuracy.                                |
| expenses        | Validation-required    | Android distinguishes fixed costs, spoilage, sold cost, and other report inputs: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/food-business-engine.md`                                           | Do not collapse distinct calculation categories into `expenses` or imply accounting, tax, or financial-advice authority without contract validation.                                |
| profit          | Validation-required    | Android documents a bounded local report calculation: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/release/final-release-readiness.md`                                                           | Validate the exact measure, inputs, time range, exclusions, and label before public use. Never imply guaranteed profit, audited accounts, tax advice, or business results.          |
| utang           | Prohibited public      | No current authoritative implementation or approved definition was found in the inspected product source.                                                                                                            | Do not imply debt, credit-sale, receivables, lending, collection, or repayment functionality. Future use requires contract evidence and explicit approval.                          |
| analytics       | Validation-required    | Current release documentation denies analytics services while local reports/insights exist, making the word ambiguous: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`       | Distinguish local reports from telemetry and from advanced or predictive analytics. Do not claim analytics availability until the intended meaning and status are approved.         |
| AI              | Validation-required    | The current Android Helper is local and explicitly not AI; future AI work is deferred: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/play-store/release-notes-internal.md`                        | Do not present general public AI as current. Any future mention must state practical behavior, limitations, data use, and product status without hype.                              |
| synchronization | Validation-required    | Current Android records future synchronization intent but has no active synchronization worker: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/release/final-release-readiness.md`                 | Do not describe sync, backup, cross-device continuity, conflict handling, or recovery as available. Avoid internal queue terminology in public content.                             |
| offline         | Provisional            | Local-first and offline operation are evidenced for the Android pilot: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`                                                       | Candidate public concept, but the exact claim and limitations require approval. Prefer practical plain language over an undefined absolute guarantee.                               |
| cloud           | Validation-required    | Current release evidence says cloud services are not enabled: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/release/final-release-readiness.md`                                                   | Use only in an approved status context. Do not imply current cloud storage, backup, sync, access, security, or release timing.                                                      |
| subscription    | Prohibited public      | Subscriptions and payments are deferred: `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`                                                                                                                         | Do not imply a current subscription, paid tier, trial, billing cycle, price, discount, cancellation policy, or purchase path.                                                       |

## Related terms requiring the same controls

| Term                                    | Classification                   | Rule                                                                                                                                                                                                                                        |
| --------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stall                                   | Validation-required              | Admin currently identifies `stall` as canonical, while Android retains legacy branch fields. Shared Contracts must resolve cross-system meaning before the website defines it. Evidence: `../admin/docs/shared-data-contract-alignment.md`. |
| branch                                  | Internal-only pending validation | Treat as a source-model compatibility term, not a public synonym for store or stall.                                                                                                                                                        |
| tindahan, paninda, benta, bayarin, tubo | Provisional                      | Filipino terms appear in Android UI and draft release material. Review meaning, audience comprehension, regional fit, and English pairing before publication.                                                                               |
| Gabi                                    | Internal-only                    | Current Android design-system/theme label; not an approved public product, feature, or website-brand name.                                                                                                                                  |
| Owner Mode, Kiosk Mode                  | Validation-required              | Current application labels whose public explanation could imply roles or permissions. Validate scope before use.                                                                                                                            |

## Internal-only and prohibited vocabulary

Public content must not expose implementation or workspace vocabulary,
including:

- repository names and repository structure;
- Platform API or internal Admin architecture;
- Shared Contracts as an implementation dependency;
- SQLite, tables, migrations, queues, schemas, source-of-truth internals, and
  database architecture;
- service-provider names, authentication-provider names, environment variable
  names, credentials, deployment secrets, and monitoring tools;
- private hosts, private workflows, internal release artifacts, build IDs, and
  internal approval mechanics.

The following wording patterns are prohibited:

- “AI magic” or equivalent unexplained automation language;
- “available now” for anything only testing, planned, or envisioned;
- “cloud-enabled,” “synced,” “backed up,” or “works on every device” without an
  approved current claim;
- guaranteed income, savings, profit, growth, accuracy, security, privacy, or
  business outcomes;
- language that implies certification, financial advice, legal compliance, or
  official tax/receipt status without specific authority.

## Validation workflow

1. Identify the exact public sentence and the intended audience.
2. Check this term's current classification and the public claims register.
3. For `Validation-required`, obtain a Shared Contracts definition or a
   Platform Master decision; do not create a website-local definition.
4. For `Provisional`, obtain content approval and a traced claim before
   publication.
5. For `Internal-only` or `Prohibited public`, remove the term unless an explicit
   reclassification is recorded.
6. Record status, approver, date, scope, and revalidation trigger.

Revalidate this register when Shared Contracts becomes authoritative, when a
role or capability changes, and before every major public release.
