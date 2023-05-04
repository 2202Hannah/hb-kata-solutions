const { binarySearch } = require("../katas/binarySearch/binarySearch");

describe("binarySearch()", () => {
  it("returns -1 if the number is not present in the array", () => {
    const number = 1;
    const array = [2, 3, 4];
    expect(binarySearch(number, array)).toBe(-1);
  });
  it("returns 0 when the number is the first item in the array", () => {
    const number = 2;
    const array = [2, 3, 4];
    expect(binarySearch(number, array)).toBe(0);
  });
  it("returns 1 when the number is the second item in the array", () => {
    const number = 3;
    const array = [2, 3, 4];
    expect(binarySearch(number, array)).toBe(1);
  });
});
