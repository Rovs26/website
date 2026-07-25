# ADR-0003: Styling and design tokens

## Status

Provisional.

The technical token strategy is adopted for the foundation. The palette, font choices, logo treatment, and broader brand direction are not accepted brand decisions and require authoritative evidence or explicit approval.

## Context

WEB-1 needs a coherent, accessible styling foundation before an authoritative KitaMo brand system has been confirmed. Components must be easy to update after brand review, and raw visual values must not become scattered implementation dependencies. The site also needs a low-JavaScript, responsive approach compatible with the selected framework.

## Decision

Use Tailwind CSS 4 with semantic CSS custom properties as the source of design intent. Components will consume semantic roles such as background, surface, foreground, muted text, border, focus, and status tones rather than embedding brand-specific raw colors.

Use an accessible provisional palette only where an approved palette is unavailable. Record contrast evidence and keep status meaning visible in text and semantics rather than color alone. Use a performance-conscious system font stack until an approved font and its licensing, loading, and performance implications are verified.

Treat all current palette values, font choices, logo treatment, and brand-direction choices as provisional. Do not infer approval from an unapproved mockup or from their presence in source code.

## Rationale

Tailwind CSS 4 supports a concise responsive implementation, while semantic CSS variables separate component meaning from replaceable visual values. This combination lets later brand approval change a small token layer instead of every component. A system font avoids external requests and loading instability while typography remains unresolved.

## Consequences

- Components should not scatter raw color values or bind their APIs to provisional color names.
- Token changes can update the visual system without rewriting component structure.
- Provisional tokens still require documented contrast checks before use.
- Typography may change after approval, so layouts must tolerate reasonable metric differences.
- No current visual choice may be described publicly or internally as final brand approval.
- Tailwind utility usage should remain readable and should not replace semantic component ownership.

## Alternatives considered

- **Hard-coded colors in components:** Rejected because it would make brand review costly and inconsistent.
- **A third-party component framework:** Rejected because it would add dependency weight and impose an unapproved visual language.
- **CSS Modules only:** Viable, but less aligned with the required Tailwind foundation; semantic variables would still be necessary.
- **An externally hosted brand font now:** Deferred because approval, licensing, privacy, and performance have not been established.
- **Treating colors from current mockups as approved:** Rejected because visual appearance alone is not authoritative evidence.

## Conditions requiring reconsideration

Reconsider and supersede the provisional portions when an authorized brand source approves a palette, typography, logo rules, or design language. Reconsider the technical approach if Tailwind or the token layer prevents required accessibility, creates material build or maintenance costs, or conflicts with an approved cross-product design system.
