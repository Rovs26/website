# WEB-2 Recommended Information Architecture

Status: **Approved WEB-2 hybrid architecture**

Reviewed: 2026-07-25

The recommended model is a **seller journey with status-first trust rails**. It
combines the smallest useful audience journey with prominent product-maturity,
support, privacy, legal, and deletion paths.

This is an approved architectural blueprint. It does not approve public copy,
metadata, route implementation, navigation components, contact channels, legal
language, testing invitations, or deployment.

## Decision basis

The recommendation follows from:

- the [WEB-2 preflight inventory](../preflight/web-2-content-and-ia-inventory.md);
- the
  [audience and visitor-needs hypothesis](audience-and-visitor-needs.md);
- the [three evaluated IA options](information-architecture-options.md);
- the absence of approved public product claims;
- the confirmed **Currently Testing** product boundary;
- the need for shallow mobile use and low content duplication; and
- the requirement to support Play Store trust surfaces without turning them
  into marketing claims.

## Architecture principles

1. **Current state before future direction.** The testing boundary appears
   before any material capability statement.
2. **One page per distinct visitor question.** Relevance, operation, purpose,
   help, privacy, terms, and deletion have separate responsibilities.
3. **Merge thin or duplicative concepts.** A conceptual sitemap does not create
   a page obligation.
4. **Trust paths remain persistent.** Support, Privacy, Terms, deletion, and
   testing status do not depend on search or promotional content.
5. **Future products remain structurally absent.** Reserved names do not create
   placeholder pages, navigation links, metadata, or sitemap entries.
6. **Mobile depth stays shallow.** Launch destinations are one route deep, with
   no mega-menu or nested mobile hierarchy.
7. **Every claim-bearing page has an owner and evidence gate.** A route cannot
   compensate for missing content authority.
8. **Page names remain reversible until approval.** `/for-sellers` is a
   defensible provisional route, not a permanent terminology decision.

## Proposed hierarchy

```text
KitaMo website
│
├── Home
│   └── Testing status section
│
├── Seller understanding
│   ├── For Sellers
│   └── How It Works
│
├── Purpose
│   └── About
│       ├── Why KitaMo context
│       └── Community direction
│
├── Help
│   └── Support
│       ├── Common questions
│       └── Approved contact or escalation path
│
└── Trust and legal
    ├── Privacy
    ├── Terms
    └── Data and account-deletion information
```

Reserved, deferred, dormant, and rejected concepts are recorded below but are
not part of the public hierarchy.

## Proposed public navigation

### Primary navigation

The proposed launch primary navigation has four destinations:

1. For Sellers — `/for-sellers`
2. How It Works — `/how-it-works`
3. About — `/about`
4. Support — `/support`

The KitaMo identity link returns to `/`. These labels remain subject to
terminology and WEB-2 approval.

### Secondary navigation

Do not create a second global header row. Secondary navigation is contextual:

- Home links to For Sellers, How It Works, About, Testing Status, Support, and
  Privacy.
- For Sellers links to How It Works and Testing Status.
- How It Works links to For Sellers, Testing Status, and Support.
- About links to Testing Status and an approved Support or partner-inquiry
  scope.
- Support links to common questions, Privacy, deletion information, and
  Release Notes only after that page is activated.
- Privacy links to deletion information, Terms, and Support.
- Deletion information links to Privacy and Support.

Breadcrumbs are unnecessary for the one-level launch routes. Reconsider them
only if dated release-note entries or future editorial hierarchies create a
real second level.

### Utility navigation

The proposed persistent utility destinations are:

- Testing Status — `/#testing-status`
- Privacy — `/privacy`

When approved, the exact **Currently Testing** label should be visible beside
or within the testing-status treatment. No Download, Get Started, Join
Testing, Contact, or Early Access action should appear until a real destination
and responsible workflow are approved.

### Footer navigation

Proposed initial groups:

| Group           | Destinations                             |
| --------------- | ---------------------------------------- |
| Explore         | For Sellers, How It Works, About         |
| Help            | Support, Common questions, Data deletion |
| Trust and legal | Testing Status, Privacy, Terms           |

Release Notes may enter Help only after a Release Manager and public update
process are assigned. Customer App, Pricing, Blog, Careers, and Status remain
absent from the footer.

The footer must not invent a legal entity, address, phone number, support
email, copyright owner, or public domain.

## Page relationships

```text
                         ┌──────────────────┐
                         │        /         │
                         │ Currently Testing│
                         └───────┬──────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
       ┌──────▼───────┐  ┌──────▼────────┐  ┌──────▼──────┐
       │ /for-sellers │  │ /how-it-works │  │   /about    │
       └──────┬───────┘  └──────┬────────┘  └──────┬──────┘
              └──────────┬───────┘                  │
                         │                          │
                  ┌──────▼──────┐◄─────────────────┘
                  │  /support   │
                  └───┬─────┬───┘
                      │     │
             ┌────────▼─┐ ┌─▼─────────────────┐
             │ /privacy │ │ /delete-account   │
             └────┬─────┘ └─────────┬─────────┘
                  │                 │
                  └──────┬──────────┘
                         │
                    ┌────▼────┐
                    │ /terms  │
                    └─────────┘
```

This is a relationship diagram, not a visual-layout specification. Every route
remains one level below the root.

## Lifecycle groupings

### Launch-critical pages

These pages are required for the initial public release, but their content and
publication gates remain milestone-specific.

| Route             | Planned milestone | Role                                                                   | Publication gate                                                                  |
| ----------------- | ----------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `/`               | WEB-3             | Plain identity, intended audience, testing maturity, safe next actions | Approved product and audience wording                                             |
| `/for-sellers`    | WEB-4             | Main audience-relevance page                                           | Approved `seller` terminology and bounded claims                                  |
| `/how-it-works`   | WEB-4             | Current-workflow explanation                                           | Approved capability claims and limitations                                        |
| `/about`          | WEB-4             | Purpose, maturity, mission, community direction                        | Approved organization and mission wording; no impact claims                       |
| `/support`        | WEB-5             | Help, common questions, approved escalation                            | Support Owner, monitored identity, scope, and privacy review                      |
| `/privacy`        | WEB-5             | Website and app privacy scopes                                         | Privacy Owner, legal review, privacy contact, accurate hosting/build evidence     |
| `/terms`          | WEB-5             | Public terms and responsible identity                                  | Legal entity, Terms Owner, legal review, jurisdiction decisions                   |
| `/delete-account` | WEB-5             | Discoverable local-data and deletion guidance                          | Accurate no-account wording, verified instructions, deletion owner and escalation |

WEB-5 pages may be implemented only within WEB-5 and must remain unpublished
until their listed dependencies are resolved.

### Pre-production conditional pages

| Route            | Earliest review | Rule                                                                                                                                |
| ---------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `/release-notes` | WEB-7           | Reserve until a Release Manager owns every approved public release record, review cadence, status label, and sensitive-detail check |

Release Notes is not part of the initial launch set. If its governance gate
passes before production, it may become a public trust surface; otherwise it
remains absent.

### Future candidates

No future product page is approved for implementation. Two route names are
reserved for possible later evaluation:

| Reserved route  | Current treatment                                   | Activation condition                                                              |
| --------------- | --------------------------------------------------- | --------------------------------------------------------------------------------- |
| `/customer-app` | No page, link, metadata, sitemap entry, or redirect | A verifiable product, approved public status, owner, claim set, and page contract |
| `/pricing`      | No page, link, metadata, sitemap entry, or redirect | An approved pricing model, legal/commercial review, owner, and exact claim set    |

Reservation prevents accidental reuse of a likely stable name; it does not
promise that either page will exist.

### Deferred sections

| Route   | Treatment           | Reconsideration condition                                                                            |
| ------- | ------------------- | ---------------------------------------------------------------------------------------------------- |
| `/blog` | Deferred and absent | Editorial Owner, review workflow, sustainable cadence, and at least one approved substantive article |

An empty or stale Blog reduces trust and must not be created merely for SEO.

### Pages that should not exist

The following concepts should not create standalone public pages under the
recommended launch architecture:

| Route               | Decision       | Destination or reconsideration                                                                                |
| ------------------- | -------------- | ------------------------------------------------------------------------------------------------------------- |
| `/features`         | Merge          | Current workflows belong in `/how-it-works`                                                                   |
| `/why-kitamo`       | Merge          | Seller relevance belongs in `/for-sellers`; mission belongs in `/about`                                       |
| `/community-impact` | Merge          | Intended community direction belongs in `/about`; no measured-impact claims                                   |
| `/faq`              | Merge          | Common questions belong in `/support` or beside the relevant content                                          |
| `/contact`          | Merge          | One approved contact or escalation scope belongs in `/support`                                                |
| `/careers`          | Reject for now | Reconsider only with a real opening, Hiring Owner, process, privacy review, and response expectations         |
| `/status`           | Reject for now | Reconsider only with a public operational service, uptime evidence, incident owner, and communication process |

The rejected `/status` route is distinct from product-status labels. Testing
maturity remains a content property and a homepage section, not an uptime page.

## Complete route rulings

| Candidate route     | WEB-2 ruling                                  | Summary rationale                                                                        |
| ------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `/`                 | Implement in WEB-3                            | Required to explain the product, audience, limited testing status, and safe next actions |
| `/about`            | Implement in WEB-4                            | Holds purpose, maturity, mission, and unmeasured community direction                     |
| `/features`         | Merge into `/how-it-works`                    | Avoid an unsafe, duplicative capability catalogue                                        |
| `/how-it-works`     | Implement in WEB-4                            | Explain approved current workflows without internal architecture                         |
| `/why-kitamo`       | Merge into `/for-sellers` and `/about`        | Separate practical relevance from mission without another marketing page                 |
| `/for-sellers`      | Implement in WEB-4                            | Main provisional audience page for practical seller needs                                |
| `/customer-app`     | Reserve but do not expose                     | No current customer product; future activation must be explicit and status-governed      |
| `/community-impact` | Merge into `/about`                           | Mission is permissible as direction; measured impact is unsupported                      |
| `/pricing`          | Reserve but do not expose                     | No approved prices, plans, trials, tiers, or subscriptions                               |
| `/faq`              | Merge into `/support` and contextual sections | Reduce claim duplication and stale generic answers                                       |
| `/support`          | Implement in WEB-5                            | Essential trust and tester task, blocked by support ownership and identity               |
| `/contact`          | Merge into `/support`                         | Avoid duplicate or invented contact workflows                                            |
| `/privacy`          | Implement in WEB-5                            | Required trust and Play surface, blocked by final policy and privacy ownership           |
| `/terms`            | Implement in WEB-5                            | Required before public release, blocked by legal identity and review                     |
| `/delete-account`   | Implement in WEB-5                            | Stable deletion-intent path that must clarify the absence of a current account           |
| `/release-notes`    | Reserve; conditionally activate in WEB-7      | Trust mechanism only after public update ownership and sensitive-detail review exist     |
| `/blog`             | Defer                                         | No editorial owner, process, cadence, or content capacity                                |
| `/careers`          | Reject for now                                | No hiring process or real opening                                                        |
| `/status`           | Reject for now                                | No public service or incident-communication operation; conflicts with status terminology |

## Product-status placement

### Launch dominant status

**Currently Testing** is the dominant product status for:

- `/`;
- `/for-sellers`;
- `/how-it-works`;
- app-specific Support content;
- current app-behavior statements in Privacy and deletion content; and
- each future public release-note entry for a testing candidate or distributed
  testing release, without conflating those states.

No launch product claim may use **Available Today** until the claims register
records exact approved wording in that category. Website-route availability is
not a product capability.

### Page-level status

A status label is required beside the H1 or introductory explanation whenever
the page could imply product or capability availability. A header-level label
alone is insufficient.

### Section-level and item-level status

- A section whose status differs from the page's dominant status receives its
  own visible label and explicit availability language.
- Adjacent items with different statuses each receive a label. Prefer separate
  sections over mixed-status grids.
- **Planned** and **Future Vision** content follows all current content and
  never enters launch metadata, screenshots, hero content, or primary actions.
- Future content must not appear visually more prominent than current content.

### Actions and external representations

- Calls to action describe only a real destination and its limits.
- Until approved, use architecture concepts such as Testing Status, Support, or
  Privacy rather than Join, Download, Register, or Get Started.
- Screenshots require a nearby status caption when they depict testing or
  future behavior; alternative text cannot be the only status signal.
- Metadata and social descriptions state limited testing whenever omission
  could imply broad access.
- Structured data must not assert offers, ratings, availability, applications,
  or future capabilities without a specific approved evidence record.

## Trust-content placement

- Testing maturity appears on Home and every claim-bearing product page.
- About records purpose and intended direction without impact statistics.
- Support is primary navigation because help is task-critical for active or
  prospective testers; this does not claim that tester rollout has begun.
- Privacy is a utility and footer link.
- Terms and deletion information are persistent footer links and contextual
  links from relevant trust pages.
- Support, Privacy, deletion, and Terms cross-link so no task ends at an orphan
  page.
- Legal and policy content remains visually and structurally distinct from
  promotional content.

## Support-path placement

The proposed support path is:

```text
Any launch page
  → Support
      → Common questions
      → Approved escalation channel
      → Privacy or deletion information when relevant
      → Release Notes only after activation
```

Support must not include a form, live chat, personal address, or response-time
promise without separate data-collection, privacy, security, accessibility,
and operational approval.

## Legal-content placement

- Privacy and Terms remain distinct because their purposes and owners differ.
- Deletion information has a dedicated path because it is a high-intent trust
  task.
- The deletion page should use a public title centered on data deletion and
  immediately clarify that the current testing product has no KitaMo account.
- The footer must not identify a legal entity or address until approved.
- Effective dates, policy scope, and review ownership are required; product
  status does not replace legal lifecycle information.

## Future-content treatment

- Reserved routes return the normal not-found response until activated.
- Reserved and dormant routes do not appear in navigation, sitemaps, metadata,
  structured data, internal links, or search-oriented placeholder pages.
- Future Customer App content, if later approved, uses **Future Vision** or a
  stronger evidence-backed status at page level and remains outside the seller
  product's current-capability sections.
- Pricing requires an approved commercial model; roadmap intent is
  insufficient.
- No “coming soon,” countdown, waitlist, or implied delivery date is permitted.

## Scalability rules

1. Keep approximately four to six primary destinations. A seventh destination
   requires evidence that it is launch-ready and task-critical.
2. Add a page only when it has a distinct visitor question, sufficient approved
   content, a role owner, an update trigger, and a non-duplicative search
   intent.
3. Prefer broad, durable, lowercase, hyphenated route names.
4. Merge thin pages into the closest task page.
5. Keep future product families outside the current seller journey until their
   public maturity is independently approved.
6. Add no mega-menu. Group later low-priority pages in contextual or footer
   navigation.
7. Preserve status meaning across navigation labels, page introductions,
   metadata, screenshots, and related links.
8. Revalidate every claim occurrence when a product release, source, audience,
   language, or status changes.
9. Treat localization as a later architecture decision; do not introduce
   language-prefixed duplicates during WEB-2.
10. Do not use a CMS, backend, analytics system, or route registry merely to
    represent this documentation.

## Milestone boundary

- WEB-3 may implement the approved homepage structure only.
- WEB-4 may implement approved core public pages.
- WEB-5 owns approved Support, Privacy, Terms, and deletion pages.
- WEB-6 owns full SEO, accessibility, and performance hardening.
- WEB-7 may reconsider governed public Release Notes and completes Play Store
  public requirements.
- WEB-8 owns deployment, production configuration, canonical host, and launch
  readiness.

WEB-2 implements none of these pages or navigation components.

## Approval questions

The Website Architect must approve or correct:

- the hybrid architecture model;
- the eight-page launch-critical set;
- proposed `/for-sellers` naming;
- primary, utility, secondary, and footer navigation;
- all merge, reserve, defer, and reject rulings;
- Customer App and Pricing reservation;
- deletion-page treatment;
- Release Notes reservation and activation gate;
- product-status placement; and
- scalability and future-expansion rules.
