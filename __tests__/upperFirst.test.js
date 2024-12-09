import upperFirst from "../src/upperFirst";

describe("upperFirst", () => {
  test("converts the first character of a string to upper case", () => {
    expect(upperFirst("fred")).toBe("Fred");
  });

  test("returns the same string if the first character is already upper case", () => {
    expect(upperFirst("FRED")).toBe("FRED");
  });

  test("handles an empty string", () => {
    expect(upperFirst("")).toBe("");
  });

  test("handles a single character string", () => {
    expect(upperFirst("a")).toBe("A");
  });

  test("handles a string with special characters", () => {
    expect(upperFirst("!hello")).toBe("!hello");
  });

  test("handles a string with numbers", () => {
    expect(upperFirst("123abc")).toBe("123abc");
  });
});
