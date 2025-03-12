import { useState } from "react";
import "./App.css";
import jsonData from "./data.json";
import List from "./components/List";

function App() {
  const [data, setData] = useState(jsonData);

  return (
    <div>
      <h2>Folder structure</h2>
      <List list={data} />
    </div>
  );
}

export default App;
