import React, { useState } from "react";
import { Stack } from "@mui/material";
import TextFieldComponent from "../text-field";
import OptionForm from "../option-form";

const Section2 = () => {
  const [a11, set_a11] = useState("");
  const [a12, set_a12] = useState("");
  const [a13, set_a13] = useState("");

  return (
    <Stack direction={"column"} spacing={2}>
      <TextFieldComponent 
        question={a11}
        set_question={set_a11}
        label=" Does the plantation of the species selected in the school are appropriate to the soil type, climatic condition and topography?"
      />
      <TextFieldComponent 
        question={a12}
        set_question={set_a12}
        label=" Has the school planted   24 hour oxygen-generating plants/trees such as Banyan, Peepal, Tulsi, Money plant, Aloe Vera, etc.?"
      />
      <TextFieldComponent 
        question={a13}
        set_question={set_a13}
        label="Has the school taken up noteworthy steps towards reducing noise pollution, including creating silent zones within and nearby the school campus ?"
      />
    </Stack>
  );
};

export default Section2;
