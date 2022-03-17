import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PlayerProvider from "./contexts/PlayerContext";

ReactDOM.render(
  <React.StrictMode>
    <PlayerProvider>
      <App />
    </PlayerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
