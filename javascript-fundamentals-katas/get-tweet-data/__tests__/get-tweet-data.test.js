const getTweetData = require("../get-tweet-data");

describe("getTweetData()", () => {
  test("When passed a string with no tags or mentions returns an object with the correct length", () => {
    const tweet = "My awesome tweet";
    const result = getTweetData(tweet);
    expect(result).toEqual({
      tags: [],
      mentions: [],
      tagCount: 0,
      mentionCount: 0,
      length: 16
    });
  });
  test("When passed a tweet with one mention returns an object that includes the mention information", () => {
    const tweet = "My awesome tweet to @northcoders";
    const result = getTweetData(tweet);
    expect(result).toEqual({
      tags: [],
      mentions: ["@northcoders"],
      tagCount: 0,
      mentionCount: 1,
      length: 32
    });
  });
  test("When passed a string with one hashtag returns an object that includes the mention information", () => {
    const tweet = "My awesome tweet about #coding";
    const result = getTweetData(tweet);
    expect(result).toEqual({
      tags: ["#coding"],
      mentions: [],
      tagCount: 1,
      mentionCount: 0,
      length: 30
    });
  });
  test("When passed a string with one hashtag and one mention returns an object that includes the mention and hashtag information", () => {
    const tweet = "My awesome tweet about #coding to @northcoders";
    const result = getTweetData(tweet);
    expect(result).toEqual({
      tags: ["#coding"],
      mentions: ["@northcoders"],
      tagCount: 1,
      mentionCount: 1,
      length: 46
    });
  });
  test("When passed a string with two hashtags and two mentions returns an object that includes the mention and hashtag information not including duplicates", () => {
    const tweet =
      "I am #coding with @northcoders I love #coding and @northcoders";
    const result = getTweetData(tweet);
    expect(result).toEqual({
      tags: ["#coding"],
      mentions: ["@northcoders"],
      tagCount: 1,
      mentionCount: 1,
      length: 62
    });
  });
});

// when passed a string with no tags or mentions returns an object with empty keys for tags, mentions, tagCount and mentionCount and the length key filled in
//test with one mention
//test with one hashtag
//test with one hashtag and one mention
//test with two repeating hashtags and two repeating mentions
