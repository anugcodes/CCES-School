import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase";

// components
import DashboardNav from "../../components/admin/dashboard-nav";
import SchoolDataTab from "../../components/admin/school-data";
import FormDataCharts from "../../components/admin/form-charts";

// context api
import { serverData } from "../../contexts/formContexts";

export default function AdminDashboard() {
  const [currentView, set_currentView] = useState(null);

  const [primaryData, set_primaryData] = useState([]);
  const [ccesData, set_ccesData] = useState([]);
  const [sapData, set_sapData] = useState([]);

  useEffect(() => {
    let unsubscribe1 = onSnapshot(collection(db, "SchoolInfo"), (snapshot) => {
      const updatedList = snapshot.docs.map((doc) => doc.data());
      set_primaryData(updatedList);
    });

    let unsubscribe2 = onSnapshot(
      collection(db, "UnicefSurveyCces"),
      (snapshot) => {
        const updatedData = snapshot.docs.map((doc) => doc.data());
        set_ccesData(updatedData);
        // console.log("cces", updatedData);
      }
    );

    let unsubscribe3 = onSnapshot(
      collection(db, "UnicefSurveySap"),
      (snapshot) => {
        const updatedData = snapshot.docs.map((doc) => doc.data());
        set_sapData(updatedData);
        // console.log("cces", updatedData);
      }
    );

    return () => {
      unsubscribe1();
      unsubscribe2();
      unsubscribe3();
    }; // Unsubscribe from the snapshot listener when the component unmounts
  }, []);

  // console.log("primary", primaryData);
  // console.log("cces", ccesData);
  // console.log("sap", sapData);

  return (
    <Box>
      <DashboardNav set_currentView={set_currentView} />
      <Container maxWidth="lg">
        <Box
          sx={{
            margin: ".5rem 0",
            padding: "1rem",
            borderRadius: "1rem",
            background: "#CEF6FF",
          }}
        >
          <Typography variant="subtitle1">
            Total Registered Schools:{"  "}
            <Typography variant="subtitle1" component={"span"}>
              {primaryData.length}
            </Typography>
          </Typography>
        </Box>
        <serverData.Provider value={{ primaryData, ccesData, sapData }}>
          {currentView === "schools" ? <SchoolDataTab /> : <FormDataCharts />}
        </serverData.Provider>
      </Container>
    </Box>
  );
}
