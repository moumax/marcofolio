import { useForm, ValidationError } from "@formspree/react";
import Button from "./Button";

const Form = () => {
  const [state, handlesubmit] = useForm("mzbwjygp");

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
      <label>Nom, Prénom</label>
      <input
        type="text"
        name="name"
        id="full-name"
        placeholder="Nom, Prénom"
        required=""
      ></input>
      <label>Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="toto@gmail.com"
      ></input>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label>Téléphone</label>
      <input
        type="telephone"
        name="telephone"
        id="telephone"
        placeholder="06 31 31 31 31"
      ></input>
      <label>Votre message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Mon message"
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button type={"submit"} disabled={state.submitting}>
        Envoyer votre formulaire
      </Button>
    </form>
  );
};

export default Form;
