const {
  findMostRepeated
} = require("../katas/findMostRepeated/findMostRepeated");

describe("findMostRepeated()", () => {
  it("Responds with expected empty array and null repeats when passed an empty array", () => {
    const input = [];
    expect(findMostRepeated(input)).toEqual({ elements: [], repeats: null });
  });
  it("Responds with expected empty array and null repeats when there are no repeated elements", () => {
    const input = [1, 2, 3];
    expect(findMostRepeated(input)).toEqual({ elements: [], repeats: null });
  });
  it("Responds with the foo element when it is repeated twice", () => {
    const input = ["foo", "foo", "bar", "hello", "world"];
    expect(findMostRepeated(input)).toEqual({ elements: ["foo"], repeats: 2 });
  });
  it("Responds with the foo & bar element when they are both repeated twice", () => {
    const input = ["foo", "foo", "bar", "bar", "hello", "world"];
    expect(findMostRepeated(input)).toEqual({
      elements: ["foo", "bar"],
      repeats: 2
    });
  });
});
