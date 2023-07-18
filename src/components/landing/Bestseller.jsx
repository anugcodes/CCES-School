import { Box, Grid, Container, Stack, Typography } from "@mui/material";
import ProductCard from "../productCard/productCard";
import CarouselWithButton from "../corousel/corousel";
import Carousel from "../corousel/cardCarousel";

import productImage from "../../assets/shoe.jpg";
import shirtImage from "../../assets/tshirt.jpg";
import topImage from "../../assets/top.jpg";
import bracelet from "../../assets/bracelet.jpg";
import neckless from "../../assets/neckless.jpg";

import { css } from "@emotion/react"


const Bestseller = () => {

    const styles = {
        mainText: css`
            padding: 1.5rem 0;
            text-align: center;
            font-size: 1.8rem;
            font-weight: bold;
        `,
        cards: css`
        display: flex;
        align-items: center;
        justify-content: center;
        `
    }

    const firstFiveCards = products.slice(0, 5);
  const remainingCards = products.slice(5);

    const renderedCards = firstFiveCards.map((product, index) => (
        <ProductCard products={product} key={index}/>
    ));

    const cardItems = products.map((product, index) => (
        <ProductCard products={product} key={index}/>
    ))

    return(
        <>
        <Typography textAlign={"center"} sx={styles.mainText}>Our Bestseller</Typography>
        <Grid
            container
            spacing={{ xs: 1, sm: 2, md: 3 }}
            maxWidth={"xl"}
          >
              <Grid item xs={2} sm={2} md={12} sx={styles.cards}>
              {cardItems}
              </Grid>
          </Grid>
          </>
    )
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
        Name: "Product5",
        image: shirtImage,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
        price: "Rs. 1200",
      },
      {
        Name: "Product5",
        image: productImage,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
        price: "Rs. 1200",
      },
]

export default Bestseller;