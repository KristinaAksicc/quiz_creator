import { configureStore } from "@reduxjs/toolkit";
import { questionReducer } from "./reducers/questionReducer";

export default configureStore({
  reducer: {
    app: questionReducer,
  },
});
