import SoftSkills from "../Datas/Softskills";
import HardSkills from "../Datas/Hardskills";
import Softskill from "../components/Softskill";
import Hardskill from "../components/Hardskill";

const About = () => {
  return (
    <section className="relative h-screen">
      <h2 className="text-4xl">Compétences personnelles</h2>
      <div className="flex gap-20 justify-center mb-10">
        {SoftSkills.map((skill) => (
          <Softskill skill={skill} key={skill.id} />
        ))}
      </div>
      <div className="flex gap-20 justify-center mb-10">
        {HardSkills.map((skill) => (
          <Hardskill skill={skill} key={skill.id} />
        ))}
      </div>
    </section>
  );
};

export default About;
