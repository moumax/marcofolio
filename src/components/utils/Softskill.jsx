import { LangContext } from "../../context/LangContext"
import { useContext } from "react";

const Softskill = ({ skill }) => {
  const { language } = useContext(LangContext);
  return (
    <div className="w-20 flex flex-col items-center">
      <p className="text-xs text-center mb-3 2xl:text-xl">
        {language == "fr" ? skill.texteFr : skill.texteEn}
      </p>
      <img className="w-10 2xl:w-36" src={skill.image} alt={skill.image} />
    </div>
  );
};

export default Softskill;
