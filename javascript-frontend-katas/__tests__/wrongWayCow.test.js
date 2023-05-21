const { wrongWayCow } = require("../katas/wrongWayCow/wrongWayCow");

describe("wrongWayCow()", () => {
  it("will return an empty array if all the cows are facing the same way", () => {
    expect(wrongWayCow("cowcowcowcow")).toEqual([]);
  });
  it("will return expected coordinates for one line of cows", () => {
    expect(wrongWayCow("wocwocwoccow")).toEqual([0, 3]);
  });
  it("will return expected coordinates when argument includes multiple lines of cows", () => {
    const field = 'cowcowcow...\n...woccowcow\n............'
    expect(wrongWayCow(field)).toEqual([1, 1]);
  });
  it("will return an expected coordinates when a line has one of each facing cow, ie second cow is wrong way cow", () => {
    const field = 'cowcowcowcow\n......cowcow\n............\n...cow...woc'
    expect(wrongWayCow(field)).toEqual([3, 3]);
  });
});
