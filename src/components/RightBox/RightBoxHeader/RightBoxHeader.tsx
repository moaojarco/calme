import styles from "./RightBoxHeader.module.scss";
import { useSelector } from "react-redux";

export const RightBoxHeader = () => {
  const player = useSelector((state: any) => state.player.player);

  return (
    <header className={styles["container"]}>
      <img
        src={player.playerInfo.currentSong.cover}
        className={styles["banner"]}
      />
      <div className={styles["song-info"]}>
        <img
          src={player.playerInfo.currentSong.cover}
          alt={player.playerInfo.currentSong.name}
        />
        <h1>{player.playerInfo.currentSong.name}</h1>
      </div>
    </header>
  );
};
