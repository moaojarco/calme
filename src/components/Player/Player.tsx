import YouTube from "react-youtube";
import { useSelector, useDispatch } from "react-redux";
import { setPlayer } from "../../features/playerStore";

export const Player = () => {
  const dispatch = useDispatch();
  const player = useSelector((state: any) => state.player.player);

  return (
    <>
      <YouTube
        videoId={player.playerInfo.currentSong.youtube_id}
        opts={{
          height: "1",
          width: "1",
          playerVars: {
            autoplay: 1,
          },
        }}
        onReady={(e: any) => {
          dispatch(setPlayer(e.target));

          if (
            e.target.getPlayerState() === -1 ||
            e.target.getPlayerState() === 3
          ) {
            e.target.unMute();
            e.target.playVideo();
          }

          console.log(e.target.getDuration());

          // setInterval(() => {
          //   const currentValue = e.target.getCurrentTime();
          //   if (typeof currentValue === "number")
          //     setCurrentTime(e.target.getCurrentTime());
          // }, 1000);

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
