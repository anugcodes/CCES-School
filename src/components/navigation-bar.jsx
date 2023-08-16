import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "../css/navigation-bar.css";
import BrandImage from "../assets/Intruders.png";

export default function Navbar() {
  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        zIndex: "2",
        background: "rgb(255,255,255,0.7)",
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <Stack
            direction={"row"}
            spacing={3}
            alignItems={"center"}
            width={"100%"}
            justifyContent={"space-between"}
          >
            <img
              src={BrandImage}
              alt=""
              style={{
                width: "100px",
                maxWidth: "120px",
              }}
            />
            <Box
              className="links-container"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                minHeight: "4rem",
                height: "100%",
              }}
            >
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
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}