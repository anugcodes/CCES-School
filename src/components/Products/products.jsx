import Box from "@mui/material/Box";
import {
  Container,
  Typography,
  Grid,
  Stack,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { css } from "@emotion/react";

import productImage from "../../assets/shoe.jpg";

export default function Products() {
  const styles = {
    heading: css`
      text-align: center;
      color: white;
      font-family: "bebas neue";
    `,
    serviceSection: css`
      background-color: #094559;
      min-height: 30vh;
      padding: 3rem 0;
    `,
    cardContainer: css`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      background: white;
      padding: 0 2rem 0 1rem;
      border-radius: 2rem;
    `,
    cardItem: css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,

    mainC: css`
      // padding: 3rem 5rem;
      background: #f0f2f2;

      @media (max-width: 550px) {
        padding: 3rem 1rem;
      }
    `,

    category: css`
    padding: 2rem; 
    background: white;
    border-radius: 2rem;
    `
  };

  return (
    <Box sx={styles.mainC}>
      <Box sx={{width: '100%'}}>
        <Stack direction={{xs: 'column', md: 'row'}} spacing={2}>
        <Stack sx={styles.category}>
        <Typography variant="h5" sx={{color:'black'}}>Collections</Typography>
        <Stack direction={{xs: 'row', md: 'column'}} spacing={{xs: 2, md: 1}}>
        <Typography variant="body1" sx={css`
          color: black;

          &:hover{
            color: skyblue;
            cursor: pointer;
          }
        `}>All</Typography>
        <Typography variant="body1" sx={css`
          color: black;

          &:hover{
            color: skyblue;
            cursor: pointer;
          }
        `}>Shirts</Typography>
        <Typography variant="body1" sx={css`
          color: black;

          &:hover{
            color: skyblue;
            cursor: pointer;
          }
        `}>Shoes</Typography>
        <Typography variant="body1" sx={css`
          color: black;

          &:hover{
            color: skyblue;
            cursor: pointer;
          }
        `}>Tops</Typography>
        <Typography variant="body1" sx={css`
          color: black;

          &:hover{
            color: skyblue;
            cursor: pointer;
          }
        `}>Sarees</Typography>
        </Stack>
        </Stack>
        <Grid container spacing={{xs: 1, sm: 2, md: 3}} sx={styles.cardContainer}>
            {products.map((products, index) => (
              <Grid item xs={6} sm={4} md={3} key={index} sx={styles.cardItem}>
                <ServiceCard products={products} />
              </Grid>
            ))}
          </Grid>
        </Stack>
        </Box>
    </Box>
  );
}

function ServiceCard({ products }) {
  const styles = {
    card: css`
      width: 16rem;
      max-width: 30rem;
      &:hover {
        background: #d1e7e8;
        cursor: pointer;
        box-shadow: #c5d1d1 0px 3px 8px;;
      }

      /* @media (min-width: 1100px) {
        min-width: 15rem;
      } */
    `,
  };
  return (
    <>
      <Card sx={styles.card}>
        <CardMedia
          sx={{ height: 160 }}
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

const products = [
  {
    Name: "Product1",
    image: productImage,
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product2",
    image: productImage,
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product3",
    image: productImage,
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product4",
    image: productImage,
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product5",
    image: productImage,
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product6",
    image: productImage,
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product7",
    image: productImage,
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product7",
    image: productImage,
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product5",
    image: productImage,
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product6",
    image: productImage,
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product7",
    image: productImage,
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product7",
    image: productImage,
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
];
