const ageDog = require('../age-dog.js');

describe('ageDog', () => {
  it('returns a new copy of the dog when num = 0', () => {
    expect(ageDog({ name: 'Otis', age: 1 }, 0)).toEqual({
      name: 'Otis',
      age: 1
    });
  });
  it('returns a new copy of the dog when num = 3', () => {
    expect(ageDog({ name: 'Otis', age: 1 }, 3)).toEqual({
      name: 'Otis',
      age: 4
    });
  });
  it('The original dog object is not mutated', () => {
    const input = { name: 'Otis', age: 1 };
    ageDog(input, 1);
    expect(input).toEqual({ name: 'Otis', age: 1 });
  });
});
