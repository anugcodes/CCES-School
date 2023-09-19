import React, { useState } from "react";

import Stack from "@mui/material/Stack";

import OptionForm from "./option-form";

export default function SecitonB4() {
  const [b41, set_b41] = useState("");
  const [b42, set_b42] = useState("");
  const [b43, set_b43] = useState("");
  const [b44, set_b44] = useState("");
  const [b45, set_b45] = useState("");
  const [b46, set_b46] = useState("");
  const [b47, set_b47] = useState("");
  const [b48, set_b48] = useState("");
  const [b49, set_b49] = useState("");

  return (
    <div>
      <Stack direction={"column"} spacing={2}>
        <OptionForm
          question={b41}
          set_question={set_b41}
          label="Does the school have a facility for hand-washing before Mid-Day Meal (MDM) / lunch where a group of children can practice hand washing at the same time?"
          options={[
            "No hand washing facility",
            "Yes, with water from hand pump/bucket",
            "Yes, with water from taps, specify",
          ]}
        />

        <OptionForm
          question={b42}
          set_question={set_b42}
          label="Does the school provide soaps/ liquid handwash for handwashing before Mid-Day Meal (MDM) / lunch?"
          options={[
            "No soaps (/ liquid handwash) available",
            "Soaps (/ liquid handwash) are placed under supervision and are available on demand",
            "soaps (/ liquid handwash) are available at all the hand washing points all the time ",
          ]}
        />

        <OptionForm
          question={b43}
          set_question={set_b43}
          label="Does the school have facility for hand-washing after the use of the toilet? "
          options={[
            "No hand washing facility (with water provision) near the toilet units",
            "Wash basin or hand washing point (with water provision) close to the toilet units",
            "Wash basin either inside or attached to every toilet unit- (with water provision- through handpump, bucket, drum etc)",
            "Wash basin either inside or attached to every toilet (with running water) unitF",
          ]}
        />

        <OptionForm
          question={b44}
          set_question={set_b44}
          label="Does the school provide soaps for hand washing/liquid soap after use of toilets?  "
          options={[
            "No soaps (/ liquid handwash) available",
            "Soaps (/ liquid handwash) are placed under supervision and are available on demand",
            "soaps (/ liquid handwash) are available at all the hand washing points all the time ",
          ]}
        />

        <OptionForm
          question={b45}
          set_question={set_b45}
          label="Is the height of hand-washing facilities suitable for children of all age groups in the school? "
          options={["Yes", "No"]}
        />

        <OptionForm
          question={b46}
          set_question={set_b46}
          label="Does the school have a proper mechanism for wastewater disposal near all the hand washing unit?"
          options={["Yes", "No"]}
        />

        <OptionForm
          question={b47}
          set_question={set_b47}
          label="Is the handwashing facility in the school secured against any potential risk or obstruction (for example electrical pole/ stand-alone structure/ tree nearby etc. that can damage in case of climate event/ natural hazard)? "
          options={["Yes", "No"]}
        />

        <OptionForm
          question={b48}
          set_question={set_b48}
          label="Who supervises the practice of daily hand-washing with soap by students and cooks before Mid-Day Meal (MDM) / lunch? "
          options={[
            "No one in particular",
            "Dedicated team of teachers/ staff members",
            "Dedicated team of teachers/staff members and child cabinet members  ",
          ]}
        />

        <OptionForm
          question={b49}
          set_question={set_b49}
          label="Do all children wash their hands with soap before mid-day meal (MDM)/ Lunch? "
          options={["Yes", "No"]}
        />
      </Stack>
    </div>
  );
}
