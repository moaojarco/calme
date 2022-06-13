import { SongsList } from "../SongList/SongList";
import { RightBoxHeader } from "./RightBoxHeader/RightBoxHeader";
import styles from "./RightBox.module.scss";

export const RightBox = () => {
  return (
    <div className={styles["right-container"]}>
      <RightBoxHeader />
      <SongsList />
    </div>
  );
};
