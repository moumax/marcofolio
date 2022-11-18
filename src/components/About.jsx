import { LangContext } from "../context/LangContext";
import { useContext } from "react";

import traduction from "../Datas/dataTraduction";
import DataSoftSkills from "../Datas/dataSoftskills";
import DatasHardSkills from "../Datas/dataHardskills";
import DataHobbies from "../Datas/dataHobbies";

import Softskill from "./utils/Softskill"
import Hardskill from "./utils/Hardskill";
import Hobby from "./utils/Hobby";

const About = () => {
  const { language } = useContext(LangContext);

  const classNameTitle = {
    className: "text-start ml-2 text-2xl mb-6 underline",
  };
  const classNameSkills = {
    className: "flex flex-wrap gap-2 justify-center",
  };

  return (
    <section className="relative h-screen">
      <h2 className={classNameTitle.className}>
        {traduction[language].softSkillTitle}
      </h2>
      <div className={classNameSkills.className}>
        {DataSoftSkills.map((skill) => (
          <Softskill skill={skill} key={skill.id} />
        ))}
      </div>
      <h2 className={classNameTitle.className}>
        {traduction[language].hardSkillTitle}
      </h2>
      <div className={classNameSkills.className}>
        {DatasHardSkills.map((skill) => (
          <Hardskill skill={skill} key={skill.id} />
        ))}
      </div>
      <h2 className={classNameTitle.className}>
        {traduction[language].hobbyTitle}
      </h2>
      <div className={classNameSkills.className}>
        {DataHobbies.map((like) => (
          <Hobby like={like} key={like.id} />
        ))}
      </div>
    </section>
  );
};

export default About;
