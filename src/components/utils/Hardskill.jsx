import { useContext } from "react";
import { ModeContext } from "../../context/ModeContext.jsx";

const Hardskill = ({ skill }) => {
  const { mode } = useContext(ModeContext);

  return (
    <div className="mx-auto">
      <p className="xs:text-md text-center mb-3 sm:text-xl">{skill.texte}</p>
      {mode == "dark" ? (
        <img className="mx-auto xs:w-6 sm:w-16 md:w-16" src={skill.imageBw} alt={skill.imageBw} />
      ) : (
        <img className="mx-auto xs:w-6 sm:w-10 md:w-16" src={skill.imageColor} alt={skill.imageColor} />
      )}
    </div>
  );
};

export default Hardskill;
