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
  const { menuOpen, setMenuOpen, extraControlsOpen, setExtraControlsOpen } =
    useContext(MenusContext);

  return (
    <div
      onMouseEnter={() => {
        // setMenuOpen(true);
        setExtraControlsOpen(true);
      }}
      onMouseLeave={() => {
        setExtraControlsOpen(false);
      }}
    >
      <img
        src={currentSong.cover}
        alt="JJ"
        style={{
          background: `url(${currentSong.cover}) top`,
          minHeight: "100vh",
          width: "100%",
          position: "absolute",
          filter: "blur(5px)",
          zIndex: "-1",
        }}
      />
      <Player />
      <div className="flex justify-between w-full">
        <Showcase />
        {extraControlsOpen && <ExtraControls />}
      </div>
      <div className="relative">{menuOpen && <SongsList />}</div>
    </div>
  );
}

export default App;
