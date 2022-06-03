import { createContext, useState } from "react";

export const MenusContext = createContext({} as any);

const MenusProvider = ({ children }: any) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [controlsOpen, setControlsOpen] = useState(false);
  const [extraControlsOpen, setExtraControlsOpen] = useState(false);
  const [volumeInputOpen, setVolumeInputOpen] = useState(false);
  const [timeInputOpen, setTimeInputOpen] = useState(true);

  return (
    <MenusContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
        controlsOpen,
        setControlsOpen,
        extraControlsOpen,
        setExtraControlsOpen,
        volumeInputOpen,
        setVolumeInputOpen,
        timeInputOpen,
        setTimeInputOpen,
      }}
    >
      {children}
    </MenusContext.Provider>
  );
};

export default MenusProvider;
