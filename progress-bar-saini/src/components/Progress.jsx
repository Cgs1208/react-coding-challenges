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
      >
        {progress}%
      </div>
    </div>
  );
};

export default Progress;
