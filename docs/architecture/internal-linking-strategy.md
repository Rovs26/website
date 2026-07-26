# WEB-2 Internal-Linking Strategy

Status: **Approved WEB-2 architecture strategy**

Reviewed: 2026-07-25

Internal links exist to help a visitor understand the product, verify trust
information, or complete a task. They are not a keyword-distribution system.
This document defines relationships only; WEB-2 implements no links or routes.

## Linking principles

1. Link at the point where the destination answers the visitor's next
   reasonable question.
2. Use descriptive text that remains understandable out of context.
3. Keep the number of competing choices small, especially on mobile.
4. Never link to a reserved, dormant, rejected, incomplete, internal-only, or
   unapproved page.
5. Do not make a footer the only route to essential Support, Privacy, Terms, or
   Data Deletion information.
6. Do not repeat a link in every paragraph or vary anchor text merely for SEO.
7. Status explanations qualify claims; they are not hidden in tooltips,
   footnotes, title attributes, or hover-only UI.
8. A link label describes what the visitor will find, not a promotional
   promise.

Preferred labels include “How KitaMo works,” “Read the privacy information,”
and “How to delete local KitaMo data.” Avoid “Learn more,” “Click here,” or
“Get started” when the actual destination is only explanatory.

## Core relationship model

```text
Home
├── For Sellers
│   ├── How It Works
│   └── Testing status
├── How It Works
│   ├── For Sellers
│   ├── Support
│   └── Privacy
├── About
│   ├── Testing status
│   └── For Sellers
├── Support
│   ├── Privacy
│   ├── Data Deletion
│   └── Release Notes [only after activation]
└── Trust paths
    ├── Privacy
    │   ├── Data Deletion
    │   ├── Support
    │   └── Terms
    ├── Terms
    │   ├── Privacy
    │   └── Support
    └── Data Deletion
        ├── Privacy
        └── Support
```

“Testing status” is a visible Home section such as `/#testing-status`, not a
separate public service-status page.

## Primary contextual-link patterns

| Source context             | Visitor need                           | Destination                                          | Rule                                                                      |
| -------------------------- | -------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------- |
| Home product orientation   | Assess audience relevance              | `/for-sellers`                                       | Place after the current testing state is clear                            |
| Home product orientation   | Understand bounded workflows           | `/how-it-works`                                      | Do not label as a feature catalogue                                       |
| For Sellers                | Understand the practical sequence      | `/how-it-works`                                      | Link after the relevant audience context, not after every example         |
| How It Works               | Decide whether the product is relevant | `/for-sellers`                                       | One reciprocal contextual link is sufficient                              |
| Any claim-bearing page     | Interpret availability                 | `/#testing-status` or a same-page status explanation | Status remains visible beside the claim; the link provides deeper meaning |
| About mission              | Verify current maturity                | Testing-status explanation                           | Future direction never stands without current-state context               |
| Product/support limitation | Understand data scope                  | `/privacy`                                           | Link only after Privacy is approved and public                            |
| Local-data action          | Understand consequences and rights     | `/privacy` and `/delete-account`                     | Use explicit labels and keep destructive context adjacent                 |
| Unresolved issue           | Get approved help                      | `/support`                                           | Do not promise response or resolution in the link label                   |

## Homepage relationships

Home orients; it does not duplicate every downstream section.

- Link to For Sellers for audience fit.
- Link to How It Works for approved workflow depth.
- Link to About for mission and maturity context.
- Link to Support for a real help task.
- Link to Privacy from trust context and the utility/footer areas.
- Link directly to the testing-status explanation from any availability cue.
- Do not link to Customer App, Pricing, reserved Release Notes, Blog,
  Careers, or Service Status.
- Do not add a grid whose only purpose is exposing the whole sitemap.

Each core page links back to Home through the brand/home link and browser
history; a repeated “Back to home” control is unnecessary on normal pages.

## Support links

Support is a primary-navigation destination once operational.

- How It Works links to Support for current testing limitations or
  troubleshooting, not as a generic final CTA.
- Privacy and Data Deletion link to Support for approved escalation.
- Support links to Privacy and Data Deletion when a question involves data.
- Common questions live on Support or the page they qualify and use stable
  heading fragments only after those headings are implemented and tested.
- Release Notes links to Support only after Release Notes activation.
- A support contact value is not duplicated across every page; pages link to
  the governed Support source so contact changes remain centralized.

If Support is not ready, dependent public pages do not substitute a placeholder
email, personal address, disabled button, or generic Contact route.

## Trust and legal links

- Privacy, Terms, and Data Deletion are persistent footer destinations after
  publication.
- Privacy and Data Deletion are reciprocal because deletion behavior depends on
  data scope.
- Terms links to Privacy where data treatment is relevant and to Support for
  approved questions.
- Product pages link to Privacy only where the data-handling question is
  material; do not insert policy links into every sentence.
- Legal pages remain visually and semantically distinct from promotional copy.
- Effective and updated dates use text, not links, unless an actual dated
  history exists.
- A legal or privacy document never links to a future capability in a way that
  could imply it is governed and available.

## Current-to-future content boundaries

The initial site does not link to reserved future routes.

If a bounded **Planned** or **Future Vision** section is approved later:

- current content appears first;
- the future section has its own visible status and non-commitment language;
- contextual links into the future section use wording such as “Read the Future
  Vision,” not a current-product action;
- the future section links back to the current-product explanation;
- no primary-navigation, utility, footer, metadata, or related-content link
  makes future content look like a current destination; and
- a Future Vision Customer App page remains unlinked until its separate
  activation decision.

Do not cross-link current screenshots, support instructions, or release notes
to speculative feature concepts.

## Page-to-status explanations

Status placement is governed by `content-status-placement-rules.md`.
Internal-linking consequences are:

- a link to a deeper status explanation supplements, but never replaces, an
  adjacent visible label;
- link text names the status or purpose, such as “What Currently Testing
  means”;
- an anchor target begins with a heading and receives unobscured focus when
  navigated;
- status anchors remain stable or receive an approved migration when public;
- FAQs repeat the applicable status rather than link to one generic badge; and
- no “Available Today” link exists for a product capability without an
  approved claim in that category.

## Release-note connections

Release Notes remains reserved. If activated after its operating gate:

- Support may link to the release list when a visitor needs change context.
- Each release entry links only to current, approved product or support
  information affected by the change.
- Current product pages may link to a release note only when the date/version
  materially helps interpretation.
- A release note does not become the canonical explanation of a lasting
  workflow; durable instructions belong on How It Works or Support.
- Later notes may link to an earlier note for a correction or supersession.
- Avoid auto-generated tag clouds, “popular posts,” and unrelated article
  carousels.

## Breadcrumbs

Breadcrumbs are not needed on the proposed one-level launch routes. The
brand/home link, primary navigation, page title, and browser Back behavior
provide sufficient orientation.

If Release Note detail pages or a future editorial hierarchy are activated:

- render a semantic `nav` labelled “Breadcrumb”;
- use an ordered list;
- begin with Home, include the collection, and identify the current page in
  text with `aria-current="page"` when linked or as non-linked text;
- use the visible page title, not an internal slug;
- keep the hierarchy consistent with URLs; and
- do not add breadcrumbs merely for structured-data eligibility.

## Related-content rules

- Show at most two or three directly relevant next pages.
- Explain the relationship with descriptive labels.
- Do not display a related section when the primary content already ends with
  the same links.
- Do not personalize links, track selection, or infer visitor segments.
- Exclude reserved, dormant, future, outdated, and unapproved content.
- Review related links when a source or destination changes status.

Recommended initial relationships:

| Page          | Related content              |
| ------------- | ---------------------------- |
| For Sellers   | How It Works; testing status |
| How It Works  | For Sellers; Support         |
| About         | For Sellers; testing status  |
| Support       | Privacy; Data Deletion       |
| Privacy       | Data Deletion; Support       |
| Terms         | Privacy; Support             |
| Data Deletion | Privacy; Support             |

## Footer-link principles

- Footer links reflect the approved public architecture, not every reserved
  namespace.
- Group by visitor purpose: Explore, Help, Trust and legal.
- Keep each label identical to the page's approved navigation name.
- Support, Privacy, Terms, and Data Deletion remain easy to scan.
- Testing status can link to its Home explanation.
- Do not include Pricing, Customer App, Blog, Careers, Service Status, or
  Release Notes before activation.
- Do not repeat a separate generic Contact link when Support owns the channel.
- Footer prominence does not replace contextual links for critical tasks.

## Orphan-page prevention

Every indexable public page must have:

1. one intentional inbound path from primary, utility, footer, or contextual
   navigation;
2. one path back to Home or the parent task;
3. inclusion in the approved sitemap after publication;
4. a page contract and role owner;
5. claim and status review; and
6. no dependency on an unpublished source page.

Later validation should compare the implemented route inventory, navigation
model, sitemap, and inbound-link graph. A route with no intentional inbound
link is either an error or must be explicitly non-public. A sitemap entry alone
does not cure an orphan page.

## Link maintenance

Review internal links when:

- a route, title, status, or lifecycle changes;
- a legal/support destination is activated or withdrawn;
- a claim becomes outdated or is reclassified;
- localization is introduced;
- a release note is corrected or retired; or
- a redirect is added.

Automated link validation may check that repository documentation references
resolve and that implemented internal targets exist. It cannot decide whether a
link is truthful, helpful, or prominent enough; that remains a content and
accessibility review.
