// Please do not change the name of this function
const justifyLine = (str, maxLineLength) => {
  if (str.length > maxLineLength) {
    return "String exceeds maximum line length.";
  }

  let extraSpace = maxLineLength - str.length;
  const arr = str.split("");

  const whitespaceAdder = (arr, extraSpace) => {
    arr.forEach((element, i) => {
      if (extraSpace > 0 && element.includes(" ")) {
        arr[i] += " ";
        extraSpace--;
      }
    });

    if (extraSpace > 0) {
      whitespaceAdder(arr, extraSpace);
    } else return arr;
  };

  whitespaceAdder(arr, extraSpace);

  return arr.join("");
};

module.exports = { justifyLine };
