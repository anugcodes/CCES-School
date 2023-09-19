import { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

// form sections
import SectionB1 from "../components/section-b1";
import SectionB3 from "../components/section-b3";
import SectionB5 from "../components/section-b5";
import SectionB7 from "../components/section-b7";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

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
            // section_form={}
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
            // section_form={SectionB1}
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
            // section_form={}
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

const SectionAccordion = (props) => {
  const { onChange, expanded, heading, section_form, ...others } = props;
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      TransitionProps={{ unmountOnExit: true }}
      {...others}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ width: "100%" }}
        >
          <Typography>{heading}</Typography>
          <Typography variant="subtitle2">pending</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        {section_form === undefined || section_form === null ? (
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        ) : (
          section_form()
        )}
      </AccordionDetails>
    </Accordion>
  );
};

SectionAccordion.propTypes = {
  onChange: PropTypes.func,
  expanded: PropTypes.bool,
  heading: PropTypes.string,
  section_form: PropTypes.func,
  others: PropTypes.any,
};
