const {
  multiplicationTable
} = require("../katas/multiplicationTable/multiplicationTable");

describe("multiplicationTable()", () => {
  it("will return an empty array when the n = 0", () => {
    expect(multiplicationTable(0)).toEqual([]);
  });
  it("will return the expected outcome when n = 1", () => {
    expect(multiplicationTable(1)).toEqual([[0, 1], [0, 1]]);
  });
  it("will return the expected outcome when n = 3", () => {
    expect(multiplicationTable(3)).toEqual([
      [0, 1, 2, 3],
      [0, 0, 0, 0],
      [0, 1, 2, 3],
      [0, 2, 4, 6]
    ]);
  });
});
