import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

export const Showcase = () => {
  const { currentSong } = useContext(PlayerContext);

  return (
    <div className="flex bg-slate-900 text-gray-200">
      <img src={currentSong.cover} alt="JJ" className="w-32" />
      <p className="p-4 text-xl">{currentSong.name}</p>
    </div>
  );
};
