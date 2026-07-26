# WEB-2 Visitor Journeys

Status: **Architecture hypotheses requiring validation**

Reviewed: 2026-07-25

These journeys test the proposed page relationships against realistic visitor
questions. They are not evidence of interviews, analytics, usability research,
formal support demand, or approved workflows. Route names refer to the
contracts in `page-inventory.md`; none of the routes is implemented by WEB-2.

## Journey principles

- Surface **Currently Testing** before a visitor can infer general
  availability.
- Keep every launch journey at one route level and normally within three
  content choices.
- Provide support, privacy, and deletion routes directly rather than forcing a
  visitor through promotional content.
- Never make a future page the required bridge to a current task.
- Use descriptive text links, normal browser history, consistent landmarks,
  and a visible home path.
- Do not offer an action unless its destination, owner, behavior, privacy
  treatment, and availability are approved.

## JNY-001 — Seller discovering KitaMo

| Field                           | Journey                                                                                                                                                                                |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Entry page                      | `/`, or `/for-sellers` from an external result                                                                                                                                         |
| Expected path                   | `/` → visible testing-status explanation → `/for-sellers` → `/how-it-works` → approved testing/participation information if it later exists                                            |
| Key questions                   | What is KitaMo? Is it for a business like mine? Is it available? What can the current Android testing candidate do? What is a safe next step?                                          |
| Trust risks                     | Hero or title implies public access; seller examples overgeneralize; future capabilities appear current; “offline” becomes an absolute guarantee; CTA implies an open test or download |
| Potential abandonment points    | Status is hidden; the product is described in abstract technical language; relevance requires reading a long feature list; no honest next step exists                                  |
| Required links                  | Home to For Sellers and How It Works; both pages back to testing status; persistent Support and Privacy discovery                                                                      |
| Mobile considerations           | Status appears before long copy; labels remain short; one-handed menu exposes the four primary destinations in one layer; no carousel or wide comparison table                         |
| Accessibility considerations    | One H1, descriptive links, status as visible text, audience examples not image-dependent, and no information revealed only on hover                                                    |
| Relevant status                 | **Currently Testing** dominates every current-product step                                                                                                                             |
| Unsupported actions not offered | Download now, start free, join a waitlist, request a demo, buy, create an account, or join testing before a real approved workflow exists                                              |

Success is understanding, not conversion. If no participation action is
approved, the honest endpoint is a clear testing-status explanation and
support path rather than a non-functional lead form.

## JNY-002 — Existing or invited tester seeking help

| Field                           | Journey                                                                                                                                                                                                           |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Entry page                      | `/support`, or the global Support navigation item                                                                                                                                                                 |
| Expected path                   | `/support` → product/version scope and common questions → approved support channel → `/privacy` or `/delete-account` where relevant → `/release-notes` only after that section is activated                       |
| Key questions                   | Does this help apply to the build I am testing? Can I solve the problem safely? What information should I share? Where can I escalate it?                                                                         |
| Trust risks                     | An unmonitored contact is published; internal problem-report behavior is presented as remote support; response time is promised; troubleshooting risks local data; internal release notes expose sensitive detail |
| Potential abandonment points    | Support is hidden in the footer; no product scope is stated; a generic form demands personal information; common questions are stale; escalation leads to a placeholder                                           |
| Required links                  | Support to Privacy and Data Deletion; Support to testing status; contextual links back from legal pages; Release Notes only after owner/cadence approval                                                          |
| Mobile considerations           | Put urgent task choices first, keep steps short, make contact values selectable, avoid complex decision trees, and preserve help content under weak connectivity                                                  |
| Accessibility considerations    | Task-based headings, ordered steps only when sequence matters, clear warnings before destructive actions, accessible contact labels, keyboard/no-JS access, and no icon-only severity                             |
| Relevant status                 | **Currently Testing** defines the supported product scope; each future or unavailable item is separately labelled                                                                                                 |
| Unsupported actions not offered | Live chat, remote account recovery, guaranteed reply time, remote device access, public incident dashboard, or server upload of diagnostics                                                                       |

The journey remains blocked from publication until a Support Owner, monitored
channel, scope, escalation process, and privacy-safe information-request policy
are approved.

## JNY-003 — Person seeking account or data deletion

| Field                           | Journey                                                                                                                                                                                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Entry page                      | `/delete-account`, commonly from a store listing, search result, Privacy page, or Support                                                                                                                                                         |
| Expected path                   | `/delete-account` → immediate no-current-account clarification → evidence-checked local-data removal options and exact prerequisites → consequence/limitation explanation → `/privacy` → approved `/support` escalation                           |
| Key questions                   | Does a KitaMo account currently exist? What data is local? Which action removes it? Is the action reversible? Who can help if the instructions do not fit?                                                                                        |
| Trust risks                     | Route name implies an account exists; local reset is misrepresented as server/account deletion; its local Owner-PIN prerequisite is omitted; uninstall is described as universal erasure; remote identity verification or retention is invented   |
| Potential abandonment points    | Correction is buried; steps do not identify the applicable Android version; destructive consequences appear after the action; no support fallback exists                                                                                          |
| Required links                  | Privacy ↔ Data Deletion ↔ Support; testing-status context where the product scope could be misunderstood                                                                                                                                          |
| Mobile considerations           | Put the correction and consequence above the steps; avoid side-by-side options; keep warnings and action names together; make the page printable or saveable without an app session                                                               |
| Accessibility considerations    | Plain language, explicit irreversible-action warnings, semantic ordered lists, no reliance on red color, descriptive cross-links, and no timeout or authentication barrier                                                                        |
| Relevant status                 | **Currently Testing** is page-level and dominant; any future account-backed deletion process must be documented separately                                                                                                                        |
| Unsupported actions not offered | Website deletion form, remote account deletion, remote/account identity-verification promise, server-data purge, retention guarantee, or future Customer App deletion; the real local Owner-PIN gate must not be described as remote verification |

WEB-2 does not design a deletion workflow. It records a discoverable page
contract and the boundary between current local-data guidance and any future
account process.

## JNY-004 — Privacy-conscious visitor

| Field                           | Journey                                                                                                                                                                                                            |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Entry page                      | `/privacy`, or Privacy in utility/footer navigation                                                                                                                                                                |
| Expected path                   | `/privacy` → select the applicable website or Android-app scope → review data-handling explanation → `/delete-account` → `/support`                                                                                |
| Key questions                   | Which surface does this policy describe? What is handled and why? Does the current Android candidate use accounts, cloud, or tracking? How can I remove data or ask a question?                                    |
| Trust risks                     | Draft policy is published as legal approval; website zero-collection baseline is confused with all hosting processing; absolute “private” or “secure” claim; missing owner/contact; Android behavior becomes stale |
| Potential abandonment points    | Legal identity is absent; app and website scope are mixed; key choices appear only in dense legal text; deletion path is hard to find; no updated date exists                                                      |
| Required links                  | Privacy to Data Deletion, Support, Terms, and bounded product context; reciprocal footer and page links                                                                                                            |
| Mobile considerations           | Use a short scope summary before detailed sections; allow reflow without horizontal tables; keep contact and rights paths visible; avoid modal policy viewers                                                      |
| Accessibility considerations    | Logical headings, plain-language orientation, full policy remains available, meaningful link text, printable content, language declaration, and no policy acceptance dark pattern                                  |
| Relevant status                 | **Currently Testing** appears beside release-dependent Android statements; legal/privacy obligations themselves are not roadmap statuses                                                                           |
| Unsupported actions not offered | Cookie settings when no cookies exist, account dashboard, automated privacy request, universal “no data processing” claim, or unapproved privacy contact                                                           |

This journey cannot publish until the Privacy Owner, identity, contacts, policy
scope, data inventory, and review are approved.

## JNY-005 — Partner, LGU, nonprofit, journalist, or researcher evaluation

| Field                           | Journey                                                                                                                                                                                                                |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Entry page                      | `/about`, or `/`                                                                                                                                                                                                       |
| Expected path                   | `/about` → current maturity and intended audience → bounded mission/Future Vision section → testing status → approved Support/contact path                                                                             |
| Key questions                   | What purpose is KitaMo pursuing? Who is it intended to serve? What exists now? Is impact measured? Is there an appropriate inquiry path?                                                                               |
| Trust risks                     | Intended impact is presented as measured impact; partner/LGU relationships are implied; the current product is called broadly AI-powered; roadmap direction appears committed; legal organization identity is invented |
| Potential abandonment points    | Mission text has no maturity context; contact path is generic or absent; evidence boundaries are unclear; product detail overwhelms the institutional question                                                         |
| Required links                  | About to testing status, For Sellers, How It Works, Privacy/Terms, and an approved bounded inquiry path                                                                                                                |
| Mobile considerations           | Lead with a concise evidence boundary; avoid wide impact dashboards; separate current facts from direction in a single-column flow                                                                                     |
| Accessibility considerations    | Plain language, definitions for sector terms, no emotional imagery as evidence, tables accompanied by understandable headings, and status not dependent on visual position                                             |
| Relevant status                 | **Currently Testing** for current product; **Future Vision** only for explicitly directional community purpose                                                                                                         |
| Unsupported actions not offered | Partnership application, procurement claim, press kit, media contact, sponsorship, grant outcome, measured impact, or endorsement without owners and evidence                                                          |

The initial architecture serves this audience through About rather than a
standalone Community Impact page.

## JNY-006 — App-store or trust reviewer

| Field                           | Journey                                                                                                                                                                           |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Entry page                      | `/privacy`, `/delete-account`, or `/support` from review material                                                                                                                 |
| Expected path                   | Direct trust page → confirm official scope and testing maturity → cross-check Privacy, Data Deletion, Support, and Terms → return to product overview                             |
| Key questions                   | Are required trust pages public and internally consistent? Is the support channel real? Does deletion guidance match current product behavior? Is public availability overstated? |
| Trust risks                     | Placeholder identity, conflicting dates, obsolete release information, broken reciprocal links, copied internal notes, or indexable reserved routes                               |
| Potential abandonment points    | Required page is missing, blocked by JavaScript, uses a private host, or contains incomplete placeholder content                                                                  |
| Required links                  | Privacy ↔ Data Deletion ↔ Support ↔ Terms; each page to testing-status context                                                                                                    |
| Mobile considerations           | Direct URLs must work without opening a menu; pages remain lightweight and readable on a small Android device and weak network                                                    |
| Accessibility considerations    | Meaningful page titles, consistent landmarks, complete keyboard use, zoom/reflow, clear effective dates, and accessible contacts                                                  |
| Relevant status                 | **Currently Testing** wherever Android release behavior is described                                                                                                              |
| Unsupported actions not offered | Public download, account sign-in, remote deletion, status dashboard, or unsupported store/legal certification                                                                     |

## Cross-journey abandonment checks

Before later page implementation, test that:

1. a visitor can find the current product status from every claim-bearing entry
   without opening a hidden menu;
2. Support, Privacy, and Data Deletion are reachable directly and reciprocally;
3. every action leads to a real, owned destination;
4. no path requires a reserved or future page;
5. back navigation and the brand-home link provide predictable recovery;
6. a 320–360px viewport does not require horizontal navigation;
7. descriptive link text remains understandable out of context; and
8. a keyboard or screen-reader user encounters the same information order.

Formal journey validation belongs to later usability and accessibility work.
