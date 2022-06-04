import { Song } from "../types";
import songs from "../assets/songs.json";

export function previousTrack(currentSong: Song, setCurrentSong: any) {
  const prevSong = songs.find((song) => song.id === currentSong.id - 1);
  setCurrentSong(prevSong);
  console.log("Previous song playing");
}

export function nextTrack(
  currentSong: Song,
  setCurrentSong: any,
  isShuffle: boolean
) {
  if (isShuffle) {
    console.log("Shuffle ON");
    setCurrentSong(songs[Math.trunc(Math.random() * songs.length)]);
  } else {
    const nextSong = songs.find((song) => song.id === currentSong.id + 1);
    setCurrentSong(nextSong);
    console.log("Next song playing");
  }
}
//TODO: Shuffle mode
