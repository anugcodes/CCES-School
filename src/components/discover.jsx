import {
  Box,
  Grid,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Container,
} from "@mui/material";
import { css } from "@emotion/react";
import { useState } from "react";

import Background from "../assets/community.jpg";
import CardBox from "./communityCard";

const Discover = () => {
  const [search, setSearch] = useState("");

  const styles = {
    mainContainer: css`
      background: url(${Background});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
    `,
    gridContainer: css`
      background: linear-gradient(
        90deg,
        rgba(253, 251, 252, 0.8744747899159664) 70%,
        rgba(183, 205, 253, 0.87) 70%
      );
      display: flex;
      justify-content: center;
    `,
    gridItemText: css`
      text-align: end;
      word-wrap: break-word;
      padding: 10vh 0;
      display: flex;
      flex-direction: column;
      align-items: end;

      @media (width < 600px) {
        padding-top: 5vh;
        text-align: center;
        padding-bottom: 0;
      }
    `,

    headingText: css`
      letter-spacing: 0.2rem;
      font-weight: bold;
      color: #0062ff;
    `,
    tagText: css`
      font-weight: bold;
      padding: 1.5vh 0;
    `,
    container: css`
      // max-width: 1200px;
      @media (width < 900px) {
        display: flex;
        justify-content: center;
      }
    `,
  };

  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.gridContainer}>
        <Container maxWidth="lg">
          <Grid container maxWidth={"lg"} sx={styles.container}>
            <Grid item md={2} xs={0}></Grid>
            <Grid
              item
              md={10}
              xs={10}
              sx={styles.gridItemText}
              data-aos="fade-right"
              data-aos-offset="400"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-easing="ease-in-sine"
            >
              <Typography variant="h2" sx={styles.headingText}>
                Discover Diverse Communities
              </Typography>
              <Typography variant="body1" sx={styles.tagText}>
                Connect, belong, and celebrate uniqueness. Explore inclusive
                communities that cater to diverse interests, from art to tech,
                fostering meaningful connections
              </Typography>
            </Grid>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={"center"}
            >
              <Grid item md={3} xs={10} sm={6}>
                <CardBox />
              </Grid>
              <Grid item md={3} xs={10} sm={6}>
                <CardBox />
              </Grid>
              <Grid item md={3} xs={10} sm={6}>
                <CardBox />
              </Grid>
              <Grid item md={3} xs={10} sm={6}>
                <CardBox />
              </Grid>
            </Stack>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Discover;
