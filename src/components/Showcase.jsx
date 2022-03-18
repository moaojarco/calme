import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { ExtraControls } from "./ExtraControls";

export const Showcase = () => {
  const { currentSong } = useContext(PlayerContext);

  return (
    <div className="flex bg-slate-900 text-gray-200 w-full">
      <img src={currentSong.cover} alt="JJ" className="xs:w-20 lg:w-32" />
      <div>
        <p className="p-4 xs:text-xs md:text-xl lg:text-2xl">
          {currentSong.name}
        </p>
        <ExtraControls />
      </div>
    </div>
  );
};
