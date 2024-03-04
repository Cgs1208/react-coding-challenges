import "./App.css";
import { useState } from "react";
import usePassGenerator from "./hooks/usePassGenerator";
import StrengthChecker from "./components/StrengthChecker";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";

function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    {
      title: "Include lowercase",
      state: false,
    },
    {
      title: "Include uppercase",
      state: false,
    },
    {
      title: "Include numbers",
      state: false,
    },
    {
      title: "Include symbols",
      state: false,
    },
  ]);
  const [copied, setCopied] = useState(false);

  const handleCheckboxData = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const { password, error, generatePassword } = usePassGenerator();

  return (
    <div className="text-white bg-gray-600 w-96 h-auto m-5 rounded-md p-2">
      {/* password and copy button */}
      {password && (
        <div className="flex justify-between mt-3 m-2">
          <div>{password}</div>
          <Button
            onClick={handleCopy}
            btnName={copied ? "copied" : "copy"}
            style={`bg-green-300 font-bold rounded-md w-14 p-1`}
          />
        </div>
      )}

      {/* character length */}
      <div>
        <span className="m-2 flex justify-between">
          <label>Character length</label>
          <label>{length}</label>
        </span>
        <input
          onChange={(e) => {
            setLength(e.target.value);
          }}
          value={length}
          type="range"
          min="4"
          max="20"
          className="w-11/12 ml-2 pl-1"
        />
      </div>

      {/* checkboxes */}
      <div className="grid grid-cols-2 gap-3 mb-2">
        {checkboxData.map((data, index) => {
          return (
            <Checkbox
              key={index}
              title={data.title}
              state={data.state}
              onChange={() => handleCheckboxData(index)}
            />
          );
        })}
      </div>

      {/* strength */}
      <StrengthChecker password={password} />

      {/* eror handling */}
      {error && <div className="text-red-500 p-1 pb-2">{error}</div>}

      {/* generate password button */}
      <Button
        onClick={() => generatePassword(checkboxData, length)}
        btnName="Generate password"
        style={`bg-green-300 rounded-md w-full p-1 text-xl font-bold`}
      />
    </div>
  );
}

export default App;
