# WEB-0 Workspace Inventory

Status: **Preflight complete — safe to bootstrap**

Date: 2026-07-25
Timezone: Asia/Manila
Workspace: `/Users/rovs/Documents/KitaMo-ph`
Target: `/Users/rovs/Documents/KitaMo-ph/website`

This report records read-only evidence gathered before any website
initialization. Secret-bearing files were not opened, and no secret values are
included.

## Confirmed findings

### Website repository

- The `website` directory was empty, including hidden files, before this report
  was created.
- It was not a Git repository, and the workspace parent was not a Git
  repository.
- No branch, commit, remote, worktree state, package manifest, lockfile,
  environment file, CI definition, or hosting configuration existed.
- No unexplained implementation or user work was present to preserve.
- `.openai/hosting.json` was not present.

### Sibling repositories

| Project               | State                                                                   | Git evidence                                                                                                                  |
| --------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `owner-seller-mobile` | Populated Android application and current operational product authority | Git repository; branch `codex/pre-internal-hardening`; commit `6ed9ace3a92f7435f84c2f75f0084a03070ae2e4`; clean at inspection |
| `admin`               | Populated internal Next.js application                                  | Git repository; branch `main`; commit `b9460858bf91cd5bf50536d469ff7106ce92b483`; clean at inspection                         |
| `shared-contracts`    | Contains only its own preflight report                                  | Not a Git repository                                                                                                          |
| `platform-api`        | Empty directory                                                         | Not a Git repository                                                                                                          |
| `customer-mobile`     | Empty directory                                                         | Not a Git repository                                                                                                          |

The workspace is not configured as a monorepo. No root `package.json`,
workspace manifest, task runner, or root agent instruction file was found.

### Package manager and Node.js

- Both populated sibling repositories use npm and commit lockfile-version-3
  `package-lock.json` files.
- Android requires Node.js `>=20.19.4` and pins `20.19.4` for EAS builds.
- Admin requires Node.js `>=20.19.0` and pins `20.20.0` in CI.
- The inspection machine provides Node.js `20.20.2` and npm `10.8.2`.
- No shared pnpm, Yarn, or Bun convention was found.

### Web tooling conventions

Admin is the only populated sibling web application and provides the relevant
precedent:

- Next.js App Router, React, TypeScript, and Tailwind CSS.
- Strict TypeScript 5.9 and the `@/*` repository-root alias.
- ESLint 9 flat configuration with Next.js Core Web Vitals and TypeScript
  rules.
- Prettier 3 with semicolons, double quotes, trailing commas, and the Tailwind
  CSS plugin.
- Vitest for unit-level verification.
- GitHub Actions using `npm ci`, read-only repository permissions, npm caching,
  and a pinned Node.js `20.20.0` runtime.

### Brand and public-content evidence

- The approved public product name is evidenced as `KitaMo` in
  `owner-seller-mobile/app.json` and the current release documentation.
- The Android repository contains current release icon assets in
  `owner-seller-mobile/assets/` and Play listing assets in
  `owner-seller-mobile/docs/play-store/assets/`.
- `owner-seller-mobile/assets/icon.png` and
  `owner-seller-mobile/docs/play-store/assets/play-icon-512.png` show the same
  eye-and-growth-arrow mark using forest green, warm gold, cream, and a small
  coral accent.
- The Play feature graphic supplies a current working wordmark treatment and
  uses the line `Kita mo agad ang negosyo mo.` It is evidence, not automatically
  approved website copy.
- The current Android UI also contains an approved `Gabi` redesign using violet
  and gold tokens plus Plus Jakarta Sans and Bricolage Grotesque. This conflicts
  with the green-and-gold release asset direction and must not be silently
  resolved as a permanent cross-platform brand decision.
- The app is in internal testing; broad public release is not evidenced.
- The release candidate store listing and privacy policy are drafts. They are
  not approved legal or final website copy.
- Public support email and privacy-policy URL remain placeholders in inspected
  release documents.
- `admin.kitamo.online` is documented as the intended internal Admin host. It is
  not evidence of the approved public website canonical domain.

### Sensitive areas not inspected

The following categories were identified and deliberately not opened or copied:

- local environment files;
- generated or device-local runtime state;
- signed Android build and release artifacts;
- deployment runtime state;
- credentials, tokens, certificates, and production data.

These areas are not public-content sources.

## Inferred findings

- A standalone npm repository is the smallest choice consistent with both
  populated siblings.
- Node.js `>=20.19.4` with a checked-in `20.20.0` project pin matches the
  strongest cross-repository baseline while remaining within the supported
  Node.js 20 LTS line used by the workspace.
- The Admin dependency versions are the least speculative source for a stable
  website setup: Next.js 16.2, React 19.2, Tailwind CSS 4.2, TypeScript 5.9,
  ESLint 9, Prettier 3, and Vitest 4.
- The current release icon is suitable for a provisional website brand wrapper
  because it is already shipped as release evidence. Exact website colors still
  need approval because no authoritative website token file exists.

## Unresolved questions

- Which visual direction is authoritative across public web surfaces: the
  forest-green release identity, the violet `Gabi` application system, or a
  future reconciled system?
- Are the Android display fonts licensed and approved for locally hosted web
  use?
- Is the feature-graphic tagline approved for public website use?
- What is the approved public canonical domain?
- What organization or company name should appear in future legal and public
  ownership copy?
- What monitored support identity may be published?
- Which release-candidate product claims are approved for a public audience?

## Recommendations

1. Bootstrap a standalone npm project on a local feature branch named
   `feat/web-0-web-1-foundation`.
2. Use stable Next.js App Router functionality, strict TypeScript, Tailwind CSS,
   Server Components by default, and static rendering.
3. Pin Node.js `20.20.0` for reproducibility and require `>=20.19.4`.
4. Reuse the current release icon without redrawing it.
5. Use a system font stack until web font licensing and performance decisions
   are approved.
6. Implement semantic, replaceable CSS tokens. Use an accessible provisional
   forest-green, gold, cream, charcoal, and coral direction derived from the
   release assets, while documenting the Android UI token conflict.
7. Keep the root page temporary and restrained. Provide a development-only
   design-system route that is absent from production behavior.
8. Add no backend, authentication, CMS, analytics, trackers, cookies, or private
   environment requirements.

## Risks

- Treating release-asset colors as exact brand standards would overstate the
  evidence.
- Copying Android UI tokens directly would contradict the current release
  artwork and the bootstrap brief’s provisional direction.
- Draft Play listing and privacy copy may become outdated and must not be
  published without revalidation and approval.
- A public domain, support identity, and formal legal identity are unresolved.
- Git history and a remote do not yet exist; remote creation or pushing requires
  separate authorization.

## Decisions required later

- Approve or replace the provisional website palette.
- Approve the system-font direction or supply licensed web-font assets.
- Confirm the cross-platform brand relationship between release artwork and
  the `Gabi` application design system.
- Approve the component and product-status presentation.
- Approve a canonical public domain, organization identity, support identity,
  and any public claim before later milestones.

## Bootstrap recommendation

Proceed with a clean, standalone npm and Next.js foundation. Preserve the
release icon as source evidence, keep all other website visual choices
provisional, and implement only WEB-0 and WEB-1.

## Planned file manifest

The following files are expected to be created; no pre-existing website file
will be modified:

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

`.env.example` is intentionally omitted because WEB-0 and WEB-1 require no
environment variables. Next.js may generate ignored build-time files such as
`next-env.d.ts`; generated output is not part of the planned source manifest.
