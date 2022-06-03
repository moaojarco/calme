import { PlayerContext } from "../../contexts/PlayerContext";
import { useContext } from "react";
import { SongCard } from "../SongCard/SongCard";
import { Song } from "../../types";
import styles from "./SongList.module.scss";

export const SongsList = () => {
  const { songsRaw, setCurrentSong } = useContext(PlayerContext);

  return (
    <div> 
      <div className={styles["top-songlist"]}>
        <p>Title</p>
        <p>Duration</p>
      </div>

      <div className={styles["container"]}>
        {songsRaw.map((song: Song, idx: number) => (
          <SongCard
            key={idx}
            onClick={() => setCurrentSong(song)}
            song={song}
          />
        ))}
      </div>
    </div>
  );
};
