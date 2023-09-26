import React, { useState } from "react";
import { Stack } from "@mui/material";
import TextFieldComponent from "../text-field";

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
        label="School provide dustbins in each class room, kitchen area, toilets and at other appropriate locations for collection of waste"
      />
      <TextFieldComponent 
        question={a12}
        set_question={set_a12}
        label="Does the school segregate wet waste (bio-degradable waste) and dry waste (non- biodegradable waste)?"
      />
      <TextFieldComponent 
        question={a13}
        set_question={set_a13}
        label=" How does the school compost its own biodegradable waste (wet waste)? (Yes in school premises)"
      />
      <TextFieldComponent 
        question={a14}
        set_question={set_a14}
        label="How does the school dispose its, non- biodegradable waste"
      />
      <TextFieldComponent 
        question={a15}
        set_question={set_a15}
        label="Is the school premises clean (free from littering)?"
      />
      <TextFieldComponent 
        question={a16}
        set_question={set_a16}
        label="School premises clean and free of water logging"
      />
    </Stack>
  );
};

export default Section2;
