import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

const GeneralBackground = () => {
  const { mode } = useContext(ModeContext);

  const classBackgroundDark =
    "absolute bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-screen h-full z-0";
  const classBackgroundLight = "absolute bg-white w-screen h-full z-0";

  return (
    <div
      className={mode === "light" ? classBackgroundDark : classBackgroundLight}
    ></div>
  );
};

export default GeneralBackground;
