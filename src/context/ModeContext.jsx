import { createContext, useState } from "react";

export const ModeContext = createContext();

const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const switchMode = (updateMode) => {
    console.log(mode);
    setMode(updateMode);
  };
  return (
    <ModeContext.Provider value={{ mode, switchMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;
