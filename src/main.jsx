import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import {
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
} from "@mui/material/styles";
// responsive themes
let theme = createTheme();
theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
