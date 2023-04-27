const { fillSquare } = require("../katas/fillSquare/fillSquare");

describe("fillSquare()", () => {
  it("returns an array of a 3x3 square with null filling the blank spaces in the sub arrays", () => {
    expect(fillSquare([[1, 2, 3], [1, 2], [1]])).toEqual(
      [[1, 2, 3], [1, 2, null], [1, null, null]]
    );
  });
});
