import { Box, Grid, Container, Stack, Typography } from "@mui/material";
import { Card, Col, Text } from "@nextui-org/react";

import Boy from "../../assets/mens-section.jpg";
import Girl from "../../assets/womens-section.jpg";
import header from "../../assets/bannerHomepage.jpg"
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

      &:hover {
        cursor: pointer;
        color: #aed640cd;
      }
    `,
  };

  return (
    <Box sx={styles.mainContainer}>
      <Typography></Typography>
      <Grid container maxWidth={"xl"} spacing={1}>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          sx={styles.image}
          className="image"
        >
          <img
            src="https://images.bewakoof.com/uploads/grid/app/plus-size-common-1683622044.jpg"
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6} maxHeight={"80vh"} sx={styles.image}>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/mid-size-hygiene-revamp-customise-model-desktop-new-1689142924.jpg"
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={12} sx={styles.image}>
          <img
            src={header}
            alt=""
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopCategory;
