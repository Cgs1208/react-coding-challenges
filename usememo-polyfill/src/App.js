import { useMemo, useState } from "react";
import useCustomMemo from "./hooks/use-custom-memo";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const onSquare = () => {
    console.log("expensive operations");
    return counter1 * counter1;
  };

  //const memoisedValue = useMemo(onSquare, [counter1]); //default useMemo
  const memoisedValue = useCustomMemo(onSquare, [counter1]); //our own custom useMemo

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        margin: "20px",
      }}
    >
      <span>counter1: {counter1}</span>
      <span>Square: {memoisedValue}</span>
      <button onClick={() => setCounter1(counter1 + 1)}>Increment</button>
      <span>counter2: {counter2}</span>
      <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>
    </div>
  );
}

export default App;
