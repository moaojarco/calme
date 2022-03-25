import { useContext } from "react";
import YouTube from "react-youtube";
import { PlayerContext } from "../contexts/PlayerContext";

export const Player = () => {
  const {
    currentSong,
    playerOptions,
    setPlayer,
    setCurrentTime,
    setDuration,
    volume,
  } = useContext(PlayerContext);

  return (
    <>
      <YouTube
        videoId={currentSong.youtube_id}
        opts={playerOptions}
        onReady={(e) => {
          setPlayer(e.target);
          e.target.setVolume(volume);

          if (
            e.target.getPlayerState() === -1 ||
            e.target.getPlayerState() === 3
          ) {
            e.target.unMute();
            e.target.playVideo();
          }

          setDuration(e.target.getDuration());

          setInterval(() => {
            const currentValue = e.target.getCurrentTime();
            if (typeof currentValue === "number")
              setCurrentTime(e.target.getCurrentTime());
          }, 1000);

          // console.log(e.target.getCurrentTime());
          // console.log(e.target.getDuration());
        }}
        onStateChange={(e) => {
          console.log(e.target.getPlayerState());
        }}
      />
    </>
  );
};
