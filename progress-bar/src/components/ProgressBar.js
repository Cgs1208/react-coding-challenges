import React, { useEffect, useState } from "react";
import { MIN, MAX } from "../constants";

const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(value, MIN)));
    if (value >= MAX) onComplete();
  }, [value]);

  return (
    <div className="progress">
      {
        <span style={{ color: percent > 49 ? "white" : "black" }}>
          {percent.toFixed()}%
        </span>
      }
      <div
        style={{
          transform: `scaleX(${percent / MAX})`,
          transformOrigin: "left",
        }}
        role="progressbar"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percent.toFixed()}
      ></div>
    </div>
  );
};

export default ProgressBar;
