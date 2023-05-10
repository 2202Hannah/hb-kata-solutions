const { justifyLine } = require("../katas/justifyLine/justifyLine");

describe("justifyLine()", () => {
  it("returns line exceeds maximum line length message when applicable", () => {
    expect(justifyLine("hello how are you?", 5)).toBe(
      "String exceeds maximum line length."
    );
  });
  it("adds an additional space between the first 2 words when the max line length is 1 more than the string length", () => {
    const str = "foo foo foo foo";
    expect(justifyLine(str, 16)).toBe("foo  foo foo foo");
  });
  it("adds an additional space between the all words when the max line length is 3 more than the string length", () => {
    const str = "foo foo foo foo";
    expect(justifyLine(str, 18)).toBe("foo  foo  foo  foo");
  });
  it("adds more spaces between each word when larger white space buffers are required", () => {
    const str = "foo foo foo foo";
    expect(justifyLine(str, 20)).toBe("foo   foo   foo  foo");
  });
});
