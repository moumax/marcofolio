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
  const { mode } = useContext(ModeContext);
  const [isShown, setIsShown] = useState(false);

  const classBorderDark =
    "flex flex-col border-2 border-slate-800 rounded-md h-full";
  const classBorderLight =
    "w-fit flex flex-col items-center border-2 border-white rounded-md overflow-hidden";
  const classImg = "px-2 ";
  const classLabelTechno =
    "border-2 border-stone-900 rounded-md hover:text-blue-300";

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
          className="relative w-screen"
        >
          <div className="flex flex-col w-fit mx-auto">
            <Carousel
              infiniteLoop
              autoPlay
              interval={4000}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              className="relative w-[90vw] "
            >
              {dataPortfolio.map((data) => (
                <div
                  key={data.titre}
                  className={
                    mode === "dark" ? classBorderDark : classBorderLight
                  }
                >
                  <h2 className="text-start text-2xl mt-3 mb-5 ml-4 w-fit underline">
                    {data.titre}
                  </h2>
                  <a href={data.lien} target="_blank" rel="noopener noreferrer">
                    {mode == "dark" ? (
                      <img
                        className={classImg}
                        src={data.imageLight || data.image}
                        alt={data.imageLight}
                      />
                    ) : (
                      <img
                        className={classImg}
                        src={data.imageDark || data.image}
                        alt={data.imageDark}
                      />
                    )}
                  </a>
                  <ul className="flex flex-wrap justify-center gap-2 mb-7 text-md mt-7">
                    {data.techno1 ? (
                      <li className={classLabelTechno}>
                        <span className="m-2">{data.techno1}</span>
                      </li>
                    ) : null}

                    {data.techno2 ? (
                      <li className={classLabelTechno}>
                        <span className="m-2">{data.techno2}</span>
                      </li>
                    ) : null}

                    {data.techno3 ? (
                      <li className={classLabelTechno}>
                        <span className="m-2">{data.techno2}</span>
                        <span className="m-2">{data.techno3}</span>
                      </li>
                    ) : null}

                    {data.techno4 ? (
                      <li className={classLabelTechno}>
                        <span className="m-2">{data.techno4}</span>
                      </li>
                    ) : null}

                    {data.techno5 ? (
                      <li className={classLabelTechno}>
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
              className="border-2 border-slate-500 rounded px-4 py-1 mx-auto mt-5"
              type={"button"}
              onClick={affiche}
            >
              Me contacter
            </motion.button>
          </div>
        </motion.section>
      )}
      {isShown && <Contact />}
    </>
  );
};

export default Projects;
