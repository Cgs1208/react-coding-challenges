import React from "react";

const Result = ({ userAnswers, questions, OnResetQuiz = () => {} }) => {
  const rightAnswerCount = userAnswers.filter((answer) => answer).length;

  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You answered {rightAnswerCount ? rightAnswerCount : 0} out of{" "}
        {questions.length}
        <button
          onClick={OnResetQuiz}
          style={{ border: "1px solid gray", margin: "5px" }}
        >
          Retry quiz
        </button>
        <ul>
          {questions.map((question, index) => {
            return (
              <li key={question.question} data-correct={userAnswers[index]}>
                Q{index + 1}. {question.question}
              </li>
            );
          })}
        </ul>
      </p>
    </div>
  );
};

export default Result;
