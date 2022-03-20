function formatVideoDuration(time) {
  var seconds = parseInt(time % 60);
  var minutes = parseInt((time / 60) % 60);
  var hours = parseInt(time / 3600);

  if (hours > 0) {
    return hours + ":" + minutes + ":" + seconds;
  } else {
    return minutes + ":" + seconds;
  }
}

export default formatVideoDuration;
