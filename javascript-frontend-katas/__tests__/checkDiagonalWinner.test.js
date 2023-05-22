const {
  checkDiagonalWinner
} = require("../katas/checkDiagonalWinner/checkDiagonalWinner");

const { fillSquare } = require(`../katas/fillSquare/fillSquare`);

describe("checkDiagonalWinner()", () => {
  it("returns false when there is no game play", () => {
    const board = fillSquare([[null, null, null, null, null, null, null]]);
    board.pop();
    expect(checkDiagonalWinner(board)).toBe(false);
  });
  it("returns false when there is no diagonal winner", () => {
    const board = fillSquare([[], [], [], [], [], ["x", "x", "x", "x"], []]);
    board.pop();
    expect(checkDiagonalWinner(board)).toBe(false);
  });
  it("returns false when there is no diagonal winner", () => {
    const board = fillSquare([
      [],
      [],
      [null, "o"],
      [null, "o"],
      [null, "o"],
      [null, "o"],
      []
    ]);
    board.pop();
    expect(checkDiagonalWinner(board)).toBe(false);
  });
  it("returns x when x is the diagonal winner (positive diagonal)", () => {
    const board = fillSquare([
      [],
      [],
      [null, null, null, "x"],
      [null, null, "x"],
      [null, "x"],
      ["x"],
      []
    ]);
    board.pop();
    expect(checkDiagonalWinner(board)).toBe("x");
  });
  it("returns o when o is the diagonal winner (negative diagonal)", () => {
    const board = fillSquare([
      [],
      [],
      [null, null, "o"],
      [null, null, null, "o"],
      [null, null, null, null, "o"],
      [null, null, null, null, null, "o"],
      []
    ]);
    board.pop();
    expect(checkDiagonalWinner(board)).toBe("o");
  });
  it("returns an error message when the board matrix is not the correct dimensions", () => {
    const board = fillSquare([
      [],
      [],
      [null, null, "o"],
      [null, null, null, "o"],
      [null, null, null, null, "o"],
      [null, null, null, null, null, "o"],
      []
    ]);
    expect(checkDiagonalWinner(board)).toBe("Please provide a 7 * 6 matrix");
  });
});
