import { LangContext } from "../context/LangContext";
import { useContext } from "react";
import traduction from "../Datas/Traduction.js";

const Home = () => {
  const { language } = useContext(LangContext);

  return (
    <section className="relative h-screen">
      <h1 className="text-black-600 text-6xl">
        {traduction[language].bonjour}
      </h1>
      <h2 className="text-black-600 text-3xl">{traduction[language].me}</h2>
    </section>
  );
};

export default Home;
