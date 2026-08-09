# WEB-4 Core Public Pages Acceptance Report

Status: **Implementation complete; no push or deployment performed**

Completed: 2026-08-10

Starting branch: `feat/web-3-homepage`

Starting HEAD: `0a8f74f07bdfd185815ea2c661915d41d7f4d63f`

Resulting branch: `feat/web-4-core-public-pages`

Resulting HEAD: the WEB-4 commit recorded in the final handoff. A commit cannot
embed its own resulting object ID without changing that ID.

Scope: WEB-4 core public pages and shared public navigation only

## Scope completed

- Retained the governed WEB-3 homepage and connected it naturally to all three
  new routes.
- Added `/for-sellers`, `/how-it-works`, and `/about` with page-specific
  metadata, bounded copy objects, visible product maturity, and lightweight
  illustrative record-flow cards that explicitly say they are not screenshots.
- Replaced the minimal shell with a shared site header and footer.
- Used native `details` and `summary` for mobile navigation; no Client Component
  or browser state was added.
- Added page-specific content contracts, claim approvals, governance matrix
  updates, terminology scope, route-level tests, and responsive screenshots.
- Kept the site globally non-indexed, static, dependency-neutral, and free of
  forms, tracking, analytics, backend work, remote assets, or new environment
  variables.

WEB-5A trust/legal routes, launch work, production deployment, and later
milestones were not started.

## Files created

```text
app/about/page.tsx
app/for-sellers/page.tsx
app/how-it-works/page.tsx
components/illustrations/record-flow.tsx
components/layout/site-footer.tsx
components/layout/site-header.tsx
docs/content/web-4/about-content-contract.md
docs/content/web-4/for-sellers-content-contract.md
docs/content/web-4/how-it-works-content-contract.md
docs/reviews/screenshots/web-4/about-390x844.jpg
docs/reviews/screenshots/web-4/about-1440x900.jpg
docs/reviews/screenshots/web-4/for-sellers-390x844.jpg
docs/reviews/screenshots/web-4/for-sellers-1440x900.jpg
docs/reviews/screenshots/web-4/home-390x844.jpg
docs/reviews/screenshots/web-4/home-1440x900.jpg
docs/reviews/screenshots/web-4/how-it-works-390x844.jpg
docs/reviews/screenshots/web-4/how-it-works-1440x900.jpg
docs/reviews/web-4-core-public-pages-acceptance.md
lib/content/about-copy.ts
lib/content/for-sellers-copy.ts
lib/content/how-it-works-copy.ts
lib/content/site-navigation.ts
tests/components/core-public-pages.test.tsx
```

## Files modified

```text
README.md
app/page.tsx
components/layout/page-shell.tsx
docs/content/web-3-homepage-content-contract.md
docs/governance/page-claim-matrix.md
docs/governance/public-claims-register.md
docs/governance/public-terminology.md
tests/components/homepage.test.tsx
```

## Navigation and footer

Desktop header order:

1. KitaMo → `/`
2. For Sellers → `/for-sellers`
3. How It Works → `/how-it-works`
4. About → `/about`
5. Testing Status → `/#testing-status`

The mobile header exposes the same destinations in a native disclosure named
`Menu`. The footer has a bounded brand line and current year, an `Explore`
group for the three core routes, and a `Product` group for Testing Status.
Support, Privacy, Terms, Delete Account, pricing, download, and enrollment links
are intentionally absent.

## Route purposes

- `/` — introduces KitaMo, the intended audience, bounded current test scope,
  device-local boundary, and official testing-status anchor.
- `/for-sellers` — helps a seller compare the intended contexts and current
  focused scope with their own business setting.
- `/how-it-works` — explains the current local setup, sales, inventory, and
  record-review sequence plus explicit current limitations.
- `/about` — explains the practical direction, working principles, current
  testing stage, and a separately labelled noncommittal Future Vision.

## Public claims

Claims reused within page-specific WEB-4 contracts: CLM-001 through CLM-007.

CLM-008 received one new page-specific approval for the negative sentence `No
online KitaMo account` on `/how-it-works`. It does not approve future account
policy, login, deletion, privacy, support, or local-data-removal guidance.

No new claim ID was required. The About `Future Vision` section is broad
direction authorized by the WEB-4 brief; it states that direction may change,
promises no feature, and gives no delivery timing.

Excluded throughout: public availability, download or enrollment, cloud or
backup availability, customer app, ordering, loyalty, AI, OCR, predictive or
automated recommendations, public APIs or Admin, pricing or subscriptions,
adoption, testimonials, metrics, partnerships, endorsements, corporate or legal
identity, guaranteed outcomes, and private architecture.

## Accessibility results

- Every route has one H1, a logical H1 → H2 → H3 hierarchy, a labelled header,
  one main landmark, footer, and working skip-link target.
- Product-status meaning is visible in text and includes assistive `Product
status:` text.
- Major links, CTAs, the brand target, and the mobile summary measure 44px high
  at the 320px viewport.
- The mobile menu has the accessible name `Menu`, native disclosure semantics,
  and the global 3px visible focus outline. Enter, Space, Tab, and Shift+Tab were
  exercised; the browser-control transport did not reliably report native
  disclosure state changes from synthetic key events, so a final physical-key
  smoke test remains appropriate before public launch.
- No horizontal overflow occurred at 320px or any required viewport. The 320px
  reflow also covers the narrower effective width expected at 200% zoom without
  content or function loss.
- Existing measured token contrast remains unchanged: body/page 14.88:1,
  secondary/page 6.19:1, primary action 6.63:1, Currently Testing 8.08:1, and
  Future Vision 8.50:1.
- Existing reduced-motion CSS remains active; WEB-4 adds no animation.
- No formal accessibility certification or conformance claim is made.

## Responsive and visual results

Browser review covered all four routes at 320×568, 360×800, 390×844, 768×1024,
1024×768, and 1440×900: 24 route/viewport combinations. Every combination had
zero document or body overflow, one H1, all three landmarks, complete CTAs, and
the expected maturity labels.

At mobile widths the hero, status, CTA cluster, illustrative cards, body
sections, and footer form a readable single-column flow. At desktop widths the
hero and illustration balance into two columns, the primary navigation remains
calm and compact, and line lengths stay controlled. The illustrative record
flow is explicitly labelled `not an app screenshot`.

Eight viewport screenshots are stored in `docs/reviews/screenshots/web-4/`,
covering every public route at 390×844 and 1440×900.

## Performance and rendering

- Build output reports `/`, `/about`, `/for-sellers`, `/how-it-works`,
  `/_not-found`, `/design-system`, and `/robots.txt` as statically prerendered.
- Production probes confirm `/`, `/for-sellers`, `/how-it-works`, `/about`, and
  `/robots.txt` return 200; `/design-system` returns 404.
- Authored Client Components: **0**.
- Third-party JavaScript, remote font, analytics, tracking, chat, video,
  carousel, and runtime API integrations: **0**.
- New dependencies and lockfile changes: **0**.
- Browser console warnings or errors: **0**.

Next.js still emits its normal framework runtime; zero authored Client
Components does not mean zero framework JavaScript.

## Metadata and indexing

Each route has unique restrained metadata. Global robots metadata remains
`noindex, nofollow, nocache`. No canonical URL, `metadataBase`, structured data,
production hostname configuration, or indexing launch was added.

## Verification results

| Check                     | Result                                                   |
| ------------------------- | -------------------------------------------------------- |
| `npm run format:check`    | Passed                                                   |
| `npm run lint`            | Passed                                                   |
| `npm run typecheck`       | Passed                                                   |
| `npm run test`            | Passed: 5 files, 30 tests                                |
| `npm run build`           | Passed outside the restricted sandbox; all routes static |
| `npm run check`           | Passed                                                   |
| `npm audit --omit=dev`    | Passed: 0 vulnerabilities                                |
| `git diff --check`        | Passed                                                   |
| Production route probes   | Passed                                                   |
| Responsive/browser review | Passed                                                   |

The first sandboxed build could not bind the internal CSS worker port, and the
first sandboxed audit could not reach the npm advisory service. The same
commands passed with the required local/network access; neither failure was an
application defect.

## Known limitations and open decisions

- The native disclosure needs a short physical-key smoke test because the
  browser automation transport did not reliably expose its synthetic-key state.
- Final visual identity and Claude Design refinement remain open.
- Support email, legal/operator identity, privacy owner, approved canonical
  hostname, GitHub write permission, deployment, and indexing remain open.
- The provisional raster brand mark is still oversized for its rendered use.
- No representative screen-reader, forced-colors, low-end-device, Lighthouse,
  or exhaustive browser-zoom audit was performed; those remain later hardening
  work.

## Deferred work

WEB-5A `/support`, `/privacy`, `/terms`, and `/delete-account` routes were not
started. SEO/indexing launch, Play badge and downloads, tester enrollment,
blog, pricing, customer app, AI, accounts, cloud synchronization, analytics,
CMS, final brand redesign, production deployment, and DNS configuration remain
deferred.
