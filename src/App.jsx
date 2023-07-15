import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD


// home page
import Landing from "./pages/Landing";

// My Account
import MyAccountLayout from "./components/myaccount/myAccountLayout";
import MyAccountPage from "./components/myaccount/myAccount";
import UserProfile from "./components/myaccount/profile";
import UserAddress from "./components/myaccount/address";
import UserPayment from "./components/myaccount/payment";
import UserProductOrders from "./components/myaccount/orders";
import AdminLayout from "./components/admin/adminLayout";

=======
import Landing from "./pages/Landing";
import Category from "./pages/Category";
import BarNav from "./components/landing/BarNav";
import FooterHero from "./components/landing/FooterHero";
import Product from "./pages/product";
>>>>>>> ankit-dev

function App() {
  return (
    <>
      <BrowserRouter>
<<<<<<< HEAD
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/myaccount" element={<MyAccountLayout />} >
            <Route index element={<MyAccountPage />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="address" element={<UserAddress />} />
            <Route path="payments" element={<UserPayment />} />
            <Route path="orders" element={<UserProductOrders />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />} />
        </Routes>
=======
      <BarNav />
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <FooterHero />
>>>>>>> ankit-dev
      </BrowserRouter>
    </>
  );
}

export default App;
