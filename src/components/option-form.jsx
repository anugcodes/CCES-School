import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";

const OptionForm = ({ question, set_question, label, options }) => {
  return (
    <FormControl sx={{ m: 1 }} required>
      <FormLabel id="demo-customized-select-label">{label}</FormLabel>
      <Select
        variant="outlined"
        size="small"
        value={question}
        onChange={(e) => set_question(e.target.value)}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.trim().toLowerCase()}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
OptionForm.propTypes = {
  question: PropTypes.string,
  set_question: PropTypes.func,
  label: PropTypes.string,
  options: PropTypes.array,
};

export default OptionForm;
