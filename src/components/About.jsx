import { LangContext } from "../context/LangContext";
import { useContext, useState } from "react";

import { motion } from "framer-motion";

import DataSoftSkills from "../Datas/dataSoftskills";
import DatasHardSkills from "../Datas/dataHardskills";
import DataHobbies from "../Datas/dataHobbies";

import Softskill from "./utils/Softskill";
import Hardskill from "./utils/Hardskill";
import Hobby from "./utils/Hobby";
import Projects from "./Projects.jsx";

const About = () => {
  const { language } = useContext(LangContext);
  const [isShown, setIsShown] = useState(false);

  const affiche = () => {
    setIsShown((current) => !current);
  };

  const classButton =
    "w-fit border-2 border-slate-500 rounded px-4 py-1 self-center z-50";
  const classSectionAbout =
    "flex flex-col h-screen w-fit justify-center xs:mt-10";
  const classTitle =
    "absolute top-0 mb-20 left-3 text-3xl mt-11 underline bg-gradient-to-r from-orange-400 to-blue-800 bg-clip-text text-transparent";
  const classImgSkills =
    "flex flex-wrap gap-2 justify-center 2xl:gap-20 2xl:w-fit z-50 xs:mb-10";
  const classsubtitle = "self-start text-2xl my-4 underline 2xl:text-4xl xs:text-xl md:text-3xl z-50"

  return (
    <>
      {!isShown && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 2.5 }}
          className={classSectionAbout}
        >
          <h2 className={classTitle}>Compétences</h2>
          {/* <h2 className={classsubtitle}>
            {traduction[language].softSkillTitle}
          </h2> */}
          <div className={classImgSkills}>
            {DataSoftSkills.map((skill) => (
              <Softskill skill={skill} key={skill.id} />
            ))}
          </div>
          {/* <h2 className={classsubtitle}>
            {traduction[language].hardSkillTitle}
          </h2> */}
          <div className={classImgSkills}>
            {DatasHardSkills.map((skill) => (
              <Hardskill skill={skill} key={skill.id} />
            ))}
          </div>
          {/* <h2 className={classsubtitle}>
            {traduction[language].hobbyTitle}
          </h2> */}
          <div className={classImgSkills}>
            {DataHobbies.map((like) => (
              <Hobby like={like} key={like.id} />
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
        </motion.section>
      )}
      {isShown && <Projects />}
    </>
  );
};

export default About;
