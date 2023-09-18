import React, { useState } from "react";
import { PropTypes } from "prop-types";

import { FormControl, FormLabel, Stack, Select, MenuItem } from "@mui/material";

export default function SectionB3() {
  const [b31, set_b31] = useState("");
  const [b32, set_b32] = useState("");
  const [b33, set_b33] = useState("");
  const [b34, set_b34] = useState("");
  const [b35, set_b35] = useState("");
  const [b36, set_b36] = useState("");
  const [b37, set_b37] = useState("");
  const [b38, set_b38] = useState("");
  const [b39, set_b39] = useState("");
  const [b310, set_b310] = useState("");
  const [b311, set_b311] = useState("");
  const [b312, set_b312] = useState("");
  const [b313, set_b313] = useState("");
  const [b314, set_b314] = useState("");
  const [b315, set_b315] = useState("");
  const [b316, set_b316] = useState("");
  const [b317, set_b317] = useState("");
  const [b318, set_b318] = useState("");
  const [b319, set_b319] = useState("");
  const [b320, set_b320] = useState("");
  const [b321, set_b321] = useState("");

  return (
    <div>
      <Stack direciton="column" spacing={2} sx={{ padding: "1rem" }}>
        <OptionForm
          question={b31}
          set_question={set_b31}
          label="What is the most common type of toilet used by the students at the school?"
          options={[
            "Unimproved Latrine : Pit latrine without slab, Hanging latrine (toilet seat/ squatting plate over drain or a water body), Bucket latrine",
            "Improved Latrine : Flush / Pour flush toilets, Pit latrines with slab (at least 50 mm water seal must be in pan of latrine), Composting toilets",
          ]}
        />

        <OptionForm
          question={b32}
          set_question={set_b32}
          label="Does the school have separate toilets for boys’ and girls’ in working condition? "
          options={[
            "There are no toilet units for either boys and girls",
            "If co-education, the same toilet unit is used by boys and girls  ",
            "The all boys or all-girls school has toilet units ",
            "If co-education, there is at least one toilet unit each for boys and girls  ",
          ]}
        />

        <OptionForm
          question={b35}
          set_question={set_b35}
          label="Does the school have toilets accessible to the Children with Special Needs (CWSN) (an accessible toilet for CWSN, is one that if there is a functional toilet with ramp, handrail, and wide door for wheelchair entry inside toilet)?"
          options={[
            "Toilets are not accessible to CWSN ",
            "There is at least one separate toilet for CWSN with ramp and handrail",
            "The school has at least one separate toilet for CWSN with ramp, handrail, and wide door for wheelchair entry and support structure inside toilet. ",
          ]}
        />

        <OptionForm
          question={b37}
          set_question={set_b37}
          label="Do all the toilets in the school have secure door with latch and cloth hanging hooks? "
          options={[
            "No",
            "Secured door with latch/bolt only",
            "Secured Door with latch/bolt and cloth hanging hooks",
          ]}
        />

        <OptionForm
          question={b39}
          set_question={set_b39}
          label="What is the frequency of cleaning toilets?"
          options={[
            "No specific schedule",
            "Once a week",
            "Twice in a week",
            "Daily",
          ]}
        />

        <OptionForm
          question={b310}
          set_question={set_b310}
          label="Are toilets cleaned with appropriate cleaning material?"
          options={[
            "Cleaned only with water",
            "Cleaned at least once in a month with soaping agent and disinfectant",
            "Cleaned at least twice in a week with soaping agent and disinfectant",
            "Cleaned daily with soaping agent and disinfectant",
          ]}
        />

        <OptionForm
          question={b33}
          set_question={set_b33}
          label="hello"
          options={["yes", "No"]}
        />

        <OptionForm
          question={b33}
          set_question={set_b33}
          label="hello"
          options={["yes", "No"]}
        />
      </Stack>
    </div>
  );
}

const OptionForm = ({ question, set_question, label, options }) => {
  return (
    <FormControl sx={{ m: 1 }} required>
      <FormLabel id="demo-customized-select-label">{label}</FormLabel>
      <Select
        variant="outlined"
        size="small"
        value={question}
        onChange={(e) => set_question(e.target.value)}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.trim().toLowerCase()}>
            {option
            //   .split(" ")
            //   .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
            //   .join(" ")}
            }
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
OptionForm.propTypes = {
  question: PropTypes.string,
  set_question: PropTypes.func,
  label: PropTypes.string,
  options: PropTypes.array,
};
