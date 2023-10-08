import { MuiFileInput } from "mui-file-input";
import { Stack, Box, Typography } from "@mui/material";
import { useState } from "react";

const ImageInput = () => {
  const [image1, setValue1] = useState({});
  const [image2, setValue2] = useState({});
  const [image3, setValue3] = useState({});
  const [image4, setValue4] = useState({});

  const handleChange1 = (newValue) => {
    if (newValue.size <= 1000000) {
      setValue1(newValue);
      console.log(image1);
    } else alert("The given image is too big");
  };
  const handleChange2 = (newValue) => {
    if (newValue.size <= 1000000) {
      setValue2(newValue);
      console.log(image2);
    } else alert("The given image is too big");
  };
  const handleChange3 = (newValue) => {
    if (newValue.size <= 1000000) {
      setValue3(newValue);
      console.log(image3);
    } else alert("The given image is too big");
  };
  const handleChange4 = (newValue) => {
    if (newValue.size <= 1000000) {
      setValue4(newValue);
      console.log(image4);
    } else alert("The given image is too big");
  };

  return (
    <Box>
      <Stack direction={"column"} spacing={0.5}>
        <Typography variant="h4">Enter the images</Typography>
        <Typography>*the file would be of only .png and .jpeg</Typography>
      </Stack>
      <Stack direction={"column"} spacing={3} width={"60%"}>
        <MuiFileInput
          placeholder="Insert a image"
          value={image1}
          onChange={handleChange1}
          inputProps={{ accept: ".png, .jpeg, .jpg" }}
        />
        <MuiFileInput
          placeholder="Insert a image"
          value={image2}
          onChange={handleChange2}
          inputProps={{ accept: ".png, .jpeg, .jpg" }}
        />
        <MuiFileInput
          placeholder="Insert a image"
          value={image3}
          onChange={handleChange3}
          inputProps={{ accept: ".png, .jpeg, .jpg" }}
        />
        <MuiFileInput
          placeholder="Insert a image"
          value={image4}
          onChange={handleChange4}
          inputProps={{ accept: ".png, .jpeg, .jpg" }}
        />
      </Stack>
    </Box>
  );
};

export default ImageInput;
