const { wrongWayCow } = require("../katas/wrongWayCow/wrongWayCow");

describe("wrongWayCow()", () => {
  it("will return an empty array if all the cows are facing the same way", () => {
    expect(wrongWayCow("cowcowcowcow")).toEqual([]);
  });
  it("will return an empty array if all the cows are facing the same way", () => {
    expect(wrongWayCow("wocwocwoccow")).toEqual([0, 3]);
  });
  it("will return an empty array if all the cows are facing the same way", () => {
    const field = 'cowcowcow...\n...woccowcow\n............'
    expect(wrongWayCow(field)).toEqual([1, 1]);
  });
  
});
