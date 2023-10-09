import { PropTypes } from "prop-types";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";

const RadioField = ({ question, set_question, label, options }) => {
  const [value, setValue] = useState({
    selected: "",
    inputted: "",
  });

  const handleChange = (event) => {
    setValue({ ...value, selected: event.target.value });
    if (event.target.value === "other") {
      set_question(value.inputted);
    } else {
      set_question(event.target.value);
    }
    // console.log(question, value);
  };
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value.selected}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={String(option).toLowerCase()}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
      {value.selected === "other" && (
        <TextField
          value={value.inputted}
          onChange={(e) => setValue({ ...value, inputted: e.target.value })}
          placeholder="specify board"
          size="small"
        />
      )}
    </FormControl>
  );
};

RadioField.propTypes = {
  question: PropTypes.string,
  set_question: PropTypes.func,
  label: PropTypes.string,
  options: PropTypes.array,
};

export default RadioField;
