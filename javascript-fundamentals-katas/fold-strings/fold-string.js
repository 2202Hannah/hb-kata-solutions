// Please do not change the name of this function
function foldString(str) {
  return str
    .split(" ")
    .map(word => {
      const len = word.length;

      if (len <= 1 || len === 3) return word;
      return len % 2 === 0
        ? word
            .slice(0, Math.floor(len / 2))
            .split("")
            .reverse()
            .join("") +
            word
              .slice(Math.ceil(len / 2), len)
              .split("")
              .reverse()
              .join("")
        : word
            .slice(0, Math.floor(len / 2))
            .split("")
            .reverse()
            .join("") +
            word[Math.ceil(len / 2)] +
            word
              .slice(Math.ceil(len / 2), len)
              .split("")
              .reverse()
              .join("");
    })
    .join(" ");
}

module.exports = foldString;
