import { useForm, ValidationError } from "@formspree/react";
import Button from "./Button";
import { LangContext } from "../context/LangContext";
import { ModeContext } from "../context/ModeContext.jsx";
import { useContext, useState } from "react";
import traduction from "../Datas/dataTraduction";

const Form = () => {
  const [state, handlesubmit] = useForm("mzbwjygp");
  const { language } = useContext(LangContext);
  const { mode } = useContext(ModeContext);

  const [visible, setVisible] = useState(true);
  const removeElement = () => {
    if (state.succeeded) {
      setVisible((prev) => !prev);
    }
  };

  const classInputDark =
    "rounded-md text-center bg-transparent placeholder-green-50 border-2 border-stone-500 placeholder-opacity-50 w-full";
  const classInputLight =
    "rounded-md text-center bg-transparent placeholder-blue-400 border-2 border-stone-500 placeholder-opacity-50 w-fit";
  const classTextareaDark =
    "rounded-md text-center bg-transparent h-40 placeholder-green-50 border-2 border-stone-500 placeholder-opacity-50 w-full";
  const classTextareaLight =
    "rounded-md text-center bg-transparent h-40 placeholder-blue-400 border-2 border-stone-500 placeholder-opacity-50 w-fit";

  return (
    <form
      className="relative flex flex-col text-xl font-bold w-full gap-y-3"
      onSubmit={handlesubmit}
    >
      <input
        className={mode === "light" ? classInputLight : classInputDark}
        type="text"
        name="name"
        id="full-name"
        placeholder={traduction[language].formName}
        required
      ></input>
      <input
        className={mode === "light" ? classInputLight : classInputDark}
        type="email"
        id="email"
        name="email"
        placeholder={traduction[language].formEmail}
        required
      ></input>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <input
        className={mode === "light" ? classInputLight : classInputDark}
        type="phone number"
        name="phone"
        id="phone"
        placeholder={traduction[language].formPhone}
        required
      ></input>
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      <textarea
        className={mode === "light" ? classTextareaLight : classTextareaDark}
        type="message"
        id="message"
        name="message"
        placeholder={traduction[language].formMessage}
        required
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      {visible ? (
        <Button
          type={"submit"}
          disabled={state.submitting}
          onClick={removeElement}
        >
          {traduction[language].formButtonSend}
        </Button>
      ) : (
        <p className="text-red-400">Formulaire bien envoyé!</p>
      )}
    </form>
  );
};

export default Form;
