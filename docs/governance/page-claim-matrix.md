# KitaMo Page-to-Claim Matrix

Status: **WEB-2 architecture control; no claim-bearing page is publication-ready**

Evidence reviewed: 2026-07-25
Claims source: [`public-claims-register.md`](public-claims-register.md)
Terminology source: [`public-terminology.md`](public-terminology.md)

This matrix joins proposed public pages to stable claim identifiers. It does not
approve a route, page name, final sentence, product status, call to action, or
publication. A page may use a claim only after the claim register records
approval for the exact wording, audience, surface, status, and review scope.

All current claim entries, CLM-001 through CLM-009, are `evidence found`,
`Currently Testing`, and unapproved. Therefore, every page that references one
of them remains blocked from public claim use.

## Page identifiers and claim dependencies

The page IDs below are governance keys for WEB-2 page contracts. Later
architecture documents should preserve the IDs even if a proposed route is
merged, renamed, reserved, or rejected.

<!-- prettier-ignore -->
| Page ID | Proposed route | WEB-2 treatment | Referenced claim IDs | Dominant or allowed product status | Current evidence and claim boundary | Additional approval or evidence dependency | Publication readiness |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PAG-001 | `/` | Implement in WEB-3 after WEB-2 approval | CLM-001, CLM-002, CLM-003, CLM-004, CLM-005, CLM-006, CLM-007 | `Currently Testing` must dominate; no future capability may compete with it | Enough evidence exists to plan a plain product identity, audience, maturity, local-device boundary, and bounded capability summary | Exact homepage wording, claim approvals, public next action, testing-join workflow, support identity, brand approval, and final indexing decision | **Blocked.** Every referenced claim is unapproved; the current root remains temporary and no-indexed. |
| PAG-002 | `/about` | Implement in WEB-4 | CLM-001, CLM-002, CLM-005, CLM-006 | `Currently Testing`; any mission or future direction must be separated and explicitly status-labeled | Product name, Android context, intended pilot audience, and lack of broad availability are evidenced | Public organization identity, legal name, approved mission language, `business owner` and `micro-business` terminology, and content owner | **Blocked.** No organization or mission claim is approved. |
| PAG-003 | `/features` | Merge into `/how-it-works` unless later evidence justifies a separate page | CLM-003, CLM-004, CLM-007 | `Currently Testing` only for the current feature group; later statuses require separate sections and claim IDs | A bounded current feature group is evidenced, but not a broad marketing feature catalogue | Feature-level wording and status approval; validation of `sales`, `inventory`, `records`, `receipt`, `expenses`, and `profit`; exclusions for payment, official or tax receipts, accounting, AI, analytics, cloud, and sync | **Blocked.** CLM-007 is unapproved, and no future-feature claim is registered. |
| PAG-004 | `/how-it-works` | Implement in WEB-4 | CLM-002, CLM-003, CLM-004, CLM-006, CLM-007 | `Currently Testing` at page introduction and each capability section | Evidence can support a practical, local-device flow description after approval | Approved sequence and screenshots, feature-level status, terminology review for business/store/stall/records, accessibility review, and Product Authority sign-off | **Blocked.** No referenced claim or explanatory wording is approved. |
| PAG-005 | `/why-kitamo` | Merge practical relevance into `/for-sellers` and mission context into `/about` | CLM-005, CLM-007 | `Currently Testing`; no outcome or superiority status exists | Audience and bounded current product areas are evidenced | Any problem, benefit, differentiation, trust, time-saving, accuracy, income, or outcome proposition needs its own evidence and claim ID | **Blocked.** Current claims cannot support generic benefit or superiority copy. |
| PAG-006 | `/for-sellers` | Implement in WEB-4 | CLM-003, CLM-005, CLM-006, CLM-007 | `Currently Testing` must be visible before capability detail | Current tester planning supports a seller audience, especially food-stall, karinderia, and night-market contexts | Approval of `seller`, `business owner`, `small business`, and `micro-business`; evidence before adding sari-sari, market-vendor, home-business, retailer, or SME audience claims | **Blocked.** Audience scope and all claim wording remain unapproved. |
| PAG-007 | `/customer-app` | Reserve but do not expose or index | — | `Future Vision` only if a future page is explicitly approved | Customer Mobile has no application implementation or current public capability; no claim ID supports a public customer-app proposition | Approved future product scope, claim IDs, customer terminology, status, ownership, privacy, account, support, Platform API, and Shared Contracts evidence | **Excluded from initial publication.** A reserved route must not render a public placeholder. |
| PAG-008 | `/community-impact` | Merge bounded mission content into `/about`; no standalone route | CLM-003 and CLM-005, limited to maturity and intended-audience context | `Currently Testing` may describe the release candidate and intended pilot audience; intended mission may use `Future Vision` only after approval | Release-candidate and intended-audience evidence does not prove social or community impact | Approved mission, intended-beneficiary wording, partner evidence, measurement method, responsible owner, and new claim IDs for any outcome | **Blocked.** No measured impact, partner, beneficiary-outcome, or community-result claim exists. |
| PAG-009 | `/pricing` | Reserve but do not expose or index | — | No status may be shown until a pricing decision and claim exist | No price, plan, trial, free tier, paid tier, subscription, or billing evidence is approved | Product and commercial owner, pricing model, legal and tax review, support implications, lifecycle policy, and new claim IDs | **Excluded from initial publication.** Do not publish placeholder pricing or “contact us” pricing. |
| PAG-010 | `/faq` | Merge approved answers into `/support` and the pages they qualify; no standalone route | CLM-001 through CLM-009, only as individually approved answers | Each answer must display or directly inherit the status required by its claim; `Currently Testing` dominates current-product answers | The current register can support bounded questions about identity, Android scope, maturity, local-device behavior, audience, availability, current capabilities, absence of accounts, and local data removal | Question selection, exact answer approvals, Support Owner review, terminology review, per-answer update triggers, and legal/privacy review for trust answers | **Blocked.** An FAQ cannot launder unapproved claims into apparently authoritative answers. |
| PAG-011 | `/support` | Implement in WEB-5 | CLM-002, CLM-003, CLM-006, CLM-008, CLM-009, limited to approved scope clarification | `Currently Testing` for the product; support-channel availability must use its own evidence, not a product-status badge | Android, release, no-account, and local-removal boundaries are evidenced; no public support identity or remote ticket workflow is evidenced | Support Owner, monitored contact, supported audience and topics, hours or response expectations if any, escalation, privacy handling, deletion escalation, and accessibility review | **Blocked.** No public support channel, identity, service level, or escalation workflow is approved. |
| PAG-012 | `/contact` | Merge into `/support`; no standalone route | — | Not applicable until a real contact purpose exists | No official public phone, office, general contact identity, partner-contact path, or legal entity is evidenced | Public organization identity, Support or Partnerships Owner, approved channels, purpose, monitoring, privacy handling, and canonical domain | **Excluded from initial publication.** Do not invent or display placeholder contact details. |
| PAG-013 | `/privacy` | Implement in WEB-5 and require before Play Store review | CLM-003, CLM-004, CLM-008, CLM-009 | `Currently Testing` and exact release scope must be clear where behavior can change by version | Release-candidate scope, local-device behavior, and data-removal methods are evidenced, but the existing Play policy is a draft and needs updates | Privacy Owner, current data inventory, approved policy, legal review where required, effective date, public privacy contact, change process, canonical host, and review of intentional sharing boundaries | **Blocked.** Evidence found is not an approved privacy policy or legal statement. |
| PAG-014 | `/terms` | Implement in WEB-5 only after ownership and legal scope exist | — | Product status does not replace legal versioning or effective-date disclosure | No public terms, legal entity, governing-law position, service scope, or acceptance model is approved | Legal owner, legal entity, product and service scope, effective date, change and archive process, contact, canonical domain, and accessibility review | **Blocked.** No terms content or legal attribution is available. |
| PAG-015 | `/delete-account` | Implement in WEB-5 only as an approved current-scope clarification; reserve a future workflow | CLM-003, CLM-008, CLM-009 | `Currently Testing`; page introduction must state that the current Android release has no account before discussing local data removal | Evidence supports no current account and bounded local app-data removal, not an account-deletion service; the in-app full reset is blocked until an Owner PIN exists and then requires that local PIN | Privacy and Legal Owners, Product Authority, Support Owner, exact local-data instructions and Owner-PIN prerequisite, future customer-account deletion decision, retention exceptions, contact and escalation | **Blocked.** Do not offer a form, remote or account identity verification, support-assisted deletion, completion time, or universal-erasure promise; do not omit the local Owner-PIN gate on the in-app reset. |
| PAG-016 | `/release-notes` | Reserve; activate conditionally in WEB-7 only after a sustainable public process exists | CLM-003, CLM-006, CLM-007, only as release-boundary context | Each entry needs its actual release status; internal candidate, tester release, and public release must not be conflated | The only inspected release notes are internal, tied to an older build identity, and incomplete for current changes | Release Manager, public scope and template, version/date authority, cadence, archive and correction rules, security-redaction review, per-release claims, and distribution evidence | **Blocked.** Internal release notes are unsuitable for verbatim public use. |
| PAG-017 | `/blog` | Defer | —; every factual product post must cite registered claim IDs | Status must be explicit inside any post that discusses product capability or availability | No editorial owner, publication cadence, review workflow, archive policy, or approved post exists | Editorial Owner, sustainable capacity, claim review, corrections, authorship, dates, accessibility, privacy, and legal review | **Excluded from initial publication.** Do not launch an empty or unmanaged blog. |
| PAG-018 | `/careers` | Reject for now; reconsider only through a new IA decision | — | Not applicable until a real opening exists | No hiring process, open role, employer identity, application channel, or candidate privacy notice is evidenced | Hiring Owner, legal employer identity, real openings, application and accessibility process, candidate-data policy, closure and archive behavior, and new claim IDs | **Excluded from initial publication.** Do not imply hiring or collect applications. |
| PAG-019 | `/status` | Reject for now | — | Product-status labels are not service-availability indicators | No live public operational service, status source, incident owner, update process, service-level commitment, or public incident history exists | Actual public services, telemetry authority, Operations Owner, incident policy, update cadence, component definitions, history, and correction process | **Rejected for now.** Internal mock health or planning artifacts are not public service-status evidence. |

## Claim-to-page review index

This reverse index is an architecture aid, not authorization. It prevents a
claim from being silently adapted to a new surface without a scope review.

<!-- prettier-ignore -->
| Claim ID | Candidate page IDs | Required review before any page use |
| --- | --- | --- |
| CLM-001 | PAG-001, PAG-002, PAG-010 | Product name, exact surface, title or body use, status context, and brand identity |
| CLM-002 | PAG-001, PAG-002, PAG-004, PAG-010, PAG-011 | Android qualification and exclusion of unsupported platforms or products |
| CLM-003 | PAG-001, PAG-003, PAG-004, PAG-006, PAG-008, PAG-010, PAG-011, PAG-013, PAG-015, PAG-016 | Recheck the exact Play track, upload, tester rollout, invitation, and public-release state immediately before use |
| CLM-004 | PAG-001, PAG-003, PAG-004, PAG-010, PAG-013 | Product and Privacy Owner review; preserve current-release and intentional-sharing limitations |
| CLM-005 | PAG-001, PAG-002, PAG-005, PAG-006, PAG-008, PAG-010 | Audience evidence, terminology, regional comprehension, and prohibition on adoption or outcome implications |
| CLM-006 | PAG-001, PAG-002, PAG-004, PAG-006, PAG-010, PAG-011, PAG-016 | Recheck availability, download, invitation, launch, and testing-join evidence |
| CLM-007 | PAG-001, PAG-003, PAG-004, PAG-005, PAG-006, PAG-010, PAG-016 | Feature-level scope, visible status, terminology, and all stated exclusions |
| CLM-008 | PAG-010, PAG-011, PAG-013, PAG-015 | Current-release scope; do not imply future account policy or conflate local data removal with account deletion |
| CLM-009 | PAG-010, PAG-011, PAG-013, PAG-015 | Product Authority and Privacy Owner approval of exact instructions, consequences, Owner-PIN prerequisite, exclusions, and current-release behavior |

## Unsupported propositions and dependency gates

The IDs in this section are dependency identifiers, not claim IDs. They prevent
unsupported propositions from being assigned a claim number or publication
status before evidence exists.

<!-- prettier-ignore -->
| Dependency ID | Affected pages | Current classification | Evidence or decision required |
| --- | --- | --- | --- |
| DEP-AVAILABILITY | PAG-001, PAG-010, PAG-011, PAG-016 | Unsupported beyond CLM-003 and CLM-006's negative boundary | Approved tester or public rollout, install destination, eligibility, capacity, join owner, privacy handling, closure behavior, and a new or revised claim |
| DEP-CUSTOMER-APP | PAG-007, PAG-010 | Future only; implementation absent | Approved customer product scope, implementation and release evidence, status, account/privacy/support decisions, and new claim IDs |
| DEP-PRICING | PAG-009, PAG-010 | Absent | Approved commercial model, plans, prices, taxes, billing and cancellation behavior, owners, legal review, and new claim IDs |
| DEP-IMPACT | PAG-002, PAG-005, PAG-008 | Intended audience is evidenced; measured impact is absent | Approved mission wording for non-outcome content, or defined measurement, reviewed results, dates, limitations, and new claim IDs for outcomes |
| DEP-SUPPORT | PAG-001, PAG-010, PAG-011, PAG-012, PAG-013, PAG-015 | Public identity and workflow absent | Monitored public identity, Support Owner, scope, escalation, privacy handling, accessibility, and any approved response expectation |
| DEP-LEGAL-IDENTITY | PAG-002, PAG-012, PAG-013, PAG-014, PAG-015, PAG-018 | Absent | Public organization and legal entity names, attribution rules, responsible owners, and approved canonical domain |
| DEP-PRIVACY | PAG-010, PAG-013, PAG-015 | Current behavior evidence exists; public policy approval absent | Current data inventory, Privacy Owner, approved policy and contact, effective date, retention and change rules, and legal review where required |
| DEP-ACCOUNT-DELETION | PAG-010, PAG-011, PAG-015 | Current Android account absent; future remote/account workflow unresolved; current in-app full local reset requires a local Owner PIN | Future account authority, remote identity-verification rules if any, deletion scope, retention and anonymization, completion and failure handling, support, and public instructions that preserve the current local Owner-PIN boundary |
| DEP-RELEASE-NOTES | PAG-016 | Internal and outdated material only | Public Release Manager, source of release truth, sanitized template, update and correction cadence, archive rules, and per-release approval |
| DEP-EDITORIAL | PAG-017 | Absent | Editorial Owner, capacity, review and correction workflow, authorship, archive policy, and claim governance |
| DEP-HIRING | PAG-018 | Absent | Legal employer, Hiring Owner, real openings, application channel, accessibility and candidate-privacy process |
| DEP-OPERATIONS-STATUS | PAG-019 | No live public service or incident process | Public service inventory, monitoring authority, Operations Owner, component and incident definitions, update process, and history policy |
| DEP-FUTURE-CAPABILITIES | PAG-001, PAG-003, PAG-004, PAG-005, PAG-007, PAG-008, PAG-010 | No `Planned` or `Future Vision` claim is registered | Authoritative roadmap acceptance or directional approval, bounded wording, correct status, owner, evidence, exclusions, and new claim IDs |
| DEP-SHARED-TERMINOLOGY | PAG-002 through PAG-010, PAG-013, PAG-015 | Cross-system definitions absent or conflicting | Shared Contracts public definitions or Platform Master decisions for roles, store/stall, accounts, records, money concepts, customer scope, and future services |

## Publication and maintenance rules

1. A page referencing any `evidence found` claim remains unpublished for claim
   use until that claim has a page-specific approval record.
2. A page with `—` in the claim column must not invent wording. It stays
   reserved, deferred, merged, or rejected until a stable claim ID is created
   from evidence.
3. Current, planned, and future propositions must never share one claim ID.
4. A visible product-status label does not cure an unsupported or unapproved
   proposition.
5. Legal, privacy, support, deletion, release-note, pricing, impact, hiring, and
   incident content requires its responsible role owner in addition to product
   claim review.
6. Shared Contracts or a Platform Master decision must resolve terminology with
   cross-repository meaning; the website must not define it locally.
7. Metadata, link labels, image alternative text, structured data, OpenGraph
   text, FAQs, and calls to action are claim-bearing surfaces and follow the
   same approval rules as body copy.
8. Recheck every cited source before WEB-3 or WEB-4 copy is authored, before
   WEB-5 trust content is published, and before every major release.
