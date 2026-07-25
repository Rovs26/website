# ADR-0007: Data collection baseline

## Status

Accepted.

## Context

WEB-0 and WEB-1 require no personal information, behavioral analytics, account activity, or cross-site data. Adding collection before a defined purpose, notice, retention model, and governance review would create unnecessary privacy, security, legal, and trust obligations.

## Decision

Adopt a zero-data-collection and zero-tracking baseline for the website foundation.

Do not add analytics or advertising trackers, pixels, fingerprinting, session replay, third-party chat, newsletter or lead collection, account creation, embedded forms that collect personal information, tracking cookies, local-storage tracking, hidden telemetry, or unapproved external embeds. The foundation must build and operate without private visitor-data services.

Any proposed future collection requires explicit approval and a new or superseding decision that documents:

- purpose and necessity;
- the minimum data required;
- lawful basis, notice, and consent requirements;
- retention and deletion behavior;
- access controls and security;
- data recipients and third-party processing;
- user rights and request handling;
- accessibility and no-dark-pattern requirements; and
- verification and ongoing ownership.

Operational data that a hosting platform unavoidably processes must be evaluated separately before production deployment and must not be described as “no data processing” without evidence.

## Rationale

Collecting nothing is the safest and most honest default when the milestone has no collection requirement. It reduces exposure, avoids premature consent mechanisms, and preserves user trust while legal and privacy work remains scheduled for a later milestone.

## Consequences

- No analytics dashboard or visitor-level measurement is available during this foundation milestone.
- Site behavior cannot depend on cookies, local storage, visitor profiles, or personal submissions.
- Third-party resources need review for indirect requests, identifiers, logs, and tracking behavior.
- Future forms, analytics, embeds, or personalization cannot be introduced as minor implementation details.
- Privacy statements must accurately distinguish this application baseline from unavoidable, separately reviewed infrastructure processing.

## Alternatives considered

- **Privacy-focused analytics from launch:** Deferred because there is no approved measurement purpose or governance review.
- **Cookie-based analytics with a consent banner:** Rejected for this milestone because a banner does not establish necessity or minimize collection.
- **Anonymous or aggregate tracking by default:** Rejected because “anonymous” requires evidence and can still create processing and third-party obligations.
- **Newsletter or contact capture:** Deferred until purpose, ownership, retention, notice, and deletion processes are approved.
- **Session replay for usability research:** Rejected because its collection risk is disproportionate to the foundation scope.

## Conditions requiring reconsideration

Reconsider this baseline only when an approved business or user need cannot be met without collection and the required privacy, legal, security, accessibility, and operational reviews are complete. Production hosting must also trigger review if its actual processing conflicts with the assumptions recorded here.
