# WEB-3 Homepage Acceptance Report

Status: **Implementation complete; no deployment performed**

Completed: 2026-08-09

Starting branch: `feat/web-2-information-architecture`

Starting commit: `17c18af1c3bd8d29eb9dc112b14293fa3b6b4e4d`

Resulting branch: `feat/web-3-homepage`

Scope: WEB-3 Homepage only

No remote publication, deployment, canonical-host configuration, indexing,
WEB-4 route, or later milestone work was performed.

## Scope completed

- Replaced the temporary root review page with the first evidence-backed KitaMo
  homepage.
- Added a minimal header with the existing provisional brand mark and a same-page
  Testing Status link.
- Added a status-led hero, bounded audience explanation, three-item capability
  summary, current offline/device-local explanation, mandatory testing-status
  disclosure, and minimal footer.
- Kept every visitor action informational and on the homepage.
- Preserved static Server Components and added no authored Client Component,
  runtime API, form, storage, analytics, tracker, cookie, external embed, or new
  application dependency.
- Retained global `noindex`, `nofollow`, and `nocache` metadata without a
  canonical URL.
- Revalidated and approved CLM-001 through CLM-007 only for exact WEB-3 Home
  occurrences. CLM-008 and CLM-009 remain unapproved and unused.
- Added the required content contract and focused trust tests.
- Removed the obsolete temporary foundation-copy module.

## Files created

```text
docs/content/web-3-homepage-content-contract.md
docs/reviews/web-3-homepage-acceptance.md
lib/content/homepage-copy.ts
tests/components/homepage.test.tsx
```

## Files modified

```text
README.md
app/page.tsx
components/layout/page-shell.tsx
docs/governance/page-claim-matrix.md
docs/governance/public-claims-register.md
docs/governance/public-terminology.md
lib/metadata/site.ts
package-lock.json
package.json
tests/components/foundations.test.tsx
```

## File removed

```text
lib/content/foundation-copy.ts
```

## Homepage structure

1. Skip link to `#main-content`.
2. Minimal brand header with `Testing status` linking to
   `/#testing-status`.
3. Hero with **Currently Testing**, one H1, approved positioning, and two
   same-page CTAs.
4. Intended-audience section with explicit no-adoption and no-universal-fit
   boundary.
5. `#how-it-works` summary containing Record sales, Track inventory, and Review
   business records.
6. Device-local/offline section with backup, recovery, and cross-device
   limitations beside the claim.
7. `#testing-status` trust section stating that the Android app is not an open
   public download and that this website offers no tester enrollment.
8. Minimal footer with KitaMo, the current year, and Testing Status.

The final WEB-4 navigation and every unimplemented route remain absent.

## Public claim approvals

The Website Architect's 2026-08-09 WEB-3 implementation brief is the approval
context. Current Android evidence was revalidated at
`0ce3efd8cb1c904fb362b27bc6cecd5dc937d925`.

| Claim ID | Approved WEB-3 use                                                                                                                                                     | Evidence basis                                                                 |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| CLM-001  | Product name `KitaMo`                                                                                                                                                  | Android configuration and pre-internal hardening release identity              |
| CLM-002  | `Android business app`, `current Android test version`, and `Android app`                                                                                              | Current Android README and configuration                                       |
| CLM-003  | `Currently Testing` and `not an open public release`                                                                                                                   | Current pre-internal hardening status and public-rollout boundary              |
| CLM-004  | Core business records stay on the device; current sales, inventory, and reporting workflows do not require internet; no automatic backup/recovery/cross-device promise | Current pre-internal hardening, privacy behavior, and final readiness evidence |
| CLM-005  | `Filipino small-business owners and sellers` plus approved intended-context examples                                                                                   | Current tester plan, Android scope plan, and in-app About evidence             |
| CLM-006  | `not an open public download` and no tester enrollment on this website                                                                                                 | Current release gate and absence of public rollout                             |
| CLM-007  | `Record sales`, `Track inventory`, and `Review business records`, each with current-test/local qualification                                                           | Current Android README, scope plan, and final readiness evidence               |

The exact visible and metadata occurrences, exclusions, owner roles, and
revalidation triggers are in
`docs/content/web-3-homepage-content-contract.md`. Every used claim remains
**Currently Testing**. Approval does not transfer to another route, surface,
language, or product status.

## CTA decisions

- Primary: `See how KitaMo works` → `#how-it-works`
- Secondary: `View testing status` → `#testing-status`
- Header/footer: `Testing status` → `/#testing-status`

There is no download, tester enrollment, waitlist, account, sign-up, contact,
support, purchase, or future-route action.

## Metadata and indexing

- Title: `KitaMo | Currently Testing`
- Description: bounded Android/test/audience wording approved for WEB-3
- Robots meta: `noindex, nofollow, nocache`
- Canonical URL: none
- Structured data: none
- `robots.txt`: allows `/`, disallows `/design-system`

The supplied `kitamo.online` domain was recorded in the task context but was not
turned into a canonical runtime decision.

## Accessibility review

- One H1 and logical H1 → H2 → H3 hierarchy.
- One banner, one main landmark, and one footer; all five homepage sections have
  `aria-labelledby` references that resolve.
- Skip link targets the main landmark and exposes the existing 3px visible focus
  outline during keyboard focus.
- Every visible link measured at least 44px high at all required viewports.
- **Currently Testing** is visible twice and includes assistive `Product status`
  text; meaning does not depend on color.
- No horizontal overflow at 320, 360, 390, 768, or 1440 CSS pixels.
- The 320px reflow check also exercises the effective content width expected
  when a wider mobile viewport is zoomed to 200%; no content or function is
  lost.
- Existing reduced-motion rules remain active; WEB-3 adds no animation.
- Existing contrast pairs used by WEB-3 remain above WCAG 2.2 AA normal-text
  thresholds: body/page 14.88:1, secondary/page 6.19:1, primary action 6.63:1,
  and testing status 8.08:1.
- No formal WCAG conformance or certification claim is made.

## Responsive review

Manual browser review covered:

| Viewport | Overflow | CTA minimum height | Result                                                                  |
| -------- | -------- | ------------------ | ----------------------------------------------------------------------- |
| 320×568  | None     | 44px               | Mobile hero, wrapping, capability card, and testing disclosure readable |
| 360×800  | None     | 44px               | Single-column layout readable                                           |
| 390×844  | None     | 44px               | Single-column layout readable                                           |
| 768×1024 | None     | 44px               | Capability cards form the intended three-column row without overflow    |
| 1440×900 | None     | 44px               | Hero balance, line length, scope card, and CTAs readable                |

No CTA text was clipped or forced below the 44px control height. Browser console
review reported no warning or error.

## Performance and client-component review

- Build output reports `/`, `/_not-found`, `/design-system`, and `/robots.txt`
  as statically prerendered.
- Authored Client Components: **0**.
- New runtime dependencies: **0**.
- External scripts/resources: **0**.
- Forms and inputs: **0**.
- Third-party trackers and runtime API calls: **0**.
- The only image remains the existing small brand asset through Next Image; no
  hero image, generated media, video, remote font, or layout-shifting content
  was added.

## Dependency review

No direct application or development dependency was added. During the required
network audit, new advisories affected existing transitive versions of
`nanoid`, `brace-expansion`, and `js-yaml`. Narrow non-breaking overrides were
added for their patched versions, using the repository's existing override
policy. The lockfile changed only for those transitive patches.

- `npm audit --omit=dev`: 0 vulnerabilities.
- `npm audit`: 0 vulnerabilities.

## Tests and production probes

- Focused homepage tests verify one H1, visible **Currently Testing**, both CTA
  targets, the testing-status section, informational-only actions, absence of
  excluded availability claims, and absence of links to unimplemented routes.
- Existing production-preview gating test remains in place.
- Production probes: `/` → 200, `/design-system` → 404, `/robots.txt` → 200.
- Root HTML contains `noindex, nofollow, nocache` and no known tracker,
  unapproved provider, or external API marker.

## Verification results

| Check                       | Result                                                   |
| --------------------------- | -------------------------------------------------------- |
| `npm run format:check`      | Passed                                                   |
| `npm run lint`              | Passed                                                   |
| `npm run typecheck`         | Passed                                                   |
| `npm run test`              | Passed: 4 files, 13 tests                                |
| `npm run deps:check`        | Passed; see optional-package note below                  |
| `npm run build`             | Passed outside the restricted sandbox; all routes static |
| `npm run check`             | Passed                                                   |
| `git diff --check`          | Passed                                                   |
| Production route probes     | Passed                                                   |
| Responsive/browser review   | Passed                                                   |
| Production dependency audit | Passed: 0 vulnerabilities                                |
| Full dependency audit       | Passed: 0 vulnerabilities                                |

The first sandboxed build and server attempts could not bind internal/local
ports. Both succeeded outside that restricted execution environment; the errors
were sandbox constraints, not application warnings.

A clean `npm ci` under the repository-pinned npm 10.8.2 reproduces npm's listing
of six installed optional WASM support packages as `extraneous`. They are
already represented in the lockfile, `npm ls --depth=0` exits successfully, the
build uses the supported native path, and both audits report zero
vulnerabilities. No application package was added to conceal that npm reporting
quirk.

## Unresolved and deferred work

- Public indexing, canonical host configuration, deployment, production
  monitoring, and launch remain WEB-8 work.
- Final brand identity, logo variants, palette, and typography remain
  provisional despite the explicit authorization to continue the WEB-1 visual
  direction for WEB-3.
- Public download, tester enrollment, and support paths remain unavailable.
- `/for-sellers`, `/how-it-works`, `/about`, `/support`, `/privacy`, `/terms`,
  and `/delete-account` remain unimplemented and unlinked.
- WEB-4 through WEB-8 remain separately gated.
