import {
  Box,
  Grid,
  Stack,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import { css } from "@emotion/react";
import { useState } from "react";

import Background from "../assets/community.jpg";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import CardBox from "./communityCard";

const Discover = () => {
  const [search, setSearch] = useState("");

  const styles = {
    mainContainer: css`
      height: 100vh;
      width: 100vw;
      background: url(${Background});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    //   overflow-y: hidden;
    `,
    gridContainer: css`
      background: linear-gradient(
        90deg,
        rgba(253, 251, 252, 0.8744747899159664) 70%,
        rgba(183, 205, 253, 0.87) 70%
      );
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      padding-top: 10vh;
    `,
    gridItemText: css`
      text-align: end;
      word-wrap: break-word;
    `,

    headingText: css`
      letter-spacing: 0.2rem;
      font-weight: bold;
      font-size: 3rem;
    `,
    tagText: css`
      font-size: 0.8rem;
      font-weight: bold;
      padding: 1.5vh 0;
    `,
  };

  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.gridContainer}>
        <Grid container maxWidth={"lg"}>
          <Grid item md={4}></Grid>
          <Grid item md={8} sx={styles.gridItemText}>
            <Typography variant="h2" sx={styles.headingText}>
              Discover Diverse Communities
            </Typography>
            <Typography variant="body1" sx={styles.tagText}>
              Connect, belong, and celebrate uniqueness. Explore inclusive
              communities that cater to diverse interests, from art to tech,
              fostering meaningful connections
            </Typography>
            <TextField
              id="outlined-start-adornment"
              sx={{ m: 1, width: "70%", background: '#fafafa'}}
              size="small"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: search ? (
                  <InputAdornment position="end">
                    <CloseIcon
                      onClick={() => {
                        setSearch("");
                      }}
                      sx={{ cursor: "pointer" }}
                    />
                  </InputAdornment>
                ) : null,
              }}
            />
          </Grid>
          <Grid item md={12} direction={"row"} display={"flex"} columnGap={3}>
              <CardBox />
              <CardBox />
              <CardBox />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Discover;
