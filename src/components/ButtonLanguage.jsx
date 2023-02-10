import { useContext } from "react";
import { LangContext } from "../context/LangContext";
import { ModeContext } from "../context/ModeContext";
import { delay, motion } from "framer-motion";

import enColor from "../assets/flags/en-color.png";
import enBw from "../assets/flags/en-bw.png";
import frColor from "../assets/flags/fr-color.png";
import frBw from "../assets/flags/fr-bw.png";

const ButtonLanguage = () => {
  const { switchLang, language } = useContext(LangContext);
  const { mode } = useContext(ModeContext);

  return (
    <div className="xs:w-8 sm:w-8">
      {mode != "light" ? (
        <motion.img
          src={language == "en" ? frBw : enBw}
          className="grad"
          initial={{ scale: 1 }}
          // animate={{ scale: 1.4 }}
          // transition={{ repeat: Infinity, repeatDelay: 1 }}
          type="button"
          onClick={() => {
            language == "fr" ? switchLang("en") : switchLang("fr");
          }}
        ></motion.img>
      ) : (
        <motion.img
          src={language == "en" ? frColor : enColor}
          initial={{ scale: 1 }}
          // animate={{ scale: 1.4 }}
          // transition={{ repeat: Infinity, repeatDelay: 0.5 }}
          type="button"
          onClick={() => {
            language == "fr" ? switchLang("en") : switchLang("fr");
          }}
        ></motion.img>
      )}
    </div>
  );
};

export default ButtonLanguage;
