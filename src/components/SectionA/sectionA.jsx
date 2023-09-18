import {
  Box,
  Grid,
  Stack,
  Typography,
  Select,
  Input,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  FormControlLabel,
  Button
} from "@mui/material";
import { css } from "@emotion/react";
import { useState } from "react";
import { State, City } from "country-state-city";
import { DatePicker } from "@mui/x-date-pickers";

const SectionA = () => {
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a5, setA5] = useState("");
  const [a4, setA4] = useState("");
  const [a6, setA6] = useState("");
  const [a7, setA7] = useState("");
  const [a8, setA8] = useState("");
  const [a9, setA9] = useState("");
  const [a10, setA10] = useState("");
  const [a11, setA11] = useState("");
  const [a19, setA19] = useState("");
  const [a17, setA17] = useState("");
  const [a12, setA12] = useState("");
  //const [a13, setA13] = useState("");
  const [state, setState] = useState("Enter your state");
  const [cityList, setCityList] = useState([]);
  const [city, setCity] = useState("Enter your city");

  const stateList = State.getStatesOfCountry("IN");

  const styles = {
    mainBox: css`
      display: flex;
      justify-content: center;
    `,
  };
  return (
    <Box sx={styles.mainBox}>
      <Grid container maxWidth={"lg"} display={"flex"} flexDirection={"column"}>
        <Typography variant="h3">Personal Information</Typography>

        <Box sx={{ padding: "1rem", background: "#f4e7ff" }}>
          <Stack direction={"column"} spacing={4}>
            <Stack direction={"row"} spacing={4}>
              <Grid item md={6} xs={12}>
                <Stack direction={"column"} spacing={1}>
                  <Typography variant="h6">Select your state</Typography>
                  <Select
                    value={state}
                    defaultValue={"Select your state"}
                    // placeholder="Designation of Respondent"
                    onChange={(e) => {
                      console.log(e.target.value.name);
                      setState(e.target.value);
                      setCityList(
                        City.getCitiesOfState("IN", e.target.value.isoCode)
                      );
                    }}
                    fullWidth
                  >
                    {stateList.map((stateData, index) => (
                      <MenuItem value={stateData} key={index}>
                        {stateData.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>

              <Grid item md={6} xs={12}>
                <Stack direction={"column"} spacing={1}>
                  <Typography variant="h6">Select your city</Typography>
                  <Select
                    value={state}
                    defaultValue={"Select your state"}
                    // placeholder="Designation of Respondent"
                    onChange={(e) => {
                      console.log(e.target.value.name);
                      setState(e.target.value);
                      setCityList(
                        City.getCitiesOfState("IN", e.target.value.isoCode)
                      );
                    }}
                    fullWidth
                  >
                    {stateList.map((stateData, index) => (
                      <MenuItem value={stateData} key={index}>
                        {stateData.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
            </Stack>

            <Stack direction={"row"} spacing={4}>
              <Grid item md={6} xs={12}>
                <Stack direction={"column"} spacing={1}>
                  <Typography variant="h6">U-DISE Code</Typography>
                  <TextField variant="standard" />
                </Stack>
              </Grid>
            </Stack>

            <Stack direction={"row"} spacing={4}>
              <Grid item md={6} xs={12}>
                <Stack direction={"column"} spacing={1}>
                  <Typography variant="h6">Name of school</Typography>
                  <TextField variant="standard" />
                </Stack>
              </Grid>
              <Grid item md={6} xs={12}>
                <Stack direction={"column"} spacing={1}>
                  <Typography variant="h6">Address of school</Typography>
                  <TextField variant="standard" />
                </Stack>
              </Grid>
            </Stack>

            <Stack direction={"row"} spacing={4}>
              <Grid item md={6} xs={12}>
                <Stack direction={"column"} spacing={1}>
                  <Typography variant="h6">Name of the respondent</Typography>
                  <TextField variant="standard" />
                </Stack>
              </Grid>
              <Grid item md={6} xs={12}>
                <Stack
                  direction={"column"}
                  spacing={1}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Typography variant="h6">
                    Designation of Respondent
                  </Typography>
                  <Select
                    value={a4}
                    defaultValue={""}
                    // placeholder="Designation of Respondent"
                    onChange={(e, newvalue) => setA4(newvalue)}
                    size="small"
                  >
                    <MenuItem value={"Principal/Head Teacher"}>
                      Principal/Head Teacher
                    </MenuItem>
                    <MenuItem value={"In-charge Head of the school"}>
                      In-charge Head of the school
                    </MenuItem>
                    <MenuItem value={"Teacher"}>Teacher</MenuItem>
                    <MenuItem value={"Other staff of the school"}>
                      Other Staff of the school
                    </MenuItem>
                  </Select>
                </Stack>
              </Grid>
            </Stack>
            <Stack direction={"row"} spacing={4}>
              <Grid item md={4} xs={12}>
                <Stack direction={"column"} spacing={1}>
                  <Typography variant="h6">School Phone number:*</Typography>
                  <TextField variant="standard" />
                </Stack>
              </Grid>
              <Grid item md={4} xs={12}>
                <Stack
                  direction={"column"}
                  spacing={1}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Typography variant="h6">Mobile No:*</Typography>
                  <TextField variant="standard" />
                </Stack>
              </Grid>
              <Grid item md={4} xs={12}>
                <Stack
                  direction={"column"}
                  spacing={1}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Typography variant="h6">Email Id:*</Typography>
                  <TextField variant="standard" />
                </Stack>
              </Grid>
            </Stack>

            <Stack direction={"row"} spacing={4}>
              <Grid item md={4} xs={12}>
                <Stack direction={"column"} spacing={1}>
                  <Typography variant="h6">
                    School Management (Please select anyone)*
                  </Typography>
                  <Select
                    value={a4}
                    defaultValue={""}
                    // placeholder="Designation of Respondent"
                    onChange={(e, newvalue) => setA4(newvalue)}
                    size="small"
                  >
                    <MenuItem value={"Government schools"}>
                      Government schools
                    </MenuItem>
                    <MenuItem
                      value={"Govt- Kasturba Gandhi Balika Vidyalaya (KGBV)"}
                    >
                      Govt- Kasturba Gandhi Balika Vidyalaya (KGBV)
                    </MenuItem>
                    <MenuItem value={"Govt- Ekalavya Model Residential School"}>
                      Govt- Ekalavya Model Residential School
                    </MenuItem>
                    <MenuItem value={" Government-aided Schools"}>
                      Government-aided Schools
                    </MenuItem>
                    <MenuItem value={"Higher secondary with grades 6-12"}>
                      Higher secondary with grades 6-12
                    </MenuItem>
                    <MenuItem
                      value={"Specified Category Schools - Kendriya Vidyalaya"}
                    >
                      Specified Category Schools - Kendriya Vidyalaya
                    </MenuItem>
                    <MenuItem value={"Navodya Vidyalaya (JNV)"}>
                      Navodya Vidyalaya (JNV)
                    </MenuItem>
                    <MenuItem value={"Sainik School  "}>
                      Sainik School{" "}
                    </MenuItem>
                    <MenuItem value={"Private Schools"}>
                      Private Schools
                    </MenuItem>
                    <MenuItem value={"Others"}>Other</MenuItem>
                  </Select>
                </Stack>
              </Grid>
              <Grid item md={4} xs={12}>
                <Stack
                  direction={"column"}
                  spacing={1}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Typography variant="h6">School type (use)</Typography>
                  <Select
                    value={a4}
                    defaultValue={""}
                    // placeholder="Designation of Respondent"
                    onChange={(e, newvalue) => setA4(newvalue)}
                    size="small"
                  >
                    <MenuItem value={"Residential"}>Residential</MenuItem>
                    <MenuItem value={"Non-Residential"}>
                      Non-Residential
                    </MenuItem>
                  </Select>
                </Stack>
              </Grid>
              <Grid item md={4} xs={12}>
                <Stack
                  direction={"column"}
                  spacing={1}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Typography variant="h6">Category of School</Typography>
                  <Select
                    value={a4}
                    defaultValue={""}
                    // placeholder="Designation of Respondent"
                    onChange={(e, newvalue) => setA4(newvalue)}
                    size="small"
                  >
                    <MenuItem value={"Primary only with grades 1-5"}>
                      Primary only with grades 1-5
                    </MenuItem>
                    <MenuItem value={"Upper primary with grades 1-8"}>
                      Upper primary with grades 1-8 Govt- Kasturba Gandhi Balika
                      Vidyalaya (KGBV)
                    </MenuItem>
                    <MenuItem value={"Higher secondary with grades 1-12"}>
                      Higher secondary with grades 1-12
                    </MenuItem>
                    <MenuItem value={"Upper Primary only with grades 6-8"}>
                      Upper Primary only with grades 6-8
                    </MenuItem>
                    <MenuItem value={"Higher secondary with grades 6-12"}>
                      Higher secondary with grades 6-12
                    </MenuItem>
                    <MenuItem
                      value={"Secondary/ Sr. Secondary with grades 1-10"}
                    >
                      Secondary/ Sr. Secondary with grades 1-10
                    </MenuItem>
                    <MenuItem
                      value={"Secondary/ Sr. Secondary with grades 6-10"}
                    >
                      Secondary/ Sr. Secondary with grades 6-10
                    </MenuItem>
                    <MenuItem
                      value={"Secondary/ Sr. Secondary only with grades 9 & 10"}
                    >
                      Secondary/ Sr. Secondary only with grades 9 & 10
                    </MenuItem>
                    <MenuItem value={"Higher secondary with grade 9-12"}>
                      Higher secondary with grade 9-12
                    </MenuItem>
                    <MenuItem
                      value={
                        "Higher secondary/ Jr. College only with grades 11 & 12"
                      }
                    >
                      Higher secondary/ Jr. College only with grades 11 & 12
                    </MenuItem>
                  </Select>
                </Stack>
              </Grid>
            </Stack>

            <Stack direction={"row"} spacing={4}>
              <Grid item md={4} xs={12}>
                <Stack direction={"column"} spacing={1}>
                  <Typography variant="h6">
                    Year of Establishment of School*
                  </Typography>
                  <DatePicker
                    value={a10}
                    onChange={(e) => setA10(e.target.value)}
                    views={["year"]}
                    sx={{ width: "100%" }}
                    slotProps={{ textField: { size: "small" } }}
                  />
                </Stack>
              </Grid>
              <Grid item md={4} xs={12}>
                <Stack
                  direction={"column"}
                  spacing={1}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Typography variant="h6">Location of School*</Typography>
                  <Select
                    value={a4}
                    defaultValue={""}
                    // placeholder="Designation of Respondent"
                    onChange={(e, newvalue) => setA4(newvalue)}
                    size="small"
                  >
                    <MenuItem value={"Rural Area"}>Rural Area</MenuItem>
                    <MenuItem value={"Urban Area"}>Urban Area</MenuItem>
                  </Select>
                </Stack>
              </Grid>
              <Grid item md={4} xs={12}>
                <Stack
                  direction={"column"}
                  spacing={1}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Typography variant="h6">
                    School type (boys / girls)*
                  </Typography>
                  <Select
                    value={a4}
                    defaultValue={""}
                    // placeholder="Designation of Respondent"
                    onChange={(e, newvalue) => setA4(newvalue)}
                    size="small"
                  >
                    <MenuItem value={"All boys' school"}>
                      All boys’ school
                    </MenuItem>
                    <MenuItem value={"All-girls' school"}>
                      All-girls’ school
                    </MenuItem>
                    <MenuItem value={"Co-education"}>Co-education</MenuItem>
                  </Select>
                </Stack>
              </Grid>
            </Stack>

            <Stack direction={"row"} spacing={4}>
              <Grid item md={6} xs={12}>
                <Stack direction={"column"} spacing={1}>
                  <Typography variant="h6">Name of Board</Typography>
                  <RadioGroup
                    defaultValue=""
                    name="radio-buttons-group"
                    value={a12}
                    onChange={(e) => setA12(e.target.value)}
                  >
                    <Stack direction="row" spacing={2}>
                      <FormControlLabel
                        value="State"
                        control={<Radio />}
                        label="State"
                      />
                      <FormControlLabel
                        value="others"
                        control={<Radio />}
                        label="Others specify board"
                      />
                      {a12 == "others" && (
                        <Input
                          placeholder="specify,"
                          sx={{ marginTop: ".75rem", minWidth: "30%" }}
                          required
                        />
                      )}
                    </Stack>
                  </RadioGroup>
                </Stack>
              </Grid>
            </Stack>

            <Stack direction={"row"} spacing={4}>
              <Grid item md={4} xs={12}>
                <Stack direction={"column"} spacing={1}>
                  <Typography variant="h6">
                    Number of Students enrolled in School
                  </Typography>
                  <Stack spacing={2}>
                    <Input placeholder="Number of Boys" type="number" />
                    <Input placeholder="Number of Girls" type="number" />
                  </Stack>
                </Stack>
              </Grid>
              <Grid item md={4} xs={12}>
                <Stack
                  direction={"column"}
                  spacing={1}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Typography variant="h6">
                    Number of Children with Special Needs:
                  </Typography>
                  <Stack spacing={2}>
                    <Input placeholder="Number of Boys" type="number" />
                    <Input placeholder="Number of Girls" type="number" />
                  </Stack>
                </Stack>
              </Grid>
              <Grid item md={4} xs={12}>
                <Stack
                  direction={"column"}
                  spacing={1}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Typography variant="h6">
                    Number of Teachers and Staff:
                  </Typography>
                  <Stack spacing={2}>
                    <Input placeholder="Number of Male" type="number" />
                    <Input placeholder="Number of Female" type="number" />
                  </Stack>
                </Stack>
              </Grid>
            </Stack>

            <Stack direction={"row"} spacing={4}>
              <Grid item md={12}>
                <Stack direction={"column"} spacing={1}>
                  <Typography variant="h6">Has the school developed Swachhata Action Plan (SAP)?*</Typography>
                  <Select
                  value={a17}
                  defaultValue={""}
                  onChange={(e, newvalue) => setA17(newvalue)}
                >
                  <MenuItem value={"yes"}>yes</MenuItem>
                  <MenuItem value={"no"}>no</MenuItem>
                </Select>
                </Stack>
              </Grid>
            </Stack>

            <Stack direction={"row"} spacing={4}>
              <Grid item md={12}>
                <Stack direction={"column"} spacing={1}>
                  <Typography variant="h6">Is the school aware of the requirements of the Standard Operating Procedures (SOPs) for Sustaining Water, Sanitation & Hygiene in schools <span>
                  (
                  <a
                    href="https://schooledn.py.gov.in/ssarmsa/pdf/SOP for WASH -
                14-10-2021.pdf"
                  >
                    https://schooledn.py.gov.in/ssarmsa/pdf/SOP for WASH -
                    14-10-2021.pdf
                  </a>
                  )?
                </span>*</Typography>
                <Select
                value={a19}
                defaultValue={""}
                onChange={(e, newvalue) => setA19(newvalue)}
              >
                <MenuItem value={"yes"}>yes</MenuItem>
                <MenuItem value={"no"}>no</MenuItem>
              </Select>
                </Stack>
              </Grid>
            </Stack>

            <Stack
                direction={"row"}
                spacing={2}
                sx={{ button: { minWidth: "160px" } }}
              >
                <Button>Save Changes</Button>
                <Button color="warning">Next</Button>
              </Stack>

          </Stack>
        </Box>
      </Grid>
    </Box>
  );
};

export default SectionA;
