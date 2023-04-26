const { supermarketQueue } = require('../supermarket-queue');

describe('supermarketQueue()', () => {
  it('Returns the total time when there is only 1 checkout', () => {
    expect(supermarketQueue([2, 2, 2], 1)).toBe(6);
  });
  it('Returns the largest time when there are 2 customers and 2 checkouts', () => {
    expect(supermarketQueue([2, 10], 2)).toBe(10);
  });
  it('Returns the shortest time plus the last time when there are 3 customers and 2 checkouts', () => {
    expect(supermarketQueue([2, 2, 2], 2)).toBe(4);
  });
  it('Returns the shortest time plus the last time when there are 4 customers and 2 checkouts', () => {
    expect(supermarketQueue([3, 2, 10, 11], 2)).toBe(14);
  });
});
