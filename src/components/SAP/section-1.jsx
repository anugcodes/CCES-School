import PropTypes from "prop-types";
import React, { useState } from "react";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { Box, Stack } from "@mui/material";
import OptionForm from "../option-form";

const Section1 = () => {
  const [a11, set_a11] = useState("");
  const [a12, set_a12] = useState("");
  const [a13, set_a13] = useState("");
  const [a14, set_a14] = useState("");
  const [a15, set_a15] = useState("");
  const [a16, set_a16] = useState("");
  const [a17, set_a17] = useState("");
  const [a18, set_a18] = useState("");

  return (
    <Stack direction={"column"} spacing={2}>
      <OptionForm
        question={a11}
        set_question={set_a11}
        options={[
            "Yes",
            "No"
        ]}
        label={" Whether the school has a school safety or equivalent committee? "}
       />
      <OptionForm
        question={a12}
        set_question={set_a12}
        options={[
            "Yes",
            "No"
        ]}
        label={" Are any of the school cabinet members part of the School safety committee?"}
       />
      <OptionForm
        question={a13}
        set_question={set_a13}
        options={[
            "Yes",
            "No"
        ]}
        label={" Whether school has developed School Safety Plan (SSP) or equivalent and WASH is included ? "}
       />
      <OptionForm
        question={a14}
        set_question={set_a14}
        options={[
            "Yes",
            "No"
        ]}
        label={"Is your school vulnerable to any natural disasters ? "}
       />
      <OptionForm
        question={a15}
        set_question={set_a15}
        options={[
            "Yes",
            "No"
        ]}
        label={" Has school done identified the impact of the above disasters on the WASH infrastructure in schools ? "}
       />
      <OptionForm
        question={a16}
        set_question={set_a16}
        options={[
            "Yes",
            "No"
        ]}
        label={"Does your school have a practice of conducting mock drills for disaster response?"}
       />
      <OptionForm
        question={a17}
        set_question={set_a17}
        options={[
            "Yes",
            "No"
        ]}
        label={"Is the Swachata action plan effective during  cyclone, heatwave, cold wave, floods, etc.?"}
       />
      <OptionForm
        question={a18}
        set_question={set_a18}
        options={[
            "Yes",
            "No"
        ]}
        label={"Whether the WASH facilities in Schools are able to be effective during  drought, floods, cyclones, forest fire, landslide, etc"}
       />
    </Stack>
  );
};

const MultipleTextField = (props) => {
  const { question, set_question, type, ...others } = props;
  return (
    <FormControl {...others}>
      <FormLabel id="demo-customized-select-label">Compliance yes/ No/Partiality</FormLabel>
      <TextField
        variant="outlined"
        size="small"
        value={question}
        onChange={(e) => set_question(e.target.value)}
        type={type}
      />
      <FormLabel id="demo-customized-select-label">Gap Identified order of priority</FormLabel>
      <TextField
        variant="outlined"
        size="small"
        value={question}
        onChange={(e) => set_question(e.target.value)}
        type={type}
      />
      <FormLabel id="demo-customized-select-label">Activity</FormLabel>
      <TextField
        variant="outlined"
        size="small"
        value={question}
        onChange={(e) => set_question(e.target.value)}
        type={type}
      />
      <FormLabel id="demo-customized-select-label">Quantity</FormLabel>
      <TextField
        variant="outlined"
        size="small"
        value={question}
        onChange={(e) => set_question(e.target.value)}
        type={type}
      />
      <FormLabel id="demo-customized-select-label">Level of Address</FormLabel>
      <TextField
        variant="outlined"
        size="small"
        value={question}
        onChange={(e) => set_question(e.target.value)}
        type={type}
      />
      <FormLabel id="demo-customized-select-label">Capital</FormLabel>
      <TextField
        variant="outlined"
        size="small"
        value={question}
        onChange={(e) => set_question(e.target.value)}
        type={type}
      />
      <FormLabel id="demo-customized-select-label">Operational</FormLabel>
      <TextField
        variant="outlined"
        size="small"
        value={question}
        onChange={(e) => set_question(e.target.value)}
        type={type}
      />
      <FormLabel id="demo-customized-select-label">Responsibility</FormLabel>
      <TextField
        variant="outlined"
        size="small"
        value={question}
        onChange={(e) => set_question(e.target.value)}
        type={type}
      />
      <FormLabel id="demo-customized-select-label">Target (date or months)</FormLabel>
      <TextField
        variant="outlined"
        size="small"
        value={question}
        onChange={(e) => set_question(e.target.value)}
        type={type}
      />
      <FormLabel id="demo-customized-select-label">Remarks (Possible Sources)</FormLabel>
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

MultipleTextField.propTypes = {
  question: PropTypes.string.isRequired,
  set_question: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Section1;
