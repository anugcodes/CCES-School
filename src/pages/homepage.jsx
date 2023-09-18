import { Button, Box, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <Container maxWidth="lg">
        Home page
        <Link to="/survey">
          <Button variant="contained">go to survey</Button>
        </Link>
      </Container>
    </div>
  );
}
