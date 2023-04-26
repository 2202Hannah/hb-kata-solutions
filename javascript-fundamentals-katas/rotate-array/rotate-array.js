// Please do not change the name of this function
function rotateArray(arr, num) {
  if (Math.sign(num) === 1 || num === 0) {
    for (let i = 0; i < num; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
  } else
    for (let i = 0; i > num; i--) {
      arr.push(arr.shift());
    }
    return arr;
}

module.exports = rotateArray;
