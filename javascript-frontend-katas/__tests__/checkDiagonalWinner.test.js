const {
  checkDiagonalWinner,
} = require('../katas/checkDiagonalWinner/checkDiagonalWinner');

const {fillSquare} = require(`../katas/fillSquare/fillSquare`)

describe('checkDiagonalWinner()', () => {
  it('returns false when there is no diagonal winner', () => {
    const board = fillSquare([[null, null, null, null, null, null, null]])
    board.pop()
    expect(checkDiagonalWinner(board)).toBe(false)
  });
});
