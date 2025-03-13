import React from "react";

const Progress = ({ progress }) => {
  console.log(progress);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          width: `${progress}%`,
          color: progress < 4 ? "black" : "white",
        }}
        role="progressbar"
        aria-valuemax={100}
        aria-valuenow={progress}
        aria-valuemin={0}
      >
        {progress}%
      </div>
    </div>
  );
};

export default Progress;
