// Please do not change the name of this function
const binarySearch = (num, arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === num) {
      return middle;
    }

    if (arr[middle] > num) {
      right = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
};

module.exports = { binarySearch };
