import isBoolean from "./isBoolean";

describe("isBoolean", () => {
	test("should return true for boolean primitives", () => {
		expect(isBoolean(true)).toBe(true);
		expect(isBoolean(false)).toBe(true);
	});

	test("should return false for non-boolean values", () => {
		expect(isBoolean(null)).toBe(false);
		expect(isBoolean(0)).toBe(false);
		expect(isBoolean(1)).toBe(false);
		expect(isBoolean("true")).toBe(false);
		expect(isBoolean({})).toBe(false);
		expect(isBoolean([])).toBe(false);
	});

	test("should return true for boolean objects", () => {
		expect(isBoolean(new Boolean(true))).toBe(true);
		expect(isBoolean(new Boolean(false))).toBe(true);
	});
});
