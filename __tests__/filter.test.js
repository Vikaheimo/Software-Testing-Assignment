import filter from "../src/filter";

describe("filter", () => {
  const users = [{ user: "barney", active: true }];

  test("filter should return an array of elements that return true for the predicate", () => {
    expect(filter(users, ({ active }) => active)).toStrictEqual(users);
  });

  test("filter should return an empty array if no elements return true for the predicate", () => {
    expect(filter(users, ({ active }) => !active)).toStrictEqual([]);
  });

  test("filter should return an empty array if the input array is empty", () => {
    expect(filter([], ({ active }) => active)).toStrictEqual([]);
  });

  test("filter should return an empty array if the input array is null", () => {
    expect(filter(null, ({ active }) => active)).toStrictEqual([]);
  });

  test("filter should return an empty array if the input array is undefined", () => {
    expect(filter(undefined, ({ active }) => active)).toStrictEqual([]);
  });
});
