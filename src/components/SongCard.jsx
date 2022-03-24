import { PlayerContext } from "../contexts/PlayerContext";
import { useContext } from "react";

export const SongCard = ({ song, onClick }) => {
  const { currentSong } = useContext(PlayerContext);

  return (
    <div
      onClick={onClick}
      className="overflow-hidden relative z-20 xs:m-1 md:m-2 rounded shadow-xl flex flex-col cursor-pointer min-h-fit card-bg"
      style={{
        border: currentSong.id === song.id ? "2px solid #73fac7" : "none",
      }}
    >
      <img
        src={song.cover}
        alt={song.name}
        className="xs:w-20 sm:w-fit md:w-fit"
      />
      <h1 className="xs:hidden sm:block md:block sm:text-[.43rem] md:text-[.7rem] lg:text-[.8rem] xl:text-[1rem] xs:p-2 md:p-3 lg:p-4 font-bold my-auto mx-4 text-slate-200 rounded">
        {song.name}
      </h1>
    </div>
  );
};
