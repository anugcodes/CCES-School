import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserAuth } from "../../contexts/authContext";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function AdminDashboard() {
    const { logOut } = UserAuth();
    const navigate = useNavigate();
    const location = useLocation();
  return (
    <Box>
      <Container maxWidth="xl">
        <h1>Admin Dashboard</h1>
        <button onClick={() => logOut()}>Logout</button>
      </Container>
    </Box>
  );
}
