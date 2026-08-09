# KitaMo Public Terminology Governance

Status: **WEB-3 homepage terminology approved in bounded scope**

Evidence reviewed: 2026-08-09
Source snapshots: `../owner-seller-mobile` at
`0ce3efd8cb1c904fb362b27bc6cecd5dc937d925`; `../admin` at
`b9460858bf91cd5bf50536d469ff7106ce92b483`

This register controls words that can change how the public understands KitaMo,
its audiences, roles, records, calculations, or availability. It does not
create cross-repository domain definitions. Shared Contracts or the Platform
Master must validate any definition with product or business-logic impact.
The inspected Shared Contracts directory has no implemented public export, so
Admin or planning-document vocabulary cannot substitute for that approval.

## WEB-3 homepage terminology approval

The 2026-08-09 WEB-3 implementation approval authorizes these terms only in the
exact `PAG-001` wording recorded in
`../content/web-3-homepage-content-contract.md`:

- **KitaMo** as the current product name;
- **Android app** as the precise current platform description;
- **Filipino small-business owners and sellers** as ordinary intended-audience
  wording, without defining a legal role, account, registration class, or
  statutory business size;
- **sari-sari stores, karinderias, food stalls, kiosks, market stalls, and home
  businesses** only as intended practical contexts, not canonical product
  entities, proof of adoption, or evidence of universal fit;
- **sales**, **inventory**, **business records**, and **local reports** only in
  the bounded CLM-007 homepage summary, without payment-processing, official
  receipt, accounting, tax, accuracy, predictive, or business-result meaning;
- **offline use** only through the current-version device-local wording and its
  adjacent limitation; and
- **Currently Testing**, **test version**, and **test app** only with the
  visible controlled status and explicit no-public-download boundary.

This scoped approval does not replace Shared Contracts, define business logic,
or reclassify the terms for WEB-4 or later pages. Revalidate it on any product
release, audience or terminology change, language adaptation, new route use, or
conflicting authoritative evidence.

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

<!-- prettier-ignore -->
| Term                             | Primary classification | Evidence signal                                                                                                                                                                                                                      | Public-use rule                                                                                                                                                                                                                                                                      |
| -------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| KitaMo                           | Provisional            | Current Android configuration and current release-candidate documentation consistently use this product name and casing: `../owner-seller-mobile/app.json`; `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md`. | Preserve the spelling in architecture drafts, but obtain public-web terminology approval. This does not approve a wordmark, tagline, availability statement, or meaning for the `Mo` portion of the name.                                                                             |
| seller                           | Provisional            | Android materials use `seller` for the pilot audience: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/release/tester-plan.md`.                                                                                      | Candidate audience term only. Approve its scope and Filipino or Tagalog alternatives before publication. Do not imply a seller account, remote role, employment relationship, or canonical identity.                                                                                  |
| owner                            | Validation-required    | Android uses Owner Mode and owner-restricted screens: `../owner-seller-mobile/README.md`.                                                                                                                                            | Role meaning affects access and business ownership. Do not equate it automatically with a legal owner, account holder, administrator, or every seller.                                                                                                                               |
| owner-seller                     | Internal-only          | The compound appears in an operational repository and workstream identity rather than an approved public glossary.                                                                                                                   | Keep it out of public copy and navigation unless the Platform Master explicitly reclassifies it.                                                                                                                                                                                      |
| business                         | Validation-required    | Android uses a local business context, while no approved cross-repository or legal public definition exists: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`.                                 | Validate whether the word describes an operating context, enterprise, merchant, or ordinary activity. Do not imply legal registration, ownership, tax status, or a canonical data entity.                                                                                              |
| business owner                   | Validation-required    | Tester planning refers to food-stall, karinderia, and night-market owners, while Android Owner Mode is a distinct product label: `../owner-seller-mobile/docs/release/tester-plan.md`; `../owner-seller-mobile/README.md`.              | It may become an ordinary audience description, but first separate it from Owner Mode and legal ownership. Do not use it as an account or authorization definition.                                                                                                                   |
| small business                   | Provisional            | Current Android About copy refers to Filipino small businesses, and tester evidence covers small seller contexts: `../owner-seller-mobile/app/owner/about.tsx`; `../owner-seller-mobile/docs/release/tester-plan.md`.                  | Candidate audience description only. Do not imply a statutory size, registration class, measured market segment, or universal fit.                                                                                                                                                   |
| micro-business / microbusiness   | Provisional            | The WEB-2 brief uses `micro-business`; Android planning uses `microbusiness`, and draft material also uses `micro-entrepreneurs`: `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`; draft Play material.                           | Record the spelling conflict and approve one plain-language form. Do not imply a legal or statistical enterprise-size definition, measured adoption, or eligibility threshold.                                                                                                      |
| tindero / tindera                | Validation-required    | No stable use or approved definition was found in the inspected current product authority.                                                                                                                                            | Do not add these terms decoratively. Validate regional comprehension, gender inclusion, tone, and whether a neutral English explanation such as `seller` is clearer before any public use.                                                                                              |
| store                            | Validation-required    | Draft material uses `sari-sari store`, while implemented and internal contexts also use stall and branch language: `../owner-seller-mobile/docs/play-store/store-listing-draft.md`; `../admin/docs/shared-data-contract-alignment.md`. | Use only as an ordinary business-type word after content review. Do not define it as a canonical entity or silently treat it as `stall` or `branch`.                                                                                                                                   |
| customer                         | Validation-required    | Current Android evidence says Customer Mode is not enabled, and Customer Mobile has no application implementation: `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md`; `../customer-mobile/docs/product/customer-product-boundary.md`.                    | Do not imply a current customer application, customer account, ordering flow, or customer-facing service. Future use requires a visible status and an approved distinction from seller, staff, user, and merchant concepts.                                                            |
| app                              | Provisional            | The current operational product is an Android application; Customer Mobile remains unimplemented.                                                                                                                                      | Qualify which app and its status. In current-product content, use `Android app` or another approved precise phrase; never blur the Android product with a future customer app, website, or platform.                                                                                    |
| system                           | Validation-required    | Sources use the word in internal or generic technical contexts, not as an approved public product category.                                                                                                                            | Do not call KitaMo a `system` in public copy until the intended product scope and maturity are approved. Avoid language that implies a connected, complete, or production-wide service.                                                                                                |
| platform                         | Validation-required    | `Platform` primarily labels internal ecosystem work, an internal Admin application, and an unimplemented API workstream.                                                                                                               | Do not use it as a current public capability label or expose internal architecture. A future public brand descriptor needs explicit scope, status, and Platform Master approval.                                                                                                     |
| business operating system        | Validation-required    | The phrase is supplied as directional WEB-2 context, while the current Android release has no general AI, account, cloud, Customer, public Admin, or public API capability.                                                             | It must not describe the current testing candidate. Any future use requires an approved bounded proposition, visible `Future Vision` or other justified status, and a practical explanation that does not overstate ecosystem maturity.                                                 |
| account                          | Prohibited public      | The current Android testing candidate has no account or login, and future customer-account semantics and deletion are unresolved: `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md`; `../customer-mobile/docs/decisions/cus-0-cus-1-unresolved-decisions.md`. | Do not describe an account, login, registration, recovery, or account-backed data as currently available. The term may appear only in an approved negative current-scope clarification such as CLM-008 or after future product, deletion, privacy, and support evidence is approved.     |
| user                             | Validation-required    | Internal repositories use broad user concepts, but no approved public role glossary exists: `../admin/docs/shared-data-contract-alignment.md`.                                                                                        | Prefer a specific validated audience or role. Do not use `user` to blur owner, seller, staff, customer, tester, or administrator.                                                                                                                                                    |
| staff                            | Validation-required    | The current Android product uses a shared-device Kiosk model and says staff accounts are absent: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`.                                               | Do not imply staff accounts, employee management, permissions, assignments, or remote access. Validate any general people reference.                                                                                                                                                 |
| records                          | Provisional            | Current Android screens and release documentation consistently describe locally held business, sales, receipt, inventory, and report records.                                                                                          | Candidate plain-language term only. State the record type and current local-device boundary; do not imply official accounting books, tax records, regulatory records, cloud records, guaranteed accuracy, or data recovery.                                                            |
| inventory                        | Provisional            | Inventory is an implemented Android product area: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`.                                                                                            | A current-capability claim still needs scope, visible status, evidence, and approval. Do not invent accounting, real-time, customer-visible, or synchronized meaning.                                                                                                                  |
| sales                            | Provisional            | Local sales records and selling flows are evidenced in Android: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`.                                                                              | Validate public wording and avoid implying payment processing, tax reporting, an official receipt, remote commerce, or guaranteed accuracy.                                                                                                                                          |
| receipt / shareable receipt      | Validation-required    | The current Android candidate can create a local sale receipt record and expose a user-initiated sharing action: CLM-007; `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/release/final-release-readiness.md`.          | Validate the exact artifact and action before public use. Never call it an official receipt, tax receipt, fiscal receipt, payment confirmation, invoice, regulatory record, or guaranteed proof of a transaction. Do not imply automatic transmission or cloud storage.                                                                               |
| expenses                         | Validation-required    | Android distinguishes fixed costs, spoilage, sold cost, and other report inputs: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/food-business-engine.md`.                                                           | Do not collapse distinct calculation categories into `expenses` or imply accounting, tax, or financial-advice authority without contract validation.                                                                                                                                |
| profit                           | Validation-required    | Android documents a bounded local report calculation: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/release/final-release-readiness.md`.                                                                          | Validate the exact measure, inputs, time range, exclusions, and label before public use. Never imply guaranteed profit, audited accounts, tax advice, or business results.                                                                                                           |
| utang                            | Prohibited public      | No current authoritative implementation or approved definition was found in the inspected product source.                                                                                                                            | The Filipino term can mean debt, credit, or an amount owed in different contexts. Do not imply receivables, lending, collection, repayment, or credit-sale functionality without contract evidence, an English explanation, regional-language review, and explicit approval.              |
| analytics                        | Validation-required    | Current release documentation denies analytics services while local reports and insights exist, making the word ambiguous: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`.                  | Distinguish local reports from telemetry and from advanced or predictive analytics. Do not claim analytics availability until the intended meaning and status are approved.                                                                                                         |
| AI                               | Validation-required    | The current Android Helper is local and explicitly not AI; broad AI work is deferred: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md`.                                | Do not present general public AI as current. Any future mention needs a separate claim, visible status, practical behavior, limitations, data-use explanation, and approval without hype.                                                                                              |
| sync / synchronization           | Validation-required    | Current Android evidence records future synchronization intent but no active synchronization service; Platform API and Shared Contracts implementations are absent.                                                                  | Do not describe sync, backup, cross-device continuity, conflict handling, or recovery as available. Avoid internal queue terminology in public content.                                                                                                                               |
| offline                          | Provisional            | Local-first and offline operation are evidenced for the Android pilot: `../owner-seller-mobile/README.md`; `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`.                                                                      | Candidate public concept, but the exact release boundary and limitations require approval. Prefer practical device-local wording over an undefined absolute `offline-first` guarantee, and do not imply later synchronization.                                                        |
| cloud                            | Validation-required    | Current release evidence says cloud services are not enabled: `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md`.                                                                                             | Use only in an approved status context. Do not imply current cloud storage, backup, sync, access, security, or release timing.                                                                                                                                                         |
| support                          | Validation-required    | Current release work requires a monitored public support identity, but none is approved; in-app problem reports remain local and are not remote support: `../owner-seller-mobile/docs/release/pre-internal-hardening-validation.md`.  | The navigation label may be planned, but public content cannot imply a monitored channel, response time, ticket service, escalation, or account help until the Support Owner approves the identity, scope, and workflow.                                                                |
| privacy                          | Validation-required    | Current app behavior is documented, but the existing Play policy is explicitly a draft and requires updates and review.                                                                                                                | Do not turn app behavior notes into an approved public policy. Public use requires a Privacy Owner, current data inventory, approved wording, effective date, contact, change process, and legal review where required.                                                                 |
| deletion                         | Validation-required    | The Android testing candidate has local app-data removal methods, while no current account exists and future customer-account deletion is unresolved: CLM-008 and CLM-009.                                                            | Always distinguish local app-data removal, the local Owner-PIN gate for the in-app full reset, account deletion, record retention, and support-assisted requests. Do not promise remote identity verification, universal erasure, recovery, completion timing, or third-party removal without evidence and approval.                                |
| testing                          | Provisional            | `Currently Testing` is the controlled website status, while current Android evidence says the build is a release candidate and does not establish tester rollout.                                                                    | Use the exact visible `Currently Testing` label for approved current-product claims. Do not imply an installable build, open enrollment, invitation, test-track membership, or public availability.                                                                                    |
| early access                     | Prohibited public      | No approved public join flow, eligibility, capacity, invitation, waitlist, or update process exists.                                                                                                                                   | Do not use it as a navigation label or call to action. Reclassification requires an approved participation workflow, owner, privacy handling, exact status, and capacity or closure behavior.                                                                                         |
| subscription                     | Prohibited public      | Subscriptions and payments are deferred: `../owner-seller-mobile/docs/ANDROID_SCOPE_PLAN.md`.                                                                                                                                         | Do not imply a current subscription, paid tier, trial, billing cycle, price, discount, cancellation policy, or purchase path.                                                                                                                                                         |

## Related terms requiring the same controls

<!-- prettier-ignore -->
| Term                                    | Classification                   | Rule                                                                                                                                                                                                                                                                         |
| --------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stall                                   | Validation-required              | Admin identifies `stall` as canonical while Android retains branch/stall ambiguity, and Shared Contracts has no implemented public export. Do not let an Admin-only assertion settle public meaning. Evidence: `../admin/docs/shared-data-contract-alignment.md`; Shared Contracts preflight. |
| branch                                  | Internal-only pending validation | Treat as a source-model compatibility term, not a public synonym for store, stall, location, or business.                                                                                                                                                                    |
| customer app                            | Validation-required              | Customer Mobile has no application implementation. If the phrase is ever used, it must be visibly `Future Vision` or another evidence-supported future status and excluded from current-product navigation.                                                                    |
| tindahan, paninda, benta, bayarin, tubo | Provisional                      | These Filipino terms appear in Android UI or draft release material. Review plain meaning, regional comprehension, tone, pronunciation by assistive technology, English explanation, and suitability for formal pages before publication.                                      |
| Gabi                                    | Internal-only                    | Current Android design-system and theme label; not an approved public product, feature, or website-brand name.                                                                                                                                                                |
| Owner Mode, Kiosk Mode                  | Validation-required              | Current application labels whose public explanation could imply roles, accounts, permissions, physical kiosks, or remote operation. Validate scope before use.                                                                                                               |

## Filipino-language clarity requirements

Filipino or Taglish wording must serve comprehension rather than decoration.
Before any such term becomes public:

1. test whether the intended audience understands the term across relevant
   regions and business types;
2. record its practical English explanation on first use when that improves
   clarity;
3. check gender inclusion, especially for `tindero` and `tindera`, and prefer a
   neutral alternative when the gendered pair adds no task value;
4. review tone so the wording does not stereotype, patronize, or imply a level
   of business formality or legal status;
5. verify pronunciation, reading order, and abbreviation behavior with
   assistive technology;
6. use approved, stable terminology on privacy, deletion, support, terms, and
   other formal pages rather than casual mixed-language paraphrases; and
7. treat a translation or language adaptation as a new approval scope, not an
   automatic reuse of an English claim.

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
