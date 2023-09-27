import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomTabPanel from "../custom-tab-panel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import questions from "../../data/questions.json";

export default function SchoolDataTab() {
  const [schools, set_schools] = useState([]);
  const [ccesformModal, set_ccesformModal] = useState({
    open: false,
    uDiseCode: "",
  });
  const [sapformModal, set_sapformModal] = useState({
    open: false,
    uDiseCode: "",
  });

  const [cces_formData, set_ccesFormData] = useState([]);
  const [sap_formData, set_sapFormData] = useState([]);

  console.log("cces questions", questions.cces);
  console.log("sap questions", questions.sap);

  useEffect(() => {
    let unsubscribe = onSnapshot(collection(db, "SchoolInfo"), (snapshot) => {
      const updatedList = snapshot.docs.map((doc) => doc.data());
      set_schools(updatedList);
      console.log(updatedList);
    });

    unsubscribe = onSnapshot(collection(db, "UnicefSurveyCces"), (snapshot) => {
      const updatedData = snapshot.docs.map((doc) => doc.data());
      set_ccesFormData(updatedData);
      console.log("cces", updatedData);
    });

    unsubscribe = onSnapshot(collection(db, "UnicefSurveySap"), (snapshot) => {
      const updatedData = snapshot.docs.map((doc) => doc.data());
      set_sapFormData(updatedData);
      console.log("sap", updatedData);
    });
    return () => unsubscribe(); // Unsubscribe from the snapshot listener when the component unmounts
  }, []);

  const rows = schools.map((school, index) => {
    return {
      id: index,
      col1: school.uDiseCode,
      col2: school.NameAndAddress,
      col3: school.Respondent,
      col4: school.RespondentDesignation,
      col5: school.SchoolPhone,
    };
  });

  const columns = [
    { field: "col1", headerName: "U-Dise Code", width: 120 },
    { field: "col2", headerName: "School Name and Address", width: 220 },
    { field: "col3", headerName: "Respondent Name", width: 180 },
    { field: "col4", headerName: "Respondent's Designation", width: 200 },
    { field: "col5", headerName: "School Phone", width: 150 },
    {
      field: "col6",
      headerName: "Cces Data",
      width: 120,
      renderCell: () => <OpenInNewIcon />,
      disableClickEventBubbling: true,
    },
    {
      field: "col7",
      headerName: "Sap Data",
      width: 120,
      renderCell: () => <OpenInNewIcon />,
    },
  ];

  const handleCellClick = (params, event) => {
    // console.log(params);
    const uDiseCode = params.row.col1;
    if (params.field === "col6") {
      set_ccesformModal({ open: true, uDiseCode: uDiseCode });
    } else if (params.field === "col7") {
      set_sapformModal({ open: true, uDiseCode: uDiseCode });
    }
  };
  return (
    <Box
      sx={{
        margin: ".5rem 0",
        padding: "1rem",
        borderRadius: "1rem",
        background: "#eeeeff",
        height: "80vh",
        maxHeight: "82vh",
      }}
    >
      <Typography variant="h6">Schools</Typography>
      <Box sx={{ height: "90%" }}>
        <DataGrid rows={rows} columns={columns} onCellClick={handleCellClick} />
      </Box>
      <CcesFormDataModal open={ccesformModal} set_open={set_ccesformModal} />
      <SapFormDataModal open={sapformModal} set_open={set_sapformModal} />
    </Box>
  );
}

function CcesFormDataModal(props) {
  const { open, set_open } = props;
  const uDiseCode = open.uDiseCode;

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
          bgcolor: "background.paper",
          border: "2px solid #000",
          borderRadius: "1rem",
          boxShadow: 24,
          p: 3,
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
            {Object.values(ccesData).map((value, index) => (
              <Tab label={value} key={index} />
            ))}
          </Tabs>
        </Box>
        <CustomTabPanel value={tab} index={0}>
          <Box>
            {Object.keys(questions.cces["sectionA"]).map((data, index) => (
              <Typography key={index} fontWeight={"bold"}>
                {questions.cces["sectionA"][data]}
              </Typography>
            ))}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={1}>
          <Box>
            {Object.keys(questions.cces["sectionB1"]).map((data, index) => (
              <Typography key={index} fontWeight={"bold"}>
                {questions.cces["sectionB1"][data]}
              </Typography>
            ))}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={2}>
          <Box>
            {Object.keys(questions.cces["sectionB2"]).map((data, index) => (
              <Typography key={index} fontWeight={"bold"}>
                {questions.cces["sectionB2"][data]}
              </Typography>
            ))}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={3}>
          <Box>
            {Object.keys(questions.cces["sectionB3"]).map((data, index) => (
              <Typography key={index} fontWeight={"bold"}>
                {questions.cces["sectionB3"][data]}
              </Typography>
            ))}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={4}>
          <Box>
            {Object.keys(questions.cces["sectionB4"]).map((data, index) => (
              <Typography key={index} fontWeight={"bold"}>
                {questions.cces["sectionB4"][data]}
              </Typography>
            ))}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={5}>
          <Box>
            {Object.keys(questions.cces["sectionB5"]).map((data, index) => (
              <Typography key={index} fontWeight={"bold"}>
                {questions.cces["sectionB5"][data]}
              </Typography>
            ))}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={6}>
          <Box>
            {Object.keys(questions.cces["sectionB6"]).map((data, index) => (
              <Typography key={index} fontWeight={"bold"}>
                {questions.cces["sectionB6"][data]}
              </Typography>
            ))}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={7}>
          <Box>
            {Object.keys(questions.cces["sectionB7"]).map((data, index) => (
              <Typography key={index} fontWeight={"bold"}>
                {questions.cces["sectionB7"][data]}
              </Typography>
            ))}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={8}>
          <Box>
            {Object.keys(questions.cces["sectionB8"]).map((data, index) => (
              <Typography key={index} fontWeight={"bold"}>
                {questions.cces["sectionB8"][data]}
              </Typography>
            ))}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={9}>
          <Box>
            {Object.keys(questions.cces["sectionB9"]).map((data, index) => (
              <Typography key={index} fontWeight={"bold"}>
                {questions.cces["sectionB9"][data]}
              </Typography>
            ))}
          </Box>
        </CustomTabPanel>
      </Box>
    </Modal>
  );
}

const ccesData = {
  a: "Primary Information",
  b1: "Risk assessment, analysis, preventive measures, Plan",
  b2: "Water",
  b3: "Sanitation",
  b4: "Handwashing with soap",
  b5: "Waste Management",
  b6: "Energy",
  b7: "Environment",
  b8: "O and M",
  b9: "Capacity Building and Behaviour Change",
};

function SapFormDataModal(props) {
  const { open, set_open } = props;
  const uDiseCode = open.uDiseCode;

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
          bgcolor: "background.paper",
          border: "2px solid #000",
          borderRadius: "1rem",
          boxShadow: 24,
          p: 3,
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            SAP Section Data - {uDiseCode}
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
            {Object.values(ccesData).map((value, index) => (
              <Tab label={value} key={index} />
            ))}
          </Tabs>
        </Box>
        <CustomTabPanel value={tab} index={0}>
          Primary Information goes here
        </CustomTabPanel>
      </Box>
    </Modal>
  );
}
