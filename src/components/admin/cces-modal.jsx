import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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

export default function CcesFormDataModal(props) {
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
            CCES Section Data - {uDiseCode}
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
            {Object.values(ccesSectionList).map((value, index) => (
              <Tab label={value} key={index} />
            ))}
            <Tab label="Photographs" value={10} />
          </Tabs>
        </Box>

        {Object.keys(ccesSectionList).map((section, index) => {
          return (
            <CustomTabPanel value={tab} index={index} key={index}>
              <Stack direction={"column"} spacing={1}>
                {Object.keys(questions.cces[section]).map((data, index) => (
                  <QuestionListCces
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

        <CustomTabPanel value={tab} index={10}>
          <Box>
            <Grid container spacing={4}>
              {Object.keys(school.sectionB10).map((image, index) => {
                return (
                  <Grid item xs={12} md={6} key={index}>
                    <img
                      src={school.sectionB10[image]?.downloadURL}
                      alt=""
                      width={"100%"}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </CustomTabPanel>
      </Box>
    </Modal>
  );
}
CcesFormDataModal.propTypes = {
  open: PropTypes.object.isRequired,
  set_open: PropTypes.func.isRequired,
  formData: PropTypes.array.isRequired,
};

const ccesSectionList = {
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

function QuestionListCces({ data, section, questionId, school, index }) {
  const schoolData = school[section][questionId];
  const questionData = data.cces[section][questionId];
  return (
    <Box
      sx={{ background: "#cef6ff", padding: ".5rem", borderRadius: ".5rem" }}
    >
      <Typography fontWeight={"bold"}>
        Q{index + 1}){" "}
        {typeof questionData === "object" ? questionData.title : questionData}
      </Typography>

      <Box
        sx={{
          background: "#ceddff",
          marginLeft: "1.5rem",
          padding: ".125rem .75rem",
          borderRadius: ".25rem",
        }}
      >
        {typeof schoolData === "object" ? (
          // Object.keys(schoolData).map((dataList, index) => (
          //   <Typography key={index}>{schoolData[dataList]}</Typography>
          // ))
          Object.keys(schoolData).map((fieldId, index) => {
            return (
              <Stack direction={"row"} spacing={1} key={index}>
                <Typography variant="subtitle1" fontWeight={"bold"}>
                  {questionData[fieldId]}
                </Typography>
                <span>:</span>
                <Typography variant="subtitle1">
                  {schoolData[fieldId]}
                </Typography>
              </Stack>
            );
          })
        ) : (
          <Typography>{schoolData}</Typography>
        )}
      </Box>
    </Box>
  );
}
QuestionListCces.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  section: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  school: PropTypes.object.isRequired,
};
