import { LangContext } from "../../context/LangContext"
import { useContext } from "react";

const Softskill = ({ skill }) => {
  const { language } = useContext(LangContext);
  return (
    <div className="w-20 flex flex-col items-center">
      <p className="text-xs text-center mb-3">
        {language == "fr" ? skill.texteFr : skill.texteEn}
      </p>
      <img className="w-10" src={skill.image} alt={skill.image} />
    </div>
  );
};

export default Softskill;
