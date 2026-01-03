import React from "react";
import "modern-normalize";
import "./App.scss";
import trapezeImage from "./assets/trapeze.png";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Tech from "./components/Tech/Tech";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <h1>React Portfolio</h1>
      <img src={trapezeImage} alt="Flying high on a trapeze" />
      <About />
      <Tech />
      <Projects />
      <Contact />
      <Navbar />
    </>
  );
}

export default App;
