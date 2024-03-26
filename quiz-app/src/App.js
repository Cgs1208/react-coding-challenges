import { useState } from "react";
import "./App.css";
import questions from "./constants/constants.json";
import Question from "./components/Question";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [usersAnswers, setUsersAnwers] = useState([]);

  const handleAnswerClick = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUsersAnwers([...usersAnswers, isCorrect]);
  };

  return (
    <div className="App">
      <h2>Quiz</h2>
      {/* question component */}
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleAnswerClick}
        />
      )}
      {/* result component  */}
    </div>
  );
}

export default App;
