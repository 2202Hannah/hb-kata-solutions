const { sumConsecutiveDuplicates } = require('../sum-consecutive-duplicates');

describe('sumConsecutiveDuplicates()', () => {
  it('should return a copy of the same array if there are no duplicates', () => {
    const arr = [1, 2, 3];
    expect(sumConsecutiveDuplicates(arr)).toEqual([1, 2, 3]);
  });
  it('should return a copy of the same array if there are no duplicates', () => {
    const arr = [1, 1, 2, 3];
    expect(sumConsecutiveDuplicates(arr)).toEqual([2, 2, 3]);
  });
  it('should return a copy of the same array if there are no duplicates', () => {
    const arr = [1, 1, 2, 2, 3, 3];
    expect(sumConsecutiveDuplicates(arr)).toEqual([2, 4, 6]);
  });
  it('should return a copy of the same array if there are no duplicates', () => {
    const arr = [1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1];
    expect(sumConsecutiveDuplicates(arr)).toEqual([2, 2, 4, 2, 3]);
  });
});
