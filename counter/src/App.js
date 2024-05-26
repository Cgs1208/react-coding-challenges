import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCounter((prevState) => prevState + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
      setCounter(0);
    };
  }, [isRunning]);

  const handleCounter = () => {
    setIsRunning(!isRunning);
  };

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
        <button onClick={handleCounter}>{isRunning ? "Stop" : "Start"}</button>
      </div>
      <div>{counter}</div>
    </div>
  );
}

export default App;
