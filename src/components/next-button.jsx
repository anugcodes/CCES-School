import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const NextButton = (props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "start" ,padding:"2rem 0" }}>
      <Button variant="contained" sx={{padding:".75rem 3.5rem"}}>
        Next
      </Button>
    </Box>
  );
};
export default NextButton;
