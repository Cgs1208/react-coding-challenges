import "./App.css";
import SelectableGrid from "./components/SelectableGrid";

function App() {
  return (
    <div className="App">
      <h2>Grid</h2>
      <SelectableGrid rows={10} cols={10} />
    </div>
  );
}

export default App;
