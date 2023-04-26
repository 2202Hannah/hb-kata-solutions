const createRef = require('../create-ref.js');

describe('createRef', () => {
  it('should return an object of name:phone number from an array of people and the input object should not be mutated', () => {
    const input = [
      {
        name: 'vel',
        phoneNumber: '01134445566',
        address: 'Northcoders, Leeds'
      },
      {
        name: 'ant',
        phoneNumber: '01612223344',
        address: 'Northcoders, Manchester'
      }
    ];
    expect(createRef(input, 'name', 'phoneNumber')).toEqual({
      vel: '01134445566',
      ant: '01612223344'
    });
    expect(input).toEqual([
      {
        name: 'vel',
        phoneNumber: '01134445566',
        address: 'Northcoders, Leeds'
      },
      {
        name: 'ant',
        phoneNumber: '01612223344',
        address: 'Northcoders, Manchester'
      }
    ]);
  });
  it('Should return an object of name: address when passed those as arguements with an array of people', () => {
    const input = [
      {
        name: 'vel',
        phoneNumber: '01134445566',
        address: 'Northcoders, Leeds'
      },
      {
        name: 'ant',
        phoneNumber: '01612223344',
        address: 'Northcoders, Manchester'
      }
    ];
    expect(createRef(input, 'name', 'address')).toEqual({
      vel: 'Northcoders, Leeds',
      ant: 'Northcoders, Manchester'
    });
  });
  it('Should return an object of track:artist when passed those as arguements with an array of songs', () => {
    input = [
      {
        track: '11:11',
        artist: 'Dinosaur Pile-Up',
        releaseYear: 2015,
        album: 'Eleven Eleven'
      },
      {
        track: 'Powder Blue',
        artist: 'Elbow',
        releaseYear: 2001,
        album: 'Asleep In The Back'
      }
    ];
    expect(createRef(input, 'track', 'artist')).toEqual({
      '11:11': 'Dinosaur Pile-Up',
      'Powder Blue': 'Elbow'
    });
  });
});
