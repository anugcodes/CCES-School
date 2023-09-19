import { PropTypes } from "prop-types";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

const RadioField = ({ question, set_question, label, options }) => {
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={question}
        onChange={(e) => set_question(e.target.value)}
        variant="outlined"
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value="female"
            control={<Radio />}
            label="Female"
          />
        ))}
      </RadioGroup>
      {/* {question === options[options.length - 1] ? <Text} */}
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
