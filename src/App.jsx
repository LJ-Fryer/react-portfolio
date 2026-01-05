import "modern-normalize";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Tech from "./components/Tech/Tech";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tech />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;
