import React, { useState, useContext } from "react";
import { Stack } from "@mui/material";
import OptionForm from "../option-form";

import { sapformStatus } from "../../contexts/formContexts";

import NextButton from "../next-button";

const Section1 = () => {

  const { formStatus_sap, set_formStatus_sap, setExpanded_sap } =
    useContext(sapformStatus);

  const [a11, set_a11] = useState("");
  const [a12, set_a12] = useState("");
  const [a13, set_a13] = useState("");
  const [a14, set_a14] = useState("");
  const [a15, set_a15] = useState("");
  const [a16, set_a16] = useState("");
  const [a17, set_a17] = useState("");
  const [a18, set_a18] = useState("");

  const handleNext = (e) => {
    console.log(e);
    e.preventDefault();
    console.log("next clicked");
    if (
      checkfield(a11) &&
      checkfield(a12) &&
      checkfield(a13) &&
      checkfield(a14) &&
      checkfield(a15) &&
      checkfield(a16) &&
      checkfield(a17) 
    ) {
      set_formStatus_sap({ ...formStatus_sap, section1: true });
      setExpanded_sap("section2");
    }
  };

  const checkfield = (field) => {
    if (field && field !== "") {
      return true;
    } else return false;
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={(e) => handleNext(e)}>
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
       <NextButton type="submit" />
    </Stack>
    </form>
    </div>
  );
};

export default Section1;
