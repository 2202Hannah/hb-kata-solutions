// Please do not change the name of this function
const simplifyDirections = directions => {
  const simplifiedArray = [];

  const oppositesObject = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST"
  };

  directions.forEach(direction => {
    if (simplifiedArray.includes(oppositesObject[direction])) {
      const i = simplifiedArray.indexOf(oppositesObject[direction]);
      simplifiedArray.splice(i, 1);
    } else simplifiedArray.push(direction);
  });

  return simplifiedArray;
};

module.exports = { simplifyDirections };
