function zeros(i: number) {
  if (i < 10) {
    return "0" + i;
  } else {
    return i;
  }
}

function formatVideoDuration(time: number | undefined) {
  if (time) {
    const seconds = parseInt(String(time % 60));
    const minutes = parseInt(String((time / 60) % 60));
    const hours = parseInt(String(time / 3600));

    if (hours > 0) {
      return `${hours}:${zeros(minutes)}:${zeros(seconds)}`;
    } else {
      // console.log(minutes);
      return zeros(minutes) + ":" + zeros(seconds);
    }
  }
}

export default formatVideoDuration;
