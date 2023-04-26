const formatAlbums = require('../format-albums.js');

describe('formatAlbums', () => {
  it('returns formatted data for one album, replacing artist with artistId, not mutating the original objects', () => {
    const albums = [
      { name: 'Grammatics', artist: 'Grammatics', releaseYear: 2009 }
    ];
    const artistIdReference = {
      Grammatics: 9923
    };
    expect(formatAlbums(albums, artistIdReference)).toEqual([
      { name: 'Grammatics', artistId: 9923, releaseYear: 2009 }
    ]);
    expect(albums).toEqual([
      { name: 'Grammatics', artist: 'Grammatics', releaseYear: 2009 }
    ]);
    expect(artistIdReference).toEqual({
      Grammatics: 9923
    });
  });
  it("returns a formatted albums object for more than one album", () => {
    const albums = [
      { name: 'Grammatics', artist: 'Grammatics', releaseYear: 2009 },
      { name: 'Kingdom of Rust', artist: 'Doves', releaseYear: 2009 }
    ];
    const artistIdReference = {
      Grammatics: 9923,
      Doves: 324
    };
    expect(formatAlbums(albums, artistIdReference)).toEqual([
      { name: 'Grammatics', artistId: 9923, releaseYear: 2009 },
      { name: 'Kingdom of Rust', artistId: 324, releaseYear: 2009 },
    ])
  })
});
