import { useMemo, useState } from "react";

function App() {
  const [counter1, setCounter1] = useState(3);
  const [counter2, setCounter2] = useState(100);

  const onSquare = () => {
    console.log("expensive operations");
    return counter1 * counter1;
  };

  const memoisedValue = useMemo(onSquare, [counter1]);

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        margin: "20px",
      }}
    >
      <span>counter1: {memoisedValue}</span>
      <span>Square: {memoisedValue}</span>
      <button onClick={() => setCounter1(counter1 + 1)}>Increment</button>
      <span>counter2: {counter2}</span>
      <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>
    </div>
  );
}

export default App;
