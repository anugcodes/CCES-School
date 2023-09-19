import { useState } from "react";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import SectionAccordion from "../components/section-accordion";

// form sections
import SectionA from "../components/SectionA/sectionA";
import SectionB1 from "../components/section-b1";
import SectionB3 from "../components/section-b3";
import SectionB5 from "../components/section-b5";
import SectionB6 from "../components/section-b6";
import SectionB7 from "../components/section-b7";
import SectionB2 from "../components/section-b2";
import SectionA from "../components/SectionA/sectionA";

export default function SurveyForm() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    console.log(panel, expanded);
    setExpanded(newExpanded ? panel : false);
  };

  const handleButtonClick = (panelToClose, panelToOpen) => {
    if (expanded === panelToClose) {
      setExpanded(panelToOpen);
    } else {
      setExpanded(panelToClose);
    }
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Stack direction="column" spacing={0} sx={{ py: "5rem" }}>
          {/* section A - primary Informaiton */}
          <SectionAccordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            heading="Primary Informaiton"
            section_form={SectionA}
          />

          {/* section B1: Risk assessment, analysis, preventive measures, Plan */}
          <SectionAccordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            heading="Risk assessment, analysis, preventive measures, Plan"
            section_form={SectionB1}
          />

          {/* section B1: Water */}
          <SectionAccordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            heading="Water"
            section_form={SectionB2}
          />

          {/* section B3: Sanitation */}
          <SectionAccordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            heading="Sanitation"
            section_form={SectionB3}
          />

          {/* section B4: Handwashing with soap */}
          <SectionAccordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
            heading="Handwashing with soap"
            // section_form={}
          />

          {/* section B5: Waste Management */}
          <SectionAccordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
            heading="Waste Management"
            section_form={SectionB5}
          />

          {/* section B6: Energy */}
          <SectionAccordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
            heading="Energy"
            section_form={SectionB6}
          />

          {/* section B7: Environment */}
          <SectionAccordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
            heading="Environment"
            section_form={SectionB7}
          />

          {/* section B8: O and M */}
          <SectionAccordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
            heading="O and M"
            // section_form={}
          />

          {/* section B9: Capacity Building and Behaviour Change */}
          <SectionAccordion
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
            heading="Capacity Building and Behaviour Change"
            // section_form={}
          />
        </Stack>
      </Container>
    </div>
  );
}
