import capitalize from "../src/capitalize.js";

describe("capitalize", () => {
  test("capitalizes the first letter of a lowercase word", () => {
    expect(capitalize("fred")).toBe("Fred");
  });

  test("capitalizes the first letter of an uppercase word", () => {
    expect(capitalize("FRED")).toBe("Fred");
  });

  test("capitalizes the first letter of a mixed case word", () => {
    expect(capitalize("fReD")).toBe("Fred");
  });

  test("capitalizes the first letter of a single letter word", () => {
    expect(capitalize("f")).toBe("F");
  });

  test("returns an empty string if input is an empty string", () => {
    expect(capitalize("")).toBe("");
  });

  test("capitalizes the first letter of a word with leading spaces", () => {
    expect(capitalize("   fred")).toBe("   fred");
  });

  test("capitalizes the first letter of a word with trailing spaces", () => {
    expect(capitalize("fred   ")).toBe("Fred   ");
  });

  test("capitalizes the first letter of a word with spaces around", () => {
    expect(capitalize("   fred   ")).toBe("   fred   ");
  });

  test("capitalizes the first letter of a word with special characters", () => {
    expect(capitalize("!fred")).toBe("!fred");
  });

  test("capitalizes the first letter of a word with numbers", () => {
    expect(capitalize("123fred")).toBe("123fred");
  });
});
