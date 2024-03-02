import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: "5px", marginLeft: "5px" }}>
        <div
          className="folder"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <span>📁 {explorer.name}</span>
        </div>
        <div style={{ display: expand ? "block" : "none", padding: "5px" }}>
          {explorer.items.map((exp) => (
            <Folder key={exp.id} explorer={exp} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <span className="file" style={{ marginLeft: "5px" }}>
        📄 {explorer.name}
      </span>
    );
  }
};

export default Folder;
