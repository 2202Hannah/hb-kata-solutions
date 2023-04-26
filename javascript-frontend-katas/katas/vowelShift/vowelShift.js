// Please do not change the name of this function
const vowelShift = (str, num) => {
  const vowelArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const strAsArray = str.split("");
  let placeholder = "";
  const firstVowelIndex = str.search(/([aeiou])/i);

  for (let i = 0; i < num; i++) {
    strAsArray.map((letter, i) => {
      if (vowelArray.includes(letter)) {
        placeholder = strAsArray.splice(i, 1, placeholder)[0];
      }
    });

    strAsArray[firstVowelIndex] = placeholder;
  }
  return strAsArray.join("");
};

module.exports = { vowelShift };
