import Box from "@mui/material/Box";
import {
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import { css } from "@emotion/react";

import ProductCard from "../ProductCard/productCard";

import productImage from "../../assets/shoe.jpg";
import shirtImage from "../../assets/tshirt.jpg";
import topImage from "../../assets/top.jpg";
import bracelet from "../../assets/bracelet.jpg";
import neckless from "../../assets/neckless.jpg";

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
    `,
  };

  return (
    <Box sx={styles.mainC}>
      <Box sx={{ width: "100%" }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={0.7}>
          <Stack sx={styles.category} spacing={1}>
            <Typography variant="h5" sx={{ color: "black" }}>
              Collections
            </Typography>
            <Stack
              direction={{ xs: "row", md: "column" }}
              spacing={{ xs: 2, md: 1 }}
            >
              <Typography
                variant="body1"
                sx={css`
                  color: black;

                  &:hover {
                    color: skyblue;
                    cursor: pointer;
                  }
                `}
              >
                All
              </Typography>
              <Typography
                variant="body1"
                sx={css`
                  color: black;

                  &:hover {
                    color: skyblue;
                    cursor: pointer;
                  }
                `}
              >
                Shirts
              </Typography>
              <Typography
                variant="body1"
                sx={css`
                  color: black;

                  &:hover {
                    color: skyblue;
                    cursor: pointer;
                  }
                `}
              >
                Shoes
              </Typography>
              <Typography
                variant="body1"
                sx={css`
                  color: black;

                  &:hover {
                    color: skyblue;
                    cursor: pointer;
                  }
                `}
              >
                Tops
              </Typography>
              <Typography
                variant="body1"
                sx={css`
                  color: black;

                  &:hover {
                    color: skyblue;
                    cursor: pointer;
                  }
                `}
              >
                Sarees
              </Typography>
            </Stack>
          </Stack>
          <Grid
            container
            spacing={{ xs: 1, sm: 2, md: 3 }}
            sx={styles.cardContainer}
          >
            {products.map((products, index) => (
              <Grid item xs={12} sm={4} md={4} key={index} sx={styles.cardItem}>
                <ProductCard products={products} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
}

const products = [
  {
    Name: "Product1",
    image: productImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs.1200",
  },
  {
    Name: "Product2",
    image: productImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product3",
    image: productImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product4",
    image: productImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product5",
    image: shirtImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product6",
    image: shirtImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product7",
    image: shirtImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product7",
    image: shirtImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product5",
    image: topImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product6",
    image: topImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product7",
    image: topImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product7",
    image: topImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product7",
    image: neckless,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product7",
    image: bracelet,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product7",
    image: bracelet,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
];
