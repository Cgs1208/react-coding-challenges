import React, { useEffect, useState } from "react";

const Progress = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 150);
  }, [progress]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          //width: `${progress}%`,
          transform: `translateX(${animatedProgress - 100}%)`,
          color: animatedProgress < 4 ? "black" : "white",
        }}
        role="progressbar"
        aria-valuemax={100}
        aria-valuenow={animatedProgress}
        aria-valuemin={0}
      >
        {progress}%
      </div>
    </div>
  );
};

export default Progress;
