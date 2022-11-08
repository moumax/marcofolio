import About from "./components/About";
import Home from "./components/Home";
import GeneralBackgroundDark from "./components/GeneralBackgroundDark";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App relative text-center">
      <GeneralBackgroundDark />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
