import Form from "./Form";
import { LangContext } from "../context/LangContext";
import { useContext, useState } from "react";
import { motion } from "framer-motion";

import traduction from "../Datas/dataTraduction";
import Home from "./Home.jsx";

const Contact = () => {
  const { language } = useContext(LangContext);
  const [isShown, setIsShown] = useState(false);

  const affiche = () => {
    setIsShown((current) => !current);
  };

  return (
    <>
      {!isShown && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 2 }}
          className="relative h-screen w-screen -z-1 flex flex-col justify-center sm:px-10 lg:px-24 xl:px-36"
        >
          <h2 className="absolute top-0 mb-20 left-3 text-3xl mt-11 underline bg-gradient-to-r from-orange-400 to-blue-800 bg-clip-text text-transparent">
            {traduction[language].formTitle}
          </h2>
          <Form />
          <motion.button
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="w-fit border-2 border-slate-500 rounded px-4 py-1 self-center"
            type={"button"}
            onClick={affiche}
          >
            Accueil
          </motion.button>
        </motion.section>
      )}
      {isShown && <Home />}
    </>
  );
};

export default Contact;
