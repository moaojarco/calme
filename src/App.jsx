import { Controls } from "./components/Controls";
import { SongsList } from "./components/SongsList";
import { useContext } from "react";
import { PlayerContext } from "./contexts/PlayerContext";
import { Player } from "./components/Player";
import { Showcase } from "./components/Showcase";
import { ExtraControls } from "./components/ExtraControls";
import { MenusContext } from "./contexts/MenusContext";

function App() {
  const { currentSong, player } = useContext(PlayerContext);
  const { menuOpen, extraControlsOpen, setExtraControlsOpen } =
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
        alt="JJ"
        draggable="false"
        src={`${currentSong.cover}`}
        style={{
          minHeight: "100vh",
          width: "100%",
          position: "absolute",
          filter: "blur(2px)",
          zIndex: "-1",
        }}
      />
      <Controls />
      <div className="flex justify-between w-full">
        <Showcase />
      </div>
      <div className="relative">{menuOpen && <SongsList />}</div>
      <Player />
    </div>
  );
}

export default App;
