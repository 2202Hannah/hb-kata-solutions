// Please do not change the name of this function
function pigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const arr = str.split(" ");
  let pigLatinStr = "";

  arr.forEach(word => {
    if (vowels.includes(word[0])) {
      pigLatinStr += word + "way ";
    } else
      pigLatinStr +=
        word
          .split("")
          .splice(1, word.length)
          .join("") +
        word[0] +
        "ay ";
  });

  return pigLatinStr.trim();
}

module.exports = pigLatin;
