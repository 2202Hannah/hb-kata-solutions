const { justifyLine } = require("../katas/justifyLine/justifyLine");

describe("justifyLine()", () => {
  it("returns line exceeds maximum line length message when applicable", () => {
    expect(justifyLine("hello how are you?", 5)).toBe(
      "String exceeds maximum line length."
    );
  });
});
