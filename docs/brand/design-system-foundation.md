# KitaMo Design System Foundation

Status: **WEB-1 implementation; visual approval required**

Reviewed: 2026-07-25

This document describes the small foundation implemented for WEB-1. It is not a
final cross-platform brand guide or a general-purpose component library. Brand
evidence and confidence are recorded separately in
`docs/brand/brand-source-inventory.md`.

## Brand principles

The foundation should feel:

- honest before persuasive;
- warm and approachable without appearing casual or unfinished;
- practical for Filipino micro-business contexts without relying on
  stereotypes;
- professionally made without luxury excess;
- calm, legible, and restrained;
- transparent about current, testing, planned, and future product states.

Visual polish must never compensate for missing evidence or make a future
capability look available.

## Visual direction

The current WEB-1 direction uses cream page backgrounds, white and muted
surfaces, dark charcoal-green text, forest-green actions, warm gold accents,
and a restrained coral focus color. Rounded surfaces and soft shadows provide
separation without heavy decoration.

This direction is **provisional**. It is derived from current Android and Play
release rasters and from the WEB-1 brief, not from an approved public-web token
specification. The Android application’s implemented `Gabi` design system uses
a materially different violet-and-gold direction. Neither source silently
overrides the other.

## Approved, current working, and provisional decisions

| Area                                           | Classification            | WEB-1 decision                                                                        |
| ---------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------- |
| Product spelling `KitaMo`                      | Current working evidence  | Preserve casing in the foundation; public-web identity approval is still required.    |
| Eye-and-growth-arrow release raster            | Current working evidence  | Reuse the unmodified Play icon through a wrapper. Do not redraw it.                   |
| Forest, gold, cream, charcoal, coral direction | Provisional               | Use only through replaceable semantic variables.                                      |
| Exact color values                             | Provisional               | Retain until approved or replaced after contrast review.                              |
| System font stack                              | Provisional safe fallback | Avoid external requests until web font approval, licensing, and delivery are settled. |
| Rounded surfaces and soft shadows              | Provisional               | Keep controlled and tokenized.                                                        |
| Product-status wording                         | Governance foundation     | Keep the four exact controlled labels unless an extension decision is approved.       |
| WCAG 2.2 Level AA                              | Design target             | Do not claim certification or full conformance.                                       |

No visual asset or exact website token is recorded as permanently approved.

## Token architecture

`app/globals.css` is the source of semantic WEB-1 tokens. Components consume
Tailwind utilities mapped to `--km-*` custom properties. Raw palette values do
not appear in reusable components. The metadata theme color is the one
intentional duplication because browser metadata cannot consume a CSS custom
property.

### Color tokens

| Semantic role             | Variable                         | Current provisional value | Intended use                      |
| ------------------------- | -------------------------------- | ------------------------- | --------------------------------- |
| Page background           | `--km-color-page`                | `#fbf7ed`                 | Document background               |
| Elevated surface          | `--km-color-surface`             | `#ffffff`                 | Cards and header                  |
| Muted surface             | `--km-color-muted`               | `#f2ecdf`                 | Quiet notices and hover surfaces  |
| Primary text              | `--km-color-text`                | `#17251d`                 | Main copy and headings            |
| Secondary text            | `--km-color-text-secondary`      | `#526057`                 | Supporting copy                   |
| Border                    | `--km-color-border`              | `#d9d0be`                 | Normal boundaries                 |
| Strong border             | `--km-color-border-strong`       | `#a99f8c`                 | Secondary controls                |
| Primary action            | `--km-color-action`              | `#006b3c`                 | Primary controls and links        |
| Primary action hover      | `--km-color-action-hover`        | `#004e2c`                 | Hover state                       |
| Primary action foreground | `--km-color-action-foreground`   | `#ffffff`                 | Text on actions                   |
| Accent                    | `--km-color-accent`              | `#e3a008`                 | Restrained emphasis and selection |
| Accent foreground         | `--km-color-accent-foreground`   | `#2c2100`                 | Text on accent                    |
| Focus indicator           | `--km-color-focus`               | `#b33c26`                 | Global focus outline              |
| Success                   | `--km-color-success`             | `#17643e`                 | Success semantics                 |
| Warning                   | `--km-color-warning`             | `#805000`                 | Warning semantics                 |
| Information               | `--km-color-info`                | `#185b84`                 | Information semantics             |
| Destructive               | `--km-color-destructive`         | `#a5322a`                 | Destructive semantics             |
| Disabled background       | `--km-color-disabled`            | `#e2ddd2`                 | Disabled controls                 |
| Disabled foreground       | `--km-color-disabled-foreground` | `#706d66`                 | Disabled labels                   |

Information and warning soft-surface variables provide accessible notice
backgrounds. Each product status has separate semantic background, border, and
text variables so status presentation can change without changing its wording.

### Contrast evidence

Browser-computed checks at a 360×800 viewport measured:

| Pair                                         | Contrast |
| -------------------------------------------- | -------: |
| Primary body text on page                    |  14.88:1 |
| Secondary text on page                       |   6.19:1 |
| White primary-action text on forest green    |   6.63:1 |
| Available Today text on its status surface   |   7.25:1 |
| Currently Testing text on its status surface |   8.08:1 |
| Planned text on its status surface           |   7.83:1 |
| Future Vision text on its status surface     |   8.50:1 |

These measurements cover current pairings, not every future component or state.
Every token change requires a new contrast review.

### Typography tokens and rules

- Body and display currently use the same system stack:
  `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
"Segoe UI", sans-serif`.
- No font file or external font request is introduced.
- Font synthesis is disabled to avoid invented weights.
- Supported weights are regular 400, medium 600, bold 700, and extra-bold 800.
- Display sizes use fluid `clamp()` values with controlled line height and
  letter spacing.
- Heading level is selected semantically through `Heading.level`; visual size
  is selected independently.
- The maximum reading width is 44rem.
- Body copy uses comfortable line height and must remain readable at zoom.

Plus Jakarta Sans and Bricolage Grotesque are current Android evidence only.
Their web licensing, hosting method, loading behavior, and cross-platform
approval remain unresolved.

### Layout and spacing tokens

| Role                | Token or rule                                                       |
| ------------------- | ------------------------------------------------------------------- |
| Reading width       | `--km-width-reading: 44rem`                                         |
| Content width       | `--km-width-content: 72rem`                                         |
| Wide preview width  | `--km-width-wide: 82rem`                                            |
| Page gutters        | `clamp(1rem, 4vw, 2rem)`                                            |
| Section spacing     | `clamp(3.5rem, 9vw, 7.5rem)`                                        |
| Component spacing   | `clamp(1rem, 2vw, 1.5rem)`                                          |
| Small mobile floor  | `20rem` document minimum                                            |
| Responsive behavior | Mobile-first Tailwind breakpoints; no component-specific JavaScript |

`Container`, `Section`, `Stack`, and `Cluster` own these layout patterns.
Components must not assume a desktop width.

### Shape, border, and shadow tokens

- Control radius: `0.875rem`
- Surface radius: `1.25rem`
- Status radius: pill/`999px`
- Minimum control height: `2.75rem` or 44px
- Default border: 1px
- Soft shadow: low-opacity surface separation
- Raised shadow: reserved for focusable overlays such as the skip link

Radii and shadows are controlled, not decorative defaults for every element.

### Motion tokens and rules

- Fast duration: 120ms
- Standard duration: 200ms
- Standard easing: `cubic-bezier(0.2, 0, 0, 1)`
- Motion is limited to state transitions such as color and skip-link movement.
- No decorative animation is present.
- A global `prefers-reduced-motion: reduce` rule disables smooth scrolling,
  reduces transition and animation duration to 0.01ms, and limits animation
  iteration.

Do not add animation libraries during this milestone.

## Component inventory

### Brand

- `BrandMark` — fixed-size Next.js image wrapper for the current release raster;
  the image is decorative when adjacent `KitaMo` text is present and meaningful
  when used alone.

### Layout

- `Container` — page gutter and width boundary.
- `Section` — semantic section with compact or default vertical spacing.
- `Stack` — vertical flow with controlled gaps.
- `Cluster` — wrapped horizontal grouping.
- `PageShell` — skip link, temporary non-navigation header, and main landmark.

### Typography and interaction

- `Heading` — explicit semantic levels 1–4 with independent visual sizes.
- `Text` — paragraph, small, or span with primary/secondary tone.
- `Button` — native button with safe `type="button"` default, three controlled
  visual treatments, native disabled behavior, and a 44px minimum target.
- `StyledLink` — native anchor semantics with text, primary, or secondary
  treatment.
- `SkipLink` — first focusable control targeting `#main-content`.

### Surfaces

- `Card` — optional `article` semantics with restrained border and shadow.
- `Notice` — labelled `aside` with neutral, information, or warning tone.
- `Divider` — native horizontal-rule semantics.

### Product status

- `ProductStatus` — typed component that accepts only `available`, `testing`,
  `planned`, or `future`; it always renders the controlled visible label and an
  assistive prefix, with an optional concise explanation.

The APIs are intentionally narrow. No barrel exports, polymorphic enterprise
API, component framework, or variant generator is included.

## Product-status pattern

| Key         | Visible label     | Meaning                                                                                      |
| ----------- | ----------------- | -------------------------------------------------------------------------------------------- |
| `available` | Available Today   | Implemented, verified, usable in an approved release, and approved for public communication. |
| `testing`   | Currently Testing | Exists in a limited internal, invited, pilot, or controlled testing environment.             |
| `planned`   | Planned           | Accepted into the roadmap but not currently available.                                       |
| `future`    | Future Vision     | A directional possibility that may change and is not a delivery commitment.                  |

Color provides supporting tone only. The visible wording and assistive
`Product status:` prefix carry the meaning. Arbitrary public status names are
not accepted by the component type.

## Accessibility requirements

- Target WCAG 2.2 Level AA without claiming certification.
- Use one main landmark and logical heading order.
- Keep the skip link first in focus order.
- Preserve the global 3px focus indicator with 3px offset.
- Keep primary controls at least 44px high; inline text links use the WCAG text
  exception and must remain clearly distinguishable.
- Provide native accessible names and semantics.
- Never communicate product status through color alone.
- Keep meaningful images labelled and adjacent-brand images decorative.
- Preserve zoom, wrapping, readable line length, and no horizontal overflow.
- Preserve reduced-motion behavior.

See `docs/reviews/accessibility-baseline.md` for tested evidence and limits.

## Responsive behavior

The foundation uses mobile-first grids and wrapped clusters. Browser checks
found no horizontal overflow at 360×800 or 1440×900. At 360px, color and status
cards collapse into readable columns and action clusters wrap. At 1440px, the
color list uses five columns and the status list uses two. No responsive
behavior depends on client JavaScript.

## Image and logo rules

- Reuse `public/brand/kitamo-app-icon.png` without alteration. Its SHA-256
  matches the inspected Play icon source.
- Render through `next/image` with explicit dimensions.
- Do not crop, recolor, redraw, trace, or convert it into an invented vector.
- Do not infer clear-space, lockup, or minimum-size rules that were not found.
- Do not publish internal QA screenshots or draft store imagery.
- A transparent, monochrome, reversed, horizontal, and small favicon set remain
  missing.

## Icon rules

- No icon package is installed.
- Prefer text and native semantics when an icon does not materially improve
  comprehension.
- A future icon must have an accessible name when it performs an action.
- Decorative icons must be hidden from assistive technology.
- Never use an icon or color as the only signal for status, warning, or action.
- Avoid unrelated sibling assets, including the internal Admin favicon.

## Acceptable usage

- Use semantic utilities such as `bg-surface`, `text-secondary`, and
  `border-border`.
- Choose `<Heading level={2} size="large">` according to document structure,
  not appearance alone.
- Use `<ProductStatus status="testing" />` when an approved claim is explicitly
  in controlled testing.
- Compose `Card`, `Stack`, and type primitives instead of adding a wide prop
  matrix.
- Keep limitations adjacent to the claim they qualify.

## Unacceptable usage

- Hard-code raster-sampled colors inside components.
- Describe the provisional palette or system font as the official brand.
- Add arbitrary product-status labels or hide the status in a tooltip.
- Use a button for navigation or an anchor for an in-place action.
- remove focus outlines, rely on hover, or make disabled state opacity-only.
- Add an icon, animation, framework, font, or dependency only for decoration.
- Use the release feature-graphic tagline as approved website copy.

## Outstanding approval questions

1. Which public visual direction governs the website: release green/gold, Gabi
   violet/gold, or a documented reconciliation?
2. What is the authoritative logo master and which website variants are
   permitted?
3. Which exact palette and accessible pairings are approved?
4. Are Plus Jakarta Sans and Bricolage Grotesque approved and licensed for
   locally hosted web use?
5. Is the release-candidate tagline approved, revised, or rejected for web?
6. What are the approved public domain, legal identity, and support identity?
7. Which screenshots or product images may be published?
8. Is the four-state product-status presentation approved for later pages?

Do not promote provisional choices to approved status without recording the
decision and updating the source inventory and ADR-0003.
