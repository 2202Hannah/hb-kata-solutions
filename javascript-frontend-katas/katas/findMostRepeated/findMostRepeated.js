// Please do not change the name of this function
const findMostRepeated = arr => {
  const returnObject = { elements: [] };

  //count the number of repeats in the array and add the element/counts as a key/value to the counts object
  const counts = {};
  arr.forEach(x => {
    counts[x] = (counts[x] || 0) + 1;
  });

  //find out the maximum value in the counts object
  const values = Object.values(counts);
  const max = Math.max(...values);

  //if the original array is empty or if the maximum repeats = 1 return an object with empty values
  if (arr.length === 0 || max === 1) {
    return { elements: [], repeats: null };
  } else {
  
    //then push the elements with the max repeats and their repeat count to the new object
    Object.entries(counts).forEach(entry => {
      if (entry[1] === max) {
        returnObject.elements.push(entry[0]);
        returnObject.repeats = max;
      }
    });
    return returnObject;
  }
};

module.exports = { findMostRepeated };
