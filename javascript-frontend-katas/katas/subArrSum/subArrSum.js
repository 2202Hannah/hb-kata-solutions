// Please do not change the name of this function
const subArrSum = array => {
  const subArr = [];
  let total = 0;
  let answer = 0;

  array.forEach((number, index) => {
    if (number >= 0 || total + number > 0) {
      total += number;
      subArr.push([index, number, total]);
    } else {
      total = 0;
      subArr.pop();
    }
  });

  subArr.forEach((arr, i) => {
    if (i > 0 && arr[2] > subArr[i - 1][2] && arr[2] > answer) {
      answer = arr[2];
    }
  });

  return answer;
};

module.exports = { subArrSum };
