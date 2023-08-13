import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./pages/root-layout";
import HomePage from "./pages/home-page";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<HomePage />} />
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
