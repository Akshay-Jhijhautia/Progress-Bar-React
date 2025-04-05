import "./App.css";
import ProgressBar from "./ProgressBar";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);
  const [input, setInput] = useState("");

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleProgessValue() {
    setProgress(input);
  }

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <h2>Enter the Progress Value</h2>
      <input
        type="number"
        className="box"
        value={input}
        onChange={handleInputChange}
      ></input>
      <button className="button" onClick={handleProgessValue}>
        Submit
      </button>
      <ProgressBar progress={progress} />
    </div>
  );
}

export default App;
