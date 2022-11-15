import { LangContext } from "../context/LangContext";
import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";
import traduction from "../Datas/Traduction";

import PortfolioDatas from "../Datas/PortfolioDatas";

const Projects = () => {
  const { language } = useContext(LangContext);
  const { mode } = useContext(ModeContext);

  return (
    <section className="relative mb-40">
      <h1 className="text-4xl mb-10">{traduction[language].projectTitle}</h1>
      {PortfolioDatas.map((data) => (
        <div className="flex flex-col items-center border-2 border-slate-800 rounded-md overflow-hidden m-10">
          <a href={data.lien} target="_blank" rel="noopener noreferrer">
            {mode == "dark" ? (
              <img
                className="w-fit"
                src={data.imageLight || data.image}
                alt={data.imageLight}
              />
            ) : (
              <img
                className="w-fit"
                src={data.imageDark || data.image}
                alt={data.imageDark}
              />
            )}
          </a>
          <h2 className="text-start text-2xl mt-5 mb-5 ml-4 w-full underline">
            {data.titre}
          </h2>
          <ul className="flex flex-wrap justify-center gap-2 mb-12 text-2xl">
            {data.techno1 ? (
              <li className="border-2 border-stone-900 rounded-md hover:text-blue-300">
                <span className="m-2">{data.techno1}</span>
              </li>
            ) : null}

            {data.techno2 ? (
              <li className="border-2 border-stone-900 rounded-md hover:text-blue-300">
                <span className="m-2">{data.techno2}</span>
              </li>
            ) : null}

            {data.techno3 ? (
              <li className="border-2 border-stone-900 rounded-md hover:text-blue-300">
                <span className="m-2">{data.techno3}</span>
              </li>
            ) : null}

            {data.techno4 ? (
              <li className="border-2 border-stone-900 rounded-md hover:text-blue-300">
                <span className="m-2">{data.techno4}</span>
              </li>
            ) : null}

            {data.techno5 ? (
              <li className="border-2 border-stone-900 rounded-md hover:text-blue-300">
                <span className="m-2">{data.techno5}</span>
              </li>
            ) : null}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Projects;
