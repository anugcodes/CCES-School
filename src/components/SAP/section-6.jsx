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
  const [a16, set_a16] = useState("");
  const [a17, set_a17] = useState("");
  const [a18, set_a18] = useState("");
  const [a19, set_a19] = useState("");
  const [a110, set_a110] = useState("");
  const [a111, set_a111] = useState("");
  const [a112, set_a112] = useState("");
  const [a113, set_a113] = useState("");

  return (
    <Stack direction={"column"} spacing={2}>
      <TextFieldComponent 
        question={a11}
        set_question={set_a11}
        label="The classrooms and teaching areas cleaned daily"
      />
      <TextFieldComponent 
        question={a12}
        set_question={set_a12}
        label="The frequency of cleaning toilets – Daily"
      />
      <TextFieldComponent 
        question={a13}
        set_question={set_a13}
        label="Toilets cleaned with appropriate cleaning material - Cleaned daily with soaping agent and disinfectant"
      />
      <TextFieldComponent 
        question={a14}
        set_question={set_a14}
        label="Who supervises the cleaning and maintenance of the toilets in the school? "
      />
      <TextFieldComponent 
        question={a15}
        set_question={set_a15}
        label="Whether school takes up the upkeep/maintenance of fitting and fixture of toilets etc on regular basis "
      />
      <TextFieldComponent 
        question={a16}
        set_question={set_a16}
        label="School Management Committee take active part in reviewing and addressing school WASH & O&M"
      />
      <OptionForm 
        question={a17}
        set_question={set_a17}
        label="Does the Gram Panchayat looks after water, sanitation facilities in schools& school receive any funds from Gram for the  operation & maintenance (O&M) of this facilities?"
        options={[
          "Yes",
          "No"
        ]}
      />
      <TextFieldComponent 
        question={a18}
        set_question={set_a18}
        label="Has school taken any measures to reduce, minimize or ban the use of single-use plastic?"
      />
      <TextFieldComponent 
        question={a19}
        set_question={set_a19}
        label="Has your school adopted the 5R’s (refuse, reduce, reuse, repurpose, and then recycle) of waste management Standard Operating Procedures (SOP)?"
      />
      <TextFieldComponent 
        question={a110}
        set_question={set_a110}
        label="Has the school taken any innovative measures for the reuse of waste material (such as using plastic bottles and toffee wrappers for making bricks for fencing of vegetation/plants)"
      />
      <TextFieldComponent 
        question={a111}
        set_question={set_a111}
        label=" Has school engaged children in understanding the waste management priority through activities such as waste audit, waste trails, waste journey, etc? "
      />
      <TextFieldComponent 
        question={a112}
        set_question={set_a112}
        label="Whether school has been able to mobilize adequate resources for the climate-resilient school interventions?"
      />
      <TextFieldComponent 
        question={a113}
        set_question={set_a113}
        label=" Does the school’ maintain adequate supplies (e.g., chlorine, portable water quality testing equipment etc.) for any emergency preparedness and response?"
      />
    </Stack>
  );
};

export default Section2;
