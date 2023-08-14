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

import image from "../assets/bracelet.jpg";

const CardBox = () => {
  return (
    <Card sx={{ maxWidth: 345, height: '50vh', transition: 'all 0.5s ease-out', "&:hover" : {

        height: '60vh',
        background: 'aqua',
        ".number" : {
            textAlign: 'end'
        },

        ".description" : {
            display: 'block'
        },


        "button" : {
            display: 'block'
        }
    } }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{textAlign: "center"}}>
          <Typography gutterBottom variant="h5" component="div">
            Community Name 1
          </Typography>
          <Typography variant="body2" color="text.secondary" display={"none"} className="description">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography variant="body2" color="text.secondary" className="number">
            17.1k+
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" sx={{display: 'none'}}>
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardBox;
