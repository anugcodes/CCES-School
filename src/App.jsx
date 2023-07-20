import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// home page
import HomePageLayout from "./pages/homepage";
import Landing from "./pages/Landing";

// My Account
import MyAccountLayout from "./components/myaccount/myAccountLayout";
import MyAccountPage from "./components/myaccount/myAccount";
import UserProfile from "./components/myaccount/profile";
import UserAddress from "./components/myaccount/address";
import UserPayment from "./components/myaccount/payment";
import UserProductOrders from "./components/myaccount/orders";
import AdminLayout from "./components/admin/adminLayout";
import UserCart from "./components/myaccount/myCart";

// product pages
import Category from "./pages/Category";
import Product from "./pages/product";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<HomePageLayout/>}>
              <Route index element={<Landing />} />
              <Route path="category" element={<Category />} />
              <Route path="product" element={<Product />} />
            </Route>
            <Route path="/myaccount" element={<MyAccountLayout />}>
              <Route index element={<MyAccountPage />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="address" element={<UserAddress />} />
              <Route path="payments" element={<UserPayment />} />
              <Route path="orders" element={<UserProductOrders />} />
              <Route path="cart" element={<UserCart />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
