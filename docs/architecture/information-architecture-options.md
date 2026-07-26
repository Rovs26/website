# WEB-2 Information-Architecture Options

Status: **Options evaluated — WEB-2 recommendation approved**

Reviewed: 2026-07-25

This document compares three credible public information-architecture models
before any final homepage, public page, header, mobile menu, or footer is
implemented. Page labels and trees are planning artifacts, not approved public
copy or permanent routes.

The evaluation is grounded in:

- the
  [WEB-2 content and IA inventory](../preflight/web-2-content-and-ia-inventory.md);
- the
  [audience and visitor-needs hypothesis](audience-and-visitor-needs.md);
- public-claims, terminology, and content governance;
- the approved static, accessible, low-JavaScript foundation; and
- the Android product's confirmed **Currently Testing** boundary.

## Decision criteria

Each option is evaluated for:

1. clarity;
2. credibility;
3. mobile usability;
4. future scalability;
5. SEO potential;
6. maintenance burden;
7. current-content readiness;
8. risk of overpromising;
9. support discoverability;
10. legal-page discoverability;
11. suitability for Play Store readiness; and
12. effect on future Customer App communication.

No option receives credit for speculative marketing breadth. A smaller,
truthful structure is preferable to a larger sitemap with thin, unowned, or
unsupported content.

## Option A — Product-first

### Model

Lead with what the product is, what it does, how it works, who it is for, and
where to obtain support.

```text
/
├── /features
├── /how-it-works
├── /for-sellers
├── /about
└── /support

Persistent trust links
├── /privacy
├── /terms
└── /delete-account
```

Pricing, Customer App, Blog, Careers, and Status remain outside the launch
tree.

### Status and content behavior

- The homepage introduces the current product and its testing status.
- Features would group capabilities by the controlled product statuses.
- How It Works would explain practical workflows.
- Future Customer App content would eventually sit beside the seller product
  as another product branch.

This model is familiar, but Features and How It Works compete for the same
limited approved evidence. It also creates pressure to fill a feature
catalogue with planned or future material.

### Evaluation

| Criterion                         | Assessment                                                                                                                                |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Clarity                           | **Medium-high.** Familiar labels are easy to scan, but Features and How It Works are difficult to distinguish at the current depth.       |
| Credibility                       | **Medium-low.** A product catalogue can visually overstate maturity even when status labels are present.                                  |
| Mobile usability                  | **Medium.** Five primary destinations are manageable, but duplicated product concepts increase reading and navigation effort.             |
| Future scalability                | **High.** Additional products and capabilities fit easily, although the hierarchy could become a broad product mega-menu.                 |
| SEO potential                     | **High in theory.** Product and capability topics are distinct, but current evidence is too thin to prevent duplicate or low-value pages. |
| Maintenance burden                | **High.** Capability claims would repeat across Home, Features, How It Works, FAQs, and release content.                                  |
| Current-content readiness         | **Low.** No current claim is publication-approved, and a broad Features page has insufficient safe content.                               |
| Risk of overpromising             | **High.** Catalogue structure encourages equal visual weight for tested, planned, and future capabilities.                                |
| Support discoverability           | **Medium-high.** Support is primary, but product browsing dominates the model.                                                            |
| Legal-page discoverability        | **Medium.** Privacy, Terms, and deletion depend mainly on the footer.                                                                     |
| Play Store suitability            | **Medium.** Trust routes exist, but the model does not naturally lead with testing maturity or policy scope.                              |
| Future Customer App communication | **High scalability, high confusion risk.** A second product branch is easy to add but may appear current before evidence supports it.     |

### Principal risks

- A visitor may interpret “Features” as currently usable capabilities.
- Repeated claims increase stale-content risk.
- A future-product card or navigation item can outweigh a quieter status label.
- A broad product taxonomy may prioritize desktop marketing structure over
  low-bandwidth mobile tasks.

## Option B — Seller-journey-first

### Model

Lead with the intended seller audience, practical relevance, current
workflows, product maturity, and support.

```text
/
├── /for-sellers
├── /how-it-works
├── /about
└── /support

Utility and trust paths
├── /#testing-status
├── /privacy
├── /terms
└── /delete-account
```

Features, Why KitaMo, Community Impact, FAQ, and Contact are merged into the
smallest relevant pages. Pricing and Customer App remain reserved and absent.

### Status and content behavior

- `/for-sellers` answers “Is this relevant to me?” without promising business
  outcomes.
- `/how-it-works` contains only approved, current-testing workflow
  explanations at launch.
- A persistent testing-status path answers “Is it available?” without creating
  a public service-status route.
- Support is a primary destination; legal and deletion pages remain persistent
  utility or footer links.

This model has the clearest mobile task flow, but seller-oriented language can
become benefit-led marketing unless product status precedes every material
capability statement.

### Evaluation

| Criterion                         | Assessment                                                                                                                                                 |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Clarity                           | **High.** Each primary page answers a distinct visitor question: relevance, operation, purpose, or help.                                                   |
| Credibility                       | **High with a status rail.** Practical audience framing is credible when **Currently Testing** precedes benefits and limitations remain adjacent.          |
| Mobile usability                  | **High.** Four shallow primary destinations reduce menu and page-count burden.                                                                             |
| Future scalability                | **High.** Current product pages remain stable while later product families can be added only after approval.                                               |
| SEO potential                     | **Medium-high.** Audience and workflow intent are useful without duplicating a feature catalogue; final terminology still needs approval.                  |
| Maintenance burden                | **Medium-low.** Fewer claim-bearing pages reduce duplication and revalidation work.                                                                        |
| Current-content readiness         | **Medium.** There is enough evidence to define contracts, but public wording and the `seller` label remain unapproved.                                     |
| Risk of overpromising             | **Medium.** Benefit framing can hide maturity unless status placement is mandatory.                                                                        |
| Support discoverability           | **High.** Support is a top-level destination and appears in related trust paths.                                                                           |
| Legal-page discoverability        | **High.** Privacy and deletion remain persistent utility or footer destinations and are cross-linked from Support.                                         |
| Play Store suitability            | **High once dependencies resolve.** The structure supports public Privacy, Support, and deletion URLs without letting them define the marketing hierarchy. |
| Future Customer App communication | **High with governance.** The current seller journey stays coherent while Customer App remains a separate reserved future branch.                          |

### Principal risks

- `seller` is provisional and may change after terminology validation.
- Audience relevance could drift into unsupported transformation or income
  language.
- The testing boundary can be missed if it appears only on the homepage.
- Future audiences may not fit a seller-centered primary structure.

## Option C — Trust-first

### Model

Lead with product maturity, data-handling scope, support, transparency, and
only then product operation and intended audience.

```text
/
├── /#testing-status
├── /how-it-works
├── /support
├── /privacy
└── /about

Additional trust links
├── /terms
└── /delete-account
```

No separate Features, Pricing, Customer App, Blog, Careers, or Status page is
exposed.

### Status and content behavior

- The current testing state is the strongest global signal.
- Support, Privacy, Terms, and deletion information are highly discoverable.
- Future products remain separated or absent.
- Product relevance is explained after maturity and trust boundaries.

This option best prevents overstatement, but several leading destinations are
blocked by unresolved legal, support, and privacy ownership. It may also make
the site feel institutional while under-explaining why the current product is
relevant.

### Evaluation

| Criterion                         | Assessment                                                                                                                                                         |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Clarity                           | **High for maturity; medium for relevance.** Visitors quickly understand that the product is testing but may need more effort to determine whether it is for them. |
| Credibility                       | **Highest.** Trust boundaries and limitations lead the experience.                                                                                                 |
| Mobile usability                  | **High.** Tasks are shallow, though policy-heavy labels may displace the most useful seller path.                                                                  |
| Future scalability                | **Medium-high.** The trust framework scales, but product families need a later structural expansion.                                                               |
| SEO potential                     | **Medium.** Privacy, support, and maturity topics are useful; product and audience discovery is less direct.                                                       |
| Maintenance burden                | **Medium-high.** Legal, support, deletion, and release facts are date-sensitive and owner-dependent.                                                               |
| Current-content readiness         | **Low-medium.** Testing evidence is strong enough for architecture, but public legal and support content is not ready.                                             |
| Risk of overpromising             | **Lowest.** Current state consistently precedes future direction.                                                                                                  |
| Support discoverability           | **Highest.** Support is central to the hierarchy.                                                                                                                  |
| Legal-page discoverability        | **Highest.** Privacy and related trust pages are near the top level.                                                                                               |
| Play Store suitability            | **High after approval.** The necessary public trust surfaces are structurally prominent.                                                                           |
| Future Customer App communication | **High safety.** A future product stays isolated until its maturity and data-handling model are approved.                                                          |

### Principal risks

- Missing contacts and legal identity block the most prominent pages.
- Product relevance may feel secondary or unclear.
- Visitors may mistake “testing status” for service uptime if labels are not
  explicit.
- A policy-heavy primary navigation can increase cognitive burden for sellers
  seeking a simple product explanation.

## Comparative summary

| Criterion                  | Product-first              | Seller-journey-first    | Trust-first             |
| -------------------------- | -------------------------- | ----------------------- | ----------------------- |
| Clarity                    | Medium-high                | High                    | High for maturity       |
| Credibility                | Medium-low                 | High with controls      | Highest                 |
| Mobile usability           | Medium                     | High                    | High                    |
| Future scalability         | High                       | High                    | Medium-high             |
| SEO potential              | High but thin-content risk | Medium-high             | Medium                  |
| Maintenance burden         | High                       | Medium-low              | Medium-high             |
| Current-content readiness  | Low                        | Medium                  | Low-medium              |
| Overpromising risk         | High                       | Medium                  | Low                     |
| Support discoverability    | Medium-high                | High                    | Highest                 |
| Legal discoverability      | Medium                     | High                    | Highest                 |
| Play Store suitability     | Medium                     | High after dependencies | High after dependencies |
| Future Customer App safety | Medium                     | High                    | Highest                 |

## Recommendation

Select a **seller journey with status-first trust rails**, combining Option B's
small audience-and-task structure with Option C's maturity and trust controls.

The hybrid should:

- use For Sellers, How It Works, About, and Support as the proposed four-item
  primary navigation;
- expose Testing Status and Privacy as utility paths;
- keep legal and deletion paths persistent in the footer;
- merge Features into How It Works;
- merge Why KitaMo and Community Impact into For Sellers or About;
- merge FAQ and Contact into Support or relevant page sections;
- reserve Customer App and Pricing without creating or exposing pages;
- reserve Release Notes behind an operating gate and defer Blog until an
  editorial gate passes; and
- reject Careers and public Status for now.

This recommendation is documented in
[`recommended-information-architecture.md`](recommended-information-architecture.md).
It remains proposed until the Website Architect approves WEB-2.

## Reconsideration conditions

Re-evaluate the options if:

- approved public claims become broad enough to support a distinct Features
  page;
- validated audience research shows that `seller` is unclear or too narrow;
- a public testing, download, support, or account workflow materially changes
  visitor tasks;
- Customer App becomes an approved, verifiable product with a public status;
- legal or Play Store requirements mandate a different persistent route;
- localization requires a new hierarchy; or
- more than six genuinely launch-ready primary destinations exist.

Reconsideration does not authorize route implementation or publication without
the relevant milestone and content approvals.
