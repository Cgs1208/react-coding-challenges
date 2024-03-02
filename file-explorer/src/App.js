import "./App.css";
import Folder from "./components/Folder";
import explorer from "./data/folderData";
import { useState } from "react";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  return (
    <div className="App">
      <Folder explorer={explorerData} />
    </div>
  );
}

export default App;
