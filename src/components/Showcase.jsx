import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { ExtraControls } from "./ExtraControls";

export const Showcase = () => {
  const { currentSong } = useContext(PlayerContext);

  return (
    <div className="flex">
      <img src={currentSong.cover} alt="JJ" className="w-40" />
      <ExtraControls />
    </div>
  );
};
