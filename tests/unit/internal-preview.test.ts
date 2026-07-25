import { describe, expect, it } from "vitest";

import { isInternalPreviewAvailable } from "@/lib/utilities/internal-preview";

describe("internal design-system preview", () => {
  it("is available only in local development", () => {
    expect(isInternalPreviewAvailable("development")).toBe(true);
    expect(isInternalPreviewAvailable("production")).toBe(false);
    expect(isInternalPreviewAvailable("test")).toBe(false);
    expect(isInternalPreviewAvailable(undefined)).toBe(false);
  });
});
