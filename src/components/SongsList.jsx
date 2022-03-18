import { PlayerContext } from "../contexts/PlayerContext";
import { useContext } from "react";
import { SongCard } from "./SongCard";

export const SongsList = () => {
  const { songsRaw, setCurrentSong } = useContext(PlayerContext);

  return (
    <div className="animates grid xs:grid-cols-4 sm:grid-cols-2 md:grid-cols-2">
      {songsRaw.map((song, idx) => (
        <SongCard key={idx} onClick={() => setCurrentSong(song)} song={song} />
      ))}
    </div>
  );
};
