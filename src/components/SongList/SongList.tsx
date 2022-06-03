import { PlayerContext } from "../../contexts/PlayerContext";
import { useContext, useEffect, useRef } from "react";
import { SongCard } from "../SongCard/SongCard";
import { Song } from "../../types";
import styles from "./SongList.module.scss";
import { AppContext } from "../../contexts/AppContext";

export const SongsList = () => {
  const { songsRaw, setCurrentSong } = useContext(PlayerContext);
  const { isLocalData, dynamicData } = useContext(AppContext);

  const songsListRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className={styles["top-songlist"]}>
        <p>Title</p>
        <p>Duration</p>
      </div>

      <div className={styles["container"]} ref={songsListRef}>
        {isLocalData
          ? songsRaw.map((song: Song, idx: number) => (
              <SongCard
                key={idx}
                onClick={() => setCurrentSong(song)}
                song={song}
              />
            ))
          : dynamicData &&
            dynamicData.map((song: any, idx: number) => (
              <SongCard
                onClick={() =>
                  setCurrentSong({
                    id: idx,
                    youtube_id: song.id.videoId,
                    name: song.snippet.title,
                    cover: `https://i.ytimg.com/vi/${song.id.videoId}/mqdefault.jpg`,
                  })
                }
                key={idx}
                song={{
                  id: idx,
                  youtube_id: song.id.videoId,
                  name:
                    song.snippet.title.length >= 20
                      ? song.snippet.title.slice(0, 18)
                      : song.snippet.title,
                  cover: `https://i.ytimg.com/vi/${song.id.videoId}/mqdefault.jpg`,
                  duration: 2,
                }}
              />
            ))}
      </div>
    </div>
  );
};
