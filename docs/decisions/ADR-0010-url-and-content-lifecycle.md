# ADR-0010: URL and content lifecycle

## Status

Accepted — approved as WEB-2 documentation and governance on 2026-07-26.

The route names, lifecycle states, and indexing expectations in this record are
planning decisions. They do not authorize route creation, redirect
configuration, canonical metadata, indexing, or publication during WEB-2.

## Context

The website needs stable, understandable URLs without treating every plausible
future page as current. Several candidate pages lack approved claims,
terminology, owners, legal content, operational processes, or a current product
to describe. Publishing placeholders or speculative routes would create trust,
maintenance, and search-indexing risk.

The canonical public host is unresolved. The temporary root remains no-index,
and `/design-system` is a development-only review route that returns not found
in production. No public route history exists that requires redirects.

Content state can also change when an app release, claim source, product status,
owner, law, policy, or workflow changes. URL permanence must therefore be paired
with explicit review and retirement rules.

## Decision

Adopt the following proposed URL rules:

- use lowercase ASCII path segments;
- separate words with hyphens;
- prefer short, descriptive nouns or task phrases;
- keep the initial route depth to one segment where practical;
- do not encode product status, implementation technology, campaign text,
  language assumptions, dates, or organizational structure into core-page
  paths;
- use no trailing slash as the proposed canonical path form, consistent with
  the current framework default;
- keep query strings for temporary, non-canonical view state only and never use
  them as separate indexable content identities;
- do not configure a canonical origin until the public domain is approved; and
- do not create speculative redirects for routes that have never been
  published.

Use these lifecycle states:

| Lifecycle state                     | Meaning                                                                                         | Routing and indexing effect                                                                |
| ----------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Required for initial public release | Necessary to the approved launch set, but still subject to its implementation and content gates | Implement only in the assigned milestone; index only after content and production approval |
| Required before Play Store review   | Needed for trust, support, privacy, or deletion review                                          | Keep unpublished until the responsible owner and reviewed content exist                    |
| Reserved                            | A stable candidate path with a plausible future need                                            | Do not create, link, include in a sitemap, or index                                        |
| Deferred                            | A possible content program without current capacity or approval                                 | Do not create or expose                                                                    |
| Dormant                             | A formerly approved or implemented page intentionally unavailable                               | Return the reviewed retirement behavior and remove it from navigation and sitemap          |
| Rejected                            | No current justification for the route                                                          | Do not create, link, reserve publicly, or redirect                                         |

The proposed initial release routes are `/`, `/for-sellers`,
`/how-it-works`, `/about`, `/support`, `/privacy`, `/terms`, and
`/delete-account`. Their names and lifecycle assignments remain awaiting WEB-2
approval.

Reserve internally, without route implementation or public exposure:

- `/customer-app`
- `/pricing`
- `/release-notes`

Defer `/blog`. Reject `/careers` and `/status` for now. Do not create standalone
routes for `/features`, `/why-kitamo`, `/community-impact`, `/faq`, or
`/contact`; their approved content, if any, belongs in the retained pages
defined by ADR-0008.

If public release notes are approved later, keep `/release-notes` as the
collection path and use the proposed stable detail pattern
`/release-notes/YYYY-MM-DD-short-slug`. The date and slug must describe an
approved public release record and must not expose internal build IDs, testing
tracks, security-sensitive fixes, private architecture, or operational detail.

If a blog is approved later, use `/blog` and stable post slugs only after an
editorial lifecycle decision. Do not pre-create an empty collection. Future
localization requires a separate decision before language prefixes or alternate
URLs are introduced.

When a published page changes name or purpose:

1. preserve the old URL if its visitor purpose remains materially the same;
2. otherwise choose the closest approved replacement and add one permanent
   redirect only after reviewing semantic equivalence;
3. do not redirect an unavailable or rejected capability to a misleading
   marketing page;
4. remove retired URLs from navigation, internal links, sitemaps, and canonical
   references;
5. preserve a useful archived page only when an owner, retention purpose,
   accurate status, and ongoing review exist; and
6. use a clear not-found response when no safe replacement or archive exists.

Every published page must have a role-based owner, evidence boundary, review
trigger, and stale-content response. A source change, product-status change,
major release, legal requirement, contact change, or owner loss requires
revalidation. If material content becomes unsupported, remove it from public
use rather than retaining it behind a quieter disclaimer.

Non-public previews must remain no-index and unavailable in production when
their purpose requires it. Reserved and deferred routes must return the normal
not-found response because they do not exist publicly.

## Rationale

Short, stable routes improve comprehension, sharing, assistive-technology use,
and future maintenance. Separating internal reservation from public route
creation prevents an empty page, sitemap entry, or navigation link from being
mistaken for a product commitment.

Lifecycle states make publication readiness explicit and connect route
existence to claims, ownership, legal review, and product maturity. Conservative
redirect rules avoid sending visitors from a precise trust or task URL to a
page that does not answer the same need.

Deferring canonical-host configuration and localization avoids encoding
unapproved identity and language decisions into permanent metadata or paths.

## Consequences

- A reserved route is a documentation decision only and has no public HTTP,
  navigation, sitemap, or metadata presence.
- Initial routes cannot be indexed merely because their code exists; page
  evidence, content, ownership, legal, accessibility, and production gates must
  pass first.
- The current temporary root no-index posture remains until a later approved
  release decision.
- Merged candidate pages do not receive speculative redirects because they have
  never been public routes.
- Page retirement requires coordinated navigation, internal-link, sitemap,
  metadata, and claim-governance updates.
- Release notes and blog posts need separate ownership and content lifecycle
  approval before their collection routes exist.
- A future canonical domain, sitemap, localization model, and production
  indexing policy remain later-milestone decisions.

## Alternatives considered

### Create every reserved path with a coming-soon page

Rejected because a public placeholder can imply availability, create thin
indexed content, and require maintenance without serving a real task.

### Mirror navigation hierarchy in deeply nested URLs

Rejected because the initial page set is small, navigation can change, and deep
paths would add mobile and maintenance cost without improving meaning.

### Date-based core-page URLs

Rejected because current product, support, privacy, and audience pages are
living resources rather than dated publications.

### Configure a placeholder canonical domain

Rejected because no public host has been approved and a placeholder can escape
into search metadata, external references, or deployment configuration.

### Redirect every removed or rejected route to the homepage

Rejected because broad homepage redirects hide missing content, frustrate task
completion, and can misrepresent a capability's existence.

## Conditions requiring reconsideration

Reconsider this decision if:

- WEB-2 approval changes route names or lifecycle assignments;
- an approved canonical domain or trailing-slash platform policy is adopted;
- localization requires language-specific routes or alternate references;
- a CMS or editorial system is separately approved and changes content
  identifiers or retirement behavior;
- public release notes, blog content, customer product, pricing, or account
  behavior becomes authoritative;
- legal, search, accessibility, or records-retention requirements demand
  different archival or redirect handling; or
- a published route's evidence, status, owner, or visitor purpose changes
  materially.

Any replacement must retain clear public-versus-reserved boundaries, safe
not-found behavior, claim revalidation, and protection against stale or
misleading indexed content.
