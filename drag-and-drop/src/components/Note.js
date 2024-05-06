import React from "react";

const Note = ({ content, initialPos }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: `${initialPos?.y}px`,
        left: `${initialPos?.x}px`,
        width: "200px",
        border: "1px solid black",
        backgroundColor: "yellow",
        userSelect: "none",
        cursor: "move",
      }}
    >
      📌 {content}
    </div>
  );
};

export default Note;
