import { LangContext } from "../../context/LangContext";
import { useContext } from "react";
import { ModeContext } from "../../context/ModeContext.jsx";

const Softskill = ({ skill }) => {
  const { language } = useContext(LangContext);
  const { mode } = useContext(ModeContext);

  return (
    <div className="w-20 flex flex-col items-center">
      <p className="text-xs text-center mb-3 2xl:text-xl">
        {language == "fr" ? skill.texteFr : skill.texteEn}
      </p>
      {mode != "dark" ? (
        <img
          className="w-10 2xl:w-36"
          src={skill.imageBw}
          alt={skill.imageBw}
        />
      ) : (
        <img
          className="w-10 2xl:w-36"
          src={skill.imageColor}
          alt={skill.imageColor}
        />
      )}
    </div>
  );
};

export default Softskill;
