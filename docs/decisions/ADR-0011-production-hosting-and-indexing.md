# ADR-0011: Production hosting, canonical origin, and indexing

## Status

Accepted — 2026-09-19. Supersedes the deferral clauses in ADR-0010 that held
the canonical origin and indexing posture open.

## Context

ADR-0010 recorded that the site must "not configure a canonical origin until
the public domain is approved" and that "the temporary root remains no-index".
Both conditions have now been resolved by facts on the ground rather than by a
further planning step:

- `kitamo.online` is registered, active until 2026-07-17, and its nameservers
  are delegated to Cloudflare.
- The site is deployed and serving. `www.kitamo.online` returns 200 from
  Vercel's `sin1` region, which is the correct edge for a Philippine audience.
- The repository had no `main` branch and commit `c0c8eef` had never been
  pushed, so its CI had never run. `main` now exists, is the default branch,
  and its first run passed.

Two states left over from the pre-domain period are now actively wrong rather
than merely cautious:

1. `lib/metadata/site.ts` emitted `noindex, nofollow, nocache` on every page,
   which contradicted `app/robots.ts` already allowing `/`. The site was
   invisible to search while claiming otherwise in its own robots file.
2. `next.config.ts` carried no security headers at all, while the sibling
   `admin` repository held a complete CSP and frame/permissions policy. A
   public site and an authenticated app are about to share this domain.

## Decision

- The canonical public origin is the **apex**, `https://kitamo.online`. The
  apex is what appears on printed and spoken material, and it reads correctly
  as the parent of `app.kitamo.online`. `www` redirects to the apex.
- The site is **indexable**: `index: true, follow: true`, with `metadataBase`
  and a self-canonical set from `siteOrigin`.
- A generated `app/sitemap.ts` lists only routes that exist and carry approved
  content. `/design-system` stays excluded, matching `robots.ts`.
- Security headers are ported from `admin/next.config.ts`. `script-src` omits
  `'unsafe-inline'` outside development, which the site can afford because it
  is fully static and ships no first-party JavaScript.
- Hosting is **Vercel**, with Cloudflare retained for DNS.

## Rationale

The alternative — keeping `noindex` until a separate approval round — protects
nothing once the domain is live and the content is the approved WEB-3/WEB-4
copy. The claims on these pages already passed the ADR-0004 governance process;
withholding them from search does not make them safer, it only makes them
unreachable.

Choosing the apex over `www` is reversible but cheaper to decide now, before
any inbound link exists.

## Consequences

- Search engines may now index the four public routes. The claims on them are
  governed by ADR-0004 and the public-claims register, which does not change.
- Adding any third-party script, font, or embed will now require an explicit
  CSP amendment. This is intended.
- `app.kitamo.online` is a separate deployment from a separate repository
  (`kitamo-ph/seller-web`) and is **not** governed by this repository's
  ADR-0006 dependency policy or ADR-0007 zero-data-collection baseline. Those
  remain correct for the marketing site and are the reason the authenticated
  app was not built inside it.

## Alternatives considered

- **Cloudflare Pages instead of Vercel.** The domain is already on Cloudflare
  DNS, so this would have kept one vendor. Rejected because the site is a
  standard Next.js App Router build and Vercel runs it with no adapter, and
  because the team had immediate access to a Vercel account.
- **Keep `www` canonical.** Rejected: the apex is shorter for print, and the
  redirect has to point one way regardless.
- **Defer indexing to a later milestone.** Rejected as described above.

## Reconsideration conditions

Revisit if the public domain changes, if a third-party script becomes
necessary, if the marketing site stops being fully static, or if the apex and
`app` subdomain need to be served by different providers.

## Addendum: 2026-09-26

- **Script policy.** `script-src 'self'` is replaced by `script-src 'none'` in
  production ([ADR-0013](ADR-0013-no-client-javascript.md)). The old value
  blocked Next.js's inline payload but still let the browser download the
  runtime. The new value blocks every script, so no runtime is fetched at all.
  The rest of the header set is unchanged.
- **Cloudflare's edge injects a Web Analytics beacon** on the proxied apex and
  `www`. It is a `static.cloudflareinsights.com` script sent only in responses
  to browser user agents. The CSP blocks it, and it conflicts with ADR-0007.
  - `app.kitamo.online` is DNS-only, served straight from Vercel, and is not
    affected.
  - The owner turned it off on 2026-09-26 (Web analytics → Manage site → RUM:
    Disable), and the same-day check found no beacon. The steps are in
    [`../reviews/mr-1-acceptance.md`](../reviews/mr-1-acceptance.md).
