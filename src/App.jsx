import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/homepage";
import SurveyForm from "./pages/survey";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<SurveyForm />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
