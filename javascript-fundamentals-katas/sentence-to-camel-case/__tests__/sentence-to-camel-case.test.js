const {
  sentenceToCamelCase,
  camelToEnglish
} = require("../sentence-to-camel-case.js");

describe("sentenceToCamelCase()", () => {
  test("Returns a sentence with 2 words to upper camel case when passed true as the second argument", () => {
    const sentence = "this sentence";
    const result = sentenceToCamelCase(sentence, true);
    expect(result).toBe("ThisSentence");
  });
  test("Returns a sentence with 2 words to lower camel case when passed false as the second argument", () => {
    const sentence = "this sentence";
    const result = sentenceToCamelCase(sentence, false);
    expect(result).toBe("thisSentence");
  });
  test("Returns a sentence with 4 words to upper camel case when passed true as the second argument", () => {
    const sentence = "This Bigger strange Sentence";
    const result = sentenceToCamelCase(sentence, true);
    expect(result).toBe("ThisBiggerStrangeSentence");
  });
});
describe("camelToEnglish()", () => {
  test("Returns a camel case string to sentence case", () => {
    const str = "thisBiggerStrangeSentence";
    expect(camelToEnglish(str)).toBe("This bigger strange sentence");
  });
});
