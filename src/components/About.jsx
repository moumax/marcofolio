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
import { ModeContext } from "../context/ModeContext.jsx";

const About = () => {
  const { language } = useContext(LangContext);
  const [isShown, setIsShown] = useState(false);
  const [switcher, setSwitcher] = useState(false);

  const { mode } = useContext(ModeContext);

  const affiche = () => {
    setIsShown((current) => !current);
  };

  const classImgSkills =
    "mx-auto flex flex-wrap gap-2 justify-center z-50 xs:mb-32 lg:mb-36 w-full xs:mt-20";

  const options = [
    {
      label: "SoftSkills",
      value: "SoftSkills",
    },
    {
      label: "HardSkills",
      value: "HardSkills",
    },
  ];

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === "SoftSkills"
  );

  const onChange = () => {
    setSwitcher((current) => !current);
    console.log(mode);
  };

  return (
    <>
      {!isShown && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 2.5 }}
          className="relative mx-10 flex w-screen"
        >
          {/* Style for container */}
          <div className="z-0 mx-5 sm:mx-20 xl:mx-40 flex flex-col w-screen h-[70vh] justify-start">
            <div
              //Style for button switcher
              // className="absolute top-0 right-24 mx-auto xs:w-48 xs:h-11 sm:w-80 sm:h-16 "
              className="relative mx-auto xs:w-48 xs:h-11 sm:w-80 sm:h-16"
            >
              {mode == "dark" ? (
                <SwitchSelector
                  onChange={onChange}
                  options={options}
                  initialSelectedIndex={initialSelectedIndex}
                  backgroundColor={"#353b48"}
                  fontColor={"#f5f6fa"}
                  selectedBackgroundColor={"grey"}
                />
              ) : (
                <SwitchSelector
                  onChange={onChange}
                  options={options}
                  initialSelectedIndex={initialSelectedIndex}
                  backgroundColor={"grey"}
                  fontColor={"black"}
                  selectedBackgroundColor={"#39B5E0"}
                />
              )}
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
              // Style for button project
              className="relative border-2 border-slate-500 rounded px-4 py-1 mx-auto xl:text-3xl"
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
