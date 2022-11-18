import { LangContext } from "../context/LangContext";
import { useContext } from "react";
import { motion } from "framer-motion";

import dataTraduction from "../Datas/dataTraduction";

const Home = () => {
  const { language } = useContext(LangContext);

  return (
    <section className="relative h-screen ml-5 mr-5 flex flex-col justify-center pb-48">
      <motion.h1
        initial={{ opacity: 0, x: -800 }}
        animate={{ opacity: 1, x: 0, color: "#ff2994" }}
        transition={{ delay: 0.5, duration:0.4 }}
        className="text-5xl mb-10 mt-24"
      >
        {dataTraduction[language].bonjour}
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, x: "100vw" }}
        animate={{ opacity: 1, x: 0, color: "#ff2994" }}
        transition={{ delay: 0.3, duration:1}}
        className="text-black-600 text-2xl"
      >
        {dataTraduction[language].me}
      </motion.h2>
    </section>
  );
};

export default Home;
