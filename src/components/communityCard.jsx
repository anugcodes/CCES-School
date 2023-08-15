import {
  Box,
  Grid,
  Card,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { css } from "@emotion/react";

import { useState } from "react";

import image from "../assets/bracelet.jpg";

const CardBox = () => {
  const [hovered, setHovered] = useState(false);

  const styles = {
    mainContainer: css`
      max-width: 345px;
      position: relative;
      overflow: hidden;
      transition: all 0.5s ease-in-out;
      transform: translateY(${hovered ? "-100px" : "0"});
      background-color: ${hovered ? "#0033ff" : "#ff6666"};
      color: white;
      // box-shadow: ${hovered ? "none" : "rgba(0, 0, 0, 0.45) 20px 0px 20px -20px"};
      margin: 3vh 1vw;

      &:hover {
        box-shadow: ${hovered ? "none" : "rgba(0, 0, 0, 0.45) 20px 0px 20px -20px"};

        img{
          filter: drop-shadow(5px 5px 5px #222);
        }

        .number {
          text-align: end;
          color: #fafafa;
        }
      }

      img {
        padding: 1rem 1rem 1rem 1rem;
      }

      .number {
        font-weight: bold;
        font-size: 1.3rem;
      }
    `,
    content: css`
      padding: 16px;
      background-color: rgba(255, 255, 255, 0.9);
      transition: transform 0.5s ease-in-out;
      transform-origin: top;
      transform: translateY(${hovered ? "0" : "100%"}); /* Transform on hover */
    `,
  };

  return (
    <Card
      sx={styles.mainContainer}
      className="mainContainer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt="green iguana"
          className="imageDiv"
        />
        <div className="content" style={styles.content}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h5" component="div">
              Community Name 1
            </Typography>
            <Typography
              variant="body2"
              color="#fafafa"
              className="description"
              display={`${hovered? 'block':"none"}`}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="number"
            >
              17.1k+
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardBox;
