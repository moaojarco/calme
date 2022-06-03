import { createContext, useState } from "react";

export const AppContext = createContext({} as any);

const AppProvider = ({ children }: any) => {
  const [isLocalData, setIsLocalData] = useState<boolean>(true);
  const [dynamicData, setDynamicData] = useState();
  const [currentDynamicVideo, setCurrentDynamicVideo] = useState();

  return (
    <AppContext.Provider
      value={{
        isLocalData,
        setIsLocalData,
        dynamicData,
        setDynamicData,
        currentDynamicVideo,
        setCurrentDynamicVideo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
