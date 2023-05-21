// Please do not change the name of this function
const getSubSquare = (matrix, xStartIndex, yStartIndex) => {
  let errorMessage = "";
  const arr = [];

  if (matrix === undefined) {
    errorMessage = "Please provide a matrix";
  } else if (xStartIndex === undefined) {
    errorMessage = "Please provide an xStartIndex";
  } else if (yStartIndex === undefined) {
    errorMessage = "Please provide a yStartIndex";
  } else if (
    xStartIndex >= matrix.length - 2 ||
    yStartIndex >= matrix.length - 2
  ) {
    errorMessage = "Subsquare exceeds the bounds of the matrix";
  } else for (let i = xStartIndex; i < xStartIndex + 3; i++) {
    arr.push(matrix[i].slice(yStartIndex, yStartIndex + 3));
  }

  return errorMessage ? errorMessage : arr;
};

module.exports = { getSubSquare };
