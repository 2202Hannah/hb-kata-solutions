const { wrongWayCow } = require("../katas/wrongWayCow/wrongWayCow");

describe("wrongWayCow()", () => {
  it("will return an empty array if all the cows are facing the same way", () => {
    expect(wrongWayCow("cowcowcowcow")).toEqual([]);
  });
});
