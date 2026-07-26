# WEB-2 Content-Status Placement Rules

Status: **Approved WEB-2 architecture control**

Reviewed: 2026-07-25

These rules apply the four controlled product statuses to later public pages.
They do not approve a claim, assign **Available Today** to any current
capability, or implement a visual treatment.

## Controlled labels

Use only:

1. **Available Today**
2. **Currently Testing**
3. **Planned**
4. **Future Vision**

The exact visible label and accessible meaning must travel together. Color,
shape, icon, position, or tone may support the meaning but never carry it
alone. Do not substitute “coming soon,” “launching shortly,” “almost ready,”
“available soon,” beta, early access, or a custom badge without an approved
taxonomy decision.

## Current website baseline

- No product capability has an approved **Available Today** public claim.
- The initial product pages are dominated by **Currently Testing**.
- The Android build is a release candidate for Google Play Internal Testing;
  evidence does not confirm tester rollout or broad public access.
- **Planned** and **Future Vision** content is excluded from initial navigation
  and launch metadata.
- The website itself being reachable does not make the Android product or any
  product capability **Available Today**.

## Placement levels

### Page-level status is required when

- the page title, introduction, route, screenshot, or search snippet could
  imply product availability;
- most of the page describes one product maturity;
- a visitor may enter directly from search, a store review, or an external
  link without seeing Home;
- the page is Home, For Sellers, How It Works, current-product Support, current
  Android Privacy behavior, Data Deletion, or a release-note detail; or
- the page contrasts current and future content.

Place the label beside the H1 or in the introductory block before the first
capability, benefit, screenshot, or action. A footer badge or bottom disclaimer
is insufficient.

### Section-level status is required when

- a section has a different status from the page's dominant status;
- a current page contains an approved **Planned** or **Future Vision** section;
- a section describes a product, platform, audience, or release with a
  different maturity;
- a roadmap or direction section appears; or
- a section can be shared or linked to independently and could be
  misunderstood out of context.

The section heading, status label, explanation, and limitations form one
semantic group. Future sections follow current-state content and receive no
greater visual emphasis than current content.

### Feature-level status is required when

- adjacent capabilities differ in status;
- a card, list item, comparison row, screenshot, FAQ answer, release-note item,
  or CTA can stand alone;
- one limitation changes the availability of a specific capability; or
- content may be reused on another surface.

Prefer not to create mixed-status card grids. When every item shares the page
status, a clear page/section label can qualify the group, but each item still
needs claim traceability in governance.

## Dominant-status rules by page

| Page                            | Dominant status                                            | Other status allowed                                         | Rule                                                  |
| ------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------- |
| Home                            | **Currently Testing**                                      | Bounded **Future Vision** only after separate approval       | Status precedes orientation and every CTA             |
| For Sellers                     | **Currently Testing**                                      | None at initial launch                                       | Audience relevance cannot imply access                |
| How It Works                    | **Currently Testing**                                      | None at initial launch                                       | Explain tested workflows only                         |
| About                           | **Currently Testing** for product context                  | **Future Vision** for mission direction                      | Separate evidence from aspiration                     |
| Support                         | **Currently Testing**                                      | Item-specific status when support scope differs              | State supported product/release near H1               |
| Privacy                         | **Currently Testing** beside app-behavior claims           | None unless a future surface is actually covered             | Policy statements themselves are not roadmap statuses |
| Terms                           | **Currently Testing** only to define covered product scope | None normally                                                | Legal clauses are not product statuses                |
| Data Deletion                   | **Currently Testing**                                      | Future account process only on a separately approved surface | No-account clarification precedes steps               |
| Release Notes, if activated     | Entry-specific, initially **Currently Testing**            | Later approved statuses per entry                            | Every entry carries status and date                   |
| Customer App, if ever activated | **Future Vision** until stronger evidence                  | Stronger category only after redecision                      | Page excluded from initial navigation                 |

## Context-specific rules

### Page introductions

- Put the status label before or immediately after the first plain-language
  description.
- Add one concise explanation of what the status means for access.
- State material platform, audience, or release limitations in the same
  introductory region.
- Do not lead with benefits and reveal status after the first viewport.

### Feature and workflow descriptions

- Map each statement to an approved claim ID.
- Use **Currently Testing** for a current Android testing-candidate workflow.
- Keep limitations beside the description, not in a general legal footer.
- Do not place **Planned** or **Future Vision** items in the same visual list as
  current workflows at launch.
- Never infer **Available Today** from implemented code or an internal release
  candidate.

### Future-product sections

- Begin with the visible **Future Vision** label and explicit
  non-commitment meaning.
- Keep the section after current-state content.
- Use a visually distinct but not more promotional treatment.
- Exclude download, sign-up, pricing, preorder, countdown, or delivery-date
  actions.
- Do not include the Customer App in primary navigation merely because a
  Future Vision section exists.

### Roadmap sections

- A roadmap section requires an approved visitor need and approved roadmap
  claims; it is not part of the initial launch architecture.
- Label each item **Planned** or **Future Vision** individually.
- Do not group the two categories under “Coming soon.”
- Exclude dates, quarters, or sequencing unless separately approved and
  revalidated.
- State that plans can change where necessary for accurate interpretation.

### Frequently asked questions

- Repeat the relevant status within every capability or availability answer.
- Do not rely on a page-level badge for a mixed set of questions.
- Put the direct status answer first: for example, the controlled label and
  current limitation before explanation.
- Keep account, customer app, cloud, pricing, AI, and availability answers tied
  to approved claims or omit them.
- Do not mark an answer up as structured data until its content and search
  eligibility are reviewed.

### Release notes

- Put status, public release date, and affected release/channel at each entry.
- Describe user-visible change and current limitation.
- An internal build or note is not a public release-note event.
- Never expose internal architecture, ticket IDs, build secrets, private
  workflows, security-sensitive details, or speculative future work.
- A later status change does not silently rewrite history; correct or annotate
  the dated entry and link to the current state.

### Calls to action

The action wording must describe what will happen now.

Safe architectural examples before participation approval:

- “Read the testing status”
- “See how it works”
- “Find support”
- “Read the privacy information”

Prohibited until their workflows are approved:

- Download
- Get started
- Join now
- Start free
- Buy
- Create an account
- Join testing
- Get early access
- Request a demo
- Subscribe

A CTA cannot use **Planned** or **Future Vision** styling while behaving like a
current sign-up or purchase action. Disabled buttons are not substitutes for
honest unavailable content.

### Download or testing invitations

An invitation requires:

- an approved destination and eligibility rule;
- proof that the testing track or download is actually available to the
  intended audience;
- an owner and support path;
- current platform/version requirements;
- privacy and store-review alignment;
- exact **Currently Testing** label and limitation; and
- a revalidation date or release trigger.

Until all are present, expose no invitation, QR code, store badge, email
collection, waitlist, or pseudo-link.

### Screenshots and media

- Put a visible status and release context in the caption when media depicts a
  testing, planned, or future experience.
- Status does not belong only in image alt text; alt text describes the
  meaningful visual content.
- Do not mix current screenshots and future mockups without separate labels and
  obvious grouping.
- A device frame, polished mockup, or animation must not make Future Vision
  content look usable.
- Use only approved public imagery and revalidate it when the interface
  changes.

### Metadata descriptions

- If a title or description could imply public access, include the limited
  testing state in plain language.
- Do not include Planned or Future Vision capabilities in the initial title,
  description, keywords, application name, or other discovery metadata.
- Do not use “available,” “official,” “download,” “AI-powered,” or similar
  wording without an approved bounded claim.
- Metadata claim occurrences are separately governed; approval for body copy
  does not automatically approve a search snippet.

### Open Graph and social previews

- The title, description, image text, and pictured interface must represent the
  same approved current status.
- A social card cannot omit **Currently Testing** when its product statement
  would otherwise imply availability.
- Do not use Future Vision imagery as the default product preview.
- Social-image status must be real text in the accessible page context as well;
  an image is not the only disclosure.
- Revalidate cached social content when a status changes.

### Structured data

- Structured data must never describe a broader product, offer, platform,
  operating system, availability, rating, price, or feature set than the
  approved visible content.
- Do not mark the testing candidate as generally available.
- Do not publish `Offer`, aggregate rating, review, job, event, FAQ, or software
  availability fields without their specific evidence and eligibility review.
- Future Vision content is normally excluded.
- Structured-data status and claims require their own matrix occurrence and
  production validation.

### Internal links

- Link wording must not upgrade status: avoid “Use,” “Download,” or “Try” when
  the destination only explains a test.
- A deeper status explanation supplements the adjacent label; it does not
  replace it.
- Future content stays out of primary, utility, and footer navigation until a
  separate activation decision.
- Reserved routes remain unlinked and 404.

## Current, planned, and future separation

Use this content order whenever more than one category is approved on a page:

1. page purpose and dominant current status;
2. current product facts and limitations;
3. current support or trust actions;
4. a clear visual and semantic break;
5. approved **Planned** content;
6. another clear break if necessary;
7. approved **Future Vision** content with non-commitment language.

Never alternate current and future cards in one grid, put a future item first,
or make a future section larger, more colorful, more interactive, or more
actionable than current content.

## Accessibility requirements

- Render the visible label as text in the reading order.
- Associate the label and explanation with the section or item they qualify.
- Keep the approved assistive prefix, such as “Product status,” where it adds
  context without redundant verbosity.
- Preserve sufficient text and non-text contrast after brand approval.
- Ensure status remains understandable at 200–400% zoom, with custom colors,
  and when CSS images or animation do not load.
- Do not hide essential status inside a tooltip, popover, hover state,
  expandable footnote, icon, or `aria-label` alone.
- Keep wording consistent enough for screen-reader and cognitive predictability.

## Review checklist

Before approving a claim-bearing page or asset:

1. Is there an approved claim ID for this exact occurrence and audience?
2. Is the status category current and explicitly approved?
3. Is status visible before the content can imply availability?
4. Are limitations adjacent and equally legible?
5. Does any visual, action, metadata, social card, or structured data contradict
   the label?
6. Is future content separated and subordinate?
7. Does the experience still make sense without color, imagery, hover, or
   JavaScript?
8. Has the source release or roadmap changed since approval?

Any “no” keeps the occurrence unpublished.
