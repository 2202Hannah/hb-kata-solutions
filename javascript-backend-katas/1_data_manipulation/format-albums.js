const formatAlbums = (albums, artistIdReference) => {
  const formattedAlbum = albums.map(album => {
    return { ...album };
  });

  for (const key in artistIdReference) {
    formattedAlbum.forEach(album => {
      if (album.artist === key) {
        album.artistId = artistIdReference[key];
        delete album.artist;
      }
      return album;
    });
  }
  return formattedAlbum;
};

module.exports = formatAlbums;
