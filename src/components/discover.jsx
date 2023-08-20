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
    `,
  };

  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.gridContainer}>
        <Container maxWidth="lg">
          <Grid container maxWidth={"lg"} sx={{p:"3rem 0"}}>
            <Grid
              item
              xs={12}
              sx={styles.gridItemText}
              data-aos="fade-left"
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

            <Grid
              item
              md={3}
              xs={10}
              sm={6}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-once="true"
              data-aos-easing="ease-in-sine"
            >
              <CardBox />
            </Grid>
            <Grid
              item
              md={3}
              xs={10}
              sm={6}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="500"
              data-aos-once="true"
              data-aos-easing="ease-in-sine"
            >
              <CardBox />
            </Grid>
            <Grid
              item
              md={3}
              xs={10}
              sm={6}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="1000"
              data-aos-once="true"
              data-aos-easing="ease-in-sine"
            >
              <CardBox />
            </Grid>
            <Grid
              item
              md={3}
              xs={10}
              sm={6}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="1500"
              data-aos-once="true"
              data-aos-easing="ease-in-sine"
            >
              <CardBox />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Discover;
