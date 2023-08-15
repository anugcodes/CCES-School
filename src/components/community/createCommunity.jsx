import { Grid, Stack, Typography, Box } from "@mui/material";
import { css } from "@emotion/react";
import Background from "../../assets/community.jpg";
import CommunityCard from "./simpleCard";

const Community = () => {
  return (
    <Box
      sx={css`
        background: url(${Background});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      `}
    >
      <Box sx={css`
         background: linear-gradient(90deg, rgba(253,251,252,0.8744747899159664) 70%, rgba(183, 205, 253, 0.87) 70%);
    display: flex;
    justify-content: center;
    display: flex;
    justify-content: center;
      `}>
        <Grid container maxWidth={"lg"}>
          <Grid item md={12}>
            <Typography
              sx={css`
                font-size: 4rem;
                font-weight: bold;
                color: #007bff;
                padding-top: 5vh;
              `}
            >
              Create your own community
            </Typography>
            <Typography
              sx={css`
                font-size: 1.1rem;
                font-weight: bold;
                padding-top: 2vh;
              `}
            >
              Be the architect of your safe space. With our platform, you have the power to build and customize your very own community from the ground up. Unleash your passions, expertise, and unique vision to create a welcoming haven for like-minded individuals. Whether you're passionate about art, gaming, technology, wellness, or any other topic close to your heart, our system gives you the tools to foster meaningful connections and empower those who join. Start crafting your community today and embark on an exciting journey of empowerment, belonging, and shared experiences
            </Typography>
          </Grid>
          <Grid item sx={css`
            padding: 15vh 0 10vh 0;
          `}>
            <CommunityCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Community;
