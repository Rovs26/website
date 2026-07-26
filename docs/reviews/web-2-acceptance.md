# WEB-2 Information Architecture Acceptance Report

Status: **Approved and complete**

Completed: 2026-07-25
Approved: 2026-07-26
Branch: `feat/web-2-information-architecture`
Approved foundation:
`3ae0de576a6cd4ed6afc765c5d3620d2776b1a66`
Scope: WEB-2 Information Architecture documentation only

Implementation type: **Documentation and governance only**
Application routes added: **None**
Public content published: **None**
Deployment performed: **No**
Next milestone: **WEB-3, still blocked pending required content and product
decisions**

WEB-2 approval accepts the information architecture, page lifecycle,
navigation model, URL strategy, claim-evidence requirements, and milestone
allocation as planning decisions. It does not approve any public claim,
deployment, final brand asset, final public copy, or later implementation
milestone. It does not authorize WEB-3 automatically. Privacy and support work
requires its own separately approved phase.

## Repository and Git state

- The website repository began WEB-2 clean on
  `feat/web-0-web-1-foundation` at the exact approved foundation commit.
- The work moved to the local branch
  `feat/web-2-information-architecture`.
- No unexplained website change was present or overwritten.
- No remote was configured, created, changed, or pushed.
- No deployment was created.
- Sibling repositories were inspected read-only and were not modified.
- The current public source and behavior remain the approved WEB-0/WEB-1
  foundation. No public route, final navigation, page component, metadata, or
  production configuration changed.

## Evidence inspected

### Website

- `README.md`, `AGENTS.md`, ADR-0001 through ADR-0007;
- the brand inventory and design-system foundation;
- the public claims register, terminology register, and content principles;
- the accessibility and performance baselines;
- the WEB-0/WEB-1 acceptance report and historical workspace inventory;
- the temporary root route, layout metadata, robots route, internal design
  system preview, and current component inventory; and
- the approved foundation commit and repository history.

The historical WEB-0 workspace inventory was not treated as current
public-content authority where later evidence superseded it.

### Authoritative and adjacent product evidence

- Owner-Seller Mobile at
  `6ed9ace3a92f7435f84c2f75f0084a03070ae2e4`, including bounded product,
  release-candidate, data-location, account, local-removal, audience, and
  terminology evidence;
- Admin at `b9460858bf91cd5bf50536d469ff7106ce92b483`, used only for internal
  terminology and contract-alignment context;
- the minimally populated Shared Contracts planning inventory;
- the Customer Mobile planning package, which contains no application
  implementation; and
- the Platform API planning package, which contains no runtime implementation
  or public operational service.

Secret-bearing local files, credentials, private hosts, generated release
bundles, production data, and private runtime state were not opened or copied.

## Confirmed facts

These are evidence findings, not approved public copy:

1. The current operational product authority is the Android Owner-Seller
   application.
2. The current Android build is a release candidate for Google Play Internal
   Testing.
3. The evidence does not establish a Play upload, tester distribution, active
   tester access, public download, or broad rollout.
4. The current candidate keeps current-release business data on the Android
   device and does not provide cloud backup or synchronization.
5. It contains bounded local business/stall setup, sales and receipt records,
   inventory records, and local reports.
6. It is intended for a bounded Filipino small-seller pilot audience. That does
   not prove adoption, measured relevance, community impact, or universal fit.
7. The current candidate has no account, login, or account-deletion workflow.
8. Local app data has bounded device-removal methods. The in-app full reset is
   blocked until an Owner PIN exists and then requires the current local PIN;
   this is not remote identity verification or an account-deletion service.
9. No public Customer App, Platform API, Admin service, pricing model, support
   identity, canonical domain, legal identity, or public testing-join workflow
   is evidenced or approved.
10. Every CLM-001 through CLM-009 proposition is `evidence found`,
    **Currently Testing**, and unapproved for publication.

## Architecture assumptions

- Audience analysis is an architecture hypothesis; no formal user research,
  analytics, or usability study is claimed.
- Filipino micro-business owners and sellers are the first decision audience.
- Trust, maturity, support, and privacy questions should be reachable without
  traversing promotional content.
- A seller-journey structure with status-first trust rails is more credible at
  the current maturity than a marketing feature catalogue.
- Four visible primary destinations plus implicit Home are sufficient for the
  proposed launch.
- Native, one-level mobile disclosure should be the default; a custom
  Client Component is justified only if later testing proves native behavior
  insufficient.
- Support, legal, privacy, and deletion routes belong in the proposed release
  set but remain unpublished until their owners and content are approved.
- Role names in page contracts are governance responsibilities, not fictional
  assignments to people.
- Static Server Components remain the expected later implementation baseline.

## Information architecture alternatives

| Model                         | Strength                                                                  | Primary limitation                                                          |
| ----------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Product-first                 | Familiar orientation and strong product explanation                       | Can overemphasize capabilities and obscure maturity                         |
| Seller-journey-first          | Matches practical audience questions and supports a small mobile page set | Needs deliberate trust rails so relevance does not become unsupported sales |
| Trust-first                   | Makes maturity, privacy, and support hard to miss                         | Can make the product difficult to understand and feel prematurely defensive |
| Recommended status-led hybrid | Uses the seller journey while exposing maturity and trust at every entry  | Requires disciplined status placement and claim review                      |

The selected model is the status-led seller-journey hybrid.

## Recommended information architecture

### Proposed primary navigation

The brand identity link supplies implicit Home. The four visible destinations
are:

1. For Sellers
2. How It Works
3. About
4. Support

### Proposed utility navigation

- Testing Status, linked to the future homepage status section; and
- Privacy.

A testing invitation, download, waitlist, or early-access action must not
appear until an operational workflow and its public claim are approved.

### Proposed footer

- **Explore:** For Sellers, How It Works, About
- **Help:** Support, Common questions within Support, Data deletion
- **Trust and legal:** Testing Status, Privacy, Terms

### Proposed mobile navigation

- one shallow level containing the same four primary destinations;
- visible Testing Status and Privacy access without a second hidden menu;
- native `details`/`summary` disclosure as the no-JavaScript baseline;
- predictable focus, keyboard operation, an accessible name, large touch
  targets, and no hover or icon-only meaning; and
- no mega-menu, modal dependency, or speculative client state.

### Proposed launch page set

The proposed release set is:

```text
/
/for-sellers
/how-it-works
/about
/support
/privacy
/terms
/delete-account
```

This is a planned set, not publication approval. The four WEB-5 trust pages
remain blocked by identity, ownership, and reviewed-content dependencies.

## Page inventory and lifecycle decisions

| Candidate           | Decision                                    | Lifecycle or milestone                                   |
| ------------------- | ------------------------------------------- | -------------------------------------------------------- |
| `/`                 | Implement                                   | WEB-3; required for initial public release               |
| `/about`            | Implement                                   | WEB-4; required for initial public release               |
| `/features`         | Merge into `/how-it-works`                  | No standalone route                                      |
| `/how-it-works`     | Implement                                   | WEB-4; required for initial public release               |
| `/why-kitamo`       | Merge into `/for-sellers` and `/about`      | No standalone route                                      |
| `/for-sellers`      | Implement                                   | WEB-4; required for initial public release               |
| `/customer-app`     | Reserve without exposing                    | Future backlog                                           |
| `/community-impact` | Merge bounded mission context into `/about` | No standalone route                                      |
| `/pricing`          | Reserve without exposing                    | Future backlog                                           |
| `/faq`              | Merge into Support and relevant task pages  | No standalone route                                      |
| `/support`          | Implement                                   | WEB-5; required for release and before Play Store review |
| `/contact`          | Merge into `/support`                       | No standalone route                                      |
| `/privacy`          | Implement                                   | WEB-5; required for release and before Play Store review |
| `/terms`            | Implement                                   | WEB-5; required for initial public release               |
| `/delete-account`   | Implement as an accurate current-scope page | WEB-5; required for release and before Play Store review |
| `/release-notes`    | Reserve behind an operating gate            | Conditional WEB-7 activation; otherwise future backlog   |
| `/blog`             | Defer                                       | Future backlog                                           |
| `/careers`          | Reject for now                              | Reconsider only with a real approved hiring process      |
| `/status`           | Reject for now                              | Reconsider only for real monitored public services       |

No reserved, deferred, dormant, merged, or rejected route receives a
placeholder, link, sitemap entry, metadata record, redirect, or indexable
response.

### Specific rulings

- **Customer App:** reserved and unexposed; it is not a current product.
- **Pricing:** reserved and unexposed; no plans, prices, trials, tiers, or
  subscription behavior may be invented.
- **Blog:** deferred until an Editorial Owner, process, capacity, and
  substantive content exist.
- **Careers:** rejected until a real opening and approved hiring/privacy process
  justify a new IA decision.
- **Service Status:** rejected because no live public service inventory,
  monitoring authority, or incident process exists.
- **Release Notes:** reserved as a possible trust mechanism, but activation
  requires a Release Manager, public scope, sustainable cadence, correction and
  archive rules, per-release status evidence, and security-sensitive redaction.

## Product-status placement rules

- **Available Today:** permitted only for an implemented, verified, usable
  approved release with explicit public-claim approval. No current WEB-2 claim
  qualifies.
- **Currently Testing:** dominant for current-product content. It appears in a
  potentially misleading page introduction before detail and repeats beside
  qualified sections, screenshots, calls to action, FAQs, metadata, and release
  entries as needed.
- **Planned:** used only for roadmap work accepted but not available. It stays
  in a visibly separate section and never inherits a current action.
- **Future Vision:** used only for directional possibilities that may change.
  It remains separate from current product explanations and cannot carry dates
  or delivery commitments.

Page-level status is required when most of a page shares one maturity.
Section-level or feature-level status is required when content differs. A link
to a general status definition does not replace an adjacent visible label.
Status must be visible text with accessible semantics and cannot rely on color.

Calls to action, downloads, testing invitations, screenshots, metadata,
OpenGraph text, structured data, FAQ answers, and internal links are all
claim-bearing surfaces.

## Visitor journeys

The blueprint tests six provisional journeys:

1. seller discovering KitaMo;
2. future existing or invited tester seeking help;
3. person seeking account or local-data removal information;
4. privacy-conscious visitor;
5. community or business partner evaluating KitaMo; and
6. app-store or trust reviewer.

Each journey records entry, expected path, questions, trust risks, abandonment
points, required links, mobile and accessibility constraints, relevant status,
and unsupported actions that must not be offered. None represents completed
research or an approved operational workflow.

## URL and routing strategy

- Use short lowercase nouns and hyphenated multiword segments.
- Keep launch routes one level deep.
- Use one stable canonical route per intent after a canonical host is approved.
- Do not invent canonical-domain metadata in WEB-2.
- Reserved, deferred, dormant, and rejected routes return the normal 404
  behavior until an activation decision.
- Do not add speculative redirects. When a published route changes later,
  redirect only to an equivalent durable destination and record the migration.
- If Release Notes activates, use `/release-notes` and
  `/release-notes/YYYY-MM-DD-short-slug`.
- If Blog activates after a new decision, use `/blog` with a reviewed stable
  post pattern.
- Keep query strings for non-canonical transient state only; do not create
  indexable content variants.
- Retired content needs an explicit archive, redirect, `410`, or 404 decision
  based on whether a durable equivalent exists.
- Internal and non-public routes remain no-indexed and absent from sitemaps.

## SEO architecture

Every launch page contract records:

- search intent, primary and secondary topics;
- title and description purpose;
- canonical-route expectation;
- indexing recommendation;
- structured-data possibilities and evidence gates;
- duplication risk; and
- content-depth expectation.

No search-volume claim, ranking promise, keyword stuffing, final metadata, or
canonical host was introduced. The selected route set separates audience,
workflow, identity, support, privacy, legal, and deletion intents while merging
thin or duplicative concepts.

## Accessibility implications

- four visible primary destinations plus implicit Home reduce cognitive burden;
- routes and labels are predictable and descriptive;
- support, privacy, and deletion do not depend on a promotional journey;
- status appears as text and semantics, not color alone;
- future menu behavior must preserve landmarks, skip-link targets, active
  states, keyboard order, focus visibility, Escape behavior when applicable,
  zoom, and normal browser navigation;
- no hover, icon-only, mega-menu, or deep disclosure requirement is proposed;
  and
- every complex page contract includes heading, link, warning, status, or task
  sequencing considerations.

This remains a design target, not a WCAG conformance claim.

## Mobile and performance implications

- shallow one-level navigation and a small page set suit smaller screens and
  one-handed use;
- status and task content precede decorative content;
- native disclosure and Server Components avoid speculative hydration;
- no carousel, modal-only path, external font, embed, analytics, tracker,
  third-party widget, or diagramming dependency was introduced; and
- later pages should remain useful on budget Android devices and inconsistent
  connections.

No mobile usability study or network performance measurement was performed for
this documentation-only milestone.

## Claim-governance changes

- Expanded the claims register to CLM-001 through CLM-009 using current
  evidence.
- Distinguished evidence from approval; every claim remains unapproved.
- Corrected release wording from active internal rollout to a candidate whose
  upload and distribution are not established.
- Added bounded current workflow, no-account, and local-removal evidence.
- Recorded the local Owner-PIN prerequisite for the in-app full reset without
  treating it as remote identity verification.
- Added a page-to-claim matrix using the same `PAG-001` through `PAG-019` keys as
  the page contracts.
- Recorded approval, review, legal, support, privacy, release, terminology, and
  publication gates for every claim-bearing page.

## Terminology changes

The terminology register now covers all WEB-2 requested terms and adds a
specific `receipt / shareable receipt` control. It:

- records no term as approved public wording;
- keeps implementation and workstream labels internal;
- distinguishes seller, owner, owner-seller, business owner, customer, store,
  stall, records, financial concepts, account, deletion, testing, and early
  access;
- prefers bounded device-local wording over an absolute `offline-first`
  guarantee;
- prevents `receipt` from implying an official, tax, payment, or regulatory
  artifact; and
- requires Shared Contracts or Platform Master validation where meaning affects
  product or business logic.

## Unresolved dependencies

Publication or later implementation decisions still require:

- final legal entity and public organization name;
- official support identity, scope, escalation, and response ownership;
- Privacy Owner, public privacy contact, reviewed data inventory, and policy;
- deletion owner, exact current instructions, contact, escalation, and any
  future remote/account-verification decision;
- official public phone or office address, if either should exist;
- canonical public domain;
- final logo, palette, typography, tagline, and broader visual direction;
- testing-join workflow, eligibility, capacity, owner, privacy treatment, and
  install destination;
- release-note ownership, public scope, cadence, correction, archive, and
  redaction policy; and
- approved terminology and exact public wording for every published claim.

No placeholder contact, legal identity, domain, or participation action is safe
for publication.

## Code changes

None. WEB-2 changed documentation only:

- no final public navigation or footer;
- no final homepage or public page route;
- no Client Component;
- no architecture data model or validation code;
- no backend, API, authentication, CMS, analytics, cookie, form, or tracker;
- no private environment requirement; and
- no deployment configuration.

## Files created

```text
docs/architecture/audience-and-visitor-needs.md
docs/architecture/content-status-placement-rules.md
docs/architecture/information-architecture-options.md
docs/architecture/internal-linking-strategy.md
docs/architecture/navigation-model.md
docs/architecture/page-inventory.md
docs/architecture/recommended-information-architecture.md
docs/architecture/url-and-routing-strategy.md
docs/architecture/visitor-journeys.md
docs/architecture/web-2-open-decisions.md
docs/decisions/ADR-0008-information-architecture.md
docs/decisions/ADR-0009-navigation-model.md
docs/decisions/ADR-0010-url-and-content-lifecycle.md
docs/governance/page-claim-matrix.md
docs/preflight/web-2-content-and-ia-inventory.md
docs/reviews/web-2-acceptance.md
docs/roadmap/website-milestone-map.md
```

## Files modified

```text
AGENTS.md
README.md
docs/governance/public-claims-register.md
docs/governance/public-terminology.md
```

## Verification results

| Command or check                  | Final result                                                                                                                                                                                                     |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run format:check`            | Passed after final documentation reconciliation.                                                                                                                                                                 |
| `npm run lint`                    | Passed with no warning or error.                                                                                                                                                                                 |
| `npm run typecheck`               | Passed under strict TypeScript.                                                                                                                                                                                  |
| `npm run test`                    | Passed: 3 files, 10 tests.                                                                                                                                                                                       |
| `npm run deps:check`              | Passed; existing optional Sharp/WASM packages are reported as extraneous, as in the approved foundation environment.                                                                                             |
| `npm run build`                   | Passed after WEB-2 documentation changes; `/`, `/_not-found`, `/design-system`, and `/robots.txt` were reported static. No production source changed during the later documentation-only reconciliation.         |
| `npm run check`                   | Passed during WEB-2. After the final documentation reconciliation, formatting, lint, types, tests, and dependencies passed independently; no production/build input changed.                                     |
| `git diff --check`                | Passed with no whitespace error.                                                                                                                                                                                 |
| Documentation-link validation     | Passed: all local targets across 35 Markdown files resolve.                                                                                                                                                      |
| Scope/public-boundary review      | Passed: no diff under public source, components, tests, assets, dependency manifests, or build configuration; no new service, tracker, environment, route, page, navigation, or deployment configuration exists. |
| Production route and robots probe | Passed: `/` returned 200, `/design-system` returned 404, and `robots.txt` disallows `/design-system`.                                                                                                            |
| `npm run audit`                   | Attempted; current network and approval policy did not permit a fresh registry result.                                                                                                                           |

The first sandboxed production build could not bind an internal Turbopack CSS
worker port. The same build and composite check passed outside the restricted
sandbox. A repeat outside-sandbox build after the final documentation-only
reconciliation could not start because the execution approval service reported
its current usage limit. No production source or build input changed after the
successful build. This is an execution-environment limitation, not evidence of
an application defect.

The production-dependency audit was attempted in the sandbox and could not
resolve the npm registry. The required external registry query was not
authorized by the current approval policy, so WEB-2 makes no fresh audit-pass
claim. The prior WEB-0/WEB-1 report remains historical evidence only.

## Risks and limitations

- No current claim is approved for publication.
- Product maturity is date-sensitive and must be revalidated before copy work.
- The release candidate is not evidence of upload, distribution, active
  testers, or public availability.
- Brand, legal identity, domain, support, privacy, and deletion ownership remain
  unresolved.
- The launch set contains required trust pages whose content is currently
  blocked.
- Audience and journey decisions are hypotheses without formal research.
- Seller terminology and several business concepts require authority outside
  the website repository.
- Release Notes will damage trust if activated without an owner and sustainable
  update process.
- A reserved route could be mistaken for a commitment unless it remains absent
  and unlinked.
- Careers is rejected rather than launched or left as an empty placeholder; a
  real hiring need requires a new IA decision.
- Documentation can drift from product state unless owners honor the recorded
  triggers.
- No fresh npm registry audit result was available under the current execution
  policy.

## Deferred work

The following were explicitly not started:

- final navigation implementation;
- WEB-3 homepage;
- WEB-4 core public pages;
- WEB-5 legal and support pages;
- WEB-6 SEO, accessibility, and performance hardening;
- WEB-7 Play Store readiness;
- WEB-8 production readiness;
- deployment;
- remote creation; and
- push.

## Approval record

The Website public-presence review was accepted on 2026-07-26 and authorized
WEB-2 approval and repository stabilization. The approved WEB-2 snapshot is to
be committed with the subject `docs(web-2): approve information architecture`.
The resulting commit hash is reported in the external stabilization handoff
because a commit cannot include its own hash.

## Remaining gate

WEB-2 stops at approved documentation and governance. Do not begin WEB-3 until
its required content, product-claim, terminology, action, brand, and milestone
authorization decisions are separately approved. Privacy, Support, Terms, and
deletion guidance remain WEB-5 work and require their own approval.
