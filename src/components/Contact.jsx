import Form from "./Form";
import { LangContext } from "../context/LangContext";
import { useContext } from "react";
import traduction from "../Datas/dataTraduction";

const Contact = () => {
  const { language } = useContext(LangContext);
  return (
    <section className="relative h-screen">
      <h2 className="text-3xl">{traduction[language].formTitle}</h2>
      <Form />
    </section>
  );
};

export default Contact;
