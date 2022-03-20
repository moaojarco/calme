import { useContext } from "react";
import YouTube from "react-youtube";
import { PlayerContext } from "../contexts/PlayerContext";

export const Player = () => {
  const { currentSong, playerOptions, setPlayer, setCurrentTime, setDuration } =
    useContext(PlayerContext);

  return (
    <>
      <YouTube
        videoId={currentSong.youtube_id}
        opts={playerOptions}
        onReady={(e) => {
          e.target.playVideo();
          e.target.setVolume(30);
          setDuration(e.target.getDuration());
          setPlayer(e.target);

          setInterval(() => {
            if (e.target.getCurrentTime() !== "isNaN") {
              setCurrentTime(e.target.getCurrentTime());
            }
          }, 1000);

          // console.log(e.target.getCurrentTime());
          // console.log(e.target.getDuration());
        }}
      />
    </>
  );
};
