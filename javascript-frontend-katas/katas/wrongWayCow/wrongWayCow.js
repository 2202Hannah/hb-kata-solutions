// Please do not change the name of this function
const wrongWayCow = field => {
  const arr = field.split(`\n`);
  const arr2 = [];
  const arr3 = [];

  arr.filter(a => a !== "...");

  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i].match(/.{3}/g));
  }

  const coordinateArray = [];

  arr2.forEach((line, index) => {
    line.forEach((cow, i) => {
      if (cow !== "..." && cow !== line[i - 1] && (cow !== line[i + 1])) {
        coordinateArray.push(index, i);
      }
    });
  });

  return coordinateArray;
};

module.exports = { wrongWayCow };
