# WEB-2 Audience and Visitor Needs

Status: **Approved WEB-2 architecture hypothesis**

Reviewed: 2026-07-25
Evidence boundary:
[`web-2-content-and-ia-inventory.md`](../preflight/web-2-content-and-ia-inventory.md)

This document proposes likely public audiences and the questions the website
should help them answer. It is an information-architecture hypothesis, not a
claim that formal user research, usability testing, search research, market
research, or audience validation occurred.

The profiles below may guide page contracts and future research. They do not
authorize public copy, product claims, contact methods, testing invitations, or
legal statements. The Android Owner-Seller application remains the operational
product authority, and every factual public statement still requires a current
claim ID and explicit publication approval.

## Evidence and interpretation rules

- `CLM-001` through `CLM-009` have evidence but no approved public wording.
- The current Android release candidate is classified **Currently Testing**.
  Evidence does not establish tester rollout, and broad public availability is
  not approved.
- No product capability has an approved **Available Today** claim.
- Planned and future products must not be inferred from sibling planning
  documents.
- Internal implementation details, including storage technology, repositories,
  services, and private workflows, are not public content.
- `seller`, `business`, `store`, `account`, `AI`, `analytics`, and related
  terms remain governed or unresolved. Labels in this document are provisional.
- Legal, support, privacy, deletion, testing-join, and download workflows remain
  unapproved.

## Priority model

The initial architecture should prioritize visitors who need to understand the
current product, determine relevance, confirm its testing status, obtain help,
or find privacy and deletion information.

| Priority  | Audience need                                                                | Architecture consequence                                                                                    |
| --------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Critical  | Understand what KitaMo is and whether it is generally available              | Put **Currently Testing** beside the first product explanation and provide a persistent testing-status path |
| Critical  | Determine whether the current product is relevant to a seller                | Provide one provisional audience page and one current-workflow page                                         |
| Critical  | Get help with the testing product                                            | Keep Support in primary navigation, subject to support-identity approval                                    |
| Critical  | Find privacy and deletion information                                        | Keep Privacy and deletion links visible in utility or footer navigation                                     |
| Important | Understand purpose, maturity, and trust boundaries                           | Provide an About page and status-aware trust links                                                          |
| Later     | Evaluate partnerships, impact, hiring, editorial content, or future products | Use restrained About or Support paths; do not launch unsupported standalone sections                        |

## Primary audiences

### Filipino micro-business owners and sellers

- **Likely question:** Is KitaMo relevant to the practical way I run my
  business, and what can I actually use now?
- **Trust concerns:** Whether the product is genuinely usable, whether it
  understands small-business contexts without stereotyping them, what its
  current limitations are, and whether product or financial outcomes are being
  exaggerated.
- **Expected action:** Understand the current testing state, review practical
  workflows, and follow only an approved testing or support path.
- **Information needed:** A plain product explanation, intended audience,
  supported device context, current workflow boundaries, important
  limitations, and an honest explanation of testing access.
- **Must not be misled about:** Broad availability, suitability for every
  business type, accounts, cloud backup or synchronization, general AI,
  advanced analytics, pricing, tax or accounting authority, or guaranteed
  business results.
- **Pages that should serve the audience:** `/`, `/for-sellers`,
  `/how-it-works`, the testing-status section on `/`, and `/support`.
- **Relevant product statuses:** **Currently Testing** is dominant.
  **Planned** and **Future Vision** are not needed in the initial decision path.
- **Current evidence:** `CLM-002` through `CLM-007` support a bounded Android
  release candidate, local-device behavior, Filipino-small-seller context, and
  current workflow set, but all public wording remains unapproved.
- **Unknowns:** Preferred audience name, business-type coverage, language and
  Taglish preferences, comprehension of `seller`, task frequency, device and
  connectivity conditions, and whether a testing invitation will be public.

### Active or prospective internal testers

- **Likely question:** Am I eligible to test, how do I participate, and where
  do I get help?
- **Trust concerns:** Whether an invitation is real, whether instructions match
  the current build, how local data is handled, what happens if the app is
  removed, and whether support will respond.
- **Expected action:** Read the testing status, use an approved invitation or
  install destination if one later exists, and reach an approved support path.
- **Information needed:** Current testing scope, eligibility, device
  requirements, installation source, known limitations, support expectations,
  privacy information, deletion guidance, and public-safe release information.
- **Must not be misled about:** Open enrollment, production availability,
  guaranteed acceptance, permanent access, future delivery dates, data backup,
  or a monitored support channel that has not been approved.
- **Pages that should serve the audience:** `/`, `/#testing-status`,
  `/support`, `/privacy`, `/delete-account`, and `/release-notes` only after its
  ownership gate passes.
- **Relevant product statuses:** **Currently Testing** throughout. A release
  note must not use **Available Today** merely because a tester build exists.
- **Current evidence:** `CLM-003` and `CLM-006` support an Internal Testing
  release-candidate and non-public-rollout boundary. They do not prove that a
  Play upload or tester rollout occurred. Internal tester documentation exists
  in the operational repository but is not automatically approved website
  content.
- **Unknowns:** Final join workflow, eligibility, tester capacity, invitation
  owner, app destination, supported versions, response times, and release-note
  owner.

### Small-business operators evaluating relevance

- **Likely question:** Does KitaMo address the kind of record-keeping or selling
  work I need, and is it mature enough for me to consider?
- **Trust concerns:** Whether examples are representative, whether capability
  descriptions are current, whether limitations are prominent, and whether
  “small business” implies a broader product scope than evidence supports.
- **Expected action:** Compare their needs with approved current workflows,
  confirm the testing state, and decide whether to seek support or future
  participation information.
- **Information needed:** Audience boundaries, practical workflow summaries,
  current platform and maturity, exclusions, and a safe next action.
- **Must not be misled about:** Universal suitability, business
  transformation, revenue or profit improvement, public release, cloud
  services, customer-facing products, integrations, or formal pricing.
- **Pages that should serve the audience:** `/`, `/for-sellers`,
  `/how-it-works`, `/about`, and `/#testing-status`.
- **Relevant product statuses:** **Currently Testing** is dominant. Future
  content should not interrupt the evaluation of the current product.
- **Current evidence:** `CLM-002`, `CLM-003`, and `CLM-005` support a bounded
  product, maturity, and intended-audience hypothesis. Final audience and
  capability wording is unapproved.
- **Unknowns:** Which business categories are in scope, how visitors describe
  themselves, their evaluation criteria, and which current workflows may be
  named publicly.

### People seeking product support

- **Likely question:** How can I resolve a problem with the current test or
  report an issue?
- **Trust concerns:** Whether the support channel is monitored, what
  information they will be asked to share, expected response behavior, and
  whether advice applies to the current build.
- **Expected action:** Review public-safe troubleshooting, identify the current
  release context, and use one approved escalation channel.
- **Information needed:** Support scope, common questions, known limitations,
  safe diagnostic information, privacy expectations, escalation method, and
  links to deletion or release information.
- **Must not be misled about:** Guaranteed response times, 24/7 service,
  account recovery, remote restoration, cloud backup, live chat, or an
  unapproved contact address.
- **Pages that should serve the audience:** `/support`, `/privacy`,
  `/delete-account`, and `/release-notes` after activation.
- **Relevant product statuses:** **Currently Testing** for app-specific help.
  Support-service availability must be governed as an operational claim rather
  than mislabeled as a product capability.
- **Current evidence:** The product is a release candidate classified
  **Currently Testing**, and release materials identify support as a
  human-owned gate. No approved public support identity, tester rollout, or
  workflow exists.
- **Unknowns:** Support owner, monitored channel, hours, response targets,
  escalation behavior, information-minimization rules, and issue-reporting
  process.

### People seeking privacy or deletion information

- **Likely question:** What happens to information handled by the current test,
  and how do I remove local data or resolve an account-deletion concern?
- **Trust concerns:** Whether the policy matches the current build, whether the
  website distinguishes app behavior from website behavior, whether an account
  actually exists, and whether a deletion contact is real.
- **Expected action:** Read the applicable privacy scope, follow verified local
  deletion instructions, and use approved support escalation when necessary.
- **Information needed:** Effective scope and date, current testing status,
  bounded data-handling facts, verified local deletion behavior, absence or
  presence of an account, support escalation, and policy-change triggers.
- **Must not be misled about:** An account system, a remote deletion workflow,
  remote or account identity-verification steps, privacy or security
  guarantees, website tracking behavior beyond evidence, or legal approval of
  the existing draft. Approved guidance must still preserve the current local
  Owner-PIN prerequisite for the in-app full reset.
- **Pages that should serve the audience:** `/privacy`, `/delete-account`,
  `/support`, and `/terms`.
- **Relevant product statuses:** App-behavior statements use **Currently
  Testing**. Policy status uses effective and updated dates; a product-status
  badge does not substitute for legal scope.
- **Current evidence:** `CLM-004` supports bounded device-local candidate
  behavior. Current product evidence says no account system exists, while
  privacy and data-safety documents remain unapproved drafts.
- **Unknowns:** Privacy Owner, legal entity, privacy contact, deletion owner,
  approved policy text, support escalation, future account behavior, and
  hosting-related processing.

## Secondary audiences

### Community, LGU, livelihood-support, nonprofit, and social-impact partners

- **Likely question:** What purpose does KitaMo pursue, who is it intended to
  serve, and how mature is the current product?
- **Trust concerns:** Whether beneficiaries, partners, reach, or outcomes are
  being invented; whether a pilot is being represented as proven impact; and
  whether government or community affiliation is implied.
- **Expected action:** Understand mission and maturity, then use an approved
  partnership-contact path if one later exists.
- **Information needed:** Intended audience, mission, current testing status,
  evidence boundaries, intended community direction, and a real contact route.
- **Must not be misled about:** Measured impact, existing partnerships, LGU
  endorsement, funding, deployment scale, public availability, or future
  commitments.
- **Pages that should serve the audience:** `/about`, `/#testing-status`, and a
  bounded partner-inquiry section within `/support` after approval.
- **Relevant product statuses:** **Currently Testing** for current product
  maturity; **Future Vision** for directional community aspirations.
- **Current evidence:** `CLM-003` and `CLM-005` support testing maturity and a
  bounded intended-audience hypothesis. No impact or partnership evidence is
  approved.
- **Unknowns:** Mission wording, partner categories, relationship owner,
  contact workflow, evidence of outcomes, and whether this audience is a real
  website priority.

### Future business partners

- **Likely question:** Is there a credible current product and a suitable way to
  discuss a future relationship?
- **Trust concerns:** Whether roadmap ideas are presented as integrations,
  whether APIs or cloud services exist, and whether a public contact has
  authority to engage.
- **Expected action:** Review maturity and purpose, then use an approved
  inquiry path.
- **Information needed:** Current product boundary, testing status, audience,
  explicit exclusions, and contact scope.
- **Must not be misled about:** Public APIs, integrations, customer products,
  cloud synchronization, commercial terms, production scale, or partnership
  readiness.
- **Pages that should serve the audience:** `/about`, `/#testing-status`, and
  `/support` after a partner-inquiry scope is approved.
- **Relevant product statuses:** **Currently Testing** for the product;
  **Planned** or **Future Vision** only for separately approved directional
  topics.
- **Current evidence:** The Android build is a release candidate classified
  **Currently Testing** for website governance; upload, distribution, and active
  tester rollout are not evidenced. Sibling API, Admin, and Customer Mobile
  materials are planning or internal evidence, not public capability evidence.
- **Unknowns:** Partnership owner, contact route, partnership criteria,
  approved roadmap disclosures, and commercial authority.

### Journalists and researchers

- **Likely question:** What is KitaMo, whom is it intended for, and what is its
  actual current state?
- **Trust concerns:** Source traceability, inflated descriptions, undated
  maturity claims, invented statistics, and confusion between current and
  future products.
- **Expected action:** Read a bounded overview, verify the updated testing
  status, and seek an approved information contact if available.
- **Information needed:** Plain identity, intended audience, dated maturity,
  current product boundary, exclusions, mission, and contact ownership.
- **Must not be misled about:** Adoption, customer counts, impact, public
  launch, AI capability, funding, partners, awards, or unapproved quotations.
- **Pages that should serve the audience:** `/about`, `/`,
  `/#testing-status`, and `/support`.
- **Relevant product statuses:** **Currently Testing** is dominant;
  **Future Vision** is separately labeled and non-committal.
- **Current evidence:** `CLM-001` through `CLM-009` provide bounded candidate
  facts, all pending publication approval.
- **Unknowns:** Media contact, approved organization description, founder or
  team attribution, publication policy, and demand for a formal press surface.

### Prospective contributors or team members

- **Likely question:** What is KitaMo working on, and are there legitimate ways
  to contribute or apply?
- **Trust concerns:** Whether openings are real, whether a generic contact
  implies recruitment, and whether private project information is exposed.
- **Expected action:** Understand mission and maturity; follow a careers or
  contribution path only after a real process exists.
- **Information needed:** Public mission, current stage, approved organization
  identity, real openings or contribution policy, and responsible contact.
- **Must not be misled about:** Active hiring, volunteer roles, compensation,
  organizational scale, open-source status, or application review.
- **Pages that should serve the audience:** `/about`; no `/careers` page at
  initial release.
- **Relevant product statuses:** Product maturity may use **Currently
  Testing**. Hiring and contribution states require their own operational
  wording rather than product-status labels.
- **Current evidence:** No approved hiring or public contribution process was
  found.
- **Unknowns:** Team identity, hiring owner, actual openings, contribution
  model, privacy handling for applications, and response expectations.

### App-store reviewers

- **Likely question:** Would the website provide accurate support, privacy, and
  deletion information for the Android Internal Testing release candidate if it
  proceeds to review or distribution?
- **Trust concerns:** Consistency with any build later submitted for review,
  working contacts, public HTTPS availability, current policy dates, and absence
  of misleading feature or availability claims.
- **Expected action:** Verify the product website, privacy policy, support
  identity, deletion guidance, and public-safe release context.
- **Information needed:** Product name, current testing scope, support contact,
  privacy policy, deletion information, relevant limitations, effective dates,
  and release identification.
- **Must not be misled about:** Public rollout, current accounts, data
  transmission, permissions, support responsiveness, or capabilities absent
  from the reviewed build.
- **Pages that should serve the audience:** `/`, `/support`, `/privacy`,
  `/delete-account`, and `/release-notes` once governed.
- **Relevant product statuses:** **Currently Testing** for the release
  candidate and, if distribution later occurs, every approved public
  testing-release entry.
- **Current evidence:** Internal-testing and Play-readiness evidence exists,
  but support identity, hosted privacy URL, review outcomes, and public copy
  remain human-owned gates.
- **Unknowns:** Final Play listing, policy approval, support contact, whether
  any build is submitted, review timing, and whether a release-notes page is
  required.

### Regulators and trust reviewers

- **Likely question:** Who is responsible for the website and product, what
  claims are being made, and where are privacy, terms, deletion, and support
  responsibilities stated?
- **Trust concerns:** Legal identity, policy accuracy, contact ownership,
  evidence and approval traceability, data-handling scope, and unsupported
  compliance or security language.
- **Expected action:** Review trust and legal pages, their dates and scope, and
  use an approved contact when clarification is needed.
- **Information needed:** Legal identity, policy ownership, product maturity,
  website-versus-app scope, support and deletion routes, claim dates, and
  accessible status explanations.
- **Must not be misled about:** Certification, legal compliance, security,
  accessibility conformance, privacy guarantees, data processing, or incident
  capability.
- **Pages that should serve the audience:** `/about`, `/privacy`, `/terms`,
  `/delete-account`, `/support`, and `/#testing-status`.
- **Relevant product statuses:** **Currently Testing** for product behavior.
  Legal and policy lifecycle must use effective dates and review states.
- **Current evidence:** Governance records exist, but final legal identity,
  contacts, legal review, and approved public wording are absent.
- **Unknowns:** Applicable legal obligations, responsible organization,
  jurisdiction, policy reviewers, escalation process, hosting behavior, and
  retention expectations.

## Shared visitor needs

Across audiences, the architecture should make these answers easy to find:

1. What is KitaMo?
2. Who is the current product intended for?
3. Is it generally available?
4. What does the current test do, in bounded practical terms?
5. What does it not do?
6. Where can a tester get help?
7. Where are privacy and deletion details?
8. Who is responsible for public statements and contact channels?

The first five answers should be reachable within one page transition from the
homepage. Support, Privacy, Terms, and deletion information should be reachable
through persistent navigation or footer links and never depend on search,
hover, or a hidden marketing call to action.

## Architecture implications

- Make `/for-sellers` the provisional primary audience page.
- Merge a generic Features concept into `/how-it-works` so current workflows
  cannot be mistaken for a mixed-status catalogue.
- Put a visible testing-status path in utility and mobile navigation.
- Keep Support in the proposed primary navigation because help is a
  task-critical need for any active or prospective tester; current evidence
  does not establish that tester rollout has begun.
- Keep Privacy and deletion information persistently discoverable.
- Merge community direction into `/about` rather than launching an unsupported
  impact page.
- Keep Customer App and Pricing reserved, absent, and unlinked.
- Do not launch Blog, Careers, or a public service-status page without real
  ownership and operational capacity.
- Use shallow routes and concise labels for small screens, low-end Android
  devices, limited data, and inconsistent connections.

## Future validation

Before final page copy or a major navigation change, validate at least:

- whether intended users identify with `seller`, `business owner`, another
  English term, or a reviewed Filipino/Taglish term;
- whether `/for-sellers` and `/how-it-works` answer distinct questions;
- which support and privacy tasks are most frequent;
- whether visitors understand **Currently Testing** without interpreting it as
  open access;
- whether the mobile navigation order makes Support and privacy easy to find;
- whether the deletion page corrects the false implication that a current
  KitaMo account exists; and
- whether partners and reviewers can find trust information without adding a
  separate institutional navigation layer.

Validation findings may change page labels or priority. They must not weaken
claim evidence, product-status, accessibility, privacy, or public-trust rules.
