import { createContext, useState } from "react";

export const MenusContext = createContext();

const MenusProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [controlsOpen, setControlsOpen] = useState(false);
  const [extraControlsOpen, setExtraControlsOpen] = useState(false);

  return (
    <MenusContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
        controlsOpen,
        setControlsOpen,
        extraControlsOpen,
        setExtraControlsOpen,
      }}
    >
      {children}
    </MenusContext.Provider>
  );
};

export default MenusProvider;
