import { useContext } from "react";
import { MenusContext } from "../contexts/MenusContext";

export const ExtraControls = () => {
  const { menuOpen, setMenuOpen } = useContext(MenusContext);

  return (
    <button
      className="flex flex-col align-middle justify-center px-2 bg-gray-900 text-gray-50 h-12 animate-pulse"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <p className="text-sm">More Songs</p>
    </button>
  );
};
