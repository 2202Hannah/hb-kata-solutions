const rotateArray = require("./rotate-array");

describe("rotateArray()", () => {
  test("When passed 0 it returns the array unchanged", () => {
    const arr = [1, 2, 3];
    const num = 0;
    const result = rotateArray(arr, num);
    expect(result).toEqual([1, 2, 3]);
  });
  test("When passed 1 it returns the array rotated once", () => {
    const arr = [1, 2, 3];
    const num = 1;
    const result = rotateArray(arr, num);
    expect(result).toEqual([3, 1, 2]);
  });
  test("When passed 2 it returns the array rotated twice", () => {
    const arr = [1, 2, 3, 4, 5];
    const num = 3;
    const result = rotateArray(arr, num);
    expect(result).toEqual([3, 4, 5, 1, 2]);
  });
  test("When passed -1 it returns the array rotated once in the opposite direction", () => {
    const arr = [1, 2, 3];
    const num = -1;
    const result = rotateArray(arr, num);
    expect(result).toEqual([2, 3, 1]);
  });
  test("When passed -3 it returns the array rotated thrice in the opposite direction", () => {
    const arr = [1, 2, 3, 4, 5];
    const num = -3;
    const result = rotateArray(arr, num);
    expect(result).toEqual([4, 5, 1, 2, 3]);
  });
});
