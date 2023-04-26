const changeCalculator = require("../change-calculator.js");

describe("changeCalculator()", () => {
  test("When the change required is 1, returns {'1': 1}", () => {
    const change = 1;
    const result = changeCalculator(change);
    expect(result).toEqual({ "1": 1 });
  });
  test("When the change required is 2, returns {'2': 1}", () => {
    const change = 2;
    const result = changeCalculator(change);
    expect(result).toEqual({ "2": 1 });
  });
  test("When the change required needs different coins (e.g. 7), returns the required coins in an object", () => {
    const change = 7;
    const result = changeCalculator(change);
    expect(result).toEqual({ "5": 1, "2": 1 });
  });
  test("When the change required is 13, returns the correct coin amounts", () => {
    const change = 13;
    const result = changeCalculator(change);
    expect(result).toEqual({ "10": 1, "2": 1, "1": 1 });
  });
  test("When the change requires more than one of a coin, returns the correct coin amounts", () => {
    const change = 902;
    const result = changeCalculator(change);
    expect(result).toEqual({ "200": 4, "100": 1, "2": 1 });
  });
});
