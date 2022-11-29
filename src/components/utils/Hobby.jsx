import { LangContext } from "../../context/LangContext";
import { useContext } from "react";
import { ModeContext } from "../../context/ModeContext.jsx";

const Hobby = ({ like }) => {
  const { language } = useContext(LangContext);
  const { mode } = useContext(ModeContext);

  return (
    <div className="xs:w-30 flex flex-col items-center md:wrap md:w-32">
      <p className="xs:text-md text-center mb-3 md:text-xl">
        {language == "fr" ? like.texteFr : like.texteEn}
      </p>
      {mode != "dark" ? (
        <img className="xs:w-6 md:w-16" src={like.imageBw} alt={like.imageBw} />
      ) : (
        <img
          className="xs:w-6 md:w-16"
          src={like.imageColor}
          alt={like.imageColor}
        />
      )}
    </div>
  );
};

export default Hobby;
