import { useState } from "react";
import "./App.css";
import questions from "./constants/constants.json";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [usersAnswers, setUsersAnwers] = useState([]);

  const handleAnswerClick = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUsersAnwers([...usersAnswers, isCorrect]);
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setUsersAnwers([]);
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
      {currentQuestion === questions.length && (
        <Result
          userAnswers={usersAnswers}
          questions={questions}
          OnResetQuiz={handleResetQuiz}
        />
      )}
    </div>
  );
}

export default App;
