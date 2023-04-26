const treatDoggos = require('../treat-doggos.js');

describe('treatDoggos', () => {
  it('returns a new array with hasRabies updated for one dog', () => {
    const input = [{ name: 'Otis', age: 3, hasRabies: true }];
    expect(treatDoggos(input)).toEqual([
      { name: 'Otis', age: 3, hasRabies: false }
    ]);
    expect(input).toEqual([{ name: 'Otis', age: 3, hasRabies: true }]);
  });
  it('returns a new array with hasRabies updated for multiple dogs', () => {
    const input = [
      { name: 'Otis', age: 3, hasRabies: true },
      { name: 'Paige', age: 13, hasRabies: false },
      { name: 'Oslo', age: 6, hasRabies: true }
    ];
    expect(treatDoggos(input)).toEqual([
      { name: 'Otis', age: 3, hasRabies: false },
      { name: 'Paige', age: 13, hasRabies: true },
      { name: 'Oslo', age: 6, hasRabies: false }
    ]);
    expect(input).toEqual([
      { name: 'Otis', age: 3, hasRabies: true },
      { name: 'Paige', age: 13, hasRabies: false },
      { name: 'Oslo', age: 6, hasRabies: true }
    ]);
  });
});
