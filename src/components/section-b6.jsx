import React, { useState } from "react";
import { PropTypes } from "prop-types";

import { Stack } from "@mui/material";

import { OptionForm } from "./section-b3";

export default function SecitonB6() {
  const [b61, set_b61] = useState("");
  const [b62, set_b62] = useState("");
  const [b63, set_b63] = useState("");
  const [b64, set_b64] = useState("");
  const [b65, set_b65] = useState("");
  const [b66, set_b66] = useState("");
  const [b67, set_b67] = useState("");

  return (
    <>
      <Stack direction={"column"} spacing={2}>
        <OptionForm
          question={b61}
          set_question={set_b61}
          label="Has the school developed it’s own school-level strategies/ standard operating procedures (SOP) for reducing energy consumption?"
          options={["Yes", "No"]}
        />

        <OptionForm
          question={b62}
          set_question={set_b62}
          label="Has your school taken significant steps to maximize the usage of natural lighting throughout the building?"
          options={["Yes", "No"]}
        />

        <OptionForm
          question={b63}
          set_question={set_b63}
          label="Does your school generate/use energy from any of the renewable sources, such as"
          options={[
            "Solar energy (through solar panels)",
            "Wind energy",
            "Biogas",
            "Other",
          ]}
        />

        <OptionForm
          question={b64}
          set_question={set_b64}
          label="Is there usage of LPG gas or other cleaner fuel sources for MDM ? "
          options={["Yes", "No"]}
        />

        <OptionForm
          question={b65}
          set_question={set_b65}
          label="Whether school use energy-efficient cookware, such as stove pressure cookers and/ or solar cookers? "
          options={["Yes", "No"]}
        />

        <OptionForm
          question={b66}
          set_question={set_b66}
          label="Has your school taken remarkable steps to limit carbon footprints, through key initiatives such as using non-motorized transport systems (walking, cycling, etc.), using public transportation systems or using fuel-efficient vehicles?"
          options={["Yes", "No"]}
        />

        <OptionForm
          question={b67}
          set_question={set_b67}
          label="Has your school undertaken any assessment of electricity consumption in school?"
          options={["Yes", "No"]}
        />
      </Stack>
    </>
  );
}
