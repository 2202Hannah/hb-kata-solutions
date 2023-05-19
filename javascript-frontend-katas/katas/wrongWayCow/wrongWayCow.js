// Please do not change the name of this function
const wrongWayCow = field => {
  const arr = field.match(/.{3}/g);
  const coordinateArray = [];

  arr.forEach((cow, index) => {
    if (cow !== arr[index -1] && (cow !== arr[index + 1] || cow !== arr[0])) {
      coordinateArray.push(0, index)
    }
  })

  return coordinateArray;
};

module.exports = { wrongWayCow };
