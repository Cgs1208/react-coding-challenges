import "./App.css";
import ProgressBar from "./components/ProgressBar";
import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);

  return (
    <div className="app">
      <span>Progress Bar</span>
      <ProgressBar value={value} />
    </div>
  );
}

export default App;
