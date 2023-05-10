// Please do not change the name of this function
const justifyLine = (str, maxLineLength) => {
  const arr = str.split("");
  const whitespaceAdder = (arr, extraSpace = maxLineLength - str.length) => {
    arr.forEach((element, i) => {
      if (extraSpace > 0 && element.includes(" ")) {
        arr[i] += " ";
        extraSpace--;
      }
    });

    return extraSpace > 0 ? whitespaceAdder(arr, extraSpace) : arr;
  };

  whitespaceAdder(arr);

  return str.length > maxLineLength
    ? "String exceeds maximum line length."
    : arr.join("");
};

module.exports = { justifyLine };
