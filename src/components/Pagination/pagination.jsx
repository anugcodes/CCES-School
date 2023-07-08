import * as React from "react";
import {
  Link,
  MemoryRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { Box, Container } from "@mui/material";
import { css } from "@emotion/react";

function Content() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

  const styles = {
    pageContent: css`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 3rem 0;
        flex-wrap: nowrap;
    `,
  };

  return (
    <Box>
      <Container maxWidth={{xs: 'sm', md: 'xl'}}>
        <Box sx={styles.pageContent}>
        <Pagination
          page={page}
          count={10}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
              {...item}
            />
          )}
          sx={{flexWrap:'nowrap'}}
        />
        </Box>
      </Container>
    </Box>
  );
}

export default function PaginationLink() {
  return (
    <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
      <Routes>
        <Route path="*" element={<Content />} />
      </Routes>
    </MemoryRouter>
  );
}
