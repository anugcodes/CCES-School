import React, { useContext, useState } from "react";

import Stack from "@mui/material/Stack";
import OptionForm from "./section-b10";
import NextButton from "../next-button";
import { ccesformStatus } from "../../contexts/formContexts";

const SectionB8 = () => {
  const { formStatus_cces, set_formStatus_cces, setExpanded_cces, formData } =
    useContext(ccesformStatus);

  const [b81, set_b81] = useState("");
  const [b82, set_b82] = useState("");
  const [b83, set_b83] = useState("");
  const [b84, set_b84] = useState("");
  const [b85, set_b85] = useState("");
  const [b86, set_b86] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    if (
      checkfield(b81) &&
      checkfield(b82) &&
      checkfield(b83) &&
      checkfield(b84) &&
      checkfield(b85) &&
      checkfield(b86)
    ) {
      const section_data = {
        b81: b81,
        b82: b82,
        b83: b83,
        b84: b84,
        b85: b85,
        b86: b86,
      };
      console.log("section b8:", formData);
      formData.current.cces.sectionB8 = section_data;
      set_formStatus_cces({ ...formStatus_cces, sectionB8: true });
      setExpanded_cces("sectionB9");
    }
  };

  const checkfield = (field) => {
    if (field && field !== "") {
      return true;
    } else return false;
  };

  return (
    <div>
      <form onSubmit={(e) => handleNext(e)}>
        <Stack direction={"column"} spacing={2}>
          <OptionForm
            question={b81}
            set_question={set_b81}
            label={"Does the school have a boundary wall with secured gates ?"}
            options={["Yes", "No"]}
          />

          <OptionForm
            question={b82}
            set_question={set_b82}
            label={
              "Does the school have a system for regular monitoring (e.g., through checklists or observation) of the cleaning of WASH facilities?"
            }
            options={["Yes", "No"]}
          />

          <OptionForm
            question={b83}
            set_question={set_b83}
            label={
              "Does the school have access to adequate cleaning materials like disinfectants such as hypochlorite solutions, toilet cleaning liquids, soap, PPE etc.) ?"
            }
            options={["Yes", "No"]}
          />

          <OptionForm
            question={b84}
            set_question={set_b84}
            label={
              "Who supervises the cleaning and maintenance of the toilets in the school?"
            }
            options={[
              "No one in particular",
              "Team of teachers, staff",
              "Team of teachers, staff and child cabinet members",
            ]}
          />

          <OptionForm
            question={b85}
            set_question={set_b85}
            label={
              "Is there an arrangement for any part/full-time cleaning/sanitation worker in the school?"
            }
            options={["Yes", "No"]}
          />

          <OptionForm
            question={b86}
            set_question={set_b86}
            label={
              "Do the Gram Panchayats (GPs)/Urban Local Bodies (ULBs) take an active part in reviewing and addressing school WASH and O&M issues?"
            }
            options={["Yes", "No"]}
          />

          <NextButton type="submit" />
        </Stack>
      </form>
    </div>
  );
};
export default SectionB8;
