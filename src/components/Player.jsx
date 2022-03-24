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
          e.target.setVolume(15);
          e.target.playVideo();
          console.log(e.target.getPlayerState());
          setDuration(e.target.getDuration());
          setPlayer(e.target);

          setInterval(() => {
            const currentValue = e.target.getCurrentTime();
            if (typeof currentValue === "number")
              setCurrentTime(e.target.getCurrentTime());
          }, 1000);

          // console.log(e.target.getCurrentTime());
          // console.log(e.target.getDuration());
        }}
      />
    </>
  );
};
