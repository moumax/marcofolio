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

  return (
    <section className="relative h-screen">
      <h2 className="text-4xl">{traduction[language].softSkillTitle}</h2>
      <div className="flex gap-20 justify-center mb-10">
        {SoftSkills.map((skill) => (
          <Softskill skill={skill} key={skill.id} />
        ))}
      </div>
      <h2 className="text-4xl">{traduction[language].hardSkillTitle}</h2>
      <div className="flex gap-20 justify-center mb-10">
        {HardSkills.map((skill) => (
          <Hardskill skill={skill} key={skill.id} />
        ))}
      </div>
      <h2 className="text-4xl">{traduction[language].hobbyTitle}</h2>
      <div className="flex gap-20 justify-center mb-10">
        {Hobbies.map((like) => (
          <Hobby like={like} key={like.id} />
        ))}
      </div>
    </section>
  );
};

export default About;
