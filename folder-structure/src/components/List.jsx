import React, { useState } from "react";

const List = ({ list }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="container">
      {list.map((node) => (
        <div key={node.id} style={{ marginBottom: "5px" }}>
          <span onClick={() => setIsExpanded((prev) => !prev)}>
            {node.name}
          </span>
          {node.children && <span> {isExpanded ? "-" : "+"}</span>}
          {isExpanded && node?.children && <List list={node.children} />}
        </div>
      ))}
    </div>
  );
};

export default List;
