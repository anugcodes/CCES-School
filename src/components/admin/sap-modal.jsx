import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomTabPanel from "../custom-tab-panel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import questions from "../../data/questions.json";

const sapSectionList = {
  section1: "Risk assessment, analysis, preventive measures, Plan",
  section2: "Water",
  section3: "Sanitation",
  section4: "Handwashing with soap & water",
  section5: "Waste Management",
  section6: "O and M",
  section7: "Energy",
  section8: "Environment",
  section9: "Behaviour Change and Capacity Building",
};

export default function SapFormDataModal(props) {
  const { open, set_open, formData } = props;
  const uDiseCode = open.uDiseCode;
  const school = formData.filter((item) => item.uDiseCode === uDiseCode)[0];
  const [tab, set_tab] = useState(0);

  return (
    <Modal
      open={open.open}
      onClose={() => set_open({ ...open, open: false })}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "8%",
          left: "5%",
          width: "90%",
          bgcolor: "#E6F4F1",
          border: "2px solid #000",
          borderRadius: "1rem",
          boxShadow: 24,
          p: 3,
          height: "80vh",
          overflow: "auto",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            SAP Section Data
          </Typography>

          <Button
            variant="text"
            size="small"
            color="error"
            onClick={() => set_open({ ...open, open: false })}
            sx={{ padding: ".5rem" }}
          >
            <CloseIcon />
          </Button>
        </Stack>
        <Box sx={{ marginTop: ".5rem" }}>
          <Tabs
            value={tab}
            onChange={(e, newValue) => set_tab(newValue)}
            aria-label="basic tabs"
            scrollButtons="auto"
            variant="scrollable"
          >
            {Object.values(sapSectionList).map((value, index) => (
              <Tab label={value} key={index} />
            ))}
          </Tabs>
        </Box>

        {Object.keys(sapSectionList).map((section, index) => {
          return (
            <CustomTabPanel value={tab} index={index} key={index}>
              <Stack direction={"column"} spacing={1}>
                {Object.keys(questions.sap[section]).map((data, index) => (
                  <QuestionListSap
                    index={index}
                    data={questions}
                    section={section}
                    questionId={data}
                    school={school}
                    key={index}
                  />
                ))}
              </Stack>
            </CustomTabPanel>
          );
        })}
      </Box>
    </Modal>
  );
}
SapFormDataModal.propTypes = {
  open: PropTypes.object.isRequired,
  set_open: PropTypes.func.isRequired,
  formData: PropTypes.array.isRequired,
};

function QuestionListSap({ data, section, questionId, school, index }) {
  const schoolData = school[section][questionId];
  if (schoolData === "" || schoolData === null) return;
  return (
    <Box
      sx={{ background: "#cef6ff", padding: ".5rem", borderRadius: ".5rem" }}
    >
      <Typography fontWeight={"bold"}>
        Q) {data.sap[section][questionId]}
      </Typography>

      <Box
        sx={{
          background: "#ceddff",
          marginLeft: "1.5rem",
          padding: ".125rem .75rem",
          borderRadius: ".25rem",
        }}
      >
        <Typography>{schoolData}</Typography>
      </Box>
    </Box>
  );
}
QuestionListSap.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  section: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  school: PropTypes.object.isRequired,
};
