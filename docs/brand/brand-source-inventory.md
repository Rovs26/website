# KitaMo Brand Source Inventory

Status: **WEB-1 evidence review; approval required**

Evidence reviewed: 2026-07-25
Primary source snapshot: `../owner-seller-mobile` at
`6ed9ace3a92f7435f84c2f75f0084a03070ae2e4`
Supporting source snapshot: `../admin` at
`b9460858bf91cd5bf50536d469ff7106ce92b483`

This inventory records what the website may rely on, what it may use only as a
temporary working direction, and what remains unresolved. An asset being
configured or release-ready for the Android application does not by itself
approve that asset for the public website.

No secret-bearing files, generated release bundles, credentials, or private
operational data were inspected or recorded.

## Classification and confidence

| Classification  | Meaning in this inventory                                                                                            |
| --------------- | -------------------------------------------------------------------------------------------------------------------- |
| Approved        | Explicitly approved for public-web adoption within a recorded, narrow scope                                          |
| Current working | Used by the current Android product or its internal-testing release materials, but not approved for public-web reuse |
| Provisional     | A replaceable website foundation choice that may be used for WEB-1 only                                              |
| Missing         | Required evidence or an asset was not found                                                                          |
| Conflicting     | Current sources point in materially different visual directions                                                      |
| Approval needed | The Website Architect or Platform Master must make or record the decision                                            |

Confidence describes the strength of the source evidence, not publication
approval:

- **High** — directly configured or documented in the current product authority.
- **Medium** — present and relevant, but its intended public-web use or
  provenance is not explicit.
- **Low** — an inference or candidate direction that must remain replaceable.

## Approved assets

None found. The sources consistently establish the current product name and
casing, but they do not contain an explicit public-web brand approval record.
No product name treatment, visual logo file, color palette, font family,
tagline, public domain, support identity, or legal identity may therefore be
treated as approved by this inventory.

## Current working assets

| Asset or source                     | Evidence                                                                                                                                                                                                         | Confidence                          | Current role                                                                                                                                                                              | Public-web limit                                                                                                                                                               |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Product name and casing: `KitaMo`   | `../owner-seller-mobile/app.json`; `../owner-seller-mobile/docs/release/final-release-readiness.md`                                                                                                              | High                                | Consistent current product identity                                                                                                                                                       | Public-web identity approval is still required. This does not approve a wordmark treatment, tagline, claim, logo, palette, or typeface.                                        |
| Android launcher icon               | `../owner-seller-mobile/assets/icon.png`; referenced by `../owner-seller-mobile/app.json`                                                                                                                        | High                                | Configured 1024×1024 Android release raster                                                                                                                                               | May be wrapped provisionally without redrawing; public-web reuse still needs approval.                                                                                         |
| Android adaptive and splash artwork | `../owner-seller-mobile/assets/adaptive-icon.png`; `../owner-seller-mobile/assets/splash-icon.png`; referenced by `../owner-seller-mobile/app.json`                                                              | High                                | Configured Android release rasters                                                                                                                                                        | Platform-specific crops and backgrounds are not a website logo specification.                                                                                                  |
| Play icon and feature graphic       | `../owner-seller-mobile/docs/play-store/assets/play-icon-512.png`; `../owner-seller-mobile/docs/play-store/assets/feature-graphic-1024x500.png`; `../owner-seller-mobile/docs/play-store/store-listing-draft.md` | High for internal-testing materials | Current Play release-candidate artwork. The rasters use forest green, warm gold, cream, charcoal, and a small coral accent; the feature graphic includes a green/gold `KitaMo` treatment. | The store listing is explicitly a draft for internal testing. Its tagline, supporting labels, and wordmark treatment are not approved website copy or a web identity standard. |
| Unreferenced icon master raster     | `../owner-seller-mobile/assets/kitamo-icon-master.png`                                                                                                                                                           | Medium                              | Available 1254×1254 source-like raster                                                                                                                                                    | No inspected manifest or brand document establishes it as the authoritative master.                                                                                            |
| Gabi Android color system           | `../owner-seller-mobile/src/theme/colors.ts`; `../owner-seller-mobile/src/theme/tokens.ts`; `../owner-seller-mobile/src/theme/useGabiTheme.ts`                                                                   | High for the current Android UI     | Versioned application design tokens led by violet (`gabi`) and warm gold (`liwanag`), with light and dark palettes                                                                        | Evidence applies to the current Android implementation only. It is not an approved public-web palette.                                                                         |
| Gabi Android typography             | `../owner-seller-mobile/src/theme/fonts.tsx`; `../owner-seller-mobile/src/theme/typography.ts`                                                                                                                   | High for the current Android UI     | Plus Jakarta Sans for UI text and Bricolage Grotesque for display text                                                                                                                    | Web licensing, hosting, performance, and cross-platform brand approval were not found.                                                                                         |

## Provisional assets

| Provisional website choice                                                        | Basis                                                                                          | Confidence              | Replacement boundary                                                                                                                                                            |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reuse the configured Android launcher icon through a website asset wrapper        | It is the strongest current release mark and avoids inventing or redrawing a logo.             | Medium                  | Replace the source file or wrapper after the authoritative public logo and variants are approved.                                                                               |
| Forest-green, warm-gold, cream, charcoal, and restrained coral semantic direction | The current release rasters provide working evidence, and the WEB-1 brief permits this family. | Low                     | There is **no approved web palette**. Any exact website values must remain semantic, accessible, documented, and replaceable. Raster colors are not authoritative token values. |
| System font stack                                                                 | No web-approved font files or web-use decision were found.                                     | High as a safe fallback | Replace only after approved font families, licenses, delivery method, and performance budget are recorded.                                                                      |
| Restrained rounded surfaces and soft shadows                                      | Permitted by the WEB-1 direction, not established by an authoritative brand specification      | Low                     | Keep as replaceable design-system tokens rather than permanent brand rules.                                                                                                     |

Provisional assets are for the WEB-1 foundation and internal design-system
review only. They must not be described as final or permanently approved.

## Missing assets and identity evidence

| Missing item                                    | Consequence                                                                                                                                                                                                                |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authoritative vector logo and named variants    | No source-quality SVG, monochrome mark, horizontal lockup, or small-size variant can be treated as official.                                                                                                               |
| Logo usage rules                                | Clear space, minimum size, background use, cropping, and misuse rules cannot be finalized.                                                                                                                                 |
| Approved web palette                            | No exact public-web color tokens or approved accessible pairings exist.                                                                                                                                                    |
| Approved web typography and licensing record    | Android font use does not establish permission or delivery rules for the website.                                                                                                                                          |
| Approved website favicon/application-icon set   | Android and Play rasters are evidence, but no website-specific exports or approval exist.                                                                                                                                  |
| Approved public product screenshots or mockups  | No inspected screenshot or mockup was approved for public website publication.                                                                                                                                             |
| Approved tagline or messaging system            | The release-candidate feature graphic and store listing are draft evidence only.                                                                                                                                           |
| Approved public canonical domain                | No canonical website domain was found. `../admin/README.md` assigns `admin.kitamo.online` to the internal Admin product; it is not public-website authority.                                                               |
| Approved public support identity                | `../owner-seller-mobile/docs/play-store/store-listing-draft.md` retains a placeholder, and `../owner-seller-mobile/docs/release/final-release-readiness.md` requires a monitored contact. No address may be published yet. |
| Approved legal organization or company identity | No public legal owner name was found; the gap is also recorded in `docs/preflight/workspace-inventory.md`. Legal ownership, copyright, privacy, and terms attribution cannot be finalized.                                 |

## Conflicting assets

### Release artwork versus Gabi

The current release rasters and the current application UI establish two
different visual directions:

| Source                       | Primary signal                                                                                                                                      | Evidence                                                                                                                                                                                  | What is and is not established                                                        |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Android/Play release rasters | Forest green, warm gold, cream, charcoal, and a small coral accent; eye-and-growth-arrow mark; green/gold wordmark treatment in the feature graphic | `../owner-seller-mobile/assets/icon.png`; `../owner-seller-mobile/docs/play-store/assets/play-icon-512.png`; `../owner-seller-mobile/docs/play-store/assets/feature-graphic-1024x500.png` | Establishes current release artwork, not exact website tokens or public-web approval. |
| Gabi Android UI              | Violet and warm gold lead the application token system; Plus Jakarta Sans and Bricolage Grotesque lead typography                                   | `../owner-seller-mobile/src/theme/colors.ts`; `../owner-seller-mobile/src/theme/tokens.ts`; `../owner-seller-mobile/src/theme/fonts.tsx`                                                  | Establishes the implemented Android UI system, not the public website identity.       |

Neither direction may silently override the other. The website may use the
green/gold family only as a provisional, replaceable WEB-1 direction until a
cross-platform decision is approved.

### Wordmark and typography

The Play feature graphic contains a rendered green/gold `KitaMo` treatment,
while the Android interface renders brand text through Gabi's violet/gold
semantic colors and its application fonts. No editable authoritative wordmark
or cross-platform typography specification reconciles those treatments.

## Decisions requiring approval

| Decision ID | Decision required                                                                                               | Current safe position                                                                          | Approval owner                        |
| ----------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------- |
| BRD-001     | Select the public cross-platform identity: release green/gold, Gabi violet/gold, or a documented reconciliation | Keep the website direction provisional and tokenized.                                          | Website Architect and Platform Master |
| BRD-002     | Confirm the authoritative logo source and permitted website variants                                            | Wrap the configured release icon without alteration; do not redraw it.                         | Platform Master                       |
| BRD-003     | Approve exact public-web palette tokens and accessible combinations                                             | Use only replaceable provisional semantic tokens; do not sample permanent values from rasters. | Website Architect                     |
| BRD-004     | Approve public-web typography, licenses, hosting method, and performance budget                                 | Use a system font stack.                                                                       | Website Architect and rights owner    |
| BRD-005     | Approve, revise, or reject the release-candidate tagline and wordmark treatment for web                         | Do not publish the draft feature-graphic copy as website copy.                                 | Platform Master and content approver  |
| BRD-006     | Confirm the canonical public website domain                                                                     | Leave canonical production-domain configuration unset.                                         | Platform Master                       |
| BRD-007     | Confirm the public legal organization/company identity                                                          | Do not author legal ownership language.                                                        | Platform Master and legal owner       |
| BRD-008     | Confirm a monitored public support identity                                                                     | Do not publish a placeholder or personal contact.                                              | Platform Master and support owner     |
| BRD-009     | Approve public screenshots, mockups, or other product imagery                                                   | Publish none during WEB-1.                                                                     | Product owner and Website Architect   |

This inventory must be rechecked when any source asset changes, when the Android
release identity changes, or before a public website release.
