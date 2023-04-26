// Please do not change the name of this function
const findClosingParenthesis = (str, num) => {
  // PAT'S CODE
  // const arr = str.split('');
  // let bracketAmount = 0;
  // let loopIterations = 0;

  // let count = num;

  // if (str.length === 0 || num === undefined) {
  //   return -1;
  // }

  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i], i);
  //   if ('('.includes(arr[i])) {
  //     bracketAmount += 1;
  //     count += 1;
  //   } else if (')'.includes(arr[i])) {
  //     bracketAmount -= 1;
  //     count -= 1;
  //   }
  //   if (
  //     count === num &&
  //     bracketAmount === 0
  //     // loopIterations > str.indexOf('(')
  //   ) {
  //     return i;
  //   }
  //   loopIterations++;
  // }
  // -----

  const closeIndexArray = [];
  const brackets = [];

  function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }

  const open = getPosition(str, '(', num);

  if (str.length === 0 || num === undefined) {
    return -1;
  }

  for (let i = open; i < str.length; i++) {
    if (str[i] === '(') {
      brackets.push(str[i]);
    }

    if (str[i] === ')') {
      brackets.pop();
    }

    if (str[i] === ')' && brackets.length === 0) {
      closeIndexArray.push(i);
    }
  }

  return closeIndexArray[0];
};
module.exports = { findClosingParenthesis };
