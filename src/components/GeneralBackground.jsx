import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

const GeneralBackground = () => {
  const { mode } = useContext(ModeContext);
  return (
    <div
      className={
        mode === "light"
          ? "absolute min-h-screen bg-gradient-to-r from-blue-600 to-blue-900 p-10 w-full h-full z-0"
          : "absolute min-h-screen bg-white p-10 w-full h-full z-0"
      }
    ></div>
  );
};

export default GeneralBackground;
