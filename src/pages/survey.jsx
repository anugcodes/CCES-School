import React, { useEffect, useState } from "react";
import { Form, useLocation } from "react-router-dom";
import { Box, Container, Typography, Stack } from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

// sections headings data
import sectionsjson from "../data/sections.json";

import { Country, State, City } from "country-state-city";
import SectionA from "../components/SectionA/sectionA";


export default function SurveyForm() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <SectionA />
    </Box>
  );
}
