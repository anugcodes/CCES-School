import { useState, useRef } from "react";
import PropTypes from "prop-types";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";

// import questions
import questions from "../data/questions.json";

// firebase
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { storage } from "../firebase";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";

// components
import SectionAccordion from "../components/section-accordion";
import CustomTabPanel from "../components/custom-tab-panel";

// footer and navbar
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

// cces form sections
import SectionA from "../components/Cces/sectionA";
import SectionB1 from "../components/Cces/section-b1";
import SectionB2 from "../components/Cces/section-b2";
import SectionB3 from "../components/Cces/section-b3";
import SectionB4 from "../components/Cces/section-b4";
import SectionB5 from "../components/Cces/section-b5";
import SectionB6 from "../components/Cces/section-b6";
import SectionB7 from "../components/Cces/section-b7";
import SectionB8 from "../components/Cces/section-b8";
import SectionB9 from "../components/Cces/section-b9";
import SectionB10 from "../components/Cces/section-b10";

// sap form sections
import Section1 from "../components/SAP/section-1";
import Section2 from "../components/SAP/section-2";
import Section3 from "../components/SAP/section-3";
import Section4 from "../components/SAP/section-4";
import Section5 from "../components/SAP/section-5";
import Section6 from "../components/SAP/section-6";
import Section7 from "../components/SAP/section-7";
import Section8 from "../components/SAP/section-8";
import Section9 from "../components/SAP/section-9";

// cces and sap form status context
import { ccesformStatus, sapformStatus } from "../contexts/formContexts";
import NextButton from "../components/next-button";

export default function SurveyForm() {
  const [expanded_cces, setExpanded_cces] = useState("sectionA");
  const [expanded_sap, setExpanded_sap] = useState("section1");
  const [tab, set_tab] = useState(0);

  // preview modal
  const [ccesModal, set_ccesModal] = useState(false);
  const [sapModal, set_sapModal] = useState(false);

  const formData = useRef({
    uDiseCode: null,
    cces: {
      sectionA: {},
      sectionB1: {},
      sectionB2: {},
      sectionB3: {},
      sectionB4: {},
      sectionB5: {},
      sectionB6: {},
      sectionB7: {},
      sectionB8: {},
      sectionB9: {},
      sectionB10: {},
    },
    sap: {
      section1: {},
      section2: {},
      section3: {},
      section4: {},
      section5: {},
      section6: {},
      section7: {},
      section8: {},
      section9: {},
    },
  });

  const [formStatus_cces, set_formStatus_cces] = useState({
    sectionA: false,
    sectionB1: false,
    sectionB2: false,
    sectionB3: false,
    sectionB4: false,
    sectionB5: false,
    sectionB6: false,
    sectionB7: false,
    sectionB8: false,
    sectionB9: false,
    sectionB10: false,
  });

  const [formStatus_sap, set_formStatus_sap] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
    section6: false,
    section7: false,
    section8: false,
    section9: false,
  });

  // handle change function for cces
  const handleChange = (panel) => {
    if (expanded_cces === panel) return;
    if (expanded_cces !== panel && formStatus_cces[panel] === false) {
      alert("please fill the current section first");
      return;
    }
    if (expanded_cces !== panel && formStatus_cces[panel] === true) {
      setExpanded_cces(panel);
      return;
    }
  };
  // handle change function for sap sections
  const handleChangeSap = (panel) => {
    if (expanded_sap === panel) return;
    if (expanded_sap !== panel && formStatus_sap[panel] === false) {
      alert("please fill the current section first");
      return;
    }
    if (expanded_sap !== panel && formStatus_sap[panel] === true) {
      setExpanded_sap(panel);
      return;
    }
  };

  // handle cces preview
  const handleCcesPreview = () => {
    // console.log("cces preview");
    set_ccesModal(true);
  };

  // sap preview
  const handleSapPreview = () => {
    set_sapModal(true);
  };

  // final submit button function
  const handleFinalSubmit = async () => {
    // console.log("final submit");
    const uid = formData.current.cces.sectionA.a1.toLowerCase();
    const schoolPrimaryInfo = {
      uDiseCode: uid,
      NameAndAddress: formData.current.cces.sectionA.a2,
      Respondent: formData.current.cces.sectionA.a3,
      RespondentDesignation: formData.current.cces.sectionA.a4,
      SchoolPhone: formData.current.cces.sectionA.a5.schoolPhone,
    };
    formData.current.cces["uDiseCode"] = uid;
    formData.current.sap["uDiseCode"] = uid;
    // console.log(formData.current.cces, formData.current.sap);

    let images = formData.current.cces.sectionB10;

    Object.keys(images).forEach(async (image) => {
      const storageRef = ref(
        storage,
        `unicef-images/${images[image].lastModified}-${images[
          image
        ].name.trim()}`
      );
      const uploadTask = uploadBytesResumable(storageRef, images[image]);
      uploadTask.then(async () => {
        // console.log("file upload successfully");
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        images[image]["downloadUrl"] = downloadURL;
      });
    });
    formData.current.cces.sectionB10 = images;

    try {
      await setDoc(doc(db, "UnicefSurveyCces", uid), formData.current.cces);
      await setDoc(doc(db, "UnicefSurveySap", uid), formData.current.sap);
      await setDoc(doc(db, "SchoolInfo", uid), schoolPrimaryInfo);
      // console.log("Database updated successfully!");
    } catch (error) {
      console.error("Error updating database:", error);
    }
  };

  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Box sx={{ padding: "2rem 0" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tab}
              onChange={(e, newValue) => set_tab(newValue)}
              aria-label="basic tabs"
            >
              <Tab label="CCES" disabled />
              <Tab label="SAP" disabled />
            </Tabs>
          </Box>

          <CustomTabPanel value={tab} index={0}>
            <ccesformStatus.Provider
              value={{
                formStatus_cces,
                set_formStatus_cces,
                setExpanded_cces,
                formData,
                set_tab,
              }}
            >
              <Stack direction="column" spacing={0}>
                {/* section A - primary Informaiton */}
                <SectionAccordion
                  sectionId="sectionA"
                  expanded={expanded_cces === "sectionA"}
                  onChange={() => handleChange("sectionA")}
                  heading="Primary Informaiton"
                  section_form={SectionA}
                  formStatus={formStatus_cces}
                />

                {/* section B1: Risk assessment, analysis, preventive measures, Plan */}
                <SectionAccordion
                  sectionId="sectionB1"
                  expanded={expanded_cces === "sectionB1"}
                  onChange={() => handleChange("sectionB1")}
                  heading="Risk assessment, analysis, preventive measures, Plan"
                  section_form={SectionB1}
                  formStatus={formStatus_cces}
                />

                {/* section B1: Water */}
                <SectionAccordion
                  sectionId="sectionB2"
                  expanded={expanded_cces === "sectionB2"}
                  onChange={() => handleChange("sectionB2")}
                  heading="Water"
                  section_form={SectionB2}
                  formStatus={formStatus_cces}
                />

                {/* section B3: Sanitation */}
                <SectionAccordion
                  sectionId="sectionB3"
                  expanded={expanded_cces === "sectionB3"}
                  onChange={() => handleChange("sectionB3")}
                  heading="Sanitation"
                  section_form={SectionB3}
                  formStatus={formStatus_cces}
                />

                {/* section B4: Handwashing with soap */}
                <SectionAccordion
                  sectionId="sectionB4"
                  expanded={expanded_cces === "sectionB4"}
                  onChange={() => handleChange("sectionB4")}
                  heading="Handwashing with soap"
                  section_form={SectionB4}
                  formStatus={formStatus_cces}
                />

                {/* section B5: Waste Management */}
                <SectionAccordion
                  sectionId="sectionB5"
                  expanded={expanded_cces === "sectionB5"}
                  onChange={() => handleChange("sectionB5")}
                  heading="Waste Management"
                  section_form={SectionB5}
                  formStatus={formStatus_cces}
                />

                {/* section B6: Energy */}
                <SectionAccordion
                  sectionId="sectionB6"
                  expanded={expanded_cces === "sectionB6"}
                  onChange={() => handleChange("sectionB6")}
                  heading="Energy"
                  section_form={SectionB6}
                  formStatus={formStatus_cces}
                />

                {/* section B7: Environment */}
                <SectionAccordion
                  sectionId="sectionB7"
                  expanded={expanded_cces === "sectionB7"}
                  onChange={() => handleChange("sectionB7")}
                  heading="Environment"
                  section_form={SectionB7}
                  formStatus={formStatus_cces}
                />

                {/* section B8: O and M */}
                <SectionAccordion
                  sectionId="sectionB8"
                  expanded={expanded_cces === "sectionB8"}
                  onChange={() => handleChange("sectionB8")}
                  heading="O and M"
                  section_form={SectionB8}
                  formStatus={formStatus_cces}
                />

                {/* section B9: Capacity Building and Behaviour Change */}
                <SectionAccordion
                  sectionId="sectionB9"
                  expanded={expanded_cces === "sectionB9"}
                  onChange={() => handleChange("sectionB9")}
                  heading="Capacity Building and Behaviour Change"
                  section_form={SectionB9}
                  formStatus={formStatus_cces}
                />

                {/*Image input */}
                <SectionAccordion
                  sectionId="sectionB10"
                  expanded={expanded_cces === "sectionB10"}
                  onChange={() => handleChange("sectionB10")}
                  heading="Photographs"
                  section_form={SectionB10}
                  formStatus={formStatus_cces}
                />

                <NextButton
                  disabled={
                    !Object.keys(formStatus_cces).reduce(
                      (total_status, section) => {
                        return total_status && formStatus_cces[section];
                      },
                      true
                    )
                  }
                  title="Preview"
                  onClick={() => handleCcesPreview()}
                />
              </Stack>
            </ccesformStatus.Provider>
          </CustomTabPanel>

          <CustomTabPanel value={tab} index={1}>
            <sapformStatus.Provider
              value={{
                formStatus_sap,
                set_formStatus_sap,
                setExpanded_sap,
                formData,
              }}
            >
              <SectionAccordion
                sectionId="section1"
                expanded={expanded_sap === "section1"}
                onChange={() => handleChangeSap("section1")}
                heading="Risk assessment, analysis, preventive measures, Plan"
                section_form={Section1}
                formStatus={formStatus_sap}
              />

              {/* section B1: Water */}
              <SectionAccordion
                sectionId="section2"
                expanded={expanded_sap === "section2"}
                onChange={() => handleChangeSap("section2")}
                heading="Water"
                section_form={Section2}
                formStatus={formStatus_sap}
              />

              {/* section B3: Sanitation */}
              <SectionAccordion
                sectionId="section3"
                expanded={expanded_sap === "section3"}
                onChange={() => handleChangeSap("section3")}
                heading="Sanitation"
                section_form={Section3}
                formStatus={formStatus_sap}
              />

              {/* section B4: Handwashing with soap */}
              <SectionAccordion
                sectionId="section4"
                expanded={expanded_sap === "section4"}
                onChange={() => handleChangeSap("section4")}
                heading="Handwashing with Soap & Water"
                section_form={Section4}
                formStatus={formStatus_sap}
              />

              {/* section B5: Waste Management */}
              <SectionAccordion
                sectionId="section5"
                expanded={expanded_sap === "section5"}
                onChange={() => handleChangeSap("section5")}
                heading="Waste Management"
                section_form={Section5}
                formStatus={formStatus_sap}
              />

              {/* section B6: Energy */}
              <SectionAccordion
                sectionId="section6"
                expanded={expanded_sap === "section6"}
                onChange={() => handleChangeSap("section6")}
                heading="O and M"
                section_form={Section6}
                formStatus={formStatus_sap}
              />

              {/* section B7: Environment */}
              <SectionAccordion
                sectionId="section7"
                expanded={expanded_sap === "section7"}
                onChange={() => handleChangeSap("section7")}
                heading="Energy"
                section_form={Section7}
                formStatus={formStatus_sap}
              />

              {/* section B8: O and M */}
              <SectionAccordion
                sectionId="section8"
                expanded={expanded_sap === "section8"}
                onChange={() => handleChangeSap("section8")}
                heading="Environment"
                section_form={Section8}
                formStatus={formStatus_sap}
              />

              {/* section B9: Capacity Building and Behaviour Change */}
              <SectionAccordion
                sectionId="section9"
                expanded={expanded_sap === "section9"}
                onChange={() => handleChangeSap("section9")}
                heading="Behavior Change & Capacity Building"
                section_form={Section9}
                formStatus={formStatus_sap}
              />

              <NextButton
                onClick={() => handleSapPreview()}
                title="Preview"
                disabled={
                  !Object.keys(formStatus_sap).reduce(
                    (total_status, section) => {
                      return total_status && formStatus_sap[section];
                    },
                    true
                  )
                }
              />
            </sapformStatus.Provider>
          </CustomTabPanel>

          {Object.keys(formStatus_cces).reduce((total_status, section) => {
            return total_status && formStatus_cces[section];
          }, true) === true && (
            <CcesPreviewModal
              open={ccesModal}
              set_open={set_ccesModal}
              formData={formData.current}
              set_Expanded={setExpanded_cces}
              set_SectionTab={set_tab}
            />
          )}

          <SapPreviewModal
            open={sapModal}
            set_open={set_sapModal}
            formData={formData.current}
            set_Expanded={setExpanded_cces}
            finalSubmitFunc={handleFinalSubmit}
          />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

const CcesPreviewModal = (props) => {
  const { open, set_open, formData, set_Expanded, set_SectionTab } = props;
  const [tab, set_tab] = useState(0);

  return (
    <Modal
      open={open}
      onClose={() => set_open(false)}
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
            CCES Section Data Preview
          </Typography>

          <Button
            variant="text"
            size="small"
            color="error"
            onClick={() => set_open(false)}
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
                    school={formData}
                    key={index}
                  />
                ))}
              </Stack>
              <Stack direction={"row"} spacing={2}>
                <NextButton
                  title={"Edit"}
                  onClick={() => {
                    set_open(false);
                    set_Expanded(section);
                    window.scrollTo(0, 0);
                  }}
                />
                <NextButton
                  title={"Move to SAP"}
                  onClick={() => {
                    set_open(false);
                    set_Expanded(false);
                    set_SectionTab(1);
                    window.scrollTo(0, 0);
                  }}
                />
              </Stack>
            </CustomTabPanel>
          );
        })}
      </Box>
    </Modal>
  );
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

const SapPreviewModal = (props) => {
  const navigate = useNavigate();
  const { open, set_open, formData, set_Expanded, finalSubmitFunc } = props;
  const [tab, set_tab] = useState(0);

  return (
    <Modal
      open={open}
      onClose={() => set_open(false)}
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
            Sap Section Data Preview
          </Typography>

          <Button
            variant="text"
            size="small"
            color="error"
            onClick={() => set_open(false)}
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

        {/* data */}
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
                    school={formData}
                    key={index}
                  />
                ))}
              </Stack>
              <Stack direction={"row"} spacing={2}>
                <NextButton
                  title={"Edit"}
                  onClick={() => {
                    set_open(false);
                    set_Expanded(section);
                    window.scrollTo(0, 0);
                  }}
                />
                <NextButton
                  title={"Final Submit"}
                  onClick={(e) => {
                    set_open(false);
                    set_Expanded(false);
                    finalSubmitFunc(e);
                    navigate({ pathname: "/successfulsubmission" });
                  }}
                />
              </Stack>
            </CustomTabPanel>
          );
        })}
      </Box>
    </Modal>
  );
};

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

function QuestionListCces({ data, section, questionId, school, index }) {
  const schoolData = school.cces[section][questionId];
  const questionData = data.cces[section][questionId];
  // console.log(schoolData, questionData);
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

function QuestionListSap({ data, section, questionId, school, index }) {
  const schoolData = school.sap[section][questionId];
  const questionData = data.sap[section][questionId];
  // console.log(schoolData, questionData);
  if (schoolData === "" || schoolData === null) {
    return null;
  }
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

SapPreviewModal.propTypes = {
  open: PropTypes.object.isRequired,
  set_open: PropTypes.func.isRequired,
  formData: PropTypes.array.isRequired,
};

CcesPreviewModal.propTypes = {
  open: PropTypes.object.isRequired,
  set_open: PropTypes.func.isRequired,
  formData: PropTypes.array.isRequired,
};
QuestionListSap.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  section: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  school: PropTypes.object.isRequired,
};
QuestionListCces.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  section: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  school: PropTypes.object.isRequired,
};
