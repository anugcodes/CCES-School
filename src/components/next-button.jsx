import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const NextButton = (props) => {
  const { onClick ,...others} = props;
  return (
    <Box sx={{ display: "flex", justifyContent: "start", padding: "2rem 0" }}>
      <Button
        variant="contained"
        sx={{ padding: ".75rem 3.5rem" }}
        onClick={onClick}
        {...others}
      >
        Next
      </Button>
    </Box>
  );
};
export default NextButton;
NextButton.propTypes = {
  onClick: PropTypes.func,
  others: PropTypes.any,
};
