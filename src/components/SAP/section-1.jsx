import React, { useState, useContext } from "react";
import { Stack } from "@mui/material";

import TextFieldComponent from "../text-field";

import { sapformStatus } from "../../contexts/formContexts";

import NextButton from "../next-button";

const Section1 = () => {
  const { formStatus_sap, set_formStatus_sap, setExpanded_sap, formData } =
    useContext(sapformStatus);

  const [a11, set_a11] = useState("");
  const [a12, set_a12] = useState("");
  const [a13, set_a13] = useState("");
  const [a14, set_a14] = useState("");
  const [a15, set_a15] = useState("");
  const [a16, set_a16] = useState("");
  const [a17, set_a17] = useState("");
  const [a18, set_a18] = useState("");

  const sectionB1Data = formData.current.cces.sectionB1;

  const handleNext = (e) => {
    e.preventDefault();

    if (
      checkfield(a11) &&
      checkfield(a12) &&
      checkfield(a13) &&
      checkfield(a14) &&
      checkfield(a15) &&
      checkfield(a16) &&
      checkfield(a17)
    ) {
      const section_data = {
        a11: a11,
        a12: a12,
        a13: a13,
        a14: a14,
        a15: a15,
        a16: a16,
        a17: a17,
        a18: a18,
      };

      console.log("sap - section1:", formData);
      formData.current.sap.section1 = section_data;
      set_formStatus_sap({ ...formStatus_sap, section1: true });
      setExpanded_sap("section2");
    }
  };

  const checkfield = (field) => {
    if (field || field === "") {
      return true;
    } else return false;
  };

  console.log(sectionB1Data);

  return (
    <div>
      <form onSubmit={(e) => handleNext(e)}>
        <Stack direction={"column"} spacing={2}>
          {sectionB1Data.b11 !== "no" && (
            <TextFieldComponent
              question={a11}
              set_question={set_a11}
              label="Whether the school has a school safety or equivalent committee?"
            />
          )}
          {sectionB1Data.b13 === "no" && (
            <TextFieldComponent
              question={a12}
              set_question={set_a12}
              label="Are any of the school cabinet members part of the School safety committee?"
            />
          )}
          {sectionB1Data.b14 === "no" && (
            <TextFieldComponent
              question={a13}
              set_question={set_a13}
              label={
                " Whether school has developed School Safety Plan (SSP) or equivalent and WASH is included ? "
              }
            />
          )}
          {sectionB1Data.b18 === "no" && (
            <TextFieldComponent
              question={a14}
              set_question={set_a14}
              label={"Is your school vulnerable to any natural disasters ? "}
            />
          )}
          {sectionB1Data.b110 === "no" && (
            <TextFieldComponent
              question={a15}
              set_question={set_a15}
              label={
                " Has school done identified the impact of the above disasters on the WASH infrastructure in schools ? "
              }
            />
          )}
          {sectionB1Data.b112 === "no" && (
            <TextFieldComponent
              question={a16}
              set_question={set_a16}
              label={
                "Does your school have a practice of conducting mock drills for disaster response?"
              }
            />
          )}
          <TextFieldComponent
            question={a17}
            set_question={set_a17}
            label={
              "Is the Swachata action plan effective during  cyclone, heatwave, cold wave, floods, etc.?"
            }
          />
          {sectionB1Data.b113 === "no" && (
            <TextFieldComponent
              question={a18}
              set_question={set_a18}
              label={
                "Whether the WASH facilities in Schools are able to be effective during  drought, floods, cyclones, forest fire, landslide, etc"
              }
            />
          )}
          <NextButton type="submit" />
        </Stack>
      </form>
    </div>
  );
};

export default Section1;
