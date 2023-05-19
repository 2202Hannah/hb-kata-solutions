const rangeInclusive = require("range-inclusive");

// Please do not change the name of this function
const multiplicationTable = num => {
  const arr = [];
  let count = 0;

  for (let i = 0; i <= num; i++) {
    arr.push(rangeInclusive(count, num + count));
    count++;
  }

  arr.forEach((subArray, index) => {
    if (index > 0) {
      subArray.forEach((number, i) => {
        if (i > 0) {
          subArray[i] = index * i;
        }
      });
    }
  });

  return num === 0 ? [] : arr;
};

module.exports = { multiplicationTable };
