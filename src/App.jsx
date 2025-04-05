import "./App.css";
import ProgressBar from "./ProgressBar";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <ProgressBar progress={90} />
    </div>
  );
}

export default App;
