import React, { useState, useContext } from "react";

import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";

// components
import OptionForm from "../option-form";
import NextButton from "../next-button";

// context api
import { ccesformStatus } from "../../contexts/formContexts";

export default function SectionB3() {
  const { formStatus_cces, set_formStatus_cces, setExpanded_cces, formData } =
    useContext(ccesformStatus);

  const [b31, set_b31] = useState("");
  const [b32, set_b32] = useState({
    boys: "",
    girls: "",
  });
  const [b33, set_b33] = useState({
    boys: "",
    girls: "",
  });
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

  const handleNext = (e) => {
    e.preventDefault();
    const section_data = {
      b31: b31,
      b32: b32,
      b33: b33,
      b34: b34,
      b35: b35,
      b36: b36,
      b37: b37,
      b38: b38,
      b39: b39,
      b310: b310,
      b311: b311,
      b312: b312,
      b313: b313,
      b314: b314,
    };
    formData.current.cces.sectionB3 = section_data;
    set_formStatus_cces({ ...formStatus_cces, sectionB3: true });
    setExpanded_cces("sectionB4");
  };

  return (
    <form onSubmit={(e) => handleNext(e)}>
      <Stack direciton="column" spacing={2}>
        <OptionForm
          question={b31}
          set_question={set_b31}
          label="Does the school have separate toilets for boys and girls in working condition? "
          options={[
            "There are no toilet units for either boys and girls",
            "If co-education, the same toilet unit is used by boys and girls  ",
            "The all boys or all-girls school has toilet units ",
            "If co-education, there is at least one toilet unit each for boys and girls  ",
          ]}
        />

        <FormControl fullWidth required>
          <FormLabel id="text-field-label">
            How many toilets seats in working condition does the school have for
            boys and girls? (column may have state/ regional specific
            customization considering the likely climate event/ natural hazard)
          </FormLabel>
          <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
            <TextField
              value={b32.boys}
              placeholder="boys"
              onChange={(e) => set_b32({ ...b32, boys: e.target.value })}
              size="small"
            />
            <TextField
              value={b32.girls}
              placeholder="girls"
              onChange={(e) => set_b32({ ...b32, girls: e.target.value })}
              size="small"
            />
          </Stack>
        </FormControl>

        <FormControl fullWidth required>
          <FormLabel id="text-field-label">
            How many urinals in working condition does the school have for boys
            and girls?
          </FormLabel>
          <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
            <TextField
              value={b33.boys}
              placeholder="boys"
              onChange={(e) => set_b33({ ...b33, boys: e.target.value })}
              size="small"
            />
            <TextField
              value={b33.girls}
              placeholder="girls"
              onChange={(e) => set_b33({ ...b33, girls: e.target.value })}
              size="small"
            />
          </Stack>
        </FormControl>

        <OptionForm
          question={b34}
          set_question={set_b34}
          label="Does the school have toilets accessible to the Children with Special Needs (CWSN) (an accessible toilet for CWSN, is one that if there is a functional toilet with ramp, handrail, and wide door for wheelchair entry inside toilet)?"
          options={[
            "Toilets are not accessible to CWSN ",
            "There is at least one separate toilet for CWSN with ramp and handrail",
            "The school has at least one separate toilet for CWSN with ramp, handrail, and wide door for wheelchair entry and support structure inside toilet. ",
          ]}
        />

        <OptionForm
          question={b35}
          set_question={set_b35}
          label="Do all the toilets in the school have secure door with latch and cloth hanging hooks? "
          options={[
            "No",
            "Secured door with latch/bolt only",
            "Secured Door with latch/bolt and cloth hanging hooks",
          ]}
        />

        <OptionForm
          question={b36}
          set_question={set_b36}
          label="Does the school's toilet have adequate ventilation for natural light and air?"
          options={["yes", "No"]}
        />

        <OptionForm
          question={b37}
          set_question={set_b37}
          label="What is the frequency of cleaning toilets?"
          options={[
            "No specific schedule",
            "Once a week",
            "Twice in a week",
            "Daily",
          ]}
        />

        <OptionForm
          question={b38}
          set_question={set_b38}
          label="Are toilets cleaned with appropriate cleaning material?"
          options={[
            "Cleaned only with water",
            "Cleaned at least once in a month with soaping agent and disinfectant",
            "Cleaned at least twice in a week with soaping agent and disinfectant",
            "Cleaned daily with soaping agent and disinfectant",
          ]}
        />

        <OptionForm
          question={b39}
          set_question={set_b39}
          label="Who supervises the cleaning and maintenance of the toilets in the school? "
          options={[
            "No one in particular",
            "Teachers/ staff",
            "Child cabinet/ responsibility of particular class/section as per roster",
            "Team of teachers, staff and child cabinet members",
          ]}
        />

        <OptionForm
          question={b310}
          set_question={set_b310}
          label="Does the school do timely upkeeping/maintenance of fitting and fixtures of toilets?"
          options={["yes", "No"]}
        />

        <OptionForm
          question={b311}
          set_question={set_b311}
          label="Are any toilets in the school prone to the impact of climate/natural hazards (as floods/ drought/seasonal water scarcity etc)?"
          options={["yes", "No"]}
        />

        <OptionForm
          question={b312}
          set_question={set_b312}
          label=" Does the school have separate dustbins with lid and with specific colours for disposal of menstrual waste?"
          options={["yes", "No"]}
        />

        <OptionForm
          question={b313}
          set_question={set_b313}
          label="Which of the following option is used by the school for safe treatment/ disposal of sanitary waste? "
          options={[
            "No specific measures",
            "Disposed in a manual incinerator",
            "Deep burial pit",
            "Disposed in an electric Incinerator",
          ]}
        />

        <OptionForm
          question={b314}
          set_question={set_b314}
          label="Does the school have scheduled desludging of the faecal matter (preferably before monsoon), in coordination with nearby service provider?"
          options={["yes", "No"]}
        />

        <NextButton type="submit" />
      </Stack>
    </form>
  );
}
