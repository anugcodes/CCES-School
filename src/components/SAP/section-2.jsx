import PropTypes from "prop-types";
import React, { useState } from "react";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { Box, Stack } from "@mui/material";
import OptionForm from "../option-form";
import TextFieldComponent from "../text-field";

const Section2 = () => {
  const [a11, set_a11] = useState("");
  const [a12, set_a12] = useState("");
  const [a13, set_a13] = useState("");
  const [a14, set_a14] = useState("");
  const [a15, set_a15] = useState("");
  const [a16, set_a16] = useState("");
  const [a17, set_a17] = useState("");
  const [a18, set_a18] = useState("");
  const [a19, set_a19] = useState("");
  const [a110, set_a110] = useState("");
  const [a111, set_a111] = useState("");
  const [a112, set_a112] = useState("");
  const [a113, set_a113] = useState("");
  const [a114, set_a114] = useState("");
  const [a115, set_a115] = useState("");
  const [a116, set_a116] = useState("");
  const [a117, set_a117] = useState("");
  const [a118, set_a118] = useState("");
  const [a119, set_a119] = useState("");
  const [a120, set_a120] = useState("");

  return (
    <Stack direction={"column"} spacing={2}>
      <TextFieldComponent 
        question={a11}
        set_question={set_a11}
        label="Main source of drinking water in the school - Treated running water with water storage tank within the school premises"
      />
      <TextFieldComponent 
        question={a12}
        set_question={set_a12}
        label="Quantity of water available in the school for drinking - (at least 1.5 litter per child per day in non-residential & 5 litter per child per day in residential schools), a buffer of 2 days "
      />
      <TextFieldComponent 
        question={a13}
        set_question={set_a13}
        label="Drinking water stored in the school - Container/pitcher with lid and ladle, Container with taps"
      />
      <TextFieldComponent 
        question={a14}
        set_question={set_a14}
        label="Drinking water treated regularly in school. (Boiling, Adding chlorine/ Bleaching powder (Chlorination), Filtration, Solar disinfection, Advanced treatment unit (RO, UV, micro-filtration, etc.)"
      />
      <TextFieldComponent 
        question={a15}
        set_question={set_a15}
        label="Quality of drinking water tested - Tested twice in a year "
      />
      <TextFieldComponent 
        question={a16}
        set_question={set_a16}
        label="Number of functional drinking water point in the schools (1 per 20 students)"
      />
      <TextFieldComponent 
        question={a17}
        set_question={set_a17}
        label="Main source of water for use in toilets - Continuous water supply through taps inside each toilet unit "
      />
      <TextFieldComponent 
        question={a18}
        set_question={set_a18}
        label="Main source of water for hand-washing after using toilets - Running water with taps at all the hand washing points "
      />
      <TextFieldComponent 
        question={a19}
        set_question={set_a19}
        label="Main source of water for hand washing before Mid-Day Meal (MDM) / lunch by students and cooks - Running water with taps at all the hand washing points "
      />
      <TextFieldComponent 
        question={a110}
        set_question={set_a110}
        label="Functional rain water harvesting facility in the school"
      />
      <TextFieldComponent 
        question={a111}
        set_question={set_a111}
        label="If school has a storage structure/ tank for the RWH? What is the capacity in litres?  "
      />
      <TextFieldComponent 
        question={a112}
        set_question={set_a112}
        label=" Whether the school use rainwater for drinking water and other purposes (wherever applicable)?"
      />
      <TextFieldComponent 
        question={a113}
        set_question={set_a113}
        label="How frequently school does thorough sanitary inspections of the water source (including water points) in the school?"
      />
      <TextFieldComponent 
        question={a114}
        set_question={set_a114}
        label="Does the school have adopted any of the following water use reduction strategies?"
      />
      <TextFieldComponent 
        question={a115}
        set_question={set_a115}
        label="Does the school have a robust mechanism of frequent monitoring and instant repair leakage and wastage of water?"
      />
      <TextFieldComponent 
        question={a116}
        set_question={set_a116}
        label="Is the school (including campus, building, classrooms, etc.) located above the flood levels?"
      />
      <TextFieldComponent 
        question={a117}
        set_question={set_a117}
        label="Are the school premises free of water logging? "
      />
      <TextFieldComponent 
        question={a118}
        set_question={set_a118}
        label="Which among the following greywater (e.g. wastewater near a water source, from the kitchen, utensil washing, etc. ) management system/infrastructure (including treatment) is/ are adopted in the school? "
      />
      <TextFieldComponent 
        question={a119}
        set_question={set_a119}
        label="Has the school done a water budgeting exercise with the students of the appropriate age, last year?"
      />
      <TextFieldComponent 
        question={a120}
        set_question={set_a120}
        label="Has the school conducted local awareness drives on water conservation and management drive in the community/ locality?"
      />
    </Stack>
  );
};

export default Section2;
