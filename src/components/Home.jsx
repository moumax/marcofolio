import { LangContext } from "../context/LangContext";
import { useContext} from "react";
import { motion } from "framer-motion";

import dataTraduction from "../Datas/dataTraduction";


const Home = () => {
  const { language } = useContext(LangContext);

  return (
    <section className="relative h-screen ml-5 mr-5 flex flex-col justify-center pb-48 z-0 md:gap-14">
      <motion.h1
        initial={{ opacity: 0, x: -800 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="text-5xl mb-10 mt-24 sm:text-6xl xl:text-7xl"
      >
        {dataTraduction[language].bonjour}
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, x: "100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-black-600 text-2xl sm:text-3xl xl:text-4xl"
      >
        {dataTraduction[language].me}
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, blur: 1000 }}
        animate={{ opacity: 1, blur: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="mt-10 sm:text-2xl xl:text-3xl"
      >
        {dataTraduction[language].search}
      </motion.h3>
    </section>
  );
};

export default Home;
