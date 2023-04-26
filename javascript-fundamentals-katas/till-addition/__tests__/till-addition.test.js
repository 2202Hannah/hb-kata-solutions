const tillAddition = require("../till-addition.js");

describe("tillAddition()", () => {
  test("When passed an object with one value it will return that value", () => {
    const cash = { "1p": 1 };
    const result = tillAddition(cash);
    expect(result).toEqual("£0.01");
  });
  test("When passed an object with one of multiple different coins, returns those coins added together", () => {
    const cash = { "1p": 1, "2p": 1, "£5": 1 };
    const result = tillAddition(cash);
    expect(result).toEqual("£5.03");
  });
  test("When passed an object with multiple different coins of different quantities returns the correct value", () => {
    const cash = {
      "1p": 5,
      "2p": 20,
      "5p": 25,
      "10p": 1,
      "20p": 1,
      "50p": 2,
      "£1": 10,
      "£2": 4,
      "£5": 2,
      "£10": 1,
      "£20": 5,
      "£50": 2
    };
    const result = tillAddition(cash);
    expect(result).toEqual("£241.00");
  });
  test("the cash object should not be mutated", () => {
    const cash = { "1p": 1, "2p": 1, "£5": 1 };
    tillAddition(cash);
    expect(cash).toEqual({ "1p": 1, "2p": 1, "£5": 1 });
  });
});
