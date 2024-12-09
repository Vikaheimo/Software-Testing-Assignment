import toNumber from "../src/toNumber.js";

describe("toNumber", () => {
  test("should convert number to number", () => {
    expect(toNumber(3.2)).toBe(3.2);
    expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  test("should convert string to number", () => {
    expect(toNumber("3.2")).toBe(3.2);
    expect(toNumber("0b101")).toBe(5);
    expect(toNumber("0o10")).toBe(8);
    expect(toNumber("0x1f")).toBe(31);
  });

  test("should return NaN for invalid values", () => {
    expect(toNumber("invalid")).toBeNaN();
    expect(toNumber("0xinvalid")).toBeNaN();
    expect(toNumber(Symbol("symbol"))).toBeNaN();
  });

  test("should convert object to number", () => {
    expect(toNumber({ valueOf: () => 3.2 })).toBe(3.2);
    expect(toNumber({})).toBeNaN();
  });

  test("should handle edge cases", () => {
    expect(toNumber(null)).toBe(0);
    expect(toNumber(undefined)).toBeNaN();
    expect(toNumber(true)).toBe(1);
    expect(toNumber(false)).toBe(0);
  });
});
