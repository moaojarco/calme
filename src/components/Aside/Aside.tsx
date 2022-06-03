import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { PlayerContext } from "../../contexts/PlayerContext";
import styles from "./Aside.module.scss";

export const Aside = () => {
  const [query, setQuery] = useState<string>("");
  const { setDynamicData, setIsLocalData } = useContext(AppContext);

  async function fetchYoutube(query: string) {
    setIsLocalData(false);
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&videoCategories?&id=10&maxResults=10&videoDuration=short&safeSearch=moderate&part=snippet&key=AIzaSyAoTuefqrGquTIXd_o_J5-ZS5U2ikdDfzg`
    );
    const data = await res.json();
    console.log(data);
    setDynamicData(data.items);
  }

  return (
    <aside className={styles["container"]}>
      <>
        {/*
        {dynamicData &&
          dynamicData.map((video: any, idx: number) => (
            <>
              <img
                onClick={() => {
                  setCurrentSong({
                    id: Number(video.id.kind),
                    youtube_id: video.id.videoId,
                    cover: `https://img.youtube.com/vi/${video.id.videoId}/0.jpg`,
                    duration: 4920,
                    name: "Testing",
                  });
                }}
                style={{ width: "100px" }}
                src={`https://img.youtube.com/vi/${video.id.videoId}/0.jpg`}
              />
            </>
          ))}
      */}

        <div>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                fetchYoutube(query);
              }
            }}
          />
        </div>
      </>
    </aside>
  );
};
