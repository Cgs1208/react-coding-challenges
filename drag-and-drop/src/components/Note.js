import React from "react";

const Note = ({ content }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "200px",
        border: "1px solid black",
        backgroundColor: "light yellow",
        userSelect: "none",
        cursor: "move",
      }}
    >
      📌 {content}
    </div>
  );
};

export default Note;
