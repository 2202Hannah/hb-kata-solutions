// Please do not change the name of this function
function changeCalculator(num) {
  let changeLeft = num;
  const divide = (changeLeft, y) => {
    return Math.floor(changeLeft / y);
  };
  const changeObj = {};

  changeObj[200] = divide(changeLeft, 200);
  changeLeft = changeLeft % 200;

  changeObj[100] = divide(changeLeft, 100);
  changeLeft = changeLeft % 100;

  changeObj[50] = divide(changeLeft, 50);
  changeLeft = changeLeft % 50;

  changeObj[20] = divide(changeLeft, 20);
  changeLeft = changeLeft % 20;

  changeObj[10] = divide(changeLeft, 10);
  changeLeft = changeLeft % 10;

  changeObj[5] = divide(changeLeft, 5);
  changeLeft = changeLeft % 5;

  changeObj[2] = divide(changeLeft, 2);
  changeLeft = changeLeft % 2;

  changeObj[1] = divide(changeLeft, 1);

  for (const key in changeObj) {
    if (changeObj[key] === 0) {
      delete changeObj[key];
    }
  }
  return changeObj;
}

module.exports = changeCalculator;
