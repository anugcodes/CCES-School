import { Pagination } from "@nextui-org/react";
import { Container, Box } from "@mui/material";

export default function PaginationTemplate() {
  return (
    <Box>
      <Container maxWidth={"xl"}>
        <Box sx={{width: '100%', display:'flex', justifyContent:'center', padding: '3rem', marginTop: '2rem'}}>
        <Pagination rounded total={10} initialPage={1} color={"secondary"} />
        </Box>
      </Container>
    </Box>
  );
}
