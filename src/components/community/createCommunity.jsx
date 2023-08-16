import { Container, Stack, Typography, Box } from "@mui/material";
import { css } from "@emotion/react";
import Background from "../../assets/community.jpg";
import CommunityCard from "./simpleCard";

const Community = () => {
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
          background: `linear-gradient(
            90deg,
            rgba(253, 251, 252, 0.8744747899159664) 70%,
            rgba(183, 205, 253, 0.87) 70%
          )`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Stack direction={"column"} spacing={2} sx={{ p: "3rem 0" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "normal",
                color: "#007bff",
              }}
            >
              Create your own community
            </Typography>
            <Typography
              variant="body1"
              sx={css`
                font-weight: bold;
              `}
            >
              Be the architect of your safe space. With our platform, you have
              the power to build and customize your very own community from the
              ground up. Unleash your passions, expertise, and unique vision to
              create a welcoming haven for like-minded individuals. Whether
              you're passionate about art, gaming, technology, wellness, or any
              other topic close to your heart, our system gives you the tools to
              foster meaningful connections and empower those who join. Start
              crafting your community today and embark on an exciting journey of
              empowerment, belonging, and shared experiences
            </Typography>
            <CommunityCard />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Community;
