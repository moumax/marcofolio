import { useContext } from "react";
import { ModeContext } from "./context/ModeContext";

import LangContextProvider from "./context/LangContext";

import About from "./components/About";
import Home from "./components/Home";
import GeneralBackgroundDark from "./components/GeneralBackground";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ButtonLanguage from "./components/ButtonLanguage";
import ButtonMode from "./components/ButtonMode";

function App() {
  const { mode } = useContext(ModeContext);

  return (
    <LangContextProvider>
      <div
        className={
          mode === "light"
            ? "App relative text-center text-white"
            : "App relative text-center text-black"
        }
      >
        <GeneralBackgroundDark />
        <div className="absolute z-10 flex justify-between w-full ml-5 pr-10 mt-5">
          <ButtonLanguage />
          <ButtonMode />
        </div>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </LangContextProvider>
  );
}

export default App;
