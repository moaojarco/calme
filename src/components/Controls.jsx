import { useContext, useState } from "react";
import { MenusContext } from "../contexts/MenusContext";
import { PlayerContext } from "../contexts/PlayerContext";
import formatVideoDuration from "../utils/videoDurationFormat";

export const Controls = () => {
  const {
    player,
    setCurrentSong,
    songsRaw,
    duration,
    currentTime,
    setCurrentTime,
  } = useContext(PlayerContext);
  const {
    volumeInputOpen,
    setVolumeInputOpen,
    timeInputOpen,
    setTimeInputOpen,
  } = useContext(MenusContext);
  const [volume, setVolume] = useState(30);

  return (
    <div className="bg-transparent">
      <div className="controls-container">
        <svg
          onClick={() => {
            if (player) {
              player.playVideo();
            }
          }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#DBE0E6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        <svg
          onClick={() => {
            if (player) {
              player.pauseVideo();
            }
          }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#DBE0E6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>

        <svg
          onClick={() => {
            setCurrentSong(
              songsRaw[Math.floor(Math.random() * songsRaw.length)]
            );
          }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#DBE0E6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="19 20 9 12 19 4 19 20"></polygon>
          <line x1="5" y1="19" x2="5" y2="5"></line>
        </svg>
        <svg
          onClick={() => {
            if (player) {
              // player.seekTo(player.getCurrentTime() + 10);
              setCurrentSong(
                songsRaw[Math.floor(Math.random() * songsRaw.length)]
              );
            }
          }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#DBE0E6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="5 4 15 12 5 20 5 4"></polygon>
          <line x1="19" y1="5" x2="19" y2="19"></line>
        </svg>
        <svg
          onClick={() => {
            // player.unMute();
            setVolumeInputOpen(!volumeInputOpen);
            setTimeInputOpen(!timeInputOpen);
          }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#DBE0E6"
          strokeWidth="2"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
        {volumeInputOpen && (
          <input
            type="range"
            min="0"
            max="100"
            step="0.01"
            value={volume}
            onChange={(e) => {
              player.unMute();
              // console.log(player.getPlayerState());
              player.setVolume(e.target.value);
              setVolume(e.target.value);
            }}
            className="volume-input"
          />
        )}
        {player && timeInputOpen && (
          <div className="timer">
            {currentTime !== isNaN() && (
              <label>{formatVideoDuration(currentTime)}</label>
            )}
            <input
              type="range"
              min="0"
              max={duration}
              defaultValue={currentTime}
              value={currentTime}
              onChange={(e) => {
                setCurrentTime(e.target.value);
                player.seekTo(e.target.value);
              }}
            />
            <label>{formatVideoDuration(duration)}</label>
          </div>
        )}
      </div>
    </div>
  );
};
