import React, { useState } from "react";
import { PropTypes } from "prop-types";

import {
  FormControl,
  FormLabel,
  Stack,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

import { OptionForm } from "./section-b3";

export default function SectionB5() {
  const [b51, set_b51] = useState("");
  const [b52, set_b52] = useState("");
  const [b53, set_b53] = useState("");
  const [b54, set_b54] = useState("");
  const [b55, set_b55] = useState("");
  const [b56, set_b56] = useState("");
  const [b57, set_b57] = useState("");
  const [b58, set_b58] = useState("");
  const [b59, set_b59] = useState("");
  const [b510, set_b510] = useState("");
  const [b511, set_b511] = useState("");
  const [b512, set_b512] = useState("");

  return (
    <div>
      <Stack direction={"column"} spacing={2}>
        <OptionForm
          question={b51}
          set_question={set_b51}
          label="Has your school adopted the 5R’s (refuse, reduce, reuse, repurpose, and then recycle) of waste management Standard Operating Procedures (SOP)?"
          options={["yes", "No"]}
        />

        <OptionForm
          question={b52}
          set_question={set_b52}
          label="Does the school provide dustbins in each classroom, kitchen area, toilet, and other appropriate locations for the collection of waste? (Multiple responses may be there)"
          options={[
            "No",
            "Yes, in each classroom.",
            "Yes, in the kitchen.",
            "Toilet locations",
            "Other appropriate areas in the school ",
          ]}
        />

        <OptionForm
          question={b53}
          set_question={set_b53}
          label="Does the school segregate wet waste (bio-degradable waste) and dry waste (non-biodegradable waste)? "
          options={["yes", "No"]}
        />
        <OptionForm
          question={b54}
          set_question={set_b54}
          label="How does the school compost its own biodegradable waste (wet waste)? "
          options={[
            "No specific measure ",
            "Yes, waste is taken away for composting by someone.",
            "Yes, on school premises ",
          ]}
        />
        <OptionForm
          question={b55}
          set_question={set_b55}
          label="If in previous question, school is not composting biodegradable waste in the school premises, what are the reasons for not doing so (wherever applicable)?"
          options={[
            " Lack of space",
            "Lack of know how",
            " Other reasons (please specify)",
          ]}
        />
        <OptionForm
          question={b56}
          set_question={set_b56}
          label="How does the school dispose of its non-biodegradable waste (dry waste)? "
          options={[
            "No specific measure / throw anywhere/ dumped at a place aside in campus/ nearby/ Burnt on school premises",
            "Buried on school premises",
            "Collection by municipality/Panchayat",
          ]}
        />
        <OptionForm
          question={b57}
          set_question={set_b57}
          label="If in previous question, the school does not have any mechanism for safe disposal of non-biodegradable waste disposal, what are the reasons "
          options={[
            "Lack of space",
            "Lack of knowhow",
            " Other reasons (please specify)",
          ]}
        />
        <OptionForm
          question={b58}
          set_question={set_b58}
          label="Is the school premises clean (free from littering)? "
          options={["yes", "No"]}
        />
        <OptionForm
          question={b59}
          set_question={set_b59}
          label="Are the waste pits in your school secured from climate events such as floods (above the  the flood level/ have some kind of flood proofing arrangement) ? "
          options={["yes", "No"]}
        />
        <OptionForm
          question={b510}
          set_question={set_b510}
          label="Has the school taken any innovative measures for the reuse of waste material (such as using plastic bottles and toffee wrappers for making bricks for fencing of vegetation/plants)"
          options={["yes", "No"]}
        />
        <OptionForm
          question={b511}
          set_question={set_b511}
          label="Has school engaged children in understanding the waste management priority through activities such as waste audit, waste trails, waste journey, etc? "
          options={["yes", "No"]}
        />
        <OptionForm
          question={b512}
          set_question={set_b512}
          label="Has school taken any measures to reduce, minimize or ban the use of single-use plastic?"
          options={["yes", "No"]}
        />
      </Stack>
    </div>
  );
}

const RadioField = ({ question, set_question, label, options }) => {
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={question}
        onChange={(e) => set_question(e.target.value)}
        variant="outlined"
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value="female"
            control={<Radio />}
            label="Female"
          />
        ))}
      </RadioGroup>
      {/* {question === options[options.length - 1] ? <Text} */}
    </FormControl>
  );
};

RadioField.propTypes = {
  question: PropTypes.string,
  set_question: PropTypes.func,
  label: PropTypes.string,
  options: PropTypes.array,
};
