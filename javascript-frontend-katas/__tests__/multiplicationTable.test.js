const {
  multiplicationTable
} = require("../katas/multiplicationTable/multiplicationTable");

describe("multiplicationTable()", () => {
  it("will return an empty array when the n = 0", () => {
    expect(multiplicationTable(0)).toEqual([]);
  });
});
