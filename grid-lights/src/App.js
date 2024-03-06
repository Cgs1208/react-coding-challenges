import "./App.css";
import Cell from "./components/Cell";

function App() {
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  // 1 -> cell appears and 0 -> cell doesn't appear

  const handleActivateCells = () => {};

  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={index}
              filled={false}
              onClick={() => handleActivateCells(index)}
            />
          ) : (
            <span />
          );
        })}
      </div>
    </div>
  );
}

export default App;
