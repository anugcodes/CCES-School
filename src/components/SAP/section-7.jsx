import React, { useState } from "react";
import { Stack } from "@mui/material";
import TextFieldComponent from "../text-field";
import OptionForm from "../option-form";

const Section2 = () => {
  const [a11, set_a11] = useState("");
  const [a12, set_a12] = useState("");
  const [a13, set_a13] = useState("");
  const [a14, set_a14] = useState("");
  const [a15, set_a15] = useState("");

  return (
    <Stack direction={"column"} spacing={2}>
      <TextFieldComponent 
        question={a11}
        set_question={set_a11}
        label="Has the school developed it’s own school-level strategies/ standard operating procedures (SOP) for reducing energy consumption?"
      />
      <TextFieldComponent 
        question={a12}
        set_question={set_a12}
        label=" Has your school taken significant steps to maximize the usage of natural lighting throughout the building?"
      />
      <TextFieldComponent 
        question={a13}
        set_question={set_a13}
        label="Does your school generate/use energy from any of the renewable sources"
      />
      <TextFieldComponent 
        question={a14}
        set_question={set_a14}
        label=" Whether school use energy-efficient cookware, such as stove pressure cookers and/ or solar cookers?"
      />
      <TextFieldComponent 
        question={a15}
        set_question={set_a15}
        label=" Has your school undertaken any assessment of electricity consumption in school?"
      />
    </Stack>
  );
};

export default Section2;
