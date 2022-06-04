import { Song } from "../types";
import songs from "../assets/songs.json";

export function previousTrack(currentSong: Song, setCurrentSong: any) {
    const prevSong = songs.find((song) => song.id === currentSong.id - 1);
    setCurrentSong(prevSong);
    console.log("Next song playing"); 
}

export function nextTrack(currentSong: Song, setCurrentSong: any) {
    const nextSong = songs.find((song) => song.id === currentSong.id + 1);
    setCurrentSong(nextSong);
    console.log("Next song playing"); 
}
