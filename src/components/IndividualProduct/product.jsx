import { Card } from "@nextui-org/react";
import {
  Grid,
  Box,
  Stack,
  Container,
  Typography,
  Rating,
  TextField,
  Button,
  Divider,
  InputAdornment,
} from "@mui/material";

import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useState } from "react";

import { css } from "@emotion/react";

import Image from "../../assets/shoe.jpg";
import shirt from "../../assets/tshirt.jpg";

const Product = () => {
  const [rating, setRating] = useState(4.4);

  const styles = {
    productName: css`
      font-size: 2rem;
      font-weight: bolder;
    `,
    price: css`
      padding: 1rem 0;
      align-items: center;
    `,
    details: css`
      padding: 3rem 0;
    `
  };

  const label = (value) => {
    if (value < 1.5) {
      return "Very Poor";
    } else if (value >= 1.5 && value < 3) {
      return "Poor";
    } else if (value >= 3 && value < 4) {
      return "Good";
    } else {
      return "Excellent";
    }
  };

  return (
    <Box sx={{paddingTop:'2rem'}}>
      <Container maxWidth="lg">
        <Stack>
          <Grid container maxWidth={"lg"}>
            <Stack spacing={3} direction={{ xs: "column", md: "row" }}>
              <Grid item sm={12} md={4}>
                <Card
                  css={{ w: "100%", h: "400px", boxShadow: "none" }}
                  variant="bordered"
                >
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      src={Image}
                      objectFit="contain"
                      width="100%"
                      height="100%"
                      alt={"shoe"}
                    />
                  </Card.Body>
                </Card>
              </Grid>

              <Grid
                sm={12}
                md={8}
                alignContent={"center"}
                display={"flex"}
                flexWrap={"wrap"}
              >
                <Stack spacing={1}>
                  <Typography sx={styles.productName}>Product1</Typography>
                  <Stack direction={"row"} spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={rating}
                      precision={0.1}
                      readOnly
                    />
                    <Typography>{label(rating)}</Typography>
                  </Stack>
                  <Stack sx={styles.price} direction={"row"} spacing={2}>
                    <Typography
                      sx={{ fontSize: "1.7rem", fontWeight: "bolder" }}
                    >
                      <span>&#8377;</span>165
                    </Typography>
                    <Typography sx={{ textDecoration: "line-through" }}>
                      <span>&#8377;</span>600
                    </Typography>
                    <Typography sx={{ color: "green", fontWeight: "bold" }}>
                      10% off
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Typography variant="body1" fontSize={"1.4rem"}>
                      Coupons For You
                    </Typography>
                    <Typography variant="body1">
                      Special PriceGet extra ₹20 off on 5 item(s) (price
                      inclusive of cashback/coupon)T&C
                    </Typography>
                    <Typography variant="h5" sx={{paddingTop: '1rem'}}>Available Offers</Typography>
                    <Stack spacing={1}>
                      <Typography variant="body1">
                        Eligible for Flipkart Pay Later
                      </Typography>
                      <Typography variant="body1">
                        Buy this product & get Rs.50 off on your next purchase
                        of Fans
                      </Typography>
                      <Typography variant="body1">
                        Buy this product & get Rs.100 off on your next purchase
                        of Fans
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            </Stack>
            
            <Grid container maxWidth={"lg"} rowSpacing={2} columnSpacing={3} sx={styles.details}>
              <Grid
                sm={12}
                md={6}
                direction={"row"}
                display={"flex"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                sx={{padding: '1rem 0'}}
              >
                <Typography>Delivery</Typography>
                <TextField
                  id="standard-search"
                  placeholder="pincode"
                  type="text"
                  variant="standard"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><LocationOnIcon /></InputAdornment>,
                  }}
                />
              </Grid>
              <Grid
                sm={12}
                md={6}
                direction={"row"}
                display={"flex"}
                justifyContent={"space-evenly"}
                sx={{padding: '1rem 0'}}
              >
                <Typography>Highlights</Typography>
                <Stack>
                <ul style={{ listStyleType: "circle" }}>
                <li>Ideal For: Men & Women</li>
                <li>Color: Black</li>
                </ul>
                </Stack>
              </Grid>
              <Grid
                xs={12}
                md={6}
                direction={"row"}
                display={"flex"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                sx={{padding: '1rem 0'}}
              >
                <Typography>Services</Typography>
                <Stack>
                <Typography>Cash On Delivery Available</Typography>
                </Stack>
              </Grid>
              <Grid
                xs={12}
                md={6}
                display={"flex"}
                justifyContent={"space-evenly"}
                sx={{padding: '1rem 0'}}
              >
                <Typography>Seller</Typography>
                <Stack>
                  <a style={{paddingLeft: '1rem'}}>SYGA</a>
                  <ul style={{ listStyleType: "circle" }}>
                    <li>No Return Applicable</li>
                  </ul>
                  <a style={{paddingLeft: '1rem'}}>See other details</a>
                </Stack>
              </Grid>
            </Grid>
            <Grid md={12} xs={12} height={"10vh"}>
              <Container maxWidth={"lg"}>
                <Stack direction={"row"} spacing={4}>
                  <Typography>Description</Typography>
                  <Typography>
                    Perfect For Styling Hair Designed For All Hair Lengths 100%
                    Brand New and High Quality. Hair styling comb set. Each comb
                    has its own styling needs. Ideal for styling or just combing
                    your hair. Durable, Anti-Static Hair Cutting Comb. Perfect
                    for Hair Stylist to Use on All kind of Hair Style. Works
                    well with hair styling and chemical treatments.
                  </Typography>
                </Stack>
              </Container>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Product;
