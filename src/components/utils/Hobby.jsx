import { LangContext } from "../../context/LangContext";
import { useContext } from "react";
import { ModeContext } from "../../context/ModeContext.jsx";

const Hobby = ({ like }) => {
  const { language } = useContext(LangContext);
  const { mode } = useContext(ModeContext);

  return (
    <div className="w-20 flex flex-col items-center">
      <p className="text-xs text-center mb-2 2xl:text-xl">
        {language == "fr" ? like.texteFr : like.texteEn}
      </p>
      {mode != "dark" ? (
        <img className="w-10 2xl:w-36" src={like.imageBw} alt={like.imageBw} />
      ) : (
        <img
          className="w-10 2xl:w-36"
          src={like.imageColor}
          alt={like.imageColor}
        />
      )}
    </div>
  );
};

export default Hobby;
