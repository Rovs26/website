# WEB-2 URL and Routing Strategy

Status: **Approved WEB-2 architecture strategy**

Reviewed: 2026-07-25

This strategy governs future public routes and content lifecycle. WEB-2 does
not create routes, redirects, canonical metadata, a sitemap, localization
infrastructure, or a production host.

## URL principles

1. A route exists because it serves a durable visitor task, not because it
   appeared in a conceptual sitemap.
2. Public routes use lowercase ASCII words separated by single hyphens.
3. Use short nouns for stable resources and clear phrases for tasks.
4. Keep initial public pages one segment deep.
5. Do not encode product status, campaign language, dates, version numbers, or
   implementation details in stable top-level routes.
6. A reserved route is documentation only. It returns the normal 404 response
   until activation and is absent from navigation, sitemaps, metadata, and
   internal links.
7. Route permanence follows visitor meaning. A title may evolve without
   changing a route when the visitor task remains the same.

Examples:

- preferred: `/for-sellers`, `/how-it-works`, `/delete-account`;
- avoid: `/ForSellers`, `/how_it_works`, `/currently-testing-features`,
  `/v1-support`, or an internal workstream name.

## Canonical route set

Proposed initial public routes after their later milestone and content gates:

```text
/
/about
/for-sellers
/how-it-works
/support
/privacy
/terms
/delete-account
```

The canonical host is unresolved. Documentation uses
`[approved-public-origin]` as a non-deployable placeholder. Do not publish that
placeholder or infer a host from the internal Admin domain.

Canonical URL metadata must not be added until:

- the public origin is approved;
- production/preview separation is defined;
- all canonical targets return their intended public content; and
- redirect and duplicate-host behavior is verified in WEB-8.

## Route dispositions

| Route               | WEB-2 disposition                                                 | Current HTTP expectation                   |
| ------------------- | ----------------------------------------------------------------- | ------------------------------------------ |
| `/`                 | Temporary foundation remains; future Home implementation in WEB-3 | Temporary page, globally no-indexed        |
| `/about`            | Planned WEB-4                                                     | 404 until implemented and approved         |
| `/for-sellers`      | Planned WEB-4                                                     | 404 until implemented and approved         |
| `/how-it-works`     | Planned WEB-4                                                     | 404 until implemented and approved         |
| `/support`          | Planned WEB-5; blocked by owner/contact/workflow                  | 404 until complete and approved            |
| `/privacy`          | Planned WEB-5; blocked by identity/policy/contact                 | 404 until complete and approved            |
| `/terms`            | Planned WEB-5; blocked by legal identity/review                   | 404 until complete and approved            |
| `/delete-account`   | Planned WEB-5; blocked by reviewed scope/instructions/support     | 404 until complete and approved            |
| `/features`         | Merged into `/how-it-works`                                       | 404; no speculative redirect               |
| `/why-kitamo`       | Merged into `/for-sellers` and `/about`                           | 404; no speculative redirect               |
| `/community-impact` | Merged into `/about`                                              | 404; no speculative redirect               |
| `/faq`              | Merged into `/support` and contextual answers                     | 404; no speculative redirect               |
| `/contact`          | Merged into `/support`                                            | 404; no speculative redirect               |
| `/customer-app`     | Reserved                                                          | 404, unlinked, absent from sitemap         |
| `/pricing`          | Reserved                                                          | 404, unlinked, absent from sitemap         |
| `/release-notes`    | Reserved                                                          | 404 until activation gate                  |
| `/blog`             | Deferred                                                          | 404, unlinked, absent from sitemap         |
| `/careers`          | Rejected for now                                                  | 404                                        |
| `/status`           | Rejected for now                                                  | 404                                        |
| `/design-system`    | Internal development review only                                  | 404 in production and disallowed in robots |

A 404 for an unimplemented route is more honest than a polished “coming soon”
page.

## Trailing-slash policy

Use the framework default of no trailing slash for canonical public URLs:

- canonical: `/for-sellers`;
- non-canonical form: `/for-sellers/`.

Do not add a custom trailing-slash configuration during WEB-2. In WEB-8,
verify that the deployment platform consistently normalizes the alternate
form without redirect loops or duplicate indexing.

## Redirect principles

- Do not implement a redirect before a source URL has been publicly used or a
  documented external dependency requires it.
- A redirect must preserve visitor intent and land on the closest equivalent
  content, not automatically on Home.
- Use permanent redirects for genuine, durable page renames after content
  ownership and analytics-independent evidence confirm the mapping.
- Use temporary redirects only for a documented short-lived operational need.
- Avoid redirect chains; every source should resolve directly to the current
  target.
- Never redirect a reserved future route to a current page merely to capture
  traffic.
- Never use a redirect to conceal missing legal, support, or deletion content.
- Record source, target, rationale, activation date, owner, and retirement
  condition in a later redirect register.

WEB-2 defines possible merges but implements no speculative redirects because
none of the merged routes has been a public website route.

## Handling renamed pages

When a published page name changes:

1. determine whether the visitor task and content remain equivalent;
2. retain the route when only the display title changes;
3. create a new route only when the task meaning materially changes;
4. add a direct redirect from the former public route after approval;
5. update navigation, internal links, sitemap, canonical references, social
   metadata, and external store references in one release;
6. retain the redirect for as long as material external references exist; and
7. test keyboard, assistive-technology, cache, and crawler behavior.

Do not reuse a retired route for an unrelated product.

## Reserved, dormant, and rejected routes

### Reserved

`/customer-app`, `/pricing`, and `/release-notes` are namespaces, not current
pages. Reservation does not create a file, response, placeholder, redirect,
navigation link, metadata record, sitemap entry, or claim.

Activation requires:

- an approved visitor need and lifecycle decision;
- an assigned role owner;
- sufficient approved claims and terminology;
- a correct product-status hierarchy;
- substantive content;
- indexing and internal-link plans; and
- later milestone authorization.

### Dormant

A dormant section is a previously activated section that is later withdrawn.
If an activated Release Notes section later becomes unsustainable, preserve
historically useful approved entries where truthful, mark their scope/date
clearly, remove it from primary navigation if appropriate, and record an
archive or retirement decision. Release Notes is currently **Reserved**, not
dormant.

### Rejected

`/careers` and `/status` have no current page contract that justifies
implementation. A future owner must reopen the IA decision rather than creating
the route opportunistically.

## Release-note URL strategy

If Release Notes passes its activation gate:

```text
/release-notes
/release-notes/YYYY-MM-DD-short-slug
```

Rules:

- use the public release date in ISO order;
- use a short human-readable slug describing the user-visible change, not an
  internal ticket, build ID, vulnerability, or branch;
- do not place a private channel, tester identity, or implementation detail in
  the URL;
- do not rely on a mutable “latest” URL as the only permanent reference;
- keep corrected entries at the same URL with a visible correction note;
- retain a withdrawn entry only when transparency benefits visitors and its
  content remains safe; otherwise use an approved retirement response; and
- treat each detail page as a dated, status-labelled public record.

Internal release notes are not automatically eligible for these URLs.

## Future editorial URL strategy

No blog is approved. If an editorial program is later activated, prefer:

```text
/blog
/blog/YYYY/MM/short-slug
```

The exact date-depth decision must be reconsidered with the publishing system,
archive needs, volume, owner, and migration cost. Do not use tags, categories,
author archives, feeds, pagination, or structured data before real content
requires them. Avoid changing a published article URL when its title changes.

## Query-string policy

The initial public pages require no query strings.

Future query strings may represent non-authoritative view state such as an
approved filter or pagination cursor, but they must not:

- change a product claim or status;
- unlock future/hidden content;
- carry personal, sensitive, credential, or private operational data;
- define canonical page identity;
- be required to reach legal, support, privacy, or deletion information;
- create indexable duplicate combinations; or
- act as a substitute for a stable content route.

Campaign and analytics parameters remain prohibited while the zero-tracking
baseline applies. Strip or ignore unknown parameters without changing page
meaning, subject to later framework/security review.

## Archived and retired content

Choose an explicit response based on visitor value:

| Situation                                      | Treatment                                                                      |
| ---------------------------------------------- | ------------------------------------------------------------------------------ |
| Superseded but still useful dated release note | Keep at the stable URL with date, status, scope, and link to newer information |
| Materially corrected page                      | Correct in place and show an updated date where helpful                        |
| Merged public page with a clear successor      | Permanent direct redirect                                                      |
| Content withdrawn for safety or legal reason   | Remove; use 404 or 410 according to reviewed permanence and disclosure needs   |
| Expired operational announcement               | Remove from navigation; retain only if a dated archive still helps visitors    |
| Empty or never-published concept               | Normal 404; do not create an archive                                           |

Do not leave stale product claims online solely for search traffic.

## Localization considerations

Localization is deferred. WEB-2 establishes these constraints:

- keep current canonical routes language-neutral where practical;
- do not select `/en`, `/fil`, another prefix, subdomain, or domain model until
  language scope and ownership are approved;
- do not use a query parameter as the long-term language architecture;
- never auto-translate claims, status labels, legal content, support
  instructions, or Filipino terms without review;
- if localized routes are introduced, each language version requires its own
  claim/terminology approval, canonical and alternate relationship, page title,
  language declaration, and stale-content owner;
- fall back predictably without redirecting solely from guessed location or
  browser language; and
- preserve stable resource identity and redirects if the language model later
  changes.

No `hreflang`, language switcher, translated slug, or localization dependency
is added in WEB-2.

## 404 expectations

The not-found response must:

- use a meaningful page title and one H1;
- explain plainly that the page is unavailable without implying a future
  launch;
- offer Home and Support only when those destinations are real;
- preserve normal landmarks, skip navigation, keyboard access, and no
  horizontal overflow;
- avoid revealing whether a private/internal route exists; and
- return an actual 404 status, not a soft-404 success response.

Reserved and rejected routes use the same normal 404 treatment. Do not create a
different response that leaks roadmap status.

## Indexing and non-public routes

- The current temporary foundation remains globally `noindex`, `nofollow`, and
  `nocache`.
- Remove global no-indexing only in a later approved release when every exposed
  route has final content and metadata.
- Development, preview, internal review, reserved, dormant, rejected, and
  incomplete legal/support routes are not indexable.
- A robots disallow is not an access control or sufficient removal mechanism.
  Internal review routes must remain unavailable in production.
- Do not include a URL in a sitemap until it returns approved, canonical public
  content.
- Do not add planned/future content to Open Graph, structured data, or search
  descriptions where it could imply availability.

## Revalidation

Revisit this strategy when the public host, localization model, editorial
program, release-note process, customer product, commercial model, or another
durable route family is approved. All production redirect and canonical
behavior must be verified again in WEB-8.
