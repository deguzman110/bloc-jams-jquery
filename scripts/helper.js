class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    const duration = song.duration;
    $('#time-control .total-time').text( player.prettyTime(duration) );
  }
}
const helper = new Helper
