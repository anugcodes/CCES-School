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

import image from "../assets/whatsapp.jpg";

const CardBox = () => {
  const [hovered, setHovered] = useState(false);

  const styles = {
    mainContainer: css`
      max-width: 345px;
      position: relative;
      overflow: hidden;
      transition: all 0.5s ease-in-out;
      transform: translateY(${hovered ? "-110px" : "0"});
      background-color: ${hovered ? "#0033ff" : "#ff6666"};
      color: white;
      margin: 3vh 1vw;
      border-radius: 1rem;

      &:hover {
        box-shadow: ${hovered ? "none" : "rgba(0, 0, 0, 0.45) 20px 0px 20px -20px"};

        img{
          filter: drop-shadow(5px 5px 5px #222);
        }

        .number, .member {
          text-align: end;
          color: #fafafa;
        }

        .button {
          display: block;
          text-align: center;
          border-top: 2px solid #fafafa;
        }
      }

      img {
        padding: 1rem 1rem 1rem 1rem;
      }

      .number {
        font-weight: bolder;
        font-size: 1.4rem;
        line-height: 1.1rem;
        padding-top: 1rem;
      }

      .buttonBox {
        display: flex;
        justify-content: center;
        width: 100%;
      }

      .button {
        display: none;
        color: white;
        font-weight: bold;
        width: 80%;
        border-top: none;
        transition: border-top 0.5s;
        font-size: 1.2rem;
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
            >
              
              <Typography
              className="number">17.1k+</Typography>
              <Typography className="member">Members</Typography>
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
      <CardActions>
        <div className="buttonBox">
        <Button size="small" color="primary" className="button">
          Share
        </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CardBox;
