import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import nextConfig from "@/next.config";

const root = join(import.meta.dirname, "..", "..");

function sourceFiles(directory: string): string[] {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) return sourceFiles(path);
    return /\.(ts|tsx)$/.test(entry) ? [path] : [];
  });
}

async function productionCsp() {
  const rules = (await nextConfig.headers?.()) ?? [];
  const header = rules
    .flatMap((rule) => rule.headers)
    .find((entry) => entry.key === "Content-Security-Policy");
  return header?.value ?? "";
}

describe("ADR-0013: no client JavaScript", () => {
  it("blocks every script in production", async () => {
    // Vitest runs with NODE_ENV=test, which takes the production branch.
    const directives = (await productionCsp()).split("; ");

    expect(
      directives.filter((directive) => directive.startsWith("script-src")),
    ).toEqual(["script-src 'none'"]);
  });

  it("allows no third-party origin in any directive", async () => {
    expect(await productionCsp()).not.toMatch(/https?:\/\//);
  });

  it("has no Client Components, which the policy would silently disable", () => {
    const files = ["app", "components", "lib"].flatMap((directory) =>
      sourceFiles(join(root, directory)),
    );
    const clientFiles = files.filter((file) =>
      /^\s*["']use client["']/m.test(readFileSync(file, "utf8")),
    );

    expect(files.length).toBeGreaterThan(0);
    expect(clientFiles).toEqual([]);
  });
});
