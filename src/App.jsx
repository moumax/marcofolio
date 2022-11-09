import About from "./components/About";
import Home from "./components/Home";
import GeneralBackgroundDark from "./components/GeneralBackgroundDark";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ButtonDark from "./components/ButtonDark";
import ButtonLanguage from "./components/ButtonLanguage";

function App() {
  return (
    <div className="App relative text-center">
      <GeneralBackgroundDark />
      <ButtonLanguage />
      <ButtonDark />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
