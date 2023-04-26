const { vowelShift } = require("../katas/vowelShift/vowelShift");

describe("vowelShift()", () => {
  it("When the string foo has its vowels shifted 1 position, returns foo", () => {
    expect(vowelShift("foo", 1)).toBe("foo");
  });
  it("When the string hello has its vowels shifted 1 position, returns holle", () => {
    expect(vowelShift("hello", 1)).toBe("holle");
  });
  it("When the string hello child has its vowels shifted 1 position, returns hille chold", () => {
    expect(vowelShift("hello child", 1)).toBe("hille chold");
  });
  it("When the string star nosed mole has its vowels shifted 2 positions, returns stor nesad mole", () => {
    expect(vowelShift("star nosed mole", 2)).toBe("stor nesad mole");
  });
  it("When the string funnily enough has its vowels shifted 4 positions, returns finnely onuugh", () => {
    expect(vowelShift("funnily enough", 4)).toBe("finnely onuugh");
  });
  it("When the string has uppercase letters the letter that moves stays the same case", () => {
    expect(vowelShift("Apple", 1)).toBe("epplA");
  });
});
