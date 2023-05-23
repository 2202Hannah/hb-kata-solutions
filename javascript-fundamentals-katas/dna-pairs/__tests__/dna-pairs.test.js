const dnaPairs = require("../dna-pairs.js");

describe("dnaPairs()", () => {
  test("When passed an empty string it should return an empty array", () => {
    const dna = "";
    const result = dnaPairs(dna);
    expect(result).toEqual([]);
  });
  test("When passed a string with one valid letter would return a nested array of the dna pair", () => {
    const dna = "G";
    const result = dnaPairs(dna);
    expect(result).toEqual([["G", "C"]]);
  });
  test("When passed a string with two letters would return a nested array of two DNA pairs", () => {
    const dna = "AG";
    const result = dnaPairs(dna);
    expect(result).toEqual([["A", "T"], ["G", "C"]]);
  });
  test("a string with four valid letters would return  a nested array of the four DNA pairs", () => {
    const dna = "ATAG";
    const result = dnaPairs(dna);
    expect(result).toEqual([["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"]]);
  });
});
