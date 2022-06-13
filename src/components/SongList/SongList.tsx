import { useRef } from "react";
import { SongCard } from "../SongCard/SongCard";
import { Song } from "../../types";
import styles from "./SongList.module.scss";
import songsRaw from "../../assets/songs.json";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../../features/playerStore";

export const SongsList = () => {
  const songsListRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch(); 

  return (
    <div>
      <div className={styles["top-songlist"]}>
        <p>Title</p>
        <p>Duration</p>
      </div>

      <div className={styles["container"]} ref={songsListRef}>
        {songsRaw.map((song: Song, idx: number) => (
          <SongCard key={idx} onClick={() => dispatch(setCurrentSong(song))} song={song} />
        ))}
      </div>
    </div>
  );
};
