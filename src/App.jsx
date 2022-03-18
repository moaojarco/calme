import { Controls } from "./components/Controls";
import { SongsList } from "./components/SongsList";
import { useContext } from "react";
import { PlayerContext } from "./contexts/PlayerContext";
import { Player } from "./components/Player";
import { Showcase } from "./components/Showcase";
import { ExtraControls } from "./components/ExtraControls";
import { MenusContext } from "./contexts/MenusContext";

function App() {
  const { currentSong } = useContext(PlayerContext);
  const { menuOpen, setMenuOpen } = useContext(MenusContext);

  return (
    <div
      onMouseEnter={() => {
        setMenuOpen(true);
      }}
      onMouseLeave={() => {
        setMenuOpen(false);
      }}
      style={{
        background: `url(${currentSong.cover}) top`,
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Showcase />
      <div className="relative">{menuOpen && <SongsList />}</div>
      <Player />
    </div>
  );
}

export default App;
