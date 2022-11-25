import { useContext } from "react";
import { ModeContext } from "../../context/ModeContext.jsx";

const Hardskill = ({ skill }) => {
  const { mode } = useContext(ModeContext);

  return (
    <div className="xs:w-20 flex flex-col items-center md:wrap md:w-32">
      <p className="xs:text-md text-center mb-3 md:text-xl">{skill.texte}</p>
      {mode != "dark" ? (
        <img className="xs:w-6 md:w-16" src={skill.imageBw} alt={skill.imageBw} />
      ) : (
        <img className="xs:w-6 md:w-16" src={skill.imageColor} alt={skill.imageColor} />
      )}
    </div>
  );
};

export default Hardskill;
