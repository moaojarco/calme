import { Song } from "../../types";
import styles from "./SongCard.module.scss";
import formatVideoDuration from "../../utils/videoDurationFormat";
import { useSelector } from "react-redux";

interface SongCardProps {
  song: Song;

  onClick: () => void;
}

export const SongCard = ({ song, onClick }: SongCardProps) => {
  const playerInfo = useSelector((state: any) => state.player.player.playerInfo);

  return (
    <div onClick={onClick} className={styles["card"]}>
      <h1
        style={{
          color: playerInfo.currentSong.id === song.id ? "#fff" : "#424851",
        }}
      >
        {song.name}
      </h1>
      <p>{formatVideoDuration(song.duration)}</p>
    </div>
  );
};
