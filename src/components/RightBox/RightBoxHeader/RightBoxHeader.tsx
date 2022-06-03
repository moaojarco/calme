import { useContext } from "react";
import { PlayerContext } from "../../../contexts/PlayerContext";
import styles from "./RightBoxHeader.module.scss";

export const RightBoxHeader = () => {
  const { currentSong } = useContext(PlayerContext);

  return (
    <header className={styles["container"]}>
      <img src={currentSong.cover} className={styles["banner"]} />
      <div className={styles["song-info"]}>
        <img src={currentSong.cover} alt={currentSong.name} />
        <h1>{currentSong.name}</h1>
      </div>
    </header>
  );
};
