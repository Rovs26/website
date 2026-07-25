# ADR-0005: Accessibility baseline

## Status

Accepted.

## Context

KitaMo serves a broad public audience across devices and abilities. Accessibility must be a design and engineering constraint from the foundation rather than a later remediation exercise. The website does not yet have evidence supporting a formal conformance claim.

## Decision

Target WCAG 2.2 Level AA for design, content, implementation, and verification. Use semantic HTML, logical headings and landmarks, keyboard-operable interactions, visible focus, a functional skip link, accessible names, sufficient contrast, responsive text and layout, reduced-motion support, and non-color status cues.

Test important foundational behavior with a combination of automated checks and manual keyboard, screen-reader-oriented semantic, viewport, contrast, zoom, and reduced-motion review. Do not claim WCAG conformance publicly until the completed site has been audited with appropriate evidence.

## Rationale

WCAG 2.2 AA is a current, testable baseline that covers many of the barriers likely to affect the site. Building accessible primitives and tokens now reduces recurring defects and makes later pages safer to assemble. Manual review remains necessary because automated tools cannot establish full conformance.

## Consequences

- Accessibility criteria apply to component APIs, tokens, content, and page composition.
- Interaction must work without a pointer and without relying on color, animation, or visual position alone.
- Provisional colors cannot be adopted without contrast evidence.
- Accessibility defects block completion when they prevent essential use.
- Verification records must distinguish tested evidence from assumptions.
- Meeting the target does not, by itself, authorize a public certification or conformance claim.

## Alternatives considered

- **WCAG 2.1 Level AA:** Rejected as the primary target because WCAG 2.2 adds relevant current criteria.
- **Level A only:** Rejected because it leaves significant common barriers unaddressed.
- **Level AAA for every criterion:** Not adopted as a blanket requirement because some AAA criteria are not practical for all public content, though individual AAA techniques may still be used.
- **Automated testing only:** Rejected because it cannot evaluate all semantics, workflows, contrast contexts, or usability.
- **Accessibility review after page completion:** Rejected because foundational defects would be repeated across later work.

## Conditions requiring reconsideration

Reconsider this baseline if applicable Philippine law, another binding jurisdiction, procurement rules, or an approved organization policy requires a stricter standard; if W3C guidance is superseded; or if user research identifies needs not adequately covered by the current verification plan. Changes may strengthen but must not silently weaken the baseline.
