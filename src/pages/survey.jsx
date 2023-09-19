import { useState } from "react";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import SectionAccordion from "../components/section-accordion";

// form sections
import SectionA from "../components/SectionA/sectionA";
import SectionB1 from "../components/section-b1";
import SectionB3 from "../components/section-b3";
import SectionB4 from "../components/section-b4";
import SectionB5 from "../components/section-b5";
import SectionB6 from "../components/section-b6";
import SectionB7 from "../components/section-b7";
import SectionB2 from "../components/section-b2";
import SectionB8 from "../components/section-b8";
import SectionB9 from "../components/section-b9";

export default function SurveyForm() {
  const [expanded, setExpanded] = useState("sectionA");

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
            expanded={expanded === "sectionA"}
            onChange={handleChange("sectionA")}
            heading="Primary Informaiton"
            section_form={SectionA}
          />

          {/* section B1: Risk assessment, analysis, preventive measures, Plan */}
          <SectionAccordion
            expanded={expanded === "sectionB1"}
            onChange={handleChange("sectionB1")}
            heading="Risk assessment, analysis, preventive measures, Plan"
            section_form={SectionB1}
          />

          {/* section B1: Water */}
          <SectionAccordion
            expanded={expanded === "sectionB2"}
            onChange={handleChange("sectionB2")}
            heading="Water"
            section_form={SectionB2}
          />

          {/* section B3: Sanitation */}
          <SectionAccordion
            expanded={expanded === "sectionB3"}
            onChange={handleChange("sectionB3")}
            heading="Sanitation"
            section_form={SectionB3}
          />

          {/* section B4: Handwashing with soap */}
          <SectionAccordion
            expanded={expanded === "sectionB4"}
            onChange={handleChange("sectionB4")}
            heading="Handwashing with soap"
            section_form={SectionB4}
          />

          {/* section B5: Waste Management */}
          <SectionAccordion
            expanded={expanded === "sectionB5"}
            onChange={handleChange("sectionB5")}
            heading="Waste Management"
            section_form={SectionB5}
          />

          {/* section B6: Energy */}
          <SectionAccordion
            expanded={expanded === "sectionB6"}
            onChange={handleChange("sectionB6")}
            heading="Energy"
            section_form={SectionB6}
          />

          {/* section B7: Environment */}
          <SectionAccordion
            expanded={expanded === "sectionB7"}
            onChange={handleChange("sectionB7")}
            heading="Environment"
            section_form={SectionB7}
          />

          {/* section B8: O and M */}
          <SectionAccordion
            expanded={expanded === "sectionB8"}
            onChange={handleChange("sectionB8")}
            heading="O and M"
            section_form={SectionB8}
          />

          {/* section B9: Capacity Building and Behaviour Change */}
          <SectionAccordion
            expanded={expanded === "sectionB9"}
            onChange={handleChange("sectionB9")}
            heading="Capacity Building and Behaviour Change"
            section_form={SectionB9}
          />
        </Stack>
      </Container>
    </div>
  );
}

const form_sections = {
  sectionA: "Primary Information",
  sectionB1: "Risk assessment, analysis, preventive measures, Plan",
  sectionB2: "Water",
  sectionB3: "Sanitation",
  sectionB4: "Handwashing with soap",
  sectionB5: "Waste Management",
  sectionB6: "Energy",
  sectionB7: "Environment",
  sectionB8: "O and M",
  sectionB9: "Capacity Building and Behaviour Change",
};
