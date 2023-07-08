import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { css } from "@emotion/react";

export default function ServiceCard({ products }) {
    const styles = {
      card: css`
        width: 20rem;
        max-width: 30rem;
        &:hover {
          background: #d1e7e8;
          cursor: pointer;
          box-shadow: #c5d1d1 0px 3px 8px;;
        }
  
        @media (min-width: 1100px) {
          width: 15rem;
        }
      `,
    };
    return (
      <>
        <Card sx={styles.card}>
          <CardMedia
            sx={{ height: 180 }}
            image={products.image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {products.Name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {products.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {products.details}
            </Typography>
          </CardContent>
        </Card>
      </>
    );
  }