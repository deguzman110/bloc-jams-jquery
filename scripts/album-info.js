{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
  $('.artist').text(album.artist);
  $('#release-info').text(album.releaseInfo);
}

// ('.artist') used as "artist" in within a class in index.html
// ('#release-info') used as "releaseInfo" is within an id
