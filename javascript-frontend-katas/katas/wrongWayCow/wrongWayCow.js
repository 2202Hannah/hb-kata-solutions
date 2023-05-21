// Please do not change the name of this function
const wrongWayCow = field => {
  const arr = field.split(`\n`);
  const arr2 = [];
  const coordinateArray = [];

  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i].match(/.{3}/g));
  }

  arr2.forEach((line, index) => {
    let cowCounter = 0;
    let wocCounter = 0;
    line.forEach((cow, i) => {
      if (cow === "cow") {
        cowCounter += 1;
      }
      if (cow === "woc") {
        wocCounter += 1;
      }
      if (cow !== "..." && cow !== line[i - 1] && cow !== line[i + 1]) {
        coordinateArray.push(index, i);
      }
    });

    if (cowCounter === wocCounter && cowCounter > 0) {
      coordinateArray.shift();
      coordinateArray.shift();
    }
  });

  return coordinateArray;
};

module.exports = { wrongWayCow };
