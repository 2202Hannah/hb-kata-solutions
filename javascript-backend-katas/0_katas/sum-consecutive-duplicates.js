// Please do not change the name of this function
const sumConsecutiveDuplicates = arr => {
  const groupedArray = arr.join('').match(/(.)\1*/g);
  const splitArray = groupedArray.map(str => {
    return str.split('');
  });

  return splitArray.map(array => {
    let value = 0;
    for (let i = 0; i < array.length; i++) {
      value += parseFloat(array[i]);
    }
    return value;
  });
};

module.exports = { sumConsecutiveDuplicates };
