import { LangContext } from "../context/LangContext";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

import dataTraduction from "../Datas/dataTraduction";
import About from "./About.jsx";

const Home = () => {
  const { language } = useContext(LangContext);
  const [isShown, setIsShown] = useState(false);

  const classSectionHome =
    "relative h-screen mx-5 sm:mx-10 xl:mx-32 flex flex-col justify-center pb-48 z-0 md:gap-14";
  const classTitle =
    "text-5xl mb-10 mt-24 sm:text-6xl xl:text-7xl bg-gradient-to-r from-black via-violet-800 to-pink-600 bg-clip-text text-transparent";
  const classSubtitle = "text-black-600 text-2xl sm:text-3xl xl:text-4xl";
  const classPresentation = "mt-10 sm:text-2xl xl:text-3xl xs:mb-10";
  const classButton =
    "w-fit border-2 border-slate-500 rounded px-4 py-1 self-center sm:text-xl lg:text-2xl xl:text-4xl";

  const affiche = (event) => {
    console.log("click");
    setIsShown((current) => !current);
  };

  return (
    <>
      {!isShown && (
        <section className={classSectionHome}>
          <motion.h1
            initial={{ opacity: 0, x: -800 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className={classTitle}
          >
            {dataTraduction[language].bonjour}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className={classSubtitle}
          >
            {dataTraduction[language].me}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, blur: 1000 }}
            animate={{ opacity: 1, blur: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className={classPresentation}
          >
            {dataTraduction[language].search}
          </motion.h3>
          <motion.button
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3, duration: 0.6 }}
            className={classButton}
            type={"button"}
            onClick={affiche}
          >
            En savoir plus ?
          </motion.button>
        </section>
      )}
      {isShown && <About />}
    </>
  );
};

export default Home;
