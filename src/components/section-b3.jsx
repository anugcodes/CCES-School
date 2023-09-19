import React, { useState } from "react";

import OptionForm from "./option-form";
import Stack from "@mui/material/Stack";

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
          question={b311}
          set_question={set_b311}
          label="Who supervises the cleaning and maintenance of the toilets in the school? "
          options={[
            "No one in particular",
            "Teachers/ staff",
            "Child cabinet/ responsibility of particular class/section as per roster",
            "Team of teachers, staff and child cabinet members",
          ]}
        />

        <OptionForm
          question={b312}
          set_question={set_b312}
          label="Does the school do timely upkeeping/maintenance of fitting and fixtures of toilets?"
          options={["yes", "No"]}
        />

        <OptionForm
          question={b313}
          set_question={set_b313}
          label="Are any toilets in the school prone to the impact of climate/natural hazards (as floods/ drought/seasonal water scarcity etc)?"
          options={["yes", "No"]}
        />

        <OptionForm
          question={b314}
          set_question={set_b314}
          label="Has the school taken appropriate measures to ensure disaster-resilient toilets in view of the local hazard/disaster vulnerability context (e.g., elevated infrastructures in flood-prone areas)?"
          options={["yes", "No"]}
        />
        <OptionForm
          question={b315}
          set_question={set_b315}
          label="Does the school (with onsite sanitation facility) ensure that the toilet pits are at a safe distance from main water source?"
          options={["yes", "No"]}
        />

        <OptionForm
          question={b316}
          set_question={set_b316}
          label=" Does the school have separate dustbins with lid and with specific colours for disposal of menstrual waste?"
          options={["yes", "No"]}
        />

        <OptionForm
          question={b317}
          set_question={set_b317}
          label="Which of the following option is used by the school for safe treatment/ disposal of sanitary waste? "
          options={[
            "No specific measures",
            "Disposed in a manual incinerator",
            "Deep burial pit",
            "Disposed in an electric Incinerator",
          ]}
        />

        <OptionForm
          question={b318}
          set_question={set_b318}
          label="What is the main mechanism for disposal of toilet waste / faecal sludge? "
          options={[
            "No specific measure / sludge released in open",
            "Open drain or septic tanks without cover or broken cover",
            "Leach pits with sturdy and solid cover (prevents contact with flies/accidental overspill)",
            "Septic tank/bio-toilets/ sewer line with sturdy and solid cover ",
          ]}
        />

        <OptionForm
          question={b319}
          set_question={set_b319}
          label="In case option a. or b, in the last question (number 3.18), has the school planned for specific for open drain, broken cover."
          options={["yes", "No"]}
        />

        <OptionForm
          question={b320}
          set_question={set_b320}
          label="Does the school have scheduled desludging of the faecal matter (preferably before monsoon), in coordination with nearby service provider?"
          options={["yes", "No"]}
        />

        <OptionForm
          question={b321}
          set_question={set_b321}
          label="Has the school cleared/demolished/disposed of the old dilapidated non-usable toilet blocks with appropriate permission from officials?"
          options={["yes", "No"]}
        />
      </Stack>
    </div>
  );
}
