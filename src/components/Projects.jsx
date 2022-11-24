import { LangContext } from "../context/LangContext";
import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

import traduction from "../Datas/dataTraduction";
import dataPortfolio from "../Datas/dataPortfolio";

const Projects = () => {
  const { language } = useContext(LangContext);
  const { mode } = useContext(ModeContext);

  return (
    <section className="relative mb-20">
      <h1 className="text-3xl mb-10">{traduction[language].projectTitle}</h1>
      {dataPortfolio.map((data) => (
        <div
          key={data.titre}
          className={
            mode === "dark"
              ? "w-fit flex flex-col items-center border-2 border-slate-800 rounded-md overflow-hidden m-10"
              : "w-fit flex flex-col items-center border-2 border-white rounded-md overflow-hidden m-10"
          }
        >
          <h2 className="text-start text-2xl mt-3 mb-5 ml-4 w-fit underline">
            {data.titre}
          </h2>
          <a href={data.lien} target="_blank" rel="noopener noreferrer">
            {mode == "dark" ? (
              <img
                className="h-fit"
                src={data.imageLight || data.image}
                alt={data.imageLight}
              />
            ) : (
              <img
                className="h-fit "
                src={data.imageDark || data.image}
                alt={data.imageDark}
              />
            )}
          </a>
          <ul className="flex flex-wrap justify-center gap-2 mb-7 text-md">
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
