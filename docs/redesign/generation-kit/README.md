# KitaMo image and video generation kit

Status: **Round 2, 2026-09-26.** This kit replaces the earlier
`IMAGE-AND-VIDEO-PROMPTS.md`.

## What's in this folder

| Folder    | Contents                                                                                     | Use                                                                                   |
| --------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `plates/` | The nine app screens, flat and edge to edge. Tablets are 1280 × 800; phones are 1080 × 2340. | The site shows these directly in the hero and the daily routine. Fallback for scenes. |
| `framed/` | The same nine screens inside a plain black Android bezel, with a transparent background.     | **Attach these** to ChatGPT or Gemini.                                                |

The screens show demo data for "Aling Nena's Sari-sari". The figures agree
across all plates. The ₱183.00 cart appears in P1, T2 and P2. The Sep 25 day
appears in T1 and P7. The week in P6 matches the trend in T1.

| Plate | Screen                         | Framed file                       |
| ----- | ------------------------------ | --------------------------------- |
| T1    | Kita, day (tablet)             | `T1-kita-tablet-framed.png`       |
| T2    | Benta, shelf and cart (tablet) | `T2-benta-tablet-framed.png`      |
| P1    | Benta, shelf                   | `P1-benta-phone-framed.png`       |
| P2    | Checkout, ₱200 → sukli ₱17.00  | `P2-checkout-phone-framed.png`    |
| P3    | Paninda: Low, Out, + cost      | `P3-paninda-phone-framed.png`     |
| P4    | Utang, Sa iyo                  | `P4-utang-phone-framed.png`       |
| P5    | Gastos, repeating bills        | `P5-gastos-phone-framed.png`      |
| P6    | Kita, week                     | `P6-kita-week-phone-framed.png`   |
| P7    | Kita, Hidden money view        | `P7-kita-hidden-phone-framed.png` |

## Where each picture goes

The final design (round 3) shows the **flat plates** in code-drawn device frames
in these places:

- the hero;
- the daily routine;
- every step of How it works;
- the default "Made for the counter".

That keeps the screens sharp, light and exact. The design has two photo slots,
and they come first.

| Picture       | Priority   | Used for                                                                                                             |
| ------------- | ---------- | -------------------------------------------------------------------------------------------------------------------- |
| S1 Counter    | **Needed** | The photo version of "Made for the counter" (16:9 desktop, 4:5 phone), and the Facebook/Messenger link preview image |
| S2 Karinderia | **Needed** | The photo slot on the For sellers karinderia block (4:5, caption "A karinderia counter at closing time.")            |
| S3 Lista      | Optional   | Social posts; a possible About image                                                                                 |
| S4 Checkout   | Optional   | Social posts                                                                                                         |
| S5 Hidden     | Optional   | Social posts                                                                                                         |
| S6 Closing    | Optional   | Social posts                                                                                                         |
| V1 / V2 video | Optional   | A click-to-play clip in "Made for the counter"                                                                       |

The page works without any photo. Until S1 is approved, "Made for the counter"
uses the flat device pair.

## How to run a scene

1. Open a new chat in ChatGPT (image generation) or Gemini (image editing).
2. Attach the framed file listed for the scene.
3. Paste the whole prompt block. The shared rules are already included.
4. Ask for two to four variants. Ask for the aspect ratio listed.
5. If the screen changes, reply: "The screen text or numbers changed.
   Regenerate and keep the attached device's screen pixel-identical."
6. Save the images you like as `S1-a.png`, `S1-b.png` and so on, and send them
   back for checking.

**Checks before a picture goes on the site**

- At 100% zoom, every ₱ amount and label on the screen matches the plate.
- The screen has no warping, extra buttons or invented text.
- There are no logos or brand names anywhere in the scene.
- The hands look natural: five fingers, and nothing fused to the device.
- The file converts to AVIF and WebP within budget: the S1 hero crop under
  180 KB, the others under 90 KB.

If a screen stays garbled, keep the best scene. The flat plate is then fitted
onto the screen with a perspective warp.

---

## S1 · Counter (tablet)

**Attach:** `framed/T2-benta-tablet-framed.png` · **Aspect:** 16:9, then a 4:5
version

```text
Place the attached tablet, exactly as it is, into this scene: it stands in landscape on a simple black stand on the worn wooden counter of a small Filipino sari-sari store, seen from the customer's side at a slight angle. A woman in her 40s behind the counter taps one of the product tiles with her index finger. Behind her, softly blurred: shelves of unbranded snack jars, hanging strips of sachets with no readable print, a few coins in a small dish, and a window grille letting in warm mid-morning light.

Keep the attached device's screen EXACTLY as supplied: do not redraw, re-letter, translate, blur or change any text, number, icon or layout on it; keep it sharp, bright and correctly perspective-fitted, with only a faint natural reflection. No logos or brand names anywhere in the scene, no text outside the screen, no watermark. Natural light, a true-to-life Filipino setting, a real and respectful person, not a staged stock-photo smile. Photographic, 35mm lens, shallow depth of field.
```

## S2 · Karinderia (phone in hand)

**Attach:** `framed/P1-benta-phone-framed.png` · **Aspect:** 4:5

```text
Place the attached phone, exactly as it is, into this scene: a man in his 30s holds it upright in one hand, screen facing the camera, standing behind the counter of a small Filipino karinderia at closing time in the early evening, most trays nearly empty. Behind him, softly blurred: stainless steel trays of ulam under glass, a rice pot, a hand-written menu board with the writing too blurred to read, warm tungsten light.

Keep the attached device's screen EXACTLY as supplied: do not redraw, re-letter, translate, blur or change any text, number, icon or layout on it; keep it sharp, bright and correctly perspective-fitted, with only a faint natural reflection. No logos or brand names anywhere in the scene, no text outside the screen, no watermark. Natural light, a true-to-life Filipino setting, a real and respectful person, not a staged stock-photo smile. Photographic, 35mm lens, shallow depth of field.
```

## S3 · The lista and KitaMo (flat lay)

**Attach:** `framed/P6-kita-week-phone-framed.png` · **Aspect:** 4:5 (also
1:1)

```text
Place the attached phone, exactly as it is, into this scene: a top-down flat lay on a wooden table. On the left, an old ruled paper notebook (a lista) lies open, filled with handwritten tallies and sums in pencil, the handwriting too small and loose to read, a short pencil beside it. On the right, the phone lies flat, screen up, square to the camera. A few peso coins and a rubber band nearby. Soft daylight from a window.

Keep the attached device's screen EXACTLY as supplied: do not redraw, re-letter, translate, blur or change any text, number, icon or layout on it; keep it sharp, bright and correctly perspective-fitted, with only a faint natural reflection. No logos or brand names anywhere in the scene, no text outside the screen, no watermark. Natural light, a true-to-life Filipino setting. Photographic, 35mm lens, even focus.
```

## S4 · Checkout at a market stall

**Attach:** `framed/P2-checkout-phone-framed.png` · **Aspect:** 4:5

```text
Place the attached phone, exactly as it is, into this scene: an over-the-shoulder view of a woman in her 50s at a Filipino wet-market vegetable stall, holding the phone in her left hand with the screen toward the camera. Across the stall, a customer's hand holds out a folded one-hundred and a twenty peso bill (generic, details not legible). Behind, softly blurred: baskets of vegetables, a hanging scale, a tarp roof, morning light.

Keep the attached device's screen EXACTLY as supplied: do not redraw, re-letter, translate, blur or change any text, number, icon or layout on it; keep it sharp, bright and correctly perspective-fitted, with only a faint natural reflection. No logos or brand names anywhere in the scene, no text outside the screen, no watermark. Natural light, a true-to-life Filipino setting, real and respectful people, not staged stock-photo smiles. Photographic, 35mm lens, shallow depth of field.
```

## S5 · Hidden at the counter

**Attach:** `framed/P7-kita-hidden-phone-framed.png` · **Aspect:** 4:5

```text
Place the attached phone, exactly as it is, into this scene: it stands upright in a small plastic phone stand on a sari-sari store counter, screen toward the camera and in sharp focus. In the near foreground, out of focus, the shoulder and arm of a customer waiting at the counter. Behind the counter, blurred, the store owner reaching for an item on a shelf. Warm afternoon light.

Keep the attached device's screen EXACTLY as supplied: do not redraw, re-letter, translate, blur or change any text, number, icon or layout on it; keep it sharp, bright and correctly perspective-fitted, with only a faint natural reflection. No logos or brand names anywhere in the scene, no text outside the screen, no watermark. Natural light, a true-to-life Filipino setting, real and respectful people. Photographic, 50mm lens, shallow depth of field.
```

## S6 · End of the day (tablet)

**Attach:** `framed/T1-kita-tablet-framed.png` · **Aspect:** 16:9

```text
Place the attached tablet, exactly as it is, into this scene: closing time at a small Filipino sari-sari store in the evening. The tablet stands in landscape on the counter, screen toward the camera. Beside it, the owner, a woman in her 60s wearing reading glasses, sits on a stool and looks at the screen, calm, one hand resting near a small stack of coins. The store's roll-up shutter is half down behind her. A single warm bulb overhead.

Keep the attached device's screen EXACTLY as supplied: do not redraw, re-letter, translate, blur or change any text, number, icon or layout on it; keep it sharp, bright and correctly perspective-fitted, with only a faint natural reflection. No logos or brand names anywhere in the scene, no text outside the screen, no watermark. A true-to-life Filipino setting, a real and respectful person, not a staged stock-photo smile. Photographic, 35mm lens, shallow depth of field.
```

---

## Video (Gemini, Veo)

On the page, the clip is muted and loops. It plays only when tapped, and a
still poster frame shows until then. It never autoplays when reduced motion is
set, and it must stay under 1.5 MB after compression. Veo's default clip length
is fine. We remove the audio.

### V1 · Counter moment (text to video, no attachment)

**Aspect:** 16:9

```text
A slow, steady push-in across the wooden counter of a small Filipino sari-sari store at golden hour, seen from the customer's side. Behind the counter, the owner, a woman in her 40s, hands a customer a small clear plastic bag with a few items and takes a folded bill; both smile briefly, naturally. On the counter, a tablet on a stand faces the owner, so the camera sees only its plain black back and edge; its screen is never visible. Unbranded snack jars and hanging sachet strips in the background, dust in the warm light. Calm, realistic motion; the last frame closely matches the first so it loops. No readable text, no logos or brand names, no music, no speech.
```

### V2 · Bring S1 to life (image to video, after S1 is approved)

**Attach:** the approved S1 still · **Aspect:** 16:9

```text
Animate this photo with very little motion. The camera makes a slow, slight push-in. The woman lifts her finger from the tablet and looks up toward a customer off-frame, then back. Light shifts gently. The tablet, its stand and everything on its screen stay completely still and unchanged: no new text, no moving interface, no warping. No logos, no music, no speech.
```

V2 matches the page's photo better, but Veo may still bend the screen. Every
frame gets checked. If the screen warps, V1 is used instead.

**Watermark.** The Gemini app puts a visible sparkle mark in the corner of
every clip. We do not crop or paint it out. For a clip without it, generate
through a Veo surface that exports without the visible mark; check the terms of
your plan first. Veo clips also carry an invisible SynthID mark, and that
stays.

## Round 1 results (2026-09-26)

The AI tools did not keep the KitaMo screen in any image. Each one replaced it
with another picture: a store photo, a naira (₦) money app, a calculator, a
vocabulary app, or a karinderia photo. As planned, the exact plate was fitted
onto the screen with a perspective warp (`tools/composite.py`). Each plate was
first re-rendered at that device's screen shape (`tools/render-plate.mjs`).
The results are in `composited/`.

| File                                  | From                    | Screen fitted                                         | Notes                                                                                                                                   |
| ------------------------------------- | ----------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `S1-counter-16x9.jpg` (2000 × 1116)   | ChatGPT/Gemini S1, 16:9 | T2 Benta at 853 × 493 (the AI tablet is about 1.73:1) | Background sachet text is invented, with no real brands readable. "Made for the counter" on desktop                                     |
| `S1-counter-4x5.jpg` (893 × 1116)     | Crop of the same image  | Same                                                  | The phone version of that section. It replaces the 4:5 S1 variant, which showed a readable real brand ("MILO")                          |
| `og-image-1200x630.jpg`               | Crop of the same image  | Same                                                  | Facebook / Messenger link preview                                                                                                       |
| `S2-karinderia-4x5.jpg` (1611 × 2000) | S2                      | P1 Benta at 390 × 865                                 | The phone's own notch is kept. For sellers, karinderia block                                                                            |
| `S3-lista-4x5.jpg` (1611 × 2000)      | S3, 4:5                 | P6 Kita week at 390 × 855                             | The notebook label "Tang" (a real drink brand) was painted out. The other handwritten figures are decorative and don't add up. Optional |

Measured at page size: S1 is 40 KB AVIF / 57 KB WebP at 1280 px, and S2 is
24 KB / 36 KB at 800 px. Everything is well under budget. Use AVIF quality of
at least 60 for S2 so the small "left" counts stay crisp.

**Not used**

- **The portrait tablet with the ₦ money app.** No portrait plate exists, and
  the app runs landscape on the counter.
- **The market-stall checkout.** The screen shows a calculator. The ₱100 and ₱20
  bills also look like real banknotes rather than generic ones. Fit P2 and
  blur the bills if the scene is ever needed.
- **The square S3.** It is a duplicate of the 4:5 version.
- **The 4:5 S1.** "MILO" is readable on the sachets, and the hand grips the
  tablet awkwardly.

**Video, V1 round 1.** The clip itself is good: 10 s, 1280 × 720, warm and
calm. It can't be used as it is:

- The tablet screen is in focus and shows an invented green app, not KitaMo.
- It carries Gemini's visible watermark.
- It is 3.5 MB and has an audio track.

Re-run the revised V1 above, which turns the screen away from the camera,
through a surface without the visible mark. Then re-encode it to 1.5 MB or
less, muted.

**Before these go live:** caption each photo "Illustration. Screens show the
KitaMo web app with sample data." The people and stores are AI-generated.
Presenting them as real KitaMo users would amount to the testimonials the site
rules ban.
