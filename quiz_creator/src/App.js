import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuestionsPage from "./components/QuestionsPage";
import CreateQuiz from "./components/CreateQuiz";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<QuestionsPage />}></Route>
          <Route exact path="/CreateQuiz" element={<CreateQuiz />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
