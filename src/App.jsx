import { useContext } from "react";
import { ModeContext } from "./context/ModeContext";
import { motion } from "framer-motion";

import LangContextProvider from "./context/LangContext";

import Home from "./components/Home";
import ButtonLanguage from "./components/ButtonLanguage";
import ButtonMode from "./components/ButtonMode";

const classBackgroundDark =
  "relative flex bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-screen h-screen z-0 text-white ";
const classBackgroundLight =
  "relative flex bg-white w-screen h-screen z-0 text-black";

function App() {
  const { mode } = useContext(ModeContext);

  return (
    <div
      className={mode == "light" ? classBackgroundLight : classBackgroundDark}
    >
      <LangContextProvider>
        <motion.div
          // style for box
          className="absolute bg-slate-700 -right-5 bottom-24 w-20 h-24 rounded-2xl"
          // className="absolute flex gap-6 z-50 justify-end right-3 top-3 xl:right-36 xl:top-14 bg-white"
          initial={{ x: "-200vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* style for logos */}
          <div className="flex flex-col w-full h-full justify-center items-center pr-4">
            <ButtonLanguage />
            <ButtonMode />
          </div>
        </motion.div>
        <div className="relative my-auto w-screen flex justify-center -z-50">
          <Home />
        </div>
      </LangContextProvider>
    </div>
  );
}

export default App;
