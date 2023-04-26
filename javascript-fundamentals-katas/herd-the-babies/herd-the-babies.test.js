const herdTheBabies = require("./herd-the-babies");

describe("herdTheBabies()", () => {
  test("When one upper case and one lower case letter it returns them in the correct order (uppercase first)", () => {
    const str = "aA";
    const result = herdTheBabies(str);
    expect(result).toBe("Aa");
  });
  test("When two upper case and one lower case letter it returns them in the correct order", () => {
    const str = "aAB";
    const result = herdTheBabies(str);
    expect(result).toBe("AaB");
  });
  test("When multiple upper case and lower case letters it returns them in the correct order", () => {
    const str = "bbaBccAC";
    const result = herdTheBabies(str);
    expect(result).toBe("AaBbbCcc");
  });
  test("When multiple upper case and lower case letters it returns them in the correct order", () => {
    const str = "AaBbbBaAbAbbAbB";
    const result = herdTheBabies(str);
    expect(result).toBe("AAAAaaBBBbbbbbb");
  });
});
