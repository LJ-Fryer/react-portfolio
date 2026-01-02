import React from "react";
import "modern-normalize";
import "./App.scss";
import trapezeImage from "./assets/trapeze.png";

function App() {
  return (
    <>
      <h1>React Portfolio</h1>
      <img src={trapezeImage} alt="Flying high on a trapeze" />
    </>
  );
}

export default App;
