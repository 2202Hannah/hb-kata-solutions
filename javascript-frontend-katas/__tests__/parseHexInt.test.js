const { parseHexInt } = require("../katas/parseHexInt/parseHexInt");

describe("parseHexInt()", () => {
  it("should return the number 255 when passed the hexidemimal ff", () => {
    expect(parseHexInt("FF")).toBe(255);
  });
});
