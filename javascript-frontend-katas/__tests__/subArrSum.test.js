const { subArrSum } = require("../katas/subArrSum/subArrSum");

describe("subArrSum()", () => {
  it("returns 0 when all numbers are negative", () => {
    const input = [-1, -2];
    expect(subArrSum(input)).toBe(0);
  });
  it("returns the sum of all the numbers when they are all positive", () => {
    const input = [1, 2, 3, 4, 5];
    expect(subArrSum(input)).toBe(15);
  });
  it("returns 6 as the highest sub array sum", () => {
    const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    expect(subArrSum(input)).toBe(6);
  });
  it("returns 36 as the highest sub array sum", () => {
    const input = [9, 8, 7, -3, 6, 5, 4, -3, 2, 1];
    expect(subArrSum(input)).toBe(36);
  });
  it("returns 22 as the highest sub array sum", () => {
    const input = [2, 9, -4, -3, 8, -10, 20];
    expect(subArrSum(input)).toBe(22);
  });
});
