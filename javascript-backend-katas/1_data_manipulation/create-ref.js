const createRef = (inputArray, key, value) => {
  const referenceBook = {};

  for (let i = 0; i < inputArray.length; i++) {
    const referenceBookKey = inputArray[i][key];
    const referenceBookValue = inputArray[i][value];
    referenceBook[referenceBookKey] = referenceBookValue;
  }

  return referenceBook;
};


module.exports = createRef;
