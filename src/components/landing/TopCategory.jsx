import { Box, Grid, Container, Stack, Typography } from "@mui/material";
import { Card, Col, Text } from "@nextui-org/react";

import Boy from "../../assets/mens-section.jpg";
import Girl from "../../assets/womens-section.jpg";
import { css } from "@emotion/react";

const TopCategory = () => {
  const styles = {
    category: css`
      &:hover {
        cursor: pointer;
      }
    `,
    mainContainer: css`
      display: flex;
      justify-content: center;
      // margin: 0 2rem 2rem;
      padding-bottom: 2rem;
    `,
    textStyle: css`
      font-size: 1.5rem;
      font-weight: bold;
      padding: 0.5rem 1rem;
    `,
    image: css`
      max-height: 80vh;

      &:hover{
        cursor: pointer;
        color: #aed640cd;
      }
    `
  };

  return (
    <Box sx={styles.mainContainer}>
    <Typography></Typography>
      <Grid container maxWidth={"xl"}>
        <Grid item xs={6} sm={6} md={6} maxHeight={"80vh"} sx={styles.image} className="image">
          <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1689648162.jpg" alt="" style={{height: '100%', width: '100%'}}/>
        </Grid>
        <Grid item xs={6} sm={6} md={6} maxHeight={"80vh"} sx={styles.image}>
          <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1689648162.jpg" alt="" style={{height: '100%', width: '100%'}}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopCategory;
