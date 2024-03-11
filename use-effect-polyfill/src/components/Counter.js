import React, { useEffect, useState } from "react";
import { useCustomEffect } from "../hooks/use-custom-hook";

const Counter = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useCustomEffect(() => {
    console.log("Effect triggered", counter1);
    return () => {
      console.log("cleanup");
    };
  }, [counter1]);

  console.log("rerendering");

  return (
    <div>
      <h2>counter 1: {counter1}</h2>
      <h2>counter 2: {counter2}</h2>
      <div>
        <button
          style={{ backgroundColor: "wheat" }}
          onClick={() => {
            setCounter1(counter1 + 1);
          }}
        >
          Increment Counter 1
        </button>
      </div>
      <div>
        <button
          style={{ backgroundColor: "wheat" }}
          onClick={() => {
            setCounter2(counter2 + 1);
          }}
        >
          Increment Counter 2
        </button>
      </div>
    </div>
  );
};

export default Counter;
