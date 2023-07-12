import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<div>hello world</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
