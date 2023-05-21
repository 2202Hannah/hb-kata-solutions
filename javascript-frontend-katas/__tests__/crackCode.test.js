const { crackCode } = require("../katas/crackCode/crackCode");

describe("crackCode()", () => {
  it("returns true for code that passes the requirements", () => {
    expect(crackCode("ddd-aaa-z-y-x-123(adxy)")).toBe(true);
  });
  it("returns true for code that passes the requirements", () => {
    expect(crackCode('a-b-c-d-e-f-g-h-i-577(abcd)')).toBe(true);
  });
  it("returns true for code that meets the requirements", () => {
    expect(crackCode('eeeeeeee-d-cc-b-aaaa(abce)')).toBe(true);
  });
  it("returns true for code that meets the requirements", () => {
    expect(crackCode('fff-gg-xx-ss-yyy(fgsy)')).toBe(true);
  });
  it("returns false for code that fails the requirements", () => {
    expect(crackCode('fff-gg-xx-ss-y(fgsy)')).toBe(false);
  });
  it("returns false for code that fails the requirements", () => {
    expect(crackCode('fff-gg-xx-ss-y(fgsy)')).toBe(false);
  });
});
