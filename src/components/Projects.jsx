import { LangContext } from "../context/LangContext";
import { useContext, useState } from "react";
import { ModeContext } from "../context/ModeContext";
import { motion } from "framer-motion";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import traduction from "../Datas/dataTraduction";
import dataPortfolio from "../Datas/dataPortfolio";
import Contact from "./Contact.jsx";

const Projects = () => {
  const { language } = useContext(LangContext);
  const { mode } = useContext(ModeContext);
  const [isShown, setIsShown] = useState(false);

  const affiche = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <>
      {!isShown && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 2 }}
          className="relative w-screen flex flex-col h-screen justify-center"
        >
          <h1 className="absolute top-0 mb-20 left-3 text-3xl mt-11 underline  bg-gradient-to-r from-orange-400 to-blue-800 bg-clip-text text-transparent">
            {traduction[language].projectTitle}
          </h1>
          <Carousel
            infiniteLoop
            autoPlay
            interval={4000}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            className="relative pb-10"
          >
            {dataPortfolio.map((data) => (
              <div
                key={data.titre}
                className={
                  mode === "dark"
                    ? "w-fit flex flex-col items-center border-2 border-slate-800 rounded-md overflow-hidden m-10"
                    : "w-fit flex flex-col items-center border-2 border-white rounded-md overflow-hidden "
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
                <ul className="flex flex-wrap justify-center gap-2 mb-7 text-md mt-7">
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
          </Carousel>
          <motion.button
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="w-fit border-2 border-slate-500 rounded px-4 py-1 self-center"
            type={"button"}
            onClick={affiche}
          >
            Me contacter
          </motion.button>
        </motion.section>
      )}
      {isShown && <Contact />}
    </>
  );
};

export default Projects;
