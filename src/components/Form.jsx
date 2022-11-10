import { useForm, ValidationError } from "@formspree/react";
import Button from "./Button";
import { LangContext } from "../context/LangContext";
import { useContext } from "react";
import traduction from "../Datas/Traduction.js";

const Form = () => {
  const [state, handlesubmit] = useForm("mzbwjygp");
  const { language } = useContext(LangContext);
  const className = "rounded-md m-3 text-center";

  if (state.succeeded) {
    return (
      <div>
        <p>Formulaire bien envoyé</p>
      </div>
    );
  }
  return (
    <form
      className="flex flex-col w-full items-center justify-center text-xl font-bold"
      onSubmit={handlesubmit}
    >
      <input
        className={className}
        type="text"
        name="name"
        id="full-name"
        placeholder={traduction[language].formName}
        required=""
      ></input>
      <input
        className={className}
        type="email"
        id="email"
        name="email"
        placeholder={traduction[language].formEmail}
      ></input>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <input
        className={className}
        type="telephone"
        name="telephone"
        id="telephone"
        placeholder={traduction[language].formPhone}
      ></input>

      <textarea
        className={className}
        id="message"
        name="message"
        placeholder={traduction[language].formMessage}
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button type={"submit"} disabled={state.submitting}>
        {traduction[language].formButtonSend}
      </Button>
    </form>
  );
};

export default Form;
