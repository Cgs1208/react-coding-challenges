import React from "react";

const Checkbox = ({ title, state, onChange }) => {
  return (
    <div className="flex items-center">
      <input type="checkbox" checked={state} onChange={onChange} />
      <label className="ml-2 font-bold">{title}</label>
    </div>
  );
};

export default Checkbox;
