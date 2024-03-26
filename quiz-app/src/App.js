import { useState } from "react";
import "./App.css";
import questions from "./constants/constants.json";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [usersAnswers, setUsersAnwers] = useState([]);

  return (
    <div className="App">
      <h2>Quiz</h2>
      {/* question component */}
      {/* result component  */}
    </div>
  );
}

export default App;
