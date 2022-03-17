import Youtube from "react-youtube";
import { PlayerContext } from "../contexts/PlayerContext";
import { useContext } from "react";

export const Player = () => {
  const { player } = useContext(PlayerContext);

  return (
    <div>
      <Youtube opts={player.options} videoId={player.videoId} />
    </div>
  );
};
