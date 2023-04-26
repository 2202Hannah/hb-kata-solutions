const { secondsToTimeString } = require('../seconds-to-time-string');

describe('secondsToTimeString()', () => {
  it('should return 1 second when passed 1', () => {
    const seconds = 1;
    expect(secondsToTimeString(seconds)).toBe('1 second');
  });
  it('should return 2 seconds when passed 2', () => {
    const seconds = 2;
    expect(secondsToTimeString(seconds)).toBe('2 seconds');
  });
  it('should return 1 minute when passed 60', () => {
    const seconds = 60;
    expect(secondsToTimeString(seconds)).toBe('1 minute');
  });
  it('should return 2 minutes when passed 120', () => {
    const seconds = 120;
    expect(secondsToTimeString(seconds)).toBe('2 minutes');
  });
  it('should return 2 minutes and 1 second when passed 120', () => {
    const seconds = 3661;
    expect(secondsToTimeString(seconds)).toBe('1 hour, 1 minute and 1 second');
  });
  it('should return 1 month and 1 second when passed 2628001', () => {
    const seconds = 2628001;
    expect(secondsToTimeString(seconds)).toBe('1 month and 1 second');
  });
  it('should return 1 year, 1 day, 1 hour, 1 minute and 1 second when passed 31626061', () => {
    const seconds = 31626061;
    expect(secondsToTimeString(seconds)).toBe(
      '1 year, 1 day, 1 hour, 1 minute and 1 second'
    );
  });
  it('should return 4 years, 18 days, 1 hour, 2 minutes and 22 seconds when passed 127702942', () => {
    const seconds = 127702942;
    expect(secondsToTimeString(seconds)).toBe(
      '4 years, 18 days, 1 hour, 2 minutes and 22 seconds'
    );
  });
});
