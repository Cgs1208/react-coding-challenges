import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <button>{isRunning ? "Stop" : "Start"}</button>
      </div>
      <div>{counter}</div>
    </div>
  );
}

export default App;
