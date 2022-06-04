import { PlayerContext } from "../../contexts/PlayerContext";
import { useContext } from "react";
import { Song } from "../../types";
import styles from "./SongCard.module.scss";
import formatVideoDuration from "../../utils/videoDurationFormat";

interface SongCardProps {
  song: Song;

  onClick: () => void;
}

export const SongCard = ({ song, onClick }: SongCardProps) => {
  const { currentSong } = useContext(PlayerContext);

  return (
    <div
      onClick={onClick}
      className={styles["card"]}
    >
      <h1
        style={{
          color: currentSong.id === song.id ? "#fff" : "#424851",
        }}
      >
        {song.name}
      </h1>
      <p>{formatVideoDuration(song.duration)}</p>
    </div>
  );
};
