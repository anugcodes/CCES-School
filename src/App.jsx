import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


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


function App() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
