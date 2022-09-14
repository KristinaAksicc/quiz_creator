import React from "react";
import { useState, useEffect } from "react";

export default function App() {
  const [options, setOptions] = useState();
  useEffect(() => {
    const apiUrl = `https://the-trivia-api.com/api/questions?limit=5`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setOptions(response);
      });
  }, [setOptions]);

  return (
    <div className="app">
      <div className="question-section">
        <div className="question-text">
          {options.map((option) => (
            <h2 key={option.question}>{option.question}</h2>
          ))}
        </div>
      </div>
      <div className="answer-section">
        {options.map((option) => (
          <>
            <button key={option.correctAnswer}>{option.correctAnswer}</button>
            <button key={option.incorrectAnswers}>
              {option.incorrectAnswers}
            </button>
          </>
        ))}
      </div>
    </div>
  );
}
