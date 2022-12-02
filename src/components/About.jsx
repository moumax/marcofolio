import { LangContext } from "../context/LangContext";
import { useContext, useState } from "react";

import { motion } from "framer-motion";

import DataSoftSkills from "../Datas/dataSoftskills";
import DatasHardSkills from "../Datas/dataHardskills";

import Softskill from "./utils/Softskill";
import Hardskill from "./utils/Hardskill";
import Projects from "./Projects.jsx";

const About = () => {
  const [isShown, setIsShown] = useState(false);

  const affiche = () => {
    setIsShown((current) => !current);
  };

  const classButton =
    "w-fit border-2 border-slate-500 rounded px-4 py-1 self-center z-50";
  const classSectionAbout =
    "flex flex-col h-screen w-screen justify-center xs:mt-10";
  const classTitle =
    "absolute top-0 mb-20 left-3 text-3xl mt-11 underline bg-gradient-to-r from-orange-400 to-blue-800 bg-clip-text text-transparent";
  const classImgSkills =
    "mx-auto flex flex-wrap gap-2 justify-center z-50 xs:mb-10 lg:mb-36";

  return (
    <>
      {!isShown && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 2.5 }}
          className={classSectionAbout}
        >
          <div className="z-0 mx-5 sm:mx-20 xl:mx-40">
            <h2 className={classTitle}>Compétences</h2>
            <div className={classImgSkills}>
              {DataSoftSkills.map((skill) => (
                <Softskill skill={skill} key={skill.id} />
              ))}
            </div>
            <div className={classImgSkills}>
              {DatasHardSkills.map((skill) => (
                <Hardskill skill={skill} key={skill.id} />
              ))}
            </div>
            <motion.button
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className={classButton}
              type={"button"}
              onClick={affiche}
            >
              Projets
            </motion.button>
          </div>
        </motion.section>
      )}
      {isShown && <Projects />}
    </>
  );
};

export default About;
