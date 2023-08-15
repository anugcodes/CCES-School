import {
  Card,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import { css } from "@emotion/react";

import Image from "../assets/community.jpg";

const CardData = ({backgroundColor}) => {
  return (
    <Card
      sx={{
        height: "60vh",
        width: "100%",
        cursor: "pointer",
        border: "1px solid blue",
        borderRadius: "1.3rem",
        background: `${backgroundColor}`,
      }}
    >
      <CardMedia
        component="img"
        height="60%"
        image={Image}
        alt="green iguana"
        sx={css``}
      />
      <CardContent
        sx={css`
        `}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={css`
            color: white;
          `}
        >
          Lizard
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={css`
            color: #d7d6d6;
          `}
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardData;
