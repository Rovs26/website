# WEB-2 Open Decisions

Status: **Post-WEB-2 open-decision register**

Reviewed: 2026-07-26

An absent approval is not an approval. This register identifies the decision,
role authority, blocked pages or milestones, safe placeholder posture, and
publication effect. It contains no contact placeholder that could be mistaken
for a real destination.

## Decision states

| State       | Meaning                                                                        |
| ----------- | ------------------------------------------------------------------------------ |
| Open        | A choice and owner are known, but no approval evidence exists                  |
| Blocked     | The decision cannot be made responsibly until a dependency or authority exists |
| Provisional | A replaceable foundation choice exists but is not final                        |
| Proposed    | WEB-2 recommends a bounded choice at the current approval gate                 |

## Legal, contact, identity, and operational dependencies

| ID       | Dependency not yet approved                                | State   | Decision/authority needed                                                                                                                           | Pages blocked                                                                                 | Resolution milestone                        | Placeholder safe?                                                                       | Publication rule                           |
| -------- | ---------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------ |
| OPEN-001 | Final legal entity name for public display                 | Blocked | Platform Master and Legal Owner approve exact name, scope, and attribution                                                                          | About identity, Terms, Privacy, footer ownership, structured data                             | Before or during WEB-5                      | No; a generic or invented company name can be mistaken for legal identity               | Affected pages remain unpublished          |
| OPEN-002 | Public organization name                                   | Open    | Platform Master decides whether the product name, organization name, and legal entity differ                                                        | About, footer, contact/support attribution, metadata/structured data                          | WEB-4 before About approval; final by WEB-5 | No if shown as a formal owner; product name may remain a provisional architecture label | Do not publish organization claims         |
| OPEN-003 | Official support email or other monitored support identity | Blocked | Support Owner and Platform Master supply and verify a monitored public channel                                                                      | Support, Contact merge, Data Deletion escalation, Privacy contact, Play review                | WEB-5 before page publication               | No; no placeholder, personal address, or unmonitored mailbox                            | Support-dependent pages remain unpublished |
| OPEN-004 | Privacy contact                                            | Blocked | Privacy Owner and Legal Owner approve the role/channel and request handling                                                                         | Privacy, Data Deletion, Support                                                               | WEB-5                                       | No                                                                                      | Privacy page remains unpublished           |
| OPEN-005 | Account/data-deletion contact                              | Blocked | Privacy and Support Owners approve the channel, scope, escalation, and future account boundary                                                      | Data Deletion, Privacy, Support, Play review                                                  | WEB-5                                       | No                                                                                      | Data Deletion remains unpublished          |
| OPEN-006 | Official public phone number                               | Open    | Platform Master and Support Owner decide whether a phone channel exists and how it is monitored                                                     | Support and legal identity only if required                                                   | WEB-5 or future                             | Omission is safe; a fake number is not                                                  | Do not display a number until approved     |
| OPEN-007 | Public office address                                      | Open    | Legal/organization authority decides whether an address is required and publishable                                                                 | Terms, Privacy, About, footer only if legally/operationally necessary                         | WEB-5 or future                             | Omission is safe unless law/review requires it; invented address is not                 | Do not display an address until approved   |
| OPEN-008 | Official canonical domain                                  | Blocked | Platform Master approves public origin and environment/redirect ownership                                                                           | Canonical metadata, sitemap, robots release posture, Open Graph URLs, store links, deployment | WEB-8; page contracts may proceed earlier   | Documentation token `[approved-public-origin]` only; never public metadata              | Do not add production canonical URLs       |
| OPEN-009 | Final testing-join workflow                                | Blocked | Product Authority, Release Manager, Support Owner, and Privacy Owner approve eligibility, destination, support, data handling, and closure behavior | Home CTA, For Sellers CTA, Support, store material                                            | WEB-3/WEB-7 depending on launch model       | Safe to omit; no placeholder waitlist, email capture, or disabled join button           | No join/testing CTA                        |
| OPEN-010 | Final app-download destination                             | Blocked | Release Manager proves the destination is live for the intended audience and approves wording                                                       | Home, How It Works, For Sellers, Support, metadata/social previews                            | WEB-7                                       | Safe to omit; a generic store badge or guessed URL is not                               | No download CTA or store link              |
| OPEN-011 | Final support escalation workflow                          | Blocked | Support Owner defines supported scope, safe information request, handoff, hours/expectations, and privacy controls                                  | Support, Privacy, Data Deletion, Release Notes                                                | WEB-5                                       | No operational placeholder                                                              | Affected pages remain unpublished          |
| OPEN-012 | Release-note ownership and process                         | Blocked | Assign Release Manager; approve event-based cadence, public scope, security exclusion, corrections, and retirement                                  | Release Notes and Support links to it                                                         | Conditional WEB-7                           | Safe to omit; an empty or stale page is not                                             | `/release-notes` remains 404 and unlinked  |

## Brand and visual-identity dependencies

| ID       | Dependency not yet approved                                                      | State       | Decision/authority needed                                                                                  | Pages blocked                                               | Resolution milestone                                        | Placeholder safe?                                                                  | Publication rule                                     |
| -------- | -------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------- |
| OPEN-013 | Final logo and website variants                                                  | Provisional | Platform Master approves authoritative master, variants, usage, clear space, minimum size, and backgrounds | Final header/footer, favicon, metadata/social assets        | Before final WEB-3 visual approval; complete by WEB-6/WEB-7 | Existing release raster may remain a clearly provisional internal/foundation asset | Do not call it the official website logo             |
| OPEN-014 | Final website palette and status colors                                          | Provisional | Website Architect approves accessible semantic tokens after cross-platform brand decision                  | All later page implementation and final status presentation | Before WEB-3 visual approval; re-audit in WEB-6             | Current semantic tokens are replaceable and safe for internal review only          | Do not present current colors as final brand         |
| OPEN-015 | Final typography and font delivery                                               | Provisional | Website Architect and rights owner approve families, licenses, hosting, weights, and performance budget    | All later pages and social imagery                          | Before final WEB-3 visual approval; harden in WEB-6         | System stack is a safe fallback                                                    | Do not infer Android font approval for web           |
| OPEN-016 | Final radius and shadow treatment                                                | Provisional | Website Architect decides after brand direction                                                            | Later visual implementation                                 | WEB-3/WEB-6                                                 | Existing tokens remain replaceable                                                 | No permanent brand claim                             |
| OPEN-017 | Overall visual identity: release green/gold, Gabi violet/gold, or reconciliation | Blocked     | Website Architect and Platform Master record cross-platform direction                                      | Final public page visual design, social cards, screenshots  | Before final WEB-3 visual acceptance                        | Foundation may stay provisional                                                    | Do not silently resolve from code or raster sampling |
| OPEN-018 | Final public tagline                                                             | Blocked     | Product/Content Authority approves exact wording, evidence, audience, and scope                            | Home, metadata, social preview, About                       | WEB-3                                                       | Omission is safe; draft feature-graphic copy is not                                | No tagline until approved                            |
| OPEN-019 | Approved public screenshots or product imagery                                   | Blocked     | Product Authority and Website Architect approve source, version, crop, status caption, and privacy         | Home, How It Works, For Sellers, social previews            | WEB-3/WEB-4; audit in WEB-6                                 | Omission is safe                                                                   | Do not publish internal or draft imagery             |

## IA, content, and terminology decisions

| ID       | Decision                                           | State                            | WEB-2 recommendation                                                                                                                   | Authority needed                                 | Pages/milestones affected                                | Placeholder/publication rule                                             |
| -------- | -------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------ |
| OPEN-020 | Recommended IA model                               | Approved in WEB-2                | Seller journey with status-first trust rails                                                                                           | Website Architect                                | All WEB-3–WEB-5 pages                                    | Architecture approved; implementation remains separately gated           |
| OPEN-021 | Initial launch page set                            | Approved in WEB-2                | `/`, `/for-sellers`, `/how-it-works`, `/about`, `/support`, `/privacy`, `/terms`, `/delete-account`                                    | Website Architect plus page content owners       | WEB-3–WEB-5                                              | Every page remains gated by its milestone and content approvals          |
| OPEN-022 | Primary navigation names and order                 | Approved in WEB-2                | For Sellers, How It Works, About, Support; brand links Home                                                                            | Website Architect and Content Owner              | WEB-3 final navigation implementation                    | Labels are approved architecture terms; implementation remains WEB-3     |
| OPEN-023 | Utility navigation                                 | Approved in WEB-2                | Testing status anchor and Privacy after publication                                                                                    | Website Architect                                | WEB-3/WEB-5                                              | Do not link Privacy before it is ready                                   |
| OPEN-024 | Mobile navigation mechanism                        | Approved in WEB-2                | Single shallow, server-rendered disclosure with no-JS access; native details is the first implementation candidate                     | Website Architect and Accessibility Reviewer     | WEB-3/WEB-6                                              | No demo/client component was created in WEB-2                            |
| OPEN-025 | `/for-sellers` terminology                         | Proposed but validation-required | Use as provisional route because it best matches current audience evidence                                                             | Product Authority and Content Owner              | WEB-4, metadata, navigation                              | Do not treat `seller` as an account or universal legal role              |
| OPEN-026 | Store/stall/branch public wording                  | Blocked                          | Use none as a canonical entity until Shared Contracts/Platform Master validates; ordinary business-type examples need content approval | Shared Contracts authority or Platform Master    | For Sellers, How It Works, claims                        | `branch` remains internal-only; page names do not depend on the conflict |
| OPEN-027 | Owner/business-owner meaning                       | Blocked                          | Keep Owner Mode and legal ownership distinct; prefer validated audience wording                                                        | Product Authority/Shared Contracts               | For Sellers, About, Support                              | No role definition from the website                                      |
| OPEN-028 | `micro-business` style and scope                   | Proposed but validation-required | Use the hyphenated brief form in architecture prose; do not imply a legal size classification                                          | Content Owner and Product Authority              | Home, For Sellers, About, metadata                       | Public wording requires approval                                         |
| OPEN-029 | Filipino/Taglish terminology                       | Blocked                          | Introduce only for comprehension, pair with English where needed, and validate region/tone/accessibility                               | Content Owner and representative audience review | All content pages/localization                           | No decorative or auto-translated terms                                   |
| OPEN-030 | `AI-powered business operating system` positioning | Blocked                          | Treat as governing future context only, not a current-product headline; current Android evidence says general AI is not enabled        | Platform Master and Product Authority            | Home, About, metadata, How It Works                      | No current AI claim or broad system/platform promise                     |
| OPEN-031 | Product-status visual treatment                    | Provisional                      | Keep exact four labels and accessible semantics; final colors/layout await brand approval                                              | Website Architect and Accessibility Reviewer     | All claim-bearing pages                                  | Text meaning is authoritative; visual presence in WEB-1 is not final     |
| OPEN-032 | Claim occurrence approvals                         | Blocked                          | Use the page-claim matrix; all current claims remain unapproved                                                                        | Product Authority and named content approver     | Every claim-bearing page                                 | No material product page is publication-ready                            |
| OPEN-033 | Audience validation                                | Open                             | Treat WEB-2 audiences and journeys as hypotheses; conduct later representative research                                                | Product/Audience Research Owner — unassigned     | WEB-3/WEB-4 content and WEB-6 hardening                  | Do not describe WEB-2 as user research                                   |
| OPEN-034 | Localization and language architecture             | Deferred                         | No infrastructure or translated routes until language scope, ownership, terminology, and legal review exist                            | Website Architect and Content/Legal owners       | Future backlog; hardening review in WEB-6 if accelerated | English-only architecture baseline; no automatic translation             |

## Page activation decisions

| ID       | Page or section  | Current ruling                        | What reopens or activates it                                                         |
| -------- | ---------------- | ------------------------------------- | ------------------------------------------------------------------------------------ |
| OPEN-035 | Features         | Merge into How It Works               | A large, publicly approved capability set and distinct visitor task                  |
| OPEN-036 | Why KitaMo       | Merge into For Sellers/About          | Validated need that cannot be served without a standalone page                       |
| OPEN-037 | Customer App     | Reserved                              | Implemented product evidence, approved status/claims, owner, and new IA decision     |
| OPEN-038 | Community Impact | Merge bounded mission into About      | Substantive approved measured evidence and content ownership                         |
| OPEN-039 | Pricing          | Reserved                              | Approved commercial model, legal/commercial ownership, and claims                    |
| OPEN-040 | FAQ              | Merge into contextual answers/Support | Sufficient governed questions and support capacity justify a distinct task           |
| OPEN-041 | Contact          | Merge into Support                    | A distinct approved non-support inquiry workflow                                     |
| OPEN-042 | Release Notes    | Reserved                              | OPEN-012 plus substantive current public release records                             |
| OPEN-043 | Blog             | Deferred                              | Editorial owner, charter, review process, cadence, corrections, and content capacity |
| OPEN-044 | Careers          | Rejected for now                      | Real approved opening, employer/hiring/privacy process, and new IA decision          |
| OPEN-045 | Service Status   | Rejected for now                      | Live public services, monitored source, incident owner/process, and new IA decision  |

## Milestone-blocking summary

### Blocks WEB-3 public Home approval

- IA/navigation approval;
- product-name/audience/status claim occurrences;
- final brand direction or explicit continuation of a provisional visual
  review;
- final testing action decision;
- approved screenshots/tagline if used; and
- confirmation that the temporary global no-index posture remains until a
  later launch gate.

### Blocks WEB-4 core-page publication

- terminology approval for seller, business, store/stall, records, and bounded
  workflow terms;
- approved claim occurrences;
- mission and audience boundaries; and
- Product Authority review of every described workflow.

### Blocks WEB-5 trust-page publication

- legal and organization identity;
- Support, Privacy, Legal, and deletion owner assignment;
- monitored contacts and escalation;
- reviewed privacy/data inventory;
- verified local-data removal scope;
- approved legal text; and
- cross-page consistency.

### Blocks WEB-7 Play Store readiness

- public Support, Privacy, and Data Deletion pages at approved stable URLs;
- public download/testing destinations;
- release ownership and store-aligned claims; and
- resolution or explicit continued exclusion of Release Notes.

### Blocks WEB-8 production readiness

- canonical domain;
- hosting/data-processing review;
- environment and redirect behavior;
- final indexing, sitemap, robots, canonical, social, and structured-data
  decisions;
- production monitoring/incident decisions; and
- all prior milestone acceptance.

## Approval recording rule

Closing an item requires:

- exact decision and scope;
- approving role and identifiable approval record;
- decision date;
- affected pages and wording/assets;
- dependencies and exclusions;
- revalidation trigger; and
- linked ADR, claims, terminology, or page-contract updates.

Do not mark an item closed merely because an implementation or draft exists.
