# ADR-0001: Web framework

## Status

Accepted.

## Context

The KitaMo website needs a stable, maintainable foundation for a public, SEO-ready, accessible site. It must remain a presentation layer and must not become a source of product business logic or gain an application backend during WEB-0 or WEB-1. The repository also needs predictable local and deployment builds without relying on experimental framework behavior.

## Decision

Use stable releases of Next.js with the App Router, React, and strict TypeScript. Use npm as the package manager and commit its lockfile. Require Node.js `>=20.19.4` through repository metadata.

Select mutually compatible stable dependency versions and pin the resolved dependency graph in `package-lock.json`. Use stable framework APIs, including native metadata and image capabilities. Experimental Next.js or React features require a separate, documented decision before adoption.

The website will remain compatible with Vercel without coupling application code unnecessarily to Vercel-only services.

## Rationale

Next.js App Router provides first-party support for React Server Components, static rendering, metadata, route conventions, and optimized assets. Strict TypeScript makes component and content contracts explicit. npm is the fallback package-manager choice established by the bootstrap brief when no stronger repository standard exists. The Node.js floor avoids known incompatibilities with the selected modern toolchain while leaving patch and minor upgrades available.

## Consequences

- Contributors need a compatible Node.js version and npm.
- Exact framework and tool versions remain visible in `package.json` and `package-lock.json`.
- Framework upgrades must preserve stable APIs, build behavior, accessibility, and the rendering strategy.
- No backend, database, authentication, analytics, or CMS is implied by the framework selection.
- Vercel deployment is possible, but production deployment and domain configuration remain later decisions.

## Alternatives considered

- **Pages Router:** Mature, but does not align as directly with the required Server Component and App Router foundation.
- **A client-rendered React application:** Would add avoidable client JavaScript and weaken the default static and metadata model.
- **A different static-site framework:** Could satisfy many requirements, but would diverge from the explicitly required Next.js foundation.
- **Experimental or canary releases:** Rejected because WEB-0 does not require experimental capabilities.
- **pnpm or Yarn:** Reasonable alternatives, but no approved repository standard currently overrides the bootstrap preference for npm.

## Conditions requiring reconsideration

Reconsider this decision if the workspace adopts a mandatory package-manager or Node.js policy; a supported framework version changes its Node.js requirements; stable Next.js can no longer meet accessibility, security, performance, or deployment needs; or an approved platform architecture requires capabilities that cannot be delivered responsibly with this stack.
