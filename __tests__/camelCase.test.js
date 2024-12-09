import camelCase from "../src/camelCase.js";

describe("camelCase", () => {
  describe("camelCase", () => {
    test("converts 'Foo Bar' to 'fooBar'", () => {
      expect(camelCase("Foo Bar")).toBe("fooBar");
    });

    test("converts '--foo-bar--' to 'fooBar'", () => {
      expect(camelCase("--foo-bar--")).toBe("fooBar");
    });

    test("converts '__FOO_BAR__' to 'fooBar'", () => {
      expect(camelCase("__FOO_BAR__")).toBe("fooBar");
    });

    test("converts 'hello world' to 'helloWorld'", () => {
      expect(camelCase("hello world")).toBe("helloWorld");
    });

    test("converts 'HELLO WORLD' to 'helloWorld'", () => {
      expect(camelCase("HELLO WORLD")).toBe("helloWorld");
    });

    test("converts 'foo' to 'foo'", () => {
      expect(camelCase("foo")).toBe("foo");
    });

    test("converts 'FOO' to 'foo'", () => {
      expect(camelCase("FOO")).toBe("foo");
    });

    test("converts an empty string to an empty string", () => {
      expect(camelCase("")).toBe("");
    });

    test("converts null to an empty string", () => {
      expect(camelCase(null)).toBe("");
    });

    test("converts undefined to an empty string", () => {
      expect(camelCase(undefined)).toBe("");
    });
  });
});
