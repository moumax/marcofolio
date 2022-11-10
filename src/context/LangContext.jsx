import { createContext, useState } from "react";

export const LangContext = createContext();

const LangContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr");
  const switchLang = (updateLang) => {
    setLanguage(updateLang);
  };
  return (
    <LangContext.Provider value={{ language, switchLang }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContextProvider;
