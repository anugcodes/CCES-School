import { useState } from "react";

import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
// form sections
import SectionB1 from "../components/section-b1";
import SectionA from "../components/SectionA/sectionA";

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
  background: "#fda",
}));

export default function SurveyForm() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <Container maxWidth="lg">
        <Stack direction="column" spacing={0} sx={{ py: "5rem" }}>
          {/* section A - primary Informaiton */}
          <SectionAccordion
            expanded={expanded === "panel1"}
            onChange={() => {
              handleChange("panel1");
              console.log("clicked");
            }}
            heading="Primary Informaiton"
            section_form={SectionB1}
          />
          <SectionAccordion
            expanded={expanded === "panel2"}
            onChange={() => {
              handleChange("panel2");
              console.log("clicked");
            }}
            heading="Primary Informaiton"
            section_form={SectionA}
          />
        </Stack>
      </Container>
    </div>
  );
}

const SectionAccordion = (props) => {
  const { onChange, expanded, heading, section_form, ...others } = props;
  console.log(onChange, expanded, heading, section_form);

  return (
    <Accordion
      expanded={expanded}
      onChange={(e) => onChange()}
      TransitionProps={{ unmountOnExit: true }}
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
