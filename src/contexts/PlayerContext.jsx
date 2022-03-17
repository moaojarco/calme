import { createContext, useState } from "react";
import songs from "../assets/songs.json";

export const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {
  const [player] = useState({
    videoId: songs[0].youtube_id,
    options: {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    },
  });

  return (
    <PlayerContext.Provider value={{ player }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
