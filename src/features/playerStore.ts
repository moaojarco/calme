import { createSlice } from "@reduxjs/toolkit";
import { Song } from "../types";
import songs from "../assets/songs.json";

export type PlayerStore = {
  player: {
    youtubePlayer: any;
    playerInfo: {
      currentSong: Song;
      currentTime: number;
      duration: number;
      volume: number;
      isShuffle: boolean;
      playerOptions: {
        height: string | number;
        width: string | number;
        playerVars: {
          autoplay: number;
        };
      };
    };
  };
};

const initialState: PlayerStore = {
  player: {
    youtubePlayer: null,
    playerInfo: {
      currentSong: songs[Math.floor(Math.random() * songs.length)],
      currentTime: 0,
      duration: 0,
      volume: 30,
      isShuffle: false,
      playerOptions: {
        height: "1",
        width: "1",
        playerVars: {
          autoplay: 1,
        },
      },
    },
  },
};

export const playerSlice = createSlice({
  name: "player",
  initialState: initialState,
  reducers: {
    setPlayer: (state, action) => {
      state.player.youtubePlayer = action.payload;
    },
    setIsShuffle: (state) => {
      state.player.playerInfo.isShuffle = !state.player.playerInfo.isShuffle;
    },
    setCurrentSong: (state, action) => {
      state.player.playerInfo.currentSong = action.payload;
    },
    setCurrentTime: (state, action) => {
      state.player.playerInfo.currentTime = action.payload;
    },
    setVolume: (state, action) => {
      state.player.playerInfo.volume = action.payload;
    },
    setDuration: (state, action) => {
      state.player.playerInfo.duration = action.payload;
    },
  },
});

export const {
  setPlayer,
  setIsShuffle,
  setCurrentSong,
  setCurrentTime,
  setVolume,
  setDuration,
} = playerSlice.actions;

export default playerSlice.reducer;
