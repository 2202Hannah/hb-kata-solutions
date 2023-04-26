const pigLatin = require("./pig-latin");

describe("pigLatin()", () => {
  test("When passed a string that starts with a vowel, returns that string with way at the end", () => {
    const str = "ale";
    const result = pigLatin(str);
    expect(result).toBe("aleway");
  });
  test("When passed a string that starts with a constanant it will return the string with the first constanant and ay at the end", () => {
    const str = "hello";
    const result = pigLatin(str);
    expect(result).toBe("ellohay");
  });
  test("When passed a string that is a sentence it should return each word translated to pig latin", () => {
    const str = "keep on coding";
    const result = pigLatin(str);
    expect(result).toBe('eepkay onway odingcay');
  });
});
