import React from "react";

const Button = ({ onClick, btnName, style }) => {
  return (
    <button className={style} onClick={onClick}>
      {btnName}
    </button>
  );
};

export default Button;
