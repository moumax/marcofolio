import { LangContext } from "../context/LangContext";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

import dataTraduction from "../Datas/dataTraduction";
import About from "./About.jsx";

const Home = () => {
  const { language } = useContext(LangContext);
  const [isShown, setIsShown] = useState(false);

  const affiche = () => {
    console.log("click");
    setIsShown((current) => !current);
  };

  return (
    <>
      {!isShown && (
        <section className="relative mx-10 flex justify-center items-center w-screen">
          <div className="flex flex-col">
            <motion.h1
              initial={{ opacity: 0, x: -800 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mx-auto w-fit text-6xl bg-gradient-to-r from-black via-violet-800 to-pink-600 bg-clip-text text-transparent mb-10"
            >
              {dataTraduction[language].bonjour}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="mx-auto w-fit text-3xl text-center mb-4"
            >
              {dataTraduction[language].me}
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, blur: 1000 }}
              animate={{ opacity: 1, blur: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="mx-auto w-fit text-xl text-center mb-10"
            >
              {dataTraduction[language].search}
            </motion.h3>
            <motion.button
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3, duration: 0.6 }}
              className="border-2 border-slate-500 rounded px-4 py-1 mx-auto"
              type={"button"}
              onClick={affiche}
            >
              En savoir plus ?
            </motion.button>
          </div>
        </section>
      )}
      {isShown && <About />}
    </>
  );
};

export default Home;
