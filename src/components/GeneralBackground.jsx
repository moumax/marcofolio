import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

const GeneralBackground = () => {
  const { mode } = useContext(ModeContext);
  return (
    <div
      className={
        mode === "light"
          ? "absolute bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-screen h-full z-0"
          : "absolute bg-white w-screen h-full z-0"
      }
    ></div>
  );
};

export default GeneralBackground;


