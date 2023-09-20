import React from "react";
import PropTypes from "prop-types";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";

const TextFieldComponent = (props) => {
  const { question, set_question, label, type, ...others } = props;
  return (
    <FormControl sx={{ m: 1 }} {...others}>
      <FormLabel id="demo-customized-select-label">{label}</FormLabel>
      <TextField
        variant="outlined"
        size="small"
        value={question}
        onChange={(e) => set_question(e.target.value)}
        type={type}
      />
    </FormControl>
  );
};

TextFieldComponent.propTypes = {
  question: PropTypes.string.isRequired,
  set_question: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default TextFieldComponent;
