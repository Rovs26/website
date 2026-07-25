import { describe, expect, it } from "vitest";

import { classNames } from "@/lib/utilities/class-names";

describe("classNames", () => {
  it("joins only present class values", () => {
    expect(classNames("card", false, undefined, "raised", null)).toBe(
      "card raised",
    );
  });
});
