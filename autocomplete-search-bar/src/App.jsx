import { useEffect, useState } from "react";
import "./App.css";

const URL = "https://dummyjson.com/recipes/search?q=";

function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    const data = await fetch(URL + input);
    const jsonData = await data.json();
    setResults(jsonData?.recipes);
  };

  console.log(results);

  useEffect(() => {
    fetchResults();
  }, [input]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Auto complete search bar</h2>
      <div>
        <input
          style={{ width: "400px", padding: "5px" }}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div
        style={{
          width: "410px",
          margin: "auto",
          height: "300px",
          overflowY: "scroll",
          textAlign: "left",
          border: "1px solid black",
        }}
      >
        {results &&
          results.map((r) => (
            <span key={r.id} className="result">
              {r.name}
            </span>
          ))}
      </div>
    </div>
  );
}

export default App;
