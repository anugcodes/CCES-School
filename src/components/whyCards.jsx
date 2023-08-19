import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

import Image from "../assets/community.jpg";

const CardData = ({ backgroundColor, heading, details, delay }) => {
  return (
    <Box>
    <Card
      sx={{
        maxWidth: "560px",
        width: "100%",
        cursor: "pointer",
        border: "1px solid blue",
        borderRadius: "1.25rem",
        background: `${backgroundColor}`,
      }}
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="6000"
      data-aos-offset="0"
      data-aos-delay={`${delay}`}
    >
      <CardMedia component="img" width="60%" image={Image} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" sx={{ color: "white" }}>
          {heading}
        </Typography>
        <Typography variant="body1" sx={{ color: "#d7d6d6" }}>
          {details}
        </Typography>
      </CardContent>
    </Card>
    </Box>
  );
};

export default CardData;
