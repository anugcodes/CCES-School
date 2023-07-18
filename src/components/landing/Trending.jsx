import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

import { css } from "@emotion/react";

import shoe from "../../assets/shoe.jpg";
import shirt from "../../assets/tshirt.jpg";
import top from "../../assets/top.jpg";
import neckless from "../../assets/neckless.jpg";
import bracelet from "../../assets/bracelet.jpg";

const Trending = () => {
  const styles = {
    mainBox: css`
      // width: 100vw;
      // height: 60vh;
      // padding: 0 0 4rem 0;
    `,
    imagesSection: css`
      max-height: 100%;
    `,
    images: css`
      height: 100%;
      width: 100%;
    `,
    textStyle: css`
      font-size: 1.8rem;
      font-weight: bold;
      text-align: center;
      padding: 1rem 0;
    `,
    productBox: css`
      transition: 0.3s ease;

      &:hover {
        cursor: pointer;
        transform: scale(1.03);
      }
    `,
  };
  return (
    <Box sx={styles.mainBox}>
      <Typography sx={styles.textStyle}>Trending Categories</Typography>
      <Grid
        container
        maxWidth={"lg"}
        sx={styles.imagesSection}
        columnSpacing={1}
      >
        <Grid item xs={3} md={2} sx={styles.productBox}>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/category-box-joggers-m-1684997505.jpg"
            alt=""
            style={{
              height: "80%",
              width: "100%",
              borderRadius: "1rem 1rem 0 0",
            }}
          />
        </Grid>
        <Grid item xs={3} md={2} sx={styles.productBox}>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-m-1685445850.jpg"
            alt=""
            style={{
              height: "80%",
              width: "100%",
              borderRadius: "1rem 1rem 0 0",
            }}
          />
          </Grid>
        <Grid item xs={3} md={2} sx={styles.productBox}>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-m-1685445850.jpg"
            alt=""
            style={{
              height: "80%",
              width: "100%",
              borderRadius: "1rem 1rem 0 0",
            }}
          />
          </Grid>
        <Grid item xs={3} md={2} sx={styles.productBox}>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-m-1685445850.jpg"
            alt=""
            style={{
              height: "80%",
              width: "100%",
              borderRadius: "1rem 1rem 0 0",
            }}
          />
        </Grid>
        <Grid item xs={3} md={2} sx={styles.productBox}>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-shorts-1686063035.jpg"
            alt=""
            style={{
              height: "80%",
              width: "100%",
              borderRadius: "1rem 1rem 0 0",
            }}
          />
        </Grid>
        <Grid item xs={3} md={2} sx={styles.productBox}>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-vests-1686063036.jpg"
            alt=""
            style={{
              height: "80%",
              width: "100%",
              borderRadius: "1rem 1rem 0 0",
            }}
          />
        </Grid>
        <Grid item xs={3} md={2} sx={styles.productBox}>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-w-1685445851.jpg"
            alt=""
            style={{
              height: "80%",
              width: "100%",
              borderRadius: "1rem 1rem 0 0",
            }}
          />
        </Grid>
        <Grid item xs={3} md={2} sx={styles.productBox}>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-w-1685445851.jpg"
            alt=""
            style={{
              height: "80%",
              width: "100%",
              borderRadius: "1rem 1rem 0 0",
            }}
          />
        </Grid>
        <Grid item xs={3} md={2} sx={styles.productBox}>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/category-box-Joggers-Women-1682055633.png"
            alt=""
            style={{
              height: "80%",
              width: "100%",
              borderRadius: "1rem 1rem 0 0",
            }}
          />
        </Grid>
        <Grid item xs={3} md={2} sx={styles.productBox}>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-Dresses-1681725004.jpg"
            alt=""
            style={{
              height: "80%",
              width: "100%",
              borderRadius: "1rem 1rem 0 0",
            }}
          />
        </Grid>
        <Grid item xs={3} md={2} sx={styles.productBox}>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-Dresses-1681725004.jpg"
            alt=""
            style={{
              height: "80%",
              width: "100%",
              borderRadius: "1rem 1rem 0 0",
            }}
          />
        </Grid>
        <Grid item xs={3} md={2} sx={styles.productBox}>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-Dresses-1681725004.jpg"
            alt=""
            style={{
              height: "80%",
              width: "100%",
              borderRadius: "1rem 1rem 0 0",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Trending;
