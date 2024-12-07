import map from "../src/map";

describe("map", () => {
  const users = [{ user: "barney", active: true }];

  test("map should return an array of elements that return true for the predicate", () => {
    expect(map(users, ({ active }) => active)).toStrictEqual([true]);
  });

  test("map should return an empty array if an empty array is given", () => {
    expect(map([], ({ active }) => active)).toStrictEqual([]);
  });

  test("map should return an empty array if the input array is null", () => {
    expect(map(null, ({ active }) => active)).toStrictEqual([]);
  });

  test("map should return an empty array if the input array is undefined", () => {
    expect(map(undefined, ({ active }) => active)).toStrictEqual([]);
  });
});
