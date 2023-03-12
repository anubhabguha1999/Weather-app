import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/anubhabguha1999/Weather-app">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://github.com/anubhabguha1999">
          Anubhab Guha
        </a>{" "}
        |  by{" "}
        <a target="_blank" href="https://github.com/anubhabguha1999">
          Anubhab Guha
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
