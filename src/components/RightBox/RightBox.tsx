import { SongsList } from "../SongList/SongList";
import { RightBoxHeader } from "./RightBoxHeader/RightBoxHeader";
import styles from "./RightBox.module.scss";
import { useEffect, useRef } from "react";

export const RightBox = () => {
  return (
    <div className={styles["right-container"]}>
      <RightBoxHeader />
      <SongsList />
    </div>
  );
};
