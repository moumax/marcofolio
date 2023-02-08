import { useContext, useState } from "react";
import { LangContext } from "../context/LangContext";
import SwitchSelector from "react-switch-selector";

import { motion } from "framer-motion";

import DataSoftSkills from "../Datas/dataSoftskills";
import DatasHardSkills from "../Datas/dataHardskills";
import dataTraduction from "../Datas/dataTraduction";

import Softskill from "./utils/Softskill";
import Hardskill from "./utils/Hardskill";
import Projects from "./Projects.jsx";

const About = () => {
  const { language } = useContext(LangContext);
  const [isShown, setIsShown] = useState(false);
  const [switcher, setSwitcher] = useState(false);

  const affiche = () => {
    setIsShown((current) => !current);
  };

  const classImgSkills =
    "mx-auto flex flex-wrap gap-2 justify-center z-50 xs:mb-10 lg:mb-36 w-full";

  const options = [
    {
      label: "SoftSkills",
      value: "SoftSkills",
      selectedBackgroundColor: "#0097e6",
    },
    {
      label: "HardSkills",
      value: "HardSkills",
      selectedBackgroundColor: "#fbc531",
    },
  ];

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === "SoftSkills"
  );

  const onChange = () => {
    setSwitcher((current) => !current);
    console.log(switcher);
  };

  return (
    <>
      {!isShown && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 2.5 }}
          className="relative mx-10 flex justify-center items-center w-screen"
        >
          <div className="z-0 mx-5 sm:mx-20 xl:mx-40 flex flex-col w-screen h-[70vh] justify-center">
            <div
              className="your-required-wrapper"
              style={{ width: 200, height: 50 }}
            >
              <SwitchSelector
                onChange={onChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={"#353b48"}
                fontColor={"#f5f6fa"}
              />
            </div>
            {!switcher && (
              <div className={classImgSkills}>
                {DataSoftSkills.map((skill) => (
                  <Softskill skill={skill} key={skill.id} />
                ))}
              </div>
            )}
            {switcher && (
              <div className={classImgSkills}>
                {DatasHardSkills.map((skill) => (
                  <Hardskill skill={skill} key={skill.id} />
                ))}
              </div>
            )}

            <motion.button
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="border-2 border-slate-500 rounded px-4 py-1 mx-auto xl:text-3xl"
              type={"button"}
              onClick={affiche}
            >
              {dataTraduction[language].buttonAbout}
            </motion.button>
          </div>
        </motion.section>
      )}
      {isShown && <Projects />}
    </>
  );
};

export default About;
