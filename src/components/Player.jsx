import { useContext } from "react";
import YouTube from "react-youtube";
import { PlayerContext } from "../contexts/PlayerContext";

export const Player = () => {
  const { currentSong, playerOptions } = useContext(PlayerContext);

  return (
    <>
      <YouTube videoId={currentSong.youtube_id} opts={playerOptions} />
    </>
  );
};
