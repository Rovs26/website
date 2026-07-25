# KitaMo Website

The public website foundation for KitaMo, an Android-first business tool being
developed for Filipino micro-businesses.

## Current milestone

This repository contains only:

- **WEB-0 — Repository Bootstrap**
- **WEB-1 — Design System Foundation**

The root route is a temporary review page, not the final homepage. Information
architecture, final navigation, marketing pages, legal pages, store-readiness
content, and production hardening are intentionally deferred.

## Product-status warning

Do not infer public availability from roadmap or implementation work. Public
content must use the controlled status vocabulary:

- **Available Today**
- **Currently Testing**
- **Planned**
- **Future Vision**

Every product claim requires traceable evidence and approval in the
[public claims register](docs/governance/public-claims-register.md). The Android
Owner-Seller application remains the operational product authority. Do not
invent capabilities, terminology, prices, roles, account states, analytics
definitions, or AI behavior in this repository.

## Local development

Requirements:

- Node.js `>=20.19.4` (`20.20.0` is the project and CI baseline)
- npm `10.8.2`

Install and start:

```bash
npm install
npm run dev
```

The local root route shows the temporary foundation. During local development,
`/design-system` provides the internal WEB-1 review surface. That route returns
not found in production builds and is disallowed in `robots.txt`.

No private environment variables are required for WEB-0 or WEB-1. An
`.env.example` file is intentionally absent.

## Quality commands

```bash
npm run format
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run deps:check
npm run audit
npm run audit:all
npm run build
npm run check
```

`npm run check` runs formatting verification, linting, strict type checking,
unit tests, the installed-dependency tree check, and a production build.
`npm run audit` reviews shipped dependencies; `npm run audit:all` also reviews
development tooling. Both query npm’s advisory service separately because they
require network access.

## Architecture

- Next.js App Router with React Server Components by default
- Strict TypeScript
- Tailwind CSS backed by semantic CSS custom properties
- Static rendering wherever practical
- Native metadata, robots, and image optimization
- Vitest for focused component and utility checks
- No backend, database, authentication, CMS, analytics, trackers, or cookies

The project is compatible with a conventional Vercel Next.js deployment, but
production domains, hosted environment values, analytics, and production
readiness are deferred to WEB-8. Do not deploy or configure a production domain
without authorization.

## Public-content governance

Trust is the primary website responsibility:

- prefer evidence over persuasion;
- describe the current state before future direction;
- never present planned work as available;
- never expose private platform architecture or operational details;
- never add invented statistics, testimonials, partners, ratings, awards,
  certifications, security badges, or urgency;
- revalidate time-sensitive statements before a major release.

Start with:

- [Public claims register](docs/governance/public-claims-register.md)
- [Public terminology](docs/governance/public-terminology.md)
- [Public content principles](docs/governance/public-content-principles.md)
- [Brand source inventory](docs/brand/brand-source-inventory.md)

## Accessibility

The design target is WCAG 2.2 Level AA; this is not a conformance or
certification claim. Preserve semantic landmarks and headings, keyboard access,
visible focus, native control semantics, status meaning beyond color, readable
line length, touch targets, reduced motion, zoom, and small-screen behavior.
See the [accessibility baseline](docs/reviews/accessibility-baseline.md).

## Performance

Prefer Server Components and static output. Add a Client Component only when a
real interaction requires browser state. Avoid heavy libraries, external fonts,
autoplay media, background video, icon packages, carousels, chat widgets, and
third-party scripts. Keep images responsive and optimized. See the
[performance baseline](docs/reviews/performance-baseline.md).

## Security and secret handling

- Never commit API keys, tokens, credentials, private URLs, personal contact
  details, local environment files, or deployment state.
- Only add an environment variable when the feature genuinely requires one.
- Document whether each future value is public or server-only.
- Never expose a secret by giving it a browser-visible prefix.
- Do not add tracking, data collection, forms, local-storage analytics, or
  third-party embeds without an approved data review.

Local `.env*` files are ignored while a future `.env.example` may be committed
only with names and safe placeholders.

## Decisions and reviews

- [Preflight inventory](docs/preflight/workspace-inventory.md)
- [Design-system foundation](docs/brand/design-system-foundation.md)
- [Architecture decisions](docs/decisions/)
- [WEB-0/WEB-1 acceptance](docs/reviews/web-0-web-1-acceptance.md)

Read [AGENTS.md](AGENTS.md) before making changes.
