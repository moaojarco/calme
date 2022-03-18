import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/index.css";
import MenusProvider from "./contexts/MenusContext";
import PlayerProvider from "./contexts/PlayerContext";

ReactDOM.render(
  <React.StrictMode>
    <PlayerProvider>
      <MenusProvider>
        <App />
      </MenusProvider>
    </PlayerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
