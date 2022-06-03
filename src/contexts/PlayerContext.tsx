import { createContext, useState } from "react";
import songs from "../assets/songs.json";

export const PlayerContext = createContext({} as any);

const PlayerProvider = ({ children }: any) => {
  const [songsRaw] = useState(songs);
  const [currentSong, setCurrentSong] = useState(
    songsRaw[Math.floor(Math.random() * songsRaw.length)]
  );

  const [player, setPlayer] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(5);

  const [playerOptions] = useState({
    height: "1",
    width: "1",
    playerVars: {
      autoplay: 1,
    },
  });

  return (
    <PlayerContext.Provider
      value={{
        playerOptions,
        songsRaw,
        currentSong,
        setCurrentSong,
        player,
        setPlayer,
        currentTime,
        setCurrentTime,
        duration,
        setDuration,
        volume,
        setVolume,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
