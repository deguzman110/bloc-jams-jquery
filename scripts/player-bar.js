{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  $('button#next').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });

// Used 'button#next' block for consistency in formatting
  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const prevSongIndex = currentSongIndex - 1; //Lowers index by 1
    if (prevSongIndex < 0) { return; }

    const prevSong = album.songs[prevSongIndex];
    // If the prevSongIndex is less than 0, the button will not respond, otherwise it will construct prevSong using the index of the previous song
    player.playPause(prevSong);
    // Plays the previous song
  });

  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });

  setInterval( () => {
    if (player.playState !== 'playing') { return; }
      const currentTime = player.getTime();
      const duration = player.getDuration();
      const percent = (currentTime / duration) * 100;
      $('#time-control .current-time').text( currentTime );
      $('#time-control .total-time').text ( duration );
      $('#time-control input').val(percent);
  }, 1000);

  // Assignment Work:
  // #1
  $('#volume-control input').on('input', function (event) {
    player.setVolume(event.target.value);
  });
}
