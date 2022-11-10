import { LangContext } from "../context/LangContext";
import { useContext } from "react";

const Softskill = ({ skill }) => {
  const { language } = useContext(LangContext);
  return (
    <div className="w-20 flex flex-col items-center">
      <p className="text-1xl text-center mb-6">
        {language == "fr" ? skill.texteFr : skill.texteEn}
      </p>
      <img className="w-10" src={skill.image} alt={skill.image} />
    </div>
  );
};

export default Softskill;
