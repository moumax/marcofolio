import { useContext } from "react";
import { ModeContext } from "./context/ModeContext";
import { motion } from "framer-motion";

import LangContextProvider from "./context/LangContext";

import About from "./components/About";
import Home from "./components/Home";
import GeneralBackgroundDark from "./components/GeneralBackground";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ButtonLanguage from "./components/ButtonLanguage";
import ButtonMode from "./components/ButtonMode";
import Tools from "./pages/Tools";

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
        <motion.div
          className="fixed h-24 items-center flex gap-10 xs:flex-col xs:top-3 xs:left-80"
          initial={{ x: "-100vh" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <ButtonLanguage />
          <ButtonMode />
        </motion.div>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      {/* <Tools /> */}
    </LangContextProvider>
  );
}

export default App;
