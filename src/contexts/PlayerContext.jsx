import { createContext, useState } from "react";
import songs from "../assets/songs.json";

export const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {
  const [songsRaw] = useState(songs);
  const [currentSong, setCurrentSong] = useState(songsRaw[0]);
  const [playerOptions] = useState({
    height: "1",
    width: "1",
    playerVars: {
      autoplay: 1,
      controls: true,
    },
  });

  return (
    <PlayerContext.Provider
      value={{
        playerOptions,
        songsRaw,
        currentSong,
        setCurrentSong,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
