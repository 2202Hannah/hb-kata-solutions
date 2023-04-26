const { findClosingParenthesis } = require('../find-closing-parenthesis');

describe('findClosingParenthesis()', () => {
  it('If the string is empty you should return -1', () => {
    expect(findClosingParenthesis('')).toBe(-1);
  });
  it('If no number is given, you should return -1', () => {
    expect(findClosingParenthesis('hello')).toBe(-1);
  });
  it('should return the index of the closing parenthesis when one set is present', () => {
    expect(findClosingParenthesis('(hello)', 1)).toBe(6);
  });
  it('should return the index of the closing parenthesis when 2 sets are present and not nested', () => {
    expect(findClosingParenthesis('Hello, (world). (Something Else).', 2)).toBe(
      31
    );
  });
  it('should return the index of the closing parenthesis for the third opening bracket', () => {
    expect(
      findClosingParenthesis(
        'Hello, (world, (foo) bar (something) else), foo (bar) cat',
        3
      )
    ).toBe(35);
  });
  it('should return the index of the closing parenthesis for the first opening bracket', () => {
    expect(
      findClosingParenthesis(
        'Hello, (world, (foo) bar (something) else), foo (bar) cat',
        1
      )
    ).toBe(41);
  });
});
