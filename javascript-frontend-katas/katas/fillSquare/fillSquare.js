// Please do not change the name of this function
const fillSquare = arr => {

  // REFACTOR IDEA manually iterating could improve efficiency as the current code iterates over the array multiple times (map, mex, indexOf, additional loops...)

  const square = [];
  const lengths = arr.map(array => array.length);
  const maxLength = lengths[lengths.indexOf(Math.max(...lengths))];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === maxLength) {
      square.push(arr[i]);
    } else {
      const a = [];
      for (let j = 0; j < maxLength; j++) {
        if (!arr[i][j]) {
          a.push(null);
        } else a.push(arr[i][j]);
      }

      square.push(a);
    }
  }
  return square;
};

module.exports = { fillSquare };
