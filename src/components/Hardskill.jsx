import { useContext } from "react"
import { ModeContext } from "../context/ModeContext.jsx"

const Hardskill = ({ skill }) => {
  const { mode } = useContext(ModeContext)

  return (
    <div className="w-20 flex flex-col items-center">
      <p className="text-xs text-center mb-3">{skill.texte}</p>
      {mode != "dark" ? (
        <img
          className="w-10"
          src={skill.imageBw}
          alt={skill.imageBw} />
      ) : (
        <img
          className="w-10"
          src={skill.imageColor}
          alt={skill.imageColor}
        />
      )
      }
    </div>
  );
};

export default Hardskill;
