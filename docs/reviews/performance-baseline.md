# WEB-1 Performance and Dependency Baseline

Status: **Foundation review complete**

Reviewed: 2026-07-25

This baseline documents the measured and inspected WEB-0/WEB-1 foundation. It
does not claim a Lighthouse score or production readiness.

## Rendering approach

- Next.js App Router with React Server Components by default.
- Static rendering wherever practical.
- No backend, database, authentication, CMS, analytics, tracker, cookie,
  external embed, or private environment dependency.
- Native metadata and robots output.
- Native `next/image` handling for the single current brand raster.
- CSS media queries and mobile-first layout handle responsiveness without
  client state.

The production build reported:

```text
○ /
○ /_not-found
○ /design-system
○ /robots.txt
```

All routes were reported as statically prerendered. The `/design-system`
artifact contains the production not-found result: an HTTP check against
`next start` returned 404. The root returned 200 and `robots.txt` disallowed
`/design-system`.

The temporary foundation metadata is also `noindex`, `nofollow`, and
`nocache` so an accidental preview deployment is not treated as final public
content.

## Client-component inventory

Authored Client Components: **0**

A source scan found no `"use client"` directive in `app/`, `components/`, or
`lib/`. Buttons and links use native HTML without application state. The
product-status and layout systems are server-renderable.

Next.js still emits its framework routing/runtime scripts and the client support
needed by `next/image`; “zero authored Client Components” does not mean zero
browser JavaScript. No application interaction bundle, state library, animation
library, analytics SDK, or third-party widget was added.

## Dependency summary

Production dependencies:

- `next` 16.2.11
- `react` 19.2.6
- `react-dom` 19.2.6

Development dependencies are limited to Tailwind/PostCSS, strict TypeScript
types and compiler, ESLint with Next rules, Prettier with Tailwind ordering, and
Vitest. No component framework, icon package, browser test framework, client
state library, schema library, backend client, font package, or utility library
was added.

The npm lockfile is committed and npm is the evidenced workspace standard.

### Advisory review

The initial install exposed high-severity production findings in Next.js and
its bundled PostCSS/image-processing dependencies. The foundation moved to
Next.js 16.2.11 and pins patched transitive versions through npm overrides:

- PostCSS 8.5.23
- Sharp 0.35.3

The production dependency review:

```text
npm audit --omit=dev
0 vulnerabilities
```

The updated app built successfully and the optimized brand image loaded in the
browser after those overrides.

The full audit still reports **9 high-severity development-only findings** in
the ESLint/Next lint plugin chain through `minimatch` and `brace-expansion`.
The registry proposes ESLint 10 or incompatible/downgraded config changes, but
the current Next accessibility and React plugins declare peer support only
through ESLint 9. Forcing the suggested change produced peer conflicts and was
reverted. Exposure is limited to trusted local/CI lint patterns; no affected
package is shipped to the browser or server production dependency set.

This residual toolchain risk is not dismissed. Recheck it when compatible
ESLint 10 support or patched plugin chains become available. Do not use
`npm audit fix --force`.

## Image strategy

- One 512×512, 207KB PNG is stored at
  `public/brand/kitamo-app-icon.png`.
- Its SHA-256 matches the inspected current Play icon source.
- `BrandMark` uses `next/image` with explicit width and height, preventing
  layout shift.
- Browser inspection showed the optimized image loaded successfully at its
  rendered size.
- No screenshots, stock photos, background images, autoplay media, video, or
  decorative illustration are included.

The source raster is larger than the 40px header rendering needs. It is retained
to avoid inventing or recompressing an unapproved brand asset; an approved web
export should replace it later.

## Font strategy

- The foundation uses the local system font stack.
- There are no external font requests, font packages, preload hints, or
  font-display delays.
- Display and body use the same provisional stack.
- Layouts must tolerate later metric changes if approved, locally hosted fonts
  are supplied.

This strategy avoids blocking font behavior and third-party font privacy
exposure during WEB-1.

## CSS and motion

- Tailwind CSS compiles only referenced utilities.
- Brand values are centralized in semantic CSS custom properties.
- The page background uses one lightweight CSS radial gradient rather than an
  image.
- No animation library or decorative animation exists.
- Small state transitions use 120ms/200ms tokens and respect
  `prefers-reduced-motion`.

## Browser and build findings

- 360×800: no horizontal overflow.
- 1440×900: no horizontal overflow.
- Root and internal preview: no browser console warnings or errors.
- Fixed image dimensions avoided observed layout shift.
- Build: compiled successfully, strict TypeScript passed, five static pages were
  generated, and no metadata, image, or font warning was reported.
- The initial sandboxed build could not start an internal CSS worker because
  port binding was restricted. The same command succeeded outside that
  restriction; this was an execution-environment limit, not an application
  warning.
- `turbopack.root` is explicitly scoped to this repository to avoid the parent
  machine’s unrelated lockfile being inferred as the workspace root.

## Known performance risks

- No Lighthouse, WebPageTest, or real-user measurement exists yet.
- Framework runtime JavaScript remains even with zero authored Client
  Components.
- The release icon source is oversized for its current header use.
- A future approved web font can introduce requests, blocking, or layout shift.
- Later imagery, navigation, forms, analytics, or third parties can materially
  change the budget.
- Dependency overrides require review on every Next.js update so they do not
  outlive upstream compatibility.
- Development lint tooling retains the documented advisory chain.
- No slow-network, low-end Android browser, CPU-throttling, or cache-warm/cold
  benchmark was performed.

## Deferred to WEB-6

- Establish route-level JavaScript, CSS, image, and font budgets.
- Run Lighthouse and another independent lab profile on final representative
  pages without turning the score into a guarantee.
- Test low-end mobile CPU, slow network, cache behavior, and layout stability.
- Inspect final route chunks and hydration after navigation and interaction are
  implemented.
- Replace or derive approved, right-sized responsive image assets.
- Review any approved font files and preload only when evidence supports it.
- Re-run production and full dependency audits and resolve compatible upstream
  lint fixes.
- Measure Core Web Vitals in an approved privacy-preserving production
  approach, if later authorized.

No WEB-1 result should be described as a performance score or production
readiness claim.
