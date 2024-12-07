import reduce from "../src/reduce";

describe("reduce", () => {
  it("should reduce an array to a single value", () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n, 0);
    expect(result).toBe(6);
  });

  it("should reduce an object to a single value", () => {
    const result = reduce(
      { a: 1, b: 2, c: 1 },
      (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;
      },
      {}
    );
    expect(result).toEqual({ 1: ["a", "c"], 2: ["b"] });
  });

  it("should use the first element as the initial value if accumulator is not provided", () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n);
    expect(result).toBe(6);
  });

  it("should handle an empty array with an initial value", () => {
    const result = reduce([], (sum, n) => sum + n, 0);
    expect(result).toBe(0);
  });

  it("should handle an empty array without an initial value", () => {
    const result = reduce([], (sum, n) => sum + n);
    expect(result).toBeUndefined();
  });

  it("should handle an empty object with an initial value", () => {
    const result = reduce(
      {},
      (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;
      },
      {}
    );
    expect(result).toEqual({});
  });

  it("should handle an empty object without an initial value", () => {
    const result = reduce({}, (result, value, key) => {
      (result[value] || (result[value] = [])).push(key);
      return result;
    });
    expect(result).toBeUndefined();
  });
});
