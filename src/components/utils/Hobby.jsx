import { LangContext } from "../../context/LangContext";
import { useContext } from "react";

const Hobby = ({ like }) => {
  const { language } = useContext(LangContext);
  return (
    <div className="w-20 flex flex-col items-center">
      <p className="text-xs text-center mb-2 2xl:text-xl">
        {language == "fr" ? like.texteFr : like.texteEn}
      </p>
      <img className="w-10 2xl:w-36" src={like.image} alt={like.image} />
    </div>
  );
};

export default Hobby;
