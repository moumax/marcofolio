import About from "./components/About";
import Home from "./components/Home";
import GeneralBackgroundDark from "./components/GeneralBackgroundDark";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ButtonDark from "./components/ButtonDark";
import ButtonLanguage from "./components/ButtonLanguage";

import { DarkContext } from "./context/DarkContext";
import { LangContext } from "./context/LangContext";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("French");

  return (
    <div className="App relative text-center">
      <LangContext.Provider value={[lang, setLang]}>
        <GeneralBackgroundDark />
        <ButtonLanguage />
        <ButtonDark />
        <Home />
        <About />
        <Projects />
        <Contact />
      </LangContext.Provider>
    </div>
  );
}

export default App;
