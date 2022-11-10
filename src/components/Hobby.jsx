import { LangContext } from "../context/LangContext";
import { useContext } from "react";

const Hobby = ({ like }) => {
  const { language } = useContext(LangContext);
  return (
    <div className="w-20 flex flex-col items-center">
      <p className="text-1xl text-center mb-6">
        {language == "fr" ? like.texteFr : like.texteEn}
      </p>
      <img className="w-10" src={like.image} alt={like.image} />
    </div>
  );
};

export default Hobby;
