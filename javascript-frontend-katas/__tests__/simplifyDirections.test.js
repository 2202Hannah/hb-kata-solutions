const {
  simplifyDirections
} = require("../katas/simplifyDirections/simplifyDirections");

describe("simplifyDirections()", () => {
  it("returns an empty array when the directions cancel each other out", () => {
    expect(simplifyDirections([`NORTH`, `SOUTH`])).toEqual([]);
  });
  it("returns [WEST] when the other directions cancel each other out", () => {
    expect(simplifyDirections([`NORTH`, `SOUTH`, `WEST`])).toEqual(["WEST"]);
  });
  it("returns [WEST] when the other directions cancel each other out", () => {
    expect(
      simplifyDirections(["NORTH", "WEST", "SOUTH", "WEST", "EAST"])
    ).toEqual(["WEST"]);
  });
  it("returns [NORTH, NORTH] when the other directions cancel each other out", () => {
    expect(
      simplifyDirections(["NORTH", "EAST", "SOUTH", "WEST", "NORTH", "NORTH"])
    ).toEqual(["NORTH", "NORTH"]);
  });
});
