# WEB-2 Content and Information-Architecture Inventory

Status: **Preflight complete — sufficient for a provisional IA, insufficient
for public-page publication**

Reviewed: 2026-07-25
Timezone: Asia/Manila
Milestone: WEB-2 — Information Architecture
Approved foundation: `3ae0de576a6cd4ed6afc765c5d3620d2776b1a66`

This report records the evidence boundary used before recommending a public
information architecture. It authorizes documentation work only. It does not
approve final page names, public copy, navigation implementation, routes, legal
content, support details, brand decisions, or publication.

## Current repository state

The website was inspected before this report was created:

| Item                        | Finding                                                                                |
| --------------------------- | -------------------------------------------------------------------------------------- |
| Starting branch             | `feat/web-0-web-1-foundation`                                                          |
| Starting HEAD               | `3ae0de576a6cd4ed6afc765c5d3620d2776b1a66`                                             |
| Starting working tree       | Clean                                                                                  |
| Remotes                     | None configured                                                                        |
| Approved WEB-0/WEB-1 commit | Matches starting HEAD                                                                  |
| WEB-2 branch                | `feat/web-2-information-architecture`                                                  |
| Deployment state            | No deployment or production configuration                                              |
| Existing public routes      | Temporary `/`; development-only `/design-system`; framework not-found and `robots.txt` |

No unexplained website changes were present. The new branch was created locally
from the exact approved foundation. No history was rewritten, no remote was
created, and nothing was pushed or deployed.

## Website evidence reviewed

The following sources were reviewed as the governing WEB-0/WEB-1 baseline:

- `README.md` and `AGENTS.md`;
- ADR-0001 through ADR-0007;
- `docs/brand/brand-source-inventory.md`;
- `docs/brand/design-system-foundation.md`;
- `docs/governance/public-claims-register.md`;
- `docs/governance/public-terminology.md`;
- `docs/governance/public-content-principles.md`;
- `docs/reviews/accessibility-baseline.md`;
- `docs/reviews/performance-baseline.md`;
- `docs/reviews/web-0-web-1-acceptance.md`;
- `docs/preflight/workspace-inventory.md`;
- the temporary root route, layout metadata, robots route, and internal preview;
- the current brand, layout, primitive, and product-status components; and
- the controlled status definitions and temporary foundation copy.

`docs/preflight/workspace-inventory.md` was used only as a historical technical
inventory. Its earlier conclusions about an approved public product name and an
active internal-testing rollout are superseded by the current brand inventory
and claims register. It is not current public-content authority for WEB-2.

The accepted technical constraints remain Next.js App Router, React Server
Components by default, static rendering where practical, strict TypeScript,
Tailwind backed by semantic tokens, minimal JavaScript, narrow dependencies,
WCAG 2.2 Level AA as a target rather than a claim, and zero website data
collection or tracking at this milestone.

## Sibling repositories inspected

Sibling inspection was read-only. Secret-bearing files, generated release
bundles, credentials, private hosts, production data, and local runtime state
were not inspected or copied.

| Repository            | Current evidence state                                                                                                                                 | WEB-2 use                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `owner-seller-mobile` | Git repository at `6ed9ace3a92f7435f84c2f75f0084a03070ae2e4`; tracked product baseline unchanged; an untracked discovery-document directory now exists | Operational product authority for bounded current-product and testing-state evidence            |
| `admin`               | Git repository at `b9460858bf91cd5bf50536d469ff7106ce92b483`; clean                                                                                    | Internal-only terminology and contract-alignment evidence; not public product authority         |
| `shared-contracts`    | Non-Git directory containing only its earlier preflight inventory                                                                                      | No implemented canonical public terminology package; cross-system definitions remain unresolved |
| `customer-mobile`     | Non-Git, documentation-only CUS-0/CUS-1 planning package; no application implementation                                                                | Evidence that a customer application is not current and remains proposed/deferred               |
| `platform-api`        | Non-Git, documentation-only API-0 planning package; no runtime implementation or public operations                                                     | Evidence that public API/service behavior and related website promises remain unavailable       |

The Customer Mobile and Platform API documentation appeared after the original
WEB-0 inventory. Both explicitly describe planning rather than implemented
capabilities, so they strengthen the boundary against presenting those products
or services as current. The sibling changes were not modified by WEB-2 and do
not create a destructive conflict in the website repository.

## Evidence classification

| Classification            | Meaning for WEB-2                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------- |
| Confirmed                 | Directly supported by the approved execution brief and current authoritative evidence |
| Inferred                  | A reasonable architecture hypothesis, not a public fact                               |
| Absent                    | Required evidence or ownership was not found                                          |
| Conflicting               | Sources use materially different terms or brand directions                            |
| Outdated                  | Historical evidence conflicts with a newer state and cannot lead                      |
| Internal-only             | Useful for governance but unsuitable for public UI or metadata                        |
| Unsuitable for public use | Draft, implementation-specific, sensitive, or missing publication approval            |

## Confirmed public-fact candidates

These are bounded evidence findings for architecture planning. The claims
register still records no approved public wording, so none may be published
until its wording, scope, status, and approver are recorded.

| Claim ID | Bounded fact                                                                                                                                              | Status            | Evidence result                                                                                |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| CLM-001  | The current Android application is named KitaMo.                                                                                                          | Currently Testing | Evidence found; publication unapproved                                                         |
| CLM-002  | The current product under test is an Android application.                                                                                                 | Currently Testing | Evidence found; publication unapproved                                                         |
| CLM-003  | The current Android build is a release candidate for Google Play Internal Testing; tester rollout and broad public rollout are not evidenced or approved. | Currently Testing | Evidence found; date-sensitive and publication unapproved                                      |
| CLM-004  | The current testing build is designed for local-first operation and keeps current-release business data on the device.                                    | Currently Testing | Evidence found; public wording must avoid implementation and absolute privacy or backup claims |
| CLM-005  | The current pilot is intended for Filipino small sellers, including micro-business and food-stall operators.                                              | Currently Testing | Evidence found; final audience wording is unapproved                                           |
| CLM-006  | Broad public availability has not been approved.                                                                                                          | Currently Testing | Evidence found; no launch timing may be inferred                                               |
| CLM-007  | The current Android release candidate includes bounded local business/stall setup, sales and receipt records, inventory records, and reports.             | Currently Testing | Evidence found; each capability and governed term needs narrower approval                      |
| CLM-008  | The current Android release candidate has no account, login, or account-deletion workflow.                                                                | Currently Testing | Evidence found; do not generalize this current-release boundary to future products             |
| CLM-009  | Current local app data has bounded removal methods; the in-app full reset first requires an Owner PIN and then its current local value.                   | Currently Testing | Evidence found; this is local-device behavior, not a remote account-deletion service           |

The WEB-2 execution authority additionally confirms that local business data
currently uses SQLite. That implementation detail is suitable for internal
evidence review but is prohibited in public wording. If approved later, prefer
practical, release-bounded device-local wording with accurately stated
limitations; do not turn `offline-first` into an absolute guarantee.

No claim is approved as **Available Today**. No page may infer that a tested
capability is generally available.

## Claims still unsupported or unsafe

The inspected evidence does not support public claims about:

- a public launch date, broad availability, download destination, or open
  testing process;
- cloud synchronization, cloud backup, multi-device continuity, or server
  recovery;
- a current customer application, public API, public Admin capability, or
  public account system;
- broad AI, advanced analytics, predictive analytics, or automated business
  outcomes;
- prices, plans, trials, subscriptions, discounts, or payment schedules;
- measured community impact, partner relationships, adoption, customer counts,
  ratings, testimonials, awards, or certifications;
- privacy, security, legal compliance, accessibility conformance, or business
  result guarantees;
- an official public domain, legal entity, office, phone number, support
  address, privacy contact, or deletion contact; or
- hiring, incident communication, editorial publishing, or release-note
  operations.

These gaps make a pricing page, public status page, careers page, launch blog,
public customer-app page, polished community-impact claims, and a contact page
with operational details unsafe for initial publication. Privacy, terms,
support, and deletion pages are necessary future trust surfaces but must remain
unpublished until their responsible owners and factual content are approved.

## Unresolved terminology

No public-web term is currently recorded as fully approved. The following
issues affect page names or copy:

| Term or group                                            | Finding                                                                                                                | IA effect                                                                        |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `KitaMo`                                                 | Strong current casing evidence; public-web identity still provisional                                                  | Safe as a planning label, not an approved wordmark or claim                      |
| `seller`                                                 | Strongest plain-language audience candidate; publication approval pending                                              | `/for-sellers` is a defensible provisional route                                 |
| `owner`, `owner-seller`                                  | Role meaning unresolved; `owner-seller` is internal-only                                                               | Exclude from launch navigation labels                                            |
| `business owner`, `small business`, `micro-business`     | Useful audience descriptions but scope and legal implications need approval                                            | Use as architecture hypotheses, not final copy                                   |
| `store`, `stall`, `branch`                               | `stall` is a cross-system candidate, Android retains legacy `branch`, and public readers may understand `store` better | No conflict blocks top-level page naming; page copy needs a terminology decision |
| `customer`, `customer app`                               | No current customer product exists                                                                                     | Reserve only; exclude from initial navigation                                    |
| `app`, `system`, `platform`, `business operating system` | Can imply different scope and maturity                                                                                 | Final homepage/title language needs approval                                     |
| `records`, `sales`, `inventory`                          | Candidate bounded current-product terms                                                                                | Each use requires a traced, approved claim                                       |
| `expenses`, `profit`, `analytics`, `AI`                  | Meanings carry financial or capability risk                                                                            | Do not use in navigation; validate before page copy                              |
| `utang`                                                  | No authoritative current capability evidence                                                                           | Exclude                                                                          |
| `offline`                                                | Supported as a practical candidate with limitations                                                                    | Use only with approved, bounded wording                                          |
| `sync`, `cloud`, `account`                               | Not current                                                                                                            | Exclude from current-capability descriptions                                     |
| `support`, `deletion`                                    | Necessary task labels, but workflows and contacts are unresolved                                                       | Suitable route concepts; pages remain gated                                      |
| `testing`, `early access`                                | `Currently Testing` is controlled; “early access” is undefined                                                         | Use the controlled status, not an invented access label                          |

Filipino or Taglish terms may be evaluated for clarity and regional
comprehension, but none should be introduced decoratively or treated as final
without an English explanation and content review.

## Unresolved brand decisions

WEB-2 does not resolve:

- release green/gold versus Android Gabi violet/gold direction;
- final logo or permitted variants;
- exact public-web palette and status colors;
- public-web typography, licensing, or font delivery;
- radius and shadow treatment;
- public tagline or wordmark treatment;
- approved screenshots or other public product imagery; or
- the current release icon's permanent role on the website.

All remain replaceable and provisional. They do not block information
architecture documentation.

## Unresolved legal, contact, and identity dependencies

The following are absent and block publication of one or more future pages:

- final legal entity and public organization name;
- canonical public domain;
- official support identity and escalation workflow;
- privacy owner and public privacy contact;
- account-deletion owner, contact, and approved request process;
- official public phone number and office address;
- final testing-join workflow;
- final app-download destination; and
- release-note owner and sustainable update process.

No placeholder contact or identity is safe if a visitor could mistake it for a
working destination.

## Potential audiences

Primary architecture hypotheses:

- Filipino micro-business owners and sellers;
- prospective or active internal testers;
- small-business operators evaluating relevance;
- people seeking product support; and
- people seeking privacy or deletion information.

Secondary architecture hypotheses:

- community, livelihood-support, LGU, nonprofit, and social-impact partners;
- future business partners;
- journalists and researchers;
- prospective contributors or team members;
- app-store reviewers; and
- regulators or trust reviewers.

No formal website user research was found. Audience priority, comprehension,
language preferences, and task frequency require later validation.

## Current public-content readiness

There is enough bounded evidence to design a conservative, trust-led IA and to
define content contracts. There is not enough approved wording to launch the
resulting pages.

Safe architecture work can:

- center the Android product's **Currently Testing** state;
- provide a clear seller relevance path;
- keep support and privacy discoverable;
- separate current, planned, and future content;
- reserve later routes without exposing them; and
- record exact evidence and ownership gates for every claim-bearing page.

Unsafe architecture work would:

- treat every conceptual route as a launch page;
- mix tested, planned, and future capabilities in a generic feature list;
- put pricing or a customer app in launch navigation;
- imply an open waitlist, download, or contact workflow;
- launch empty blog, careers, release-note, or status sections; or
- make legal, privacy, support, impact, AI, analytics, or security claims from
  internal or draft evidence.

## IA research method

WEB-2 will use:

1. a source-authority and claim-readiness audit;
2. audience and visitor-need hypotheses explicitly marked for validation;
3. comparison of product-first, seller-journey-first, and trust-first models;
4. evaluation against clarity, credibility, mobile effort, maintenance,
   support/legal discoverability, Play Store readiness, scalability, and
   overpromising risk;
5. page-by-page lifecycle and milestone rulings;
6. structured page contracts with claim, status, ownership, SEO,
   accessibility, and staleness boundaries;
7. journey walkthroughs for discovery, tester help, deletion, privacy, and
   partner evaluation;
8. route, internal-linking, and navigation review for shallow mobile use;
9. a page-to-claim matrix and terminology review; and
10. a final risk and open-decision audit before acceptance.

This is architecture analysis, not evidence of formal user research, SEO
volume research, usability testing, legal review, or content approval.

## Identified risks

- Product maturity can be overstated by page names, navigation prominence, or
  future-content visual weight even when a disclaimer exists.
- All existing claim entries remain unapproved for publication.
- The concept “AI-powered business operating system” is supplied as governing
  context but does not authorize a broad current AI claim.
- Required trust pages depend on missing legal, support, privacy, and deletion
  ownership.
- `store`, `stall`, `branch`, `seller`, and `owner` conflicts can produce
  inconsistent or role-inaccurate language.
- A `/features` page can become a misleading mixture of maturity states.
- Dormant routes can still mislead if linked, indexed, or filled with
  placeholders.
- Release notes can expose internal or security-sensitive detail without a
  defined public editorial owner.
- The provisional brand can make architectural examples look more final than
  they are.
- Later localization can create duplicate routes, inconsistent status wording,
  and unreviewed translations if introduced without a separate decision.
- Sibling planning documents are not implemented product evidence and must not
  be promoted into public promises.

## Preflight conclusion

Sufficient evidence exists to produce a provisional WEB-2 blueprint. No
terminology conflict prevents architecture-level page naming, provided names
remain proposed and content contracts retain approval gates. Several page
categories are unsafe to publish now, but that does not prevent recording them
as reserved, dormant, deferred, rejected, or dependent future work.

The next documentation set will cover audiences, IA alternatives and the
recommended hybrid, navigation, page contracts, visitor journeys, URL and
internal-linking strategy, status placement, open decisions, claim mapping,
three ADRs, the milestone map, and WEB-2 acceptance. No final route, homepage,
navigation, footer, form, or public content will be implemented.
