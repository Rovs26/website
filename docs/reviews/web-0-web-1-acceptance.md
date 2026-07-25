# WEB-0 and WEB-1 Acceptance Report

Status: **Implementation complete; Website Architect approval required**

Completed: 2026-07-25
Branch: `feat/web-0-web-1-foundation`
Scope: WEB-0 Repository Bootstrap and WEB-1 Design System Foundation only

## Scope completed

### WEB-0

- Inspected the empty target and sibling workspace before initialization.
- Recorded confirmed, inferred, unresolved, recommended, risk, and later-decision
  findings.
- Initialized a standalone local Git repository and feature branch.
- Added stable Next.js App Router, React, strict TypeScript, Tailwind CSS, npm,
  and Node.js policies.
- Added a temporary, restrained root route; a semantic not-found route; native
  metadata; and robots output.
- Added ESLint, Prettier, Vitest, production-build, dependency-tree, audit, and
  composite quality commands.
- Added read-only GitHub Actions quality gates.
- Added developer, architecture, content-governance, accessibility,
  performance, security, and deployment documentation.
- Added no backend, database, authentication, CMS, tracker, analytics, cookie,
  or private environment requirement.

### WEB-1

- Reviewed current Android release artwork, Gabi application tokens and fonts,
  draft public materials, and missing identity evidence.
- Separated current working, provisional, conflicting, missing, and
  approval-required brand decisions.
- Added semantic color, typography, layout, shape, shadow, and motion tokens.
- Added typed brand, layout, typography, interaction, surface, and status
  primitives.
- Added the four controlled product-status categories with visible accessible
  labels.
- Added a development-only design-system preview; verified it returns 404 in a
  production server.
- Added public-claim, terminology, and content-principle governance.
- Recorded accessibility, performance, dependency, and client-component
  baselines.
- Added focused tests for high-value semantics and preview gating.

No WEB-2 or later implementation was started.

## Files created

The target was empty, so every source file below was created and no existing
website source file was modified:

```text
.editorconfig
.github/workflows/ci.yml
.gitignore
.node-version
.prettierignore
.prettierrc.json
AGENTS.md
README.md
app/(internal)/design-system/page.tsx
app/globals.css
app/layout.tsx
app/not-found.tsx
app/page.tsx
app/robots.ts
components/brand/brand-mark.tsx
components/layout/cluster.tsx
components/layout/container.tsx
components/layout/page-shell.tsx
components/layout/section.tsx
components/layout/stack.tsx
components/primitives/button.tsx
components/primitives/card.tsx
components/primitives/divider.tsx
components/primitives/heading.tsx
components/primitives/notice.tsx
components/primitives/skip-link.tsx
components/primitives/styled-link.tsx
components/primitives/text.tsx
components/status/product-status.tsx
docs/brand/brand-source-inventory.md
docs/brand/design-system-foundation.md
docs/decisions/ADR-0001-web-framework.md
docs/decisions/ADR-0002-rendering-strategy.md
docs/decisions/ADR-0003-styling-and-design-tokens.md
docs/decisions/ADR-0004-public-content-governance.md
docs/decisions/ADR-0005-accessibility-baseline.md
docs/decisions/ADR-0006-dependency-policy.md
docs/decisions/ADR-0007-data-collection-baseline.md
docs/governance/public-claims-register.md
docs/governance/public-content-principles.md
docs/governance/public-terminology.md
docs/preflight/workspace-inventory.md
docs/reviews/accessibility-baseline.md
docs/reviews/performance-baseline.md
docs/reviews/web-0-web-1-acceptance.md
eslint.config.mjs
lib/content/foundation-copy.ts
lib/content/product-status.ts
lib/metadata/site.ts
lib/utilities/class-names.ts
lib/utilities/internal-preview.ts
next.config.ts
package-lock.json
package.json
postcss.config.mjs
public/brand/kitamo-app-icon.png
tests/components/foundations.test.tsx
tests/unit/class-names.test.ts
tests/unit/internal-preview.test.ts
tsconfig.json
vitest.config.ts
```

Next.js generated ignored local files and output, including `next-env.d.ts`,
`tsconfig.tsbuildinfo`, and `.next/`. They are not part of the source manifest.
`.env.example` is intentionally absent because no environment variable is
needed.

## Architectural decisions

1. Use a standalone npm repository with Node.js `>=20.19.4` and project/CI
   baseline `20.20.0`.
2. Use stable Next.js App Router, React, and strict TypeScript.
3. Prefer static Server Components; add Client Components only for necessary
   browser interaction.
4. Use Tailwind CSS backed by semantic custom properties.
5. Govern public content through evidence, approval, status, terminology, and
   revalidation records.
6. Target WCAG 2.2 Level AA without claiming certification.
7. Keep dependencies narrow and reviewed.
8. Collect no data and add no tracking, cookies, forms, embeds, or external
   services during this milestone.
9. Remain Vercel-compatible without production domain or service coupling.

The rationale and reconsideration conditions are in ADR-0001 through ADR-0007.

## Provisional decisions

- Forest-green, warm-gold, cream, charcoal, and coral website direction.
- Every exact website color and state value.
- System font stack for both display and body typography.
- Controlled radii and restrained shadow values.
- The release Play icon as the temporary website brand asset.
- The precise product-status visual presentation.
- The root-page metadata and temporary copy.

The product name and release assets are current working evidence, not an
approved public-web identity. The Android Gabi violet/gold system remains a
material unresolved conflict.

## Verification commands and results

| Command or check               | Result                                                                                                                 |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `npm install`                  | Passed; npm lockfile created and safe patch updates applied.                                                           |
| `npm run format:check`         | Passed; all matched files formatted.                                                                                   |
| `npm run lint`                 | Passed with no final warnings or errors.                                                                               |
| `npm run typecheck`            | Passed under strict TypeScript.                                                                                        |
| `npm run test`                 | Passed: 3 files, 10 tests.                                                                                             |
| `npm run build`                | Passed; all reported routes static.                                                                                    |
| `npm run check`                | Passed, including formatting, lint, types, tests, dependency tree, and build.                                          |
| `npm run audit`                | Passed: 0 production vulnerabilities.                                                                                  |
| `npm run audit:all`            | Review completed; 9 high development-only lint-chain findings remain and are documented below.                         |
| `git diff --check`             | Pending final commit staging at the time this evidence section was written; final result is recorded under Git status. |
| Public-boundary source scan    | Passed; no private provider, secret, or credential pattern in public UI/content source.                                |
| Raw-color component scan       | Passed; reusable components contain no raw hex colors.                                                                 |
| Authored Client Component scan | Passed; no `"use client"` directive found.                                                                             |
| Production route probe         | `/` 200; `/design-system` 404; robots disallows `/design-system`.                                                      |
| Mobile browser review          | Passed at 360×800 with no horizontal overflow.                                                                         |
| Desktop browser review         | Passed at 1440×900 with no horizontal overflow.                                                                        |
| Browser console review         | Passed; no warning or error entry.                                                                                     |

The first sandboxed `next build` could not bind an internal CSS worker port.
The same build succeeded outside the restricted sandbox. This was an execution
environment restriction, not an application build warning.

## Accessibility findings

- Semantic banner, main, section, article, aside, heading, button, link, and
  divider structures are present.
- Root and preview heading levels are logical.
- Skip navigation targets the single main landmark and becomes visible on
  focus.
- Focus is a 3px solid outline with 3px offset.
- Buttons and button-styled links are at least 44px high.
- Status categories include visible exact labels and assistive semantic text.
- Meaning is not dependent on status color.
- No horizontal overflow was measured at 360×800 or 1440×900.
- Reduced-motion rules are present.
- Current image alternative behavior is correct for adjacent text.

Measured normal-text contrast:

| Pair                |   Ratio |
| ------------------- | ------: |
| Body text/page      | 14.88:1 |
| Secondary text/page |  6.19:1 |
| Primary action      |  6.63:1 |
| Available Today     |  7.25:1 |
| Currently Testing   |  8.08:1 |
| Planned             |  7.83:1 |
| Future Vision       |  8.50:1 |

No formal conformance claim is made. Screen-reader matrices, forced colors,
exhaustive zoom, localization, and later interactive content remain for WEB-6.

## Performance findings

- All build-reported routes are statically prerendered.
- Authored Client Components: 0.
- No application state, analytics, chat, animation, carousel, or icon library.
- System fonts create no external request or font swap.
- One 207KB source brand raster is optimized by Next.js at render time with
  fixed dimensions.
- Browser checks showed the brand image loaded and no horizontal overflow or
  console warnings.
- Production audit reports 0 vulnerabilities.
- No Lighthouse or production performance score is claimed.

## Dependency summary

Production:

- Next.js 16.2.11
- React 19.2.6
- React DOM 19.2.6

Development:

- Tailwind CSS/PostCSS
- TypeScript and React/Node types
- ESLint and Next accessibility/React rules
- Prettier and Tailwind class ordering
- Vitest

Patched npm overrides are used for PostCSS 8.5.23 and Sharp 0.35.3 after the
initial audit identified current advisories in the versions bundled by Next.
The production audit is clear and the build/image path passed.

The full audit reports 9 high findings in development-only ESLint plugin paths
through `minimatch` and `brace-expansion`. The suggested ESLint 10 change
conflicts with current plugin peer ranges; forcing it was rejected. The
affected path processes trusted repository lint patterns and is not shipped.
This must be revalidated when compatible upstream releases exist.

## Client-component inventory

No repository-authored component is a Client Component. All current components
are server-renderable and use native HTML/CSS. Next.js still ships framework
routing/runtime support and `next/image` client support; this is not described
as zero browser JavaScript.

## Unsupported claims prevented

- No general product availability statement.
- No cloud synchronization, customer application, advanced or predictive
  analytics, public AI, public API/Admin, subscription, pricing, or public
  release claim.
- No invented statistics, testimonials, partners, ratings, awards,
  certifications, security badges, or privacy guarantees.
- No final tagline or draft store/legal copy.
- No placeholder support contact, legal identity, or canonical public domain.
- No internal platform provider, architecture, repository, secret, or
  operational detail in the public UI.

The product-status definitions in the internal preview explain governance; they
do not assign a status to a specific public feature.

## Known limitations

- Public web brand approval is absent.
- Release art and Gabi application design evidence conflict.
- No authoritative vector/wordmark, logo usage guide, favicon family, public
  screenshot set, public domain, legal identity, or support identity exists.
- The design preview is code-gated to development rather than protected by user
  authentication; production returns 404.
- The source release raster is oversized for its current 40px use.
- Full audit development-tool findings remain.
- No exhaustive screen-reader, zoom, forced-color, low-end-device, slow-network,
  or performance lab matrix was performed.
- No remote is configured and nothing was pushed or deployed.

## Deferred work

Explicitly not started:

- WEB-2 information architecture
- final navigation
- WEB-3 homepage
- WEB-4 core public pages
- WEB-5 legal and support pages
- WEB-6 full SEO, accessibility, and performance hardening
- WEB-7 Play Store readiness
- WEB-8 production readiness

Also deferred: canonical-domain configuration, sitemap/final route metadata,
public social card, final favicon set, external services, analytics, forms,
data collection, deployment, and final public copy.

## Unresolved approval questions

Approval is required for:

1. repository and architecture foundation;
2. provisional palette and exact token values;
3. system-font direction or supplied licensed web fonts;
4. component API and visual direction;
5. product-status wording and presentation;
6. public claims governance;
7. public terminology governance;
8. relationship between release green/gold art and Gabi violet/gold UI;
9. authoritative logo and permitted variants;
10. public domain, support identity, legal organization identity, tagline, and
    imagery in later milestones.

## Git status and commits

This section is updated after the logical local commits so the final approval
gate records the exact branch, worktree state, and non-self-referential commit
hashes. No remote will be added and no push will occur.
