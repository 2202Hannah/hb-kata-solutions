// Please do not change the name of this function
const binarySearch = (num, arr, start = 0, end = arr.length - 1) => {
  const middle = Math.floor((start + end) / 2);

  if (num === arr[middle]) {
    return middle;
  }

  if (start >= end) {
    return -1;
  }

  return num < arr[middle]
    ? binarySearch(num, arr, start, middle - 1)
    : binarySearch(num, arr, mid + 1, end);


  // Original solution not using recursion. Uses a while loop instead. 
    
  // while (start <= end) {
  //   let middle = Math.floor((start + end) / 2);

  //   if (arr[middle] === num) {
  //     return middle;
  //   }

  //   if (arr[middle] > num) {
  //     end = middle - 1;
  //   } else {
  //     start = middle + 1;
  //   }
  // }
  // return -1;
};

module.exports = { binarySearch };
