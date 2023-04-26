// Please do not change the name of this function
const findPartner = (students, directions) => {
  const partnerArray = ["0,0"];
  const positionObj = {};
  let amountInRow = students[0].length;
  const partnerNames = [];
  let position = "";

  const nameFinder = (obj, position) => {
    for (key in obj) {
      if (obj[key] === position) {
        partnerNames.push(key);
        partnerArray.push(position);
      }
    }
  };

  for (let i = 0; i < students.length; i++) {
    students[i].forEach((student, index) => {
      positionObj[student] = `${i},${index}`;
    });
  }

  directions.forEach(direction => {
    const currentRow = partnerArray[partnerArray.length - 1][0];
    const lastPosition = partnerArray[partnerArray.length - 1].split(",")[1];

    if (direction === "right") {
      position = `${currentRow},` + (lastPosition * 1 + 1);
    }
    if (direction === "left") {
      if (lastPosition === "0") {
        position = Object.values(positionObj)[currentRow + amountInRow - 1];
      } else {
        position = `${currentRow},` + (lastPosition * 1 - 1);
      }
    }
    if (direction === "down") {
      position = currentRow * 1 + 1 + `,${lastPosition}`;
    }
    if (direction === "up") {
      position = currentRow * 1 - 1 + `,${lastPosition}`;
    }
    nameFinder(positionObj, position);
  });

  return partnerNames;
};

module.exports = { findPartner };
