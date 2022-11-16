import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

const ButtonMode = () => {
  const { switchMode, mode } = useContext(ModeContext);
  return (
    <div>
      <div>
        <input
          className="relative appearance-none w-9 focus:outline-none checked:bg-blue-300 h-5 bg-gray-300 rounded-full before:inline-block before:rounded-full before:bg-blue-500 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={(e) => {
            mode == "light" ? switchMode("dark") : switchMode("light");
          }}
        ></input>
        <label
          className="fixed form-check-label inline-block mx-11 -my-1"
          htmlFor="flexSwitchCheckDefault"
        >
          {mode === "light" ? "Light" : "Dark"}
        </label>
      </div>
    </div>
  );
};

export default ButtonMode;
