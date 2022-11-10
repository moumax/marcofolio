import { LangContext } from "../context/LangContext";
import { useContext } from "react";
import traduction from "../Datas/Traduction.js";

const Home = () => {
  const { language } = useContext(LangContext);

  return (
    <section className="relative h-screen ml-5 mr-5 flex flex-col justify-center pb-48">
      <h1 className="text-5xl mb-10 mt-24">{traduction[language].bonjour}</h1>
      <h2 className="text-black-600 text-2xl">{traduction[language].me}</h2>
    </section>
  );
};

export default Home;
