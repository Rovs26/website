# WEB-2 Navigation Model

Status: **Approved WEB-2 documentation model — no navigation implementation**

Reviewed: 2026-07-25

This document defines the approved architectural relationship between primary, secondary,
utility, mobile, footer, support, legal, and future navigation. It does not
implement or approve a final header, mobile menu, footer, visual style, route,
or call to action.

The model supports the
[`recommended-information-architecture.md`](recommended-information-architecture.md)
and inherits the accessibility, performance, claims, terminology, and
product-status constraints established by WEB-0 and WEB-1.

## Navigation objectives

The navigation should help a visitor answer:

- What is KitaMo?
- Is it generally available?
- Is it relevant to me?
- How does the current product work?
- Can I trust the information?
- Where can I obtain help?
- Where are privacy, terms, and deletion details?

It should remain shallow, predictable, and useful on budget Android devices,
small screens, limited mobile data, and inconsistent connectivity.

## Governing rules

1. Use approximately four to six primary destinations.
2. Keep the product's **Currently Testing** state visible without requiring a
   visitor to open a menu.
3. Use no mega-menu, nested mobile navigation, hover-only interaction, or icon-
   only label.
4. Keep Support in primary navigation.
5. Keep Privacy and deletion information persistently discoverable.
6. Do not expose reserved, deferred, dormant, or rejected pages.
7. Do not offer Join, Download, Contact, Register, or Get Started until a real,
   approved workflow exists.
8. Use semantic links and native navigation before adding browser state.
9. Preserve normal document order and no-JavaScript access.
10. Treat all proposed labels as terminology decisions awaiting approval.

## Desktop model

### Header structure

The conceptual reading and focus order is:

1. Skip link;
2. site identity link to Home;
3. visible **Currently Testing** context or Testing Status link;
4. primary navigation;
5. utility navigation; and
6. main content.

This order is not a visual-layout requirement. Responsive styling may place
elements differently, but DOM and focus order must remain logical.

### Proposed primary navigation

| Order | Proposed label | Destination     | Visitor question                       |
| ----- | -------------- | --------------- | -------------------------------------- |
| 1     | For Sellers    | `/for-sellers`  | Is this relevant to me?                |
| 2     | How It Works   | `/how-it-works` | What does the current test do?         |
| 3     | About          | `/about`        | What is KitaMo's purpose and maturity? |
| 4     | Support        | `/support`      | Where can I get help?                  |

The KitaMo site identity links to `/` and serves as the Home link. If research
shows that visitors do not recognize it as Home, add an explicit Home link
rather than relying on convention.

Features is intentionally absent because its content is merged into How It
Works. Customer App, Pricing, Blog, Careers, and Status are not launch
destinations.

### Proposed utility navigation

| Proposed label | Destination        | Rule                                                                                    |
| -------------- | ------------------ | --------------------------------------------------------------------------------------- |
| Testing Status | `/#testing-status` | The exact **Currently Testing** status is visible; this is product maturity, not uptime |
| Privacy        | `/privacy`         | Remains easy to find without displacing the primary seller journey                      |

Utility navigation is not a conversion bar. It must not contain:

- a testing invitation before eligibility and workflow approval;
- a download link before an approved app destination;
- an invented support or contact address;
- an account link while no current account exists;
- pricing; or
- future-product promotion.

### Secondary navigation

Do not add a persistent second header row. Use contextual links at the end of a
relevant section or page:

| Current page         | Contextual destinations                                                 |
| -------------------- | ----------------------------------------------------------------------- |
| Home                 | For Sellers, How It Works, About, Testing Status, Support, Privacy      |
| For Sellers          | How It Works, Testing Status                                            |
| How It Works         | For Sellers, Testing Status, Support                                    |
| About                | Testing Status, approved partner-inquiry scope within Support           |
| Support              | Common questions, Privacy, deletion information, governed Release Notes |
| Privacy              | Terms, deletion information, Support                                    |
| Terms                | Privacy, Support                                                        |
| Deletion information | Privacy, Support                                                        |

Use descriptive link text that explains the destination. Avoid generic “Learn
more,” “Click here,” repeated keyword links, or cards whose clickable area
obscures the link's accessible name.

## Testing and participation actions

### Current safe position

No public testing participation action is approved. Navigation may link to
Testing Status, which explains the limited state and the absence of a general
availability commitment.

Do not show:

- Join Testing;
- Become a Tester;
- Download;
- Install;
- Join Waitlist;
- Early Access;
- Get Started; or
- Launching Soon.

### Activation gate

A testing or download action may enter utility navigation only after all of
these are recorded:

- eligible audience;
- current product status and exact approved wording;
- real destination;
- workflow owner;
- capacity and access limitations;
- privacy and data-minimization review;
- accessibility of the destination;
- support and failure behavior;
- expiry or closure behavior; and
- revalidation trigger.

The action label must describe the actual outcome. An invitation request,
closed tester link, and public download are different actions and must not be
treated as synonyms.

## Mobile model

### Recommended disclosure

Use a single-level, in-flow disclosure rather than a modal drawer. A native
`details` element with a `summary` labeled Menu is the preferred baseline
because it provides keyboard operation and a no-JavaScript path.

Conceptual order:

```text
Site identity → Home
Currently Testing / Testing Status
Menu
  Primary
    For Sellers
    How It Works
    About
    Support
  Utility
    Testing Status
    Privacy
Footer
  Explore
  Help
  Trust and legal
```

The visible status treatment may link to the same Testing Status anchor that
appears within the menu. Repetition is acceptable because status is a critical
context, but labels and destinations must remain consistent.

### Mobile behavior

- The menu is closed by default when the page loads.
- Activating the summary opens or closes the in-flow list.
- Focus remains on the summary after toggling.
- When open, links follow the summary in normal tab order.
- Navigation to a new route resets the disclosure with the new document.
- No modal overlay, background inerting, focus trap, body-scroll lock, or
  portal is needed.
- Link groups use visible headings or accessible labels.
- Support appears in the primary group rather than below future content.
- Every link has a touch target of at least 44 by 44 CSS pixels unless a
  documented WCAG text-link exception applies.
- Content remains usable at 200% zoom and with large text.
- Opening and closing does not depend on animation; reduced-motion preferences
  are respected.

If later browser or assistive-technology testing finds the native disclosure
insufficient, a small Client Component may be proposed. That proposal must
preserve server-rendered links and meet the custom-control requirements below.

### Requirements for any future custom disclosure

- Use a semantic button with a visible label.
- Expose `aria-expanded` and `aria-controls`.
- Keep the controlled navigation in the DOM.
- Opening may keep focus on the button; do not move focus without a tested
  reason.
- Escape closes the menu and returns focus to the trigger.
- Closing on link activation must not interrupt navigation.
- An outside-pointer action may close the menu but cannot be the only close
  method.
- Do not use menu/menuitem ARIA roles for ordinary site navigation.
- Do not trap focus unless a separately justified modal dialog is used.
- Restore a usable expanded or no-JavaScript state when scripts fail.

## No-JavaScript behavior

- Site identity, status, primary links, and utility links are server-rendered.
- A native details/summary disclosure remains operable without JavaScript.
- Footer and contextual links remain in ordinary document flow.
- No destination depends on client-side state, hover, local storage, or a
  script-generated URL.
- If custom enhancement fails, links remain visible through an explicit
  progressive-enhancement fallback.
- Navigation must use normal links so browser history, opening in a new tab,
  copying a link, and assistive-technology commands work.

## Footer model

### Proposed initial groups

| Group heading   | Proposed links                           | Notes                                                    |
| --------------- | ---------------------------------------- | -------------------------------------------------------- |
| Explore         | For Sellers, How It Works, About         | Product understanding only                               |
| Help            | Support, Common questions, Data deletion | Common questions may link to `/support#common-questions` |
| Trust and legal | Testing Status, Privacy, Terms           | Testing Status is maturity, not uptime                   |

The footer may also include the KitaMo site identity as a Home link. It must
not include an unapproved legal entity, support email, phone number, address,
domain claim, tagline, partner mark, certification, or social account.

### Conditional footer expansion

Release Notes may be added under Help only after:

- a Release Manager is assigned;
- the page contains at least one approved public-safe entry;
- every entry has a date, applicable build scope, **Currently Testing** status,
  limitations, and update trigger;
- internal and security-sensitive detail is excluded; and
- the page is included in stale-content review.

Do not add Customer App, Pricing, Blog, Careers, or Status until their separate
architecture and ownership gates pass.

## Legal and privacy navigation

- Privacy appears in utility and footer navigation.
- Terms appears in the footer and as a contextual link from Privacy.
- Data deletion appears in the footer and as a contextual link from Privacy
  and Support.
- Support is reachable from every legal or deletion page.
- Legal pages do not sit behind consent banners, modals, or marketing forms.
- The deletion link's visible label should emphasize data deletion so it does
  not imply that a current KitaMo account exists.
- If a future account system becomes real, the deletion label, workflow,
  status, and privacy scope require a new review.

## Support navigation

- Support is a primary navigation destination on desktop and mobile.
- Common questions are a section of Support, not a separate launch route.
- Contact is a governed Support section, not a separate launch page.
- Support links to Privacy and deletion information where a task involves
  personal or business data.
- A public contact is shown only after the Support Owner confirms that it is
  monitored and approves scope and response expectations.
- Do not add a form or chat widget without a new data-collection decision.

## Product-status navigation

- Use the label Testing Status for the destination and the exact controlled
  label **Currently Testing** for the current state.
- Do not shorten the controlled state to Beta, Pilot, Early Access, Coming
  Soon, or Available Soon.
- Status must use visible text, not color or an icon alone.
- The Testing Status link points to a homepage section rather than `/status`.
- A status change requires claims-register approval, navigation review,
  metadata review, and revalidation across all claim-bearing pages.
- **Planned** and **Future Vision** do not become navigation categories.

## Active-state rules

- Only one primary link may receive `aria-current="page"`.
- Home is active only for the exact `/` route; a query string or fragment does
  not create another page.
- For Sellers, How It Works, About, and Support are active on their exact
  canonical routes.
- If Release Notes later gains dated child routes, its parent footer link may
  receive the active visual treatment while only the exact child link receives
  `aria-current="page"`.
- Same-page Testing Status links may use `aria-current="location"` only when
  the current fragment is reliably known; omit it rather than maintaining
  fragile client state.
- Active treatment uses at least two cues, such as weight plus underline,
  border, or shape. It never relies on color alone.
- Focus and active states remain visually distinct.
- Reserved and nonexistent routes never appear disabled in navigation; they
  are absent.

## Focus-management expectations

- The existing skip link remains the first focusable item and targets the
  single main landmark.
- Every navigation link and disclosure control has a visible focus indicator.
- Focus order follows DOM and reading order at all viewport sizes.
- Opening the recommended native disclosure does not move focus.
- Closing it leaves focus on the summary.
- Normal route navigation uses the browser and framework's page-navigation
  behavior; do not force focus to the top without tested need.
- Page titles and H1s make the new destination clear. The skip link gives a
  predictable path to content.
- Same-page status links target a descriptive heading or section, not an empty
  visual spacer.
- Sticky headers must not obscure a focused link or fragment target.
- No interaction requires a pointer, hover, drag, swipe, or precise gesture.

## Landmark and naming expectations

- Use one banner landmark for the site header.
- Place primary navigation in a `nav` with a clear accessible name such as
  Primary.
- Give utility and footer navigation distinct accessible names.
- Use one main landmark per page.
- Do not repeat identical accessible navigation names for different link sets.
- Site identity has an accessible Home purpose without relying on the image's
  filename.
- Link text remains understandable out of context.
- Heading levels remain logical within footer groups and page sections.

## Future expansion

The primary navigation may grow to at most six destinations when a new page:

1. serves a distinct, validated high-priority visitor task;
2. has enough approved content;
3. has a role owner and review trigger;
4. does not duplicate an existing page;
5. has an approved lifecycle and indexing decision; and
6. passes mobile and accessibility review.

Expansion rules:

- Do not add a mega-menu.
- Prefer contextual or footer navigation for lower-priority pages.
- Keep one mobile disclosure level.
- A future Customer App must not appear until its public status and page
  contract are approved.
- Pricing must not appear until an approved commercial model exists.
- Blog, Careers, Release Notes, and service Status require real operational
  owners.
- Localization requires a separate URL, language-switching, hreflang,
  translation-review, and status-consistency decision.
- If primary navigation exceeds six legitimate items, revisit the full IA
  rather than hiding overflow behind an ambiguous More menu.

## Verification requirements for later implementation

When an approved milestone implements navigation, verify:

- keyboard operation in both directions;
- visible focus and active states;
- native or custom disclosure semantics;
- 200% zoom and large text;
- 320 CSS-pixel layout without horizontal page scrolling;
- screen-reader landmark and link-list output;
- reduced motion;
- no-JavaScript access;
- skip-link behavior;
- fragment-target visibility under any sticky header;
- route and active-state accuracy;
- no reserved or dormant route leakage; and
- no unapproved contact, participation, or future-product action.

WEB-2 performs none of this implementation. The navigation remains at the
approval gate.
