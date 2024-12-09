import slice from "../src/slice";

describe("slice", () => {
  test("should return a slice of the array from start to end", () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 1, 3)).toEqual([2, 3]);
  });

  test("should return a slice from start to the end of the array if end is not provided", () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 2)).toEqual([3, 4]);
  });

  test("should return the whole array if start and end are not provided", () => {
    const array = [1, 2, 3, 4];
    expect(slice(array)).toEqual([1, 2, 3, 4]);
  });

  test("should handle negative start index", () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, -2)).toEqual([3, 4]);
  });

  test("should handle negative end index", () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 1, -1)).toEqual([2, 3]);
  });

  test("should return an empty array if start is greater than end", () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 3, 1)).toEqual([]);
  });

  test("should return an empty array if array is null or undefined", () => {
    expect(slice(null)).toEqual([]);
    expect(slice(undefined)).toEqual([]);
  });

  test("should return an empty array if start is greater than array length", () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 5)).toEqual([]);
  });

  test("should return an empty array if end is less than or equal to start", () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 2, 2)).toEqual([]);
    expect(slice(array, 2, 1)).toEqual([]);
  });
});
