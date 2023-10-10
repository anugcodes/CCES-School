import { MuiFileInput } from "mui-file-input";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import FormHelperText from "@mui/material/FormHelperText";
import Stack from "@mui/material/Stack";
import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { ccesformStatus } from "../../contexts/formContexts";
import NextButton from "../next-button";

const SectionB10 = () => {
  const { formStatus_cces, set_formStatus_cces, setExpanded_cces, formData } =
    useContext(ccesformStatus);

  const [imageFile1, set_imageFile1] = useState(null);
  const [imageFile2, set_imageFile2] = useState(null);
  const [imageFile3, set_imageFile3] = useState(null);
  const [imageFile4, set_imageFile4] = useState(null);

  const handleSelectPhotos = (e) => {
    e.preventDefault();
    if (
      imageFile1 === null ||
      imageFile2 === null ||
      imageFile3 === null ||
      imageFile4 === null
    )
      return;
    else {
      const section_data = {
        imageFile1: imageFile1,
        imageFile2: imageFile2,
        imageFile3: imageFile3,
        imageFile4: imageFile4,
      };

      // console.log("section b10:", formData);
      formData.current.cces.sectionB10 = section_data;
      set_formStatus_cces({ ...formStatus_cces, sectionB10: true });
      setExpanded_cces(false);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSelectPhotos(e)}>
        <Stack direction="column" spacing={2}>
          <Typography variant="body1">Upload 4 Photographs</Typography>
          <ImageInputField file={imageFile1} set_file={set_imageFile1} />
          <ImageInputField file={imageFile2} set_file={set_imageFile2} />
          <ImageInputField file={imageFile3} set_file={set_imageFile3} />
          <ImageInputField file={imageFile4} set_file={set_imageFile4} />
        </Stack>
        <NextButton type="submit" />
      </form>
    </div>
  );
};

export default SectionB10;

const ImageInputField = (props) => {
  const { file, set_file } = props;
  const [error, set_error] = useState(null);

  const handleFieldChange = (newFile) => {
    // console.log(newFile, "file state", file);
    if (newFile === null) {
      set_file(null);
      return;
    }

    if (newFile?.size < 1000000) {
      set_file(newFile);
      set_error(null);
    } else {
      set_file(null);
      set_error("File size is greater than 1 MB");
    }
  };

  return (
    <FormControl>
      <MuiFileInput
        value={file}
        onChange={handleFieldChange}
        size="small"
        placeholder="Insert Photograph"
        inputProps={{ accept: ".png, .jpeg, .jpg" }}
        error={error !== null}
        required
      />
      <FormHelperText sx={{ color: "red" }}>{error}</FormHelperText>
    </FormControl>
  );
};
ImageInputField.propTypes = {
  file: PropTypes.any,
  set_file: PropTypes.func,
};
