import { useNavigate, useLocation } from "react-router-dom";
import { UserAuth } from "../../contexts/authContext";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";


export default function AdminDashboard() {
  const { logOut } = UserAuth();
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <Box>
      <Box sx={{ background: "#ddf" }}>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={2} justifyContent={"space-between"} sx={{padding:".5rem"}}>
            <Stack direction={"row"} spacing={2} alignItems={"center"} justifyContent={"center"}>
              <Typography variant="h6">Admin Dashboard</Typography>
              <Button variant="text" size="small" onClick={() => console.log("Data Table clicked")}>Data Table</Button>
              <Button variant="text" size="small" onClick={() => console.log("charts clicked")}>Charts</Button>
            </Stack>
            <Button variant="outlined" size="small" onClick={() => logOut()}>Logout</Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
