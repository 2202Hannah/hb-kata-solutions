const { counterIntelligence } = require('../counter-intelligence');

describe('counterIntelligence()', () => {
  it('When passed one letter it should return `x`', () => {
    const str = 'Y';
    expect(counterIntelligence(str)).toBe('X');
  });
  it('When passed a sentence with two words moved one place, it should return the decoded version', () => {
    const str = 'BCD Y';
    expect(counterIntelligence(str)).toBe('ABC X');
  });
  it('When passed a sentence where the letters have been moved more than one place, it should return the decoded version', () => {
    const str = 'NKRRU YCKKZNKGXZ D';
    expect(counterIntelligence(str)).toBe('HELLO SWEETHEART X');
  });
  it('When passed a sentence with punctuation, it should return the decoded version', () => {
    const str =
      'ANVNVKNA CX YRLT DY IDLLQRWR XW HXDA FJH QXVN OAXV FXAT, MJAURWP G';
    expect(counterIntelligence(str)).toBe(
      'REMEMBER TO PICK UP ZUCCHINI ON YOUR WAY HOME FROM WORK, DARLING X'
    );
  });
  it('When passed a sentence with lowercase letters, it should return the decoded version in uppercase', () => {
    const str = 'ngbk g toik jge :) d';
    expect(counterIntelligence(str)).toBe('HAVE A NICE DAY :) X');
  });
});
