# KitaMo Website Milestone Map

Status: **WEB-2 architecture approved; later milestones remain gated**

Reviewed: 2026-07-26

This map assigns the proposed information architecture to implementation and
review milestones. It does not authorize route implementation, a public page,
public copy, a public claim, production deployment, or a timeline commitment.
WEB-2 approval fixes the architecture while every later milestone retains its
own entry and publication gates.

## Milestone sequence

| Milestone                                             | Responsibility                                                                                                         | Entry dependency                                                                                    | Completion boundary                                                                                                       |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| WEB-2 — Information Architecture                      | Approve audiences, page contracts, hierarchy, navigation model, status placement, routes, claim mapping, and lifecycle | Approved WEB-0/WEB-1 foundation                                                                     | Documentation approval only; no final public UI or route implementation                                                   |
| WEB-3 — Homepage                                      | Implement the final homepage structure and approved homepage content                                                   | WEB-2 approval; approved homepage claims, terminology, actions, and status wording                  | Homepage implemented; no WEB-4 core-page expansion                                                                        |
| WEB-4 — Core Public Pages                             | Implement approved seller, workflow, and about pages plus their relationships                                          | WEB-3 foundation and approved page contracts, claims, terms, and content owners                     | Core public page set implemented; trust/legal pages remain WEB-5                                                          |
| WEB-5 — Legal and Support                             | Implement support, privacy, terms, and deletion surfaces                                                               | Approved legal identity, support/privacy/deletion owners, contacts, workflows, and reviewed content | Required trust tasks work without placeholders; no full hardening claim                                                   |
| WEB-6 — SEO, Accessibility, and Performance Hardening | Audit and harden the complete representative route set                                                                 | Stable WEB-3 through WEB-5 content and interactions                                                 | Page-level metadata, linking, accessibility, and performance evidence complete without claiming unsupported certification |
| WEB-7 — Play Store Readiness                          | Validate website destinations and public information needed by app-store review                                        | Approved and stable support, privacy, deletion, release, and product-status information             | Store-facing website dependencies reviewed; no production launch by implication                                           |
| WEB-8 — Production Readiness                          | Approve canonical domain, hosting processing, deployment, indexing, monitoring boundaries, and release operations      | WEB-3 through WEB-7 complete and approved; production owners and domain confirmed                   | Production deployment and public-launch decision only                                                                     |
| Future backlog                                        | Reconsider reserved or deferred pages when evidence and ownership exist                                                | Separate product, content, legal, and architecture approval                                         | Work remains outside the current milestone sequence                                                                       |

No later milestone starts merely because its number appears in this map.
Approval and dependency gates remain mandatory.

## Proposed page allocation

| Candidate page      | Proposed lifecycle decision | Milestone or state                                                       | Required dependencies                                                                                                                                                                                                              |
| ------------------- | --------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                 | Implement                   | WEB-3; required for initial public release                               | WEB-2 approval; approved product identification, Currently Testing wording, seller relevance, safe primary action, metadata, and content owner                                                                                     |
| `/for-sellers`      | Implement                   | WEB-4; required for initial public release                               | Approved `seller` scope and audience wording; bounded claims; no unsupported transformation or outcome promises                                                                                                                    |
| `/how-it-works`     | Implement                   | WEB-4; required for initial public release                               | Approved current workflow claims, limitations, status grouping, and product-authority revalidation                                                                                                                                 |
| `/about`            | Implement                   | WEB-4; required for initial public release                               | Approved public identity and mission wording; no measured impact, partner, company, or legal-owner claim without evidence                                                                                                          |
| `/support`          | Implement                   | WEB-5; required for initial public release and before Play Store review  | Assigned Support Owner, approved support scope, monitored contact, escalation workflow, accessible task content, and review cadence                                                                                                |
| `/privacy`          | Implement                   | WEB-5; required for initial public release and before Play Store review  | Assigned Privacy Owner, approved legal identity and contact, accurate data-handling review, legal approval, effective date, and update process                                                                                     |
| `/terms`            | Implement                   | WEB-5; required for initial public release                               | Approved legal entity, governing terms, legal owner, effective date, jurisdiction review, and update process                                                                                                                       |
| `/delete-account`   | Implement                   | WEB-5; required before Play Store review and in the proposed release set | Product-authority ruling on current no-account state, assigned deletion owner, approved instructions preserving the local Owner-PIN prerequisite, contact, any future remote-verification decision, escalation, and privacy review |
| `/features`         | Merge                       | No route; content considered in WEB-4 `/how-it-works`                    | Only approved, status-grouped workflow content may transfer                                                                                                                                                                        |
| `/why-kitamo`       | Merge                       | No route; content considered in WEB-4 `/for-sellers` and `/about`        | Approved relevance and identity statements; no unsupported persuasion                                                                                                                                                              |
| `/community-impact` | Merge                       | No route; mission context considered in WEB-4 `/about`                   | Intended direction may be described only with approval; measured impact remains unsupported                                                                                                                                        |
| `/faq`              | Merge                       | No route; task questions considered in WEB-5 `/support`                  | Approved answers, owner, maintenance trigger, and status-sensitive review                                                                                                                                                          |
| `/contact`          | Merge                       | No route; approved contact paths considered in WEB-5 `/support`          | Real monitored identity, purpose, response ownership, privacy review, and no placeholder details                                                                                                                                   |
| `/customer-app`     | Reserve, do not expose      | Future backlog                                                           | Implemented authoritative product, approved status and claims, terminology, owner, support model, and IA reconsideration                                                                                                           |
| `/pricing`          | Reserve, do not expose      | Future backlog                                                           | Approved pricing and subscription model, legal and product review, owner, terms, support, and claim approval                                                                                                                       |
| `/release-notes`    | Reserve, do not expose      | Future backlog; reconsider during WEB-7 only if needed                   | Public release scope, Release Manager, sustainable cadence, status terminology, redaction rules, and publication approval                                                                                                          |
| `/blog`             | Defer                       | Future backlog                                                           | Editorial owner, governance, capacity, review workflow, accessibility standards, and sustainable publishing plan                                                                                                                   |
| `/careers`          | Reject for now              | Reconsider only through a new IA decision                                | Approved hiring process, real openings, applicant-data review, legal ownership, and maintenance responsibility                                                                                                                     |
| `/status`           | Reject for now              | Rejected                                                                 | Reconsider only if public operational services, monitoring ownership, incident policy, update process, and visitor need exist                                                                                                      |

Reserved and deferred paths are documentation labels only. They must not be
created, linked, indexed, included in a sitemap, or shown in navigation.
Rejected paths receive no implementation or speculative redirect.

## Cross-milestone page progression

The proposed initial release set progresses through several gates:

| Page group                              | Build milestone | Required later review                                                    |
| --------------------------------------- | --------------- | ------------------------------------------------------------------------ |
| Homepage                                | WEB-3           | WEB-6 hardening, WEB-8 production approval                               |
| For sellers, How it works, About        | WEB-4           | WEB-6 hardening, WEB-8 production approval                               |
| Support, Privacy, Terms, Delete account | WEB-5           | WEB-6 hardening, WEB-7 store-readiness review, WEB-8 production approval |

Implementation is not publication. Every page remains non-production until the
complete release set and its dependencies pass the relevant later gates.

## Dependency chain

1. **WEB-2 approval** fixes the provisional architecture well enough to begin
   implementation. A correction returns to WEB-2 documentation.
2. **Claims and terminology approval** must precede final claim-bearing WEB-3
   and WEB-4 copy. Repository evidence alone is insufficient.
3. **Brand approval or explicit provisional-use approval** must precede treating
   WEB-3 visuals as final; WEB-2 does not resolve palette, typography, logo, or
   tagline.
4. **Support, privacy, deletion, and legal ownership** must be assigned before
   WEB-5 pages can be published. Placeholder contacts or identities are not
   acceptable.
5. **Stable representative pages** are required before WEB-6 can run a
   meaningful page-by-page accessibility, SEO, metadata, linking, and
   performance audit.
6. **Working trust destinations** are required before WEB-7 can treat the
   website as evidence for Play Store readiness.
7. **Canonical domain, hosting/data-processing review, operational ownership,
   and release approval** are required before WEB-8 can deploy or enable public
   indexing.

## Future, dormant, and rejected work

### Future backlog

Customer-app, pricing, public release notes, and blog work requires a new
evidence and ownership review. Future backlog does not imply roadmap acceptance,
delivery timing, or public availability.

### Dormant pages

No dormant public page exists at WEB-2. If a future published page becomes
dormant, remove it from navigation, internal links, sitemap, and indexable
metadata; then choose an accurate archive, redirect, or not-found result through
the approved lifecycle process.

### Rejected pages

`/careers` and `/status` are rejected for the current architecture. Careers may
be reconsidered only when a real opening and an approved hiring/privacy process
exist. Status may be reconsidered only when a real public operational-service
boundary and incident-communication process exist. A placeholder page or
redirect to the homepage is not a substitute.

## Scope boundaries

This milestone map does not:

- implement the final navigation, homepage, public pages, footer, or mobile
  menu;
- approve claims, terminology, legal text, contacts, pricing, customer-product
  availability, or community impact;
- resolve the brand, canonical domain, hosting, analytics, localization, or
  deployment posture;
- move WEB-5 trust content into earlier milestones;
- turn WEB-7 readiness into a public release; or
- authorize WEB-8 deployment, remote creation, or pushing.

Revisions to page names, lifecycle states, or milestone allocation require
Website Architect approval and corresponding updates to the information
architecture decisions and page contracts.
