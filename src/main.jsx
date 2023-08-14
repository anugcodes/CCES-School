import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { register } from "swiper/element/bundle";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

// register Swiper custom elements
register();
// AOS init

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <App />
      </LocalizationProvider>
  </React.StrictMode>
);
