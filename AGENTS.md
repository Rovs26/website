# KitaMo Website Agent Instructions

These rules apply to all work in this repository.

## Before editing

1. Inspect the repository, current branch, working tree, relevant instructions,
   and the files in scope.
2. Preserve unexplained or user-authored work. Do not overwrite, delete, rewrite
   history, force-push, or alter remotes without explicit authorization.
3. Read the relevant decision records and governance documents.
4. Confirm that the requested milestone is approved. Do not begin WEB-2 or any
   later milestone while the WEB-0/WEB-1 gate is awaiting approval.

## Public trust and product authority

- The Android Owner-Seller application is the current operational product
  authority. This website is not a source of business logic.
- Never invent or independently redefine capabilities, business terminology,
  transaction rules, pricing, data models, roles, account states, subscription
  behavior, analytics definitions, or AI behavior.
- Never turn roadmap intent into a promise.
- Never add invented statistics, trust claims, testimonials, partners, customer
  counts, awards, certifications, security badges, ratings, urgency, or
  guaranteed business results.
- Never expose private platform architecture, repository structure,
  infrastructure, service names, environment-variable names, credentials,
  monitoring, or operational workflows in public UI or metadata.
- Do not publish draft Play, legal, support, or privacy content as approved
  website content.

Before introducing or changing public wording, consult:

- `docs/governance/public-claims-register.md`
- `docs/governance/public-terminology.md`
- `docs/governance/public-content-principles.md`
- `docs/brand/brand-source-inventory.md`

Record evidence, approval, and revalidation needs. An absent approval is not an
approval.

## Product-status taxonomy

Use only the controlled product statuses unless an explicit extension decision
is approved:

- **Available Today** — implemented, verified, usable in an approved release,
  and approved for public communication.
- **Currently Testing** — limited to internal, invited, pilot, or controlled
  testing.
- **Planned** — accepted into the roadmap but not currently available.
- **Future Vision** — directional and changeable, not a delivery commitment.

Status meaning must use visible text and accessible semantics, never color
alone.

## Implementation rules

- Prefer React Server Components and static rendering.
- Add `"use client"` only when a real interaction requires browser state.
- Minimize JavaScript, hydration, dependencies, and abstractions.
- Preserve semantic HTML, logical heading order, keyboard access, visible focus,
  native control behavior, accessible names, touch targets, zoom, reduced
  motion, and readable mobile layouts.
- Maintain metadata quality without claiming a canonical domain that has not
  been approved.
- Use the semantic design tokens in `app/globals.css`; do not scatter raw brand
  colors through components.
- Keep brand choices replaceable and mark unapproved choices provisional.
- Prefer composition and narrowly typed props. Do not create a broad enterprise
  component framework or speculative variants.
- Do not introduce a backend, database, authentication, CMS, analytics,
  advertising, cookies, chat, data collection, external embeds, or tracking
  without explicit milestone approval.
- Do not add public business terminology independently. Validate shared terms
  with approved sources and the terminology register.
- Do not add private environment requirements to the foundation.

## Architecture changes

Update or add a decision record when changing the framework, rendering
strategy, styling/token model, content governance, accessibility baseline,
dependency policy, data collection posture, or another material architecture
choice. Each ADR must record status, context, decision, rationale,
consequences, alternatives, and reconsideration conditions.

## Verification

Before reporting completion, run:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
npm run check
git diff --check
git status --short --branch
```

Run `npm run audit` when network access is available and document unresolved
findings accurately. Never report a check as passing unless it was executed and
completed successfully.

Review production output for static versus dynamic routes, unexpected client
bundles, warnings, dependency issues, metadata/image/font issues, and accidental
public claims. Update the relevant review and acceptance documents whenever the
baseline changes.

## Environment and secrets

- Local `.env*` files stay untracked.
- A future `.env.example` contains names and safe placeholders only.
- Never commit or echo secrets, private URLs, personal contact details, or
  generated deployment credentials.
- Only browser-safe values may ever be exposed to browser code, and exposure
  must be deliberate and documented.

## Scope gate

WEB-0 and WEB-1 establish the repository and design-system foundation. WEB-2
defines information architecture in documentation only. Do not implement final
navigation, the final homepage, core public pages, legal or support pages, full
hardening, Play Store readiness, or production readiness until the Website
Architect approves WEB-2 and separately authorizes the applicable later
milestone.
