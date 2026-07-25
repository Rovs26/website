# ADR-0002: Rendering strategy

## Status

Accepted.

## Context

The public website is primarily informational and must be fast, indexable, resilient, and inexpensive to operate. WEB-0 and WEB-1 do not require authenticated state, a website backend, personalized responses, or browser-side application state. Unnecessary hydration would add performance and maintenance costs without user benefit.

## Decision

Use React Server Components by default and statically render routes wherever practical. Keep page content, layout, metadata, and non-interactive primitives on the server. Add a Client Component only when a specific interaction requires browser APIs, event handling, or local interactive state, and keep that client boundary as small as possible.

Do not introduce dynamic rendering, runtime data fetching, a website backend, or private build-time data unless a later approved requirement demonstrates the need. Prefer semantic HTML and native browser behavior over JavaScript.

## Rationale

Static Server Component output minimizes shipped JavaScript, improves cacheability and resilience, supports search engines and assistive technology, and matches the current informational scope. Small, explicit client boundaries make hydration costs and accessibility risks easier to review.

## Consequences

- New routes are expected to build as static output unless their documented requirements prove otherwise.
- Interactive components must justify their client boundary and remain keyboard- and screen-reader-accessible.
- Content needed at build time must be available without private runtime services.
- Features that depend on personalization, live user data, or mutations are out of scope until separately approved.
- Production build output should be reviewed for unexpected dynamic routes and client bundles.

## Alternatives considered

- **Client-side rendering by default:** Rejected because it would add avoidable JavaScript and delay meaningful content.
- **Dynamic server rendering by default:** Rejected because the current site does not need request-time computation.
- **Static HTML without React or Next.js:** Efficient, but would abandon the approved framework and its component, metadata, and routing conventions.
- **Broad client-side state management:** Rejected because there is no current state-management requirement.

## Conditions requiring reconsideration

Reconsider this decision when an approved feature requires request-specific content, authentication, user input, frequently changing authoritative data, localization that cannot be built statically, or another capability that static Server Components cannot satisfy. Any change must document its privacy, security, caching, accessibility, SEO, and client-bundle effects.
