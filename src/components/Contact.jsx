import Form from "./Form";
import { LangContext } from "../context/LangContext";
import { useContext, useState } from "react";
import traduction from "../Datas/dataTraduction";
import Home from "./Home.jsx";

const Contact = () => {
  const { language } = useContext(LangContext);
  const [isShown, setIsShown] = useState(false);

  const affiche = () => {
    setIsShown((current) => !current);
  };

  return (
    <>
      {!isShown && (
        <section className="relative h-screen -z-1 flex flex-col justify-center w-screen">
          <h2 className="absolute top-0 mb-20 left-3 text-3xl mt-11 underline">
            {traduction[language].formTitle}
          </h2>
          <Form />
          <button
            className="w-fit border-2 border-slate-500 rounded px-4 py-1 self-center"
            type={"button"}
            onClick={affiche}
          >
            Accueil
          </button>
        </section>
      )}
      {isShown && <Home />}
    </>
  );
};

export default Contact;
