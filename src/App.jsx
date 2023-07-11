import React from "react"
import ProductsPage from "./pages/ProductListing/productListing";
import Home from "./pages/Home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./pages/Profile/profile";
import CategoryPage from "./pages/Category/category";
import Product from "./components/IndividualProduct/product"

function App() {
  return (
    <>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/product" element={<Product />} />
          </Routes>
    </>
  );
}

export default App;
