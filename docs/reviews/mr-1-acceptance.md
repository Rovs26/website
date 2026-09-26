# MR-1 acceptance: web-first marketing site

Date: 2026-09-26 · Branch: `feat/marketing-redesign` ·
Decision: [ADR-0012](../decisions/ADR-0012-web-first-marketing.md)

## What changed

**Positioning**

All four routes now sell the web app at `app.kitamo.online`:

- every page has one primary **Create free account** action;
- **Sign in** is secondary everywhere;
- the Android pilot appears only as **Currently Testing**, "not yet
  available".

**Design**

The design is direction 1b, "Counter and resibo", from Claude Design
(`docs/redesign/marketing-round-3/`), built with:

- the web app's Ledger tokens;
- the K mark;
- self-hosted Schibsted Grotesk.

**Images**

- Nine flat screen plates from the web app's Ledger design, in
  `public/plates/`.
- Two captioned AI illustrations with the exact screens fitted in, in
  `public/marketing/`.
- A share image, in `public/og/`.

**Metadata**

- A canonical for each route. This fixes the old root canonical that pointed
  every page at `/`.
- Open Graph and Twitter tags with the share image.
- A `WebSite` JSON-LD object.
- A favicon, an app icon and an Apple touch icon.
- A sitemap line in `robots.txt`.

**Governance**

- CLM-012 to CLM-026 were added. The Android claims are re-scoped.
- MR-1 sections were added to the terminology register and the page-claim
  matrix.
- A new content contract supersedes the WEB-3 and WEB-4 contracts.
- `README.md` and `AGENTS.md` were updated.

**Removed**

- the Android eye icon;
- the record-flow illustration;
- the testing-status link and its homepage section.

## Checks run

| Check                             | Result                                                                                                                       |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `npm run check`                   | Exit 0: format, lint, typecheck, 54 tests, dependency tree, production build (all routes static)                             |
| `npm run audit`                   | 0 vulnerabilities                                                                                                            |
| `git diff --check`                | Clean                                                                                                                        |
| Link targets                      | `app.kitamo.online/login`, `/login?bago=1`, `/privacy`, `/terms`, `/support`: all HTTP 200                                   |
| Third-party requests              | None on any route or size; production CSP is `script-src 'none'` (ADR-0013)                                                  |
| Horizontal scroll                 | None at 1440, 853, 390 and 640 px (200% zoom of 1280)                                                                        |
| Font                              | Schibsted Grotesk loads (`document.fonts.check`)                                                                             |
| Keyboard                          | FAQ reachable by Tab and opens with Enter; mobile Menu opens with Enter and marks the current page                           |
| Focus                             | 3 px `#1d4ed8` ring with a 2 px white inner ring                                                                             |
| Reduced motion                    | The receipt rule has no animation; otherwise the CSS scroll-driven draw-in runs                                              |
| Weight, homepage, 390 px at 2.75× | 292 KB after a full scroll: images 221, font 46, document 15, CSS 10, **script 0** (was 437 KB with 145 KB script; ADR-0013) |
| Weight, homepage, 1440 px         | 201 KB (was 346 KB)                                                                                                          |
| LCP, slow 4G + 4× CPU, 390 px     | `/` 784 ms, `/how-it-works` 572 ms, `/for-sellers` 572 ms, `/about` 568 ms (localhost origin)                                |
| Share tags                        | `og:image`, `twitter:image` and a per-route `og:url` and canonical on all four routes                                        |

The screenshots are in [`screenshots/mr-1/`](screenshots/mr-1/). They cover
every route at 1440 × 900, 853 × 477 and 390 × 844, plus the homepage formula
and counter bands.

## Script policy and console (ADR-0013)

**Before.** `script-src 'self'` blocked Next.js's inline payload but let its
runtime download. Each page:

- fetched and parsed about 145 KB of script that could never hydrate;
- logged inline-script CSP errors;
- threw React error #412.

The live site behaved identically.

**Now.** Production sends `script-src 'none'`. A Playwright console check
against `npm run start` on all four routes and a 404 found:

- script bytes: 0;
- React #412: none;
- third-party requests: none;
- menu, FAQ and JSON-LD: all present.

**Accepted.** The console shows one "Loading the script … violates …
script-src 'none'" message per script tag Next emits, 10 to 12 per page.
Visitors never see these. They are the expected result of blocking a runtime
the site does not use, and must not be treated as a regression.

`tests/unit/no-client-javascript.test.ts` fails if the policy changes or a
`"use client"` file appears.

## Other known issues

- **The playwright full-page captures show the skip link mid-page.** This is a
  capture artifact. In a real browser the link sits fully above the viewport
  until focused; it was measured with `getBoundingClientRect`.

## Owner action: turn off Cloudflare Web Analytics

**Done 2026-09-26.** The owner set **Web analytics → Manage site → Real User
Measurements (RUM)** to **Disable** for `kitamo.online`. Verified the same day:

- six browser user-agent requests to `kitamo.online` and `www.kitamo.online`
  contained no `cloudflareinsights` tag, where one had been present before;
- a Chromium load of `/` and `/about` showed no beacon tag, no request to
  `static.cloudflareinsights.com` and no related console message.

The steps below are kept for reference.

**What happens now.** Cloudflare's edge adds this to HTML sent to browsers on
the proxied `kitamo.online` and `www.kitamo.online`:

```html
<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js/…" data-cf-beacon='{"version":"2024.11.0","token":"…","r":1,"spa":2}'>
```

- The CSP blocks it, so no data is sent today.
- It is still a data-collection feature switched on for a site whose policy
  is zero collection (ADR-0007). It should be off at the source.
- `app.kitamo.online` is DNS-only, served straight from Vercel, and does not
  get the beacon.
- Plain `curl` requests don't get it either. Cloudflare injects it only for
  browser user agents.

**Steps in the Cloudflare dashboard.** No code, DNS or deploy change is
involved. Labels may differ slightly as Cloudflare revises its dashboard.

1. Sign in at `dash.cloudflare.com` and open the account that holds
   `kitamo.online`.
2. Open **Analytics & Logs → Web Analytics** (account level) and find
   `kitamo.online` in the site list.
3. Open that site's settings (**Manage site** or **Edit**).
   - Where it offers automatic setup, the JS snippet or injection for the
     proxied site, choose **Disable**. That stops the edge from adding the
     beacon.
   - **Delete site** also stops it, but it permanently deletes the
     analytics already collected. Choose it only if you don't want that data.
4. The tag's `"r":1` means Real User Measurements are on. Open the
   `kitamo.online` zone → **Speed → Observatory**. If **Real User Measurements
   (RUM)** is enabled, turn it off; it uses the same beacon.
5. Check the zone's **Web Analytics** entry again, and confirm it no longer
   shows automatic setup as enabled.

**Verify.** After a minute or two, fetch the page as a browser. The command
should print `0`:

```bash
curl -s -H 'User-Agent: Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Mobile Safari/537.36' -H 'Accept: text/html' --compressed https://kitamo.online/ | grep -c cloudflareinsights
```

## Open before publishing

1. **Launch gate (ADR-0012).** Deploy once the web app's Ledger build is live
   at `app.kitamo.online`. The pictured screens match that build.
2. **The owner's final read of the copy** in the MR-1 content contract.
3. **Search Console.** Submit the sitemap after deploy, and check the share
   preview in Facebook's sharing debugger.
