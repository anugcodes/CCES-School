import { Stack, Typography, Box, Container } from "@mui/material";

import Background from "../assets/community.jpg";

import CardData from "./whyCards";

const WhyChoose = () => {
  return (
    <Box
      sx={{
        background: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(253,251,252,0.8744747899159664) 70%, rgba(253,205,183,0.87) 70%)",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={"column"}
            spacing={3}
            justifyContent={"center"}
            sx={{ p: "3rem 0" }}
          >
            <Box
              className="text"
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-easing="ease-in-sine"
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "normal",
                  color: "#007bff",
                }}
              >
                Why join us?
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                Be the architect of your safe space. With our platform, you have
                the power to build and customize your very own community from
                the ground up. Unleash your passions, expertise, and unique
                vision to create a welcoming haven for like-minded individuals.
                Whether you're passionate about art, gaming, technology
              </Typography>
            </Box>
            <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
              {cardData.map((item, index) => {
                return (
                  <Box key={index}>
                    <CardData
                      heading={item.heading}
                      details={item.details}
                      backgroundColor={item.backgroundColor}
                      delay={index * 500}
                    />
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

const cardData = [
  {
    heading: "Inclusive Community",
    details:
      "Discover a safe and welcoming space where diversity is celebrated, and everyone's identity is embraced. Join a community that values each member's unique journey.",
    backgroundColor: "#007bff",
  },
  {
    heading: "Inclusive Community",
    details:
      "Discover a safe and welcoming space where diversity is celebrated, and everyone's identity is embraced. Join a community that values each member's unique journey.",
    backgroundColor: "#ff6b6b",
  },
  {
    heading: "Inclusive Community",
    details:
      "Discover a safe and welcoming space where diversity is celebrated, and everyone's identity is embraced. Join a community that values each member's unique journey.",
    backgroundColor: "#007bff",
  },
];

export default WhyChoose;
