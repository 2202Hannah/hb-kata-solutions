const calculateDivisors = require("../calculate-divisors.js");

describe("calculateDivisors()", () => {
  test("When passed a number less than 4, should return 0", () => {
    const number = 3;
    const result = calculateDivisors(number);
    expect(result).toEqual(0);
  });
  test("When passed a number less than 6 and greater than 3, should return 3", () => {
    const number = 5;
    const result = calculateDivisors(number);
    expect(result).toEqual(3);
  });
  test("When passed a number greater than 6 it should return the sum of all the multiples of 3 and 5", () => {
    const number = 12;
    const result = calculateDivisors(number);
    expect(result).toEqual(33);
  });
});
