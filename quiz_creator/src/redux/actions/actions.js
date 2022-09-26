import axios from "axios";
import * as types from "./types";

function getQuestions() {
  return {
    type: types.GET_QUESTIONS,
  };
}
function getQuestionsSuccess(allQuestions) {
  return {
    type: types.GET_QUESTIONS_SUCCESS,
    payload: allQuestions,
  };
}
function getQuestionsError(error) {
  return {
    type: types.GET_QUESTIONS_ERROR,
    payload: error,
  };
}

export function getQuizQuestions() {
  return function (dispatch) {
    dispatch(getQuestions());
    axios
      .get("https://the-trivia-api.com/api/questions?limit=5")
      .then((response) => {
        const questions = response.data;
        const allQuestions = questions.map((answ) => {
          return {
            ...answ,
            allAnswers: [
              { answerText: answ.correctAnswer, isCorrect: true },
              ...answ.incorrectAnswers.map((wrongAnsw) => {
                return { answerText: wrongAnsw, isCorrect: false };
              }),
            ],
          };
        });
        dispatch(getQuestionsSuccess(allQuestions));
      })
      .catch((error) => {
        dispatch(getQuestionsError(error));
      });
  };
}

export function addQuestionToNewQuiz(question) {
  return {
    type: types.FETCH_QUIZ_QUESTIONS_SUCCESS,
    payload: question,
  };
}
export function addQuestionToExistingQuiz(question) {
  return {
    type: types.FETCH_EXISTING_QUESTIONS_SUCCESS,
    payload: question,
  };
}
export function removeQuestionFromQuiz(deleteQuestion) {
  return {
    type: types.DELETE_QUESTIONS_SUCCESS,
    payload: deleteQuestion,
  };
}
