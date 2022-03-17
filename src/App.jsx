import { Controls } from "./components/Controls";
import { SongsList } from "./components/SongsList";
import { useContext, useState } from "react";
import { PlayerContext } from "./contexts/PlayerContext";
import { Player } from "./components/Player";
import { Showcase } from "./components/Showcase";
import { ExtraControls } from "./components/ExtraControls";

function App() {
  const { currentSong } = useContext(PlayerContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [controlsOpen, setControlsOpen] = useState(false);
  const [extraControlsOpen, setExtraControlsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setControlsOpen(true);
        setShowcaseOpen(true);
        setExtraControlsOpen(true);
      }}
      onMouseLeave={() => {
        setControlsOpen(false);
        setShowcaseOpen(false);
        setExtraControlsOpen(false);
      }}
      style={{
        background: `url(${currentSong.cover}) top`,
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div className="relative">
        {menuOpen && <SongsList />}

        {controlsOpen && <Controls />}
      </div>
      <Showcase />
      <Player />
    </div>
  );
}

export default App;
