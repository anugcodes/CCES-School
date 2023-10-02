import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useContext } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DeleteIcon from "@mui/icons-material/Delete";

import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

// context
import { serverData } from "../../contexts/formContexts";

// components
import CcesFormDataModal from "./cces-modal";
import SapFormDataModal from "./sap-modal";

export default function SchoolDataTab() {
  const { primaryData, ccesData, sapData } = useContext(serverData);
  console.log(ccesData, sapData);

  const [ccesformModal, set_ccesformModal] = useState({
    open: false,
    uDiseCode: "",
  });
  const [sapformModal, set_sapformModal] = useState({
    open: false,
    uDiseCode: "",
  });

  const rows = primaryData.map((school, index) => {
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
      disableClickEventBubbling: true,
    },
    {
      field: "col8",
      headerName: "Delete School",
      width: 120,
      renderCell: () => <DeleteIcon sx={{ color: "red" }} />,
      disableClickEventBubbling: true,
    },
  ];

  const handleCellClick = (params, event) => {
    const uDiseCode = params.row.col1;
    if (params.field === "col6") {
      set_ccesformModal({ open: true, uDiseCode: uDiseCode });
    } else if (params.field === "col7") {
      set_sapformModal({ open: true, uDiseCode: uDiseCode });
    } else if (params.field === "col8") {
      const consent = confirm(
        `Are you sure to delete the school's data?(UDISE Code: ${uDiseCode})`
      );
      if (consent) {
        deleteSchool(uDiseCode);
      } else return;
    }
  };
  // delete a particular school record
  const deleteSchool = async (uDiseCode) => {
    console.log("deleting data for uDise code: ", uDiseCode);
    try {
      await deleteDoc(doc(db, "SchoolInfo", String(uDiseCode)));
      await deleteDoc(doc(db, "UnicefSurveyCces", String(uDiseCode)));
      await deleteDoc(doc(db, "UnicefSurveySap", String(uDiseCode)));
    } catch (error) {
      console.error(error);
      error("error in deleting data");
    }
  };

  return (
    <Box
      sx={{
        margin: ".5rem 0",
        padding: "1rem",
        borderRadius: "1rem",
        background: "#CEF6FF",
        height: "80vh",
        maxHeight: "82vh",
      }}
    >
      <Typography variant="h6" sx={{ color: "#0056B0" }}>
        Schools
      </Typography>
      <Box sx={{ height: "90%" }}>
        <DataGrid rows={rows} columns={columns} onCellClick={handleCellClick} />
      </Box>
      {ccesformModal.open && (
        <CcesFormDataModal
          open={ccesformModal}
          set_open={set_ccesformModal}
          formData={ccesData}
        />
      )}
      {sapformModal.open && (
        <SapFormDataModal
          open={sapformModal}
          set_open={set_sapformModal}
          formData={sapData}
        />
      )}
    </Box>
  );
}
