// Please do not change the name of this function
const justifyLine = (str, maxLineLength) => {
  if (str.length > maxLineLength) {
    return "String exceeds maximum line length.";
  }

  let extraSpace = maxLineLength - str.length;
  const arr = str.split("");

  arr.forEach((element, i) => {
    if (extraSpace > 0 && element === " ") {
      arr[i] += " ";
      extraSpace--;
    }
  });

  return arr.join("");
};

module.exports = { justifyLine };
