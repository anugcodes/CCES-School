import React, { useState, useContext } from "react";

import Stack from "@mui/material/Stack";
import OptionForm from "../option-form";
import NextButton from "../next-button";
import { ccesformStatus } from "../../contexts/formContexts";

export default function SectionB6() {
  const { formStatus_cces, set_formStatus_cces, setExpanded_cces, formData } =
    useContext(ccesformStatus);

  const [b61, set_b61] = useState("");
  const [b62, set_b62] = useState("");
  const [b63, set_b63] = useState("");
  const [b64, set_b64] = useState("");

  const handleNext = (e) => {
    console.log(e);
    e.preventDefault();
    console.log("next clicked");
    if (
      checkfield(b61) &&
      checkfield(b62) &&
      checkfield(b63) &&
      checkfield(b64)
    ) {
      const section_data = {
        b61: b61,
        b62: b62,
        b63: b63,
        b64: b64,
      };
      console.log("section b6:", formData);
      formData.current.cces.sectionB6 = section_data;
      set_formStatus_cces({ ...formStatus_cces, sectionB6: true });
      setExpanded_cces("sectionB7");
    }
  };

  const checkfield = (field) => {
    if (field && field !== "") {
      return true;
    } else return false;
  };

  return (
    <>
      <form onSubmit={(e) => handleNext(e)}>
        <Stack direction={"column"} spacing={2}>
          <OptionForm
            question={b61}
            set_question={set_b61}
            label="Has your school taken significant steps to maximize the usage of natural lighting throughout the building?"
            options={["Yes", "No"]}
          />

          <OptionForm
            question={b62}
            set_question={set_b62}
            label="Does your school generate/use energy from any of the renewable sources, such as"
            options={[
              "Solar energy (through solar panels)",
              "Wind energy",
              "Biogas",
              "Other",
            ]}
          />

          <OptionForm
            question={b63}
            set_question={set_b63}
            label="Is there usage of LPG gas or other cleaner fuel sources for MDM ? "
            options={["Yes", "No"]}
          />

          <OptionForm
            question={b64}
            set_question={set_b64}
            label="Whether school use energy-efficient cookware, such as stove pressure cookers and/ or solar cookers? "
            options={["Yes", "No"]}
          />

          <NextButton type="submit" />
        </Stack>
      </form>
    </>
  );
}
