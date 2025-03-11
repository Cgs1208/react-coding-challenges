import { useEffect, useState } from "react";
import "./App.css";

const URL = "https://dummyjson.com/recipes/search?q=";

function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [resultsVisibility, setResultsVisibility] = useState(false);
  const [cache, setCache] = useState({});

  const fetchResults = async () => {
    if (cache[input]) {
      setResults(cache[input]);
      console.log("cache returned for " + input);
      return;
    }

    const data = await fetch(URL + input);
    const jsonData = await data.json();
    setResults(jsonData?.recipes);
    setCache((prev) => ({ ...prev, [input]: jsonData?.recipes }));
  };

  useEffect(() => {
    const timer = setTimeout(fetchResults, 300);

    return () => {
      clearTimeout(timer);
    };
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
          onFocus={() => setResultsVisibility(true)}
          onBlur={() => setResultsVisibility(false)}
        />
      </div>
      {resultsVisibility && (
        <div
          style={{
            width: "410px",
            margin: "auto",
            maxHeight: "300px",
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
      )}
    </div>
  );
}

export default App;
