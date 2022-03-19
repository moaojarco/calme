import { useContext } from "react";
import YouTube from "react-youtube";
import { PlayerContext } from "../contexts/PlayerContext";

export const Player = () => {
  const { currentSong, playerOptions, setPlayer } = useContext(PlayerContext);

  return (
    <>
      <YouTube
        videoId={currentSong.youtube_id}
        opts={playerOptions}
        onReady={(e) => {
          e.target.playVideo();
          e.target.setVolume(30);
          setPlayer(e.target);
          // console.log(e.target.getCurrentTime());
          // console.log(e.target.getDuration());
        }}
      />
    </>
  );
};
