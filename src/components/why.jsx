import { Grid, Stack, Typography, Box } from "@mui/material";
import { css } from "@emotion/react";
import Background from "../assets/community.jpg";

import "../css/why-section.css";
import CardData from "./whyCards";

const WhyChoose = () => {
  return (
    <Box
      sx={css`
        background: url(${Background});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      `}
    >
      <Box className="whyMainContainer">
        <Grid className="container" container maxWidth={"lg"} sx={{paddingBottom: '5vh'}}>
          <Grid className="text" item md={10}>
            <Typography
              className="whyHeading"
              sx={css`
                font-size: 4rem;
                font-weight: bold;
                color: #007bff;
                padding-top: 5vh;
              `}
            >
              Why join us?
            </Typography>
            <Typography
              className="whyText"
              sx={css`
                font-size: 1.1rem;
                font-weight: bold;
                padding-top: 2vh;
              `}
            >
              Be the architect of your safe space. With our platform, you have
              the power to build and customize your very own community from the
              ground up. Unleash your passions, expertise, and unique vision to
              create a welcoming haven for like-minded individuals. Whether
              you're passionate about art, gaming, technology
            </Typography>
          </Grid>
          <Grid className="cardContainer" item md={12}>
            <Stack direction={{md: "row"}} spacing={{md: 3, xs: 2}} width={"100%"} alignItems={"center"}>
              <Grid item md={4} xs={10}>
                <CardData
                  backgroundColor={"blue"}
                  heading="Inclusive Community"
                />
              </Grid>
              <Grid item md={4} xs={10}>
                <CardData backgroundColor={"#ff6666"} />
              </Grid>
              <Grid item md={4} xs={10}>
                <CardData backgroundColor={"blue"} />
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const cardData = [
  {
    heading: "Inclusive Community",
    details:
      "Discover a safe and welcoming space where diversity is celebrated, and everyone's identity is embraced. Join a community that values each member's unique journey.",
  },
  {
    heading: "Inclusive Community",
    details:
      "Discover a safe and welcoming space where diversity is celebrated, and everyone's identity is embraced. Join a community that values each member's unique journey.",
  },
  {
    heading: "Inclusive Community",
    details:
      "Discover a safe and welcoming space where diversity is celebrated, and everyone's identity is embraced. Join a community that values each member's unique journey.",
  },
];

export default WhyChoose;
