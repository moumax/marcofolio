import { LangContext } from "../context/LangContext";
import { useContext } from "react";
import traduction from "../Datas/Traduction";

import SoftSkills from "../Datas/Softskills";
import HardSkills from "../Datas/Hardskills";
import Hobbies from "../Datas/Hobbies";
import Softskill from "../components/Softskill";
import Hardskill from "../components/Hardskill";
import Hobby from "../components/Hobby";

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
        {SoftSkills.map((skill) => (
          <Softskill skill={skill} key={skill.id} />
        ))}
      </div>
      <h2 className={classNameTitle.className}>
        {traduction[language].hardSkillTitle}
      </h2>
      <div className={classNameSkills.className}>
        {HardSkills.map((skill) => (
          <Hardskill skill={skill} key={skill.id} />
        ))}
      </div>
      <h2 className={classNameTitle.className}>
        {traduction[language].hobbyTitle}
      </h2>
      <div className={classNameSkills.className}>
        {Hobbies.map((like) => (
          <Hobby like={like} key={like.id} />
        ))}
      </div>
    </section>
  );
};

export default About;
