import { LangContext } from "../context/LangContext";
import { useContext, useState } from "react";

import { motion } from "framer-motion";

import traduction from "../Datas/dataTraduction";
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

  const affiche = (event) => {
    setIsShown((current) => !current);
  };

  const classNameTitle = {
    className:
      "self-start text-2xl my-4 underline 2xl:text-4xl xs:text-xl md:text-3xl z-50",
  };
  const classNameSkills = {
    className: "flex flex-wrap gap-2 justify-center 2xl:gap-20 2xl:w-fit z-50 xs:mb-10",
  };

  return (
    <>
      {!isShown && (
        <motion.section
           initial={{ opacity: 1, }}
           animate={{ opacity: 1,  }}
           transition={{ delay: 0.2, duration: 2.5 }}
          className="flex flex-col h-screen w-fit justify-center xs:mt-10"
        >
          <h2 className="absolute top-0 mb-20 left-3 text-3xl mt-11 underline">Compétences</h2>
          {/* <h2 className={classNameTitle.className}>
            {traduction[language].softSkillTitle}
          </h2> */}
          <div className={classNameSkills.className}>
            {DataSoftSkills.map((skill) => (
              <Softskill skill={skill} key={skill.id} />
            ))}
          </div>
          {/* <h2 className={classNameTitle.className}>
            {traduction[language].hardSkillTitle}
          </h2> */}
          <div className={classNameSkills.className}>
            {DatasHardSkills.map((skill) => (
              <Hardskill skill={skill} key={skill.id} />
            ))}
          </div>
          {/* <h2 className={classNameTitle.className}>
            {traduction[language].hobbyTitle}
          </h2> */}
          <div className={classNameSkills.className}>
            {DataHobbies.map((like) => (
              <Hobby like={like} key={like.id} />
            ))}
          </div>
          <button
            className="absolute w-fit bottom-12 right-10 bg-slate-700 rounded px-4 py-1"
            type={"button"}
            onClick={affiche}
          >
           Projets 
          </button>
        </motion.section>
      )}
      {isShown && <Projects />}
    </>
  );
};

export default About;
