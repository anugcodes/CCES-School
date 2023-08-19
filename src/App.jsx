import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./pages/root-layout";
import HomePage from "./pages/home-page";
import Aos from "aos";
import 'aos/dist/aos.css';

import { useEffect } from "react";

function App() {

  useEffect(()=> {
    Aos.init();
    Aos.refresh();
  }, []);

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
