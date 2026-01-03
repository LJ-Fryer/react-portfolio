import React from "react";
import "modern-normalize";
import "./App.scss";
import trapezeImage from "./assets/trapeze.png";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Tech from "./components/Tech/Tech";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
{
  /* <img src={trapezeImage} alt="Flying high on a trapeze" />; */
}
