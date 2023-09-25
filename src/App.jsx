import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
  Outlet,
  Navigate,
} from "react-router-dom";

import { UserAuth } from "./contexts/authContext";

// pages
import Home from "./pages/homepage";
import SurveyForm from "./pages/survey";
import AdminLogin from "./pages/admin/login";
import AdminDashboard from "./pages/admin/dashboard";
import AdminLayout from "./pages/admin/admin-layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/survey/" element={<SurveyLayout />}>
              <Route path="cces" element={<SurveyForm form_tab={0} />} />
              <Route path="sap" element={<SurveyForm form_tab={1} />} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="login" element={<AdminLogin />} />
              <Route
                path="dashboard"
                element={
                  <RequireAuth>
                    <AdminDashboard />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

const SurveyLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/survey") {
      navigate({ pathname: "/survey/cces", hash: "sectionA" });
    }
  }, [location, navigate]);
  return <Outlet />;
};

function RequireAuth({ children }) {
  let { currentUser } = UserAuth();
  let location = useLocation();
  return currentUser ? (
    children
  ) : (
    <Navigate to={"/admin/login"} state={{ from: location }} />
  );
}
