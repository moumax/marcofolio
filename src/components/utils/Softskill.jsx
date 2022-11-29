import { LangContext } from "../../context/LangContext";
import { useContext } from "react";
import { ModeContext } from "../../context/ModeContext.jsx";

const Softskill = ({ skill }) => {
  const { language } = useContext(LangContext);
  const { mode } = useContext(ModeContext);

  return (
    <div className="flex flex-col items-center md:wrap md:w-32">
      <p className="xs:text-md text-center mb-3 md:text-xl">
        {language == "fr" ? skill.texteFr : skill.texteEn}
      </p>
      {mode != "dark" ? (
        <img
          className="xs:w-6 md:w-16"
          src={skill.imageBw}
          alt={skill.imageBw}
        />
      ) : (
        <img
          className="xs:w-6 md:w-16"
          src={skill.imageColor}
          alt={skill.imageColor}
        />
      )}
    </div>
  );
};

export default Softskill;
