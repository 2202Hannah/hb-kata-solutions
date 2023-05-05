const { parseHexInt } = require("../katas/parseHexInt/parseHexInt");

describe("parseHexInt()", () => {
  it("should return the number 255 when passed the hexidemimal ff", () => {
    expect(parseHexInt("ff")).toBe(255);
  });
  it("should return the number 255 when passed the hexidemimal FF (uppercase)", () => {
    expect(parseHexInt("FF")).toBe(255);
  });
  it("should return the number 15 when passed the hexidemimal f", () => {
    expect(parseHexInt("f")).toBe(15);
  });
  it("should return the number 383 when passed the hexidemimal 17f", () => {
    expect(parseHexInt("17f")).toBe(383);
  });
  it("should return the number 872073 when passed the hexidemimal d4e89", () => {
    expect(parseHexInt("d4e89")).toBe(872073);
  });
});
