import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { register } from 'swiper/element/bundle';
import AOS from 'aos';
import 'aos/dist/aos.css';

// register Swiper custom elements
register();
// AOS init 
AOS.init()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>
);
