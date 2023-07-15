import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import { register } from "swiper/element/bundle";
import AOS from "aos";
import "aos/dist/aos.css";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

// register Swiper custom elements
register();
// AOS init
AOS.init();
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import { register } from 'swiper/element/bundle';
import AOS from 'aos';
import 'aos/dist/aos.css';

// register Swiper custom elements
register();
// AOS init 
AOS.init()

>>>>>>> ankit-dev

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
<<<<<<< HEAD
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <App />
      </LocalizationProvider>
=======
      <App />
>>>>>>> ankit-dev
    </NextUIProvider>
  </React.StrictMode>
);
