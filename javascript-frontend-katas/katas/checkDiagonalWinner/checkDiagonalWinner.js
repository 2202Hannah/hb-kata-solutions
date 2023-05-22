// Please do not change the name of this function
const checkDiagonalWinner = board => {
  // first check the board is the correct size
  if (board.length !== 6 || board[0].length !== 7) {
    return "Please provide a 7 * 6 matrix";
  }

  const diagonalGamePlayArray = [];
  const verticalGamePlayArray = [];
  const horizontalGamePlayArray = [];
  let returnValue = false;

  board.forEach((row, index) => {
    row.forEach((slot, i) => {
      if (slot !== null) {
        horizontalGamePlayArray.push(
          `${slot} ${(index + i - horizontalGamePlayArray.length) * index}`
        );
        verticalGamePlayArray.push(
          `${slot} ${index - i - verticalGamePlayArray.length}`
        );
        diagonalGamePlayArray.push(`${slot} ${index + i}`);
        diagonalGamePlayArray.push(`${slot} ${index - i}`);
      }
    });
  });

  diagonalGamePlayArray.forEach((play, i) => {
    if (diagonalGamePlayArray.filter(v => v === play).length > 3) {
      returnValue = play[0];
    }
  });

  horizontalGamePlayArray.forEach((play, i) => {
    if (horizontalGamePlayArray.filter(v => v === play).length > 3) {
      returnValue = play[0];
    }
  });

  verticalGamePlayArray.forEach((play, i) => {
    if (verticalGamePlayArray.filter(v => v === play).length > 3) {
      returnValue = play[0];
    }
  });

  return returnValue;
};

module.exports = { checkDiagonalWinner };
