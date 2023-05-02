const { binarySearch } = require("../katas/binarySearch/binarySearch");

describe("binarySearch()", () => {
  it("returns -1 if the number is not present in the array", () => {
    const number = 1;
    const array = [2, 3, 4];
    expect(binarySearch(number, array)).toBe(-1);
  });
});
