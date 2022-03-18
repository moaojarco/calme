import { useContext } from "react";
import { MenusContext } from "../contexts/MenusContext";

export const ExtraControls = () => {
  const { menuOpen, setMenuOpen } = useContext(MenusContext);

  return (
    <button
      className="flex flex-col align-middle justify-center rounded xs:m-1 md:m-2 lg:m-4 xs:mr-28 xs:p-2 md:p-2 lg:p-4 bg-blue-800 text-gray-50 hover:bg-blue-700 xs:h-8 xs:whitespace-nowrap lg:h-12"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <p className="xs:text-xs sm:text-xl md:text-xl">More Songs</p>
    </button>
  );
};
