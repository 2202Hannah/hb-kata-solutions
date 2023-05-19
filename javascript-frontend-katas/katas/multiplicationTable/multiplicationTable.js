const rangeInclusive = require("range-inclusive");

// Please do not change the name of this function
const multiplicationTable = num => {
  const arr = [];

  for (let i = 0; i <= num; i++) {
    arr.push(rangeInclusive(0, num));
  }

  arr.forEach((subArray, index) => {
   if (index > 0) {
     console.log(subArray.map((x, i) => x * i))
   }
  });

  //console.log(arr)

  return num === 0 ? [] : arr;
};

module.exports = { multiplicationTable };
