import { previousTrack, nextTrack } from "../../utils/playerFunctions";
import formatVideoDuration from "../../utils/videoDurationFormat";
import styles from "./Controls.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsShuffle,
  setCurrentTime,
  setVolume,
} from "../../features/playerStore";

export const Controls = () => {
  const player = useSelector((state: any) => state.player.player);
  const dispatch = useDispatch();

  return (
    <div className={styles["controls-container"]}>
      {player && (
        <div>
          <div
            style={{
              backgroundColor: player.playerInfo.isShuffle
                ? "#070a12"
                : "transparent",
              borderRadius: "1.25rem",
              padding: ".4rem",
              width: "3.125rem",
            }}
          >
            <svg
              onClick={() => {
                dispatch(setIsShuffle());
              }}
              stroke={player.playerInfo.isShuffle ? "#69B6A2" : "#DBE0E6"}
              fill="none"
              strokeWidth="1"
              viewBox="0 0 16 16"
              height="1.2rem"
            >
              <path
                fill-rule="evenodd"
                d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
              ></path>
              <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"></path>
            </svg>
          </div>
          <div>
            <svg
              onClick={() => {
                console.log("Previous Track");
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
          </div>
          {player.youtubePlayer &&
          player.youtubePlayer.getPlayerState() === 1 ? (
            <div
              style={{
                backgroundColor: "#070a12",
                borderRadius: "1.25rem",
                padding: ".5rem",
              }}
            >
              <svg
                className={styles["pause-btn"]}
                onClick={() => {
                  player.youtubePlayer.pauseVideo();
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
            </div>
          ) : (
            <div
              style={{
                backgroundColor: "#070a12",
                borderRadius: "1.25rem",
                padding: ".5rem",
              }}
            >
              <svg
                className={styles["play-btn"]}
                onClick={() => {
                  player.youtubePlayer.playVideo();
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
            </div>
          )}
          <svg
            onClick={() => {
              console.log("Next");
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
        </div>
      )}

      {player.youtubePlayer && (
        <div className={styles["timer"]}>
          <input
            type="range"
            min="0"
            max={player.playerInfo.duration}
            value={player.playerInfo.currentTime}
            onChange={(e) => {
              dispatch(setCurrentTime(e.target.value));
              player.youtubePlayer.seekTo(e.target.value);
            }}
            className="time-input"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "60vw",
            }}
          >
            <label>{formatVideoDuration(player.playerInfo.currentTime)}</label>
            <label>{formatVideoDuration(player.playerInfo.duration)}</label>
          </div>
        </div>
      )}
      <div className={styles["volume-container"]}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#DBE0E6" strokeWidth="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
        <input
          className={`${styles["styled-slider slider-progress"]}`}
          type="range"
          min="0"
          max="100"
          step="0.01"
          value={player.playerInfo.volume}
          onChange={(e) => {
            dispatch(setVolume(e.target.value));
            player.youtubePlayer.setVolume(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
