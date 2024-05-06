import "./App.css";
import { useState } from "react";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Naruto is the best anime",
    },
    {
      id: 2,
      text: "Interstellar is the best movie made till date",
    },
  ]);

  return (
    <div className="App">
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
