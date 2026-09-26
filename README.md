# KitaMo Website

The public website for KitaMo, a web app for Filipino micro-sellers, at
`https://kitamo.online`. The web app itself is at `app.kitamo.online`, a
separate repository.

## Current milestone

This repository contains:

- **WEB-0 — Repository Bootstrap**
- **WEB-1 — Design System Foundation**
- **WEB-2 — Information Architecture** (approved documentation and governance
  blueprint)
- **WEB-3 — Homepage** (approved, evidence-backed implementation; non-indexed)
- **WEB-4 — Core Public Website** (approved; superseded by MR-1)
- **MR-1 — Web-first marketing site** (approved 2026-09-26,
  [ADR-0012](docs/decisions/ADR-0012-web-first-marketing.md))

The public routes are `/`, `/for-sellers`, `/how-it-works` and `/about`. They
sell the web app: each page has one primary **Create free account** action,
with **Sign in** kept secondary. The Android pilot appears only as **Currently
Testing**. The site is indexable at the apex (ADR-0011). Legal and support
pages are the web app's own and are linked, not copied.

**Launch gate.** The pictures show the web app's Ledger redesign. Publish MR-1
only once that build is live at `app.kitamo.online` (ADR-0012).

## Product-status warning

Do not infer public availability from roadmap or implementation work. Public
content must use the controlled status vocabulary:

- **Available Today**
- **Currently Testing**
- **Planned**
- **Future Vision**

Every product claim requires traceable evidence and approval in the
[public claims register](docs/governance/public-claims-register.md). The web
app (`seller-web`) is the product authority for web-app claims, and the Android
Owner-Seller application for the Android answers. Do not
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

Open `http://localhost:3000` to review the site. During local
development, `/design-system` provides the internal WEB-1 review surface. That
route returns not found in production builds and is disallowed in `robots.txt`.

No private environment variables are required for WEB-0 through WEB-4. An
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

The site deploys to Vercel (`sin1`) behind Cloudflare (ADR-0011). Do not
deploy without the owner's go-ahead.

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

Prefer Server Components and static output. The site ships no Client
Components and runs no JavaScript. The production CSP is `script-src 'none'`
(ADR-0013), so the browser never downloads the Next.js runtime. The console
shows one CSP message per refused script tag, which is expected. The menu and
FAQ are native `<details>`, and the receipt animation is CSS only. Avoid heavy libraries, externally hosted fonts, autoplay media,
background video, icon packages, carousels, chat widgets and third-party
scripts.

ADR-0012 permits:

- the self-hosted Schibsted Grotesk family;
- product screen images and captioned illustrations (`public/plates/`,
  `public/marketing/`);
- a click-to-play clip under its stated limits.

Keep images responsive and optimized. See the
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
- [WEB-2 content and IA inventory](docs/preflight/web-2-content-and-ia-inventory.md)
- [Design-system foundation](docs/brand/design-system-foundation.md)
- [MR-1 content contract](docs/content/mr-1-marketing-content-contract.md)
- [Marketing redesign](docs/redesign/README.md)
- [MR-1 acceptance](docs/reviews/mr-1-acceptance.md)
- [WEB-3 homepage content contract](docs/content/web-3-homepage-content-contract.md) (superseded)
- [WEB-4 For Sellers content contract](docs/content/web-4/for-sellers-content-contract.md)
- [WEB-4 How It Works content contract](docs/content/web-4/how-it-works-content-contract.md)
- [WEB-4 About content contract](docs/content/web-4/about-content-contract.md)
- [Recommended information architecture](docs/architecture/recommended-information-architecture.md)
- [Page inventory and contracts](docs/architecture/page-inventory.md)
- [Architecture decisions](docs/decisions/)
- [WEB-0/WEB-1 acceptance](docs/reviews/web-0-web-1-acceptance.md)
- [WEB-2 acceptance](docs/reviews/web-2-acceptance.md)

Read [AGENTS.md](AGENTS.md) before making changes.
