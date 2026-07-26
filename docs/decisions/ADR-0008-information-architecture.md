# ADR-0008: Information architecture

## Status

Accepted — approved as WEB-2 documentation and governance on 2026-07-26.

The architecture model, page names, launch set, and lifecycle assignments in
this record are approved planning decisions, not approved public navigation or
permission to implement routes.

## Context

The website needs a public structure before the final homepage or public pages
are built. Current evidence is sufficient to plan around an Android release
candidate classified as **Currently Testing**, a likely seller audience, and
strong support and trust needs. Evidence does not establish tester rollout. It
is not sufficient to publish product claims, legal text, contact details,
pricing, a customer application, or broad availability.

Three architecture pressures must be balanced:

- a product-first model can explain KitaMo directly but can make a testing
  candidate appear more complete or available than the evidence supports;
- a seller-journey-first model can help visitors judge relevance but can drift
  into unsupported problem, benefit, or business-outcome claims; and
- a trust-first model makes maturity, privacy, and support easier to find but
  can obscure the practical reason a seller would continue exploring.

The current claims register contains nine evidence-supported propositions, but
none has approved public wording. Brand identity, public terminology, legal
identity, support ownership, contacts, canonical domain, testing participation,
and download destinations also remain unresolved.

## Decision

Adopt a **trust-led seller-journey/product hybrid** as the proposed WEB-2
information architecture.

The architecture will:

1. explain the product and its **Currently Testing** state before presenting
   benefits or future direction;
2. give sellers a short path to assess relevance without inventing business
   outcomes;
3. explain only approved, bounded current workflows, with status and
   limitations adjacent to each capability;
4. make support, privacy, terms, and deletion information consistently
   discoverable once those pages have approved owners and content; and
5. keep planned, future, dormant, and reserved material out of the initial
   navigation and subordinate to current-state information.

The proposed initial public-release page set is:

- `/`
- `/for-sellers`
- `/how-it-works`
- `/about`
- `/support`
- `/privacy`
- `/terms`
- `/delete-account`

These routes are a proposed lifecycle plan, not current public pages. The
homepage belongs to WEB-3; the seller, process, and about pages belong to WEB-4;
and support, privacy, terms, and deletion belong to WEB-5. Trust pages remain
blocked until their role owners, factual content, contacts, and review
requirements are approved. Full release also depends on the later WEB-6 through
WEB-8 gates.

Apply these proposed consolidation and lifecycle rulings:

| Candidate route     | Proposed ruling        | Architectural destination or condition                                                             |
| ------------------- | ---------------------- | -------------------------------------------------------------------------------------------------- |
| `/features`         | Merge                  | Put only approved, status-grouped workflow information in `/how-it-works`.                         |
| `/why-kitamo`       | Merge                  | Put practical relevance in `/for-sellers` and bounded identity or mission context in `/about`.     |
| `/community-impact` | Merge                  | Limit `/about` to mission or intended direction; do not claim measured impact.                     |
| `/faq`              | Merge                  | Put task-focused questions in `/support` when answers and ownership exist.                         |
| `/contact`          | Merge                  | Put approved contact and escalation paths in `/support`; do not create a generic placeholder page. |
| `/customer-app`     | Reserve, do not expose | Reconsider only with product evidence, approved status, terminology, ownership, and content.       |
| `/pricing`          | Reserve, do not expose | Reconsider only after an approved pricing model and publication review exist.                      |
| `/release-notes`    | Reserve, do not expose | Reconsider only with a public release scope, owner, cadence, and sensitive-detail policy.          |
| `/blog`             | Defer                  | Reconsider only with an editorial owner, process, capacity, and sustainable cadence.               |
| `/careers`          | Reject for now         | Reconsider through a new IA decision only with an approved hiring process and real openings.       |
| `/status`           | Reject for now         | No public operational-service or incident-communication model currently justifies the page.        |

No merged, reserved, deferred, or rejected route is implemented or redirected
during WEB-2.

## Rationale

The hybrid keeps the reader's most important trust question—whether the product
is available—near the top of the hierarchy while still supporting the practical
question of whether KitaMo may be relevant to a seller. It avoids making a
generic feature catalogue the center of the site when all claim wording remains
unapproved.

The small page set limits duplication, supports shallow mobile navigation, and
gives support and privacy tasks stable destinations. Consolidation also reduces
the risk of thin pages, stale copy, empty sections, and conflicting status
descriptions.

Reserved routes acknowledge plausible future needs without making them
discoverable, indexable, or implied commitments. Rejecting a status page now is
more truthful than launching a surface without public services, monitoring
ownership, or incident-communication operations.

## Consequences

- The homepage must lead with plain identification and visible maturity rather
  than a broad marketing promise.
- `/for-sellers` becomes the proposed audience-relevance page, but its final
  label and copy still require terminology and claim approval.
- `/how-it-works` owns bounded current workflow explanations and must not become
  an undifferentiated list of current and future features.
- `/about` may explain identity, mission, and intended direction but cannot
  claim measured community impact.
- Required trust pages are part of the release architecture even though WEB-5
  dependencies currently prevent publication.
- Future content remains excluded from initial primary navigation and must not
  visually dominate current testing information.
- Fewer pages reduce navigation and maintenance burden, but each retained page
  needs a clear contract, owner role, evidence boundary, and stale-content
  trigger.
- WEB-2 documents architecture only. It does not implement the homepage,
  navigation, routes, metadata, redirects, or public copy.

## Alternatives considered

### Product-first

Rejected as the leading model. It is direct and potentially search-friendly,
but the present evidence and approval state make a feature-heavy product
hierarchy especially likely to overstate maturity or combine tested and future
capabilities.

### Seller-journey-first

Not selected by itself. It can be relevant and easy to scan on mobile, but it
creates pressure to assert seller problems, transformations, savings, or
outcomes that are not supported by the claims register.

### Trust-first

Not selected by itself. It best exposes maturity, support, and privacy, but a
site organized almost entirely around caveats and governance can make the
product's practical purpose difficult to understand.

### Full conceptual sitemap

Rejected. Launching or linking every candidate page would create thin,
unsupported, ownerless, or misleading surfaces such as pricing, customer app,
blog, careers, and status.

## Conditions requiring reconsideration

Reconsider this decision if:

- approved research materially changes the primary audiences or their highest
  priority tasks;
- the product advances beyond its release-candidate testing state or gains an
  approved public participation or download path;
- approved claims can support a distinct features page without mixing status
  categories;
- a current customer product, pricing model, public release-note program, or
  operational status process becomes authoritative;
- legal, Play Store, localization, accessibility, or support obligations
  require a different hierarchy;
- route analytics are later approved and show a serious discoverability
  problem; or
- the Website Architect rejects or revises the proposed WEB-2 page names,
  launch set, or lifecycle decisions.

Any reconsideration must preserve claim traceability, visible product status,
mobile clarity, support and privacy discoverability, and separation of current
capabilities from planned or future material.
