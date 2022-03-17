import Youtube from "react-youtube";
import { PlayerContext } from "../contexts/PlayerContext";
import { useContext } from "react";

export const Player = () => {
  const { player } = useContext(PlayerContext);

  return (
    <div>
      <h1 className="text-red-500 text-4xl">Youtube</h1>
      <Youtube opts={player.options} videoId={player.videoId} />
    </div>
  );
};
