import About from "./components/About";
import Home from "./components/Home";
import LangContextProvider from "./context/LangContext";
import GeneralBackgroundDark from "./components/GeneralBackgroundDark";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ButtonDark from "./components/ButtonDark";
import ButtonLanguage from "./components/ButtonLanguage";

function App() {
  return (
    <LangContextProvider>
      <div className="App relative text-center">
        <GeneralBackgroundDark />
        <ButtonLanguage />
        <ButtonDark />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </LangContextProvider>
  );
}

export default App;
