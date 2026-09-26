// Renders one screen plate from a Claude Design handoff at a custom CSS height,
// so it matches the screen shape of an AI-generated device.
// Serve the round-3 handoff first (e.g. python3 -m http.server 8769 in marketing-round-3/).
// Usage: node render-plate.mjs <plate index> <css height> <out.png> [base url]
// Plate index follows Screen Plates.dc.html: 0 T1, 1 T2, 2 P1, 3 P2, 4 P3, 5 P4, 6 P5, 7 P6, 8 P7.
// Playwright comes from seller-web's dev dependencies.
import { chromium } from "/Users/rovs/Documents/KitaMo-ph/seller-web/node_modules/playwright/index.mjs";
const [, , idx, h, out, base = "http://localhost:8769"] = process.argv;
const b = await chromium.launch();
const q = await b.newPage({
  viewport: { width: 1600, height: 1000 },
  deviceScaleFactor: 3,
});
await q.goto(`${base}/Screen%20Plates.dc.html`, { waitUntil: "networkidle" });
await q.waitForTimeout(2000);
const el = (await q.$$("[data-screen-label]"))[Number(idx)];
await el.evaluate((e, hh) => {
  e.style.height = hh + "px";
}, Number(h));
await q.waitForTimeout(300);
await el.screenshot({ path: out });
await b.close();
