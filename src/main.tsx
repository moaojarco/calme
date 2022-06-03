import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppProvider from "./contexts/AppContext";
import PlayerProvider from "./contexts/PlayerContext";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <PlayerProvider>
        <App />
      </PlayerProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
