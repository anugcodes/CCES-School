import { Input, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import { State, City } from "country-state-city";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import TextFieldComponent from "./text-field";
import OptionForm from "./option-form";
import NextButton from "./next-button";

const SectionA = ({ formStatus, set_formStatus }) => {
  const navigate = useNavigate();

  const [a1, set_a1] = useState("");
  const [a2, set_a2] = useState("");
  const [a3, set_a3] = useState("");
  const [a4, set_a4] = useState("");
  const [a5, set_a5] = useState({
    schoolPhone: "",
    mobileNumber: "",
    emailId: "",
  });
  const [a6, set_a6] = useState("");
  const [a7, set_a7] = useState("");
  const [a8, set_a8] = useState("");
  const [a9, set_a9] = useState("");
  const [a10, set_a10] = useState("");
  const [a11, set_a11] = useState("");
  const [a12, set_a12] = useState("");
  const [a13, set_a13] = useState({
    boys: "",
    girls: "",
  });
  const [a14, set_a14] = useState({
    boys: "",
    girls: "",
  });
  const [a15, set_a15] = useState({
    male: "",
    female: "",
  });
  const [a16, set_a16] = useState({
    star_rating: "",
    svp_16_17: "",
    svp_17_18: "",
    svp_18_19: "",
    svp_19_20: "",
    svp_20_21: "",
  });
  const [a17, set_a17] = useState("");
  const [a18, set_a18] = useState("");

  const [state, set_state] = useState("");
  const [city, set_city] = useState("Enter your city");

  const stateList = State.getStatesOfCountry("IN");

  const handleNext = (e) => {
    e.preventDefault();

    if (checkfield(a1) && checkfield(a2) && checkfield(a3)) {
      set_formStatus({ ...formStatus, sectionA: true });
      navigate({ pathname: "/survey/cces", hash: "sectionB1" });
    }
  };

  const checkfield = (field) => {
    if (field && field !== "") {
      return true;
    } else return false;
  };

  return (
    <div>
      <form onSubmit={() => handleNext()}>
        <Stack spacing={3} direction={"column"}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
            <FormControl required fullWidth>
              <FormLabel id="demo-customized-select-label">
                {"Select State"}
              </FormLabel>
              <Select
                variant="outlined"
                size="small"
                value={state}
                onChange={(e) => set_state(e.target.value)}
              >
                {stateList.map((item, index) => (
                  <MenuItem key={index} value={item.isoCode}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl disabled={state === ""} fullWidth required>
              <FormLabel id="demo-customized-select-label">
                {"Select City"}
              </FormLabel>
              <Select
                variant="outlined"
                size="small"
                value={city}
                onChange={(e) => set_city(e.target.value)}
              >
                {City.getCitiesOfState("IN", state).map((item, index) => (
                  <MenuItem key={index} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {state === "" ? "select a state first" : null}
              </FormHelperText>
            </FormControl>

            <TextFieldComponent
              question={a1}
              set_question={set_a1}
              label="U-DISE Code"
              required
              type="string"
              fullWidth
            />
          </Stack>

          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <TextFieldComponent
              question={a2}
              set_question={set_a2}
              label="Name of School and Address"
              required
              fullWidth
              type="string"
            />
            <TextFieldComponent
              question={a3}
              set_question={set_a3}
              label="Name of Respondent"
              required
              fullWidth
              type="string"
            />
            <OptionForm
              question={a4}
              set_question={set_a4}
              label="Designation of Respondent"
              options={[
                "Principal / Head Teacher",
                "In-charge of the school",
                "Teacher",
                "Other staff of the school",
              ]}
              fullWidth
            />
          </Stack>

          <div>
            <Typography variant="subtitle1" color="secondary">
              Contact Details of Respondent
            </Typography>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <TextFieldComponent
                question={a5.schoolPhone}
                set_question={set_a5}
                label="School Phone Number"
                type="number"
                required
                fullWidth
              />
              <TextFieldComponent
                question={a5.mobileNumber}
                set_question={set_a5}
                label="Mobile Number"
                type="number"
                required
                fullWidth
              />

              <TextFieldComponent
                question={a5.emailId}
                set_question={set_a5}
                label="Email Id of the School"
                type="email"
                required
                fullWidth
              />
            </Stack>
          </div>

          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <OptionForm
              fullWidth
              question={a6}
              set_question={set_a6}
              label="School Management (Please select anyone)"
              options={[
                "Government schools",
                "Govt- Kasturba Gandhi Balika Vidyalaya (KGBV)",
                "Govt- Ekalavya Model Residential School",
                "Government-aided Schools",
                "Specified Category Schools - Kendriya Vidyalaya",
                "Navodya Vidyalaya (JNV)",
                "Sainik School",
                "Private Schools",
                "Others",
              ]}
            />
            <OptionForm
              fullWidth
              question={a7}
              set_question={set_a7}
              label="School Type (Please select anyone)"
              options={["Residential", "Non-Residential"]}
            />
            <OptionForm
              fullWidth
              question={a8}
              set_question={set_a8}
              label="Category of School"
              options={[
                "Primary only with grades 1-5",
                "Upper primary with grades 1-8",
                "Higher secondary with grades 1-12",
                "Upper Primary only with grades 6-8",
                "Higher secondary with grades 6-12",
                "Secondary/ Sr. Secondary with grades 1-10",
                "Secondary/ Sr. Secondary with grades 6-10",
                "Secondary/ Sr. Secondary only with grades 9 & 10",
                "Higher secondary with grade 9-12",
                "Higher secondary/ Jr. College only with grades 11 & 12",
              ]}
            />
          </Stack>

          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <OptionForm
              fullWidth
              question={a9}
              set_question={set_a9}
              label="School type (Boys / Girls)"
              options={[
                "All boys' school",
                "All-girls' school",
                "Co-education",
              ]}
            />
            <TextFieldComponent
              fullWidth
              question={a10}
              set_question={set_a10}
              label={"Year of Establishment of School"}
            />
            <OptionForm
              fullWidth
              question={a11}
              set_question={set_a11}
              label="Location of School"
              options={["Urban", "Rural"]}
            />
          </Stack>

          <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
            <FormControl fullWidth>
              <FormLabel>Number of students enrolled in the school</FormLabel>
              <Stack
                direction={"column"}
                spacing={1}
                sx={{ marginLeft: ".25rem" }}
              >
                <Stack direction="row" spacing={2} alignItems={"center"}>
                  <Typography variant="subtitle2">Boys</Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={a13.boys}
                    placeholder="number of boys enrolled"
                    size="small"
                    sx={{ maxWidth: "15rem" }}
                  />
                </Stack>
                <Stack direction="row" spacing={2} alignItems={"center"}>
                  <Typography variant="subtitle2">Girls</Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={a13.girls}
                    placeholder="number of girls enrolled"
                    size="small"
                    sx={{ maxWidth: "15rem" }}
                  />
                </Stack>
              </Stack>
            </FormControl>

            <FormControl fullWidth>
              <FormLabel>Number of Children with Special Needs</FormLabel>
              <Stack
                direction={"column"}
                spacing={1}
                sx={{ marginLeft: ".25rem" }}
              >
                <Stack direction="row" spacing={2} alignItems={"center"}>
                  <Typography variant="subtitle2">Boys</Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={a14.boys}
                    onChange={(e) => set_a14({ ...a14, boys: e.target.value })}
                    placeholder="number of boys enrolled"
                    size="small"
                    sx={{ maxWidth: "15rem" }}
                  />
                </Stack>
                <Stack direction="row" spacing={2} alignItems={"center"}>
                  <Typography variant="subtitle2">Girls</Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={a14.girls}
                    onChange={(e) => set_a14({ ...a14, girls: e.target.value })}
                    placeholder="number of girls enrolled"
                    size="small"
                    sx={{ maxWidth: "15rem" }}
                  />
                </Stack>
              </Stack>
            </FormControl>

            <FormControl fullWidth>
              <FormLabel>Number of Teachers and Staff</FormLabel>
              <Stack
                direction={"column"}
                spacing={1}
                sx={{ marginLeft: ".25rem" }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography variant="subtitle2">Male</Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={a15.boys}
                    onChange={(e) => set_a15({ ...a15, male: e.target.value })}
                    placeholder="number of boys enrolled"
                    size="small"
                    sx={{ maxWidth: "15rem" }}
                  />
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography variant="subtitle2">Female</Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={a15.girls}
                    onChange={(e) =>
                      set_a15({ ...a15, female: e.target.value })
                    }
                    placeholder="number of girls enrolled"
                    size="small"
                    sx={{ maxWidth: "15rem" }}
                  />
                </Stack>
              </Stack>
            </FormControl>
          </Stack>

          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <OptionForm
              fullWidth
              question={a17}
              set_question={set_a17}
              label="Has the school developed Swachhata Action Plan (SAP)?"
              options={["Yes", "No"]}
            />
          </Stack>
          <OptionForm
            fullWidth
            question={a18}
            set_question={set_a18}
            label=" Is the school aware of the requirements of the Standard Operating Procedures (SOPs) for Sustaining Water, Sanitation & Hygiene in schools (https://schooledn.py.gov.in/ssarmsa/pdf/SOP for WASH - 14-10-2021.pdf)?"
            options={["Yes", "No"]}
          />

          <NextButton type="submit" />
        </Stack>
      </form>
    </div>
  );
};

export default SectionA;
