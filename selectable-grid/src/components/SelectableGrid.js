import React from "react";

const SelectableGrid = ({ rows = 10, cols = 10 }) => {
  return (
    <div className="grid" style={{ "--rows": rows, "--cols": cols }}>
      {[...Array(rows * cols).keys()].map((_, i) => {
        return (
          <div key={i} className="box">
            {i + 1}
          </div>
        );
      })}
    </div>
  );
};

export default SelectableGrid;
