// Please do not change the name of this function
const wrongWayCow = field => {
  const arr = field.split(`\n`);
  const arr2 = [];
  const arr3 = [];

  arr.filter(a => a !== "...");

  //console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i].match(/.{3}/g));
  }

  for (let i = 0; i < arr2.length; i++) {
    arr3.push(arr2[i].filter(a => a !== "..."));
  }

  // arr.forEach(line => {
  //   arr[0] = line.match(/.{3}/g);
  // });
  // console.log(arr.map(line => {
  //   line.match(/.{3}/g);
  // }))
  const coordinateArray = [];

  //console.log(arr3);

  arr3.forEach((line, index) => {
    line.forEach((cow, i) => {
      if (cow !== line[i - 1] && (cow !== line[i + 1] || cow !== line[0])) {
        coordinateArray.push(index, i);
      }
    });
  });

  console.log(coordinateArray);
  return coordinateArray;
};

module.exports = { wrongWayCow };
