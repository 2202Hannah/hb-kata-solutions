// Please do not change the name of this function
const checkDiagonalWinner = board => {
  const gamePlayArray = [];
  let returnValue = false;

  board.forEach((row, index) => {
    row.forEach((slot, i) => {
      if (slot !== null) {
        gamePlayArray.push(`${slot} ${index + i}`);
        gamePlayArray.push(`${slot} ${index - i}`);
      }
    });
  });

  gamePlayArray.forEach((play, i) => {
    if (gamePlayArray.filter(v => v === play).length > 3) {
      returnValue = play[0];
    }
  });

  return returnValue;
};

module.exports = { checkDiagonalWinner };
