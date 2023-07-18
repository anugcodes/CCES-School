import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Category from "./pages/Category";
import BarNav from "./components/landing/BarNav";
import FooterHero from "./components/landing/FooterHero";
import Product from "./pages/product";

function App() {
  return (
    <>
      <BrowserRouter>
      <BarNav />
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <FooterHero />
      </BrowserRouter>
    </>
  );
}

export default App;
