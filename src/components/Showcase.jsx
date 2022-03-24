import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { ExtraControls } from "./ExtraControls";

export const Showcase = () => {
  const { currentSong, player } = useContext(PlayerContext);

  return (
    <div className="flex text-gray-200 w-full showcase">
      <img src={currentSong.cover} alt="JJ" className="xs:w-32 lg:w-32" />
      <div className="p-4">
        <p className="xs:text-sm sm:text-base md:text-xl lg:text-2xl">
          {currentSong.name}
        </p>
        <ExtraControls />
      </div>
    </div>
  );
};
