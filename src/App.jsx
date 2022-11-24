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
            ? "absolute text-center text-white"
            : "absolute text-center text-black"
        }
      >
        <GeneralBackgroundDark />
        <motion.div
          className="fixed h-24 flex gap-6 flex-col top-7 w-screen z-50 items-end right-5 sm:right-12 lg:top-7 lg:gap-10"
          initial={{ x: "-100vh" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ButtonLanguage />
          <ButtonMode />
        </motion.div>
        <div className="p-10">
          <Home />
          {/* <About /> */}
          {/* <Projects /> */}
          <Contact />
        </div>
      </div>
      {/* <Tools /> */}
    </LangContextProvider>
  );
}

export default App;
