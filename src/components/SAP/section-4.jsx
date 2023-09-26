import PropTypes from "prop-types";
import React, { useState } from "react";
import { Stack } from "@mui/material";
import TextFieldComponent from "../text-field";

const Section3 = () => {
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
      <TextFieldComponent
        question={a11}
        set_question={set_a11}
        label="School has facility for handwashing after use of toilet - Wash basin for hand washing either inside or attached to every toilet unit "
      />
      <TextFieldComponent
        question={a12}
        set_question={set_a12}
        label=" School provide soaps for hand washing after use of toilets - Soaps are available at all the hand washing points all the time"
      />
      <TextFieldComponent
        question={a13}
        set_question={set_a13}
        label="School has facility for handwashing before Mid-Day Meal (MDM) / lunch where a group of children can practice hand washing at the same time - Yes, with water from taps"
      />
      <TextFieldComponent
        question={a14}
        set_question={set_a14}
        label="School provide soaps for handwashing before Mid-Day Meal (MDM) / lunch - Soaps are available at all the handwashing points at all the times"
      />
      <TextFieldComponent
        question={a15}
        set_question={set_a15}
        label="All children wash their hands with soap before mid-day meal (MDM)/ Lunch - All children wash their hands with soap  "
      />
      <TextFieldComponent
        question={a16}
        set_question={set_a16}
        label="Is the height of handwashing facilities suitable for children of all age groups in the school "
      />
      <TextFieldComponent
        question={a17}
        set_question={set_a17}
        label="Does the school have a proper mechanism for wastewater disposal near all the hand washing unit?"
      />
      <TextFieldComponent
        question={a18}
        set_question={set_a18}
        label="Does the school have developed some kind of recording system of daily handwashing with soap before the mid-day meal?"
      />
    </Stack>
  );
};


export default Section3;
