import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
  Outlet,
} from "react-router-dom";

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
            <Route path="/survey/" element={<SurveyLayout />}>
              <Route path="cces" element={<SurveyForm form_tab={0} />} />
              <Route path="sap" element={<SurveyForm form_tab={1} />} />
              <Route path="*" element={<h1>Not Found</h1>} />
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
      navigate({ pathname: "/survey/cces", hash: "SectionA", replace: true });
    }
  }, [location, navigate]);
  return <Outlet />;
};
