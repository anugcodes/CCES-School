import { FormHelperText, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState, useRef } from "react";

import TextField from "@mui/material/TextField";
// import { State, City } from "country-state-city";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

import { MuiTelInput } from "mui-tel-input";
// compoennts
import TextFieldComponent from "./text-field";
import OptionForm from "./option-form";
import NextButton from "./next-button";

// context api
import { ccesformStatus } from "../contexts/formContexts";

// school list data
import schoolList from "../data/school_list.json";

import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";

// sectionA component
const SectionA = () => {
  const { formStatus_cces, set_formStatus_cces, setExpanded_cces, formData } =
    useContext(ccesformStatus);

  const uDiseList = useRef([]);
  const [formerror, set_fromerror] = useState({
    a1: null,
  });

  const [a1, set_a1] = useState(""); //u-Dise code - a1
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
  const [a16, set_a16] = useState("");
  const [a17, set_a17] = useState("");
  const [a18, set_a18] = useState("");
  // const [state, set_state] = useState("");
  // const [city, set_city] = useState("");
  // const stateList = State.getStatesOfCountry("IN");

  // const checkfield = (field) => {
  //   if (field && field !== "") {
  //     return true;
  //   } else return false;
  // };

  function handleNext(e) {
    e.preventDefault();
    // check all fields
    const seciton_data = {
      // state: state,
      // city: city,
      a1: a1,
      a2: a2,
      a3: a3,
      a4: a4,
      a5: a5,
      a6: a6,
      a7: a7,
      a8: a8,
      a9: a9,
      a10: a10,
      a11: a11,
      a12: a12,
      a13: a13,
      a14: a14,
      a15: a15,
      a16: a16,
      a17: a17,
      a18: a18,
    };
    console.log("sectionA:", formData);
    formData.current.uDiseCode = a1;
    formData.current.cces.sectionA = seciton_data;
    set_formStatus_cces({ ...formStatus_cces, sectionA: true });
    setExpanded_cces("sectionB1");
  }

  let new_school_list = schoolList.map((school) => {
    return {
      uDiseCode: school.udise_code,
      school_name: school.school_name,
      school_management: school.school_management,
      school_category: school.school_category,
      school_address: `${school.block},${school.district}`,
    };
  });

  const handleSelectUdise = (e, newValue) => {
    const school_uDiseCode = String(newValue.uDiseCode);
    // console.log(school_uDiseCode);
    if (uDiseList.current.includes(String(newValue.uDiseCode))) {
      set_fromerror({ ...formerror, a1: "UDise Code already took survey" });
    } else {
      set_fromerror({ ...formerror, a1: null });
    }
    const school_name_address = `${newValue.school_name} ${newValue.school_address}`;
    const school_category = newValue.school_category.trim().toLowerCase();
    const school_management = newValue.school_management
      .trim()
      .split("-")[1]
      .toLowerCase();
    // console.log(school_uDiseCode, school_category, school_management);
    set_a1(school_uDiseCode);
    set_a2(school_name_address);
    set_a8(school_category);
    set_a6(school_management);
  };

  const filterOptions = createFilterOptions({
    matchFrom: "start",
    limit: 100,
  });

  // fetch all the udise codes that already took the survey
  useEffect(() => {
    let unsubscribe1 = onSnapshot(collection(db, "SchoolInfo"), (snapshot) => {
      const updatedList = snapshot.docs.map((doc) => doc.data());
      uDiseList.current = updatedList.map((school) => school.uDiseCode);
      console.log(uDiseList.current);
    });
    return unsubscribe1;
  }, []);

  return (
    <div>
      <form onSubmit={(e) => handleNext(e)}>
        <Stack spacing={3} direction={"column"}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
            {/* <FormControl required fullWidth>
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
            </FormControl> */}

            {/* <TextFieldComponent
              question={a1}
              set_question={set_a1}
              label="U-DISE Code"
              required
              type="string"
              fullWidth
              sx={{ maxWidth: "30%" }}
            /> */}

            <FormControl sx={{width: {md: "32%"}}} required error={formerror.a1 !== null} fullWidth>
              <FormLabel>U-Dise Code</FormLabel>
              <Autocomplete
                filterOptions={filterOptions}
                value={a1}
                onChange={(e, newValue) => handleSelectUdise(e, newValue)}
                id="combo-box-demo"
                options={new_school_list.map((school) => {
                  return {
                    ...school,
                    label: `${String(school.uDiseCode)}  -  ${
                      school.school_name
                    }`,
                  };
                })}
                freeSolo
                size="small"
                renderInput={(params) => {
                  return (
                    <TextField
                      variant="outlined"
                      size="small"
                      {...params}
                      required
                    />
                  );
                }}
              />
              {formerror.a1 !== null && (
                <FormHelperText>{formerror.a1}</FormHelperText>
              )}
            </FormControl>
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
              <FormControl required fullWidth>
                <FormLabel>School Phone Number</FormLabel>
                <MuiTelInput
                  value={a5.schoolPhone}
                  defaultCountry={"IN"}
                  size="small"
                  required
                  onlyCountries={["IN"]}
                  onChange={(newValue) => {
                    set_a5({ ...a5, schoolPhone: newValue });
                  }}
                />
              </FormControl>

              <FormControl required fullWidth>
                <FormLabel>Mobile Number</FormLabel>
                <MuiTelInput
                  value={a5.mobileNumber}
                  defaultCountry={"IN"}
                  size="small"
                  required
                  onlyCountries={["IN"]}
                  onChange={(newValue) => {
                    set_a5({ ...a5, mobileNumber: newValue });
                  }}
                />
              </FormControl>

              <FormControl required fullWidth>
                <FormLabel>Email Id</FormLabel>
                <TextField
                  value={a5.emailId}
                  onChange={(e) => set_a5({ ...a5, emailId: e.target.value })}
                  type="email"
                  required
                  size="small"
                />
              </FormControl>
            </Stack>
          </div>

          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <OptionForm
              fullWidth
              question={a6}
              set_question={set_a6}
              label="School Management (Please select anyone)"
              options={[
                "Govt. school",
                "Govt- Kasturba Gandhi Balika Vidyalaya (KGBV)",
                "Govt- Ekalavya Model Residential School",
                "Govt. Aided",
                "Specified Category Schools - Kendriya Vidyalaya",
                "Navodya Vidyalaya (JNV)",
                "Sainik School",
                "Private Schools",
                "Tribal Welfare dept",
                "Social Welfare Department",
                "Dept. of Edn",
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
                "2-Primary with Upper Primary(1-8)",
                "8-Secondary only(9 & 10)",
                "1-Primary only (1-5)",
                "6-Primary with upper primary and secondary(1-10)",
                "7-Upper Primary with secondary(6-10)",
                "11-Hr. Secondary only/Jr. College(11 & 12)",
                "4-Upper Primary only(6-8)",
                "5-Upper Primary with secondary and higher secondary(6-12)",
                "3-Primary with upper primary and secondary and higher secondary(1-12)",
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
              type="number"
              required
            />
            <OptionForm
              fullWidth
              question={a11}
              set_question={set_a11}
              label="Location of School"
              options={["Urban", "Rural"]}
            />
          </Stack>

          <Stack direction="column" spacing={2}>
            <FormControl fullWidth required>
              <FormLabel id="text-field-label">
                Number of students enrolled in school
              </FormLabel>
              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <TextField
                  value={a13.boys}
                  placeholder="number of boys enrolled"
                  onChange={(e) => set_a13({ ...a13, boys: e.target.value })}
                  size="small"
                  type="number"
                  required
                />
                <TextField
                  value={a13.girls}
                  placeholder="number of girls enrolled"
                  onChange={(e) => set_a13({ ...a13, girls: e.target.value })}
                  size="small"
                  type="number"
                  required
                />
              </Stack>
            </FormControl>

            <FormControl fullWidth required>
              <FormLabel id="text-field-label">
                Number of Children with Special Needs
              </FormLabel>
              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <TextField
                  value={a14.boys}
                  placeholder="number of boys enrolled"
                  onChange={(e) => set_a14({ ...a14, boys: e.target.value })}
                  size="small"
                  type="number"
                  required
                />
                <TextField
                  value={a14.girls}
                  placeholder="number of girls enrolled"
                  onChange={(e) => set_a14({ ...a14, girls: e.target.value })}
                  size="small"
                  type="number"
                  required
                />
              </Stack>
            </FormControl>

            <FormControl fullWidth required>
              <FormLabel id="text-field-label">
                Number of Teachers and Staff
              </FormLabel>
              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <TextField
                  value={a15.male}
                  placeholder="number of male staff"
                  onChange={(e) => set_a15({ ...a15, male: e.target.value })}
                  size="small"
                  type="number"
                  required
                />
                <TextField
                  value={a15.female}
                  placeholder="number of female staff"
                  onChange={(e) => set_a15({ ...a15, female: e.target.value })}
                  size="small"
                  type="number"
                  required
                />
              </Stack>
            </FormControl>
          </Stack>

          <TextFieldComponent
            fullWidth
            question={a12}
            set_question={set_a12}
            label={"Name of Board"}
            required
            type="string"
          />

          <TextFieldComponent
            fullWidth
            question={a16}
            set_question={set_a16}
            label="Mention the star rating of awards obtained through SVP?"
            type="string"
            required
          />

          <OptionForm
            fullWidth
            question={a17}
            set_question={set_a17}
            label="Has the school developed Swachhata Action Plan (SAP)?"
            options={["Yes", "No"]}
          />

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
