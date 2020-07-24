import { mergeStyles } from "./styles";

describe("styles", () => {
  describe("mergeStyles", () => {
    const baseStyles = {
      a: "A_BASE",
      b: "B_BASE",
    };

    const themeStyles = {
      b: "B_THEME",
      c: "C_THEME",
    };

    const result = mergeStyles(baseStyles, themeStyles);

    it("merges the two style names into one string", () => {
      expect(result.b).toEqual("B_BASE B_THEME");
    });

    it("keeps values that are not in both objects", () => {
      expect(result.a).toEqual("A_BASE");
      expect(result.c).toEqual("C_THEME");
    });
  });
});
