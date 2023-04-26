const {
  romanNumeralEncoder
} = require("../katas/romanNumeralEncoder/romanNumeralEncoder");

describe("romanNumeralEncoder()", () => {
  it("should return roman numeral I when passed the number 1", async () => {
    const data = await romanNumeralEncoder(1);
    await expect(data).toBe("I");
  });
  it("should return roman numeral II when passed the number 2", async () => {
    const data = await romanNumeralEncoder(2);
    await expect(data).toBe("II");
  });
  it("should return roman numeral X when passed the number 10", async () => {
    const data = await romanNumeralEncoder(10);
    await expect(data).toBe("X");
  });
  it("should return roman numeral XVII when passed the number 17", async () => {
    const data = await romanNumeralEncoder(17);
    await expect(data).toBe("XVII");
  });
  it("should return roman numeral LXXV when passed the number 75", async () => {
    const data = await romanNumeralEncoder(75);
    await expect(data).toBe("LXXV");
  });
  it("should return roman numeral XCI when passed the number 91", async () => {
    //const data = await romanNumeralEncoder(91);
    await expect(await romanNumeralEncoder(91)).toBe("XCI");
  });
});
