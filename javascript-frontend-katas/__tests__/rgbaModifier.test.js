const { rgbaModifier } = require("../katas/rgbaModifier/rgbaModifier");

describe("rgbaModifier()", () => {
  it("should increase the RGB values by 50% and change the opacity to 1", () => {
    const rgbaStr = "rgba(100,100,100,0.6)";
    const percent = 50;
    const opacity = 1;
    expect(rgbaModifier(rgbaStr, percent, opacity)).toBe("rgba(150,150,150,1)");
  });
  it("should increase the RGB values by 20% and change the opacity to 0.4", () => {
    const rgbaStr = "rgba(50,100,20,0.6)";
    const percent = 20;
    const opacity = 0.4;
    expect(rgbaModifier(rgbaStr, percent, opacity)).toBe("rgba(60,120,24,0.4)");
  });
  it("should decrease the RGB values by 30% and change the opacity to 0.3", () => {
    const rgbaStr = "rgba(44,70,180,0.9)";
    const percent = -30;
    const opacity = 0.3;
    expect(rgbaModifier(rgbaStr, percent, opacity)).toBe("rgba(31,49,126,0.3)");
  });
  it("should increase the RGB values by 90% and change the opacity to 0.7, limiting the max value to 255", () => {
    const rgbaStr = "rgba(225,60,160,1)";
    const percent = 90;
    const opacity = 0.7;
    expect(rgbaModifier(rgbaStr, percent, opacity)).toBe(
      "rgba(255,114,255,0.7)"
    );
  });
  it("should decrease the RGB values by 100% and change the opacity to 0.5, limiting the min value to 0", () => {
    const rgbaStr = "rgba(50,78,12,0.8)";
    const percent = -100;
    const opacity = 0.5;
    expect(rgbaModifier(rgbaStr, percent, opacity)).toBe("rgba(0,0,0,0.5)");
  });
});
