import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "../css/navigation-bar.css";

export default function Navbar() {
  return (
    <div style={{
      position:"sticky",
      top:"0",
      zIndex: "2",
    }}>
      <Container maxWidth="lg">
        <Stack direction="row" spacing={2} justifyContent={"space-between"} >
          <Stack direction={"row"} spacing={3} alignItems={"center"}>
            <Typography variant="h4">Nude.</Typography>
            <div className="links-container">
              <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                <Link to="/">Home</Link>
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                <Link to="/">About Us</Link>
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                <Link to="/">Gallary</Link>
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                <Link to="/">Contact Us</Link>
              </Typography>
            </div>
          </Stack>

          <button
            style={{
              padding: ".25rem 1rem",
              border: "none",
              color: "#000",
              fontWeight: "1rem",
              cursor: "pointer",
            }}
          >
            <Stack direction="row" spacing={1} alignItems={"center"}>
              <PersonOutlineIcon sx={{ color: "#333" }} />
              <Typography variant="subtitle2">Sign In</Typography>
            </Stack>
          </button>
        </Stack>
      </Container>
    </div>
  );
}
