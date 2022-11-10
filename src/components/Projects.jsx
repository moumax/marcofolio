import { LangContext } from "../context/LangContext";
import { useContext } from "react";
import traduction from "../Datas/Traduction";

import PortfolioDatas from "../Datas/PortfolioDatas";

const Projects = () => {
  const { language } = useContext(LangContext);
  return (
    <section className="relative mb-40">
      <h1 className="text-4xl mb-10">{traduction[language].projectTitle}</h1>
      {PortfolioDatas.map((data) => (
        <div className="flex flex-col items-center">
          <h2 className="text-3xl mb-5">{data.titre}</h2>
          <a href={data.lien} target="_blank" rel="noopener noreferrer">
            <img
              className="w-fit rounded-full mb-6 pl-5 pr-5"
              src={data.image}
              alt={data.image}
            />
          </a>
          <p className="mb-5 text-xl ml-2 mr-2">
            {language == "fr" ? data.descriptionFR : data.descriptionEN}
          </p>
          <ul className="flex flex-wrap justify-center gap-2 mb-12 text-2xl">
            <li className={data.techno1 ? "techno" : "techno0"}>
              {data.techno1}
            </li>
            <li className={data.techno2 ? "techno" : "techno0"}>
              {data.techno2}
            </li>
            <li className={data.techno3 ? "techno" : "techno0"}>
              {data.techno3}
            </li>
            <li className={data.techno4 ? "techno" : "techno0"}>
              {data.techno4}
            </li>
            <li className={data.techno5 ? "techno" : "techno0"}>
              {data.techno5 ? data.techno5 : ""}
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Projects;
