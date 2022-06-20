import { Song } from "../types";
import songs from "../assets/songs.json";

export function previousTrack(currentSong: Song) {
  const prevSong = songs.find((song) => song.id === currentSong.id - 1);
  if(currentSong.id === 1) return songs.find((song) => song.id === 1); 
  return prevSong; 
}

export function nextTrack(
  currentSong: Song,
  isShuffle: boolean
) {
  if (isShuffle) {
    console.log("Shuffle ON");
    const nextSong = songs[Math.trunc(Math.random() * songs.length)]
    return nextSong; 
  } else {
    const nextSong = songs.find((song) => song.id === currentSong.id + 1);
    console.log("Next song playing");
    return nextSong; 
  }
}
