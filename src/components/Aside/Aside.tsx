import { useContext, useState } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import styles from "./Aside.module.scss";

export const Aside = () => {
  const [youtubeVideos, setYoutubeVideos] = useState<any>(null);
  const [query, setQuery] = useState<string>("");

  async function fetchYoutube(query: string) {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=AIzaSyAoTuefqrGquTIXd_o_J5-ZS5U2ikdDfzg`
    );
    const data = await res.json();
    setYoutubeVideos(data);
    console.log(youtubeVideos);
  }

  return (
    <aside className={styles["container"]}>
      <>
        {youtubeVideos &&
          youtubeVideos.items.map((video: any, idx: number) => (
            <p key={idx}>{video.id.videoId}</p>
          ))}
        <div>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
      </>
    </aside>
  );
};
