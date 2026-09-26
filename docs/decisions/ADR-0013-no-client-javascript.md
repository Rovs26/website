# ADR-0013: No client JavaScript (`script-src 'none'`)

## Status

Accepted: 2026-09-26. Amends the Content Security Policy set in ADR-0011. The
rest of ADR-0011 is unchanged.

## Context

ADR-0011 set `script-src 'self'`. Next.js 16's App Router puts each page's
React Server Component payload in inline `<script>self.__next_f.push(...)</script>`
tags. The policy blocked those tags, while the framework chunks
(`/_next/static/chunks/*.js`) still loaded. Every page therefore:

- downloaded and parsed about 145 KB (compressed) of runtime script;
- logged "Executing inline script violates … script-src 'self'";
- threw React error #412 (connection closed) when hydration found no payload.

The live site behaved the same way.

Nothing needed that script. MR-1 (ADR-0012) has no Client Components: the menu
and FAQ are native `<details>`, links are plain `<a>`, and the one animation is
CSS. The audience is on 2 GB phones and mobile data.

Next 16's CSP guide (`node_modules/next/dist/docs/01-app/02-guides/content-security-policy.md`)
offers nonces, `'unsafe-inline'`, or experimental Subresource Integrity (SRI).
It has no App Router option to omit the runtime.

## Options measured

Each option was measured on the homepage at 390 px with the CPU slowed 4× in
Chromium, using a production build served by `next start`:

| Option                           | Static? | Script downloaded                      | Script CPU | Main-thread total | Console                                                    |
| -------------------------------- | ------- | -------------------------------------- | ---------- | ----------------- | ---------------------------------------------------------- |
| `script-src 'self'` (before)     | Yes     | 145 KB                                 | ~5 ms      | ~197 ms           | 2–4 inline-script CSP errors, React #412                   |
| Experimental SRI + `'self'`      | Yes     | 145 KB                                 | as before  | as before         | unchanged: inline payload still blocked, #412              |
| `'self' 'unsafe-inline'`         | Yes     | 145 KB, plus route prefetches          | ~75 ms     | ~310 ms           | clean                                                      |
| Nonce via `proxy.ts`             | **No**  | not built (rejected on rendering mode) | —          | —                 | —                                                          |
| **`script-src 'none'`** (chosen) | Yes     | **0 KB**                               | **0 ms**   | **~117 ms**       | one "Loading the script … violates" per script tag (10–12) |

Why the others fall short:

- **SRI** hashes only external chunks. Next's source
  (`server/app-render/use-flight-response.js`, `createInlinedDataReadableStream`)
  gives inline flight scripts a nonce and never a hash. Tested: no change.
- **Per-route script hashes** would need a second build to feed `headers()`,
  and any non-deterministic payload would break it. Rejected as fragile.
- **A nonce** makes every page dynamically rendered: no CDN caching, a
  function call per request. That contradicts ADR-0002. Rejected.
- **`'unsafe-inline'`** makes hydration work, but only to run a runtime the
  site does not use. It is the slowest option on low-end phones, it lets any
  injected inline script run, and it turns on `next/link` prefetching of other
  routes over mobile data. Rejected.

## Decision

Production uses `script-src 'none'`. Development keeps `'self' 'unsafe-eval'`
for `next dev`.

The browser refuses every script tag before fetching it, so the runtime is
never downloaded or run. The `WebSite` JSON-LD block is a data block: it is
never executed, so it is unaffected.

`tests/unit/no-client-javascript.test.ts` enforces three things:

- the production policy has exactly one script directive, `script-src 'none'`;
- no directive names a third-party origin;
- no file in `app/`, `components/` or `lib/` starts with `"use client"`. Such
  a component would be silently disabled by this policy.

## Consequences

- **Page weight.** The homepage at 390 px on a 2.75× phone transfers 292 KB
  after a full scroll, down from 437 KB. At 1440 px it transfers 201 KB, down
  from 346 KB.
- **LCP** at slow 4G with the CPU slowed 4×, measured against localhost:
  - `/` goes from 844 to 784 ms;
  - `/how-it-works`, `/for-sellers` and `/about` go from about 730 to about
    570 ms.
- **React #412 is gone**, and so is the inline-execution CSP error.
- **The console still shows CSP violations**, now "Loading the script …
  violates … script-src 'none'", once per script tag Next emits. **This is
  accepted.** Visitors never see it, and it is the cost of Next.js always
  emitting script tags for App Router pages. It must not be treated as a
  regression.
- **Navigation is ordinary full page loads.** It already was, because
  hydration never succeeded.
- **Adding interactivity** needs a new decision: a Client Component, analytics,
  a video player script or a form. The test above fails first, so this cannot
  happen silently.
- **Third-party scripts** stay blocked, including the Cloudflare Web Analytics
  beacon that Cloudflare injects on the proxied apex and `www`. That beacon
  also conflicts with ADR-0007. Turning it off is a Cloudflare setting, and
  the owner's steps are in `docs/reviews/mr-1-acceptance.md`.

## Alternatives considered

The table above covers SRI, `'unsafe-inline'`, a nonce and per-route hashes.
Also rejected:

- **Stripping `<script>` tags from `.next` output after the build.** It is
  unsupported and would break silently on a Next.js upgrade.
- **Static export plus post-processing.** It changes the hosting model and the
  image pipeline.

## Reconsideration conditions

Revisit this decision if any of the following happens:

- the site needs a real client interaction;
- Next.js offers a supported way to omit the App Router runtime, or to hash
  inline payloads for static pages;
- a browser starts fetching CSP-refused scripts;
- console noise becomes a practical problem, such as a monitoring tool that
  counts CSP reports.
