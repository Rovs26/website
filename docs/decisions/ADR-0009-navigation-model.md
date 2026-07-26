# ADR-0009: Navigation model

## Status

Accepted — approved as WEB-2 documentation and governance on 2026-07-26.

The labels, destinations, groups, and behavior described here are a navigation
specification only. WEB-2 does not authorize a final header, mobile menu,
footer, route, or Client Component.

## Context

The proposed information architecture must let a mobile-first public audience
answer six questions with little effort:

1. What is KitaMo?
2. Is it available?
3. Is it relevant to me?
4. How does it work?
5. Where can I find trust information?
6. Where can I get help?

Many visitors may use a small Android device, limited data, or an inconsistent
connection. Navigation must therefore stay shallow, predictable, keyboard
accessible, and useful without a complex interaction layer. It must also avoid
placing pricing, a future customer application, or other reserved content beside
current-product destinations.

Support and legal destinations are important to the proposed release, but their
pages cannot be published until WEB-5 establishes approved owners, content,
contacts, and workflows. The current `PageShell` header is a temporary
brand-only foundation and is not a navigation implementation.

## Decision

Use one small, shared destination set across desktop and mobile.

The proposed launch primary navigation has four visible destinations:

| Order | Destination     | Proposed label | Role                                       |
| ----: | --------------- | -------------- | ------------------------------------------ |
|     1 | `/for-sellers`  | For Sellers    | Audience relevance                         |
|     2 | `/how-it-works` | How It Works   | Approved bounded workflows and limitations |
|     3 | `/about`        | About          | Identity, mission, and maturity context    |
|     4 | `/support`      | Support        | Help, contact, and task-focused guidance   |

Home is an additional implicit path through the KitaMo brand/home link rather
than a fifth visible primary item. A visible `Home` item may be included in the
mobile navigation if testing shows that the brand link is not sufficiently
clear. That choice remains an implementation detail for a later milestone.

Desktop navigation will present the primary destinations in one level without
dropdowns or a mega-menu. Utility navigation will expose Testing Status at
`/#testing-status` and Privacy after that page is approved and public. It may
expose a testing or participation action in the future only after its
destination, eligibility, status, and owner are approved. Until then, no join,
download, sign-in, early-access, or contact call to action may be invented.

Mobile navigation will expose the same destinations in the same conceptual
order, at one level. A native, in-flow `details`/`summary` disclosure is the
preferred no-JavaScript baseline. If later testing requires a custom
disclosure, it must use a real button and retain server-rendered links. The
later implementation must:

- use a semantic navigation landmark and a clearly named disclosure control;
- provide native or explicit expanded state;
- support keyboard, touch, zoom, and screen-reader use;
- keep focus predictable on open and close;
- close without trapping or losing focus;
- avoid hover-only or swipe-only behavior;
- preserve a useful brand/home link and support path when JavaScript fails; and
- avoid creating a Client Component unless viewport constraints genuinely
  require interactive state.

Footer navigation will use a small set of task-oriented groups:

- **Explore:** For Sellers, How It Works, About.
- **Help:** Support, Common questions, Data deletion.
- **Trust and legal:** Testing Status, Privacy, Terms.

Reserved, deferred, dormant, rejected, and future pages do not appear in the
launch header or footer. `/privacy`, `/terms`, and `/delete-account` remain
proposed footer destinations until their WEB-5 content and ownership gates
pass. Support should remain discoverable in primary and footer navigation
because it serves prospective participants and any future active testers
without claiming that tester rollout has begun.

Active state must be communicated with text and programmatic semantics, not
color alone. The exact treatment is deferred, but a link to the current page
should expose `aria-current="page"` where appropriate. Labels must remain
descriptive out of context, page headings must match the destination's purpose,
and the skip link must continue to reach the page's main landmark.

## Rationale

A single-level destination set reduces cognitive and interaction cost and makes
desktop and mobile behavior easier to keep consistent. Four visible primary
destinations plus an implicit home path fit the proposed launch scope without
turning the header into a sitemap.

Putting Support in primary navigation prioritizes a real task and compensates
for the product's testing maturity. Placing legal and deletion links in the
footer keeps them consistently discoverable without presenting them as product
marketing. Excluding future and ownerless destinations prevents navigation
prominence from being mistaken for availability.

The model does not prescribe a JavaScript menu. That decision belongs to later
implementation and must follow the smallest accessible interaction that fits
the final layout and labels.

## Consequences

- The same information hierarchy should be recognizable across viewport sizes.
- Header labels must remain concise enough for small screens and resilient to
  reasonable typography changes.
- Support appears in both primary and footer navigation, an intentional
  task-discovery exception rather than general duplication.
- Privacy remains a utility and footer destination; Terms and Data deletion
  remain footer trust destinations unless a task or regulatory review requires
  additional prominence.
- A future participation action cannot be added as a convenience; it needs an
  approved workflow, status, destination, wording, and owner.
- Future expansion should add a destination only when a page has approved
  evidence, ownership, lifecycle, and enough distinct visitor value to avoid
  duplication.
- WEB-3 through WEB-5 implementations must preserve landmarks, focus
  visibility, active state, skip navigation, and no-icon-only meaning.
- No final navigation UI is implemented by this decision.

## Alternatives considered

### Expose the full sitemap

Rejected because it would surface reserved or unsupported routes and increase
mobile scanning and maintenance burden.

### Product dropdown plus audience dropdown

Rejected for the initial release. The small page set does not justify nested
navigation, and dropdowns add keyboard, focus, touch, and no-JavaScript
complexity.

### Trust-only primary navigation

Rejected because privacy and terms alone do not help a seller understand
relevance or how the testing product works.

### Support only in the footer

Rejected because prospective or future active testers and trust-conscious
visitors need a prominent, predictable help path.

### Permanent mobile drawer

Not selected at architecture time. A disclosure menu may be appropriate, but
the final label widths, layout, and usability evidence should determine the
smallest accessible implementation.

## Conditions requiring reconsideration

Reconsider this navigation model if:

- WEB-2 approval changes the launch page set or page names;
- user or accessibility testing shows that implicit Home is not discoverable;
- approved localization makes the labels too long for a one-level layout;
- the product gains an approved participation, download, account, customer, or
  pricing path that materially changes priority;
- support or legal review requires a more prominent trust destination;
- the final layout cannot present the proposed destinations accessibly without
  a different mobile pattern; or
- the site grows beyond a small destination set and evidence supports a
  carefully reviewed second navigation level.

Any replacement must remain shallow, status-aware, mobile-first, keyboard
operable, and free of links that imply unsupported availability.
