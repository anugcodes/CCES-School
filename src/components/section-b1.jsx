import React, { useState } from "react";
import { PropTypes } from "prop-types";

import { FormControl, FormLabel, Stack, Select, MenuItem } from "@mui/material";

export default function SectionB1() {
  const [b11, set_b11] = useState("");
  const [b12, set_b12] = useState("");
  const [b13, set_b13] = useState("");
  const [b14, set_b14] = useState("");
  const [b15, set_b15] = useState("");
  const [b16, set_b16] = useState("");
  const [b17, set_b17] = useState("");
  const [b18, set_b18] = useState("");
  const [b19, set_b19] = useState("");
  const [b110, set_b110] = useState("");
  const [b111, set_b111] = useState("");
  const [b112, set_b112] = useState("");
  const [b113, set_b113] = useState("");
  const [b114, set_b114] = useState("");

  return (
    <div>
      <Stack direciton="column" spacing={2} sx={{padding: "1rem"}}>
        <BooleanField
          question={b11}
          set_question={set_b11}
          label=" Whether the school has a school safety or equivalent committee?"
        />
        <BooleanField
          question={b12}
          set_question={set_b12}
          label="Is there a clear list of committee members available with the school?"
        />

        <BooleanField
          question={b13}
          set_question={set_b13}
          label="Are any of the school cabinet members part of the School safety committee?"
        />

        <BooleanField
          question={b14}
          set_question={set_b14}
          label="Whether school has developed School Safety Plan (SSP) or equivalent?"
        />

        <BooleanField
          question={b15}
          set_question={set_b15}
          label="Whether the schools’ School safety Plan have components of WASH ? "
        />

        <BooleanField
          question={b16}
          set_question={set_b16}
          label=" If school ha"
        />
        <BooleanField
          question={b17}
          set_question={set_b17}
          label="were children actively involved in identifying  hazards in the school? "
        />
        <BooleanField
          question={b18}
          set_question={set_b18}
          label="Is your school vulnerable to any natural disasters ? "
        />
        <BooleanField
          question={b19}
          set_question={set_b19}
          label="what are the likely climate-related events/ natural hazards/ other risks, and their intensity  (State/ district may like to further add  rows and points to the lists, with few lines left to be filled by the school concerned)"
        />
        <BooleanField
          question={b110}
          set_question={set_b110}
          label="Has school done identified the impact of the above disasters on the WASH infrastructure in schools ? "
        />
        <BooleanField
          question={b111}
          set_question={set_b111}
          label="Is the school located near any potential risk zone ?"
        />
        <BooleanField
          question={b112}
          set_question={set_b112}
          label="Does your school have a practice of conducting mock drills for disaster response?"
        />
        <BooleanField
          question={b113}
          set_question={set_b113}
          label="Is the swachhta action plan effective during  cyclone, heatwave, cold wave, floods, etc.?"
        />
        <BooleanField
          question={b114}
          set_question={set_b114}
          label="Whether the WASH facilities in Schools are able to be effective during  drought, floods, cyclones, forest fire, landslide, etc."
        />
      </Stack>
    </div>
  );
}

const BooleanField = ({ question, set_question, label }) => {
  return (
    <FormControl sx={{ m: 1 }}>
      <FormLabel id="demo-customized-select-label">{label}</FormLabel>
      <Select
        variant="outlined"
        size="small"
        value={question}
        onChange={(e) => set_question(e.target.value)}
      >
        <MenuItem value={"yes"}>Yes</MenuItem>
        <MenuItem value={"no"}>No</MenuItem>
      </Select>
    </FormControl>
  );
};
BooleanField.propTypes = {
  question: PropTypes.string,
  set_question: PropTypes.func,
  label: PropTypes.string,
};
