// Please do not change the name of this function
const checkDiagonalWinner = board => {
  // first check the board is the correct size

  if (board.length !== 6 || board[0].length !== 7) {
    return "Please provide a 7 * 6 matrix";
  }

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
