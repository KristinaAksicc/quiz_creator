import * as types from "../actions/types";

const initialState = {
  allQuestions: [],
  quiz: [],
  newQuiz: [],
  error: null,
};

export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_QUESTIONS:
      return {
        ...state,
      };
    case types.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        allQuestions: action.payload,
      };
    case types.GET_QUESTIONS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case types.DELETE_QUESTIONS_SUCCESS:
      return {
        ...state,
        newQuiz: action.payload,
      };
    case types.FETCH_EXISTING_QUESTIONS_SUCCESS:
      return {
        ...state,
        quiz: [...state.quiz, action.payload],
      };
    case types.FETCH_QUIZ_QUESTIONS_SUCCESS:
      return {
        ...state,

        newQuiz: [...state.newQuiz, action.payload],
      };

    default:
      return state;
  }
};
