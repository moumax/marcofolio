import Form from "./Form";
import { LangContext } from "../context/LangContext";
import { useContext, useState } from "react";
import { motion } from "framer-motion";

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
          className="relative w-screen h-fit  p-5"
        >
          <div className="flex flex-col justify-center items-center">
            <Form />
            <motion.button
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="w-fit border-2 border-slate-500 rounded px-4 py-1 mt-5"
              type={"button"}
              onClick={affiche}
            >
              Accueil
            </motion.button>
          </div>
        </motion.section>
      )}
      {isShown && <Home />}
    </>
  );
};

export default Contact;
