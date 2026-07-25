# WEB-1 Accessibility Baseline

Status: **Foundation review complete; not a conformance claim**

Reviewed: 2026-07-25
Design target: WCAG 2.2 Level AA

This review covers the WEB-0/WEB-1 foundation and development-only
design-system preview. It does not certify conformance and does not replace the
full WEB-6 audit.

## Checks completed

| Area                    | Result                             | Evidence                                                                                                                          |
| ----------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Page language           | Pass                               | Root document declares `lang="en"`.                                                                                               |
| Landmarks               | Pass                               | One labelled banner and one main landmark; preview sections are labelled by headings.                                             |
| Heading structure       | Pass                               | Root has one H1. Preview follows H1 → H2 → H3 without skipped levels.                                                             |
| Skip navigation         | Pass                               | First link targets `#main-content`; focused link moves into the viewport.                                                         |
| Keyboard focus          | Pass                               | Global 3px solid focus outline with 3px offset was visible on skip link and primary button.                                       |
| Native semantics        | Pass                               | Buttons render as buttons; navigation renders as anchors; dividers render as `hr`; notices use labelled `aside`.                  |
| Accessible names        | Pass                               | DOM snapshot exposed clear names for links, buttons, header, notices, and sections.                                               |
| Button safety           | Pass                               | Button defaults to `type="button"` and preserves native `disabled`.                                                               |
| Product status          | Pass                               | Every status has controlled visible wording and an assistive `Product status:` prefix; color is supporting only.                  |
| Touch target            | Pass for primary controls          | Buttons and button-styled links measured 44px high; skip link measured 48px.                                                      |
| Color contrast          | Pass for measured foundation pairs | All measured normal-text pairs exceed 4.5:1.                                                                                      |
| Small viewport          | Pass                               | No horizontal overflow at 360×800.                                                                                                |
| Desktop viewport        | Pass                               | No horizontal overflow at 1440×900.                                                                                               |
| Readable line length    | Pass                               | Reading width is limited to 44rem.                                                                                                |
| Reduced motion          | Pass by code inspection            | `prefers-reduced-motion: reduce` disables smooth scrolling and reduces transitions/animations.                                    |
| Image alternatives      | Pass for current use               | Adjacent textual `KitaMo` makes the release icon decorative with empty alt text; wrapper supports meaningful alt when used alone. |
| Browser console         | Pass                               | No error or warning entries during root and preview review.                                                                       |
| Production preview gate | Pass                               | `/design-system` returned HTTP 404 under `next start`.                                                                            |

## Tools and methods

- ESLint with Next.js Core Web Vitals, TypeScript, React, and JSX accessibility
  conventions.
- Strict TypeScript.
- Vitest server-rendered markup checks for status text, button type and disabled
  semantics, link semantics, skip link target, heading level, and temporary
  metadata/copy safety.
- In-app browser DOM snapshots for accessible roles, names, landmarks, heading
  structure, and native state.
- Browser-computed layout, focus, target-size, and contrast checks at 360×800
  and 1440×900.
- Source inspection of reduced-motion rules, fixed image dimensions, and
  semantic component APIs.
- Production HTTP checks for the internal preview boundary.

No automated accessibility score or formal certification was produced.

## Manual browser findings

### Keyboard and focus

- The skip link is the first meaningful focus target and becomes fully visible
  at 12px from the top after its 120ms transition.
- Its destination is the single `main` landmark.
- The skip link and primary button expose the provisional coral outline as a
  3px solid line with 3px offset.
- Disabled button semantics are exposed natively.
- The foundation contains no modal, menu, disclosure, form field, drag action,
  or custom keyboard widget.

### Responsive and zoom-resilient layout

- At 360×800, the document width and viewport width both measured 360px.
- At 1440×900, the document width and viewport width both measured 1440px.
- Wrapped action clusters preserve complete labels and do not require
  horizontal scrolling.
- Product-status explanations wrap inside their cards.
- The system font fallback removes font-swap instability.

Browser zoom at every increment was not exhaustively tested. Fluid sizes,
wrapping, rem-based dimensions, and the absence of fixed content heights reduce
risk but do not replace the WEB-6 zoom audit.

### Contrast measurements

| Pair                                    | Measured contrast |
| --------------------------------------- | ----------------: |
| Primary body text on page               |           14.88:1 |
| Secondary text on page                  |            6.19:1 |
| Primary button foreground on background |            6.63:1 |
| Available Today status                  |            7.25:1 |
| Currently Testing status                |            8.08:1 |
| Planned status                          |            7.83:1 |
| Future Vision status                    |            8.50:1 |

The focus outline is visually strong on the reviewed light surfaces. A
programmatic 3:1 non-text contrast sweep across every adjacent future color was
not performed.

## Automated test coverage

The focused tests cover:

- each controlled product-status label;
- accessible status text and optional explanation;
- safe button type and disabled behavior;
- native link and skip-link semantics;
- heading element selection independent of visual size;
- development-only preview decision logic;
- absence of selected promotional availability phrases;
- no-index metadata for the temporary foundation.

Tests intentionally avoid snapshots of full class strings and do not test
framework internals.

## Findings

No P0, P1, or P2 accessibility blocker was identified in the WEB-1 surface.
The foundation is suitable for the milestone approval gate with the limitations
below.

This finding is limited to the current static foundation. Later content,
navigation, forms, media, localization, dynamic states, and third-party
integrations can introduce new issues and require fresh review.

## Remaining risks

- The exact palette is provisional; approval changes can invalidate measured
  contrast.
- The current raster mark has no approved small-size or high-contrast variant.
- Inline text links use the WCAG target-size exception rather than a 44px box;
  dense future prose must preserve adequate spacing and differentiation.
- English is the only implemented document language. Filipino or Taglish
  content will require language, comprehension, and pronunciation review.
- No high-contrast/forced-colors mode treatment has been specifically authored.
- The skip-link transition was reviewed at the default motion preference;
  reduced-motion behavior was verified by code inspection, not OS emulation.

## Limitations

The baseline did not include:

- full NVDA, JAWS, VoiceOver, or TalkBack task testing;
- switch control, voice control, or keyboard-only testing across future pages;
- forced colors, Windows High Contrast, inverted colors, or custom user CSS;
- exhaustive 200% and 400% browser zoom matrices;
- every operating-system text scaling setting;
- color-vision simulation;
- automated axe, Accessibility Insights, or Lighthouse scoring;
- localization or right-to-left layout;
- cognitive walkthroughs with representative users.

## Deferred to WEB-6

- Run a page-by-page WCAG 2.2 AA audit after the final information architecture
  and content exist.
- Test representative screen readers and keyboard-only tasks.
- Test 200% and 400% zoom, reflow, text spacing overrides, forced colors, and
  device text scaling.
- Recalculate all token and state contrast after palette approval.
- Audit navigation, forms, errors, validation, media alternatives, and dynamic
  announcements introduced by later milestones.
- Define accessibility regression checks appropriate to the final routes.
- Record defects, owners, severity, remediation, and retest evidence.

The website may state only that it is being built toward WCAG 2.2 Level AA. It
must not claim certification or full conformance from this baseline.
