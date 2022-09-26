import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizQuestions } from "../redux/actions/actions";
import { Link, useNavigate } from "react-router-dom";
import {
  addQuestionToExistingQuiz,
  addQuestionToNewQuiz,
} from "../redux/actions/actions";

export default function App() {
  const { allQuestions } = useSelector((state) => ({
    ...state.app,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizQuestions([]));
  }, [dispatch]);

  const correct = (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = "green";
    e.target.style.color = "white";
  };
  const incorrect = (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = "red";
    e.target.style.color = "white";
  };
  const navigate = useNavigate();
  const onAddButtonClick = (id) => {
    const question = allQuestions.find((question) => question.id === id);
    dispatch(addQuestionToExistingQuiz(question));
    navigate("/CreateQuiz");
  };

  const onAddNewButtonClick = (id) => {
    const question = allQuestions.find((question) => question.id === id);
    dispatch(addQuestionToNewQuiz(question));
    navigate("/CreateQuiz");
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
      {allQuestions.map((question) => (
        <div className="card w-75 mt-5 d-flex justify-content-center m-auto">
          <div className="card-body">
            <h3 key={question.id}>{question.question}</h3>
            {question.allAnswers.map((ans) => (
              <button
                className="btn btn-primary ms-2 mt-2"
                key={ans.id}
                onClick={ans.isCorrect ? correct : incorrect}
              >
                {ans.answerText}
              </button>
            ))}
          </div>
          <button
            className="btn btn-warning mt-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add question
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Do you want to add this question to new quiz or to existing
                    one?
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <a
                    className="btn btn-warning"
                    onClick={() => onAddButtonClick(question.id)}
                    data-bs-dismiss="modal"
                  >
                    Quiz 1
                  </a>
                  <a
                    className="btn btn-warning"
                    onClick={() => onAddNewButtonClick(question.id)}
                    data-bs-dismiss="modal"
                  >
                    Quiz 2
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
