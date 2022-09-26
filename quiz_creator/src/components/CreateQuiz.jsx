import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeQuestionFromQuiz } from "../redux/actions/actions";
import { Link } from "react-router-dom";

export default function CreateQuiz() {
  const { quiz, newQuiz } = useSelector((state) => ({
    ...state.app,
  }));
  const dispatch = useDispatch();

  const onRemoveButtonClick = (id) => {
    const deleteQuestion = newQuiz.filter(
      (deleteQuestion) => deleteQuestion.id !== id
    );

    dispatch(removeQuestionFromQuiz(deleteQuestion));
  };

  return (
    <div className="app">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  Questions Page
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/CreateQuiz" className="nav-link ">
                  Create Quiz
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="create-quiz  d-flex align-items-center flex-column">
        <h2 className="text-center mt-5">Quiz</h2>
        <table className="table w-50 border">
          <tbody>
            {quiz.map((existingQuestion) => (
              <tr>
                <td className="text-center" key={existingQuestion.id}>
                  {existingQuestion.question}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="create-quiz  d-flex align-items-center flex-column">
        <h2 className="text-center mt-5">New Quiz</h2>
        <table className="table w-50 border">
          <tbody>
            {newQuiz.map((question) => (
              <tr>
                <td className="text-center" key={question.id}>
                  {question.question}
                </td>
                <button
                  className="btn btn-primary text text-bg-primary"
                  onClick={() => onRemoveButtonClick(question.id)}
                >
                  Remove question
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
