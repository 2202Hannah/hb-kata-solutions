const foldString = require("./fold-string");

describe("foldString()", () => {
  test("When passed a string length of one, returns that letter", () => {
    const str = "a";
    const result = foldString(str);
    expect(result).toBe("a");
  });
  test("When passed a string length of two, returns that string", () => {
    const str = "ab";
    const result = foldString(str);
    expect(result).toBe("ab");
  });
  test("When passed a string length of three, returns that string unaltered", () => {
    const str = "abc";
    const result = foldString(str);
    expect(result).toBe("abc");
  });
  test("When passed a string length of six, returns that string folded", () => {
    const str = "Hannah";
    const result = foldString(str);
    expect(result).toBe("naHhan");
  });
  test("When passed a string length of five, returns that string folded", () => {
    const str = "Poppy";
    const result = foldString(str);
    expect(result).toBe("oPpyp");
  });
  test("When passed a sentence, returns the sentence folded", () => {
    const str = "javascript is cool not";
    const result = foldString(str);
    expect(result).toBe("savajtpirc is oclo not");
  });
});
